# Sections

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

17 elements.

## Main primitives in this group

- [`body`](MAIN-ELEMENTS.md#body) — [`<body>`](elements/body/README.md): Container for the rendered content.
- [`section`](MAIN-ELEMENTS.md#section) — [`<section>`](elements/section/README.md): A thematic grouping with its own heading scope.
- [`heading`](MAIN-ELEMENTS.md#heading) — [`<h1>`](elements/h1/README.md), [`<h2>`](elements/h2/README.md), [`<h3>`](elements/h3/README.md), [`<h4>`](elements/h4/README.md), [`<h5>`](elements/h5/README.md), [`<h6>`](elements/h6/README.md): Section heading at one of six levels.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<body>`](elements/body/README.md) | Document body | normal | **[`body`](MAIN-ELEMENTS.md#body)** |
| [`<article>`](elements/article/README.md) | Self-contained syndicatable or reusable composition | normal | [`section`](MAIN-ELEMENTS.md#section) |
| [`<section>`](elements/section/README.md) | Generic document or application section | normal | **[`section`](MAIN-ELEMENTS.md#section)** |
| [`<nav>`](elements/nav/README.md) | Section with navigational links | normal | [`section`](MAIN-ELEMENTS.md#section) |
| [`<aside>`](elements/aside/README.md) | Sidebar for tangentially related content | normal | [`section`](MAIN-ELEMENTS.md#section) |
| [`<h1>`](elements/h1/README.md) | Heading | normal | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h2>`](elements/h2/README.md) | Heading | normal | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h3>`](elements/h3/README.md) | Heading | normal | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h4>`](elements/h4/README.md) | Heading | normal | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h5>`](elements/h5/README.md) | Heading | normal | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<h6>`](elements/h6/README.md) | Heading | normal | **[`heading`](MAIN-ELEMENTS.md#heading)** |
| [`<hgroup>`](elements/hgroup/README.md) | Heading container | normal | [`heading`](MAIN-ELEMENTS.md#heading) |
| [`<header>`](elements/header/README.md) | Introductory or navigational aids for a page or section | normal | [`section`](MAIN-ELEMENTS.md#section) |
| [`<footer>`](elements/footer/README.md) | Footer for a page or section | normal | [`section`](MAIN-ELEMENTS.md#section) |
| [`<address>`](elements/address/README.md) | Contact information for a page or article element | normal | [`section`](MAIN-ELEMENTS.md#section) |
| [`<main>`](elements/main/README.md) | Container for the dominant contents of the document | normal | [`section`](MAIN-ELEMENTS.md#section) |
| [`<search>`](elements/search/README.md) | Container for search controls | normal | [`section`](MAIN-ELEMENTS.md#section) |

## Categories represented

- [Flow](category-flow.md): `article`, `section`, `nav`, `aside`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hgroup`, `header`, `footer`, `address`, `main`, `search`
- [Sectioning](category-sectioning.md): `article`, `section`, `nav`, `aside`
- [Palpable](category-palpable.md): `article`, `section`, `nav`, `aside`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hgroup`, `header`, `footer`, `address`, `main`, `search`
- [Heading](category-heading.md): `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hgroup`
- [Context-restricted](category-context-restricted.md): `body`
