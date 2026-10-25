# ProcessingInstruction — nodeType 7

> AI Primitive `dom.node.processing-instruction` · kind: node · constant: `Node.PROCESSING_INSTRUCTION_NODE` · applies to: XML (effectively)

XML serialization node; text/html does not serialize processing-instruction nodes. DOM APIs can create ProcessingInstruction objects even for an HTML document, so XML-only describes syntax use, not all possible API-created objects.

## Content categories

None. Node types other than Element and Text do not participate in HTML content categories.

## Placement

- Parent: Document, Element, or DocumentFragment (XML documents)

## Serialization (text/html)

Serialized as <?target data>. The text/html parser never produces one: <?...?> is parsed as a bogus Comment. The DOM API can still create one in an HTML document.

## Creation

`document.createProcessingInstruction(target, data)`

## Notes

- The HTML parser turns <?...> into a Comment; the DOM API can still create one in an HTML document.

## Example

```html
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
