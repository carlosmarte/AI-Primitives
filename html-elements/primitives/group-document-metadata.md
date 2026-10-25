# Document & metadata

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

7 elements.

## Main primitives in this group

- [`html`](MAIN-ELEMENTS.md#html) — [`<html>`](elements/html/README.md): Root of the document.
- [`head`](MAIN-ELEMENTS.md#head) — [`<head>`](elements/head/README.md): Container for metadata.
- [`meta`](MAIN-ELEMENTS.md#meta) — [`<meta>`](elements/meta/README.md): Document-level name/value metadata.
- [`link`](MAIN-ELEMENTS.md#link) — [`<link>`](elements/link/README.md): Relationship to an external resource.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<html>`](elements/html/README.md) | Root element | normal | **[`html`](MAIN-ELEMENTS.md#html)** |
| [`<head>`](elements/head/README.md) | Container for document metadata | normal | **[`head`](MAIN-ELEMENTS.md#head)** |
| [`<title>`](elements/title/README.md) | Document title | escapable raw text | [`meta`](MAIN-ELEMENTS.md#meta) |
| [`<base>`](elements/base/README.md) | Base URL and default target navigable for hyperlinks and forms | void | [`link`](MAIN-ELEMENTS.md#link) |
| [`<link>`](elements/link/README.md) | Link metadata | void | **[`link`](MAIN-ELEMENTS.md#link)** |
| [`<meta>`](elements/meta/README.md) | Text metadata | void | **[`meta`](MAIN-ELEMENTS.md#meta)** |
| [`<style>`](elements/style/README.md) | Embedded styling information | raw text | [`link`](MAIN-ELEMENTS.md#link) |

## Categories represented

- [Metadata](category-metadata.md): `title`, `base`, `link`, `meta`, `style`
- [Flow](category-flow.md): `link`, `meta`, `style`
- [Phrasing](category-phrasing.md): `link`, `meta`
- [Context-restricted](category-context-restricted.md): `html`, `head`
