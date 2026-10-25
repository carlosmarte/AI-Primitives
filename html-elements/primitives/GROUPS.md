# Purpose groups

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand.

The spec’s grouping of elements by purpose. Every element is in exactly one group. Obsolete elements (center, font, marquee, frame, big, tt, param, and others) are excluded.

| Group | Elements | Main primitives | Members |
|---|---|---|---|
| [Document & metadata](group-document-metadata.md) | 7 | `html`, `head`, `meta`, `link` | `html`, `head`, `title`, `base`, `link`, `meta`, `style` |
| [Sections](group-sections.md) | 17 | `body`, `section`, `heading` | `body`, `article`, `section`, `nav`, `aside`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hgroup`, `header`, `footer`, `address`, `main`, `search` |
| [Grouping content](group-grouping-content.md) | 14 | `div`, `p`, `list`, `li`, `pre` | `p`, `hr`, `pre`, `blockquote`, `ol`, `ul`, `menu`, `li`, `dl`, `dt`, `dd`, `figure`, `figcaption`, `div` |
| [Text-level semantics](group-text-level.md) | 29 | `span`, `a`, `br` | `a`, `em`, `strong`, `small`, `s`, `cite`, `q`, `dfn`, `abbr`, `ruby`, `rt`, `rp`, `data`, `time`, `code`, `var`, `samp`, `kbd`, `sub`, `sup`, `i`, `b`, `u`, `mark`, `bdi`, `bdo`, `span`, `br`, `wbr` |
| [Edits](group-edits.md) | 2 | — | `ins`, `del` |
| [Embedded content](group-embedded.md) | 13 | `img`, `video`, `audio`, `source`, `iframe` | `picture`, `source`, `img`, `iframe`, `embed`, `object`, `video`, `audio`, `track`, `map`, `area`, `svg`, `math` |
| [Tabular data](group-tables.md) | 10 | `table`, `tr`, `cell` | `table`, `caption`, `colgroup`, `col`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td` |
| [Forms](group-forms.md) | 15 | `form`, `input`, `button`, `label`, `select`, `option`, `textarea` | `form`, `label`, `input`, `button`, `select`, `datalist`, `optgroup`, `option`, `selectedcontent`, `textarea`, `output`, `progress`, `meter`, `fieldset`, `legend` |
| [Interactive elements](group-interactive.md) | 3 | `details`, `dialog` | `details`, `summary`, `dialog` |
| [Scripting & components](group-scripting.md) | 5 | `canvas`, `script`, `template`, `slot` | `script`, `noscript`, `template`, `slot`, `canvas` |
