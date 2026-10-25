# `<caption>` — Table caption

> AI Primitive `html.element.caption` · kind: element · group: Tabular data · DOM interface: `HTMLTableCaptionElement`

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

Reduces to **`table`** ([`<table>`](../table/README.md)): Optional title structure of a table. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<table>
  <caption>Quarterly sales</caption>
  <tr><td>Q1</td><td>120</td></tr>
</table>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/tables.html#the-caption-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
