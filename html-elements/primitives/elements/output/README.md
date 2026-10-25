# `<output>` — Calculated output value

> AI Primitive `html.element.output` · kind: element · group: Forms · DOM interface: `HTMLOutputElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

## Form categories

- Form-associated: yes (can have a form owner)
- Always: [listed](https://html.spec.whatwg.org/multipage/forms.html#category-listed), [resettable](https://html.spec.whatwg.org/multipage/forms.html#category-reset), [autocapitalize-and-autocorrect-inheriting](https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize), [labelable](https://html.spec.whatwg.org/multipage/forms.html#category-label)

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

Reduces to **`span`** ([`<span>`](../span/README.md)): Display-only form extra: a calculated result. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<form oninput="total.value = a.valueAsNumber + b.valueAsNumber">
  <input id="a" type="number" value="1"> +
  <input id="b" type="number" value="2"> =
  <output name="total" for="a b">3</output>
</form>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
