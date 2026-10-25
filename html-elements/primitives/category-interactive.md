# Interactive

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Content specifically intended for user interaction.

**Spec.** https://html.spec.whatwg.org/multipage/dom.html#interactive-content

**Members.** 12 elements: 7 always, 5 conditional.

## Main primitives in this category

- [`a`](MAIN-ELEMENTS.md#a) — [`<a>`](elements/a/README.md): Hyperlink.
- [`audio`](MAIN-ELEMENTS.md#audio) — [`<audio>`](elements/audio/README.md): Audio player.
- [`button`](MAIN-ELEMENTS.md#button) — [`<button>`](elements/button/README.md): Clickable control.
- [`details`](MAIN-ELEMENTS.md#details) — [`<details>`](elements/details/README.md): Disclosure widget with no script.
- [`iframe`](MAIN-ELEMENTS.md#iframe) — [`<iframe>`](elements/iframe/README.md): Another document, embedded.
- [`img`](MAIN-ELEMENTS.md#img) — [`<img>`](elements/img/README.md): A picture.
- [`input`](MAIN-ELEMENTS.md#input) — [`<input>`](elements/input/README.md): Single-value control; type selects the widget.
- [`label`](MAIN-ELEMENTS.md#label) — [`<label>`](elements/label/README.md): Caption bound to a control.
- [`select`](MAIN-ELEMENTS.md#select) — [`<select>`](elements/select/README.md): Choose from a list of options.
- [`textarea`](MAIN-ELEMENTS.md#textarea) — [`<textarea>`](elements/textarea/README.md): Multi-line text control.
- [`video`](MAIN-ELEMENTS.md#video) — [`<video>`](elements/video/README.md): Video player.

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<a>`](elements/a/README.md) | Hyperlink | normal | [Text-level semantics](group-text-level.md) | **[`a`](MAIN-ELEMENTS.md#a)** | only when the href attribute is present |
| [`<audio>`](elements/audio/README.md) | Audio player | normal | [Embedded content](group-embedded.md) | **[`audio`](MAIN-ELEMENTS.md#audio)** | only when the controls attribute is present |
| [`<button>`](elements/button/README.md) | Button control | normal | [Forms](group-forms.md) | **[`button`](MAIN-ELEMENTS.md#button)** | always |
| [`<details>`](elements/details/README.md) | Disclosure control for hiding details | normal | [Interactive elements](group-interactive.md) | **[`details`](MAIN-ELEMENTS.md#details)** | always |
| [`<embed>`](elements/embed/README.md) | Plugin | void | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<iframe>`](elements/iframe/README.md) | Child navigable | normal | [Embedded content](group-embedded.md) | **[`iframe`](MAIN-ELEMENTS.md#iframe)** | always |
| [`<img>`](elements/img/README.md) | Image | void | [Embedded content](group-embedded.md) | **[`img`](MAIN-ELEMENTS.md#img)** | only when the usemap or controls attribute is present |
| [`<input>`](elements/input/README.md) | Form control | void | [Forms](group-forms.md) | **[`input`](MAIN-ELEMENTS.md#input)** | only when the type attribute is not in the Hidden state |
| [`<label>`](elements/label/README.md) | Caption for a form control | normal | [Forms](group-forms.md) | **[`label`](MAIN-ELEMENTS.md#label)** | always |
| [`<select>`](elements/select/README.md) | List box control | normal | [Forms](group-forms.md) | **[`select`](MAIN-ELEMENTS.md#select)** | always |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | escapable raw text | [Forms](group-forms.md) | **[`textarea`](MAIN-ELEMENTS.md#textarea)** | always |
| [`<video>`](elements/video/README.md) | Video player | normal | [Embedded content](group-embedded.md) | **[`video`](MAIN-ELEMENTS.md#video)** | only when the controls attribute is present |
