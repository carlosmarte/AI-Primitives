# `<dfn>` — Defining instance

> AI Primitive `html.element.dfn` · kind: element · group: Text-level semantics · DOM interface: `HTMLElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

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

Reduces to **`span`** ([`<span>`](../span/README.md)): Inline defining instance of a term. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<p>A <dfn>primitive</dfn> is an irreducible building block.</p>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
