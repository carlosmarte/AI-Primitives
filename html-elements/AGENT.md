# AGENT.md — how to use `html-elements/` and ingest its knowledge

This file is for AI agents (and the people driving them). It explains what is in this directory,
which files to load for which job, how to query the data without reading all of it, which fields
are normative and which are interpretive, and how to change things safely.

Read this file first. Then load only what the task needs; the loading tiers below are ordered by
cost.

## 1. What this directory is

`html-elements/` is a one-to-one mapping from the WHATWG HTML Living Standard to **AI
Primitives**: small, self-contained fact sets, each one a directory with a machine twin
(`primitive.json`) and a prose twin (`README.md`).

| Kind | Count | Path pattern | Id pattern |
|---|---|---|---|
| HTML element (113 named + `svg` + `math`) | 115 | `primitives/elements/<tag>/` | `html.element.<tag>` |
| DOM node type (Document, Text, Comment, …) | 9 | `primitives/nodes/<slug>/` | `dom.node.<slug>` |
| Custom element (3 variants inside one primitive) | 1 | `primitives/custom-elements/` | `html.custom-element` |
| **Total** | **125** | `primitives/index.json` | |

Source of truth is [`SPEC.md`](SPEC.md) (the WHATWG taxonomy, snapshot of 2026-10-22). Everything
under `primitives/` is **generated** from it by `scripts/generate-primitives.mjs` and proven
complete by `scripts/validate-primitives.mjs`. Both scripts run on plain Node with zero npm
dependencies.

```
html-elements/
├── AGENT.md                 this file
├── README.md                human overview: concept, layout, conventions, merge method
├── SPEC.md                  INPUT. WHATWG taxonomy: three JSON documents + prose
├── schema/                  JSON Schema for primitive.json and index.json
├── scripts/
│   ├── generate-primitives.mjs   SPEC.md + scripts/data → primitives/
│   ├── validate-primitives.mjs   exit 0 = PASS, exit 1 = FAIL
│   └── data/                     AUTHORED inputs that are not in SPEC.md (see §7)
└── primitives/              OUTPUT. Never edit by hand.
    ├── index.json           manifest: coverage, categories, groups, main primitives, all rows
    ├── README.md            catalog table of every primitive
    ├── MAIN-ELEMENTS.md     the 36 main element primitives + reduction map for the other 72
    ├── CATEGORIES.md        + 16 category-<name>.md   lens: content/form category
    ├── GROUPS.md            + 10 group-<name>.md      lens: purpose group
    ├── elements/<tag>/{primitive.json,README.md}
    ├── nodes/<slug>/{primitive.json,README.md}
    └── custom-elements/{primitive.json,README.md}
```

## 2. Ground rules for agents

1. **Never edit anything under `primitives/`.** It is wiped and rebuilt on every generator run.
   Change the inputs (§7) and regenerate.
2. **Prefer `primitive.json` over `README.md` for facts.** The README is rendered from the JSON;
   the JSON is the record.
3. **Check `provenance` before asserting something is "per spec".** Each primitive lists which
   fields were `derived_from_spec` and which were `authored` here (§5).
4. **Do not read `SPEC.md` for lookups.** It is 150 KB of raw taxonomy with three overlapping
   documents. Everything you need is already normalised into `primitives/`. Open `SPEC.md` only
   when regenerating or auditing the generator.
5. **After any change, run the validator and report its output verbatim.** A change is not done
   until it prints `PASS`.
6. **Do not add dependencies.** The scripts are intentionally dependency-free; keep them that way.

## 3. Ingesting the knowledge: loading tiers

Choose the smallest tier that answers the question. Sizes are approximate.

| Tier | Load | Size | Gives you |
|---|---|---|---|
| 0 | this file | 18 KB | orientation, field meanings, recipes |
| 1 | `primitives/MAIN-ELEMENTS.md` | 32 KB | the mental model: which 36 elements do irreducible work, what every other element reduces to and why |
| 2 | `primitives/index.json` | 94 KB | one row per primitive (id, path, description, interface, syntax, categories, group, main primitive), the full category reverse index with spec definitions, group membership, syntax-kind buckets, main-primitive map |
| 3 | `primitives/elements/<tag>/primitive.json` on demand | 2–5 KB each | the complete fact set for one element |
| 4 | `primitives/CATEGORIES.md`, `category-*.md`, `GROUPS.md`, `group-*.md` | 1–5 KB each | one lens at a time, in prose with links |
| Full | all of `primitives/` | 1.3 MB | everything; read `index.json` first, then `elements/*/primitive.json`, `nodes/*/primitive.json`, `custom-elements/primitive.json`. Skip the READMEs (they duplicate the JSON) and skip `SPEC.md`. |

