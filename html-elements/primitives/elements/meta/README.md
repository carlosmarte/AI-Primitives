# `<meta>` — Text metadata

> AI Primitive `html.element.meta` · kind: element · group: Document & metadata · DOM interface: `HTMLMetaElement`

## Content categories

- Always: [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content)
- Conditional: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content) — only when the itemprop attribute is present
- Conditional: [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content) — only when the itemprop attribute is present

## Form categories

None.

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Main primitive

This element **is a main primitive** (`meta`, job: Document skeleton). Document-level name/value metadata. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
