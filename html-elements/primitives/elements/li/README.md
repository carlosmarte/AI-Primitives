# `<li>` — List item

> AI Primitive `html.element.li` · kind: element · group: Grouping content · DOM interface: `HTMLLIElement`

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

- Parent requirement: Child of ol, ul, or menu.
- Parents (short form): `ol`, `ul`, `menu*`

## Main primitive

This element **is a main primitive** (`li`, job: Structure). List item. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<ul>
  <li>One</li>
  <li>Two</li>
</ul>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
