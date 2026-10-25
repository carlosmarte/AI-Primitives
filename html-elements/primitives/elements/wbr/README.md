# `<wbr>` — Line breaking opportunity

> AI Primitive `html.element.wbr` · kind: element · group: Text-level semantics · DOM interface: `HTMLElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content)

## Form categories

None.

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

Reduces to **`br`** ([`<br>`](../br/README.md)): Optional line-break opportunity instead of a forced break. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<p>super<wbr>cali<wbr>fragilistic</p>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
