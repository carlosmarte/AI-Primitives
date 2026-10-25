# `<base>` — Base URL and default target navigable for hyperlinks and forms

> AI Primitive `html.element.base` · kind: element · group: Document & metadata · DOM interface: `HTMLBaseElement`

## Content categories

- Always: [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content)

## Form categories

None.

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: Child of head; at most one base in the document.

## Main primitive

Reduces to **`link`** ([`<link>`](../link/README.md)): Document-level URL configuration for links and forms. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<head>
  <base href="https://example.com/">
  <title>Page</title>
</head>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/semantics.html#the-base-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