**Recommended default for a working session:** Tier 1 + Tier 2 (about 125 KB), then Tier 3 for
each element you actually touch. That is enough to emit, classify, and place any element correctly.

**For a vector store or RAG index:** chunk by primitive. Each `elements/<tag>/README.md` is a
self-contained document with a stable heading structure (Content categories, Form categories,
Syntax, Placement, Classification notes, Main primitive, Example, Spec, Provenance). Use the
primitive `id` as the chunk key and the `description` as the title. Add `MAIN-ELEMENTS.md` as one
extra document for cross-element reasoning.

**For fine-grained reasoning without loading JSON into context:** use the shell recipes in §4 and
read only the returned slice.

## 4. Lookup recipes

All commands run from `html-elements/`. They use Node's built-in `require` on the generated JSON.

```sh
# One element, full record
cat primitives/elements/td/primitive.json

# One element, the three facts you need before writing the tag
node -e 'const p=require("./primitives/elements/li/primitive.json");
  console.log(p.syntax.kind, "start:",p.syntax.start_tag, "end:",p.syntax.end_tag, "| parents:",p.placement.parents, "| cats:",p.content_categories.all)'

# Every element in a content category (candidates; conditional members included)
node -e 'console.log(require("./primitives/index.json").categories.Phrasing.elements)'
# → { always: [...], conditional: {tag: "condition quoted from spec", ...} }

# All void elements (no end tag, no children)
node -e 'console.log(require("./primitives/index.json").syntax_kinds.void)'

# Members of a purpose group
node -e 'console.log(require("./primitives/index.json").groups.forms.elements)'

# What does <figure> reduce to, and why?
node -e 'const m=require("./primitives/index.json").main_primitives; console.log(m.reduces_to.figure)'

# All elements that are semantic variants of one main primitive
node -e 'const m=require("./primitives/index.json").main_primitives; console.log(m.list.find(x=>x.slug==="span").variants)'

# Which elements are context-restricted (no category; valid only inside a named parent)?
node -e 'console.log(require("./primitives/index.json").categories["Context-restricted"].elements.always)'

# Elements whose end tag may be omitted (WHATWG §13.1.2.4)
node -e 'const i=require("./primitives/index.json"); for (const r of i.primitives.filter(r=>r.kind==="element")) { const p=require("./primitives/"+r.path); if (p.syntax.end_tag==="optional") console.log(r.name) }'

# DOM node by nodeType number
node -e 'const i=require("./primitives/index.json"); for (const r of i.primitives.filter(r=>r.kind==="node")) { const p=require("./primitives/"+r.path); if (p.dom.nodeType===8) console.log(p.id, p.dom.node_type_constant) }'

# Custom element: the naming rule and the three variants
node -e 'const c=require("./primitives/custom-elements/primitive.json"); console.log(c.naming.rule); console.log(Object.keys(c.variants))'

# Grep the prose instead (fast, no Node)
grep -l "Child of tr" primitives/elements/*/README.md
```

**Classifying an unknown tag name.** If the name contains a hyphen and is not one of the reserved
SVG/MathML names listed in `custom-elements/primitive.json → naming.rule`, it is a custom element:
use `primitives/custom-elements/`. Otherwise look for `primitives/elements/<name>/`. If neither
exists, the name is not a conforming HTML element in this spec snapshot.

## 5. Field reference and trust levels

### Element primitive (`kind: "element"`)

