# Embedded

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Imports resources or inserts content from another vocabulary.

**Spec.** https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2

**Members.** 10 elements: 10 always, 0 conditional.

## Main primitives in this category

- [`audio`](MAIN-ELEMENTS.md#audio) — [`<audio>`](elements/audio/README.md): Audio player.
- [`canvas`](MAIN-ELEMENTS.md#canvas) — [`<canvas>`](elements/canvas/README.md): Drawn pixels under script control.
- [`iframe`](MAIN-ELEMENTS.md#iframe) — [`<iframe>`](elements/iframe/README.md): Another document, embedded.
- [`img`](MAIN-ELEMENTS.md#img) — [`<img>`](elements/img/README.md): A picture.
- [`video`](MAIN-ELEMENTS.md#video) — [`<video>`](elements/video/README.md): Video player.

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<audio>`](elements/audio/README.md) | Audio player | normal | [Embedded content](group-embedded.md) | **[`audio`](MAIN-ELEMENTS.md#audio)** | always |
| [`<canvas>`](elements/canvas/README.md) | Scriptable bitmap canvas | normal | [Scripting & components](group-scripting.md) | **[`canvas`](MAIN-ELEMENTS.md#canvas)** | always |
| [`<embed>`](elements/embed/README.md) | Plugin | void | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<iframe>`](elements/iframe/README.md) | Child navigable | normal | [Embedded content](group-embedded.md) | **[`iframe`](MAIN-ELEMENTS.md#iframe)** | always |
| [`<img>`](elements/img/README.md) | Image | void | [Embedded content](group-embedded.md) | **[`img`](MAIN-ELEMENTS.md#img)** | always |
| [`<math>`](elements/math/README.md) | MathML root | foreign | [Embedded content](group-embedded.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<object>`](elements/object/README.md) | Image, child navigable , or plugin | normal | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<picture>`](elements/picture/README.md) | Image | normal | [Embedded content](group-embedded.md) | [`img`](MAIN-ELEMENTS.md#img) | always |
| [`<svg>`](elements/svg/README.md) | SVG root | foreign | [Embedded content](group-embedded.md) | [`canvas`](MAIN-ELEMENTS.md#canvas) | always |
| [`<video>`](elements/video/README.md) | Video player | normal | [Embedded content](group-embedded.md) | **[`video`](MAIN-ELEMENTS.md#video)** | always |
