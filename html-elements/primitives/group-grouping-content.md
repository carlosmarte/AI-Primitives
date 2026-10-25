# Grouping content

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

14 elements.

## Main primitives in this group

- [`div`](MAIN-ELEMENTS.md#div) — [`<div>`](elements/div/README.md): Generic block container.
- [`p`](MAIN-ELEMENTS.md#p) — [`<p>`](elements/p/README.md): Paragraph.
- [`list`](MAIN-ELEMENTS.md#list) — [`<ul>`](elements/ul/README.md), [`<ol>`](elements/ol/README.md): Unordered or ordered list container.
- [`li`](MAIN-ELEMENTS.md#li) — [`<li>`](elements/li/README.md): List item.
- [`pre`](MAIN-ELEMENTS.md#pre) — [`<pre>`](elements/pre/README.md): Preformatted block; whitespace is significant.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<p>`](elements/p/README.md) | Paragraph | normal | **[`p`](MAIN-ELEMENTS.md#p)** |
| [`<hr>`](elements/hr/README.md) | Thematic break | void | [`p`](MAIN-ELEMENTS.md#p) |
| [`<pre>`](elements/pre/README.md) | Block of preformatted text | normal | **[`pre`](MAIN-ELEMENTS.md#pre)** |
| [`<blockquote>`](elements/blockquote/README.md) | A section quoted from another source | normal | [`div`](MAIN-ELEMENTS.md#div) |
| [`<ol>`](elements/ol/README.md) | Ordered list | normal | **[`list`](MAIN-ELEMENTS.md#list)** |
| [`<ul>`](elements/ul/README.md) | List | normal | **[`list`](MAIN-ELEMENTS.md#list)** |
| [`<menu>`](elements/menu/README.md) | Menu of commands | normal | [`list`](MAIN-ELEMENTS.md#list) |
| [`<li>`](elements/li/README.md) | List item | normal | **[`li`](MAIN-ELEMENTS.md#li)** |
| [`<dl>`](elements/dl/README.md) | Association list consisting of zero or more name-value groups | normal | [`list`](MAIN-ELEMENTS.md#list) |
| [`<dt>`](elements/dt/README.md) | Legend for corresponding dd element(s) | normal | [`li`](MAIN-ELEMENTS.md#li) |
| [`<dd>`](elements/dd/README.md) | Content for corresponding dt element(s) | normal | [`li`](MAIN-ELEMENTS.md#li) |
| [`<figure>`](elements/figure/README.md) | Figure with optional caption | normal | [`div`](MAIN-ELEMENTS.md#div) |
| [`<figcaption>`](elements/figcaption/README.md) | Caption for figure | normal | [`p`](MAIN-ELEMENTS.md#p) |
| [`<div>`](elements/div/README.md) | Generic flow container, or container for name-value groups in dl elements | normal | **[`div`](MAIN-ELEMENTS.md#div)** |

## Categories represented

- [Flow](category-flow.md): `p`, `hr`, `pre`, `blockquote`, `ol`, `ul`, `menu`, `dl`, `figure`, `div`
- [Palpable](category-palpable.md): `p`, `pre`, `blockquote`, `ol`, `ul`, `menu`, `dl`, `figure`, `div`
- [Context-restricted](category-context-restricted.md): `li`, `dt`, `dd`, `figcaption`
