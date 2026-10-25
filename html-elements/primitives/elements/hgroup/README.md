# `<hgroup>` — Heading container

> AI Primitive `html.element.hgroup` · kind: element · group: Sections · DOM interface: `HTMLElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)
- Conditional: [Heading](https://html.spec.whatwg.org/multipage/dom.html#heading-content) — only when it has a descendant h1 to h6 element

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

- The general normative Heading definition makes membership conditional on a descendant h1–h6; the index omits this condition. The condition is retained.
- Flag: Element index (§ Index › Elements) lists only flow; palpable. Its own definition and the category index both include Heading content. *Resolution:* Classified as Heading per its normative definition.

## Main primitive

Reduces to **`heading`** ([`<h1>`](../h1/README.md) / [`<h2>`](../h2/README.md) / [`<h3>`](../h3/README.md) / [`<h4>`](../h4/README.md) / [`<h5>`](../h5/README.md) / [`<h6>`](../h6/README.md)): Heading grouped with its subheading paragraphs. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<hgroup>
  <h1>Title</h1>
  <p>Subtitle</p>
</hgroup>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
