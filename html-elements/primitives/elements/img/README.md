# `<img>` — Image

> AI Primitive `html.element.img` · kind: element · group: Embedded content · DOM interface: `HTMLImageElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Embedded](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)
- Conditional: [Interactive](https://html.spec.whatwg.org/multipage/dom.html#interactive-content) — only when the usemap or controls attribute is present

## Form categories

- Form-associated: yes (can have a form owner)

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

This element **is a main primitive** (`img`, job: External content). A picture. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<img src="logo.png" alt="Company logo" width="120" height="40">
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
