# HTML AI Primitives — catalog

Generated from `SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22). Do not edit by hand; run `node scripts/generate-primitives.mjs`.

| Kind | Count | Location |
|---|---|---|
| element | 115 | `elements/<name>/` |
| node | 9 | `nodes/<slug>/` |
| custom-element | 1 (3 variants) | `custom-elements/` |

## Views

- [MAIN-ELEMENTS.md](MAIN-ELEMENTS.md) — the main (irreducible) element primitives and the reduction map for every other element
- [CATEGORIES.md](CATEGORIES.md) — content and form categories, one `category-<name>.md` file each
- [GROUPS.md](GROUPS.md) — purpose groups, one `group-<name>.md` file each

## Elements

| Element | Description | Interface | Syntax | Categories | Main primitive |
|---|---|---|---|---|---|
| [`<a>`](elements/a/README.md) | Hyperlink | `HTMLAnchorElement` | normal | Flow, Phrasing, Interactive, Palpable | **a** |
| [`<abbr>`](elements/abbr/README.md) | Abbreviation | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<address>`](elements/address/README.md) | Contact information for a page or article element | `HTMLElement` | normal | Flow, Palpable | section |
| [`<area>`](elements/area/README.md) | Hyperlink or dead area on an image map | `HTMLAreaElement` | void | Flow, Phrasing | a |
| [`<article>`](elements/article/README.md) | Self-contained syndicatable or reusable composition | `HTMLElement` | normal | Flow, Sectioning, Palpable | section |
| [`<aside>`](elements/aside/README.md) | Sidebar for tangentially related content | `HTMLElement` | normal | Flow, Sectioning, Palpable | section |
| [`<audio>`](elements/audio/README.md) | Audio player | `HTMLAudioElement` | normal | Flow, Phrasing, Embedded, Interactive, Palpable | **audio** |
| [`<b>`](elements/b/README.md) | Keywords | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<base>`](elements/base/README.md) | Base URL and default target navigable for hyperlinks and forms | `HTMLBaseElement` | void | Metadata | link |
| [`<bdi>`](elements/bdi/README.md) | Text directionality isolation | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<bdo>`](elements/bdo/README.md) | Text directionality formatting | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<blockquote>`](elements/blockquote/README.md) | A section quoted from another source | `HTMLQuoteElement` | normal | Flow, Palpable | div |
| [`<body>`](elements/body/README.md) | Document body | `HTMLBodyElement` | normal | *context-restricted* | **body** |
| [`<br>`](elements/br/README.md) | Line break, e.g. in poem or postal address | `HTMLBRElement` | void | Flow, Phrasing | **br** |
| [`<button>`](elements/button/README.md) | Button control | `HTMLButtonElement` | normal | Flow, Phrasing, Interactive, Palpable, Form-associated, listed, submittable, autocapitalize-and-autocorrect-inheriting, labelable | **button** |
| [`<canvas>`](elements/canvas/README.md) | Scriptable bitmap canvas | `HTMLCanvasElement` | normal | Flow, Phrasing, Embedded, Palpable | **canvas** |
| [`<caption>`](elements/caption/README.md) | Table caption | `HTMLTableCaptionElement` | normal | *context-restricted* | table |
| [`<cite>`](elements/cite/README.md) | Title of a work | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<code>`](elements/code/README.md) | Computer code | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<col>`](elements/col/README.md) | Table column | `HTMLTableColElement` | void | *context-restricted* | table |
| [`<colgroup>`](elements/colgroup/README.md) | Group of columns in a table | `HTMLTableColElement` | normal | *context-restricted* | table |
| [`<data>`](elements/data/README.md) | Machine-readable equivalent | `HTMLDataElement` | normal | Flow, Phrasing, Palpable | span |
| [`<datalist>`](elements/datalist/README.md) | Container for options for combo box control | `HTMLDataListElement` | normal | Flow, Phrasing | select |
| [`<dd>`](elements/dd/README.md) | Content for corresponding dt element(s) | `HTMLElement` | normal | *context-restricted* | li |
| [`<del>`](elements/del/README.md) | A removal from the document | `HTMLModElement` | normal | Flow, Phrasing, Palpable | span |
| [`<details>`](elements/details/README.md) | Disclosure control for hiding details | `HTMLDetailsElement` | normal | Flow, Interactive, Palpable | **details** |
| [`<dfn>`](elements/dfn/README.md) | Defining instance | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<dialog>`](elements/dialog/README.md) | Dialog box or window | `HTMLDialogElement` | normal | Flow | **dialog** |
| [`<div>`](elements/div/README.md) | Generic flow container, or container for name-value groups in dl elements | `HTMLDivElement` | normal | Flow, Palpable | **div** |
| [`<dl>`](elements/dl/README.md) | Association list consisting of zero or more name-value groups | `HTMLDListElement` | normal | Flow, Palpable | list |
| [`<dt>`](elements/dt/README.md) | Legend for corresponding dd element(s) | `HTMLElement` | normal | *context-restricted* | li |
| [`<em>`](elements/em/README.md) | Stress emphasis | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<embed>`](elements/embed/README.md) | Plugin | `HTMLEmbedElement` | void | Flow, Phrasing, Embedded, Interactive, Palpable | iframe |
| [`<fieldset>`](elements/fieldset/README.md) | Group of form controls | `HTMLFieldSetElement` | normal | Flow, Palpable, Form-associated, listed, autocapitalize-and-autocorrect-inheriting | form |
| [`<figcaption>`](elements/figcaption/README.md) | Caption for figure | `HTMLElement` | normal | *context-restricted* | p |
| [`<figure>`](elements/figure/README.md) | Figure with optional caption | `HTMLElement` | normal | Flow, Palpable | div |
| [`<footer>`](elements/footer/README.md) | Footer for a page or section | `HTMLElement` | normal | Flow, Palpable | section |
| [`<form>`](elements/form/README.md) | User-submittable form | `HTMLFormElement` | normal | Flow, Palpable | **form** |
| [`<h1>`](elements/h1/README.md) | Heading | `HTMLHeadingElement` | normal | Flow, Heading, Palpable | **heading** |
| [`<h2>`](elements/h2/README.md) | Heading | `HTMLHeadingElement` | normal | Flow, Heading, Palpable | **heading** |
| [`<h3>`](elements/h3/README.md) | Heading | `HTMLHeadingElement` | normal | Flow, Heading, Palpable | **heading** |
| [`<h4>`](elements/h4/README.md) | Heading | `HTMLHeadingElement` | normal | Flow, Heading, Palpable | **heading** |
| [`<h5>`](elements/h5/README.md) | Heading | `HTMLHeadingElement` | normal | Flow, Heading, Palpable | **heading** |
| [`<h6>`](elements/h6/README.md) | Heading | `HTMLHeadingElement` | normal | Flow, Heading, Palpable | **heading** |
| [`<head>`](elements/head/README.md) | Container for document metadata | `HTMLHeadElement` | normal | *context-restricted* | **head** |
| [`<header>`](elements/header/README.md) | Introductory or navigational aids for a page or section | `HTMLElement` | normal | Flow, Palpable | section |
| [`<hgroup>`](elements/hgroup/README.md) | Heading container | `HTMLElement` | normal | Flow, Heading, Palpable | heading |
| [`<hr>`](elements/hr/README.md) | Thematic break | `HTMLHRElement` | void | Flow | p |
| [`<html>`](elements/html/README.md) | Root element | `HTMLHtmlElement` | normal | *context-restricted* | **html** |
| [`<i>`](elements/i/README.md) | Alternate voice | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<iframe>`](elements/iframe/README.md) | Child navigable | `HTMLIFrameElement` | normal | Flow, Phrasing, Embedded, Interactive, Palpable | **iframe** |
| [`<img>`](elements/img/README.md) | Image | `HTMLImageElement` | void | Flow, Phrasing, Embedded, Interactive, Palpable, Form-associated | **img** |
| [`<input>`](elements/input/README.md) | Form control | `HTMLInputElement` | void | Flow, Phrasing, Interactive, Palpable, Form-associated, listed, submittable, resettable, autocapitalize-and-autocorrect-inheriting, labelable | **input** |
| [`<ins>`](elements/ins/README.md) | An addition to the document | `HTMLModElement` | normal | Flow, Phrasing, Palpable | span |
| [`<kbd>`](elements/kbd/README.md) | User input | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<label>`](elements/label/README.md) | Caption for a form control | `HTMLLabelElement` | normal | Flow, Phrasing, Interactive, Palpable | **label** |
| [`<legend>`](elements/legend/README.md) | Caption for fieldset | `HTMLLegendElement` | normal | *context-restricted* | label |
| [`<li>`](elements/li/README.md) | List item | `HTMLLIElement` | normal | *context-restricted* | **li** |
| [`<link>`](elements/link/README.md) | Link metadata | `HTMLLinkElement` | void | Metadata, Flow, Phrasing | **link** |
| [`<main>`](elements/main/README.md) | Container for the dominant contents of the document | `HTMLElement` | normal | Flow, Palpable | section |
| [`<map>`](elements/map/README.md) | Image map | `HTMLMapElement` | normal | Flow, Phrasing, Palpable | img |
| [`<mark>`](elements/mark/README.md) | Highlight | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<math>`](elements/math/README.md) | MathML root | `Element` | foreign | Flow, Phrasing, Embedded, Palpable | span |
| [`<menu>`](elements/menu/README.md) | Menu of commands | `HTMLMenuElement` | normal | Flow, Palpable | list |
| [`<meta>`](elements/meta/README.md) | Text metadata | `HTMLMetaElement` | void | Metadata, Flow, Phrasing | **meta** |
| [`<meter>`](elements/meter/README.md) | Gauge | `HTMLMeterElement` | normal | Flow, Phrasing, Palpable, labelable | span |
| [`<nav>`](elements/nav/README.md) | Section with navigational links | `HTMLElement` | normal | Flow, Sectioning, Palpable | section |
| [`<noscript>`](elements/noscript/README.md) | Fallback content for script | `HTMLElement` | normal | Metadata, Flow, Phrasing | script |
| [`<object>`](elements/object/README.md) | Image, child navigable , or plugin | `HTMLObjectElement` | normal | Flow, Phrasing, Embedded, Palpable, Form-associated, listed | iframe |
| [`<ol>`](elements/ol/README.md) | Ordered list | `HTMLOListElement` | normal | Flow, Palpable | **list** |
| [`<optgroup>`](elements/optgroup/README.md) | Group of options in a list box | `HTMLOptGroupElement` | normal | *context-restricted* | option |
| [`<option>`](elements/option/README.md) | Option in a list box or combo box control | `HTMLOptionElement` | normal | *context-restricted* | **option** |
| [`<output>`](elements/output/README.md) | Calculated output value | `HTMLOutputElement` | normal | Flow, Phrasing, Palpable, Form-associated, listed, resettable, autocapitalize-and-autocorrect-inheriting, labelable | span |
| [`<p>`](elements/p/README.md) | Paragraph | `HTMLParagraphElement` | normal | Flow, Palpable | **p** |
| [`<picture>`](elements/picture/README.md) | Image | `HTMLPictureElement` | normal | Flow, Phrasing, Embedded, Palpable | img |
| [`<pre>`](elements/pre/README.md) | Block of preformatted text | `HTMLPreElement` | normal | Flow, Palpable | **pre** |
| [`<progress>`](elements/progress/README.md) | Progress bar | `HTMLProgressElement` | normal | Flow, Phrasing, Palpable, labelable | span |
| [`<q>`](elements/q/README.md) | Quotation | `HTMLQuoteElement` | normal | Flow, Phrasing, Palpable | span |
| [`<rp>`](elements/rp/README.md) | Parenthesis for ruby annotation text | `HTMLElement` | normal | *context-restricted* | span |
| [`<rt>`](elements/rt/README.md) | Ruby annotation text | `HTMLElement` | normal | *context-restricted* | span |
| [`<ruby>`](elements/ruby/README.md) | Ruby annotation(s) | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<s>`](elements/s/README.md) | Inaccurate text | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<samp>`](elements/samp/README.md) | Computer output | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<script>`](elements/script/README.md) | Embedded script | `HTMLScriptElement` | raw text | Metadata, Flow, Phrasing, Script-supporting | **script** |
| [`<search>`](elements/search/README.md) | Container for search controls | `HTMLElement` | normal | Flow, Palpable | section |
| [`<section>`](elements/section/README.md) | Generic document or application section | `HTMLElement` | normal | Flow, Sectioning, Palpable | **section** |
| [`<select>`](elements/select/README.md) | List box control | `HTMLSelectElement` | normal | Flow, Phrasing, Interactive, Palpable, Form-associated, listed, submittable, resettable, autocapitalize-and-autocorrect-inheriting, labelable | **select** |
| [`<selectedcontent>`](elements/selectedcontent/README.md) | Mirrors content from an option | `HTMLSelectedContentElement` | normal | Phrasing | select |
| [`<slot>`](elements/slot/README.md) | Shadow tree slot | `HTMLSlotElement` | normal | Flow, Phrasing | **slot** |
| [`<small>`](elements/small/README.md) | Side comment | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<source>`](elements/source/README.md) | Image source for img or media source for video or audio | `HTMLSourceElement` | void | *context-restricted* | **source** |
| [`<span>`](elements/span/README.md) | Generic phrasing container | `HTMLSpanElement` | normal | Flow, Phrasing, Palpable | **span** |
| [`<strong>`](elements/strong/README.md) | Importance | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<style>`](elements/style/README.md) | Embedded styling information | `HTMLStyleElement` | raw text | Metadata, Flow | link |
| [`<sub>`](elements/sub/README.md) | Subscript | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<summary>`](elements/summary/README.md) | Caption for details | `HTMLElement` | normal | *context-restricted* | details |
| [`<sup>`](elements/sup/README.md) | Superscript | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<svg>`](elements/svg/README.md) | SVG root | `SVGSVGElement` | foreign | Flow, Phrasing, Embedded, Palpable | canvas |
| [`<table>`](elements/table/README.md) | Table | `HTMLTableElement` | normal | Flow, Palpable | **table** |
| [`<tbody>`](elements/tbody/README.md) | Group of rows in a table | `HTMLTableSectionElement` | normal | *context-restricted* | table |
| [`<td>`](elements/td/README.md) | Table cell | `HTMLTableCellElement` | normal | *context-restricted* | **cell** |
| [`<template>`](elements/template/README.md) | Template | `HTMLTemplateElement` | template | Metadata, Flow, Phrasing, Script-supporting | **template** |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | `HTMLTextAreaElement` | escapable raw text | Flow, Phrasing, Interactive, Palpable, Form-associated, listed, submittable, resettable, autocapitalize-and-autocorrect-inheriting, labelable | **textarea** |
| [`<tfoot>`](elements/tfoot/README.md) | Group of footer rows in a table | `HTMLTableSectionElement` | normal | *context-restricted* | table |
| [`<th>`](elements/th/README.md) | Table header cell | `HTMLTableCellElement` | normal | *context-restricted* | **cell** |
| [`<thead>`](elements/thead/README.md) | Group of heading rows in a table | `HTMLTableSectionElement` | normal | *context-restricted* | table |
| [`<time>`](elements/time/README.md) | Machine-readable equivalent of date- or time-related data | `HTMLTimeElement` | normal | Flow, Phrasing, Palpable | span |
| [`<title>`](elements/title/README.md) | Document title | `HTMLTitleElement` | escapable raw text | Metadata | meta |
| [`<tr>`](elements/tr/README.md) | Table row | `HTMLTableRowElement` | normal | *context-restricted* | **tr** |
| [`<track>`](elements/track/README.md) | Timed text track | `HTMLTrackElement` | void | *context-restricted* | source |
| [`<u>`](elements/u/README.md) | Unarticulated annotation | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<ul>`](elements/ul/README.md) | List | `HTMLUListElement` | normal | Flow, Palpable | **list** |
| [`<var>`](elements/var/README.md) | Variable | `HTMLElement` | normal | Flow, Phrasing, Palpable | span |
| [`<video>`](elements/video/README.md) | Video player | `HTMLVideoElement` | normal | Flow, Phrasing, Embedded, Interactive, Palpable | **video** |
| [`<wbr>`](elements/wbr/README.md) | Line breaking opportunity | `HTMLElement` | void | Flow, Phrasing | br |

## DOM node types

| Node | nodeType | Applies to |
|---|---|---|
| [Element](nodes/element/README.md) | 1 | HTML and XML |
| [Attr](nodes/attr/README.md) | 2 | HTML and XML |
| [Text](nodes/text/README.md) | 3 | HTML and XML |
| [CDATASection](nodes/cdata-section/README.md) | 4 | XML only |
| [ProcessingInstruction](nodes/processing-instruction/README.md) | 7 | XML (effectively) |
| [Comment](nodes/comment/README.md) | 8 | HTML and XML |
| [Document](nodes/document/README.md) | 9 | HTML and XML |
| [DocumentType](nodes/document-type/README.md) | 10 | HTML and XML |
| [DocumentFragment](nodes/document-fragment/README.md) | 11 | HTML and XML |

## Custom element

- [custom element](custom-elements/README.md) — variants: autonomous, form-associated, customized-built-in
