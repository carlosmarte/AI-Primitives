# HTML elements as AI Primitives

A one-to-one mapping from the WHATWG HTML Living Standard to **AI Primitives**: small,
self-contained, machine- and human-readable building blocks that an agent can load one at a
time when it needs to emit, parse, validate, or reason about HTML.

Every HTML element and every DOM node type defined in [`SPEC.md`](SPEC.md) has exactly one
primitive, and one further primitive covers custom elements, with the spec's three families as
variants inside it. Nothing in the spec is left unmapped, and no
primitive exists without a spec entry. The validator enforces both directions.

| Kind | Count | Where |
|---|---|---|
| HTML element (113 named + `svg` + `math`) | 115 | `primitives/elements/<name>/` |
| DOM node type | 9 | `primitives/nodes/<slug>/` |
| Custom element (3 variants: autonomous, form-associated, customized built-in) | 1 | `primitives/custom-elements/` |
| **Total** | **125** | `primitives/index.json` |

Agents: start with [`AGENT.md`](AGENT.md) for loading tiers, lookup recipes, field trust levels, and change rules.

## What an AI Primitive is here

A primitive is a directory holding two twins of the same fact set:

- `primitive.json` for machines. Validated against [`schema/primitive.schema.json`](schema/primitive.schema.json).
- `README.md` for people and for agents that read prose better than JSON.

An element primitive answers the questions an agent asks before writing a tag:

- **What is it?** Spec description, DOM interface, namespace, purpose group.
- **Where may it go?** Content categories (always vs. conditional, with the condition quoted from the spec), form categories, parent requirement, context-restricted flag.
- **How is it written?** Syntax kind (`void`, `normal`, `raw text`, `escapable raw text`, `template`, `foreign`), whether the start and end tags are required, optional, or forbidden, whether a self-closing start tag is honoured, and what its children can be.
- **What does it look like?** One conforming minimal example, inside its required parent when the spec demands one.
- **Where is this stated?** Spec URLs for the element, every category it belongs to, and the syntax rules.
- **How much of this came from the spec?** `provenance.derived_from_spec` versus `provenance.authored`, so an agent knows which fields to trust as normative and which were added here.

Node primitives (Text, Comment, Attr, and so on) record `nodeType`, the `Node.*_NODE` constant,
whether the type exists in text/html or only XML, how the HTML serializer writes it, how to
create it, and its content-category membership where it has one (Text is Flow and Phrasing).

The custom-element primitive stands for every author-defined hyphenated element name, which cannot
be enumerated. Its `variants` block records how the three spec families differ: autonomous custom
elements extend `HTMLElement`, form-associated ones add `static formAssociated = true` and gain the
form categories, and customized built-in elements reuse a built-in tag through the `is` attribute
and inherit that tag's classification.

## Layout

```
html-elements/
├── SPEC.md                          input: WHATWG taxonomy (three JSON documents + prose)
├── README.md                        this file
├── schema/
│   ├── primitive.schema.json        JSON Schema for every primitive.json
│   └── index.schema.json            JSON Schema for primitives/index.json
├── scripts/
│   ├── generate-primitives.mjs      SPEC.md → primitives/ (zero dependencies)
│   ├── validate-primitives.mjs      proves 1:1 coverage and internal consistency
│   └── data/
│       ├── examples.json            authored canonical example per element
│       ├── groups.json              purpose grouping (from the spec prose in SPEC.md)
│       ├── core.json                main primitives and the element → main reduction map
│       └── optional-tags.json       tag-omission rules (WHATWG §13.1.2.4)
└── primitives/                      generated; do not edit by hand
    ├── index.json                   manifest, coverage counts, reverse index, groups, main primitives
    ├── README.md                    catalog table of every primitive
    ├── MAIN-ELEMENTS.md             the 36 main (irreducible) element primitives + reduction map
    ├── CATEGORIES.md                content and form categories summary
    ├── category-<name>.md           one file per category (16)
    ├── GROUPS.md                    purpose groups summary
    ├── group-<name>.md              one file per purpose group (10)
    ├── elements/<name>/{primitive.json,README.md}
    ├── nodes/<slug>/{primitive.json,README.md}
    └── custom-elements/{primitive.json,README.md}   one primitive, variants inside
```

## Regenerate and verify

```sh
node scripts/generate-primitives.mjs
node scripts/validate-primitives.mjs
```

The generator refuses to run if the two authoritative taxonomies inside `SPEC.md` disagree on any
element's categories or syntax, if any element lacks a group or example, or if the rebuilt reverse
index does not reproduce the one in `SPEC.md`. The validator exits non-zero on any missing, extra,
or drifted primitive.

## How the spec was merged

`SPEC.md` contains three independently produced taxonomies. The generator uses:

- the **primary** taxonomy (has `metadata.standard`) for categories, conditions, syntax kind,
  parent requirements, classification notes, and spec URLs;
- the **enriched** taxonomy (has `meta.method`) for the one-line description, DOM interface,
  short-form parent list, transparent-content-model notes, and the flagged spec inconsistencies;
- the **flat** taxonomy only as an informational cross-check; it is less precise and is not
  copied into any primitive.

The two authoritative taxonomies agree on every element. Where the spec contradicts itself
(`hgroup`, `th`, `object`, `selectedcontent`, `label`, `area`, `main`, `audio`, `video`, and the
transparent elements `a`, `ins`, `del`, `map`), the primitive carries the flag and the resolution.

## Conventions worth knowing

- **Conditional membership.** `content_categories.all` lists every category the element can ever
  belong to; `conditional` quotes the spec's condition. Counts in `index.json` count conditional
  members once, so they are not counts for a particular document.
- **Context-restricted** is a reporting bucket, not a WHATWG category: it marks the 24 elements
  with no content category that are valid only inside a named parent.
- **labelable is not a subset of Form-associated.** `meter` and `progress` are labelable without
  having a form owner.
- **Syntax kinds apply to text/html.** The XML serialization has different rules.
- **Authored fields** (`example`, `group`, tag-omission rules, namespace, node serialization and
  creation notes) were written from the standard but are not in `SPEC.md`; each primitive names
  them under `provenance.authored`.

## Main primitives

Not every element adds a capability. `primitives/MAIN-ELEMENTS.md` names the 36 that do, grouped
by job (document skeleton, structure, generic box, navigation, input, external content, built-in
behaviour, code), and maps each of the other 72 elements to the main primitive it is a semantic
variant of, with a one-line reason. Each element's `primitive.json` carries the same fact under
`main_primitive`, so an agent can ask "what is this really?" without opening the map. The mapping
is authored in `scripts/data/core.json` from the spec prose in `SPEC.md`; the validator requires it
to partition all 115 elements exactly.

`primitives/CATEGORIES.md` and `primitives/GROUPS.md` give the two other lenses, one file per
category and per group, each listing its members with syntax kind, condition, and main primitive.

## Using a primitive from an agent

Load `primitives/index.json`, pick the row you need, and read its `path`. For a quick lookup by
tag name the path is always `primitives/elements/<name>/primitive.json`. To find every element
that may appear where phrasing content is expected, read `index.categories.Phrasing.elements`.
