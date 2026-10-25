# `<input>` — Form control

> AI Primitive `html.element.input` · kind: element · group: Forms · DOM interface: `HTMLInputElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content)
- Conditional: [Interactive](https://html.spec.whatwg.org/multipage/dom.html#interactive-content) — only when the type attribute is not in the Hidden state
- Conditional: [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content) — only when the type attribute is not in the Hidden state

## Form categories

- Form-associated: yes (can have a form owner)
- Always: [listed](https://html.spec.whatwg.org/multipage/forms.html#category-listed), [submittable](https://html.spec.whatwg.org/multipage/forms.html#category-submit), [resettable](https://html.spec.whatwg.org/multipage/forms.html#category-reset), [autocapitalize-and-autocorrect-inheriting](https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize)
- Conditional: [labelable](https://html.spec.whatwg.org/multipage/forms.html#category-label) — only when the type attribute is not in the Hidden state

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

This element **is a main primitive** (`input`, job: Input). Single-value control; type selects the widget. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<input type="email" name="email" required>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/input.html#the-input-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
