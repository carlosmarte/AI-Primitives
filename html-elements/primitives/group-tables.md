# Tabular data

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

10 elements.

## Main primitives in this group

- [`table`](MAIN-ELEMENTS.md#table) — [`<table>`](elements/table/README.md): Tabular data container.
- [`tr`](MAIN-ELEMENTS.md#tr) — [`<tr>`](elements/tr/README.md): Table row.
- [`cell`](MAIN-ELEMENTS.md#cell) — [`<td>`](elements/td/README.md), [`<th>`](elements/th/README.md): Table data or header cell.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<table>`](elements/table/README.md) | Table | normal | **[`table`](MAIN-ELEMENTS.md#table)** |
| [`<caption>`](elements/caption/README.md) | Table caption | normal | [`table`](MAIN-ELEMENTS.md#table) |
| [`<colgroup>`](elements/colgroup/README.md) | Group of columns in a table | normal | [`table`](MAIN-ELEMENTS.md#table) |
| [`<col>`](elements/col/README.md) | Table column | void | [`table`](MAIN-ELEMENTS.md#table) |
| [`<thead>`](elements/thead/README.md) | Group of heading rows in a table | normal | [`table`](MAIN-ELEMENTS.md#table) |
| [`<tbody>`](elements/tbody/README.md) | Group of rows in a table | normal | [`table`](MAIN-ELEMENTS.md#table) |
| [`<tfoot>`](elements/tfoot/README.md) | Group of footer rows in a table | normal | [`table`](MAIN-ELEMENTS.md#table) |
| [`<tr>`](elements/tr/README.md) | Table row | normal | **[`tr`](MAIN-ELEMENTS.md#tr)** |
| [`<th>`](elements/th/README.md) | Table header cell | normal | **[`cell`](MAIN-ELEMENTS.md#cell)** |
| [`<td>`](elements/td/README.md) | Table cell | normal | **[`cell`](MAIN-ELEMENTS.md#cell)** |

## Categories represented

- [Flow](category-flow.md): `table`
- [Palpable](category-palpable.md): `table`
- [Context-restricted](category-context-restricted.md): `caption`, `colgroup`, `col`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`
