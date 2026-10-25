# Comment — nodeType 8

> AI Primitive `dom.node.comment` · kind: node · constant: `Node.COMMENT_NODE` · applies to: HTML and XML

Comment node.

## Content categories

None. Node types other than Element and Text do not participate in HTML content categories.

## Placement

- Parent: Document, Element, or DocumentFragment

## Serialization (text/html)

Serialized as <!--data-->.

## Creation

`document.createComment(data)`

## Example

```html
<!-- This is a Comment node -->
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
