# Text — nodeType 3

> AI Primitive `dom.node.text` · kind: node · constant: `Node.TEXT_NODE` · applies to: HTML and XML

Character data node.

## Content categories

Flow content and Phrasing content. Palpable content only when it is not inter-element whitespace.

## Placement

- Parent: Element or DocumentFragment

## Serialization (text/html)

Serialized as escaped text (&, <, >, U+00A0) except when the parent is style, script, xmp, iframe, noembed, noframes, plaintext, or noscript (when scripting is enabled), where it is emitted verbatim.

## Creation

`document.createTextNode(data)`

## Notes

- Counts as flow and phrasing content.

## Example

```html
<p>This sentence is a Text node inside a p element.</p>
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
