# `<dt>` — Legend for corresponding dd element(s)

> AI Primitive `html.element.dt` · kind: element · group: Grouping content · DOM interface: `HTMLElement`

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

- Parent requirement: Child of dl, or child of a div that is a child of dl; before a dt or dd within the name-value group.
- Parents (short form): `dl`, `div*`

## Main primitive

Reduces to **`li`** ([`<li>`](../li/README.md)): List item holding the name of a name-value group. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<dl>
  <dt>Primitive</dt>
  <dd>An irreducible building block.</dd>
</dl>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2
- Optional tags: https://html.spec.whatwg.org/multipage/syntax.html#optional-tags

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
