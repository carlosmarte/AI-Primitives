# `<rt>` — Ruby annotation text

> AI Primitive `html.element.rt` · kind: element · group: Text-level semantics · DOM interface: `HTMLElement`

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

- Parent requirement: Child of ruby.
- Parents (short form): `ruby`

## Main primitive

Reduces to **`span`** ([`<span>`](../span/README.md)): Inline ruby annotation text. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
