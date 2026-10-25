# Attr — nodeType 2

> AI Primitive `dom.node.attr` · kind: node · constant: `Node.ATTRIBUTE_NODE` · applies to: HTML and XML

Attribute node; associated with an element, not a child in the node tree.

## Content categories

None. Node types other than Element and Text do not participate in HTML content categories.

## Placement

- Parent: None. Attached to an Element via its NamedNodeMap (element.attributes); ownerElement points back to it.

## Serialization (text/html)

Serialized inside its owner element’s start tag as name="value" with &, ", and U+00A0 escaped. Never appears as a child node.

## Creation

`document.createAttribute(localName) or element.setAttribute(name, value)`

## Notes

- A Node, but never a child in the tree; hangs off an Element.

## Example

```html
<a href="/docs" target="_blank">Docs</a>  <!-- href and target are Attr nodes -->
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
