# `<details>` — Disclosure control for hiding details

> AI Primitive `html.element.details` · kind: element · group: Interactive elements · DOM interface: `HTMLDetailsElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Interactive](https://html.spec.whatwg.org/multipage/dom.html#interactive-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

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

This element **is a main primitive** (`details`, job: Built-in behaviour). Disclosure widget with no script. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<details>
  <summary>More information</summary>
  <p>Hidden until expanded.</p>
</details>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
