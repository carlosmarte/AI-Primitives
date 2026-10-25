# `<title>` — Document title

> AI Primitive `html.element.title` · kind: element · group: Document & metadata · DOM interface: `HTMLTitleElement`

## Content categories

- Always: [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content)

## Form categories

None.

## Syntax (text/html)

- Kind: **escapable raw text**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: escapable-raw-text — Escapable raw text element: contents are text only. Character references are decoded; child elements cannot be expressed.

## Placement

- Parent requirement: Child of head containing no other title.

## Main primitive

Reduces to **`meta`** ([`<meta>`](../meta/README.md)): Document-level text metadata: the document's name. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<head>
  <title>Page title</title>
</head>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/semantics.html#the-title-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
