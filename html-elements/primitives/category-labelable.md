# labelable

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Can be associated with a label element.

**Spec.** https://html.spec.whatwg.org/multipage/forms.html#category-label

**Members.** 7 elements: 6 always, 1 conditional.

## Main primitives in this category

- [`button`](MAIN-ELEMENTS.md#button) — [`<button>`](elements/button/README.md): Clickable control.
- [`input`](MAIN-ELEMENTS.md#input) — [`<input>`](elements/input/README.md): Single-value control; type selects the widget.
- [`select`](MAIN-ELEMENTS.md#select) — [`<select>`](elements/select/README.md): Choose from a list of options.
- [`textarea`](MAIN-ELEMENTS.md#textarea) — [`<textarea>`](elements/textarea/README.md): Multi-line text control.

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<button>`](elements/button/README.md) | Button control | normal | [Forms](group-forms.md) | **[`button`](MAIN-ELEMENTS.md#button)** | always |
| [`<input>`](elements/input/README.md) | Form control | void | [Forms](group-forms.md) | **[`input`](MAIN-ELEMENTS.md#input)** | only when the type attribute is not in the Hidden state |
| [`<meter>`](elements/meter/README.md) | Gauge | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<output>`](elements/output/README.md) | Calculated output value | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<progress>`](elements/progress/README.md) | Progress bar | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<select>`](elements/select/README.md) | List box control | normal | [Forms](group-forms.md) | **[`select`](MAIN-ELEMENTS.md#select)** | always |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | escapable raw text | [Forms](group-forms.md) | **[`textarea`](MAIN-ELEMENTS.md#textarea)** | always |

## Non-element members

- [Form-associated custom elements](custom-elements/README.md)
