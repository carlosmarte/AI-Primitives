# `<th>` — Table header cell

> AI Primitive `html.element.th` · kind: element · group: Tabular data · DOM interface: `HTMLTableCellElement`

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

- Parent requirement: Child of tr.
- Parents (short form): `tr`

## Classification notes

- The non-normative element index suggests conditional Interactive membership; its normative element definition says Categories: None. It is recorded in Context-restricted.
- Flag: Element index lists 'interactive*', but the th definition says Categories: None, and th is absent from the Interactive row of the category index. *Resolution:* Classified as context-restricted (no categories) per its definition. The index entry may reflect an in-progress change; worth re-checking.

## Main primitive

This element **is a main primitive** (`cell`, job: Structure). Table data or header cell. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<table>
  <tr><th scope="col">Item</th><th scope="col">Qty</th></tr>
  <tr><td>Pen</td><td>2</td></tr>
</table>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/tables.html#the-th-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
