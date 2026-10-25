# `<label>` — Caption for a form control

> AI Primitive `html.element.label` · kind: element · group: Forms · DOM interface: `HTMLLabelElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Interactive](https://html.spec.whatwg.org/multipage/dom.html#interactive-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Classification notes

- The non-normative category index includes label under Form-associated; normative section 4.10.2 and the label definition do not. This taxonomy follows the normative text.
- Flag: Category index lists label as Form-associated. The normative form-associated list (button, fieldset, input, object, output, select, textarea, img) and label's own definition do not. *Resolution:* Not classified as Form-associated.

## Main primitive

This element **is a main primitive** (`label`, job: Input). Caption bound to a control. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<label for="name">Name</label>
<input id="name" name="name">
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/forms.html#the-label-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
