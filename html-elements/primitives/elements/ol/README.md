# `<ol>` — Ordered list

> AI Primitive `html.element.ol` · kind: element · group: Grouping content · DOM interface: `HTMLOListElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content)
- Conditional: [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content) — only when the element's children include at least one li element

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

This element **is a main primitive** (`list`, job: Structure). Unordered or ordered list container. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
