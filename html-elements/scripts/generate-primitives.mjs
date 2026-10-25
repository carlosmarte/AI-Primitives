#!/usr/bin/env node
/**
 * generate-primitives.mjs
 *
 * Reads ../SPEC.md (WHATWG HTML element taxonomy: three concatenated JSON
 * documents plus prose), merges the authoritative data, and writes one AI
 * Primitive per HTML element and per DOM node type, plus one custom-element primitive
 * under ../primitives/.
 *
 * Zero dependencies. Run:  node scripts/generate-primitives.mjs
 * Verify:                  node scripts/validate-primitives.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const SPEC_PATH = join(ROOT, 'SPEC.md');
const OUT = join(ROOT, 'primitives');
const DATA = join(HERE, 'data');

const HTML_NS = 'http://www.w3.org/1999/xhtml';
const SVG_NS = 'http://www.w3.org/2000/svg';
const MATHML_NS = 'http://www.w3.org/1998/Math/MathML';
const SYNTAX_SPEC = 'https://html.spec.whatwg.org/multipage/syntax.html#elements-2';
const OPTIONAL_TAGS_SPEC = 'https://html.spec.whatwg.org/multipage/syntax.html#optional-tags';
const NODE_SPEC = 'https://dom.spec.whatwg.org/#interface-node';

// ---------------------------------------------------------------------------
// 1. Extract every top-level JSON document from SPEC.md
// ---------------------------------------------------------------------------
function extractJsonDocuments(text) {
  const lines = text.split('\n');
  const docs = [];
  let buf = null;
  for (const line of lines) {
    if (buf === null) {
      if (line === '{') buf = [line];
      continue;
    }
    buf.push(line);
    if (line === '}') {
      try {
        docs.push(JSON.parse(buf.join('\n')));
      } catch (err) {
        throw new Error(`SPEC.md contains an unparseable JSON block: ${err.message}`);
      }
      buf = null;
    }
  }
  return docs;
}

const specText = readFileSync(SPEC_PATH, 'utf8');
const docs = extractJsonDocuments(specText);

const primary = docs.find((d) => d.metadata && d.metadata.standard && d.elements);
const enriched = docs.find((d) => d.meta && d.meta.method && d.elements);
// The flat taxonomy has element names as top-level keys, so `d.meta` there is the <meta> element, not a metadata block.
const flat = docs.find((d) => !d.elements && d.a && d.a.categories);

if (!primary) throw new Error('SPEC.md: primary taxonomy (metadata.standard + elements) not found');
if (!enriched) throw new Error('SPEC.md: enriched taxonomy (meta.method + elements) not found');

// ---------------------------------------------------------------------------
// 2. Cross-check the two authoritative taxonomies agree before merging
// ---------------------------------------------------------------------------
const normCat = (c) => c.replace(/^Form-associated\//, '');
const elementNames = Object.keys(primary.elements).sort();
if (elementNames.length !== primary.metadata.total_elements) {
  throw new Error(`primary taxonomy lists ${elementNames.length} elements, metadata says ${primary.metadata.total_elements}`);
}
for (const name of elementNames) {
  const a = primary.elements[name];
  const c = enriched.elements[name];
  if (!c) throw new Error(`enriched taxonomy is missing element "${name}"`);
  const aCats = new Set(a.categories);
  const cCats = new Set([...c.categories.map(normCat), ...Object.keys(c.conditional).map(normCat)]);
  if (aCats.size !== cCats.size || [...aCats].some((x) => !cCats.has(x))) {
    throw new Error(`category disagreement for "${name}": ${[...aCats]} vs ${[...cCats]}`);
  }
  if (a.syntax !== c.syntax) throw new Error(`syntax disagreement for "${name}"`);
}
for (const name of Object.keys(enriched.elements)) {
  if (!primary.elements[name]) throw new Error(`primary taxonomy is missing element "${name}"`);
}

// ---------------------------------------------------------------------------
// 3. Authored data (examples, groups, optional tags)
// ---------------------------------------------------------------------------
const readData = (f) => JSON.parse(readFileSync(join(DATA, f), 'utf8'));
const examples = readData('examples.json');
const groupsRaw = readData('groups.json');
const optionalTags = readData('optional-tags.json');

const groupOf = {};
for (const [key, group] of Object.entries(groupsRaw)) {
  if (key.startsWith('_')) continue;
  for (const el of group.elements) {
    if (groupOf[el]) throw new Error(`element "${el}" appears in two groups`);
    groupOf[el] = { id: key, title: group.title };
  }
}
const core = readData('core.json');
const mainBySlug = {};
const mainOfElement = {}; // element -> { slug, is_main, why }
for (const m of core.main) {
  if (mainBySlug[m.slug]) throw new Error(`duplicate main primitive "${m.slug}"`);
  if (!groupsRaw[m.group]) throw new Error(`main primitive "${m.slug}" names unknown group "${m.group}"`);
  if (!core.jobs[m.job]) throw new Error(`main primitive "${m.slug}" names unknown job "${m.job}"`);
  mainBySlug[m.slug] = m;
  for (const el of m.elements) {
    if (mainOfElement[el]) throw new Error(`element "${el}" claimed by two main primitives`);
    mainOfElement[el] = { slug: m.slug, is_main: true, why: m.role };
  }
}
for (const [el, r] of Object.entries(core.reduces_to)) {
  if (mainOfElement[el]) throw new Error(`element "${el}" is both a main primitive and reduces to "${r.main}"`);
  if (!mainBySlug[r.main]) throw new Error(`element "${el}" reduces to unknown main primitive "${r.main}"`);
  mainOfElement[el] = { slug: r.main, is_main: false, why: r.why };
}
for (const name of elementNames) {
  if (!groupOf[name]) throw new Error(`no group for element "${name}"`);
  if (typeof examples[name] !== 'string') throw new Error(`no example for element "${name}"`);
  if (!mainOfElement[name]) throw new Error(`element "${name}" is neither a main primitive nor reduces to one (scripts/data/core.json)`);
}
for (const el of Object.keys(mainOfElement)) if (!primary.elements[el]) throw new Error(`core.json names unknown element "${el}"`);

// ---------------------------------------------------------------------------
// 4. Derived facts
// ---------------------------------------------------------------------------
const FORM_SUBCATEGORIES = new Set([
  'listed',
  'submittable',
  'resettable',
  'autocapitalize-and-autocorrect-inheriting',
  'labelable',
]);

const CATEGORY_DEFINITIONS = {};
for (const row of primary.summary) {
  CATEGORY_DEFINITIONS[row.category] = { definition: row.definition, spec: row.spec_section };
}
const categoryUrl = (cat) => primary.sources.category_definitions[cat] || CATEGORY_DEFINITIONS[cat]?.spec || null;

function syntaxModel(name, kind) {
  const opt = optionalTags[name] || {};
  const base = {
    kind,
    start_tag: opt.start_tag || 'required',
    end_tag: 'required',
    self_closing_start_tag_allowed: false,
    children: 'normal',
    children_note: 'Child content is governed by the element’s content model in its spec definition.',
  };
  switch (kind) {
    case 'void':
      return {
        ...base,
        end_tag: 'forbidden',
        self_closing_start_tag_allowed: true,
        children: 'none',
        children_note: 'Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.',
      };
    case 'raw text':
      return {
        ...base,
        children: 'raw-text',
        children_note: 'Raw text element: contents are text only. Character references are not decoded and child elements cannot be expressed.',
      };
    case 'escapable raw text':
      return {
        ...base,
        children: 'escapable-raw-text',
        children_note: 'Escapable raw text element: contents are text only. Character references are decoded; child elements cannot be expressed.',
      };
    case 'template':
      return {
        ...base,
        children: 'template-contents',
        children_note: 'Template element: parsed children are moved into a DocumentFragment (the template contents) owned by an inert document; they are not children of the element in the DOM.',
      };
    case 'foreign':
      return {
        ...base,
        self_closing_start_tag_allowed: true,
        children: 'foreign',
        children_note: 'Foreign element: contents follow the SVG or MathML specification. Self-closing start tags are honoured inside foreign content.',
      };
    case 'normal':
      return {
        ...base,
        end_tag: opt.end_tag || 'required',
      };
    default:
      throw new Error(`unknown syntax kind "${kind}" for "${name}"`);
  }
}

function namespaceOf(name) {
  if (name === 'svg') return SVG_NS;
  if (name === 'math') return MATHML_NS;
  return HTML_NS;
}

function flagsFor(name) {
  return enriched.flags
    .filter((f) => f.element.split(',').map((s) => s.trim()).includes(name))
    .map((f) => ({ issue: f.issue, resolution: f.resolution, source: 'SPEC.md (enriched taxonomy flags)' }));
}

// ---------------------------------------------------------------------------
// 5. Build element primitives
// ---------------------------------------------------------------------------
const provenanceBase = {
  spec_file: 'html-elements/SPEC.md',
  standard: primary.metadata.standard,
  standard_last_updated: primary.metadata.source_last_updated,
  retrieved_on: primary.metadata.retrieved_on,
};

function buildElementPrimitive(name) {
  const a = primary.elements[name];
  const c = enriched.elements[name];
  const always = a.categories.filter((cat) => !(cat in a.conditional));
  const conditional = { ...a.conditional };
  const all = [...a.categories];
  const contentCats = all.filter((cat) => !FORM_SUBCATEGORIES.has(cat) && cat !== 'Form-associated');
  const formCats = all.filter((cat) => FORM_SUBCATEGORIES.has(cat) || cat === 'Form-associated');

  const notes = [];
  if (a.classification_note) notes.push({ note: a.classification_note, source: 'SPEC.md (primary taxonomy classification_note)' });
  if (c.notes) notes.push({ note: c.notes, source: 'SPEC.md (enriched taxonomy notes)' });

  const parentsShort = Array.isArray(c.parent_requirement) ? c.parent_requirement : [];

  const primitive = {
    $schema: '../../../schema/primitive.schema.json',
    id: `html.element.${name}`,
    kind: 'element',
    name,
    tag: `<${name}>`,
    title: `${name} — ${c.description}`,
    description: c.description,
    group: groupOf[name],
    dom: {
      interface: c.interface,
      node_type: 'Element',
      nodeType: 1,
      namespace: namespaceOf(name),
    },
    content_categories: {
      always: always.filter((cat) => !FORM_SUBCATEGORIES.has(cat) && cat !== 'Form-associated'),
      conditional: Object.fromEntries(Object.entries(conditional).filter(([cat]) => !FORM_SUBCATEGORIES.has(cat) && cat !== 'Form-associated')),
      all: contentCats,
      context_restricted: a.categories.length === 0,
    },
    form_categories: {
      form_associated: formCats.includes('Form-associated'),
      always: always.filter((cat) => FORM_SUBCATEGORIES.has(cat)),
      conditional: Object.fromEntries(Object.entries(conditional).filter(([cat]) => FORM_SUBCATEGORIES.has(cat))),
      all: formCats.filter((cat) => cat !== 'Form-associated'),
    },
    syntax: syntaxModel(name, a.syntax),
    placement: {
      parent_requirement: a.parent_requirement,
      parents: parentsShort,
      note: primary.metadata.parent_requirement_convention,
    },
    classification_notes: notes,
    flags: flagsFor(name),
    main_primitive: {
      slug: mainOfElement[name].slug,
      is_main: mainOfElement[name].is_main,
      elements: mainBySlug[mainOfElement[name].slug].elements,
      job: mainBySlug[mainOfElement[name].slug].job,
      why: mainOfElement[name].why,
      see: 'MAIN-ELEMENTS.md',
    },
    example: examples[name],
    spec: {
      element: primary.sources.element_definitions[name] || null,
      syntax: SYNTAX_SPEC,
      optional_tags: optionalTags[name] ? OPTIONAL_TAGS_SPEC : null,
      categories: Object.fromEntries(all.map((cat) => [cat, categoryUrl(cat)])),
    },
    provenance: {
      ...provenanceBase,
      derived_from_spec: ['description', 'dom.interface', 'content_categories', 'form_categories', 'syntax.kind', 'placement', 'classification_notes', 'flags', 'spec'],
      authored: ['example', 'group', 'main_primitive', 'syntax.start_tag', 'syntax.end_tag', 'syntax.self_closing_start_tag_allowed', 'syntax.children', 'dom.namespace'],
    },
  };
  return primitive;
}

// ---------------------------------------------------------------------------
// 6. Build DOM node primitives
// ---------------------------------------------------------------------------
const NODE_CONSTANTS = {
  Element: 'ELEMENT_NODE',
  Attr: 'ATTRIBUTE_NODE',
  Text: 'TEXT_NODE',
  CDATASection: 'CDATA_SECTION_NODE',
  ProcessingInstruction: 'PROCESSING_INSTRUCTION_NODE',
  Comment: 'COMMENT_NODE',
  Document: 'DOCUMENT_NODE',
  DocumentType: 'DOCUMENT_TYPE_NODE',
  DocumentFragment: 'DOCUMENT_FRAGMENT_NODE',
};

const NODE_AUTHORED = {
  Document: {
    slug: 'document',
    html_serialization: 'Serialized as the concatenation of its children (DocumentType, then the root Element, plus any Comments).',
    create: 'document.implementation.createHTMLDocument(title) or DOMParser.parseFromString(html, "text/html")',
    example: '<!DOCTYPE html>\n<html lang="en">\n  <head><title>Page</title></head>\n  <body></body>\n</html>',
    content_categories: null,
    parent: null,
  },
  DocumentType: {
    slug: 'document-type',
    html_serialization: 'Serialized as <!DOCTYPE name>. In text/html the conforming form is <!DOCTYPE html>.',
    create: 'document.implementation.createDocumentType("html", "", "")',
    example: '<!DOCTYPE html>',
    content_categories: null,
    parent: 'Document (at most one, before the root element)',
  },
  Element: {
    slug: 'element',
    html_serialization: 'Serialized as a start tag with attributes, the serialized children (per the element’s syntax kind), and an end tag unless the element is void.',
    create: 'document.createElement(localName) or document.createElementNS(namespace, qualifiedName)',
    example: '<p class="lead">Text</p>',
    content_categories: 'Determined per element; see the 115 element primitives under primitives/elements/.',
    parent: 'Document (root element), Element, or DocumentFragment',
  },
  Attr: {
    slug: 'attr',
    html_serialization: 'Serialized inside its owner element’s start tag as name="value" with &, ", and U+00A0 escaped. Never appears as a child node.',
    create: 'document.createAttribute(localName) or element.setAttribute(name, value)',
    example: '<a href="/docs" target="_blank">Docs</a>  <!-- href and target are Attr nodes -->',
    content_categories: null,
    parent: 'None. Attached to an Element via its NamedNodeMap (element.attributes); ownerElement points back to it.',
  },
  Text: {
    slug: 'text',
    html_serialization: 'Serialized as escaped text (&, <, >, U+00A0) except when the parent is style, script, xmp, iframe, noembed, noframes, plaintext, or noscript (when scripting is enabled), where it is emitted verbatim.',
    create: 'document.createTextNode(data)',
    example: '<p>This sentence is a Text node inside a p element.</p>',
    content_categories: 'Flow content and Phrasing content. Palpable content only when it is not inter-element whitespace.',
    parent: 'Element or DocumentFragment',
  },
  Comment: {
    slug: 'comment',
    html_serialization: 'Serialized as <!--data-->.',
    create: 'document.createComment(data)',
    example: '<!-- This is a Comment node -->',
    content_categories: null,
    parent: 'Document, Element, or DocumentFragment',
  },
  DocumentFragment: {
    slug: 'document-fragment',
    html_serialization: 'Not serialized itself; its children are serialized in order. Inserting a fragment moves its children into the target and leaves the fragment empty.',
    create: 'document.createDocumentFragment(), a template element’s .content, or element.attachShadow() for a ShadowRoot',
    example: '<template id="row">\n  <tr><td></td></tr>\n</template>\n<!-- document.getElementById("row").content is a DocumentFragment -->',
    content_categories: null,
    parent: 'None. A DocumentFragment is always a root; it is never a child of another node.',
  },
  CDATASection: {
    slug: 'cdata-section',
    html_serialization: 'Not producible by the HTML parser. In text/html, <![CDATA[...]]> is only recognised inside foreign (SVG/MathML) content and parses to a Text node; elsewhere it is a bogus Comment.',
    create: 'document.createCDATASection(data) on an XML document only; it throws NotSupportedError on an HTML document',
    example: '<svg xmlns="http://www.w3.org/2000/svg">\n  <desc><![CDATA[literal <text> here]]></desc>\n</svg>\n<!-- In an XML document this is a CDATASection; the text/html parser yields a Text node -->',
    content_categories: null,
    parent: 'Element or DocumentFragment (XML documents)',
  },
  ProcessingInstruction: {
    slug: 'processing-instruction',
    html_serialization: 'Serialized as <?target data>. The text/html parser never produces one: <?...?> is parsed as a bogus Comment. The DOM API can still create one in an HTML document.',
    create: 'document.createProcessingInstruction(target, data)',
    example: '<?xml-stylesheet type="text/xsl" href="style.xsl"?>',
    content_categories: null,
    parent: 'Document, Element, or DocumentFragment (XML documents)',
  },
};

function buildNodePrimitives() {
  const byInterface = {};
  for (const n of primary.dom_node_types) byInterface[n.interface] = { primary: n };
  for (const n of enriched.dom_node_types.types) {
    if (!byInterface[n.type]) throw new Error(`node type "${n.type}" only in enriched taxonomy`);
    byInterface[n.type].enriched = n;
  }
  const result = [];
  for (const [iface, src] of Object.entries(byInterface)) {
    if (!src.enriched) throw new Error(`node type "${iface}" only in primary taxonomy`);
    if (src.primary.nodeType !== src.enriched.nodeType) throw new Error(`nodeType disagreement for ${iface}`);
    const authored = NODE_AUTHORED[iface];
    if (!authored) throw new Error(`no authored data for node type ${iface}`);
    // The primary note doubles as the description, so only the enriched note is kept as a note.
    const notes = [src.enriched.note].filter(Boolean).map((note) => ({
      note,
      source: 'SPEC.md (enriched taxonomy dom_node_types)',
    }));
    result.push({
      $schema: '../../../schema/primitive.schema.json',
      id: `dom.node.${authored.slug}`,
      kind: 'node',
      name: iface,
      slug: authored.slug,
      title: `${iface} — nodeType ${src.primary.nodeType}`,
      description: src.primary.note,
      dom: {
        interface: iface,
        nodeType: src.primary.nodeType,
        node_type_constant: `Node.${NODE_CONSTANTS[iface]}`,
        applies_to: src.enriched.applies_to,
      },
      content_categories: authored.content_categories,
      placement: { parent: authored.parent },
      serialization: { text_html: authored.html_serialization },
      creation: authored.create,
      notes,
      example: authored.example,
      spec: {
        node: NODE_SPEC,
        dom_node_types: primary.sources.dom_node_types,
      },
      provenance: {
        ...provenanceBase,
        derived_from_spec: ['dom.interface', 'dom.nodeType', 'dom.applies_to', 'description', 'notes'],
        authored: ['slug', 'dom.node_type_constant', 'content_categories', 'placement', 'serialization', 'creation', 'example'],
      },
    });
  }
  return result.sort((x, y) => x.dom.nodeType - y.dom.nodeType);
}

// ---------------------------------------------------------------------------
// 7. Build the single custom-element primitive (all variants inside)
// ---------------------------------------------------------------------------
function buildCustomElementPrimitive() {
  const fam = primary.custom_element_families;
  const auto = fam.autonomous_custom_elements;
  const face = fam.form_associated_custom_elements;
  const builtin = fam.customized_built_in_elements;
  const faceForm = face.additional_categories.filter((c) => c !== 'Form-associated');
  const NAME_RULE_SPEC = 'https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name';

  return {
    $schema: '../../schema/primitive.schema.json',
    id: 'html.custom-element',
    kind: 'custom-element',
    name: 'custom element',
    tag: '<name-with-dash>',
    title: 'Custom element \u2014 author-defined element name containing a hyphen',
    description: 'Any element whose custom element name is a valid hyphenated name registered through customElements.define(). Names cannot be enumerated, so one primitive covers the whole family. Three variants exist and share the same naming rule; they differ only in the base class they extend and in the categories they gain.',
    dom: {
      interface: 'HTMLElement (autonomous and form-associated) or the extended built-in interface (customized built-in), subclassed by the author',
      node_type: 'Element',
      nodeType: 1,
      namespace: HTML_NS,
    },
    naming: {
      rule: 'Valid custom element name: begins with [a-z], contains at least one hyphen, contains no uppercase ASCII letters, and is not a reserved hyphenated name (annotation-xml, color-profile, font-face, font-face-src, font-face-uri, font-face-format, font-face-name, missing-glyph).',
      spec: NAME_RULE_SPEC,
      registration: 'customElements.define(name, constructor[, { extends }])',
    },
    content_categories: { always: auto.categories, conditional: {}, all: auto.categories, context_restricted: false, note: 'Applies to the autonomous and form-associated variants. A customized built-in element takes the categories of its built-in local name instead.' },
    form_categories: { form_associated: false, always: [], conditional: {}, all: [], note: 'Autonomous variant: none. Form-associated variant: see variants.form-associated. Customized built-in variant: those of the built-in local name.' },
    syntax: { ...syntaxModel('custom-element', auto.syntax), note: 'Applies to the autonomous and form-associated variants; a customized built-in element keeps the syntax kind of its built-in local name.' },
    placement: { parent_requirement: null, parents: [], note: 'Allowed wherever flow or phrasing content is expected, subject to the enclosing content model. A customized built-in element follows the placement of its built-in local name.' },
    variants: {
      autonomous: {
        title: 'Autonomous custom element',
        description: 'Extends HTMLElement directly and is written with its own tag name.',
        interface: 'HTMLElement (author subclass)',
        content_categories: auto.categories,
        form_categories: [],
        form_associated: false,
        syntax: auto.syntax,
        example: '<user-card name="Ada"></user-card>\n<script>\n  customElements.define("user-card", class extends HTMLElement {});\n</script>',
        spec: auto.spec_section,
      },
      'form-associated': {
        title: 'Form-associated custom element',
        description: 'An autonomous custom element whose class sets static formAssociated = true. It gains a form owner through ElementInternals and joins the listed form categories in addition to the autonomous categories.',
        interface: 'HTMLElement (author subclass with static formAssociated = true)',
        content_categories: auto.categories,
        form_categories: faceForm,
        form_associated: true,
        syntax: auto.syntax,
        note: face.note,
        example: '<form>\n  <fancy-input name="nickname"></fancy-input>\n</form>\n<script>\n  customElements.define("fancy-input", class extends HTMLElement {\n    static formAssociated = true;\n    #internals = this.attachInternals();\n  });\n</script>',
        spec: face.spec_section,
      },
      'customized-built-in': {
        title: 'Customized built-in element',
        description: 'Extends a built-in element\u2019s interface and is used through the is="" attribute on the built-in tag. The hyphenated name is the is value; no new element name is introduced.',
        interface: 'The built-in element\u2019s interface (for example HTMLButtonElement), subclassed by the author',
        content_categories: 'inherited from the built-in local name',
        form_categories: 'inherited from the built-in local name',
        form_associated: 'inherited from the built-in local name',
        syntax: 'inherited from the built-in local name',
        note: builtin.note,
        example: '<button is="fancy-button">Click</button>\n<script>\n  customElements.define("fancy-button", class extends HTMLButtonElement {}, { extends: "button" });\n</script>',
        spec: 'https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element',
      },
    },
    example: '<user-card name="Ada"></user-card>\n<script>\n  customElements.define("user-card", class extends HTMLElement {});\n</script>',
    spec: {
      family: auto.spec_section,
      naming: NAME_RULE_SPEC,
      categories: Object.fromEntries([...auto.categories, ...face.additional_categories].map((c) => [c, categoryUrl(c)])),
    },
    provenance: {
      ...provenanceBase,
      derived_from_spec: ['content_categories.always', 'syntax.kind', 'variants.*.content_categories', 'variants.*.form_categories', 'variants.form-associated.note', 'variants.customized-built-in.note', 'spec.family', 'variants.*.spec'],
      authored: ['description', 'naming', 'dom.interface', 'placement', 'syntax.start_tag', 'syntax.end_tag', 'syntax.children', 'variants.*.description', 'variants.*.example', 'example'],
    },
  };
}

// ---------------------------------------------------------------------------
// 8. Markdown rendering
// ---------------------------------------------------------------------------
const fence = (code, lang = 'html') => '```' + lang + '\n' + code + '\n```';
const list = (items) => items.map((i) => `- ${i}`).join('\n');
const catLink = (cat, url) => (url ? `[${cat}](${url})` : cat);

function renderElementReadme(p) {
  const cc = p.content_categories;
  const fc = p.form_categories;
  const lines = [];
  lines.push(`# \`${p.tag}\` — ${p.description}`);
  lines.push('');
  lines.push(`> AI Primitive \`${p.id}\` · kind: element · group: ${p.group.title} · DOM interface: \`${p.dom.interface}\``);
  lines.push('');
  lines.push('## Content categories');
  lines.push('');
  if (cc.context_restricted) {
    lines.push('None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.');
  } else {
    if (cc.always.length) lines.push(`- Always: ${cc.always.map((c) => catLink(c, p.spec.categories[c])).join(', ')}`);
    for (const [cat, cond] of Object.entries(cc.conditional)) lines.push(`- Conditional: ${catLink(cat, p.spec.categories[cat])} — only when ${cond}`);
  }
  lines.push('');
  lines.push('## Form categories');
  lines.push('');
  if (!fc.form_associated && fc.all.length === 0) {
    lines.push('None.');
  } else {
    lines.push(`- Form-associated: ${fc.form_associated ? 'yes (can have a form owner)' : 'no'}`);
    if (fc.always.length) lines.push(`- Always: ${fc.always.map((c) => catLink(c, p.spec.categories[c])).join(', ')}`);
    for (const [cat, cond] of Object.entries(fc.conditional)) lines.push(`- Conditional: ${catLink(cat, p.spec.categories[cat])} — only when ${cond}`);
  }
  lines.push('');
  lines.push('## Syntax (text/html)');
  lines.push('');
  lines.push(`- Kind: **${p.syntax.kind}**`);
  lines.push(`- Start tag: ${p.syntax.start_tag} · End tag: ${p.syntax.end_tag}`);
  lines.push(`- Self-closing start tag allowed: ${p.syntax.self_closing_start_tag_allowed ? 'yes' : 'no'}`);
  lines.push(`- Children: ${p.syntax.children} — ${p.syntax.children_note}`);
  lines.push('');
  lines.push('## Placement');
  lines.push('');
  lines.push(`- Parent requirement: ${p.placement.parent_requirement ? p.placement.parent_requirement : 'none recorded (placement still governed by the enclosing content model)'}`);
  if (p.placement.parents.length) lines.push(`- Parents (short form): ${p.placement.parents.map((x) => `\`${x}\``).join(', ')}`);
  lines.push('');
  if (p.classification_notes.length || p.flags.length) {
    lines.push('## Classification notes');
    lines.push('');
    for (const n of p.classification_notes) lines.push(`- ${n.note}`);
    for (const f of p.flags) lines.push(`- Flag: ${f.issue} *Resolution:* ${f.resolution}`);
    lines.push('');
  }
  lines.push('## Main primitive');
  lines.push('');
  if (p.main_primitive.is_main) {
    lines.push(`This element **is a main primitive** (\`${p.main_primitive.slug}\`, job: ${core.jobs[p.main_primitive.job].title}). ${p.main_primitive.why} See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).`);
  } else {
    const target = p.main_primitive.elements.map((e) => `[\`<${e}>\`](../${e}/README.md)`).join(' / ');
    lines.push(`Reduces to **\`${p.main_primitive.slug}\`** (${target}): ${p.main_primitive.why} See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).`);
  }
  lines.push('');
  lines.push('## Example');
  lines.push('');
  lines.push(fence(p.example));
  lines.push('');
  lines.push('## Spec');
  lines.push('');
  const specItems = [];
  if (p.spec.element) specItems.push(`Element definition: ${p.spec.element}`);
  specItems.push(`Syntax kinds: ${p.spec.syntax}`);
  if (p.spec.optional_tags) specItems.push(`Optional tags: ${p.spec.optional_tags}`);
  lines.push(list(specItems));
  lines.push('');
  lines.push('## Provenance');
  lines.push('');
  lines.push(`- Source: \`${p.provenance.spec_file}\` (${p.provenance.standard}, updated ${p.provenance.standard_last_updated}, retrieved ${p.provenance.retrieved_on})`);
  lines.push(`- Authored fields (not in SPEC.md): ${p.provenance.authored.map((a) => `\`${a}\``).join(', ')}`);
  lines.push(`- Machine-readable twin: \`primitive.json\``);
  lines.push('');
  return lines.join('\n');
}

function renderNodeReadme(p) {
  const lines = [];
  lines.push(`# ${p.name} — nodeType ${p.dom.nodeType}`);
  lines.push('');
  lines.push(`> AI Primitive \`${p.id}\` · kind: node · constant: \`${p.dom.node_type_constant}\` · applies to: ${p.dom.applies_to}`);
  lines.push('');
  lines.push(p.description);
  lines.push('');
  lines.push('## Content categories');
  lines.push('');
  lines.push(p.content_categories || 'None. Node types other than Element and Text do not participate in HTML content categories.');
  lines.push('');
  lines.push('## Placement');
  lines.push('');
  lines.push(`- Parent: ${p.placement.parent || 'none (this node is always a tree root)'}`);
  lines.push('');
  lines.push('## Serialization (text/html)');
  lines.push('');
  lines.push(p.serialization.text_html);
  lines.push('');
  lines.push('## Creation');
  lines.push('');
  lines.push(`\`${p.creation}\``);
  lines.push('');
  if (p.notes.length) {
    lines.push('## Notes');
    lines.push('');
    for (const n of p.notes) lines.push(`- ${n.note}`);
    lines.push('');
  }
  lines.push('## Example');
  lines.push('');
  lines.push(fence(p.example));
  lines.push('');
  lines.push('## Spec');
  lines.push('');
  lines.push(list([`Node interface: ${p.spec.node}`, `DOM node types: ${p.spec.dom_node_types}`]));
  lines.push('');
  lines.push('## Provenance');
  lines.push('');
  lines.push(`- Source: \`${p.provenance.spec_file}\` (${p.provenance.standard}, updated ${p.provenance.standard_last_updated}, retrieved ${p.provenance.retrieved_on})`);
  lines.push(`- Authored fields (not in SPEC.md): ${p.provenance.authored.map((a) => `\`${a}\``).join(', ')}`);
  lines.push(`- Machine-readable twin: \`primitive.json\``);
  lines.push('');
  return lines.join('\n');
}

function renderCustomReadme(p) {
  const lines = [];
  lines.push(`# Custom element \u2014 \`${p.tag}\``);
  lines.push('');
  lines.push(`> AI Primitive \`${p.id}\` \u00b7 kind: custom-element \u00b7 DOM interface: ${p.dom.interface}`);
  lines.push('');
  lines.push(p.description);
  lines.push('');
  lines.push('## Naming');
  lines.push('');
  lines.push(`- ${p.naming.rule}`);
  lines.push(`- Registration: \`${p.naming.registration}\``);
  lines.push(`- Spec: ${p.naming.spec}`);
  lines.push('');
  lines.push('## Content categories');
  lines.push('');
  lines.push(`- Always: ${p.content_categories.all.map((c) => catLink(c, p.spec.categories[c])).join(', ')}`);
  lines.push(`- ${p.content_categories.note}`);
  lines.push('');
  lines.push('## Form categories');
  lines.push('');
  lines.push(`- ${p.form_categories.note}`);
  lines.push('');
  lines.push('## Syntax (text/html)');
  lines.push('');
  lines.push(`- Kind: **${p.syntax.kind}**`);
  lines.push(`- Start tag: ${p.syntax.start_tag} \u00b7 End tag: ${p.syntax.end_tag}`);
  lines.push(`- Self-closing start tag allowed: ${p.syntax.self_closing_start_tag_allowed ? 'yes' : 'no'}`);
  lines.push(`- ${p.syntax.note}`);
  lines.push('');
  lines.push('## Placement');
  lines.push('');
  lines.push(`- ${p.placement.note}`);
  lines.push('');
  lines.push('## Variants');
  lines.push('');
  lines.push('| Variant | Base class | Content categories | Form categories | Written as |');
  lines.push('|---|---|---|---|---|');
  for (const [key, v] of Object.entries(p.variants)) {
    const cc = Array.isArray(v.content_categories) ? v.content_categories.join(', ') : v.content_categories;
    const fc = Array.isArray(v.form_categories) ? (v.form_associated ? `Form-associated, ${v.form_categories.join(', ')}` : 'none') : v.form_categories;
    const written = key === 'customized-built-in' ? '`<built-in is="name-with-dash">`' : '`<name-with-dash>`';
    lines.push(`| ${v.title} | ${v.interface} | ${cc} | ${fc} | ${written} |`);
  }
  lines.push('');
  for (const [key, v] of Object.entries(p.variants)) {
    lines.push(`### ${v.title}`);
    lines.push('');
    lines.push(v.description);
    if (v.note) lines.push(`\n${v.note}`);
    lines.push('');
    lines.push(fence(v.example));
    lines.push('');
    lines.push(`Spec: ${v.spec}`);
    lines.push('');
  }
  lines.push('## Example');
  lines.push('');
  lines.push(fence(p.example));
  lines.push('');
  lines.push('## Spec');
  lines.push('');
  lines.push(list([`Custom elements: ${p.spec.family}`, `Valid custom element name: ${p.spec.naming}`]));
  lines.push('');
  lines.push('## Provenance');
  lines.push('');
  lines.push(`- Source: \`${p.provenance.spec_file}\` (${p.provenance.standard}, updated ${p.provenance.standard_last_updated}, retrieved ${p.provenance.retrieved_on})`);
  lines.push(`- Authored fields (not in SPEC.md): ${p.provenance.authored.map((a) => `\`${a}\``).join(', ')}`);
  lines.push(`- Machine-readable twin: \`primitive.json\``);
  lines.push('');
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// 9. Write everything
// ---------------------------------------------------------------------------
function writePrimitive(dir, primitive, readme) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'primitive.json'), JSON.stringify(primitive, null, 2) + '\n');
  writeFileSync(join(dir, 'README.md'), readme);
}

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const elementPrimitives = elementNames.map(buildElementPrimitive);
const nodePrimitives = buildNodePrimitives();
const customPrimitive = buildCustomElementPrimitive();

for (const p of elementPrimitives) writePrimitive(join(OUT, 'elements', p.name), p, renderElementReadme(p));
for (const p of nodePrimitives) writePrimitive(join(OUT, 'nodes', p.slug), p, renderNodeReadme(p));
writePrimitive(join(OUT, 'custom-elements'), customPrimitive, renderCustomReadme(customPrimitive));

// Reverse index + category definitions
const reverseIndex = {};
for (const cat of Object.keys(primary.reverse_index)) reverseIndex[cat] = { always: [], conditional: {} };
for (const p of elementPrimitives) {
  for (const cat of [...p.content_categories.always, ...p.form_categories.always]) reverseIndex[cat].always.push(p.name);
  for (const [cat, cond] of Object.entries({ ...p.content_categories.conditional, ...p.form_categories.conditional })) reverseIndex[cat].conditional[p.name] = cond;
  if (p.form_categories.form_associated) reverseIndex['Form-associated'].always.push(p.name);
  if (p.content_categories.context_restricted) reverseIndex['Context-restricted'].always.push(p.name);
}
// Sanity: reverse index must reproduce SPEC.md's reverse index exactly.
for (const [cat, expected] of Object.entries(primary.reverse_index)) {
  const got = [...reverseIndex[cat].always, ...Object.keys(reverseIndex[cat].conditional)].sort();
  const exp = [...expected].sort();
  if (got.join() !== exp.join()) throw new Error(`reverse index mismatch for ${cat}:\n got ${got}\n exp ${exp}`);
}

const syntaxIndex = {};
for (const p of elementPrimitives) (syntaxIndex[p.syntax.kind] ||= []).push(p.name);
if (enriched.syntax_kinds) {
  for (const [kind, names] of Object.entries(enriched.syntax_kinds)) {
    if ((syntaxIndex[kind] || []).slice().sort().join() !== names.slice().sort().join()) throw new Error(`syntax index mismatch for ${kind}`);
  }
}

const groupsIndex = {};
for (const [key, g] of Object.entries(groupsRaw)) if (!key.startsWith('_')) groupsIndex[key] = { title: g.title, elements: g.elements };

const index = {
  $schema: '../schema/index.schema.json',
  generated_from: 'html-elements/SPEC.md',
  generator: 'html-elements/scripts/generate-primitives.mjs',
  standard: primary.metadata.standard,
  standard_last_updated: primary.metadata.source_last_updated,
  retrieved_on: primary.metadata.retrieved_on,
  coverage: {
    elements: { expected: primary.metadata.total_elements, generated: elementPrimitives.length, named_html_elements: primary.metadata.named_html_elements, foreign_root_elements: primary.metadata.foreign_root_elements },
    nodes: { expected: primary.dom_node_types.length, generated: nodePrimitives.length },
    custom_element: { expected: 1, generated: 1, variants: { expected: Object.keys(primary.custom_element_families).length, generated: Object.keys(customPrimitive.variants).length } },
    total_primitives: elementPrimitives.length + nodePrimitives.length + 1,
  },
  conventions: {
    membership: primary.metadata.membership_convention,
    context_restricted: primary.metadata.context_restricted_convention,
    parent_requirement: primary.metadata.parent_requirement_convention,
    form_hierarchy: primary.metadata.form_hierarchy_note,
    syntax_scope: primary.metadata.syntax_scope,
    classification_policy: primary.metadata.classification_policy,
  },
  categories: Object.fromEntries(
    Object.entries(CATEGORY_DEFINITIONS).map(([cat, d]) => [cat, { definition: d.definition, spec: d.spec, elements: reverseIndex[cat] }]),
  ),
  syntax_kinds: syntaxIndex,
  groups: groupsIndex,
  main_primitives: {
    thesis: core._thesis,
    count: core.main.length,
    elements_covered: core.main.reduce((n, m) => n + m.elements.length, 0),
    jobs: core.jobs,
    list: core.main.map((m) => ({ slug: m.slug, elements: m.elements, group: m.group, job: m.job, role: m.role, variants: Object.entries(core.reduces_to).filter(([, r]) => r.main === m.slug).map(([el]) => el) })),
    reduces_to: core.reduces_to,
    views: ['MAIN-ELEMENTS.md', 'CATEGORIES.md', 'GROUPS.md'],
  },
  primitives: [
    ...elementPrimitives.map((p) => ({ id: p.id, kind: p.kind, name: p.name, path: `elements/${p.name}/primitive.json`, readme: `elements/${p.name}/README.md`, description: p.description, interface: p.dom.interface, syntax: p.syntax.kind, categories: [...p.content_categories.all, ...(p.form_categories.form_associated ? ['Form-associated'] : []), ...p.form_categories.all], group: p.group.id, main_primitive: p.main_primitive.slug, is_main: p.main_primitive.is_main })),
    ...nodePrimitives.map((p) => ({ id: p.id, kind: p.kind, name: p.name, path: `nodes/${p.slug}/primitive.json`, readme: `nodes/${p.slug}/README.md`, description: p.description, nodeType: p.dom.nodeType })),
    { id: customPrimitive.id, kind: customPrimitive.kind, name: customPrimitive.name, path: 'custom-elements/primitive.json', readme: 'custom-elements/README.md', description: customPrimitive.description, variants: Object.keys(customPrimitive.variants) },
  ],
};
writeFileSync(join(OUT, 'index.json'), JSON.stringify(index, null, 2) + '\n');

// ---------------------------------------------------------------------------
// 10. Markdown views: MAIN-ELEMENTS.md, CATEGORIES.md, GROUPS.md, category-*.md, group-*.md
// ---------------------------------------------------------------------------
const byName = Object.fromEntries(elementPrimitives.map((p) => [p.name, p]));
const elLink = (n) => `[\`<${n}>\`](elements/${n}/README.md)`;
const catSlug = (cat) => cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const groupLink = (gid) => `[${groupsRaw[gid].title}](group-${gid}.md)`;
const catLinkMd = (cat) => `[${cat}](category-${catSlug(cat)}.md)`;
const mainLink = (slug) => `[\`${slug}\`](MAIN-ELEMENTS.md#${slug})`;
const conditionOf = (p, cat) => p.content_categories.conditional[cat] ?? p.form_categories.conditional[cat] ?? null;
const generatedNote = 'Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand.';

function elementTable(names, { withCondition = null, withGroup = true } = {}) {
  const head = ['Element', 'Description', 'Syntax', ...(withGroup ? ['Group'] : []), 'Main primitive', ...(withCondition ? ['Condition'] : [])];
  const rows = [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`];
  for (const n of names) {
    const p = byName[n];
    const mp = p.main_primitive.is_main ? `**${mainLink(p.main_primitive.slug)}**` : mainLink(p.main_primitive.slug);
    const cells = [elLink(n), p.description, p.syntax.kind, ...(withGroup ? [groupLink(p.group.id)] : []), mp];
    if (withCondition) cells.push(conditionOf(p, withCondition) ? `only when ${conditionOf(p, withCondition)}` : 'always');
    rows.push(`| ${cells.join(' | ')} |`);
  }
  return rows.join('\n');
}

// MAIN-ELEMENTS.md
{
  const L = [];
  L.push('# Main element primitives');
  L.push('');
  L.push(`> ${generatedNote}`);
  L.push('');
  L.push(core._thesis);
  L.push('');
  const covered = core.main.reduce((n, m) => n + m.elements.length, 0);
  L.push(`**${core.main.length} main primitives** cover **${covered} elements**. The remaining **${elementNames.length - covered} elements** each reduce to exactly one of them (see [Reduction map](#reduction-map)). Every element keeps its own full primitive under \`elements/<name>/\`; this file only says which ones do irreducible work.`);
  L.push('');
  L.push('## By job');
  L.push('');
  L.push('| Job | What it covers | Main primitives |');
  L.push('|---|---|---|');
  for (const [jid, job] of Object.entries(core.jobs)) {
    const mains = core.main.filter((m) => m.job === jid).map((m) => mainLink(m.slug));
    L.push(`| ${job.title} | ${job.description} | ${mains.join(', ')} |`);
  }
  L.push('');
  L.push('## By group');
  L.push('');
  for (const [gid, g] of Object.entries(groupsRaw)) {
    if (gid.startsWith('_')) continue;
    const mains = core.main.filter((m) => m.group === gid);
    if (!mains.length) continue;
    L.push(`### ${g.title}`);
    L.push('');
    L.push(`Group file: ${groupLink(gid)}`);
    L.push('');
    for (const m of mains) {
      const variants = Object.entries(core.reduces_to).filter(([, r]) => r.main === m.slug).map(([el]) => el);
      L.push(`<a id="${m.slug}"></a>`);
      L.push(`#### \`${m.slug}\` — ${m.elements.map(elLink).join(', ')}`);
      L.push('');
      L.push(`${m.role} Job: ${core.jobs[m.job].title}.`);
      L.push('');
      if (variants.length) {
        L.push('Semantic variants that reduce to it:');
        L.push('');
        for (const v of variants) L.push(`- ${elLink(v)} — ${core.reduces_to[v].why}`);
        L.push('');
      } else {
        L.push('No other element reduces to it.');
        L.push('');
      }
    }
  }
  L.push('## Reduction map');
  L.push('');
  L.push('Every element that is not itself a main primitive, and the main primitive it reduces to.');
  L.push('');
  L.push('| Element | Reduces to | Why |');
  L.push('|---|---|---|');
  for (const el of elementNames) {
    const r = core.reduces_to[el];
    if (!r) continue;
    L.push(`| ${elLink(el)} | ${mainLink(r.main)} (${mainBySlug[r.main].elements.map((e) => `\`<${e}>\``).join(' / ')}) | ${r.why} |`);
  }
  L.push('');
  L.push('## Main primitive checklist');
  L.push('');
  L.push('All elements that are main primitives, in spec order.');
  L.push('');
  L.push(elementTable(elementNames.filter((n) => mainOfElement[n].is_main)));
  L.push('');
  writeFileSync(join(OUT, 'MAIN-ELEMENTS.md'), L.join('\n'));
}

// CATEGORIES.md + category-*.md
{
  const L = [];
  L.push('# Content categories');
  L.push('');
  L.push(`> ${generatedNote}`);
  L.push('');
  L.push('Counts include conditional members once each; they are not counts for a particular document. Context-restricted is a reporting bucket, not a WHATWG category.');
  L.push('');
  L.push('| Category | Elements | Always | Conditional | Main primitives in it | Definition | Spec |');
  L.push('|---|---|---|---|---|---|---|');
  for (const [cat, def] of Object.entries(CATEGORY_DEFINITIONS)) {
    const entry = reverseIndex[cat];
    const members = [...entry.always, ...Object.keys(entry.conditional)].sort();
    const mains = members.filter((n) => mainOfElement[n].is_main).length;
    L.push(`| ${catLinkMd(cat)} | ${members.length} | ${entry.always.length} | ${Object.keys(entry.conditional).length} | ${mains} | ${def.definition} | [spec](${def.spec}) |`);

    const C = [];
    C.push(`# ${cat}`);
    C.push('');
    C.push(`> ${generatedNote} Back to [CATEGORIES.md](CATEGORIES.md).`);
    C.push('');
    C.push(`**Definition.** ${def.definition}`);
    C.push('');
    C.push(`**Spec.** ${def.spec}`);
    C.push('');
    C.push(`**Members.** ${members.length} elements: ${entry.always.length} always, ${Object.keys(entry.conditional).length} conditional.`);
    C.push('');
    const mainMembers = members.filter((n) => mainOfElement[n].is_main);
    C.push('## Main primitives in this category');
    C.push('');
    if (mainMembers.length) {
      const slugs = [...new Set(mainMembers.map((n) => mainOfElement[n].slug))];
      for (const slug of slugs) C.push(`- ${mainLink(slug)} — ${mainBySlug[slug].elements.filter((e) => members.includes(e)).map(elLink).join(', ')}: ${mainBySlug[slug].role}`);
    } else {
      C.push('None. Every element here is a semantic variant of a main primitive from another bucket; see the Main primitive column.');
    }
    C.push('');
    if (cat === 'Context-restricted') {
      C.push('## Required parent');
      C.push('');
      C.push('| Element | Parent requirement |');
      C.push('|---|---|');
      for (const n of members) C.push(`| ${elLink(n)} | ${byName[n].placement.parent_requirement} |`);
      C.push('');
    }
    C.push('## All members');
    C.push('');
    C.push(elementTable(members, { withCondition: cat }));
    C.push('');
    if (cat === 'Flow' || cat === 'Phrasing' || cat === 'Palpable') {
      C.push('## Non-element members');
      C.push('');
      C.push(cat === 'Palpable' ? '- [Text](nodes/text/README.md) nodes that are not inter-element whitespace' : '- [Text](nodes/text/README.md) nodes');
      C.push('- [Autonomous custom elements](custom-elements/README.md)');
      C.push('');
    }
    if (cat === 'Form-associated' || FORM_SUBCATEGORIES.has(cat)) {
      C.push('## Non-element members');
      C.push('');
      C.push(cat === 'autocapitalize-and-autocorrect-inheriting' ? '- None. Form-associated custom elements do not gain this category automatically.' : '- [Form-associated custom elements](custom-elements/README.md)');
      C.push('');
    }
    writeFileSync(join(OUT, `category-${catSlug(cat)}.md`), C.join('\n'));
  }
  L.push('');
  L.push('Each category has its own file, `category-<name>.md`, listing every member with its syntax kind, purpose group, condition, and main primitive.');
  L.push('');
  writeFileSync(join(OUT, 'CATEGORIES.md'), L.join('\n'));
}

// GROUPS.md + group-*.md
{
  const L = [];
  L.push('# Purpose groups');
  L.push('');
  L.push(`> ${generatedNote}`);
  L.push('');
  L.push('The spec’s grouping of elements by purpose. Every element is in exactly one group. Obsolete elements (center, font, marquee, frame, big, tt, param, and others) are excluded.');
  L.push('');
  L.push('| Group | Elements | Main primitives | Members |');
  L.push('|---|---|---|---|');
  for (const [gid, g] of Object.entries(groupsRaw)) {
    if (gid.startsWith('_')) continue;
    const mains = core.main.filter((m) => m.group === gid).map((m) => `\`${m.slug}\``);
    L.push(`| ${groupLink(gid)} | ${g.elements.length} | ${mains.join(', ') || '—'} | ${g.elements.map((e) => `\`${e}\``).join(', ')} |`);

    const G = [];
    G.push(`# ${g.title}`);
    G.push('');
    G.push(`> ${generatedNote} Back to [GROUPS.md](GROUPS.md).`);
    G.push('');
    G.push(`${g.elements.length} elements.`);
    G.push('');
    G.push('## Main primitives in this group');
    G.push('');
    const gm = core.main.filter((m) => m.group === gid);
    if (gm.length) for (const m of gm) G.push(`- ${mainLink(m.slug)} — ${m.elements.map(elLink).join(', ')}: ${m.role}`);
    else G.push('None. Every element here reduces to a main primitive in another group; see the Main primitive column.');
    G.push('');
    G.push('## All members');
    G.push('');
    G.push(elementTable(g.elements, { withGroup: false }));
    G.push('');
    G.push('## Categories represented');
    G.push('');
    const catsHere = {};
    for (const n of g.elements) for (const c of [...byName[n].content_categories.all, ...(byName[n].form_categories.form_associated ? ['Form-associated'] : []), ...byName[n].form_categories.all]) (catsHere[c] ||= []).push(n);
    const ctx = g.elements.filter((n) => byName[n].content_categories.context_restricted);
    if (ctx.length) catsHere['Context-restricted'] = ctx;
    for (const [c, ns] of Object.entries(catsHere)) G.push(`- ${catLinkMd(c)}: ${ns.map((n) => `\`${n}\``).join(', ')}`);
    G.push('');
    writeFileSync(join(OUT, `group-${gid}.md`), G.join('\n'));
  }
  L.push('');
  writeFileSync(join(OUT, 'GROUPS.md'), L.join('\n'));
}

// Catalog README
const catalog = [];
catalog.push('# HTML AI Primitives — catalog');
catalog.push('');
catalog.push(`Generated from \`SPEC.md\` (${primary.metadata.standard}, updated ${primary.metadata.source_last_updated}). Do not edit by hand; run \`node scripts/generate-primitives.mjs\`.`);
catalog.push('');
catalog.push('| Kind | Count | Location |');
catalog.push('|---|---|---|');
catalog.push(`| element | ${elementPrimitives.length} | \`elements/<name>/\` |`);
catalog.push(`| node | ${nodePrimitives.length} | \`nodes/<slug>/\` |`);
catalog.push(`| custom-element | 1 (${Object.keys(customPrimitive.variants).length} variants) | \`custom-elements/\` |`);
catalog.push('');
catalog.push('## Views');
catalog.push('');
catalog.push('- [MAIN-ELEMENTS.md](MAIN-ELEMENTS.md) — the main (irreducible) element primitives and the reduction map for every other element');
catalog.push('- [CATEGORIES.md](CATEGORIES.md) — content and form categories, one `category-<name>.md` file each');
catalog.push('- [GROUPS.md](GROUPS.md) — purpose groups, one `group-<name>.md` file each');
catalog.push('');
catalog.push('## Elements');
catalog.push('');
catalog.push('| Element | Description | Interface | Syntax | Categories | Main primitive |');
catalog.push('|---|---|---|---|---|---|');
for (const p of elementPrimitives) {
  const cats = [...p.content_categories.all, ...(p.form_categories.form_associated ? ['Form-associated'] : []), ...p.form_categories.all];
  catalog.push(`| [\`<${p.name}>\`](elements/${p.name}/README.md) | ${p.description} | \`${p.dom.interface}\` | ${p.syntax.kind} | ${cats.length ? cats.join(', ') : '*context-restricted*'} | ${p.main_primitive.is_main ? '**' + p.main_primitive.slug + '**' : p.main_primitive.slug} |`);
}
catalog.push('');
catalog.push('## DOM node types');
catalog.push('');
catalog.push('| Node | nodeType | Applies to |');
catalog.push('|---|---|---|');
for (const p of nodePrimitives) catalog.push(`| [${p.name}](nodes/${p.slug}/README.md) | ${p.dom.nodeType} | ${p.dom.applies_to} |`);
catalog.push('');
catalog.push('## Custom element');
catalog.push('');
catalog.push(`- [${customPrimitive.name}](custom-elements/README.md) — variants: ${Object.keys(customPrimitive.variants).join(', ')}`);
catalog.push('');
writeFileSync(join(OUT, 'README.md'), catalog.join('\n'));

console.log(`elements: ${elementPrimitives.length}/${primary.metadata.total_elements}`);
console.log(`nodes: ${nodePrimitives.length}/${primary.dom_node_types.length}`);
console.log(`custom-element: 1 primitive, ${Object.keys(customPrimitive.variants).length}/${Object.keys(primary.custom_element_families).length} variants`);
console.log(`cross-check against flat taxonomy: ${flat ? Object.keys(flat).length + ' elements present (informational only)' : 'not found'}`);
console.log(`main primitives: ${core.main.length} covering ${core.main.reduce((n, m) => n + m.elements.length, 0)} elements; ${Object.keys(core.reduces_to).length} elements reduce to them`);
console.log(`wrote ${OUT}`);
