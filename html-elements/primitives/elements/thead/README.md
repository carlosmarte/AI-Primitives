# `<thead>` — Group of heading rows in a table

> AI Primitive `html.element.thead` · kind: element · group: Tabular data · DOM interface: `HTMLTableSectionElement`

## Content categories

None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: optional
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: Child of table; placement must satisfy the table content model.
- Parents (short form): `table`

## Main primitive

Reduces to **`table`** ([`<table>`](../table/README.md)): Optional row-group structure of a table. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<table>
  <thead><tr><th>Item</th><th>Qty</th></tr></thead>
  <tbody><tr><td>Pen</td><td>2</td></tr></tbody>
</table>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/tables.html#the-thead-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
