# `<head>` — Container for document metadata

> AI Primitive `html.element.head` · kind: element · group: Document & metadata · DOM interface: `HTMLHeadElement`

## Content categories

None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: optional · End tag: optional
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: First element child of html.
- Parents (short form): `html`

## Main primitive

This element **is a main primitive** (`head`, job: Document skeleton). Container for metadata. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<head>
  <meta charset="utf-8">
  <title>Page</title>
</head>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