| Field | Meaning | Trust |
|---|---|---|
| `id`, `name`, `tag`, `title`, `description` | identity; `description` is the spec's one-line summary | spec |
| `group` `{id,title}` | purpose group (document-metadata, sections, grouping-content, text-level, edits, embedded, tables, forms, interactive, scripting) | authored, from SPEC prose |
| `dom.interface` | IDL interface, e.g. `HTMLAnchorElement` | spec |
| `dom.node_type`, `dom.nodeType` (=1), `dom.namespace` | always an Element node; namespace is authored (`html`, `svg`, `mathml`) | spec / authored |
| `content_categories.always` | categories that hold unconditionally | spec |
| `content_categories.conditional` | `{Category: "condition quoted from the spec"}` | spec |
| `content_categories.all` | union of the two, for "could this ever be X" questions | derived |
| `content_categories.context_restricted` | `true` when the element has no category at all | derived |
| `form_categories.{form_associated,always,conditional,all}` | Form-associated, listed, submittable, resettable, labelable, autocapitalize-and-autocorrect-inheriting | spec |
| `syntax.kind` | `void`, `normal`, `raw text`, `escapable raw text`, `template`, `foreign` | spec |
| `syntax.start_tag`, `syntax.end_tag` | `required`, `optional`, or `forbidden` | authored (WHATWG §13.1.2.4) |
| `syntax.self_closing_start_tag_allowed` | `true` only for void and foreign elements | authored |
| `syntax.children`, `syntax.children_note` | what the parser allows inside, by syntax kind | authored |
| `placement.parent_requirement` | spec sentence such as "Child of tr." or `null` | spec |
| `placement.parents` | short-form list of allowed parents, may be empty | spec |
| `placement.note` | the standing caveat: `null` is not permission to place the element anywhere | spec |
| `classification_notes[]`, `flags[]` | places where the spec contradicts itself and how the taxonomy resolved it | spec |
| `main_primitive` `{slug,is_main,elements,job,why,see}` | which main primitive this element is, or reduces to | **interpretive**, authored in `scripts/data/core.json` |
| `example` | one minimal conforming snippet, wrapped in its required parent when needed | authored |
| `spec.{element,syntax,optional_tags,categories}` | URLs into the WHATWG standard | spec |
| `provenance.{derived_from_spec,authored}` | the two lists that define the trust column above | meta |

### Node primitive (`kind: "node"`)

`dom.interface`, `dom.nodeType`, `dom.node_type_constant` (`Node.TEXT_NODE` etc.),
`dom.applies_to` (HTML and XML, or XML only), `content_categories` (prose; Text is Flow and
Phrasing), `placement.parent`, `serialization.text_html` (how the HTML serializer writes it),
`creation` (the DOM API call), `notes[]`, `example`, `spec`.

### Custom-element primitive (`kind: "custom-element"`)

`tag` is the placeholder `<name-with-dash>`. `naming.{rule,spec,registration}` give the valid-name
rule and the `customElements.define` call. `variants` is an object keyed `autonomous`,
`form-associated`, `customized-built-in`; each has `interface`, `content_categories`,
`form_categories`, `form_associated`, `syntax`, `example`, `spec`.

### Reading the trust column

- **spec**: copied from the taxonomy in `SPEC.md`, which quotes the WHATWG standard. Safe to state
  as "per the HTML standard".
- **authored**: written here from the standard but not present in `SPEC.md`. Accurate, but cite as
  "per this primitive set", and check `spec.*` URLs if the stakes are high.
- **interpretive**: `main_primitive` is an editorial reduction (which 36 elements are irreducible
  and what the rest are variants of). It is useful for reasoning and generation, not a normative
  classification. Never present it as something the spec says.

## 6. Task recipes

**Emit a tag correctly.** Read `syntax.kind` and `syntax.end_tag`. `void` → no end tag, never
write children; `escapable raw text` / `raw text` (`textarea`, `title`, `script`, `style`) → text
children only, no nested tags; `template` → children are inert. Copy the shape of `example`.

**Decide whether X may contain Y.** Check `Y.placement.parents` first (hard requirement when
non-empty). Then check that `Y.content_categories.all` intersects what `X` accepts; the per-element
content model is in the spec URL under `X.spec.element`. Remember `placement.note`: this set is a
taxonomy, not a full nesting validator.

**Pick the right element for a purpose.** Start from `MAIN-ELEMENTS.md`: find the job, pick the
main primitive, then look at its `variants` for the semantic specialisation (`section` → `article`,
`nav`, `aside`, …; `span` → `em`, `strong`, `code`, `time`, …).

**Validate or lint HTML.** Use `index.json → syntax_kinds` for void/raw-text handling,
`categories["Context-restricted"]` plus each element's `placement.parents` for parent checks,
and `content_categories.conditional` to flag memberships that depend on attributes (for example
`input` is Interactive only when `type` is not `hidden`).

**Explain an element to a human.** Hand them `primitives/elements/<tag>/README.md`; it is written
for that.

**Build a form.** Load `group-forms.md`, then `category-form-associated.md`, `category-labelable.md`
and `category-submittable.md`. Note `meter` and `progress` are labelable but not form-associated.

