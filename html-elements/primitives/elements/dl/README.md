# `<dl>` — Association list consisting of zero or more name-value groups

> AI Primitive `html.element.dl` · kind: element · group: Grouping content · DOM interface: `HTMLDListElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content)
- Conditional: [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content) — only when the element's children include at least one name-value group

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

Reduces to **`list`** ([`<ul>`](../ul/README.md) / [`<ol>`](../ol/README.md)): List whose items are name-value groups. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<dl>
  <dt>Primitive</dt>
  <dd>An irreducible building block.</dd>
</dl>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
