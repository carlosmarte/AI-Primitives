# Palpable

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Provides meaningful non-empty text, media, or user-interactable content.

**Spec.** https://html.spec.whatwg.org/multipage/dom.html#palpable-content

**Members.** 75 elements: 69 always, 6 conditional.

## Main primitives in this category

- [`a`](MAIN-ELEMENTS.md#a) — [`<a>`](elements/a/README.md): Hyperlink.
- [`audio`](MAIN-ELEMENTS.md#audio) — [`<audio>`](elements/audio/README.md): Audio player.
- [`button`](MAIN-ELEMENTS.md#button) — [`<button>`](elements/button/README.md): Clickable control.
- [`canvas`](MAIN-ELEMENTS.md#canvas) — [`<canvas>`](elements/canvas/README.md): Drawn pixels under script control.
- [`details`](MAIN-ELEMENTS.md#details) — [`<details>`](elements/details/README.md): Disclosure widget with no script.
- [`div`](MAIN-ELEMENTS.md#div) — [`<div>`](elements/div/README.md): Generic block container.
- [`form`](MAIN-ELEMENTS.md#form) — [`<form>`](elements/form/README.md): Submittable group of controls.
- [`heading`](MAIN-ELEMENTS.md#heading) — [`<h1>`](elements/h1/README.md), [`<h2>`](elements/h2/README.md), [`<h3>`](elements/h3/README.md), [`<h4>`](elements/h4/README.md), [`<h5>`](elements/h5/README.md), [`<h6>`](elements/h6/README.md): Section heading at one of six levels.
- [`iframe`](MAIN-ELEMENTS.md#iframe) — [`<iframe>`](elements/iframe/README.md): Another document, embedded.
- [`img`](MAIN-ELEMENTS.md#img) — [`<img>`](elements/img/README.md): A picture.
- [`input`](MAIN-ELEMENTS.md#input) — [`<input>`](elements/input/README.md): Single-value control; type selects the widget.
- [`label`](MAIN-ELEMENTS.md#label) — [`<label>`](elements/label/README.md): Caption bound to a control.
- [`list`](MAIN-ELEMENTS.md#list) — [`<ul>`](elements/ul/README.md), [`<ol>`](elements/ol/README.md): Unordered or ordered list container.
- [`p`](MAIN-ELEMENTS.md#p) — [`<p>`](elements/p/README.md): Paragraph.
- [`pre`](MAIN-ELEMENTS.md#pre) — [`<pre>`](elements/pre/README.md): Preformatted block; whitespace is significant.
- [`section`](MAIN-ELEMENTS.md#section) — [`<section>`](elements/section/README.md): A thematic grouping with its own heading scope.
- [`select`](MAIN-ELEMENTS.md#select) — [`<select>`](elements/select/README.md): Choose from a list of options.
- [`span`](MAIN-ELEMENTS.md#span) — [`<span>`](elements/span/README.md): Generic inline container.
- [`table`](MAIN-ELEMENTS.md#table) — [`<table>`](elements/table/README.md): Tabular data container.
- [`textarea`](MAIN-ELEMENTS.md#textarea) — [`<textarea>`](elements/textarea/README.md): Multi-line text control.
- [`video`](MAIN-ELEMENTS.md#video) — [`<video>`](elements/video/README.md): Video player.

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<a>`](elements/a/README.md) | Hyperlink | normal | [Text-level semantics](group-text-level.md) | **[`a`](MAIN-ELEMENTS.md#a)** | always |
| [`<abbr>`](elements/abbr/README.md) | Abbreviation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<address>`](elements/address/README.md) | Contact information for a page or article element | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<article>`](elements/article/README.md) | Self-contained syndicatable or reusable composition | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<aside>`](elements/aside/README.md) | Sidebar for tangentially related content | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<audio>`](elements/audio/README.md) | Audio player | normal | [Embedded content](group-embedded.md) | **[`audio`](MAIN-ELEMENTS.md#audio)** | only when the controls attribute is present |
| [`<b>`](elements/b/README.md) | Keywords | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<bdi>`](elements/bdi/README.md) | Text directionality isolation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<bdo>`](elements/bdo/README.md) | Text directionality formatting | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<blockquote>`](elements/blockquote/README.md) | A section quoted from another source | normal | [Grouping content](group-grouping-content.md) | [`div`](MAIN-ELEMENTS.md#div) | always |
| [`<button>`](elements/button/README.md) | Button control | normal | [Forms](group-forms.md) | **[`button`](MAIN-ELEMENTS.md#button)** | always |
| [`<canvas>`](elements/canvas/README.md) | Scriptable bitmap canvas | normal | [Scripting & components](group-scripting.md) | **[`canvas`](MAIN-ELEMENTS.md#canvas)** | always |
| [`<cite>`](elements/cite/README.md) | Title of a work | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<code>`](elements/code/README.md) | Computer code | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<data>`](elements/data/README.md) | Machine-readable equivalent | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<del>`](elements/del/README.md) | A removal from the document | normal | [Edits](group-edits.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<details>`](elements/details/README.md) | Disclosure control for hiding details | normal | [Interactive elements](group-interactive.md) | **[`details`](MAIN-ELEMENTS.md#details)** | always |
| [`<dfn>`](elements/dfn/README.md) | Defining instance | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<div>`](elements/div/README.md) | Generic flow container, or container for name-value groups in dl elements | normal | [Grouping content](group-grouping-content.md) | **[`div`](MAIN-ELEMENTS.md#div)** | always |
| [`<dl>`](elements/dl/README.md) | Association list consisting of zero or more name-value groups | normal | [Grouping content](group-grouping-content.md) | [`list`](MAIN-ELEMENTS.md#list) | only when the element's children include at least one name-value group |
| [`<em>`](elements/em/README.md) | Stress emphasis | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<embed>`](elements/embed/README.md) | Plugin | void | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<fieldset>`](elements/fieldset/README.md) | Group of form controls | normal | [Forms](group-forms.md) | [`form`](MAIN-ELEMENTS.md#form) | always |
| [`<figure>`](elements/figure/README.md) | Figure with optional caption | normal | [Grouping content](group-grouping-content.md) | [`div`](MAIN-ELEMENTS.md#div) | always |
| [`<footer>`](elements/footer/README.md) | Footer for a page or section | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<form>`](elements/form/README.md) | User-submittable form | normal | [Forms](group-forms.md) | **[`form`](MAIN-ELEMENTS.md#form)** | always |
| [`<h1>`](elements/h1/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** | always |
| [`<h2>`](elements/h2/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** | always |
| [`<h3>`](elements/h3/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** | always |
| [`<h4>`](elements/h4/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** | always |
| [`<h5>`](elements/h5/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** | always |
| [`<h6>`](elements/h6/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** | always |
| [`<header>`](elements/header/README.md) | Introductory or navigational aids for a page or section | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<hgroup>`](elements/hgroup/README.md) | Heading container | normal | [Sections](group-sections.md) | [`heading`](MAIN-ELEMENTS.md#heading) | always |
| [`<i>`](elements/i/README.md) | Alternate voice | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<iframe>`](elements/iframe/README.md) | Child navigable | normal | [Embedded content](group-embedded.md) | **[`iframe`](MAIN-ELEMENTS.md#iframe)** | always |
| [`<img>`](elements/img/README.md) | Image | void | [Embedded content](group-embedded.md) | **[`img`](MAIN-ELEMENTS.md#img)** | always |
| [`<input>`](elements/input/README.md) | Form control | void | [Forms](group-forms.md) | **[`input`](MAIN-ELEMENTS.md#input)** | only when the type attribute is not in the Hidden state |
| [`<ins>`](elements/ins/README.md) | An addition to the document | normal | [Edits](group-edits.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<kbd>`](elements/kbd/README.md) | User input | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<label>`](elements/label/README.md) | Caption for a form control | normal | [Forms](group-forms.md) | **[`label`](MAIN-ELEMENTS.md#label)** | always |
| [`<main>`](elements/main/README.md) | Container for the dominant contents of the document | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<map>`](elements/map/README.md) | Image map | normal | [Embedded content](group-embedded.md) | [`img`](MAIN-ELEMENTS.md#img) | always |
| [`<mark>`](elements/mark/README.md) | Highlight | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<math>`](elements/math/README.md) | MathML root | foreign | [Embedded content](group-embedded.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<menu>`](elements/menu/README.md) | Menu of commands | normal | [Grouping content](group-grouping-content.md) | [`list`](MAIN-ELEMENTS.md#list) | only when the element's children include at least one li element |
| [`<meter>`](elements/meter/README.md) | Gauge | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<nav>`](elements/nav/README.md) | Section with navigational links | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<object>`](elements/object/README.md) | Image, child navigable , or plugin | normal | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<ol>`](elements/ol/README.md) | Ordered list | normal | [Grouping content](group-grouping-content.md) | **[`list`](MAIN-ELEMENTS.md#list)** | only when the element's children include at least one li element |
| [`<output>`](elements/output/README.md) | Calculated output value | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<p>`](elements/p/README.md) | Paragraph | normal | [Grouping content](group-grouping-content.md) | **[`p`](MAIN-ELEMENTS.md#p)** | always |
| [`<picture>`](elements/picture/README.md) | Image | normal | [Embedded content](group-embedded.md) | [`img`](MAIN-ELEMENTS.md#img) | always |
| [`<pre>`](elements/pre/README.md) | Block of preformatted text | normal | [Grouping content](group-grouping-content.md) | **[`pre`](MAIN-ELEMENTS.md#pre)** | always |
| [`<progress>`](elements/progress/README.md) | Progress bar | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<q>`](elements/q/README.md) | Quotation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<ruby>`](elements/ruby/README.md) | Ruby annotation(s) | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<s>`](elements/s/README.md) | Inaccurate text | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<samp>`](elements/samp/README.md) | Computer output | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<search>`](elements/search/README.md) | Container for search controls | normal | [Sections](group-sections.md) | [`section`](MAIN-ELEMENTS.md#section) | always |
| [`<section>`](elements/section/README.md) | Generic document or application section | normal | [Sections](group-sections.md) | **[`section`](MAIN-ELEMENTS.md#section)** | always |
| [`<select>`](elements/select/README.md) | List box control | normal | [Forms](group-forms.md) | **[`select`](MAIN-ELEMENTS.md#select)** | always |
| [`<small>`](elements/small/README.md) | Side comment | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<span>`](elements/span/README.md) | Generic phrasing container | normal | [Text-level semantics](group-text-level.md) | **[`span`](MAIN-ELEMENTS.md#span)** | always |
| [`<strong>`](elements/strong/README.md) | Importance | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<sub>`](elements/sub/README.md) | Subscript | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<sup>`](elements/sup/README.md) | Superscript | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<svg>`](elements/svg/README.md) | SVG root | foreign | [Embedded content](group-embedded.md) | [`canvas`](MAIN-ELEMENTS.md#canvas) | always |
| [`<table>`](elements/table/README.md) | Table | normal | [Tabular data](group-tables.md) | **[`table`](MAIN-ELEMENTS.md#table)** | always |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | escapable raw text | [Forms](group-forms.md) | **[`textarea`](MAIN-ELEMENTS.md#textarea)** | always |
| [`<time>`](elements/time/README.md) | Machine-readable equivalent of date- or time-related data | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<u>`](elements/u/README.md) | Unarticulated annotation | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<ul>`](elements/ul/README.md) | List | normal | [Grouping content](group-grouping-content.md) | **[`list`](MAIN-ELEMENTS.md#list)** | only when the element's children include at least one li element |
| [`<var>`](elements/var/README.md) | Variable | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<video>`](elements/video/README.md) | Video player | normal | [Embedded content](group-embedded.md) | **[`video`](MAIN-ELEMENTS.md#video)** | always |

## Non-element members

- [Text](nodes/text/README.md) nodes that are not inter-element whitespace
- [Autonomous custom elements](custom-elements/README.md)
