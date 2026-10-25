# `<optgroup>` — Group of options in a list box

> AI Primitive `html.element.optgroup` · kind: element · group: Forms · DOM interface: `HTMLOptGroupElement`

## Content categories

None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: optional
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: Descendant of select; immediate parent must permit optgroup under the select content model (including permitted div wrappers).
- Parents (short form): `select`, `div*`

## Main primitive

Reduces to **`option`** ([`<option>`](../option/README.md)): Labelled group of options. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<select name="size">
  <optgroup label="Standard">
    <option value="s">Small</option>
    <option value="m">Medium</option>
  </optgroup>
</select>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
