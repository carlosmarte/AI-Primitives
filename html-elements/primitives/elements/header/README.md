# `<header>` — Introductory or navigational aids for a page or section

> AI Primitive `html.element.header` · kind: element · group: Sections · DOM interface: `HTMLElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

Reduces to **`section`** ([`<section>`](../section/README.md)): Section introducing its parent; banner landmark at page level. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<header>
  <h1>Site name</h1>
  <nav><a href="/">Home</a></nav>
</header>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/sections.html#the-header-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
