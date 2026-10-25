# `<figcaption>` — Caption for figure

> AI Primitive `html.element.figcaption` · kind: element · group: Grouping content · DOM interface: `HTMLElement`

## Content categories

None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: First or last child of figure.
- Parents (short form): `figure`

## Main primitive

Reduces to **`p`** ([`<p>`](../p/README.md)): Caption paragraph for a figure. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<figure>
  <img src="plot.png" alt="Sales by quarter">
  <figcaption>Figure 1. Sales by quarter.</figcaption>
</figure>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
