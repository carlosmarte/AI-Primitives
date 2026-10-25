# `<fieldset>` — Group of form controls

> AI Primitive `html.element.fieldset` · kind: element · group: Forms · DOM interface: `HTMLFieldSetElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

## Form categories

- Form-associated: yes (can have a form owner)
- Always: [listed](https://html.spec.whatwg.org/multipage/forms.html#category-listed), [autocapitalize-and-autocorrect-inheriting](https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize)

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

Reduces to **`form`** ([`<form>`](../form/README.md)): Named sub-group of a form's controls. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<fieldset>
  <legend>Shipping</legend>
  <label>City <input name="city"></label>
</fieldset>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
