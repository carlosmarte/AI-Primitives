# listed

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [CATEGORIES.md](CATEGORIES.md).

**Definition.** Participates in the form.elements and fieldset.elements APIs.

**Spec.** https://html.spec.whatwg.org/multipage/forms.html#category-listed

**Members.** 7 elements: 7 always, 0 conditional.

## Main primitives in this category

- [`button`](MAIN-ELEMENTS.md#button) — [`<button>`](elements/button/README.md): Clickable control.
- [`input`](MAIN-ELEMENTS.md#input) — [`<input>`](elements/input/README.md): Single-value control; type selects the widget.
- [`select`](MAIN-ELEMENTS.md#select) — [`<select>`](elements/select/README.md): Choose from a list of options.
- [`textarea`](MAIN-ELEMENTS.md#textarea) — [`<textarea>`](elements/textarea/README.md): Multi-line text control.

## All members

| Element | Description | Syntax | Group | Main primitive | Condition |
|---|---|---|---|---|---|
| [`<button>`](elements/button/README.md) | Button control | normal | [Forms](group-forms.md) | **[`button`](MAIN-ELEMENTS.md#button)** | always |
| [`<fieldset>`](elements/fieldset/README.md) | Group of form controls | normal | [Forms](group-forms.md) | [`form`](MAIN-ELEMENTS.md#form) | always |
| [`<input>`](elements/input/README.md) | Form control | void | [Forms](group-forms.md) | **[`input`](MAIN-ELEMENTS.md#input)** | always |
| [`<object>`](elements/object/README.md) | Image, child navigable , or plugin | normal | [Embedded content](group-embedded.md) | [`iframe`](MAIN-ELEMENTS.md#iframe) | always |
| [`<output>`](elements/output/README.md) | Calculated output value | normal | [Forms](group-forms.md) | [`span`](MAIN-ELEMENTS.md#span) | always |
| [`<select>`](elements/select/README.md) | List box control | normal | [Forms](group-forms.md) | **[`select`](MAIN-ELEMENTS.md#select)** | always |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | escapable raw text | [Forms](group-forms.md) | **[`textarea`](MAIN-ELEMENTS.md#textarea)** | always |

## Non-element members

- [Form-associated custom elements](custom-elements/README.md)
