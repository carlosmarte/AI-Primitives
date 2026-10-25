# `<slot>` — Shadow tree slot

> AI Primitive `html.element.slot` · kind: element · group: Scripting & components · DOM interface: `HTMLSlotElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content)

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

This element **is a main primitive** (`slot`, job: Code and components). Insertion point in a shadow tree. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<template id="card">
  <h2><slot name="title">Default title</slot></h2>
</template>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
