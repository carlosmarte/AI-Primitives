# Scripting & components

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

5 elements.

## Main primitives in this group

- [`canvas`](MAIN-ELEMENTS.md#canvas) — [`<canvas>`](elements/canvas/README.md): Drawn pixels under script control.
- [`script`](MAIN-ELEMENTS.md#script) — [`<script>`](elements/script/README.md): Executable code or data block.
- [`template`](MAIN-ELEMENTS.md#template) — [`<template>`](elements/template/README.md): Inert markup to clone later.
- [`slot`](MAIN-ELEMENTS.md#slot) — [`<slot>`](elements/slot/README.md): Insertion point in a shadow tree.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<script>`](elements/script/README.md) | Embedded script | raw text | **[`script`](MAIN-ELEMENTS.md#script)** |
| [`<noscript>`](elements/noscript/README.md) | Fallback content for script | normal | [`script`](MAIN-ELEMENTS.md#script) |
| [`<template>`](elements/template/README.md) | Template | template | **[`template`](MAIN-ELEMENTS.md#template)** |
| [`<slot>`](elements/slot/README.md) | Shadow tree slot | normal | **[`slot`](MAIN-ELEMENTS.md#slot)** |
| [`<canvas>`](elements/canvas/README.md) | Scriptable bitmap canvas | normal | **[`canvas`](MAIN-ELEMENTS.md#canvas)** |

## Categories represented

- [Metadata](category-metadata.md): `script`, `noscript`, `template`
- [Flow](category-flow.md): `script`, `noscript`, `template`, `slot`, `canvas`
- [Phrasing](category-phrasing.md): `script`, `noscript`, `template`, `slot`, `canvas`
- [Script-supporting](category-script-supporting.md): `script`, `template`
- [Embedded](category-embedded.md): `canvas`
- [Palpable](category-palpable.md): `canvas`
