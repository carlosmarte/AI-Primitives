# `<canvas>` — Scriptable bitmap canvas

> AI Primitive `html.element.canvas` · kind: element · group: Scripting & components · DOM interface: `HTMLCanvasElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Embedded](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

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

This element **is a main primitive** (`canvas`, job: External content). Drawn pixels under script control. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<canvas width="300" height="150">Fallback text for non-canvas user agents.</canvas>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
