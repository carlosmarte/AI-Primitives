# `<noscript>` — Fallback content for script

> AI Primitive `html.element.noscript` · kind: element · group: Scripting & components · DOM interface: `HTMLElement`

## Content categories

- Always: [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content), [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content)

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

Reduces to **`script`** ([`<script>`](../script/README.md)): Fallback shown when script does not run. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<noscript><p>Enable JavaScript to continue.</p></noscript>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
