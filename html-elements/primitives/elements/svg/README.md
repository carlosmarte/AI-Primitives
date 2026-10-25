# `<svg>` — SVG root

> AI Primitive `html.element.svg` · kind: element · group: Embedded content · DOM interface: `SVGSVGElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Embedded](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

## Form categories

None.

## Syntax (text/html)

- Kind: **foreign**
- Start tag: required · End tag: required
- Self-closing start tag allowed: yes
- Children: foreign — Foreign element: contents follow the SVG or MathML specification. Self-closing start tags are honoured inside foreign content.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Classification notes

- Flag: Defined by the SVG and MathML specs, not HTML; categories come from the HTML element index. *Resolution:* Included as foreign elements.

## Main primitive

Reduces to **`canvas`** ([`<canvas>`](../canvas/README.md)): Drawn graphics described as vectors instead of scripted pixels. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40"/>
</svg>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/https://w3c.github.io/svgwg/svg2-draft/struct.html#elementdef-svg
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
