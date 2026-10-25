# `<option>` — Option in a list box or combo box control

> AI Primitive `html.element.option` · kind: element · group: Forms · DOM interface: `HTMLOptionElement`

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

- Parent requirement: Descendant of select, datalist, or optgroup; immediate parent must permit option under the applicable content model (including permitted div wrappers).
- Parents (short form): `select`, `datalist`, `optgroup`, `div*`

## Main primitive

This element **is a main primitive** (`option`, job: Input). One choice in a select or datalist. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<select name="size">
  <option value="s">Small</option>
  <option value="m">Medium</option>
</select>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
