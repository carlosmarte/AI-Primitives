# CDATASection — nodeType 4

> AI Primitive `dom.node.cdata-section` · kind: node · constant: `Node.CDATA_SECTION_NODE` · applies to: XML only

XML-only CDATA node, a subtype of Text. In text/html, CDATA syntax is permitted inside foreign content but parses into Text nodes, not CDATASection nodes.

## Content categories

None. Node types other than Element and Text do not participate in HTML content categories.

## Placement

- Parent: Element or DocumentFragment (XML documents)

## Serialization (text/html)

Not producible by the HTML parser. In text/html, <![CDATA[...]]> is only recognised inside foreign (SVG/MathML) content and parses to a Text node; elsewhere it is a bogus Comment.

## Creation

`document.createCDATASection(data) on an XML document only; it throws NotSupportedError on an HTML document`

## Notes

- createCDATASection() throws in HTML documents; in HTML syntax, CDATA sections exist only inside foreign (SVG/MathML) content and become Text.

## Example

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <desc><![CDATA[literal <text> here]]></desc>
</svg>
<!-- In an XML document this is a CDATASection; the text/html parser yields a Text node -->
```

## Spec

- Node interface: https://dom.spec.whatwg.org/#interface-node
- DOM node types: https://dom.spec.whatwg.org/#node

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `slug`, `dom.node_type_constant`, `content_categories`, `placement`, `serialization`, `creation`, `example`
- Machine-readable twin: `primitive.json`
