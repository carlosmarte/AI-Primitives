# Phrasing

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Text and elements marking up text within paragraphs.

**Spec.** https://html.spec.whatwg.org/multipage/dom.html#phrasing-content

**Members.** 57 elements: 53 always, 4 conditional.

## Main primitives in this category

- [`a`](MAIN-ELEMENTS.md#a) — [`<a>`](elements/a/README.md): Hyperlink.
- [`audio`](MAIN-ELEMENTS.md#audio) — [`<audio>`](elements/audio/README.md): Audio player.
- [`br`](MAIN-ELEMENTS.md#br) — [`<br>`](elements/br/README.md): Line break.
- [`button`](MAIN-ELEMENTS.md#button) — [`<button>`](elements/button/README.md): Clickable control.
- [`canvas`](MAIN-ELEMENTS.md#canvas) — [`<canvas>`](elements/canvas/README.md): Drawn pixels under script control.
- [`iframe`](MAIN-ELEMENTS.md#iframe) — [`<iframe>`](elements/iframe/README.md): Another document, embedded.
- [`img`](MAIN-ELEMENTS.md#img) — [`<img>`](elements/img/README.md): A picture.
- [`input`](MAIN-ELEMENTS.md#input) — [`<input>`](elements/input/README.md): Single-value control; type selects the widget.
- [`label`](MAIN-ELEMENTS.md#label) — [`<label>`](elements/label/README.md): Caption bound to a control.
- [`link`](MAIN-ELEMENTS.md#link) — [`<link>`](elements/link/README.md): Relationship to an external resource.
- [`meta`](MAIN-ELEMENTS.md#meta) — [`<meta>`](elements/meta/README.md): Document-level name/value metadata.
- [`script`](MAIN-ELEMENTS.md#script) — [`<script>`](elements/script/README.md): Executable code or data block.
- [`select`](MAIN-ELEMENTS.md#select) — [`<select>`](elements/select/README.md): Choose from a list of options.
- [`slot`](MAIN-ELEMENTS.md#slot) — [`<slot>`](elements/slot/README.md): Insertion point in a shadow tree.
- [`span`](MAIN-ELEMENTS.md#span) — [`<span>`](elements/span/README.md): Generic inline container.
- [`template`](MAIN-ELEMENTS.md#template) — [`<template>`](elements/template/README.md): Inert markup to clone later.
- [`textarea`](MAIN-ELEMENTS.md#textarea) — [`<textarea>`](elements/textarea/README.md): Multi-line text control.
- [`video`](MAIN-ELEMENTS.md#video) — [`<video>`](elements/video/README.md): Video player.

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<a>`](elements/a/README.md) | Hyperlink | normal | [Text-level semantics](group-text-level.md) | **[`a`](MAIN-ELEMENTS.md#a)** | always |
| [`<abbr>`](elements/abbr/README.md) | Abbreviation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<area>`](elements/area/README.md) | Hyperlink or dead area on an image map | void | [Embedded content](group-embedded.md) | [`a`](MAIN-ELEMENTS.md#a) | only when it is a descendant of a map element |
| [`<audio>`](elements/audio/README.md) | Audio player | normal | [Embedded content](group-embedded.md) | **[`audio`](MAIN-ELEMENTS.md#audio)** | always |
| [`<b>`](elements/b/README.md) | Keywords | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<bdi>`](elements/bdi/README.md) | Text directionality isolation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<bdo>`](elements/bdo/README.md) | Text directionality formatting | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<br>`](elements/br/README.md) | Line break, e.g. in poem or postal address | void | [Text-level semantics](group-text-level.md) | **[`br`](MAIN-ELEMENTS.md#br)** | always |
| [`<button>`](elements/button/README.md) | Button control | normal | [Forms](group-forms.md) | **[`button`](MAIN-ELEMENTS.md#button)** | always |
| [`<canvas>`](elements/canvas/README.md) | Scriptable bitmap canvas | normal | [Scripting & components](group-scripting.md) | **[`canvas`](MAIN-ELEMENTS.md#canvas)** | always |
| [`<cite>`](elements/cite/README.md) | Title of a work | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<code>`](elements/code/README.md) | Computer code | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<data>`](elements/data/README.md) | Machine-readable equivalent | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<datalist>`](elements/datalist/README.md) | Container for options for combo box control | normal | [Forms](group-forms.md) | [`select`](MAIN-ELEMENTS.md#select) | always |
| [`<del>`](elements/del/README.md) | A removal from the document | normal | [Edits](group-edits.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<dfn>`](elements/dfn/README.md) | Defining instance | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<em>`](elements/em/README.md) | Stress emphasis | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<embed>`](elements/embed/README.md) | Plugin | void | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<i>`](elements/i/README.md) | Alternate voice | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<iframe>`](elements/iframe/README.md) | Child navigable | normal | [Embedded content](group-embedded.md) | **[`iframe`](MAIN-ELEMENTS.md#iframe)** | always |
| [`<img>`](elements/img/README.md) | Image | void | [Embedded content](group-embedded.md) | **[`img`](MAIN-ELEMENTS.md#img)** | always |
| [`<input>`](elements/input/README.md) | Form control | void | [Forms](group-forms.md) | **[`input`](MAIN-ELEMENTS.md#input)** | always |
| [`<ins>`](elements/ins/README.md) | An addition to the document | normal | [Edits](group-edits.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<kbd>`](elements/kbd/README.md) | User input | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<label>`](elements/label/README.md) | Caption for a form control | normal | [Forms](group-forms.md) | **[`label`](MAIN-ELEMENTS.md#label)** | always |
| [`<link>`](elements/link/README.md) | Link metadata | void | [Document & metadata](group-document-metadata.md) | **[`link`](MAIN-ELEMENTS.md#link)** | only when itemprop is present, or rel is present and contains only keywords defined as body-ok |
| [`<map>`](elements/map/README.md) | Image map | normal | [Embedded content](group-embedded.md) | [`img`](MAIN-ELEMENTS.md#img) | always |
| [`<mark>`](elements/mark/README.md) | Highlight | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<math>`](elements/math/README.md) | MathML root | foreign | [Embedded content](group-embedded.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<meta>`](elements/meta/README.md) | Text metadata | void | [Document & metadata](group-document-metadata.md) | **[`meta`](MAIN-ELEMENTS.md#meta)** | only when the itemprop attribute is present |
| [`<meter>`](elements/meter/README.md) | Gauge | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<noscript>`](elements/noscript/README.md) | Fallback content for script | normal | [Scripting & components](group-scripting.md) | [`script`](MAIN-ELEMENTS.md#script) | always |
| [`<object>`](elements/object/README.md) | Image, child navigable , or plugin | normal | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<output>`](elements/output/README.md) | Calculated output value | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<picture>`](elements/picture/README.md) | Image | normal | [Embedded content](group-embedded.md) | [`img`](MAIN-ELEMENTS.md#img) | always |
| [`<progress>`](elements/progress/README.md) | Progress bar | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<q>`](elements/q/README.md) | Quotation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<ruby>`](elements/ruby/README.md) | Ruby annotation(s) | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<s>`](elements/s/README.md) | Inaccurate text | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<samp>`](elements/samp/README.md) | Computer output | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<script>`](elements/script/README.md) | Embedded script | raw text | [Scripting & components](group-scripting.md) | **[`script`](MAIN-ELEMENTS.md#script)** | always |
| [`<select>`](elements/select/README.md) | List box control | normal | [Forms](group-forms.md) | **[`select`](MAIN-ELEMENTS.md#select)** | always |
| [`<selectedcontent>`](elements/selectedcontent/README.md) | Mirrors content from an option | normal | [Forms](group-forms.md) | [`select`](MAIN-ELEMENTS.md#select) | only when descendant of a button that is a child of select |
| [`<slot>`](elements/slot/README.md) | Shadow tree slot | normal | [Scripting & components](group-scripting.md) | **[`slot`](MAIN-ELEMENTS.md#slot)** | always |
| [`<small>`](elements/small/README.md) | Side comment | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<span>`](elements/span/README.md) | Generic phrasing container | normal | [Text-level semantics](group-text-level.md) | **[`span`](MAIN-ELEMENTS.md#span)** | always |
| [`<strong>`](elements/strong/README.md) | Importance | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<sub>`](elements/sub/README.md) | Subscript | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<sup>`](elements/sup/README.md) | Superscript | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<svg>`](elements/svg/README.md) | SVG root | foreign | [Embedded content](group-embedded.md) | [`canvas`](MAIN-ELEMENTS.md#canvas) | always |
| [`<template>`](elements/template/README.md) | Template | template | [Scripting & components](group-scripting.md) | **[`template`](MAIN-ELEMENTS.md#template)** | always |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | escapable raw text | [Forms](group-forms.md) | **[`textarea`](MAIN-ELEMENTS.md#textarea)** | always |
| [`<time>`](elements/time/README.md) | Machine-readable equivalent of date- or time-related data | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<u>`](elements/u/README.md) | Unarticulated annotation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<var>`](elements/var/README.md) | Variable | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<video>`](elements/video/README.md) | Video player | normal | [Embedded content](group-embedded.md) | **[`video`](MAIN-ELEMENTS.md#video)** | always |
| [`<wbr>`](elements/wbr/README.md) | Line breaking opportunity | void | [Text-level semantics](group-text-level.md) | [`br`](MAIN-ELEMENTS.md#br) | always |

## Non-element members

- [Text](nodes/text/README.md) nodes
- [Autonomous custom elements](custom-elements/README.md)
