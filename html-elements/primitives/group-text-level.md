# Text-level semantics

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand. Back to [GROUPS.md](GROUPS.md).

29 elements.

## Main primitives in this group

- [`span`](MAIN-ELEMENTS.md#span) — [`<span>`](elements/span/README.md): Generic inline container.
- [`a`](MAIN-ELEMENTS.md#a) — [`<a>`](elements/a/README.md): Hyperlink.
- [`br`](MAIN-ELEMENTS.md#br) — [`<br>`](elements/br/README.md): Line break.

## All members

| Element | Description | Syntax | Main primitive |
|---|---|---|---|
| [`<a>`](elements/a/README.md) | Hyperlink | normal | **[`a`](MAIN-ELEMENTS.md#a)** |
| [`<em>`](elements/em/README.md) | Stress emphasis | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<strong>`](elements/strong/README.md) | Importance | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<small>`](elements/small/README.md) | Side comment | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<s>`](elements/s/README.md) | Inaccurate text | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<cite>`](elements/cite/README.md) | Title of a work | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<q>`](elements/q/README.md) | Quotation | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<dfn>`](elements/dfn/README.md) | Defining instance | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<abbr>`](elements/abbr/README.md) | Abbreviation | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<ruby>`](elements/ruby/README.md) | Ruby annotation(s) | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<rt>`](elements/rt/README.md) | Ruby annotation text | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<rp>`](elements/rp/README.md) | Parenthesis for ruby annotation text | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<data>`](elements/data/README.md) | Machine-readable equivalent | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<time>`](elements/time/README.md) | Machine-readable equivalent of date- or time-related data | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<code>`](elements/code/README.md) | Computer code | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<var>`](elements/var/README.md) | Variable | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<samp>`](elements/samp/README.md) | Computer output | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<kbd>`](elements/kbd/README.md) | User input | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<sub>`](elements/sub/README.md) | Subscript | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<sup>`](elements/sup/README.md) | Superscript | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<i>`](elements/i/README.md) | Alternate voice | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<b>`](elements/b/README.md) | Keywords | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<u>`](elements/u/README.md) | Unarticulated annotation | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<mark>`](elements/mark/README.md) | Highlight | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<bdi>`](elements/bdi/README.md) | Text directionality isolation | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<bdo>`](elements/bdo/README.md) | Text directionality formatting | normal | [`span`](MAIN-ELEMENTS.md#span) |
| [`<span>`](elements/span/README.md) | Generic phrasing container | normal | **[`span`](MAIN-ELEMENTS.md#span)** |
| [`<br>`](elements/br/README.md) | Line break, e.g. in poem or postal address | void | **[`br`](MAIN-ELEMENTS.md#br)** |
| [`<wbr>`](elements/wbr/README.md) | Line breaking opportunity | void | [`br`](MAIN-ELEMENTS.md#br) |

## Categories represented

- [Flow](category-flow.md): `a`, `em`, `strong`, `small`, `s`, `cite`, `q`, `dfn`, `abbr`, `ruby`, `data`, `time`, `code`, `var`, `samp`, `kbd`, `sub`, `sup`, `i`, `b`, `u`, `mark`, `bdi`, `bdo`, `span`, `br`, `wbr`
- [Phrasing](category-phrasing.md): `a`, `em`, `strong`, `small`, `s`, `cite`, `q`, `dfn`, `abbr`, `ruby`, `data`, `time`, `code`, `var`, `samp`, `kbd`, `sub`, `sup`, `i`, `b`, `u`, `mark`, `bdi`, `bdo`, `span`, `br`, `wbr`
- [Interactive](category-interactive.md): `a`
- [Palpable](category-palpable.md): `a`, `em`, `strong`, `small`, `s`, `cite`, `q`, `dfn`, `abbr`, `ruby`, `data`, `time`, `code`, `var`, `samp`, `kbd`, `sub`, `sup`, `i`, `b`, `u`, `mark`, `bdi`, `bdo`, `span`
- [Context-restricted](category-context-restricted.md): `rt`, `rp`
