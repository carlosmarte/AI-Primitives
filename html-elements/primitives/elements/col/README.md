# `<col>` — Table column

> AI Primitive `html.element.col` · kind: element · group: Tabular data · DOM interface: `HTMLTableColElement`

## Content categories

None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.

## Form categories

None.

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: Child of colgroup that has no span attribute.
- Parents (short form): `colgroup`

## Main primitive

Reduces to **`table`** ([`<table>`](../table/README.md)): Optional column structure of a table. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<table>
  <colgroup>
    <col span="2">
    <col>
  </colgroup>
  <tr><td>a</td><td>b</td><td>c</td></tr>
</table>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/tables.html#the-col-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
