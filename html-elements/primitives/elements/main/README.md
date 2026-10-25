# `<main>` — Container for the dominant contents of the document

> AI Primitive `html.element.main` · kind: element · group: Sections · DOM interface: `HTMLElement`

## Content categories

- Always: [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)
- Conditional: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content) — only when a hierarchically correct main element: ancestor elements are limited to html, body, div, form without an accessible name, and autonomous custom elements

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Classification notes

- Flag: Their definitions list Flow (and Phrasing for area) unconditionally; only the non-normative category index states the condition. *Resolution:* Recorded as conditional, with the condition taken from the category index.

## Main primitive

Reduces to **`section`** ([`<section>`](../section/README.md)): Section with the main landmark role; one per page. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<main>
  <h1>Page heading</h1>
</main>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
