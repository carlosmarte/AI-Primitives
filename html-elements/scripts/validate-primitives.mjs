#!/usr/bin/env node
/**
 * validate-primitives.mjs
 *
 * Proves the 1:1 coverage contract between SPEC.md and primitives/:
 *   - every element in SPEC.md has exactly one primitive directory, and vice versa
 *   - every DOM node type in SPEC.md has exactly one primitive, and the single
 *     custom-element primitive carries one variant per family in SPEC.md
 *   - each primitive directory holds primitive.json + README.md, and the JSON is
 *     internally consistent (categories, syntax rules, example mentions the tag)
 *   - index.json lists every primitive and nothing else
 *
 * Zero dependencies (hand-rolled checks mirroring schema/primitive.schema.json).
 * Exit code 0 = PASS, 1 = FAIL. Run: node scripts/validate-primitives.mjs
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const OUT = join(ROOT, 'primitives');

const failures = [];
const fail = (msg) => failures.push(msg);
const assert = (cond, msg) => { if (!cond) fail(msg); };

// --- Re-derive the expected universe from SPEC.md -------------------------
function extractJsonDocuments(text) {
  const docs = [];
  let buf = null;
  for (const line of text.split('\n')) {
    if (buf === null) { if (line === '{') buf = [line]; continue; }
    buf.push(line);
    if (line === '}') { docs.push(JSON.parse(buf.join('\n'))); buf = null; }
  }
  return docs;
}
const docs = extractJsonDocuments(readFileSync(join(ROOT, 'SPEC.md'), 'utf8'));
const primary = docs.find((d) => d.metadata?.standard && d.elements);
const enriched = docs.find((d) => d.meta?.method && d.elements);
assert(primary, 'SPEC.md primary taxonomy not found');
assert(enriched, 'SPEC.md enriched taxonomy not found');
if (failures.length) { for (const f of failures) console.error(`  - ${f}`); process.exit(1); }

const expectedElements = Object.keys(primary.elements).sort();
const expectedNodes = primary.dom_node_types.map((n) => n.interface).sort();
const expectedVariants = Object.keys(primary.custom_element_families).length;

// --- Directory inventory ----------------------------------------------------
const dirsIn = (p) => (existsSync(p) ? readdirSync(p).filter((d) => statSync(join(p, d)).isDirectory()).sort() : []);
const elementDirs = dirsIn(join(OUT, 'elements'));
const nodeDirs = dirsIn(join(OUT, 'nodes'));

// 1:1 elements
assert(elementDirs.length === expectedElements.length, `element primitive count ${elementDirs.length} != SPEC ${expectedElements.length}`);
for (const name of expectedElements) assert(elementDirs.includes(name), `missing element primitive: ${name}`);
for (const name of elementDirs) assert(expectedElements.includes(name), `extra element primitive not in SPEC: ${name}`);
// 1:1 nodes
assert(nodeDirs.length === expectedNodes.length, `node primitive count ${nodeDirs.length} != SPEC ${expectedNodes.length}`);

// --- Per-primitive checks ---------------------------------------------------
const CONTENT = new Set(['Metadata', 'Flow', 'Sectioning', 'Heading', 'Phrasing', 'Embedded', 'Interactive', 'Palpable', 'Script-supporting']);
const FORM = new Set(['listed', 'submittable', 'resettable', 'autocapitalize-and-autocorrect-inheriting', 'labelable']);
const SYNTAX = new Set(['void', 'template', 'raw text', 'escapable raw text', 'foreign', 'normal']);
const ids = new Set();
const seenNodeNames = [];

function loadPrimitive(dir, label) {
  const jsonPath = join(dir, 'primitive.json');
  const mdPath = join(dir, 'README.md');
  assert(existsSync(jsonPath), `${label}: missing primitive.json`);
  assert(existsSync(mdPath), `${label}: missing README.md`);
  if (!existsSync(jsonPath) || !existsSync(mdPath)) return null;
  let p;
  try { p = JSON.parse(readFileSync(jsonPath, 'utf8')); } catch (e) { fail(`${label}: invalid JSON (${e.message})`); return null; }
  const md = readFileSync(mdPath, 'utf8');
  for (const k of ['$schema', 'id', 'kind', 'name', 'title', 'description', 'dom', 'example', 'spec', 'provenance']) assert(k in p, `${label}: missing field ${k}`);
  assert(!ids.has(p.id), `${label}: duplicate id ${p.id}`); ids.add(p.id);
  assert(p.provenance?.spec_file === 'html-elements/SPEC.md', `${label}: provenance.spec_file wrong`);
  assert(Array.isArray(p.provenance?.authored) && Array.isArray(p.provenance?.derived_from_spec), `${label}: provenance lists missing`);
  assert(md.includes(p.id), `${label}: README does not mention id ${p.id}`);
  assert(md.includes('## Example') && md.includes('```html'), `${label}: README lacks example block`);
  assert(md.includes('## Provenance'), `${label}: README lacks provenance`);
  return p;
}

for (const name of elementDirs) {
  const label = `elements/${name}`;
  const p = loadPrimitive(join(OUT, 'elements', name), label);
  if (!p) continue;
  const spec = primary.elements[name];
  const enr = enriched.elements[name];
  assert(p.kind === 'element', `${label}: kind != element`);
  assert(p.id === `html.element.${name}`, `${label}: id mismatch ${p.id}`);
  assert(p.name === name && p.tag === `<${name}>`, `${label}: name/tag mismatch`);
  assert(p.description === enr.description, `${label}: description drifted from SPEC`);
  assert(p.dom.interface === enr.interface, `${label}: interface drifted from SPEC`);
  assert(p.dom.nodeType === 1 && p.dom.node_type === 'Element', `${label}: dom node type wrong`);
  // categories reproduce SPEC exactly
  const all = [...p.content_categories.all, ...(p.form_categories.form_associated ? ['Form-associated'] : []), ...p.form_categories.all].sort();
  assert(all.join() === [...spec.categories].sort().join(), `${label}: categories drifted from SPEC (${all} vs ${spec.categories})`);
  const cond = { ...p.content_categories.conditional, ...p.form_categories.conditional };
  assert(JSON.stringify(Object.entries(cond).sort()) === JSON.stringify(Object.entries(spec.conditional).sort()), `${label}: conditional drifted from SPEC`);
  for (const c of p.content_categories.all) assert(CONTENT.has(c), `${label}: unknown content category ${c}`);
  for (const c of p.form_categories.all) assert(FORM.has(c), `${label}: unknown form category ${c}`);
  for (const c of p.content_categories.always) assert(!(c in p.content_categories.conditional), `${label}: ${c} both always and conditional`);
  assert(p.content_categories.context_restricted === (spec.categories.length === 0), `${label}: context_restricted flag wrong`);
  assert(p.content_categories.context_restricted === primary.reverse_index['Context-restricted'].includes(name), `${label}: context_restricted disagrees with SPEC reverse index`);
  // syntax
  assert(p.syntax.kind === spec.syntax && SYNTAX.has(p.syntax.kind), `${label}: syntax kind drifted (${p.syntax.kind} vs ${spec.syntax})`);
  if (p.syntax.kind === 'void') assert(p.syntax.end_tag === 'forbidden' && p.syntax.children === 'none', `${label}: void syntax rules wrong`);
  else assert(p.syntax.end_tag !== 'forbidden' && p.syntax.children !== 'none', `${label}: non-void syntax rules wrong`);
  if (p.syntax.end_tag === 'forbidden') assert(!p.example.includes(`</${name}>`), `${label}: example writes an end tag for a void element`);
  // placement
  assert(p.placement.parent_requirement === spec.parent_requirement, `${label}: parent_requirement drifted`);
  // example mentions the tag
  assert(new RegExp(`<${name}[\\s>/]`).test(p.example), `${label}: example does not contain <${name}>`);
  // spec link
  assert(p.spec.element === primary.sources.element_definitions[name], `${label}: element spec URL drifted`);
  // README mirrors key facts
  const md = readFileSync(join(OUT, 'elements', name, 'README.md'), 'utf8');
  assert(md.startsWith(`# \`<${name}>\``), `${label}: README heading wrong`);
  assert(md.includes(`Kind: **${p.syntax.kind}**`), `${label}: README syntax kind missing`);
  if (p.content_categories.context_restricted) assert(md.includes('context-restricted'), `${label}: README should say context-restricted`);
}

for (const slug of nodeDirs) {
  const label = `nodes/${slug}`;
  const p = loadPrimitive(join(OUT, 'nodes', slug), label);
  if (!p) continue;
  assert(p.kind === 'node', `${label}: kind != node`);
  assert(p.id === `dom.node.${slug}` && p.slug === slug, `${label}: id/slug mismatch`);
  const specNode = primary.dom_node_types.find((n) => n.interface === p.name);
  assert(specNode, `${label}: node ${p.name} not in SPEC`);
  if (specNode) {
    assert(p.dom.nodeType === specNode.nodeType, `${label}: nodeType drifted`);
    assert(p.description === specNode.note, `${label}: description drifted from SPEC`);
  }
  assert(/^Node\.[A-Z_]+_NODE$/.test(p.dom.node_type_constant), `${label}: bad node constant`);
  assert(typeof p.serialization?.text_html === 'string' && typeof p.creation === 'string', `${label}: serialization/creation missing`);
  seenNodeNames.push(p.name);
}
assert(seenNodeNames.slice().sort().join() === expectedNodes.join(), `node primitives ${seenNodeNames.sort()} != SPEC ${expectedNodes}`);

// --- the single custom-element primitive ------------------------------------
const customDir = join(OUT, 'custom-elements');
const custom = loadPrimitive(customDir, 'custom-elements');
let customVariantCount = 0;
if (custom) {
  assert(custom.kind === 'custom-element', 'custom-elements: kind != custom-element');
  assert(custom.id === 'html.custom-element', `custom-elements: id ${custom.id}`);
  assert(custom.naming?.rule && custom.naming?.spec && custom.naming?.registration, 'custom-elements: naming missing');
  assert(custom.variants && typeof custom.variants === 'object', 'custom-elements: variants missing');
  const variants = Object.keys(custom.variants || {}).sort();
  customVariantCount = variants.length;
  assert(variants.join() === ['autonomous', 'customized-built-in', 'form-associated'].join(), `custom-elements: variants ${variants}`);
  assert(variants.length === expectedVariants, `custom-elements: ${variants.length} variants != SPEC ${expectedVariants} families`);
  for (const [key, v] of Object.entries(custom.variants || {})) {
    for (const k of ['title', 'description', 'interface', 'content_categories', 'form_categories', 'form_associated', 'syntax', 'example', 'spec']) assert(k in v, `custom-elements: variant ${key} missing ${k}`);
    assert(/-/.test(v.example), `custom-elements: variant ${key} example has no hyphenated name`);
  }
  const fam = primary.custom_element_families;
  const autoCats = fam.autonomous_custom_elements.categories.slice().sort().join();
  assert(custom.content_categories.all.slice().sort().join() === autoCats, 'custom-elements: content categories drifted from SPEC');
  assert((custom.variants.autonomous?.content_categories || []).slice().sort().join() === autoCats, 'custom-elements: autonomous variant categories drifted');
  const faceExpected = fam.form_associated_custom_elements.additional_categories.filter((c) => c !== 'Form-associated').sort().join();
  const face = custom.variants['form-associated'];
  assert(face?.form_associated === true && (face.form_categories || []).slice().sort().join() === faceExpected, 'custom-elements: form-associated variant categories drifted');
  assert(face?.note === fam.form_associated_custom_elements.note, 'custom-elements: form-associated note drifted');
  assert(custom.variants['customized-built-in']?.note === fam.customized_built_in_elements.note, 'custom-elements: customized built-in note drifted');
  assert(custom.syntax.kind === fam.autonomous_custom_elements.syntax, 'custom-elements: syntax kind drifted');
  // no stray per-variant directories left behind
  assert(dirsIn(customDir).length === 0, `custom-elements: unexpected subdirectories ${dirsIn(customDir)}`);
  const md = readFileSync(join(customDir, 'README.md'), 'utf8');
  for (const v of Object.values(custom.variants)) assert(md.includes(`### ${v.title}`), `custom-elements: README lacks section for ${v.title}`);
}

// --- main-primitive layer -----------------------------------------------------
const core = JSON.parse(readFileSync(join(HERE, 'data', 'core.json'), 'utf8'));
const mainElements = core.main.flatMap((m) => m.elements);
const reduced = Object.keys(core.reduces_to);
assert(new Set(mainElements).size === mainElements.length, 'core.json: an element appears in two main primitives');
assert(mainElements.every((e) => !core.reduces_to[e]), 'core.json: an element is both main and reduced');
assert([...mainElements, ...reduced].sort().join() === expectedElements.join(), 'core.json does not partition the SPEC elements exactly');
const mainSlugs = new Set(core.main.map((m) => m.slug));
for (const [el, r] of Object.entries(core.reduces_to)) assert(mainSlugs.has(r.main), `core.json: ${el} reduces to unknown main ${r.main}`);
for (const name of elementDirs) {
  const p = JSON.parse(readFileSync(join(OUT, 'elements', name, 'primitive.json'), 'utf8'));
  const expectMain = core.reduces_to[name] ? core.reduces_to[name].main : core.main.find((m) => m.elements.includes(name))?.slug;
  assert(p.main_primitive?.slug === expectMain, `elements/${name}: main_primitive ${p.main_primitive?.slug} != ${expectMain}`);
  assert(p.main_primitive?.is_main === !core.reduces_to[name], `elements/${name}: is_main flag wrong`);
  const md = readFileSync(join(OUT, 'elements', name, 'README.md'), 'utf8');
  assert(md.includes('## Main primitive') && md.includes('MAIN-ELEMENTS.md'), `elements/${name}: README lacks Main primitive section`);
}
for (const f of ['MAIN-ELEMENTS.md', 'CATEGORIES.md', 'GROUPS.md']) assert(existsSync(join(OUT, f)), `missing view ${f}`);
if (existsSync(join(OUT, 'MAIN-ELEMENTS.md'))) {
  const md = readFileSync(join(OUT, 'MAIN-ELEMENTS.md'), 'utf8');
  for (const m of core.main) assert(md.includes(`<a id="${m.slug}"></a>`), `MAIN-ELEMENTS.md: missing anchor for ${m.slug}`);
  for (const el of expectedElements) assert(md.includes(`[\`<${el}>\`](elements/${el}/README.md)`), `MAIN-ELEMENTS.md: element ${el} not linked`);
}
const catSlug = (cat) => cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
for (const cat of Object.keys(primary.reverse_index)) {
  const f = join(OUT, `category-${catSlug(cat)}.md`);
  assert(existsSync(f), `missing category view for ${cat}`);
  if (existsSync(f)) {
    const md = readFileSync(f, 'utf8');
    for (const el of primary.reverse_index[cat]) assert(md.includes(`[\`<${el}>\`](elements/${el}/README.md)`), `category-${catSlug(cat)}.md: ${el} missing`);
  }
}
const groupsData = JSON.parse(readFileSync(join(HERE, 'data', 'groups.json'), 'utf8'));
for (const [gid, g] of Object.entries(groupsData)) {
  if (gid.startsWith('_')) continue;
  const f = join(OUT, `group-${gid}.md`);
  assert(existsSync(f), `missing group view for ${gid}`);
  if (existsSync(f)) {
    const md = readFileSync(f, 'utf8');
    for (const el of g.elements) assert(md.includes(`[\`<${el}>\`](elements/${el}/README.md)`), `group-${gid}.md: ${el} missing`);
  }
}
// no unexpected top-level markdown files
const topMd = readdirSync(OUT).filter((f) => f.endsWith('.md')).sort();
const expectedMd = ['README.md', 'MAIN-ELEMENTS.md', 'CATEGORIES.md', 'GROUPS.md', ...Object.keys(primary.reverse_index).map((c) => `category-${catSlug(c)}.md`), ...Object.keys(groupsData).filter((g) => !g.startsWith('_')).map((g) => `group-${g}.md`)].sort();
assert(topMd.join() === expectedMd.join(), `unexpected top-level markdown set: ${topMd.filter((f) => !expectedMd.includes(f))}`);

// --- index.json -------------------------------------------------------------
const indexPath = join(OUT, 'index.json');
assert(existsSync(indexPath), 'primitives/index.json missing');
if (existsSync(indexPath)) {
  const index = JSON.parse(readFileSync(indexPath, 'utf8'));
  const total = elementDirs.length + nodeDirs.length + (custom ? 1 : 0);
  assert(index.primitives.length === total, `index lists ${index.primitives.length} primitives, found ${total} directories`);
  assert(index.coverage.total_primitives === total, 'index coverage.total_primitives wrong');
  assert(index.coverage.elements.generated === index.coverage.elements.expected, 'index: element coverage incomplete');
  assert(index.coverage.nodes.generated === index.coverage.nodes.expected, 'index: node coverage incomplete');
  assert(index.coverage.custom_element?.generated === 1 && index.coverage.custom_element?.expected === 1, 'index: custom-element coverage incomplete');
  assert(index.coverage.custom_element?.variants?.generated === index.coverage.custom_element?.variants?.expected, 'index: custom-element variant coverage incomplete');
  const indexIds = new Set();
  for (const row of index.primitives) {
    assert(!indexIds.has(row.id), `index: duplicate id ${row.id}`); indexIds.add(row.id);
    assert(existsSync(join(OUT, row.path)), `index: path does not exist ${row.path}`);
    assert(existsSync(join(OUT, row.readme)), `index: readme does not exist ${row.readme}`);
    assert(ids.has(row.id), `index: id ${row.id} has no primitive directory`);
  }
  for (const id of ids) assert(indexIds.has(id), `index: primitive ${id} not listed`);
  // reverse index reproduces SPEC
  for (const [cat, expected] of Object.entries(primary.reverse_index)) {
    const entry = index.categories[cat]?.elements;
    assert(entry, `index: category ${cat} missing`);
    if (entry) {
      const got = [...entry.always, ...Object.keys(entry.conditional)].sort().join();
      assert(got === [...expected].sort().join(), `index: reverse index for ${cat} drifted from SPEC`);
    }
  }
  // every element appears in exactly one group
  const grouped = Object.values(index.groups).flatMap((g) => g.elements);
  assert(grouped.length === elementDirs.length && new Set(grouped).size === grouped.length, 'index: groups do not partition the elements');
}
assert(existsSync(join(OUT, 'README.md')), 'primitives/README.md missing');

report();

function report() {
  const totals = `elements ${elementDirs.length}/${expectedElements.length}, nodes ${nodeDirs.length}/${expectedNodes.length}, custom-element 1 primitive with ${customVariantCount}/${expectedVariants} variants, ${topMd.length} markdown views`;
  if (failures.length) {
    console.error(`FAIL (${failures.length} problem${failures.length === 1 ? '' : 's'}) — ${totals}`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }
  console.log(`PASS — 1:1 coverage verified: ${totals}`);
  process.exit(0);
}
