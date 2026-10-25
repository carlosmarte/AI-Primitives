# Main element primitives

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand.

The language reduces to two generic boxes, div (block) and span (inline). Every other element is one of those with meaning or behaviour added. The main primitives below are the elements that add a capability the generic box cannot express; everything else is a semantic label on one of them.

**36 main primitives** cover **43 elements**. The remaining **72 elements** each reduce to exactly one of them (see [Reduction map](#reduction-map)). Every element keeps its own full primitive under `elements/<name>/`; this file only says which ones do irreducible work.

## By job

| Job | What it covers | Main primitives |
|---|---|---|
| Generic box | div and span, treated as one primitive: a block or inline container with no meaning of its own. | [`div`](MAIN-ELEMENTS.md#div), [`span`](MAIN-ELEMENTS.md#span) |
| Document skeleton | The nodes every page needs before any content: root, metadata container, body, metadata, external resources. | [`html`](MAIN-ELEMENTS.md#html), [`head`](MAIN-ELEMENTS.md#head), [`body`](MAIN-ELEMENTS.md#body), [`meta`](MAIN-ELEMENTS.md#meta), [`link`](MAIN-ELEMENTS.md#link) |
| Structure | Sections, headings, paragraphs, lists, preformatted blocks, tables, line breaks. | [`section`](MAIN-ELEMENTS.md#section), [`heading`](MAIN-ELEMENTS.md#heading), [`p`](MAIN-ELEMENTS.md#p), [`list`](MAIN-ELEMENTS.md#list), [`li`](MAIN-ELEMENTS.md#li), [`pre`](MAIN-ELEMENTS.md#pre), [`br`](MAIN-ELEMENTS.md#br), [`table`](MAIN-ELEMENTS.md#table), [`tr`](MAIN-ELEMENTS.md#tr), [`cell`](MAIN-ELEMENTS.md#cell) |
| Navigation | The hyperlink. | [`a`](MAIN-ELEMENTS.md#a) |
| Input | Collecting data from the user: form, input, button, select, textarea, label. | [`form`](MAIN-ELEMENTS.md#form), [`input`](MAIN-ELEMENTS.md#input), [`button`](MAIN-ELEMENTS.md#button), [`label`](MAIN-ELEMENTS.md#label), [`select`](MAIN-ELEMENTS.md#select), [`option`](MAIN-ELEMENTS.md#option), [`textarea`](MAIN-ELEMENTS.md#textarea) |
| External content | img, video, audio for media; source for alternatives; iframe for another document; canvas for drawn pixels. | [`img`](MAIN-ELEMENTS.md#img), [`video`](MAIN-ELEMENTS.md#video), [`audio`](MAIN-ELEMENTS.md#audio), [`source`](MAIN-ELEMENTS.md#source), [`iframe`](MAIN-ELEMENTS.md#iframe), [`canvas`](MAIN-ELEMENTS.md#canvas) |
| Built-in behaviour | details for disclosure and dialog for a modal; the popover attribute covers the third pattern. | [`details`](MAIN-ELEMENTS.md#details), [`dialog`](MAIN-ELEMENTS.md#dialog) |
| Code and components | script, template, slot. | [`script`](MAIN-ELEMENTS.md#script), [`template`](MAIN-ELEMENTS.md#template), [`slot`](MAIN-ELEMENTS.md#slot) |

## By group

### Document & metadata

Group file: [Document & metadata](group-document-metadata.md)

<a id="html"></a>
#### `html` — [`<html>`](elements/html/README.md)

Root of the document. Job: Document skeleton.

No other element reduces to it.

<a id="head"></a>
#### `head` — [`<head>`](elements/head/README.md)

Container for metadata. Job: Document skeleton.

No other element reduces to it.

<a id="meta"></a>
#### `meta` — [`<meta>`](elements/meta/README.md)

Document-level name/value metadata. Job: Document skeleton.

Semantic variants that reduce to it:

- [`<title>`](elements/title/README.md) — Document-level text metadata: the document's name.

<a id="link"></a>
#### `link` — [`<link>`](elements/link/README.md)

Relationship to an external resource. Job: Document skeleton.

Semantic variants that reduce to it:

- [`<base>`](elements/base/README.md) — Document-level URL configuration for links and forms.
- [`<style>`](elements/style/README.md) — Inline counterpart of link rel=stylesheet.

### Sections

Group file: [Sections](group-sections.md)

<a id="body"></a>
#### `body` — [`<body>`](elements/body/README.md)

Container for the rendered content. Job: Document skeleton.

No other element reduces to it.

<a id="section"></a>
#### `section` — [`<section>`](elements/section/README.md)

A thematic grouping with its own heading scope. Job: Structure.

Semantic variants that reduce to it:

- [`<article>`](elements/article/README.md) — Section that is self-contained and syndicatable.
- [`<nav>`](elements/nav/README.md) — Section with the navigation landmark role.
- [`<aside>`](elements/aside/README.md) — Section with the complementary landmark role.
- [`<header>`](elements/header/README.md) — Section introducing its parent; banner landmark at page level.
- [`<footer>`](elements/footer/README.md) — Section closing its parent; contentinfo landmark at page level.
- [`<main>`](elements/main/README.md) — Section with the main landmark role; one per page.
- [`<search>`](elements/search/README.md) — Section with the search landmark role.
- [`<address>`](elements/address/README.md) — Section holding contact information for its parent.

<a id="heading"></a>
#### `heading` — [`<h1>`](elements/h1/README.md), [`<h2>`](elements/h2/README.md), [`<h3>`](elements/h3/README.md), [`<h4>`](elements/h4/README.md), [`<h5>`](elements/h5/README.md), [`<h6>`](elements/h6/README.md)

Section heading at one of six levels. Job: Structure.

Semantic variants that reduce to it:

- [`<hgroup>`](elements/hgroup/README.md) — Heading grouped with its subheading paragraphs.

### Grouping content

Group file: [Grouping content](group-grouping-content.md)

<a id="div"></a>
#### `div` — [`<div>`](elements/div/README.md)

Generic block container. Job: Generic box.

Semantic variants that reduce to it:

- [`<blockquote>`](elements/blockquote/README.md) — Block container labelled as quoted from elsewhere.
- [`<figure>`](elements/figure/README.md) — Block container labelled as a self-contained figure.

<a id="p"></a>
#### `p` — [`<p>`](elements/p/README.md)

Paragraph. Job: Structure.

Semantic variants that reduce to it:

- [`<hr>`](elements/hr/README.md) — Paragraph-level thematic break with no content.
- [`<figcaption>`](elements/figcaption/README.md) — Caption paragraph for a figure.

<a id="list"></a>
#### `list` — [`<ul>`](elements/ul/README.md), [`<ol>`](elements/ol/README.md)

Unordered or ordered list container. Job: Structure.

Semantic variants that reduce to it:

- [`<menu>`](elements/menu/README.md) — Unordered list of commands.
- [`<dl>`](elements/dl/README.md) — List whose items are name-value groups.

<a id="li"></a>
#### `li` — [`<li>`](elements/li/README.md)

List item. Job: Structure.

Semantic variants that reduce to it:

- [`<dt>`](elements/dt/README.md) — List item holding the name of a name-value group.
- [`<dd>`](elements/dd/README.md) — List item holding the value of a name-value group.

<a id="pre"></a>
#### `pre` — [`<pre>`](elements/pre/README.md)

Preformatted block; whitespace is significant. Job: Structure.

No other element reduces to it.

### Text-level semantics

Group file: [Text-level semantics](group-text-level.md)

<a id="span"></a>
#### `span` — [`<span>`](elements/span/README.md)

Generic inline container. Job: Generic box.

Semantic variants that reduce to it:

- [`<em>`](elements/em/README.md) — Inline with stress emphasis.
- [`<strong>`](elements/strong/README.md) — Inline with importance.
- [`<small>`](elements/small/README.md) — Inline side comment.
- [`<s>`](elements/s/README.md) — Inline that is no longer accurate.
- [`<cite>`](elements/cite/README.md) — Inline title of a work.
- [`<q>`](elements/q/README.md) — Inline quotation.
- [`<dfn>`](elements/dfn/README.md) — Inline defining instance of a term.
- [`<abbr>`](elements/abbr/README.md) — Inline abbreviation with an expansion.
- [`<ruby>`](elements/ruby/README.md) — Inline with ruby annotations attached.
- [`<rt>`](elements/rt/README.md) — Inline ruby annotation text.
- [`<rp>`](elements/rp/README.md) — Inline fallback parenthesis for ruby.
- [`<data>`](elements/data/README.md) — Inline with a machine-readable value.
- [`<time>`](elements/time/README.md) — Inline with a machine-readable date or time.
- [`<code>`](elements/code/README.md) — Inline computer code.
- [`<var>`](elements/var/README.md) — Inline variable.
- [`<samp>`](elements/samp/README.md) — Inline program output.
- [`<kbd>`](elements/kbd/README.md) — Inline user input.
- [`<sub>`](elements/sub/README.md) — Inline subscript.
- [`<sup>`](elements/sup/README.md) — Inline superscript.
- [`<i>`](elements/i/README.md) — Inline alternate voice or mood.
- [`<b>`](elements/b/README.md) — Inline keyword drawn to attention.
- [`<u>`](elements/u/README.md) — Inline unarticulated annotation.
- [`<mark>`](elements/mark/README.md) — Inline highlighted for reference.
- [`<bdi>`](elements/bdi/README.md) — Inline with isolated text direction.
- [`<bdo>`](elements/bdo/README.md) — Inline with overridden text direction.
- [`<ins>`](elements/ins/README.md) — Inline or block marked as added in an edit.
- [`<del>`](elements/del/README.md) — Inline or block marked as removed in an edit.
- [`<math>`](elements/math/README.md) — Phrasing-level mathematical markup from another vocabulary.
- [`<output>`](elements/output/README.md) — Display-only form extra: a calculated result.
- [`<progress>`](elements/progress/README.md) — Display-only form extra: task completion.
- [`<meter>`](elements/meter/README.md) — Display-only form extra: a gauge within a range.

<a id="a"></a>
#### `a` — [`<a>`](elements/a/README.md)

Hyperlink. Job: Navigation.

Semantic variants that reduce to it:

- [`<area>`](elements/area/README.md) — Hyperlink bound to a region of an image.

<a id="br"></a>
#### `br` — [`<br>`](elements/br/README.md)

Line break. Job: Structure.

Semantic variants that reduce to it:

- [`<wbr>`](elements/wbr/README.md) — Optional line-break opportunity instead of a forced break.

### Embedded content

Group file: [Embedded content](group-embedded.md)

<a id="img"></a>
#### `img` — [`<img>`](elements/img/README.md)

A picture. Job: External content.

Semantic variants that reduce to it:

- [`<picture>`](elements/picture/README.md) — img with alternative sources chosen by the browser.
- [`<map>`](elements/map/README.md) — Clickable regions laid over an image.

<a id="video"></a>
#### `video` — [`<video>`](elements/video/README.md)

Video player. Job: External content.

No other element reduces to it.

<a id="audio"></a>
#### `audio` — [`<audio>`](elements/audio/README.md)

Audio player. Job: External content.

No other element reduces to it.

<a id="source"></a>
#### `source` — [`<source>`](elements/source/README.md)

Alternative resource for a picture or media element. Job: External content.

Semantic variants that reduce to it:

- [`<track>`](elements/track/README.md) — Timed-text alternative for a media element.

<a id="iframe"></a>
#### `iframe` — [`<iframe>`](elements/iframe/README.md)

Another document, embedded. Job: External content.

Semantic variants that reduce to it:

- [`<embed>`](elements/embed/README.md) — External content handled by a plugin instead of a document.
- [`<object>`](elements/object/README.md) — External resource with fallback; image, document, or plugin.

### Tabular data

Group file: [Tabular data](group-tables.md)

<a id="table"></a>
#### `table` — [`<table>`](elements/table/README.md)

Tabular data container. Job: Structure.

Semantic variants that reduce to it:

- [`<caption>`](elements/caption/README.md) — Optional title structure of a table.
- [`<colgroup>`](elements/colgroup/README.md) — Optional column structure of a table.
- [`<col>`](elements/col/README.md) — Optional column structure of a table.
- [`<thead>`](elements/thead/README.md) — Optional row-group structure of a table.
- [`<tbody>`](elements/tbody/README.md) — Optional row-group structure of a table.
- [`<tfoot>`](elements/tfoot/README.md) — Optional row-group structure of a table.

<a id="tr"></a>
#### `tr` — [`<tr>`](elements/tr/README.md)

Table row. Job: Structure.

No other element reduces to it.

<a id="cell"></a>
#### `cell` — [`<td>`](elements/td/README.md), [`<th>`](elements/th/README.md)

Table data or header cell. Job: Structure.

No other element reduces to it.

### Forms

Group file: [Forms](group-forms.md)

<a id="form"></a>
#### `form` — [`<form>`](elements/form/README.md)

Submittable group of controls. Job: Input.

Semantic variants that reduce to it:

- [`<fieldset>`](elements/fieldset/README.md) — Named sub-group of a form's controls.

<a id="input"></a>
#### `input` — [`<input>`](elements/input/README.md)

Single-value control; type selects the widget. Job: Input.

No other element reduces to it.

<a id="button"></a>
#### `button` — [`<button>`](elements/button/README.md)

Clickable control. Job: Input.

No other element reduces to it.

<a id="label"></a>
#### `label` — [`<label>`](elements/label/README.md)

Caption bound to a control. Job: Input.

Semantic variants that reduce to it:

- [`<legend>`](elements/legend/README.md) — Caption for a fieldset instead of a single control.

<a id="select"></a>
#### `select` — [`<select>`](elements/select/README.md)

Choose from a list of options. Job: Input.

Semantic variants that reduce to it:

- [`<datalist>`](elements/datalist/README.md) — Option list offered as suggestions to an input.
- [`<selectedcontent>`](elements/selectedcontent/README.md) — Mirror of the chosen option inside a customizable select.

<a id="option"></a>
#### `option` — [`<option>`](elements/option/README.md)

One choice in a select or datalist. Job: Input.

Semantic variants that reduce to it:

- [`<optgroup>`](elements/optgroup/README.md) — Labelled group of options.

<a id="textarea"></a>
#### `textarea` — [`<textarea>`](elements/textarea/README.md)

Multi-line text control. Job: Input.

No other element reduces to it.

### Interactive elements

Group file: [Interactive elements](group-interactive.md)

<a id="details"></a>
#### `details` — [`<details>`](elements/details/README.md)

Disclosure widget with no script. Job: Built-in behaviour.

Semantic variants that reduce to it:

- [`<summary>`](elements/summary/README.md) — The always-visible caption of a details widget.

<a id="dialog"></a>
#### `dialog` — [`<dialog>`](elements/dialog/README.md)

Modal or non-modal dialog with focus handling built in. Job: Built-in behaviour.

No other element reduces to it.

### Scripting & components

Group file: [Scripting & components](group-scripting.md)

<a id="canvas"></a>
#### `canvas` — [`<canvas>`](elements/canvas/README.md)

Drawn pixels under script control. Job: External content.

Semantic variants that reduce to it:

- [`<svg>`](elements/svg/README.md) — Drawn graphics described as vectors instead of scripted pixels.

<a id="script"></a>
#### `script` — [`<script>`](elements/script/README.md)

Executable code or data block. Job: Code and components.

Semantic variants that reduce to it:

- [`<noscript>`](elements/noscript/README.md) — Fallback shown when script does not run.

<a id="template"></a>
#### `template` — [`<template>`](elements/template/README.md)

Inert markup to clone later. Job: Code and components.

No other element reduces to it.

<a id="slot"></a>
#### `slot` — [`<slot>`](elements/slot/README.md)

Insertion point in a shadow tree. Job: Code and components.

No other element reduces to it.

## Reduction map

Every element that is not itself a main primitive, and the main primitive it reduces to.

| Element | Reduces to | Why |
|---|---|---|
| [`<abbr>`](elements/abbr/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline abbreviation with an expansion. |
| [`<address>`](elements/address/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section holding contact information for its parent. |
| [`<area>`](elements/area/README.md) | [`a`](MAIN-ELEMENTS.md#a) (`<a>`) | Hyperlink bound to a region of an image. |
| [`<article>`](elements/article/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section that is self-contained and syndicatable. |
| [`<aside>`](elements/aside/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section with the complementary landmark role. |
| [`<b>`](elements/b/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline keyword drawn to attention. |
| [`<base>`](elements/base/README.md) | [`link`](MAIN-ELEMENTS.md#link) (`<link>`) | Document-level URL configuration for links and forms. |
| [`<bdi>`](elements/bdi/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline with isolated text direction. |
| [`<bdo>`](elements/bdo/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline with overridden text direction. |
| [`<blockquote>`](elements/blockquote/README.md) | [`div`](MAIN-ELEMENTS.md#div) (`<div>`) | Block container labelled as quoted from elsewhere. |
| [`<caption>`](elements/caption/README.md) | [`table`](MAIN-ELEMENTS.md#table) (`<table>`) | Optional title structure of a table. |
| [`<cite>`](elements/cite/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline title of a work. |
| [`<code>`](elements/code/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline computer code. |
| [`<col>`](elements/col/README.md) | [`table`](MAIN-ELEMENTS.md#table) (`<table>`) | Optional column structure of a table. |
| [`<colgroup>`](elements/colgroup/README.md) | [`table`](MAIN-ELEMENTS.md#table) (`<table>`) | Optional column structure of a table. |
| [`<data>`](elements/data/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline with a machine-readable value. |
| [`<datalist>`](elements/datalist/README.md) | [`select`](MAIN-ELEMENTS.md#select) (`<select>`) | Option list offered as suggestions to an input. |
| [`<dd>`](elements/dd/README.md) | [`li`](MAIN-ELEMENTS.md#li) (`<li>`) | List item holding the value of a name-value group. |
| [`<del>`](elements/del/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline or block marked as removed in an edit. |
| [`<dfn>`](elements/dfn/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline defining instance of a term. |
| [`<dl>`](elements/dl/README.md) | [`list`](MAIN-ELEMENTS.md#list) (`<ul>` / `<ol>`) | List whose items are name-value groups. |
| [`<dt>`](elements/dt/README.md) | [`li`](MAIN-ELEMENTS.md#li) (`<li>`) | List item holding the name of a name-value group. |
| [`<em>`](elements/em/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline with stress emphasis. |
| [`<embed>`](elements/embed/README.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) (`<iframe>`) | External content handled by a plugin instead of a document. |
| [`<fieldset>`](elements/fieldset/README.md) | [`form`](MAIN-ELEMENTS.md#form) (`<form>`) | Named sub-group of a form's controls. |
| [`<figcaption>`](elements/figcaption/README.md) | [`p`](MAIN-ELEMENTS.md#p) (`<p>`) | Caption paragraph for a figure. |
| [`<figure>`](elements/figure/README.md) | [`div`](MAIN-ELEMENTS.md#div) (`<div>`) | Block container labelled as a self-contained figure. |
| [`<footer>`](elements/footer/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section closing its parent; contentinfo landmark at page level. |
| [`<header>`](elements/header/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section introducing its parent; banner landmark at page level. |
| [`<hgroup>`](elements/hgroup/README.md) | [`heading`](MAIN-ELEMENTS.md#heading) (`<h1>` / `<h2>` / `<h3>` / `<h4>` / `<h5>` / `<h6>`) | Heading grouped with its subheading paragraphs. |
| [`<hr>`](elements/hr/README.md) | [`p`](MAIN-ELEMENTS.md#p) (`<p>`) | Paragraph-level thematic break with no content. |
| [`<i>`](elements/i/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline alternate voice or mood. |
| [`<ins>`](elements/ins/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline or block marked as added in an edit. |
| [`<kbd>`](elements/kbd/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline user input. |
| [`<legend>`](elements/legend/README.md) | [`label`](MAIN-ELEMENTS.md#label) (`<label>`) | Caption for a fieldset instead of a single control. |
| [`<main>`](elements/main/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section with the main landmark role; one per page. |
| [`<map>`](elements/map/README.md) | [`img`](MAIN-ELEMENTS.md#img) (`<img>`) | Clickable regions laid over an image. |
| [`<mark>`](elements/mark/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline highlighted for reference. |
| [`<math>`](elements/math/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Phrasing-level mathematical markup from another vocabulary. |
| [`<menu>`](elements/menu/README.md) | [`list`](MAIN-ELEMENTS.md#list) (`<ul>` / `<ol>`) | Unordered list of commands. |
| [`<meter>`](elements/meter/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Display-only form extra: a gauge within a range. |
| [`<nav>`](elements/nav/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section with the navigation landmark role. |
| [`<noscript>`](elements/noscript/README.md) | [`script`](MAIN-ELEMENTS.md#script) (`<script>`) | Fallback shown when script does not run. |
| [`<object>`](elements/object/README.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) (`<iframe>`) | External resource with fallback; image, document, or plugin. |
| [`<optgroup>`](elements/optgroup/README.md) | [`option`](MAIN-ELEMENTS.md#option) (`<option>`) | Labelled group of options. |
| [`<output>`](elements/output/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Display-only form extra: a calculated result. |
| [`<picture>`](elements/picture/README.md) | [`img`](MAIN-ELEMENTS.md#img) (`<img>`) | img with alternative sources chosen by the browser. |
| [`<progress>`](elements/progress/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Display-only form extra: task completion. |
| [`<q>`](elements/q/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline quotation. |
| [`<rp>`](elements/rp/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline fallback parenthesis for ruby. |
| [`<rt>`](elements/rt/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline ruby annotation text. |
| [`<ruby>`](elements/ruby/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline with ruby annotations attached. |
| [`<s>`](elements/s/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline that is no longer accurate. |
| [`<samp>`](elements/samp/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline program output. |
| [`<search>`](elements/search/README.md) | [`section`](MAIN-ELEMENTS.md#section) (`<section>`) | Section with the search landmark role. |
| [`<selectedcontent>`](elements/selectedcontent/README.md) | [`select`](MAIN-ELEMENTS.md#select) (`<select>`) | Mirror of the chosen option inside a customizable select. |
| [`<small>`](elements/small/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline side comment. |
| [`<strong>`](elements/strong/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline with importance. |
| [`<style>`](elements/style/README.md) | [`link`](MAIN-ELEMENTS.md#link) (`<link>`) | Inline counterpart of link rel=stylesheet. |
| [`<sub>`](elements/sub/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline subscript. |
| [`<summary>`](elements/summary/README.md) | [`details`](MAIN-ELEMENTS.md#details) (`<details>`) | The always-visible caption of a details widget. |
| [`<sup>`](elements/sup/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline superscript. |
| [`<svg>`](elements/svg/README.md) | [`canvas`](MAIN-ELEMENTS.md#canvas) (`<canvas>`) | Drawn graphics described as vectors instead of scripted pixels. |
| [`<tbody>`](elements/tbody/README.md) | [`table`](MAIN-ELEMENTS.md#table) (`<table>`) | Optional row-group structure of a table. |
| [`<tfoot>`](elements/tfoot/README.md) | [`table`](MAIN-ELEMENTS.md#table) (`<table>`) | Optional row-group structure of a table. |
| [`<thead>`](elements/thead/README.md) | [`table`](MAIN-ELEMENTS.md#table) (`<table>`) | Optional row-group structure of a table. |
| [`<time>`](elements/time/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline with a machine-readable date or time. |
| [`<title>`](elements/title/README.md) | [`meta`](MAIN-ELEMENTS.md#meta) (`<meta>`) | Document-level text metadata: the document's name. |
| [`<track>`](elements/track/README.md) | [`source`](MAIN-ELEMENTS.md#source) (`<source>`) | Timed-text alternative for a media element. |
| [`<u>`](elements/u/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline unarticulated annotation. |
| [`<var>`](elements/var/README.md) | [`span`](MAIN-ELEMENTS.md#span) (`<span>`) | Inline variable. |
| [`<wbr>`](elements/wbr/README.md) | [`br`](MAIN-ELEMENTS.md#br) (`<br>`) | Optional line-break opportunity instead of a forced break. |

## Main primitive checklist

All elements that are main primitives, in spec order.

| Element | Description | Syntax | Group | Main primitive |
|---|---|---|---|---|
| [`<a>`](elements/a/README.md) | Hyperlink | normal | [Text-level semantics](group-text-level.md) | **[`a`](MAIN-ELEMENTS.md#a)** |
| [`<audio>`](elements/audio/README.md) | Audio player | normal | [Embedded content](group-embedded.md) | **[`audio`](MAIN-ELEMENTS.md#audio)** |
| [`<body>`](elements/body/README.md) | Document body | normal | [Sections](group-sections.md) | **[`body`](MAIN-ELEMENTS.md#body)** |
| [`<br>`](elements/br/README.md) | Line break, e.g. in poem or postal address | void | [Text-level semantics](group-text-level.md) | **[`br`](MAIN-ELEMENTS.md#br)** |
| [`<button>`](elements/button/README.md) | Button control | normal | [Forms](group-forms.md) | **[`button`](MAIN-ELEMENTS.md#button)** |
| [`<canvas>`](elements/canvas/README.md) | Scriptable bitmap canvas | normal | [Scripting & components](group-scripting.md) | **[`canvas`](MAIN-ELEMENTS.md#canvas)** |
| [`<details>`](elements/details/README.md) | Disclosure control for hiding details | normal | [Interactive elements](group-interactive.md) | **[`details`](MAIN-ELEMENTS.md#details)** |
| [`<dialog>`](elements/dialog/README.md) | Dialog box or window | normal | [Interactive elements](group-interactive.md) | **[`dialog`](MAIN-ELEMENTS.md#dialog)** |
| [`<div>`](elements/div/README.md) | Generic flow container, or container for name-value groups in dl elements | normal | [Grouping content](group-grouping-content.md) | **[`div`](MAIN-ELEMENTS.md#div)** |
| [`<form>`](elements/form/README.md) | User-submittable form | normal | [Forms](group-forms.md) | **[`form`](MAIN-ELEMENTS.md#form)** |
| [`<h1>`](elements/h1/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h2>`](elements/h2/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h3>`](elements/h3/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h4>`](elements/h4/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h5>`](elements/h5/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h6>`](elements/h6/README.md) | Heading | normal | [Sections](group-sections.md) | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<head>`](elements/head/README.md) | Container for document metadata | normal | [Document & metadata](group-document-metadata.md) | **[`head`](MAIN-ELEMENTS.md#head)** |
| [`<html>`](elements/html/README.md) | Root element | normal | [Document & metadata](group-document-metadata.md) | **[`html`](MAIN-ELEMENTS.md#html)** |
| [`<iframe>`](elements/iframe/README.md) | Child navigable | normal | [Embedded content](group-embedded.md) | **[`iframe`](MAIN-ELEMENTS.md#iframe)** |
| [`<img>`](elements/img/README.md) | Image | void | [Embedded content](group-embedded.md) | **[`img`](MAIN-ELEMENTS.md#img)** |
| [`<input>`](elements/input/README.md) | Form control | void | [Forms](group-forms.md) | **[`input`](MAIN-ELEMENTS.md#input)** |
| [`<label>`](elements/label/README.md) | Caption for a form control | normal | [Forms](group-forms.md) | **[`label`](MAIN-ELEMENTS.md#label)** |
| [`<li>`](elements/li/README.md) | List item | normal | [Grouping content](group-grouping-content.md) | **[`li`](MAIN-ELEMENTS.md#li)** |
| [`<link>`](elements/link/README.md) | Link metadata | void | [Document & metadata](group-document-metadata.md) | **[`link`](MAIN-ELEMENTS.md#link)** |
| [`<meta>`](elements/meta/README.md) | Text metadata | void | [Document & metadata](group-document-metadata.md) | **[`meta`](MAIN-ELEMENTS.md#meta)** |
| [`<ol>`](elements/ol/README.md) | Ordered list | normal | [Grouping content](group-grouping-content.md) | **[`list`](MAIN-ELEMENTS.md#list)** |
| [`<option>`](elements/option/README.md) | Option in a list box or combo box control | normal | [Forms](group-forms.md) | **[`option`](MAIN-ELEMENTS.md#option)** |
| [`<p>`](elements/p/README.md) | Paragraph | normal | [Grouping content](group-grouping-content.md) | **[`p`](MAIN-ELEMENTS.md#p)** |
| [`<pre>`](elements/pre/README.md) | Block of preformatted text | normal | [Grouping content](group-grouping-content.md) | **[`pre`](MAIN-ELEMENTS.md#pre)** |
| [`<script>`](elements/script/README.md) | Embedded script | raw text | [Scripting & components](group-scripting.md) | **[`script`](MAIN-ELEMENTS.md#script)** |
| [`<section>`](elements/section/README.md) | Generic document or application section | normal | [Sections](group-sections.md) | **[`section`](MAIN-ELEMENTS.md#section)** |
| [`<select>`](elements/select/README.md) | List box control | normal | [Forms](group-forms.md) | **[`select`](MAIN-ELEMENTS.md#select)** |
| [`<slot>`](elements/slot/README.md) | Shadow tree slot | normal | [Scripting & components](group-scripting.md) | **[`slot`](MAIN-ELEMENTS.md#slot)** |
| [`<source>`](elements/source/README.md) | Image source for img or media source for video or audio | void | [Embedded content](group-embedded.md) | **[`source`](MAIN-ELEMENTS.md#source)** |
| [`<span>`](elements/span/README.md) | Generic phrasing container | normal | [Text-level semantics](group-text-level.md) | **[`span`](MAIN-ELEMENTS.md#span)** |
| [`<table>`](elements/table/README.md) | Table | normal | [Tabular data](group-tables.md) | **[`table`](MAIN-ELEMENTS.md#table)** |
| [`<td>`](elements/td/README.md) | Table cell | normal | [Tabular data](group-tables.md) | **[`cell`](MAIN-ELEMENTS.md#cell)** |
| [`<template>`](elements/template/README.md) | Template | template | [Scripting & components](group-scripting.md) | **[`template`](MAIN-ELEMENTS.md#template)** |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | escapable raw text | [Forms](group-forms.md) | **[`textarea`](MAIN-ELEMENTS.md#textarea)** |
| [`<th>`](elements/th/README.md) | Table header cell | normal | [Tabular data](group-tables.md) | **[`cell`](MAIN-ELEMENTS.md#cell)** |
| [`<tr>`](elements/tr/README.md) | Table row | normal | [Tabular data](group-tables.md) | **[`tr`](MAIN-ELEMENTS.md#tr)** |
| [`<ul>`](elements/ul/README.md) | List | normal | [Grouping content](group-grouping-content.md) | **[`list`](MAIN-ELEMENTS.md#list)** |
| [`<video>`](elements/video/README.md) | Video player | normal | [Embedded content](group-embedded.md) | **[`video`](MAIN-ELEMENTS.md#video)** |
