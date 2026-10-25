# `<math>` — MathML root

> AI Primitive `html.element.math` · kind: element · group: Embedded content · DOM interface: `Element`

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

Reduces to **`span`** ([`<span>`](../span/README.md)): Phrasing-level mathematical markup from another vocabulary. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<math>
  <mi>x</mi><mo>=</mo><mn>2</mn>
</math>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/https://w3c.github.io/mathml-core/#the-top-level-math-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
