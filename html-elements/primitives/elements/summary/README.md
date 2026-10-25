# `<summary>` — Caption for details

> AI Primitive `html.element.summary` · kind: element · group: Interactive elements · DOM interface: `HTMLElement`

## Content categories

None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: First child of details.
- Parents (short form): `details`

## Main primitive

Reduces to **`details`** ([`<details>`](../details/README.md)): The always-visible caption of a details widget. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<details>
  <summary>More information</summary>
  <p>Hidden until expanded.</p>
</details>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