## 7. Changing things

Edit inputs, never outputs. Then regenerate and validate.

| You want to… | Edit |
|---|---|
| Change an element's example snippet | `scripts/data/examples.json` |
| Move an element to another purpose group | `scripts/data/groups.json` (each element must appear exactly once) |
| Change what an element reduces to, or promote one to a main primitive | `scripts/data/core.json` (`main` and `reduces_to` must together partition all 115 elements) |
| Fix a tag-omission rule | `scripts/data/optional-tags.json` |
| Change a field's shape, add a field, change README rendering, add a view | `scripts/generate-primitives.mjs`, and `schema/*.json` if the JSON shape changes, and `scripts/validate-primitives.mjs` if the invariant set changes |
| Update to a newer WHATWG snapshot | replace `SPEC.md` (keep the three-document structure the generator expects), then regenerate; the generator will refuse if the two authoritative taxonomies inside it disagree |

```sh
node scripts/generate-primitives.mjs     # rebuilds primitives/ from scratch
node scripts/validate-primitives.mjs     # must print PASS
```

Expected validator output when healthy:

```
PASS — 1:1 coverage verified: elements 115/115, nodes 9/9, custom-element 1 primitive with 3/3 variants, 30 markdown views
```

## 8. Invariants the validator enforces

- Exactly one element primitive per element in `SPEC.md`, no extras, no omissions; same for the
  nine node types; exactly one custom-element primitive with exactly the spec's three variants.
- Every primitive has `primitive.json` and `README.md`; ids are unique and match the id pattern.
- Categories, conditions, syntax kind, parent requirement, description, interface and spec URL in
  each primitive equal the values in `SPEC.md` (no drift).
- Void-element examples contain no end tag; every example contains the element's own tag.
- Every README mirrors its JSON on the facts it states.
- `core.json` partitions all 115 elements; each element's `main_primitive` matches it.
- `MAIN-ELEMENTS.md`, every `category-*.md` and every `group-*.md` link every element they should;
  the set of top-level markdown files in `primitives/` is exactly the expected 30.
- `index.json` counts agree with the files on disk, and its rebuilt reverse index equals the one
  in `SPEC.md`.

## 9. Pitfalls

- **Counts are candidates, not census.** `index.json` counts a conditional member once. "57
  phrasing elements" means 57 that can be phrasing, not 57 in any given document.
- **Context-restricted is a reporting bucket**, not a WHATWG category. It holds the 24 elements
  with no content category that live only inside a named parent (`li`, `td`, `option`, …).
- **labelable ⊄ Form-associated.** `meter` and `progress` are labelable but have no form owner.
- **Syntax kinds are text/html only.** XML serialization has different rules; `syntax.*` does not
  apply to XHTML.
- **`placement.parents` empty does not mean "anywhere".** It means the spec names no single
  required parent. The element's content-model rules still apply.
- **Transparent elements** (`a`, `ins`, `del`, `map`) are listed as Phrasing but are phrasing only
  when their contents are phrasing; see their `flags` and `classification_notes`.
- **`svg` and `math`** are included as the two foreign roots; their children (SVG and MathML
  element sets) are out of scope and have no primitives here.
- **`main_primitive` is editorial.** The judgement calls are recorded with reasons in
  `core.json → reduces_to` and in the reduction map; if you disagree, change the data, do not
  argue with the output.

## 10. Vocabulary

- **Primitive**: one directory, one fact set, two twins (JSON and README).
- **Main primitive**: one of the 36 element primitives that add a capability a generic `div` or
  `span` cannot express. Some main primitives stand for several tags (`heading` = h1–h6,
  `list` = ul/ol, `cell` = td/th).
- **Reduces to**: the main primitive an element is a semantic variant of.
- **Group**: one of ten purpose groupings taken from the spec prose (document-metadata, sections,
  grouping-content, text-level, edits, embedded, tables, forms, interactive, scripting).
- **Category**: a WHATWG content category (Metadata, Flow, Sectioning, Heading, Phrasing,
  Embedded, Interactive, Palpable, Script-supporting) or form category (Form-associated, listed,
  submittable, resettable, labelable, autocapitalize-and-autocorrect-inheriting), plus the
  Context-restricted bucket.
- **Syntax kind**: WHATWG's parser class for the element: void, normal, raw text, escapable raw
  text, template, foreign.
