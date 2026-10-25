# Element — nodeType 1

> AI Primitive `dom.node.element` · kind: node · constant: `Node.ELEMENT_NODE` · applies to: HTML and XML

Element node, including HTML, SVG, and MathML elements.

## Content categories

Determined per element; see the 115 element primitives under primitives/elements/.

## Placement

- Parent: Document (root element), Element, or DocumentFragment

## Serialization (text/html)

Serialized as a start tag with attributes, the serialized children (per the element’s syntax kind), and an end tag unless the element is void.

## Creation

`document.createElement(localName) or document.createElementNS(namespace, qualifiedName)`

## Notes

- Every element in the taxonomy above.

## Example

```html
<p class="lead">Text</p>
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
