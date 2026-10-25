# Document — nodeType 9

> AI Primitive `dom.node.document` · kind: node · constant: `Node.DOCUMENT_NODE` · applies to: HTML and XML

Document node.

## Content categories

None. Node types other than Element and Text do not participate in HTML content categories.

## Placement

- Parent: none (this node is always a tree root)

## Serialization (text/html)

Serialized as the concatenation of its children (DocumentType, then the root Element, plus any Comments).

## Creation

`document.implementation.createHTMLDocument(title) or DOMParser.parseFromString(html, "text/html")`

## Notes

- Root of the tree.

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>Page</title></head>
  <body></body>
</html>
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
