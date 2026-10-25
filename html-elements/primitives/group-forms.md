# Forms

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

15 elements.

## Main primitives in this group

- [`form`](MAIN-ELEMENTS.md#form) — [`<form>`](elements/form/README.md): Submittable group of controls.
- [`input`](MAIN-ELEMENTS.md#input) — [`<input>`](elements/input/README.md): Single-value control; type selects the widget.
- [`button`](MAIN-ELEMENTS.md#button) — [`<button>`](elements/button/README.md): Clickable control.
- [`label`](MAIN-ELEMENTS.md#label) — [`<label>`](elements/label/README.md): Caption bound to a control.
- [`select`](MAIN-ELEMENTS.md#select) — [`<select>`](elements/select/README.md): Choose from a list of options.
- [`option`](MAIN-ELEMENTS.md#option) — [`<option>`](elements/option/README.md): One choice in a select or datalist.
- [`textarea`](MAIN-ELEMENTS.md#textarea) — [`<textarea>`](elements/textarea/README.md): Multi-line text control.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<form>`](elements/form/README.md) | User-submittable form | normal | **[`form`](MAIN-ELEMENTS.md#form)** |
| [`<label>`](elements/label/README.md) | Caption for a form control | normal | **[`label`](MAIN-ELEMENTS.md#label)** |
| [`<input>`](elements/input/README.md) | Form control | void | **[`input`](MAIN-ELEMENTS.md#input)** |
| [`<button>`](elements/button/README.md) | Button control | normal | **[`button`](MAIN-ELEMENTS.md#button)** |
| [`<select>`](elements/select/README.md) | List box control | normal | **[`select`](MAIN-ELEMENTS.md#select)** |
| [`<datalist>`](elements/datalist/README.md) | Container for options for combo box control | normal | [`select`](MAIN-ELEMENTS.md#select) |
| [`<optgroup>`](elements/optgroup/README.md) | Group of options in a list box | normal | [`option`](MAIN-ELEMENTS.md#option) |
| [`<option>`](elements/option/README.md) | Option in a list box or combo box control | normal | **[`option`](MAIN-ELEMENTS.md#option)** |
| [`<selectedcontent>`](elements/selectedcontent/README.md) | Mirrors content from an option | normal | [`select`](MAIN-ELEMENTS.md#select) |
| [`<textarea>`](elements/textarea/README.md) | Multiline text controls | escapable raw text | **[`textarea`](MAIN-ELEMENTS.md#textarea)** |
| [`<output>`](elements/output/README.md) | Calculated output value | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<progress>`](elements/progress/README.md) | Progress bar | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<meter>`](elements/meter/README.md) | Gauge | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<fieldset>`](elements/fieldset/README.md) | Group of form controls | normal | [`form`](MAIN-ELEMENTS.md#form) |
| [`<legend>`](elements/legend/README.md) | Caption for fieldset | normal | [`label`](MAIN-ELEMENTS.md#label) |

## Categories represented

- [Flow](category-flow.md): `form`, `label`, `input`, `button`, `select`, `datalist`, `textarea`, `output`, `progress`, `meter`, `fieldset`
- [Palpable](category-palpable.md): `form`, `label`, `input`, `button`, `select`, `textarea`, `output`, `progress`, `meter`, `fieldset`
- [Phrasing](category-phrasing.md): `label`, `input`, `button`, `select`, `datalist`, `selectedcontent`, `textarea`, `output`, `progress`, `meter`
- [Interactive](category-interactive.md): `label`, `input`, `button`, `select`, `textarea`
- [Form-associated](category-form-associated.md): `input`, `button`, `select`, `textarea`, `output`, `fieldset`
- [listed](category-listed.md): `input`, `button`, `select`, `textarea`, `output`, `fieldset`
- [submittable](category-submittable.md): `input`, `button`, `select`, `textarea`
- [resettable](category-resettable.md): `input`, `select`, `textarea`, `output`
- [autocapitalize-and-autocorrect-inheriting](category-autocapitalize-and-autocorrect-inheriting.md): `input`, `button`, `select`, `textarea`, `output`, `fieldset`
- [labelable](category-labelable.md): `input`, `button`, `select`, `textarea`, `output`, `progress`, `meter`
- [Context-restricted](category-context-restricted.md): `optgroup`, `option`, `legend`
