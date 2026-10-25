# Context-restricted

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Requested reporting bucket for elements with no membership in the requested categories; not a WHATWG content category.

**Spec.** https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories

**Members.** 24 elements: 24 always, 0 conditional.

## Main primitives in this category

- [`body`](MAIN-ELEMENTS.md#body) — [`<body>`](elements/body/README.md): Container for the rendered content.
- [`head`](MAIN-ELEMENTS.md#head) — [`<head>`](elements/head/README.md): Container for metadata.
- [`html`](MAIN-ELEMENTS.md#html) — [`<html>`](elements/html/README.md): Root of the document.
- [`li`](MAIN-ELEMENTS.md#li) — [`<li>`](elements/li/README.md): List item.
- [`option`](MAIN-ELEMENTS.md#option) — [`<option>`](elements/option/README.md): One choice in a select or datalist.
- [`source`](MAIN-ELEMENTS.md#source) — [`<source>`](elements/source/README.md): Alternative resource for a picture or media element.
- [`cell`](MAIN-ELEMENTS.md#cell) — [`<td>`](elements/td/README.md), [`<th>`](elements/th/README.md): Table data or header cell.
- [`tr`](MAIN-ELEMENTS.md#tr) — [`<tr>`](elements/tr/README.md): Table row.

## Required parent

| Element | Parent requirement |
|---|---|
| [`<body>`](elements/body/README.md) | Second element child of html. |
| [`<caption>`](elements/caption/README.md) | Child of table; placement must satisfy the table content model. |
| [`<col>`](elements/col/README.md) | Child of colgroup that has no span attribute. |
| [`<colgroup>`](elements/colgroup/README.md) | Child of table; placement must satisfy the table content model. |
| [`<dd>`](elements/dd/README.md) | Child of dl, or child of a div that is a child of dl; after a dt or dd within the name-value group. |
| [`<dt>`](elements/dt/README.md) | Child of dl, or child of a div that is a child of dl; before a dt or dd within the name-value group. |
| [`<figcaption>`](elements/figcaption/README.md) | First or last child of figure. |
| [`<head>`](elements/head/README.md) | First element child of html. |
| [`<html>`](elements/html/README.md) | Document document element; alternatively where a compound document permits an HTML-namespace subdocument root. |
| [`<legend>`](elements/legend/README.md) | First child of fieldset; or first child of optgroup. |
| [`<li>`](elements/li/README.md) | Child of ol, ul, or menu. |
| [`<optgroup>`](elements/optgroup/README.md) | Descendant of select; immediate parent must permit optgroup under the select content model (including permitted div wrappers). |
| [`<option>`](elements/option/README.md) | Descendant of select, datalist, or optgroup; immediate parent must permit option under the applicable content model (including permitted div wrappers). |
| [`<rp>`](elements/rp/README.md) | Child of ruby, delimiting ruby annotation fallback parentheses. |
| [`<rt>`](elements/rt/README.md) | Child of ruby. |
| [`<source>`](elements/source/README.md) | Child of picture before img; or child of audio/video before flow content or track, when the media element has no src attribute. |
| [`<summary>`](elements/summary/README.md) | First child of details. |
| [`<tbody>`](elements/tbody/README.md) | Child of table; placement must satisfy the table content model. |
| [`<td>`](elements/td/README.md) | Child of tr. |
| [`<tfoot>`](elements/tfoot/README.md) | Child of table; placement must satisfy the table content model. |
| [`<th>`](elements/th/README.md) | Child of tr. |
| [`<thead>`](elements/thead/README.md) | Child of table; placement must satisfy the table content model. |
| [`<tr>`](elements/tr/README.md) | Child of thead, tbody, or tfoot; or child of table with no tbody children, in the position allowed by its content model. |
| [`<track>`](elements/track/README.md) | Child of audio or video. |

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<body>`](elements/body/README.md) | Document body | normal | [Sections](group-sections.md) | **[`body`](MAIN-ELEMENTS.md#body)** | always |
| [`<caption>`](elements/caption/README.md) | Table caption | normal | [Tabular data](group-tables.md) | [`table`](MAIN-ELEMENTS.md#table) | always |
| [`<col>`](elements/col/README.md) | Table column | void | [Tabular data](group-tables.md) | [`table`](MAIN-ELEMENTS.md#table) | always |
| [`<colgroup>`](elements/colgroup/README.md) | Group of columns in a table | normal | [Tabular data](group-tables.md) | [`table`](MAIN-ELEMENTS.md#table) | always |
| [`<dd>`](elements/dd/README.md) | Content for corresponding dt element(s) | normal | [Grouping content](group-grouping-content.md) | [`li`](MAIN-ELEMENTS.md#li) | always |
| [`<dt>`](elements/dt/README.md) | Legend for corresponding dd element(s) | normal | [Grouping content](group-grouping-content.md) | [`li`](MAIN-ELEMENTS.md#li) | always |
| [`<figcaption>`](elements/figcaption/README.md) | Caption for figure | normal | [Grouping content](group-grouping-content.md) | [`p`](MAIN-ELEMENTS.md#p) | always |
| [`<head>`](elements/head/README.md) | Container for document metadata | normal | [Document & metadata](group-document-metadata.md) | **[`head`](MAIN-ELEMENTS.md#head)** | always |
| [`<html>`](elements/html/README.md) | Root element | normal | [Document & metadata](group-document-metadata.md) | **[`html`](MAIN-ELEMENTS.md#html)** | always |
| [`<legend>`](elements/legend/README.md) | Caption for fieldset | normal | [Forms](group-forms.md) | [`label`](MAIN-ELEMENTS.md#label) | always |
| [`<li>`](elements/li/README.md) | List item | normal | [Grouping content](group-grouping-content.md) | **[`li`](MAIN-ELEMENTS.md#li)** | always |
| [`<optgroup>`](elements/optgroup/README.md) | Group of options in a list box | normal | [Forms](group-forms.md) | [`option`](MAIN-ELEMENTS.md#option) | always |
| [`<option>`](elements/option/README.md) | Option in a list box or combo box control | normal | [Forms](group-forms.md) | **[`option`](MAIN-ELEMENTS.md#option)** | always |
| [`<rp>`](elements/rp/README.md) | Parenthesis for ruby annotation text | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<rt>`](elements/rt/README.md) | Ruby annotation text | normal | [Text-level semantics](group-text-level.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<source>`](elements/source/README.md) | Image source for img or media source for video or audio | void | [Embedded content](group-embedded.md) | **[`source`](MAIN-ELEMENTS.md#source)** | always |
| [`<summary>`](elements/summary/README.md) | Caption for details | normal | [Interactive elements](group-interactive.md) | [`details`](MAIN-ELEMENTS.md#details) | always |
| [`<tbody>`](elements/tbody/README.md) | Group of rows in a table | normal | [Tabular data](group-tables.md) | [`table`](MAIN-ELEMENTS.md#table) | always |
| [`<td>`](elements/td/README.md) | Table cell | normal | [Tabular data](group-tables.md) | **[`cell`](MAIN-ELEMENTS.md#cell)** | always |
| [`<tfoot>`](elements/tfoot/README.md) | Group of footer rows in a table | normal | [Tabular data](group-tables.md) | [`table`](MAIN-ELEMENTS.md#table) | always |
| [`<th>`](elements/th/README.md) | Table header cell | normal | [Tabular data](group-tables.md) | **[`cell`](MAIN-ELEMENTS.md#cell)** | always |
| [`<thead>`](elements/thead/README.md) | Group of heading rows in a table | normal | [Tabular data](group-tables.md) | [`table`](MAIN-ELEMENTS.md#table) | always |
| [`<tr>`](elements/tr/README.md) | Table row | normal | [Tabular data](group-tables.md) | **[`tr`](MAIN-ELEMENTS.md#tr)** | always |
| [`<track>`](elements/track/README.md) | Timed text track | void | [Embedded content](group-embedded.md) | [`source`](MAIN-ELEMENTS.md#source) | always |
