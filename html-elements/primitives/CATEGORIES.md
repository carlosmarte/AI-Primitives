# Content categories

> Generated from `SPEC.md` and `scripts/data/core.json` by `scripts/generate-primitives.mjs`; do not edit by hand.

Counts include conditional members once each; they are not counts for a particular document. Context-restricted is a reporting bucket, not a WHATWG category.

| Category | Elements | Always | Conditional | Main primitives in it | Definition | Spec |
|---|---|---|---|---|---|---|
| [Metadata](category-metadata.md) | 8 | 8 | 0 | 4 | Configures presentation, behavior, document relationships, or other out-of-band information. | [spec](https://html.spec.whatwg.org/multipage/dom.html#metadata-content) |
| [Flow](category-flow.md) | 88 | 84 | 4 | 34 | Content ordinarily used in document and application bodies. | [spec](https://html.spec.whatwg.org/multipage/dom.html#flow-content) |
| [Sectioning](category-sectioning.md) | 4 | 4 | 0 | 1 | Defines the scope of header and footer elements. | [spec](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content) |
| [Heading](category-heading.md) | 7 | 6 | 1 | 6 | Defines a section heading. | [spec](https://html.spec.whatwg.org/multipage/dom.html#heading-content) |
| [Phrasing](category-phrasing.md) | 57 | 53 | 4 | 18 | Text and elements marking up text within paragraphs. | [spec](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content) |
| [Embedded](category-embedded.md) | 10 | 10 | 0 | 5 | Imports resources or inserts content from another vocabulary. | [spec](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2) |
| [Interactive](category-interactive.md) | 12 | 7 | 5 | 11 | Content specifically intended for user interaction. | [spec](https://html.spec.whatwg.org/multipage/dom.html#interactive-content) |
| [Palpable](category-palpable.md) | 75 | 69 | 6 | 27 | Provides meaningful non-empty text, media, or user-interactable content. | [spec](https://html.spec.whatwg.org/multipage/dom.html#palpable-content) |
| [Script-supporting](category-script-supporting.md) | 2 | 2 | 0 | 2 | Supports scripts without representing rendered content itself. | [spec](https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements) |
| [Form-associated](category-form-associated.md) | 8 | 8 | 0 | 5 | Elements that can have a form owner. | [spec](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element) |
| [listed](category-listed.md) | 7 | 7 | 0 | 4 | Participates in the form.elements and fieldset.elements APIs. | [spec](https://html.spec.whatwg.org/multipage/forms.html#category-listed) |
| [submittable](category-submittable.md) | 4 | 4 | 0 | 4 | Can contribute to the entry list constructed during form submission. | [spec](https://html.spec.whatwg.org/multipage/forms.html#category-submit) |
| [resettable](category-resettable.md) | 4 | 4 | 0 | 3 | Can be affected by resetting a form. | [spec](https://html.spec.whatwg.org/multipage/forms.html#category-reset) |
| [autocapitalize-and-autocorrect-inheriting](category-autocapitalize-and-autocorrect-inheriting.md) | 6 | 6 | 0 | 4 | Inherits autocapitalize and autocorrect from its form owner. | [spec](https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize) |
| [labelable](category-labelable.md) | 7 | 6 | 1 | 4 | Can be associated with a label element. | [spec](https://html.spec.whatwg.org/multipage/forms.html#category-label) |
| [Context-restricted](category-context-restricted.md) | 24 | 24 | 0 | 9 | Requested reporting bucket for elements with no membership in the requested categories; not a WHATWG content category. | [spec](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories) |

Each category has its own file, `category-<name>.md`, listing every member with its syntax kind, purpose group, condition, and main primitive.
