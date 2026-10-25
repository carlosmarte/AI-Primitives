# `<nav>` — Section with navigational links

> AI Primitive `html.element.nav` · kind: element · group: Sections · DOM interface: `HTMLElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Sectioning](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

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

Reduces to **`section`** ([`<section>`](../section/README.md)): Section with the navigation landmark role. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<nav>
  <a href="/">Home</a>
  <a href="/docs">Docs</a>
</nav>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/sections.html#the-nav-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
