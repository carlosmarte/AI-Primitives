# `<script>` — Embedded script

> AI Primitive `html.element.script` · kind: element · group: Scripting & components · DOM interface: `HTMLScriptElement`

## Content categories

- Always: [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content), [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Script-supporting](https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements)

## Form categories

None.

## Syntax (text/html)

- Kind: **raw text**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: raw-text — Raw text element: contents are text only. Character references are not decoded and child elements cannot be expressed.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

This element **is a main primitive** (`script`, job: Code and components). Executable code or data block. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<script src="app.js" defer></script>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/scripting.html#the-script-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
