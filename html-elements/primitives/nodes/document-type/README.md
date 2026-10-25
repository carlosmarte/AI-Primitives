# DocumentType — nodeType 10

> AI Primitive `dom.node.document-type` · kind: node · constant: `Node.DOCUMENT_TYPE_NODE` · applies to: HTML and XML

Document type declaration node.

## Content categories

None. Node types other than Element and Text do not participate in HTML content categories.

## Placement

- Parent: Document (at most one, before the root element)

## Serialization (text/html)

Serialized as <!DOCTYPE name>. In text/html the conforming form is <!DOCTYPE html>.

## Creation

`document.implementation.createDocumentType("html", "", "")`

## Notes

- The <!DOCTYPE html> node.

## Example

```html
<!DOCTYPE html>
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
