# `<link>` — Link metadata

> AI Primitive `html.element.link` · kind: element · group: Document & metadata · DOM interface: `HTMLLinkElement`

## Content categories

- Always: [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content)
- Conditional: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content) — only when itemprop is present, or rel is present and contains only keywords defined as body-ok
- Conditional: [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content) — only when itemprop is present, or rel is present and contains only keywords defined as body-ok

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

This element **is a main primitive** (`link`, job: Document skeleton). Relationship to an external resource. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<link rel="stylesheet" href="styles.css">
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/semantics.html#the-link-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
