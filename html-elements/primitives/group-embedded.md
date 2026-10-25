# Embedded content

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

13 elements.

## Main primitives in this group

- [`img`](MAIN-ELEMENTS.md#img) — [`<img>`](elements/img/README.md): A picture.
- [`video`](MAIN-ELEMENTS.md#video) — [`<video>`](elements/video/README.md): Video player.
- [`audio`](MAIN-ELEMENTS.md#audio) — [`<audio>`](elements/audio/README.md): Audio player.
- [`source`](MAIN-ELEMENTS.md#source) — [`<source>`](elements/source/README.md): Alternative resource for a picture or media element.
- [`iframe`](MAIN-ELEMENTS.md#iframe) — [`<iframe>`](elements/iframe/README.md): Another document, embedded.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<picture>`](elements/picture/README.md) | Image | normal | [`img`](MAIN-ELEMENTS.md#img) |
| [`<source>`](elements/source/README.md) | Image source for img or media source for video or audio | void | **[`source`](MAIN-ELEMENTS.md#source)** |
| [`<img>`](elements/img/README.md) | Image | void | **[`img`](MAIN-ELEMENTS.md#img)** |
| [`<iframe>`](elements/iframe/README.md) | Child navigable | normal | **[`iframe`](MAIN-ELEMENTS.md#iframe)** |
| [`<embed>`](elements/embed/README.md) | Plugin | void | [`iframe`](MAIN-ELEMENTS.md#iframe) |
| [`<object>`](elements/object/README.md) | Image, child navigable , or plugin | normal | [`iframe`](MAIN-ELEMENTS.md#iframe) |
| [`<video>`](elements/video/README.md) | Video player | normal | **[`video`](MAIN-ELEMENTS.md#video)** |
| [`<audio>`](elements/audio/README.md) | Audio player | normal | **[`audio`](MAIN-ELEMENTS.md#audio)** |
| [`<track>`](elements/track/README.md) | Timed text track | void | [`source`](MAIN-ELEMENTS.md#source) |
| [`<map>`](elements/map/README.md) | Image map | normal | [`img`](MAIN-ELEMENTS.md#img) |
| [`<area>`](elements/area/README.md) | Hyperlink or dead area on an image map | void | [`a`](MAIN-ELEMENTS.md#a) |
| [`<svg>`](elements/svg/README.md) | SVG root | foreign | [`canvas`](MAIN-ELEMENTS.md#canvas) |
| [`<math>`](elements/math/README.md) | MathML root | foreign | [`span`](MAIN-ELEMENTS.md#span) |

## Categories represented

- [Flow](category-flow.md): `picture`, `img`, `iframe`, `embed`, `object`, `video`, `audio`, `map`, `area`, `svg`, `math`
- [Phrasing](category-phrasing.md): `picture`, `img`, `iframe`, `embed`, `object`, `video`, `audio`, `map`, `area`, `svg`, `math`
- [Embedded](category-embedded.md): `picture`, `img`, `iframe`, `embed`, `object`, `video`, `audio`, `svg`, `math`
- [Palpable](category-palpable.md): `picture`, `img`, `iframe`, `embed`, `object`, `video`, `audio`, `map`, `svg`, `math`
- [Interactive](category-interactive.md): `img`, `iframe`, `embed`, `video`, `audio`
- [Form-associated](category-form-associated.md): `img`, `object`
- [listed](category-listed.md): `object`
- [Context-restricted](category-context-restricted.md): `source`, `track`
