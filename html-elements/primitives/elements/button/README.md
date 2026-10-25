# `<button>` — Button control

> AI Primitive `html.element.button` · kind: element · group: Forms · DOM interface: `HTMLButtonElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Interactive](https://html.spec.whatwg.org/multipage/dom.html#interactive-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

## Form categories

- Form-associated: yes (can have a form owner)
- Always: [listed](https://html.spec.whatwg.org/multipage/forms.html#category-listed), [submittable](https://html.spec.whatwg.org/multipage/forms.html#category-submit), [autocapitalize-and-autocorrect-inheriting](https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize), [labelable](https://html.spec.whatwg.org/multipage/forms.html#category-label)

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

This element **is a main primitive** (`button`, job: Input). Clickable control. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<button type="submit">Save</button>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
