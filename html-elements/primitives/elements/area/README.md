# `<area>` — Hyperlink or dead area on an image map

> AI Primitive `html.element.area` · kind: element · group: Embedded content · DOM interface: `HTMLAreaElement`

## Content categories

- Conditional: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content) — only when it is a descendant of a map element
- Conditional: [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content) — only when it is a descendant of a map element

## Form categories

None.

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: Where phrasing content is expected, but only with a map ancestor.

## Classification notes

- Flag: Their definitions list Flow (and Phrasing for area) unconditionally; only the non-normative category index states the condition. *Resolution:* Recorded as conditional, with the condition taken from the category index.

## Main primitive

Reduces to **`a`** ([`<a>`](../a/README.md)): Hyperlink bound to a region of an image. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<img src="nav.png" alt="Site navigation" usemap="#nav">
<map name="nav">
  <area shape="rect" coords="0,0,100,50" href="/" alt="Home">
</map>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
