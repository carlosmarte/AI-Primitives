# `<template>` — Template

> AI Primitive `html.element.template` · kind: element · group: Scripting & components · DOM interface: `HTMLTemplateElement`

## Content categories

- Always: [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content), [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Script-supporting](https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements)

## Form categories

None.

## Syntax (text/html)

- Kind: **template**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: template-contents — Template element: parsed children are moved into a DocumentFragment (the template contents) owned by an inert document; they are not children of the element in the DOM.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

This element **is a main primitive** (`template`, job: Code and components). Inert markup to clone later. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<template id="row">
  <tr><td></td></tr>
</template>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
