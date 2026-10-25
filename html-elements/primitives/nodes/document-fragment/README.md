# DocumentFragment — nodeType 11

> AI Primitive `dom.node.document-fragment` · kind: node · constant: `Node.DOCUMENT_FRAGMENT_NODE` · applies to: HTML and XML

Fragment node; ShadowRoot is a specialized DocumentFragment, not a separate nodeType.

## Content categories

None. Node types other than Element and Text do not participate in HTML content categories.

## Placement

- Parent: None. A DocumentFragment is always a root; it is never a child of another node.

## Serialization (text/html)

Not serialized itself; its children are serialized in order. Inserting a fragment moves its children into the target and leaves the fragment empty.

## Creation

`document.createDocumentFragment(), a template element’s .content, or element.attachShadow() for a ShadowRoot`

## Notes

- ShadowRoot and template contents are DocumentFragments.

## Example

```html
<template id="row">
  <tr><td></td></tr>
</template>
<!-- document.getElementById("row").content is a DocumentFragment -->
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
