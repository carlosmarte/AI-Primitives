# `<selectedcontent>` — Mirrors content from an option

> AI Primitive `html.element.selectedcontent` · kind: element · group: Forms · DOM interface: `HTMLSelectedContentElement`

## Content categories

- Conditional: [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content) — only when descendant of a button that is a child of select

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: Descendant of a button that is a child of select.
- Parents (short form): `button`

## Classification notes

- The normative Phrasing list makes membership conditional on being in a button in a select; its element definition says Phrasing without repeating the condition. The explicit category-list condition is retained.
- Only valid inside the button of a customizable select.
- Flag: Element index lists categories 'none'; its definition and the category index say Phrasing content. *Resolution:* Classified as Phrasing. Parent recorded from the element index (button, inside a customizable select).

## Main primitive

Reduces to **`select`** ([`<select>`](../select/README.md)): Mirror of the chosen option inside a customizable select. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<select>
  <button><selectedcontent></selectedcontent></button>
  <option>One</option>
  <option>Two</option>
</select>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
