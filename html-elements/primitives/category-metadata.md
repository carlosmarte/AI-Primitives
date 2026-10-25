# Metadata

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Configures presentation, behavior, document relationships, or other out-of-band information.

**Spec.** https://html.spec.whatwg.org/multipage/dom.html#metadata-content

**Members.** 8 elements: 8 always, 0 conditional.

## Main primitives in this category

- [`link`](MAIN-ELEMENTS.md#link) — [`<link>`](elements/link/README.md): Relationship to an external resource.
- [`meta`](MAIN-ELEMENTS.md#meta) — [`<meta>`](elements/meta/README.md): Document-level name/value metadata.
- [`script`](MAIN-ELEMENTS.md#script) — [`<script>`](elements/script/README.md): Executable code or data block.
- [`template`](MAIN-ELEMENTS.md#template) — [`<template>`](elements/template/README.md): Inert markup to clone later.

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<base>`](elements/base/README.md) | Base URL and default target navigable for hyperlinks and forms | void | [Document & metadata](group-document-metadata.md) | [`link`](MAIN-ELEMENTS.md#link) | always |
| [`<link>`](elements/link/README.md) | Link metadata | void | [Document & metadata](group-document-metadata.md) | **[`link`](MAIN-ELEMENTS.md#link)** | always |
| [`<meta>`](elements/meta/README.md) | Text metadata | void | [Document & metadata](group-document-metadata.md) | **[`meta`](MAIN-ELEMENTS.md#meta)** | always |
| [`<noscript>`](elements/noscript/README.md) | Fallback content for script | normal | [Scripting & components](group-scripting.md) | [`script`](MAIN-ELEMENTS.md#script) | always |
| [`<script>`](elements/script/README.md) | Embedded script | raw text | [Scripting & components](group-scripting.md) | **[`script`](MAIN-ELEMENTS.md#script)** | always |
| [`<style>`](elements/style/README.md) | Embedded styling information | raw text | [Document & metadata](group-document-metadata.md) | [`link`](MAIN-ELEMENTS.md#link) | always |
| [`<template>`](elements/template/README.md) | Template | template | [Scripting & components](group-scripting.md) | **[`template`](MAIN-ELEMENTS.md#template)** | always |
| [`<title>`](elements/title/README.md) | Document title | escapable raw text | [Document & metadata](group-document-metadata.md) | [`meta`](MAIN-ELEMENTS.md#meta) | always |
