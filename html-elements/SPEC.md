{
  "metadata": {
    "standard": "WHATWG HTML Living Standard",
    "retrieved_on": "2026-10-24",
    "source_last_updated": "2026-10-22",
    "named_html_elements": 113,
    "foreign_root_elements": 2,
    "total_elements": 115,
    "scope": "All fixed, conforming HTML element names in the current element index, plus svg and math. Obsolete elements excluded. Arbitrary author-defined custom element names are described separately because they cannot be enumerated.",
    "membership_convention": "categories includes both unconditional and conditional memberships. If a category is a key in conditional, membership applies only when that condition holds. Counts and reverse_index include conditional candidates once each; they are not counts for a particular document.",
    "context_restricted_convention": "Empty categories arrays are retained; Context-restricted exists only in the reverse index and summary as the requested reporting bucket. Conditional elements whose condition fails are not automatically reclassified into this static bucket.",
    "parent_requirement_convention": "Records named-parent/ancestor requirements relevant here; null is not permission to place the element anywhere. All element content models, transparent models, template contexts, and other conformance restrictions still apply. This taxonomy is not a full nesting validator.",
    "form_hierarchy_note": "The requested labelable subcategory is presented alongside the form categories, but is not strictly a subset of Form-associated: meter and progress are labelable without being form-associated.",
    "syntax_scope": "Syntax kinds apply to text/html serialization; XML has different syntax rules.",
    "classification_policy": "Normative category definitions and normative element definitions take precedence over the non-normative index. Known discrepancies are flagged per element with classification_note.",
    "unresolved_classifications": []
  },
  "elements": {
    "a": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable"
      ],
      "conditional": {
        "Interactive": "the href attribute is present"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "abbr": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "address": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "area": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {
        "Flow": "it is a descendant of a map element",
        "Phrasing": "it is a descendant of a map element"
      },
      "syntax": "void",
      "parent_requirement": "Where phrasing content is expected, but only with a map ancestor."
    },
    "article": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "aside": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "audio": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Interactive",
        "Palpable"
      ],
      "conditional": {
        "Interactive": "the controls attribute is present",
        "Palpable": "the controls attribute is present"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "b": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "base": {
      "categories": [
        "Metadata"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": "Child of head; at most one base in the document."
    },
    "bdi": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "bdo": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "blockquote": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "body": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Second element child of html."
    },
    "br": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null
    },
    "button": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable",
        "Form-associated",
        "listed",
        "submittable",
        "autocapitalize-and-autocorrect-inheriting",
        "labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "canvas": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "caption": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of table; placement must satisfy the table content model."
    },
    "cite": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "code": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "col": {
      "categories": [],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": "Child of colgroup that has no span attribute."
    },
    "colgroup": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of table; placement must satisfy the table content model."
    },
    "data": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "datalist": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "dd": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of dl, or child of a div that is a child of dl; after a dt or dd within the name-value group."
    },
    "del": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "details": {
      "categories": [
        "Flow",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "dfn": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "dialog": {
      "categories": [
        "Flow"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "div": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "dl": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {
        "Palpable": "the element's children include at least one name-value group"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "dt": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of dl, or child of a div that is a child of dl; before a dt or dd within the name-value group."
    },
    "em": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "embed": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null
    },
    "fieldset": {
      "categories": [
        "Flow",
        "Palpable",
        "Form-associated",
        "listed",
        "autocapitalize-and-autocorrect-inheriting"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "figcaption": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "First or last child of figure."
    },
    "figure": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "footer": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "form": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "h1": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "h2": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "h3": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "h4": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "h5": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "h6": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "head": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "First element child of html."
    },
    "header": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "hgroup": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {
        "Heading": "it has a descendant h1 to h6 element"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "classification_note": "The general normative Heading definition makes membership conditional on a descendant h1\u2013h6; the index omits this condition. The condition is retained."
    },
    "hr": {
      "categories": [
        "Flow"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null
    },
    "html": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Document document element; alternatively where a compound document permits an HTML-namespace subdocument root."
    },
    "i": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "iframe": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "img": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Interactive",
        "Palpable",
        "Form-associated"
      ],
      "conditional": {
        "Interactive": "the usemap or controls attribute is present"
      },
      "syntax": "void",
      "parent_requirement": null
    },
    "input": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable",
        "Form-associated",
        "listed",
        "submittable",
        "resettable",
        "autocapitalize-and-autocorrect-inheriting",
        "labelable"
      ],
      "conditional": {
        "Interactive": "the type attribute is not in the Hidden state",
        "Palpable": "the type attribute is not in the Hidden state",
        "labelable": "the type attribute is not in the Hidden state"
      },
      "syntax": "void",
      "parent_requirement": null
    },
    "ins": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "kbd": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "label": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "classification_note": "The non-normative category index includes label under Form-associated; normative section 4.10.2 and the label definition do not. This taxonomy follows the normative text."
    },
    "legend": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "First child of fieldset; or first child of optgroup."
    },
    "li": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of ol, ul, or menu."
    },
    "link": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing"
      ],
      "conditional": {
        "Flow": "itemprop is present, or rel is present and contains only keywords defined as body-ok",
        "Phrasing": "itemprop is present, or rel is present and contains only keywords defined as body-ok"
      },
      "syntax": "void",
      "parent_requirement": null
    },
    "main": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {
        "Flow": "a hierarchically correct main element: ancestor elements are limited to html, body, div, form without an accessible name, and autonomous custom elements"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "map": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "mark": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "math": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "foreign",
      "parent_requirement": null
    },
    "menu": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {
        "Palpable": "the element's children include at least one li element"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "meta": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing"
      ],
      "conditional": {
        "Flow": "the itemprop attribute is present",
        "Phrasing": "the itemprop attribute is present"
      },
      "syntax": "void",
      "parent_requirement": null
    },
    "meter": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable",
        "labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "nav": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "noscript": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "object": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable",
        "Form-associated",
        "listed"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "classification_note": "The non-normative element index suggests conditional Interactive membership; the normative Interactive list and object definition omit it. Interactive is therefore not assigned."
    },
    "ol": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {
        "Palpable": "the element's children include at least one li element"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "optgroup": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Descendant of select; immediate parent must permit optgroup under the select content model (including permitted div wrappers)."
    },
    "option": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Descendant of select, datalist, or optgroup; immediate parent must permit option under the applicable content model (including permitted div wrappers)."
    },
    "output": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable",
        "Form-associated",
        "listed",
        "resettable",
        "autocapitalize-and-autocorrect-inheriting",
        "labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "p": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "picture": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "pre": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "progress": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable",
        "labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "q": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "rp": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of ruby, delimiting ruby annotation fallback parentheses."
    },
    "rt": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of ruby."
    },
    "ruby": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "s": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "samp": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "script": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing",
        "Script-supporting"
      ],
      "conditional": {},
      "syntax": "raw text",
      "parent_requirement": null
    },
    "search": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "section": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "select": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable",
        "Form-associated",
        "listed",
        "submittable",
        "resettable",
        "autocapitalize-and-autocorrect-inheriting",
        "labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "selectedcontent": {
      "categories": [
        "Phrasing"
      ],
      "conditional": {
        "Phrasing": "descendant of a button that is a child of select"
      },
      "syntax": "normal",
      "parent_requirement": "Descendant of a button that is a child of select.",
      "classification_note": "The normative Phrasing list makes membership conditional on being in a button in a select; its element definition says Phrasing without repeating the condition. The explicit category-list condition is retained."
    },
    "slot": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "small": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "source": {
      "categories": [],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": "Child of picture before img; or child of audio/video before flow content or track, when the media element has no src attribute."
    },
    "span": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "strong": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "style": {
      "categories": [
        "Metadata",
        "Flow"
      ],
      "conditional": {},
      "syntax": "raw text",
      "parent_requirement": null
    },
    "sub": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "summary": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "First child of details."
    },
    "sup": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "svg": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "foreign",
      "parent_requirement": null
    },
    "table": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "tbody": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of table; placement must satisfy the table content model."
    },
    "td": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of tr."
    },
    "template": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing",
        "Script-supporting"
      ],
      "conditional": {},
      "syntax": "template",
      "parent_requirement": null
    },
    "textarea": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable",
        "Form-associated",
        "listed",
        "submittable",
        "resettable",
        "autocapitalize-and-autocorrect-inheriting",
        "labelable"
      ],
      "conditional": {},
      "syntax": "escapable raw text",
      "parent_requirement": null
    },
    "tfoot": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of table; placement must satisfy the table content model."
    },
    "th": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of tr.",
      "classification_note": "The non-normative element index suggests conditional Interactive membership; its normative element definition says Categories: None. It is recorded in Context-restricted."
    },
    "thead": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of table; placement must satisfy the table content model."
    },
    "time": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "title": {
      "categories": [
        "Metadata"
      ],
      "conditional": {},
      "syntax": "escapable raw text",
      "parent_requirement": "Child of head containing no other title."
    },
    "tr": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": "Child of thead, tbody, or tfoot; or child of table with no tbody children, in the position allowed by its content model."
    },
    "track": {
      "categories": [],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": "Child of audio or video."
    },
    "u": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "ul": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {
        "Palpable": "the element's children include at least one li element"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "var": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null
    },
    "video": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Interactive",
        "Palpable"
      ],
      "conditional": {
        "Interactive": "the controls attribute is present"
      },
      "syntax": "normal",
      "parent_requirement": null
    },
    "wbr": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null
    }
  },
  "reverse_index": {
    "Metadata": [
      "base",
      "link",
      "meta",
      "noscript",
      "script",
      "style",
      "template",
      "title"
    ],
    "Flow": [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "blockquote",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "em",
      "embed",
      "fieldset",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "link",
      "main",
      "map",
      "mark",
      "math",
      "menu",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      "script",
      "search",
      "section",
      "select",
      "slot",
      "small",
      "span",
      "strong",
      "style",
      "sub",
      "sup",
      "svg",
      "table",
      "template",
      "textarea",
      "time",
      "u",
      "ul",
      "var",
      "video",
      "wbr"
    ],
    "Sectioning": [
      "article",
      "aside",
      "nav",
      "section"
    ],
    "Heading": [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hgroup"
    ],
    "Phrasing": [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "link",
      "map",
      "mark",
      "math",
      "meta",
      "meter",
      "noscript",
      "object",
      "output",
      "picture",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      "script",
      "select",
      "selectedcontent",
      "slot",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr"
    ],
    "Embedded": [
      "audio",
      "canvas",
      "embed",
      "iframe",
      "img",
      "math",
      "object",
      "picture",
      "svg",
      "video"
    ],
    "Interactive": [
      "a",
      "audio",
      "button",
      "details",
      "embed",
      "iframe",
      "img",
      "input",
      "label",
      "select",
      "textarea",
      "video"
    ],
    "Palpable": [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "blockquote",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "em",
      "embed",
      "fieldset",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "main",
      "map",
      "mark",
      "math",
      "menu",
      "meter",
      "nav",
      "object",
      "ol",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      "search",
      "section",
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "table",
      "textarea",
      "time",
      "u",
      "ul",
      "var",
      "video"
    ],
    "Script-supporting": [
      "script",
      "template"
    ],
    "Form-associated": [
      "button",
      "fieldset",
      "img",
      "input",
      "object",
      "output",
      "select",
      "textarea"
    ],
    "listed": [
      "button",
      "fieldset",
      "input",
      "object",
      "output",
      "select",
      "textarea"
    ],
    "submittable": [
      "button",
      "input",
      "select",
      "textarea"
    ],
    "resettable": [
      "input",
      "output",
      "select",
      "textarea"
    ],
    "autocapitalize-and-autocorrect-inheriting": [
      "button",
      "fieldset",
      "input",
      "output",
      "select",
      "textarea"
    ],
    "labelable": [
      "button",
      "input",
      "meter",
      "output",
      "progress",
      "select",
      "textarea"
    ],
    "Context-restricted": [
      "body",
      "caption",
      "col",
      "colgroup",
      "dd",
      "dt",
      "figcaption",
      "head",
      "html",
      "legend",
      "li",
      "optgroup",
      "option",
      "rp",
      "rt",
      "source",
      "summary",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr",
      "track"
    ]
  },
  "summary": [
    {
      "category": "Metadata",
      "element_count": 8,
      "definition": "Configures presentation, behavior, document relationships, or other out-of-band information.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#metadata-content"
    },
    {
      "category": "Flow",
      "element_count": 88,
      "definition": "Content ordinarily used in document and application bodies.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#flow-content"
    },
    {
      "category": "Sectioning",
      "element_count": 4,
      "definition": "Defines the scope of header and footer elements.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#sectioning-content"
    },
    {
      "category": "Heading",
      "element_count": 7,
      "definition": "Defines a section heading.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#heading-content"
    },
    {
      "category": "Phrasing",
      "element_count": 57,
      "definition": "Text and elements marking up text within paragraphs.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#phrasing-content"
    },
    {
      "category": "Embedded",
      "element_count": 10,
      "definition": "Imports resources or inserts content from another vocabulary.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2"
    },
    {
      "category": "Interactive",
      "element_count": 12,
      "definition": "Content specifically intended for user interaction.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#interactive-content"
    },
    {
      "category": "Palpable",
      "element_count": 75,
      "definition": "Provides meaningful non-empty text, media, or user-interactable content.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#palpable-content"
    },
    {
      "category": "Script-supporting",
      "element_count": 2,
      "definition": "Supports scripts without representing rendered content itself.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements"
    },
    {
      "category": "Form-associated",
      "element_count": 8,
      "definition": "Elements that can have a form owner.",
      "spec_section": "https://html.spec.whatwg.org/multipage/forms.html#form-associated-element"
    },
    {
      "category": "listed",
      "element_count": 7,
      "definition": "Participates in the form.elements and fieldset.elements APIs.",
      "spec_section": "https://html.spec.whatwg.org/multipage/forms.html#category-listed"
    },
    {
      "category": "submittable",
      "element_count": 4,
      "definition": "Can contribute to the entry list constructed during form submission.",
      "spec_section": "https://html.spec.whatwg.org/multipage/forms.html#category-submit"
    },
    {
      "category": "resettable",
      "element_count": 4,
      "definition": "Can be affected by resetting a form.",
      "spec_section": "https://html.spec.whatwg.org/multipage/forms.html#category-reset"
    },
    {
      "category": "autocapitalize-and-autocorrect-inheriting",
      "element_count": 6,
      "definition": "Inherits autocapitalize and autocorrect from its form owner.",
      "spec_section": "https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize"
    },
    {
      "category": "labelable",
      "element_count": 7,
      "definition": "Can be associated with a label element.",
      "spec_section": "https://html.spec.whatwg.org/multipage/forms.html#category-label"
    },
    {
      "category": "Context-restricted",
      "element_count": 24,
      "definition": "Requested reporting bucket for elements with no membership in the requested categories; not a WHATWG content category.",
      "spec_section": "https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories"
    }
  ],
  "dom_node_types": [
    {
      "interface": "Document",
      "nodeType": 9,
      "note": "Document node."
    },
    {
      "interface": "DocumentType",
      "nodeType": 10,
      "note": "Document type declaration node."
    },
    {
      "interface": "Element",
      "nodeType": 1,
      "note": "Element node, including HTML, SVG, and MathML elements."
    },
    {
      "interface": "Attr",
      "nodeType": 2,
      "note": "Attribute node; associated with an element, not a child in the node tree."
    },
    {
      "interface": "Text",
      "nodeType": 3,
      "note": "Character data node."
    },
    {
      "interface": "Comment",
      "nodeType": 8,
      "note": "Comment node."
    },
    {
      "interface": "DocumentFragment",
      "nodeType": 11,
      "note": "Fragment node; ShadowRoot is a specialized DocumentFragment, not a separate nodeType."
    },
    {
      "interface": "CDATASection",
      "nodeType": 4,
      "note": "XML-only CDATA node, a subtype of Text. In text/html, CDATA syntax is permitted inside foreign content but parses into Text nodes, not CDATASection nodes."
    },
    {
      "interface": "ProcessingInstruction",
      "nodeType": 7,
      "note": "XML serialization node; text/html does not serialize processing-instruction nodes. DOM APIs can create ProcessingInstruction objects even for an HTML document, so XML-only describes syntax use, not all possible API-created objects."
    }
  ],
  "custom_element_families": {
    "autonomous_custom_elements": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "syntax": "normal",
      "spec_section": "https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements"
    },
    "form_associated_custom_elements": {
      "additional_categories": [
        "Form-associated",
        "listed",
        "submittable",
        "resettable",
        "labelable"
      ],
      "note": "Does not automatically gain autocapitalize-and-autocorrect-inheriting membership.",
      "spec_section": "https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example"
    },
    "customized_built_in_elements": {
      "note": "Use the classification of their built-in local name; is does not introduce a new element name."
    }
  },
  "sources": {
    "element_inventory": "https://html.spec.whatwg.org/multipage/indices.html#elements-3",
    "syntax": "https://html.spec.whatwg.org/multipage/syntax.html#elements-2",
    "dom_node_types": "https://dom.spec.whatwg.org/#node",
    "category_definitions": {
      "Metadata": "https://html.spec.whatwg.org/multipage/dom.html#metadata-content",
      "Flow": "https://html.spec.whatwg.org/multipage/dom.html#flow-content",
      "Sectioning": "https://html.spec.whatwg.org/multipage/dom.html#sectioning-content",
      "Heading": "https://html.spec.whatwg.org/multipage/dom.html#heading-content",
      "Phrasing": "https://html.spec.whatwg.org/multipage/dom.html#phrasing-content",
      "Embedded": "https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2",
      "Interactive": "https://html.spec.whatwg.org/multipage/dom.html#interactive-content",
      "Palpable": "https://html.spec.whatwg.org/multipage/dom.html#palpable-content",
      "Script-supporting": "https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements",
      "Form-associated": "https://html.spec.whatwg.org/multipage/forms.html#form-associated-element",
      "listed": "https://html.spec.whatwg.org/multipage/forms.html#category-listed",
      "submittable": "https://html.spec.whatwg.org/multipage/forms.html#category-submit",
      "resettable": "https://html.spec.whatwg.org/multipage/forms.html#category-reset",
      "autocapitalize-and-autocorrect-inheriting": "https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize",
      "labelable": "https://html.spec.whatwg.org/multipage/forms.html#category-label"
    },
    "element_definitions": {
      "a": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element",
      "abbr": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element",
      "address": "https://html.spec.whatwg.org/multipage/sections.html#the-address-element",
      "area": "https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element",
      "article": "https://html.spec.whatwg.org/multipage/sections.html#the-article-element",
      "aside": "https://html.spec.whatwg.org/multipage/sections.html#the-aside-element",
      "audio": "https://html.spec.whatwg.org/multipage/media.html#the-audio-element",
      "b": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element",
      "base": "https://html.spec.whatwg.org/multipage/semantics.html#the-base-element",
      "bdi": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element",
      "bdo": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element",
      "blockquote": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element",
      "body": "https://html.spec.whatwg.org/multipage/sections.html#the-body-element",
      "br": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element",
      "button": "https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element",
      "canvas": "https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element",
      "caption": "https://html.spec.whatwg.org/multipage/tables.html#the-caption-element",
      "cite": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element",
      "code": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element",
      "col": "https://html.spec.whatwg.org/multipage/tables.html#the-col-element",
      "colgroup": "https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element",
      "data": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element",
      "datalist": "https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element",
      "dd": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-dd-element",
      "del": "https://html.spec.whatwg.org/multipage/edits.html#the-del-element",
      "details": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element",
      "dfn": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element",
      "dialog": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element",
      "div": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element",
      "dl": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element",
      "dt": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-dt-element",
      "em": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element",
      "embed": "https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element",
      "fieldset": "https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element",
      "figcaption": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element",
      "figure": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element",
      "footer": "https://html.spec.whatwg.org/multipage/sections.html#the-footer-element",
      "form": "https://html.spec.whatwg.org/multipage/forms.html#the-form-element",
      "h1": "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
      "h2": "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
      "h3": "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
      "h4": "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
      "h5": "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
      "h6": "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
      "head": "https://html.spec.whatwg.org/multipage/semantics.html#the-head-element",
      "header": "https://html.spec.whatwg.org/multipage/sections.html#the-header-element",
      "hgroup": "https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element",
      "hr": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element",
      "html": "https://html.spec.whatwg.org/multipage/semantics.html#the-html-element",
      "i": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element",
      "iframe": "https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element",
      "img": "https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element",
      "input": "https://html.spec.whatwg.org/multipage/input.html#the-input-element",
      "ins": "https://html.spec.whatwg.org/multipage/edits.html#the-ins-element",
      "kbd": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element",
      "label": "https://html.spec.whatwg.org/multipage/forms.html#the-label-element",
      "legend": "https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element",
      "li": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element",
      "link": "https://html.spec.whatwg.org/multipage/semantics.html#the-link-element",
      "main": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element",
      "map": "https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element",
      "mark": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element",
      "math": "https://html.spec.whatwg.org/multipage/https://w3c.github.io/mathml-core/#the-top-level-math-element",
      "menu": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element",
      "meta": "https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element",
      "meter": "https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element",
      "nav": "https://html.spec.whatwg.org/multipage/sections.html#the-nav-element",
      "noscript": "https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element",
      "object": "https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element",
      "ol": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element",
      "optgroup": "https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element",
      "option": "https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element",
      "output": "https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element",
      "p": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element",
      "picture": "https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element",
      "pre": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element",
      "progress": "https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element",
      "q": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element",
      "rp": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element",
      "rt": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element",
      "ruby": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element",
      "s": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element",
      "samp": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element",
      "script": "https://html.spec.whatwg.org/multipage/scripting.html#the-script-element",
      "search": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element",
      "section": "https://html.spec.whatwg.org/multipage/sections.html#the-section-element",
      "select": "https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element",
      "selectedcontent": "https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element",
      "slot": "https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element",
      "small": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element",
      "source": "https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element",
      "span": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element",
      "strong": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element",
      "style": "https://html.spec.whatwg.org/multipage/semantics.html#the-style-element",
      "sub": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements",
      "summary": "https://html.spec.whatwg.org/multipage/interactive-elements.html#the-summary-element",
      "sup": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements",
      "svg": "https://html.spec.whatwg.org/multipage/https://w3c.github.io/svgwg/svg2-draft/struct.html#elementdef-svg",
      "table": "https://html.spec.whatwg.org/multipage/tables.html#the-table-element",
      "tbody": "https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element",
      "td": "https://html.spec.whatwg.org/multipage/tables.html#the-td-element",
      "template": "https://html.spec.whatwg.org/multipage/scripting.html#the-template-element",
      "textarea": "https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element",
      "tfoot": "https://html.spec.whatwg.org/multipage/tables.html#the-tfoot-element",
      "th": "https://html.spec.whatwg.org/multipage/tables.html#the-th-element",
      "thead": "https://html.spec.whatwg.org/multipage/tables.html#the-thead-element",
      "time": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element",
      "title": "https://html.spec.whatwg.org/multipage/semantics.html#the-title-element",
      "tr": "https://html.spec.whatwg.org/multipage/tables.html#the-tr-element",
      "track": "https://html.spec.whatwg.org/multipage/media.html#the-track-element",
      "u": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element",
      "ul": "https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element",
      "var": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-var-element",
      "video": "https://html.spec.whatwg.org/multipage/media.html#the-video-element",
      "wbr": "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element"
    }
  }
}
---


Two specification details are preserved: labelable is not strictly a subset of Form-associated, and current img Interactive membership applies when usemap or controls is present. The file flags discrepancies between normative definitions and the non-normative index, including label, object, th, hgroup, and selectedcontent. html.spec.whatwg.org
Custom-element families are documented separately because author-defined element names cannot be exhaustively enumerated.

Includes all 115 named elements—113 HTML elements plus svg and math—with:
- elements: object keyed by element name, using your requested fields.
- reverse_index: category → element list.
- summary: counts, definitions, and spec section URLs.
- dom_node_types: the separate DOM axis, including XML syntax notes.
Counts include conditional members once; their conditions appear in each element’s conditional object.
Category	Element count	Definition and specification
Metadata	8	Document configuration and out-of-band information.
Flow	88	Content ordinarily used in document bodies.
Sectioning	4	Defines the scope of headers and footers.
Heading	7	Defines section headings.
Phrasing	57	Text and markup within paragraphs.
Embedded	10	Imported resources or content from another vocabulary.
Interactive	12	Content intended for user interaction.
Palpable	75	Meaningful text, media, or interactive content.
Script-supporting	2	Elements supporting scripts without rendered content.
Form-associated	8	Elements that can have a form owner.
listed	7	Participate in form and fieldset collections.
submittable	4	Can contribute to form submission entries.
resettable	4	Can be affected by form reset.
autocapitalize-and-autocorrect-inheriting	6	Inherit these attributes from their form owner.
labelable	7	Can be associated with a label.
Context-restricted	24	Your requested reporting bucket for elements with no category membership; required contexts are recorded.


DOM Node Types
The WHATWG DOM Standard defines the following fundamental node types that make up a document tree:
Document: The root node of the DOM tree.
DocumentType: Represents the <!DOCTYPE> declaration.
Element: Represents an element (e.g., <body>, <a>, <svg>).
Attr: Represents an attribute on an Element (historically a node, now largely managed via Element attributes).
Text: Represents textual content inside an Element or Attr.
Comment: Represents a markup comment <!-- ... -->.
DocumentFragment: A lightweight, detached document object used as a temporary container (e.g., inside <template>).
CDATASection: Represents a CDATA section (XML documents only).
ProcessingInstruction: Represents a processing instruction (XML documents only).
Axis 1 & 2: Taxonomy of HTML Primitives (JSON)

{
  "a": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": { "Interactive": "if it has an href attribute" }, "syntax": "normal", "parent_requirement": null },
  "abbr": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "address": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "area": { "categories": ["Flow", "Phrasing"], "conditional": {}, "syntax": "void", "parent_requirement": "map" },
  "article": { "categories": ["Flow", "Sectioning", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "aside": { "categories": ["Flow", "Sectioning", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "audio": { "categories": ["Flow", "Phrasing", "Embedded"], "conditional": { "Interactive": "if it has a controls attribute" }, "syntax": "normal", "parent_requirement": null },
  "b": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "base": { "categories": ["Metadata"], "conditional": {}, "syntax": "void", "parent_requirement": "head" },
  "bdi": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "bdo": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "blockquote": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "body": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "html" },
  "br": { "categories": ["Flow", "Phrasing"], "conditional": {}, "syntax": "void", "parent_requirement": null },
  "button": { "categories": ["Flow", "Phrasing", "Interactive", "Listed", "Submittable", "Autocapitalize-inheriting", "Labelable", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "canvas": { "categories": ["Flow", "Phrasing", "Embedded", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "caption": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "table" },
  "cite": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "code": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "col": { "categories": [], "conditional": {}, "syntax": "void", "parent_requirement": "colgroup" },
  "colgroup": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "table" },
  "data": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "datalist": { "categories": ["Flow", "Phrasing"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "dd": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "dl" },
  "del": { "categories": ["Flow", "Phrasing"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "details": { "categories": ["Flow", "Interactive", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "dfn": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "dialog": { "categories": ["Flow"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "div": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "dl": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "dt": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "dl" },
  "em": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "embed": { "categories": ["Flow", "Phrasing", "Embedded", "Interactive", "Palpable"], "conditional": {}, "syntax": "void", "parent_requirement": null },
  "fieldset": { "categories": ["Flow", "Listed", "Autocapitalize-inheriting", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "figcaption": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "figure" },
  "figure": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "footer": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "form": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "h1": { "categories": ["Flow", "Heading", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "h2": { "categories": ["Flow", "Heading", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "h3": { "categories": ["Flow", "Heading", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "h4": { "categories": ["Flow", "Heading", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "h5": { "categories": ["Flow", "Heading", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "h6": { "categories": ["Flow", "Heading", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "head": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "html" },
  "header": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "hgroup": { "categories": ["Flow", "Heading", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "hr": { "categories": ["Flow"], "conditional": {}, "syntax": "void", "parent_requirement": null },
  "html": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "Document" },
  "i": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "iframe": { "categories": ["Flow", "Phrasing", "Embedded", "Interactive", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "img": { "categories": ["Flow", "Phrasing", "Embedded", "Palpable"], "conditional": { "Interactive": "if it has a usemap attribute" }, "syntax": "void", "parent_requirement": null },
  "input": { "categories": ["Flow", "Phrasing", "Listed", "Submittable", "Resettable", "Autocapitalize-inheriting"], "conditional": { "Interactive": "if type is not hidden", "Labelable": "if type is not hidden", "Palpable": "if type is not hidden" }, "syntax": "void", "parent_requirement": null },
  "ins": { "categories": ["Flow", "Phrasing"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "kbd": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "label": { "categories": ["Flow", "Phrasing", "Interactive", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "legend": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "fieldset" },
  "li": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "ul, ol, menu" },
  "link": { "categories": ["Metadata"], "conditional": { "Flow": "if itemprop is present", "Phrasing": "if itemprop is present" }, "syntax": "void", "parent_requirement": null },
  "main": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "map": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "mark": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "math": { "categories": ["Flow", "Phrasing", "Embedded", "Palpable"], "conditional": {}, "syntax": "foreign", "parent_requirement": null },
  "menu": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "meta": { "categories": ["Metadata"], "conditional": { "Flow": "if itemprop is present", "Phrasing": "if itemprop is present" }, "syntax": "void", "parent_requirement": null },
  "meter": { "categories": ["Flow", "Phrasing", "Labelable", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "nav": { "categories": ["Flow", "Sectioning", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "noscript": { "categories": ["Metadata", "Flow", "Phrasing"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "object": { "categories": ["Flow", "Phrasing", "Embedded", "Listed", "Submittable", "Palpable"], "conditional": { "Interactive": "if it has a usemap attribute" }, "syntax": "normal", "parent_requirement": null },
  "ol": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "optgroup": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "select" },
  "option": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "select, optgroup, datalist" },
  "output": { "categories": ["Flow", "Phrasing", "Listed", "Resettable", "Autocapitalize-inheriting", "Labelable", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "p": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "picture": { "categories": ["Flow", "Phrasing", "Embedded"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "pre": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "progress": { "categories": ["Flow", "Phrasing", "Labelable", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "q": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "rp": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "ruby" },
  "rt": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "ruby" },
  "ruby": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "s": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "samp": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "script": { "categories": ["Metadata", "Flow", "Phrasing", "Script-supporting"], "conditional": {}, "syntax": "raw text", "parent_requirement": null },
  "search": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "section": { "categories": ["Flow", "Sectioning", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "select": { "categories": ["Flow", "Phrasing", "Interactive", "Listed", "Submittable", "Resettable", "Autocapitalize-inheriting", "Labelable", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "slot": { "categories": ["Flow", "Phrasing"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "small": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "source": { "categories": [], "conditional": {}, "syntax": "void", "parent_requirement": "picture, audio, video" },
  "span": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "strong": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "style": { "categories": ["Metadata"], "conditional": { "Flow": "if scoped is present" }, "syntax": "raw text", "parent_requirement": null },
  "sub": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "summary": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "details" },
  "sup": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "svg": { "categories": ["Flow", "Phrasing", "Embedded", "Palpable"], "conditional": {}, "syntax": "foreign", "parent_requirement": null },
  "table": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "tbody": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "table" },
  "td": { "categories": ["Sectioning root"], "conditional": {}, "syntax": "normal", "parent_requirement": "tr" },
  "template": { "categories": ["Metadata", "Flow", "Phrasing", "Script-supporting"], "conditional": {}, "syntax": "template", "parent_requirement": null },
  "textarea": { "categories": ["Flow", "Phrasing", "Interactive", "Listed", "Submittable", "Resettable", "Autocapitalize-inheriting", "Labelable", "Palpable"], "conditional": {}, "syntax": "escapable raw text", "parent_requirement": null },
  "tfoot": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "table" },
  "th": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "tr" },
  "thead": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "table" },
  "time": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "title": { "categories": ["Metadata"], "conditional": {}, "syntax": "escapable raw text", "parent_requirement": "head" },
  "tr": { "categories": [], "conditional": {}, "syntax": "normal", "parent_requirement": "table, thead, tbody, tfoot" },
  "track": { "categories": [], "conditional": {}, "syntax": "void", "parent_requirement": "audio, video" },
  "u": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "ul": { "categories": ["Flow", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "var": { "categories": ["Flow", "Phrasing", "Palpable"], "conditional": {}, "syntax": "normal", "parent_requirement": null },
  "video": { "categories": ["Flow", "Phrasing", "Embedded"], "conditional": { "Interactive": "if it has a controls attribute" }, "syntax": "normal", "parent_requirement": null },
  "wbr": { "categories": ["Flow", "Phrasing"], "conditional": {}, "syntax": "void", "parent_requirement": null }
}

Reverse Index (Category → Elements)
Metadata: base, link, meta, noscript, script, style, template, title
Flow: a, abbr, address, area, article, aside, audio, b, bdi, bdo, blockquote, br, button, canvas, cite, code, data, datalist, del, details, dfn, dialog, div, dl, em, embed, fieldset, figure, footer, form, h1-h6, header, hgroup, hr, i, iframe, img, input, ins, kbd, label, main, map, mark, math, menu, meter, nav, noscript, object, ol, output, p, picture, pre, progress, q, ruby, s, samp, script, search, section, select, slot, small, span, strong, sub, sup, svg, table, template, textarea, time, u, ul, var, video, wbr (Note: link, meta, style conditionally).
Sectioning: article, aside, nav, section
Heading: h1, h2, h3, h4, h5, h6, hgroup
Phrasing: a, abbr, area, audio, b, bdi, bdo, br, button, canvas, cite, code, data, datalist, del, dfn, em, embed, i, iframe, img, input, ins, kbd, label, map, mark, math, meter, noscript, object, output, picture, progress, q, ruby, s, samp, script, select, slot, small, span, strong, sub, sup, svg, template, textarea, time, u, var, video, wbr (Note: link, meta conditionally).
Embedded: audio, canvas, embed, iframe, img, math, object, picture, svg, video
Interactive: button, details, embed, iframe, label, select, textarea (Note: a, audio, img, input, object, video conditionally).
Palpable: a, abbr, address, article, aside, b, bdi, bdo, blockquote, button, canvas, cite, code, data, details, dfn, div, dl, em, embed, fieldset, figure, footer, form, h1-h6, header, hgroup, i, iframe, img, kbd, label, main, map, mark, math, menu, meter, nav, object, ol, output, p, pre, progress, q, ruby, s, samp, search, section, select, small, span, strong, sub, sup, svg, table, textarea, time, u, ul, var (Note: input conditionally).
Script-supporting: script, template
Form-associated:
Listed: button, fieldset, input, object, output, select, textarea
Submittable: button, input, object, select, textarea
Resettable: input, output, select, textarea
Autocapitalize-inheriting: button, fieldset, input, output, select, textarea
Labelable: button, meter, output, progress, select, textarea (Note: input conditionally).
Context-restricted (No main category): body, caption, col, colgroup, dd, dt, figcaption, head, html, legend, li, optgroup, option, rp, rt, source, summary, tbody, td, tfoot, th, thead, tr, track

Category	Elements	Definition	Spec Citation
Metadata	8	Content that sets up the presentation or behavior of the rest of the content, or sets up the relationship with other documents.	Section 3.2.5.2.1
Flow	99	Most elements that are used in the body of documents and applications.	Section 3.2.5.2.2
Sectioning	4	Content that defines the scope of headings and footers.	Section 3.2.5.2.3
Heading	7	Defines the header of a section (whether explicitly marked up using sectioning content or implied).	Section 3.2.5.2.4
Phrasing	56	The text of the document, as well as elements that mark up that text at the intra-paragraph level.	Section 3.2.5.2.5
Embedded	10	Content that imports another resource into the document, or content from another vocabulary inserted into the document.	Section 3.2.5.2.6
Interactive	13	Content that is specifically intended for user interaction.	Section 3.2.5.2.7
Palpable	70	Content that makes an element non-empty by providing either visible content or functionality.	Section 3.2.5.2.8
Script-supporting	2	Elements that do not represent anything themselves, but are used to support scripts.	Section 3.2.5.2.9
Form-associated	8	Elements that have a form owner and are exposed to various parts of the form submission and validation APIs.	Section 4.10.2.1

{
  "meta": {
    "source": "WHATWG HTML Living Standard, source file from github.com/whatwg/html (main), spec dated 22 October 2026",
    "method": "Categories taken from each element's normative 'Categories' block; parents, descriptions and interfaces from the non-normative element index; disagreements between them listed under 'flags'.",
    "element_count": 115,
    "category_names": [
      "Metadata",
      "Flow",
      "Sectioning",
      "Heading",
      "Phrasing",
      "Embedded",
      "Interactive",
      "Palpable",
      "Script-supporting",
      "Form-associated",
      "Form-associated/listed",
      "Form-associated/submittable",
      "Form-associated/resettable",
      "Form-associated/autocapitalize-and-autocorrect-inheriting",
      "Form-associated/labelable",
      "Context-restricted"
    ]
  },
  "elements": {
    "a": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {
        "Interactive": "only if the href attribute is present"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Hyperlink",
      "interface": "HTMLAnchorElement",
      "notes": "Transparent content model: counts as phrasing only when its contents are phrasing."
    },
    "abbr": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Abbreviation",
      "interface": "HTMLElement"
    },
    "address": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Contact information for a page or article element",
      "interface": "HTMLElement"
    },
    "area": {
      "categories": [],
      "conditional": {
        "Flow": "only if it is a descendant of a map element",
        "Phrasing": "only if it is a descendant of a map element"
      },
      "syntax": "void",
      "parent_requirement": null,
      "description": "Hyperlink or dead area on an image map",
      "interface": "HTMLAreaElement"
    },
    "article": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Self-contained syndicatable or reusable composition",
      "interface": "HTMLElement"
    },
    "aside": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Sidebar for tangentially related content",
      "interface": "HTMLElement"
    },
    "audio": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded"
      ],
      "conditional": {
        "Interactive": "only if the controls attribute is present",
        "Palpable": "only if the controls attribute is present"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Audio player",
      "interface": "HTMLAudioElement"
    },
    "b": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Keywords",
      "interface": "HTMLElement"
    },
    "base": {
      "categories": [
        "Metadata"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null,
      "description": "Base URL and default target navigable for hyperlinks and forms",
      "interface": "HTMLBaseElement"
    },
    "bdi": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Text directionality isolation",
      "interface": "HTMLElement"
    },
    "bdo": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Text directionality formatting",
      "interface": "HTMLElement"
    },
    "blockquote": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "A section quoted from another source",
      "interface": "HTMLQuoteElement"
    },
    "body": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "html"
      ],
      "description": "Document body",
      "interface": "HTMLBodyElement"
    },
    "br": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null,
      "description": "Line break, e.g. in poem or postal address",
      "interface": "HTMLBRElement"
    },
    "button": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable",
        "Form-associated",
        "Form-associated/listed",
        "Form-associated/submittable",
        "Form-associated/autocapitalize-and-autocorrect-inheriting",
        "Form-associated/labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Button control",
      "interface": "HTMLButtonElement"
    },
    "canvas": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Scriptable bitmap canvas",
      "interface": "HTMLCanvasElement"
    },
    "caption": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "table"
      ],
      "description": "Table caption",
      "interface": "HTMLTableCaptionElement"
    },
    "cite": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Title of a work",
      "interface": "HTMLElement"
    },
    "code": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Computer code",
      "interface": "HTMLElement"
    },
    "col": {
      "categories": [],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": [
        "colgroup"
      ],
      "description": "Table column",
      "interface": "HTMLTableColElement"
    },
    "colgroup": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "table"
      ],
      "description": "Group of columns in a table",
      "interface": "HTMLTableColElement"
    },
    "data": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Machine-readable equivalent",
      "interface": "HTMLDataElement"
    },
    "datalist": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Container for options for combo box control",
      "interface": "HTMLDataListElement"
    },
    "dd": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "dl",
        "div*"
      ],
      "description": "Content for corresponding dt element(s)",
      "interface": "HTMLElement"
    },
    "del": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "A removal from the document",
      "interface": "HTMLModElement",
      "notes": "Transparent content model: counts as phrasing only when its contents are phrasing."
    },
    "details": {
      "categories": [
        "Flow",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Disclosure control for hiding details",
      "interface": "HTMLDetailsElement"
    },
    "dfn": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Defining instance",
      "interface": "HTMLElement"
    },
    "dialog": {
      "categories": [
        "Flow"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Dialog box or window",
      "interface": "HTMLDialogElement"
    },
    "div": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Generic flow container, or container for name-value groups in dl elements",
      "interface": "HTMLDivElement"
    },
    "dl": {
      "categories": [
        "Flow"
      ],
      "conditional": {
        "Palpable": "only if it has at least one name-value group"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Association list consisting of zero or more name-value groups",
      "interface": "HTMLDListElement"
    },
    "dt": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "dl",
        "div*"
      ],
      "description": "Legend for corresponding dd element(s)",
      "interface": "HTMLElement"
    },
    "em": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Stress emphasis",
      "interface": "HTMLElement"
    },
    "embed": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null,
      "description": "Plugin",
      "interface": "HTMLEmbedElement"
    },
    "fieldset": {
      "categories": [
        "Flow",
        "Palpable",
        "Form-associated",
        "Form-associated/listed",
        "Form-associated/autocapitalize-and-autocorrect-inheriting"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Group of form controls",
      "interface": "HTMLFieldSetElement"
    },
    "figcaption": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "figure"
      ],
      "description": "Caption for figure",
      "interface": "HTMLElement"
    },
    "figure": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Figure with optional caption",
      "interface": "HTMLElement"
    },
    "footer": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Footer for a page or section",
      "interface": "HTMLElement"
    },
    "form": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "User-submittable form",
      "interface": "HTMLFormElement"
    },
    "h1": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Heading",
      "interface": "HTMLHeadingElement"
    },
    "h2": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Heading",
      "interface": "HTMLHeadingElement"
    },
    "h3": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Heading",
      "interface": "HTMLHeadingElement"
    },
    "h4": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Heading",
      "interface": "HTMLHeadingElement"
    },
    "h5": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Heading",
      "interface": "HTMLHeadingElement"
    },
    "h6": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Heading",
      "interface": "HTMLHeadingElement"
    },
    "head": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "html"
      ],
      "description": "Container for document metadata",
      "interface": "HTMLHeadElement"
    },
    "header": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Introductory or navigational aids for a page or section",
      "interface": "HTMLElement"
    },
    "hgroup": {
      "categories": [
        "Flow",
        "Heading",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Heading container",
      "interface": "HTMLElement"
    },
    "hr": {
      "categories": [
        "Flow"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null,
      "description": "Thematic break",
      "interface": "HTMLHRElement"
    },
    "html": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "none (document root)"
      ],
      "description": "Root element",
      "interface": "HTMLHtmlElement"
    },
    "i": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Alternate voice",
      "interface": "HTMLElement"
    },
    "iframe": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Child navigable",
      "interface": "HTMLIFrameElement"
    },
    "img": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable",
        "Form-associated"
      ],
      "conditional": {
        "Interactive": "only if the usemap or controls attribute is present"
      },
      "syntax": "void",
      "parent_requirement": null,
      "description": "Image",
      "interface": "HTMLImageElement"
    },
    "input": {
      "categories": [
        "Flow",
        "Phrasing",
        "Form-associated",
        "Form-associated/listed",
        "Form-associated/submittable",
        "Form-associated/resettable",
        "Form-associated/autocapitalize-and-autocorrect-inheriting"
      ],
      "conditional": {
        "Interactive": "only if type is not hidden (type=hidden excludes it)",
        "Palpable": "only if type is not hidden (type=hidden excludes it)",
        "Form-associated/labelable": "only if type is not hidden (type=hidden excludes it)"
      },
      "syntax": "void",
      "parent_requirement": null,
      "description": "Form control",
      "interface": "HTMLInputElement"
    },
    "ins": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "An addition to the document",
      "interface": "HTMLModElement",
      "notes": "Transparent content model: counts as phrasing only when its contents are phrasing."
    },
    "kbd": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "User input",
      "interface": "HTMLElement"
    },
    "label": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Caption for a form control",
      "interface": "HTMLLabelElement"
    },
    "legend": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "fieldset",
        "optgroup"
      ],
      "description": "Caption for fieldset",
      "interface": "HTMLLegendElement"
    },
    "li": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "ol",
        "ul",
        "menu*"
      ],
      "description": "List item",
      "interface": "HTMLLIElement"
    },
    "link": {
      "categories": [
        "Metadata"
      ],
      "conditional": {
        "Flow": "only if the link is allowed in the body (body-ok rel values)",
        "Phrasing": "only if the link is allowed in the body (body-ok rel values)"
      },
      "syntax": "void",
      "parent_requirement": null,
      "description": "Link metadata",
      "interface": "HTMLLinkElement"
    },
    "main": {
      "categories": [
        "Palpable"
      ],
      "conditional": {
        "Flow": "only if it is a hierarchically correct main element"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Container for the dominant contents of the document",
      "interface": "HTMLElement"
    },
    "map": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Image map",
      "interface": "HTMLMapElement",
      "notes": "Transparent content model: counts as phrasing only when its contents are phrasing."
    },
    "mark": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Highlight",
      "interface": "HTMLElement"
    },
    "math": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "foreign",
      "parent_requirement": null,
      "description": "MathML root",
      "interface": "Element"
    },
    "menu": {
      "categories": [
        "Flow"
      ],
      "conditional": {
        "Palpable": "only if it has at least one li child"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Menu of commands",
      "interface": "HTMLMenuElement"
    },
    "meta": {
      "categories": [
        "Metadata"
      ],
      "conditional": {
        "Flow": "only if the itemprop attribute is present",
        "Phrasing": "only if the itemprop attribute is present"
      },
      "syntax": "void",
      "parent_requirement": null,
      "description": "Text metadata",
      "interface": "HTMLMetaElement"
    },
    "meter": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable",
        "Form-associated/labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Gauge",
      "interface": "HTMLMeterElement"
    },
    "nav": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Section with navigational links",
      "interface": "HTMLElement"
    },
    "noscript": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Fallback content for script",
      "interface": "HTMLElement"
    },
    "object": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable",
        "Form-associated",
        "Form-associated/listed"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Image, child navigable , or plugin",
      "interface": "HTMLObjectElement"
    },
    "ol": {
      "categories": [
        "Flow"
      ],
      "conditional": {
        "Palpable": "only if it has at least one li child"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Ordered list",
      "interface": "HTMLOListElement"
    },
    "optgroup": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "select",
        "div*"
      ],
      "description": "Group of options in a list box",
      "interface": "HTMLOptGroupElement"
    },
    "option": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "select",
        "datalist",
        "optgroup",
        "div*"
      ],
      "description": "Option in a list box or combo box control",
      "interface": "HTMLOptionElement"
    },
    "output": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable",
        "Form-associated",
        "Form-associated/listed",
        "Form-associated/resettable",
        "Form-associated/autocapitalize-and-autocorrect-inheriting",
        "Form-associated/labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Calculated output value",
      "interface": "HTMLOutputElement"
    },
    "p": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Paragraph",
      "interface": "HTMLParagraphElement"
    },
    "picture": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Image",
      "interface": "HTMLPictureElement"
    },
    "pre": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Block of preformatted text",
      "interface": "HTMLPreElement"
    },
    "progress": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable",
        "Form-associated/labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Progress bar",
      "interface": "HTMLProgressElement"
    },
    "q": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Quotation",
      "interface": "HTMLQuoteElement"
    },
    "rp": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "ruby"
      ],
      "description": "Parenthesis for ruby annotation text",
      "interface": "HTMLElement"
    },
    "rt": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "ruby"
      ],
      "description": "Ruby annotation text",
      "interface": "HTMLElement"
    },
    "ruby": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Ruby annotation(s)",
      "interface": "HTMLElement"
    },
    "s": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Inaccurate text",
      "interface": "HTMLElement"
    },
    "samp": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Computer output",
      "interface": "HTMLElement"
    },
    "script": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing",
        "Script-supporting"
      ],
      "conditional": {},
      "syntax": "raw text",
      "parent_requirement": null,
      "description": "Embedded script",
      "interface": "HTMLScriptElement"
    },
    "search": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Container for search controls",
      "interface": "HTMLElement"
    },
    "section": {
      "categories": [
        "Flow",
        "Sectioning",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Generic document or application section",
      "interface": "HTMLElement"
    },
    "select": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable",
        "Form-associated",
        "Form-associated/listed",
        "Form-associated/submittable",
        "Form-associated/resettable",
        "Form-associated/autocapitalize-and-autocorrect-inheriting",
        "Form-associated/labelable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "List box control",
      "interface": "HTMLSelectElement"
    },
    "selectedcontent": {
      "categories": [
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "button"
      ],
      "description": "Mirrors content from an option",
      "interface": "HTMLSelectedContentElement",
      "notes": "Only valid inside the button of a customizable select."
    },
    "slot": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Shadow tree slot",
      "interface": "HTMLSlotElement"
    },
    "small": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Side comment",
      "interface": "HTMLElement"
    },
    "source": {
      "categories": [],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": [
        "picture",
        "video",
        "audio"
      ],
      "description": "Image source for img or media source for video or audio",
      "interface": "HTMLSourceElement"
    },
    "span": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Generic phrasing container",
      "interface": "HTMLSpanElement"
    },
    "strong": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Importance",
      "interface": "HTMLElement"
    },
    "style": {
      "categories": [
        "Metadata",
        "Flow"
      ],
      "conditional": {},
      "syntax": "raw text",
      "parent_requirement": null,
      "description": "Embedded styling information",
      "interface": "HTMLStyleElement"
    },
    "sub": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Subscript",
      "interface": "HTMLElement"
    },
    "summary": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "details"
      ],
      "description": "Caption for details",
      "interface": "HTMLElement"
    },
    "sup": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Superscript",
      "interface": "HTMLElement"
    },
    "svg": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "foreign",
      "parent_requirement": null,
      "description": "SVG root",
      "interface": "SVGSVGElement"
    },
    "table": {
      "categories": [
        "Flow",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Table",
      "interface": "HTMLTableElement"
    },
    "tbody": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "table"
      ],
      "description": "Group of rows in a table",
      "interface": "HTMLTableSectionElement"
    },
    "td": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "tr"
      ],
      "description": "Table cell",
      "interface": "HTMLTableCellElement"
    },
    "template": {
      "categories": [
        "Metadata",
        "Flow",
        "Phrasing",
        "Script-supporting"
      ],
      "conditional": {},
      "syntax": "template",
      "parent_requirement": null,
      "description": "Template",
      "interface": "HTMLTemplateElement"
    },
    "textarea": {
      "categories": [
        "Flow",
        "Phrasing",
        "Interactive",
        "Palpable",
        "Form-associated",
        "Form-associated/listed",
        "Form-associated/submittable",
        "Form-associated/resettable",
        "Form-associated/autocapitalize-and-autocorrect-inheriting",
        "Form-associated/labelable"
      ],
      "conditional": {},
      "syntax": "escapable raw text",
      "parent_requirement": null,
      "description": "Multiline text controls",
      "interface": "HTMLTextAreaElement"
    },
    "tfoot": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "table"
      ],
      "description": "Group of footer rows in a table",
      "interface": "HTMLTableSectionElement"
    },
    "th": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "tr"
      ],
      "description": "Table header cell",
      "interface": "HTMLTableCellElement"
    },
    "thead": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "table"
      ],
      "description": "Group of heading rows in a table",
      "interface": "HTMLTableSectionElement"
    },
    "time": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Machine-readable equivalent of date- or time-related data",
      "interface": "HTMLTimeElement"
    },
    "title": {
      "categories": [
        "Metadata"
      ],
      "conditional": {},
      "syntax": "escapable raw text",
      "parent_requirement": null,
      "description": "Document title",
      "interface": "HTMLTitleElement"
    },
    "tr": {
      "categories": [],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": [
        "table",
        "thead",
        "tbody",
        "tfoot"
      ],
      "description": "Table row",
      "interface": "HTMLTableRowElement"
    },
    "track": {
      "categories": [],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": [
        "audio",
        "video"
      ],
      "description": "Timed text track",
      "interface": "HTMLTrackElement"
    },
    "u": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Unarticulated annotation",
      "interface": "HTMLElement"
    },
    "ul": {
      "categories": [
        "Flow"
      ],
      "conditional": {
        "Palpable": "only if it has at least one li child"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "List",
      "interface": "HTMLUListElement"
    },
    "var": {
      "categories": [
        "Flow",
        "Phrasing",
        "Palpable"
      ],
      "conditional": {},
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Variable",
      "interface": "HTMLElement"
    },
    "video": {
      "categories": [
        "Flow",
        "Phrasing",
        "Embedded",
        "Palpable"
      ],
      "conditional": {
        "Interactive": "only if the controls attribute is present"
      },
      "syntax": "normal",
      "parent_requirement": null,
      "description": "Video player",
      "interface": "HTMLVideoElement"
    },
    "wbr": {
      "categories": [
        "Flow",
        "Phrasing"
      ],
      "conditional": {},
      "syntax": "void",
      "parent_requirement": null,
      "description": "Line breaking opportunity",
      "interface": "HTMLElement"
    }
  },
  "reverse_index": {
    "Metadata": {
      "always": [
        "base",
        "link",
        "meta",
        "noscript",
        "script",
        "style",
        "template",
        "title"
      ],
      "conditional": {},
      "non_element_members": []
    },
    "Flow": {
      "always": [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "blockquote",
        "br",
        "button",
        "canvas",
        "cite",
        "code",
        "data",
        "datalist",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "em",
        "embed",
        "fieldset",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "map",
        "mark",
        "math",
        "menu",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "ruby",
        "s",
        "samp",
        "script",
        "search",
        "section",
        "select",
        "slot",
        "small",
        "span",
        "strong",
        "style",
        "sub",
        "sup",
        "svg",
        "table",
        "template",
        "textarea",
        "time",
        "u",
        "ul",
        "var",
        "video",
        "wbr"
      ],
      "conditional": {
        "area": "only if it is a descendant of a map element",
        "link": "only if the link is allowed in the body (body-ok rel values)",
        "main": "only if it is a hierarchically correct main element",
        "meta": "only if the itemprop attribute is present"
      },
      "non_element_members": [
        "Text",
        "autonomous custom elements"
      ]
    },
    "Sectioning": {
      "always": [
        "article",
        "aside",
        "nav",
        "section"
      ],
      "conditional": {},
      "non_element_members": []
    },
    "Heading": {
      "always": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hgroup"
      ],
      "conditional": {},
      "non_element_members": []
    },
    "Phrasing": {
      "always": [
        "a",
        "abbr",
        "audio",
        "b",
        "bdi",
        "bdo",
        "br",
        "button",
        "canvas",
        "cite",
        "code",
        "data",
        "datalist",
        "del",
        "dfn",
        "em",
        "embed",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "map",
        "mark",
        "math",
        "meter",
        "noscript",
        "object",
        "output",
        "picture",
        "progress",
        "q",
        "ruby",
        "s",
        "samp",
        "script",
        "select",
        "selectedcontent",
        "slot",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "svg",
        "template",
        "textarea",
        "time",
        "u",
        "var",
        "video",
        "wbr"
      ],
      "conditional": {
        "area": "only if it is a descendant of a map element",
        "link": "only if the link is allowed in the body (body-ok rel values)",
        "meta": "only if the itemprop attribute is present"
      },
      "non_element_members": [
        "Text",
        "autonomous custom elements"
      ]
    },
    "Embedded": {
      "always": [
        "audio",
        "canvas",
        "embed",
        "iframe",
        "img",
        "math",
        "object",
        "picture",
        "svg",
        "video"
      ],
      "conditional": {},
      "non_element_members": []
    },
    "Interactive": {
      "always": [
        "button",
        "details",
        "embed",
        "iframe",
        "label",
        "select",
        "textarea"
      ],
      "conditional": {
        "a": "only if the href attribute is present",
        "audio": "only if the controls attribute is present",
        "img": "only if the usemap or controls attribute is present",
        "input": "only if type is not hidden (type=hidden excludes it)",
        "video": "only if the controls attribute is present"
      },
      "non_element_members": []
    },
    "Palpable": {
      "always": [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "b",
        "bdi",
        "bdo",
        "blockquote",
        "button",
        "canvas",
        "cite",
        "code",
        "data",
        "del",
        "details",
        "dfn",
        "div",
        "em",
        "embed",
        "fieldset",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "i",
        "iframe",
        "img",
        "ins",
        "kbd",
        "label",
        "main",
        "map",
        "mark",
        "math",
        "meter",
        "nav",
        "object",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "ruby",
        "s",
        "samp",
        "search",
        "section",
        "select",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "svg",
        "table",
        "textarea",
        "time",
        "u",
        "var",
        "video"
      ],
      "conditional": {
        "audio": "only if the controls attribute is present",
        "dl": "only if it has at least one name-value group",
        "input": "only if type is not hidden (type=hidden excludes it)",
        "menu": "only if it has at least one li child",
        "ol": "only if it has at least one li child",
        "ul": "only if it has at least one li child"
      },
      "non_element_members": [
        "Text that is not inter-element whitespace (conditional)",
        "autonomous custom elements"
      ]
    },
    "Script-supporting": {
      "always": [
        "script",
        "template"
      ],
      "conditional": {},
      "non_element_members": []
    },
    "Form-associated": {
      "always": [
        "button",
        "fieldset",
        "img",
        "input",
        "object",
        "output",
        "select",
        "textarea"
      ],
      "conditional": {},
      "non_element_members": [
        "form-associated custom elements"
      ]
    },
    "Form-associated/listed": {
      "always": [
        "button",
        "fieldset",
        "input",
        "object",
        "output",
        "select",
        "textarea"
      ],
      "conditional": {},
      "non_element_members": [
        "form-associated custom elements"
      ]
    },
    "Form-associated/submittable": {
      "always": [
        "button",
        "input",
        "select",
        "textarea"
      ],
      "conditional": {},
      "non_element_members": [
        "form-associated custom elements"
      ]
    },
    "Form-associated/resettable": {
      "always": [
        "input",
        "output",
        "select",
        "textarea"
      ],
      "conditional": {},
      "non_element_members": [
        "form-associated custom elements"
      ]
    },
    "Form-associated/autocapitalize-and-autocorrect-inheriting": {
      "always": [
        "button",
        "fieldset",
        "input",
        "output",
        "select",
        "textarea"
      ],
      "conditional": {},
      "non_element_members": []
    },
    "Form-associated/labelable": {
      "always": [
        "button",
        "meter",
        "output",
        "progress",
        "select",
        "textarea"
      ],
      "conditional": {
        "input": "only if type is not hidden (type=hidden excludes it)"
      },
      "non_element_members": [
        "form-associated custom elements"
      ]
    },
    "Context-restricted": {
      "note": "Not a spec category: elements whose definition says 'Categories: None'. They are only valid inside a specific parent.",
      "elements": {
        "body": [
          "html"
        ],
        "caption": [
          "table"
        ],
        "col": [
          "colgroup"
        ],
        "colgroup": [
          "table"
        ],
        "dd": [
          "dl",
          "div*"
        ],
        "dt": [
          "dl",
          "div*"
        ],
        "figcaption": [
          "figure"
        ],
        "head": [
          "html"
        ],
        "html": [
          "none (document root)"
        ],
        "legend": [
          "fieldset",
          "optgroup"
        ],
        "li": [
          "ol",
          "ul",
          "menu*"
        ],
        "optgroup": [
          "select",
          "div*"
        ],
        "option": [
          "select",
          "datalist",
          "optgroup",
          "div*"
        ],
        "rp": [
          "ruby"
        ],
        "rt": [
          "ruby"
        ],
        "source": [
          "picture",
          "video",
          "audio"
        ],
        "summary": [
          "details"
        ],
        "tbody": [
          "table"
        ],
        "td": [
          "tr"
        ],
        "tfoot": [
          "table"
        ],
        "th": [
          "tr"
        ],
        "thead": [
          "table"
        ],
        "tr": [
          "table",
          "thead",
          "tbody",
          "tfoot"
        ],
        "track": [
          "audio",
          "video"
        ]
      }
    }
  },
  "syntax_kinds": {
    "void": [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "source",
      "track",
      "wbr"
    ],
    "template": [
      "template"
    ],
    "raw text": [
      "script",
      "style"
    ],
    "escapable raw text": [
      "textarea",
      "title"
    ],
    "foreign": [
      "math",
      "svg"
    ],
    "normal": [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "menu",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "search",
      "section",
      "select",
      "selectedcontent",
      "slot",
      "small",
      "span",
      "strong",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "u",
      "ul",
      "var",
      "video"
    ]
  },
  "dom_node_types": {
    "spec": "https://dom.spec.whatwg.org/#interface-node",
    "types": [
      {
        "type": "Element",
        "nodeType": 1,
        "applies_to": "HTML and XML",
        "note": "Every element in the taxonomy above."
      },
      {
        "type": "Attr",
        "nodeType": 2,
        "applies_to": "HTML and XML",
        "note": "A Node, but never a child in the tree; hangs off an Element."
      },
      {
        "type": "Text",
        "nodeType": 3,
        "applies_to": "HTML and XML",
        "note": "Counts as flow and phrasing content."
      },
      {
        "type": "CDATASection",
        "nodeType": 4,
        "applies_to": "XML only",
        "note": "createCDATASection() throws in HTML documents; in HTML syntax, CDATA sections exist only inside foreign (SVG/MathML) content and become Text."
      },
      {
        "type": "ProcessingInstruction",
        "nodeType": 7,
        "applies_to": "XML (effectively)",
        "note": "The HTML parser turns <?...> into a Comment; the DOM API can still create one in an HTML document."
      },
      {
        "type": "Comment",
        "nodeType": 8,
        "applies_to": "HTML and XML",
        "note": ""
      },
      {
        "type": "Document",
        "nodeType": 9,
        "applies_to": "HTML and XML",
        "note": "Root of the tree."
      },
      {
        "type": "DocumentType",
        "nodeType": 10,
        "applies_to": "HTML and XML",
        "note": "The <!DOCTYPE html> node."
      },
      {
        "type": "DocumentFragment",
        "nodeType": 11,
        "applies_to": "HTML and XML",
        "note": "ShadowRoot and template contents are DocumentFragments."
      }
    ]
  },
  "summary": [
    {
      "category": "Metadata",
      "always": 8,
      "conditional": 0,
      "total": 8,
      "definition": "Sets up the presentation or behaviour of the rest of the content, the document's relationship to other documents, or other out-of-band information.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#metadata-content"
    },
    {
      "category": "Flow",
      "always": 84,
      "conditional": 4,
      "total": 88,
      "definition": "Most elements used in the body of documents and applications.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#flow-content"
    },
    {
      "category": "Sectioning",
      "always": 4,
      "conditional": 0,
      "total": 4,
      "definition": "Content that defines the scope of headers and footers.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#sectioning-content"
    },
    {
      "category": "Heading",
      "always": 7,
      "conditional": 0,
      "total": 7,
      "definition": "Content that defines the heading of a section.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#heading-content"
    },
    {
      "category": "Phrasing",
      "always": 54,
      "conditional": 3,
      "total": 57,
      "definition": "The text of the document and the elements that mark it up at the intra-paragraph level.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#phrasing-content"
    },
    {
      "category": "Embedded",
      "always": 10,
      "conditional": 0,
      "total": 10,
      "definition": "Content that imports another resource into the document, or inserts content from another vocabulary.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2"
    },
    {
      "category": "Interactive",
      "always": 7,
      "conditional": 5,
      "total": 12,
      "definition": "Content specifically intended for user interaction.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#interactive-content"
    },
    {
      "category": "Palpable",
      "always": 69,
      "conditional": 6,
      "total": 75,
      "definition": "Content that is neither empty nor hidden; a content model expecting flow or phrasing content should have at least one palpable node.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#palpable-content"
    },
    {
      "category": "Script-supporting",
      "always": 2,
      "conditional": 0,
      "total": 2,
      "definition": "Elements that don't represent anything themselves but support scripts, e.g. by providing functionality for the user.",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements"
    },
    {
      "category": "Form-associated",
      "always": 8,
      "conditional": 0,
      "total": 8,
      "definition": "Elements that can have a form owner.",
      "spec": "https://html.spec.whatwg.org/multipage/forms.html#form-associated-element"
    },
    {
      "category": "Form-associated/listed",
      "always": 7,
      "conditional": 0,
      "total": 7,
      "definition": "Listed in form.elements and fieldset.elements, and have a form content attribute.",
      "spec": "https://html.spec.whatwg.org/multipage/forms.html#category-listed"
    },
    {
      "category": "Form-associated/submittable",
      "always": 4,
      "conditional": 0,
      "total": 4,
      "definition": "Can be used for constructing the entry list when a form is submitted.",
      "spec": "https://html.spec.whatwg.org/multipage/forms.html#category-submit"
    },
    {
      "category": "Form-associated/resettable",
      "always": 4,
      "conditional": 0,
      "total": 4,
      "definition": "Can be affected when a form element is reset.",
      "spec": "https://html.spec.whatwg.org/multipage/forms.html#category-reset"
    },
    {
      "category": "Form-associated/autocapitalize-and-autocorrect-inheriting",
      "always": 6,
      "conditional": 0,
      "total": 6,
      "definition": "Inherit the autocapitalize and autocorrect attributes from their form owner.",
      "spec": "https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize-and-autocorrect"
    },
    {
      "category": "Form-associated/labelable",
      "always": 6,
      "conditional": 1,
      "total": 7,
      "definition": "Can be associated with label elements. Note: meter and progress are labelable without being form-associated.",
      "spec": "https://html.spec.whatwg.org/multipage/forms.html#category-label"
    },
    {
      "category": "Context-restricted",
      "always": 24,
      "conditional": 0,
      "total": 24,
      "definition": "No content category; valid only inside a specific parent (user-requested bucket, not a spec term).",
      "spec": "https://html.spec.whatwg.org/multipage/dom.html#element-definitions"
    }
  ],
  "flags": [
    {
      "element": "hgroup",
      "issue": "Element index (\u00a7 Index \u203a Elements) lists only flow; palpable. Its own definition and the category index both include Heading content.",
      "resolution": "Classified as Heading per its normative definition."
    },
    {
      "element": "th",
      "issue": "Element index lists 'interactive*', but the th definition says Categories: None, and th is absent from the Interactive row of the category index.",
      "resolution": "Classified as context-restricted (no categories) per its definition. The index entry may reflect an in-progress change; worth re-checking."
    },
    {
      "element": "object",
      "issue": "Element index lists 'interactive*'. The definition omits Interactive (an editorial comment says it is interactive only when showing a plugin or child navigable, which is hard to check statically) and the category index omits it too.",
      "resolution": "Not classified as Interactive."
    },
    {
      "element": "selectedcontent",
      "issue": "Element index lists categories 'none'; its definition and the category index say Phrasing content.",
      "resolution": "Classified as Phrasing. Parent recorded from the element index (button, inside a customizable select)."
    },
    {
      "element": "label",
      "issue": "Category index lists label as Form-associated. The normative form-associated list (button, fieldset, input, object, output, select, textarea, img) and label's own definition do not.",
      "resolution": "Not classified as Form-associated."
    },
    {
      "element": "area, main",
      "issue": "Their definitions list Flow (and Phrasing for area) unconditionally; only the non-normative category index states the condition.",
      "resolution": "Recorded as conditional, with the condition taken from the category index."
    },
    {
      "element": "audio, video",
      "issue": "Element index shows Interactive without an asterisk; the definitions make it conditional on the controls attribute.",
      "resolution": "Recorded as conditional per the definitions."
    },
    {
      "element": "a, ins, del, map",
      "issue": "Element index marks phrasing with '*' (transparent content model: phrasing only when their contents are phrasing). Definitions list Phrasing unconditionally.",
      "resolution": "Classified as Phrasing; noted under 'notes'."
    },
    {
      "element": "svg, math",
      "issue": "Defined by the SVG and MathML specs, not HTML; categories come from the HTML element index.",
      "resolution": "Included as foreign elements."
    }
  ]
}

# HTML primitives taxonomy

Source: WHATWG HTML Living Standard (spec dated 22 October 2026). 115 elements. Full data is in `html-primitives-taxonomy.json`.

## Summary

| Category | Always | Conditional | Total | Definition |
|---|---|---|---|---|
| [Metadata](https://html.spec.whatwg.org/multipage/dom.html#metadata-content) | 8 | 0 | 8 | Sets up the presentation or behaviour of the rest of the content, the document's relationship to other documents, or other out-of-band information. |
| [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content) | 84 | 4 | 88 | Most elements used in the body of documents and applications. |
| [Sectioning](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content) | 4 | 0 | 4 | Content that defines the scope of headers and footers. |
| [Heading](https://html.spec.whatwg.org/multipage/dom.html#heading-content) | 7 | 0 | 7 | Content that defines the heading of a section. |
| [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content) | 54 | 3 | 57 | The text of the document and the elements that mark it up at the intra-paragraph level. |
| [Embedded](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2) | 10 | 0 | 10 | Content that imports another resource into the document, or inserts content from another vocabulary. |
| [Interactive](https://html.spec.whatwg.org/multipage/dom.html#interactive-content) | 7 | 5 | 12 | Content specifically intended for user interaction. |
| [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content) | 69 | 6 | 75 | Content that is neither empty nor hidden; a content model expecting flow or phrasing content should have at least one palpable node. |
| [Script-supporting](https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements) | 2 | 0 | 2 | Elements that don't represent anything themselves but support scripts, e.g. by providing functionality for the user. |
| [Form-associated](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element) | 8 | 0 | 8 | Elements that can have a form owner. |
| [Form-associated/listed](https://html.spec.whatwg.org/multipage/forms.html#category-listed) | 7 | 0 | 7 | Listed in form.elements and fieldset.elements, and have a form content attribute. |
| [Form-associated/submittable](https://html.spec.whatwg.org/multipage/forms.html#category-submit) | 4 | 0 | 4 | Can be used for constructing the entry list when a form is submitted. |
| [Form-associated/resettable](https://html.spec.whatwg.org/multipage/forms.html#category-reset) | 4 | 0 | 4 | Can be affected when a form element is reset. |
| [Form-associated/autocapitalize-and-autocorrect-inheriting](https://html.spec.whatwg.org/multipage/forms.html#category-autocapitalize-and-autocorrect) | 6 | 0 | 6 | Inherit the autocapitalize and autocorrect attributes from their form owner. |
| [Form-associated/labelable](https://html.spec.whatwg.org/multipage/forms.html#category-label) | 6 | 1 | 7 | Can be associated with label elements. Note: meter and progress are labelable without being form-associated. |
| [Context-restricted](https://html.spec.whatwg.org/multipage/dom.html#element-definitions) | 24 | 0 | 24 | No content category; valid only inside a specific parent (user-requested bucket, not a spec term). |

## Reverse index (category → elements)

### Metadata
Always: `base`, `link`, `meta`, `noscript`, `script`, `style`, `template`, `title`

### Flow
Always: `a`, `abbr`, `address`, `article`, `aside`, `audio`, `b`, `bdi`, `bdo`, `blockquote`, `br`, `button`, `canvas`, `cite`, `code`, `data`, `datalist`, `del`, `details`, `dfn`, `dialog`, `div`, `dl`, `em`, `embed`, `fieldset`, `figure`, `footer`, `form`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hgroup`, `hr`, `i`, `iframe`, `img`, `input`, `ins`, `kbd`, `label`, `map`, `mark`, `math`, `menu`, `meter`, `nav`, `noscript`, `object`, `ol`, `output`, `p`, `picture`, `pre`, `progress`, `q`, `ruby`, `s`, `samp`, `script`, `search`, `section`, `select`, `slot`, `small`, `span`, `strong`, `style`, `sub`, `sup`, `svg`, `table`, `template`, `textarea`, `time`, `u`, `ul`, `var`, `video`, `wbr`

Conditional:
- `area` — only if it is a descendant of a map element
- `link` — only if the link is allowed in the body (body-ok rel values)
- `main` — only if it is a hierarchically correct main element
- `meta` — only if the itemprop attribute is present

Also: Text, autonomous custom elements

### Sectioning
Always: `article`, `aside`, `nav`, `section`

### Heading
Always: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hgroup`

### Phrasing
Always: `a`, `abbr`, `audio`, `b`, `bdi`, `bdo`, `br`, `button`, `canvas`, `cite`, `code`, `data`, `datalist`, `del`, `dfn`, `em`, `embed`, `i`, `iframe`, `img`, `input`, `ins`, `kbd`, `label`, `map`, `mark`, `math`, `meter`, `noscript`, `object`, `output`, `picture`, `progress`, `q`, `ruby`, `s`, `samp`, `script`, `select`, `selectedcontent`, `slot`, `small`, `span`, `strong`, `sub`, `sup`, `svg`, `template`, `textarea`, `time`, `u`, `var`, `video`, `wbr`

Conditional:
- `area` — only if it is a descendant of a map element
- `link` — only if the link is allowed in the body (body-ok rel values)
- `meta` — only if the itemprop attribute is present

Also: Text, autonomous custom elements

### Embedded
Always: `audio`, `canvas`, `embed`, `iframe`, `img`, `math`, `object`, `picture`, `svg`, `video`

### Interactive
Always: `button`, `details`, `embed`, `iframe`, `label`, `select`, `textarea`

Conditional:
- `a` — only if the href attribute is present
- `audio` — only if the controls attribute is present
- `img` — only if the usemap or controls attribute is present
- `input` — only if type is not hidden (type=hidden excludes it)
- `video` — only if the controls attribute is present

### Palpable
Always: `a`, `abbr`, `address`, `article`, `aside`, `b`, `bdi`, `bdo`, `blockquote`, `button`, `canvas`, `cite`, `code`, `data`, `del`, `details`, `dfn`, `div`, `em`, `embed`, `fieldset`, `figure`, `footer`, `form`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hgroup`, `i`, `iframe`, `img`, `ins`, `kbd`, `label`, `main`, `map`, `mark`, `math`, `meter`, `nav`, `object`, `output`, `p`, `picture`, `pre`, `progress`, `q`, `ruby`, `s`, `samp`, `search`, `section`, `select`, `small`, `span`, `strong`, `sub`, `sup`, `svg`, `table`, `textarea`, `time`, `u`, `var`, `video`

Conditional:
- `audio` — only if the controls attribute is present
- `dl` — only if it has at least one name-value group
- `input` — only if type is not hidden (type=hidden excludes it)
- `menu` — only if it has at least one li child
- `ol` — only if it has at least one li child
- `ul` — only if it has at least one li child

Also: Text that is not inter-element whitespace (conditional), autonomous custom elements

### Script-supporting
Always: `script`, `template`

### Form-associated
Always: `button`, `fieldset`, `img`, `input`, `object`, `output`, `select`, `textarea`

Also: form-associated custom elements

### Form-associated/listed
Always: `button`, `fieldset`, `input`, `object`, `output`, `select`, `textarea`

Also: form-associated custom elements

### Form-associated/submittable
Always: `button`, `input`, `select`, `textarea`

Also: form-associated custom elements

### Form-associated/resettable
Always: `input`, `output`, `select`, `textarea`

Also: form-associated custom elements

### Form-associated/autocapitalize-and-autocorrect-inheriting
Always: `button`, `fieldset`, `input`, `output`, `select`, `textarea`

### Form-associated/labelable
Always: `button`, `meter`, `output`, `progress`, `select`, `textarea`

Conditional:
- `input` — only if type is not hidden (type=hidden excludes it)

Also: form-associated custom elements

### Context-restricted
Not a spec category: elements whose definition says 'Categories: None'. They are only valid inside a specific parent.

- `body` — parent: html
- `caption` — parent: table
- `col` — parent: colgroup
- `colgroup` — parent: table
- `dd` — parent: dl, div*
- `dt` — parent: dl, div*
- `figcaption` — parent: figure
- `head` — parent: html
- `html` — parent: none (document root)
- `legend` — parent: fieldset, optgroup
- `li` — parent: ol, ul, menu*
- `optgroup` — parent: select, div*
- `option` — parent: select, datalist, optgroup, div*
- `rp` — parent: ruby
- `rt` — parent: ruby
- `source` — parent: picture, video, audio
- `summary` — parent: details
- `tbody` — parent: table
- `td` — parent: tr
- `tfoot` — parent: table
- `th` — parent: tr
- `thead` — parent: table
- `tr` — parent: table, thead, tbody, tfoot
- `track` — parent: audio, video

## Syntax kinds

- **void** (13): `area`, `base`, `br`, `col`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `source`, `track`, `wbr`
- **template** (1): `template`
- **raw text** (2): `script`, `style`
- **escapable raw text** (2): `textarea`, `title`
- **foreign** (2): `math`, `svg`
- **normal** (95): `a`, `abbr`, `address`, `article`, `aside`, `audio`, `b`, `bdi`, `bdo`, `blockquote`, `body`, `button`, `canvas`, `caption`, `cite`, `code`, `colgroup`, `data`, `datalist`, `dd`, `del`, `details`, `dfn`, `dialog`, `div`, `dl`, `dt`, `em`, `fieldset`, `figcaption`, `figure`, `footer`, `form`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `head`, `header`, `hgroup`, `html`, `i`, `iframe`, `ins`, `kbd`, `label`, `legend`, `li`, `main`, `map`, `mark`, `menu`, `meter`, `nav`, `noscript`, `object`, `ol`, `optgroup`, `option`, `output`, `p`, `picture`, `pre`, `progress`, `q`, `rp`, `rt`, `ruby`, `s`, `samp`, `search`, `section`, `select`, `selectedcontent`, `slot`, `small`, `span`, `strong`, `sub`, `summary`, `sup`, `table`, `tbody`, `td`, `tfoot`, `th`, `thead`, `time`, `tr`, `u`, `ul`, `var`, `video`

## DOM node types

| Node type | nodeType | Applies to | Note |
|---|---|---|---|
| Element | 1 | HTML and XML | Every element in the taxonomy above. |
| Attr | 2 | HTML and XML | A Node, but never a child in the tree; hangs off an Element. |
| Text | 3 | HTML and XML | Counts as flow and phrasing content. |
| CDATASection | 4 | XML only | createCDATASection() throws in HTML documents; in HTML syntax, CDATA sections exist only inside foreign (SVG/MathML) content and become Text. |
| ProcessingInstruction | 7 | XML (effectively) | The HTML parser turns <?...> into a Comment; the DOM API can still create one in an HTML document. |
| Comment | 8 | HTML and XML |  |
| Document | 9 | HTML and XML | Root of the tree. |
| DocumentType | 10 | HTML and XML | The <!DOCTYPE html> node. |
| DocumentFragment | 11 | HTML and XML | ShadowRoot and template contents are DocumentFragments. |

## Flags (spec inconsistencies and judgement calls)

- **hgroup**: Element index (§ Index › Elements) lists only flow; palpable. Its own definition and the category index both include Heading content. *Classified as Heading per its normative definition.*
- **th**: Element index lists 'interactive*', but the th definition says Categories: None, and th is absent from the Interactive row of the category index. *Classified as context-restricted (no categories) per its definition. The index entry may reflect an in-progress change; worth re-checking.*
- **object**: Element index lists 'interactive*'. The definition omits Interactive (an editorial comment says it is interactive only when showing a plugin or child navigable, which is hard to check statically) and the category index omits it too. *Not classified as Interactive.*
- **selectedcontent**: Element index lists categories 'none'; its definition and the category index say Phrasing content. *Classified as Phrasing. Parent recorded from the element index (button, inside a customizable select).*
- **label**: Category index lists label as Form-associated. The normative form-associated list (button, fieldset, input, object, output, select, textarea, img) and label's own definition do not. *Not classified as Form-associated.*
- **area, main**: Their definitions list Flow (and Phrasing for area) unconditionally; only the non-normative category index states the condition. *Recorded as conditional, with the condition taken from the category index.*
- **audio, video**: Element index shows Interactive without an asterisk; the definitions make it conditional on the controls attribute. *Recorded as conditional per the definitions.*
- **a, ins, del, map**: Element index marks phrasing with '*' (transparent content model: phrasing only when their contents are phrasing). Definitions list Phrasing unconditionally. *Classified as Phrasing; noted under 'notes'.*
- **svg, math**: Defined by the SVG and MathML specs, not HTML; categories come from the HTML element index. *Included as foreign elements.*

These native HTML elements are the most useful, and many developers overlook them. Each one does work that people often reach for JavaScript to handle:

<details> + <summary>: an accordion that expands and collapses with no JS. Give several the same name attribute and they act as an exclusive group, so only one is open at a time.
<dialog>: a real modal. Calling .showModal() gives you focus trapping, Esc to close and a ::backdrop for free.
popover attribute: technically an attribute, not an element. It makes tooltips and menus that sit in the top layer, toggled from a button with popovertarget.
<datalist>: autocomplete suggestions for any <input>.
<input type="date | color | range">: native pickers that work well on mobile.
<progress> and <meter>: progress bars and gauges with proper accessibility built in.
<picture> + srcset: responsive images and format fallbacks, such as AVIF falling back to JPG.
<template>: inert markup you can clone with JS. Good for lists rendered without a framework.
<output>: shows the result of a form calculation and is announced to screen readers.
<search>: a newer landmark element that wraps search forms.
Semantic small fry:
<kbd> for keyboard input
<mark> for highlighted text
<time datetime=""> for machine-readable dates
<abbr title=""> for abbreviations

The best value for effort is <details>, <dialog> and popover. Together they replace most hand-rolled UI widgets and get accessibility right by default.

I can build a live demo page with all of these if you’d like to see them in action.

List all elements

Compiling a complete list of HTML elements by category.

These are the elements in the current HTML Living Standard, grouped by purpose:

Document & metadata
html, head, title, base, link, meta, style

Sections
body, article, section, nav, aside, h1–h6, hgroup, header, footer, address, main, search

Grouping content
p, hr, pre, blockquote, ol, ul, menu, li, dl, dt, dd, figure, figcaption, div

Text-level
a, em, strong, small, s, cite, q, dfn, abbr, ruby, rt, rp, data, time, code, var, samp, kbd, sub, sup, i, b, u, mark, bdi, bdo, span, br, wbr

Edits
ins, del

Embedded content
picture, source, img, iframe, embed, object, video, audio, track, map, area, plus svg and math (these come from the SVG and MathML specs)

Tables
table, caption, colgroup, col, thead, tbody, tfoot, tr, th, td

Forms
form, label, input, button, select, datalist, optgroup, option, selectedcontent, textarea, output, progress, meter, fieldset, legend

Interactive
details, summary, dialog

Scripting & components
script, noscript, template, slot, canvas

Obsolete elements are left out, including center, font, marquee, frame, big, tt and param. Browsers still render some of them, but they shouldn’t be used.

Identifying the core primitives within each grouping.

The whole language reduces to two generic primitives, div (block) and span (inline). Every other element is one of those with meaning or behavior added. Within each group, the irreducible core is:

Document: html, head, body, meta, plus link for anything external.
Sections: section + h1–h6. main, nav, aside, header, footer and search are sections with a landmark role attached.
Grouping: div, p, list (ul/ol + li), pre. dl, figure and blockquote are labeled variations.
Text-level: span, a, br. Everything else (em, code, time, kbd, and so on) is a span with semantics.
Embedded:
img for a picture
video/audio + source for media
iframe for another document
canvas for drawn pixels
Tables: table, tr, td/th. Sections and captions are optional structure.
Forms: form, input, button, label, select + option, textarea. meter, progress and output are display-only extras.
Interactive: details (disclosure) and dialog (modal). The popover attribute covers the third pattern.
Scripting: script, template, slot.

That gives about 30 elements that do real work. The other ~80 are semantic labels on those, which matter for accessibility and SEO but don’t add capability.

Did you mean something different by “primitives”, such as a minimal starter set to learn first?

Drafting instructions to organize primitives and element types.

Paste this prompt into any model, or hand it to a developer, to generate the grouping:

Build a complete taxonomy of HTML primitives based on the WHATWG HTML Living Standard.

SCOPE
- Include every current, non-obsolete HTML element, plus svg and math as foreign elements.
- Exclude obsolete elements (center, font, marquee, frame, etc.).

AXIS 1 — CONTENT CATEGORIES
Use these categories exactly:
Metadata, Flow, Sectioning, Heading, Phrasing, Embedded, Interactive,
Palpable, Script-supporting, Form-associated.
Form-associated has these sub-categories:
listed, submittable, resettable, autocapitalize-and-autocorrect-inheriting, labelable.
- Assign each element to every category it belongs to; elements can be in several.
- Record conditional membership with its condition. Examples:
  - a is Interactive only if it has href
  - img is Interactive only if it has usemap
  - audio and video are Interactive only if they have controls
  - input is not Interactive if type=hidden
- Elements in no category (e.g. li, td, option) go in "Context-restricted",
  with their required parent.

AXIS 2 — SYNTAX KIND
Assign exactly one kind per element:
void, template, raw text, escapable raw text, foreign, normal.

AXIS 3 — DOM NODE TYPES
List the node types separately:
Document, DocumentType, Element, Attr, Text, Comment, DocumentFragment
(include CDATASection and ProcessingInstruction, noting they apply to XML only).

OUTPUT
1. A JSON object keyed by element name:
   { "a": { "categories": [...], "conditional": {...}, "syntax": "normal", "parent_requirement": null } }
2. A reverse index: category → list of elements.
3. A summary table: category, element count, one-line definition.

RULES
- Use the spec's definitions only; add no categories of your own.
- Flag any element whose classification you are unsure of rather than guessing.
- Cite the spec section (html.spec.whatwg.org) for each category definition.

I can also run this and build the result as a browsable reference page, with filters by category and syntax kind.

Build a complete taxonomy of HTML primitives based on the WHATWG HTML Living Standard.

SCOPE
- Include every current, non-obsolete HTML element, plus svg and math as foreign elements.
- Exclude obsolete elements (center, font, marquee, frame, etc.).

AXIS 1 — CONTENT CATEGORIES
Use these categories exactly:
Metadata, Flow, Sectioning, Heading, Phrasing, Embedded, Interactive,
Palpable, Script-supporting, Form-associated.
Form-associated has these sub-categories:
listed, submittable, resettable, autocapitalize-and-autocorrect-inheriting, labelable.
- Assign each element to every category it belongs to; elements can be in several.
- Record conditional membership with its condition. Examples:
  - a is Interactive only if it has href
  - img is Interactive only if it has usemap
  - audio and video are Interactive only if they have controls
  - input is not Interactive if type=hidden
- Elements in no category (e.g. li, td, option) go in "Context-restricted",
  with their required parent.

AXIS 2 — SYNTAX KIND
Assign exactly one kind per element:
void, template, raw text, escapable raw text, foreign, normal.

AXIS 3 — DOM NODE TYPES
List the node types separately:
Document, DocumentType, Element, Attr, Text, Comment, DocumentFragment
(include CDATASection and ProcessingInstruction, noting they apply to XML only).

OUTPUT
1. A JSON object keyed by element name:
   { "a": { "categories": [...], "conditional": {...}, "syntax": "normal", "parent_requirement": null } }
2. A reverse index: category → list of elements.
3. A summary table: category, element count, one-line definition.

RULES
- Use the spec's definitions only; add no categories of your own.
- Flag any element whose classification you are unsure of rather than guessing.
- Cite the spec section (html.spec.whatwg.org) for each category definition.

I’ll build the taxonomy from the spec’s own element index, then generate the JSON, reverse index and summary table as files.

I built the taxonomy from the WHATWG spec’s source file (dated 22 October 2026). It covers all 115 current elements, including svg and math.

Each element’s categories come from its own Categories entry in the spec, which is the binding (normative) text. Parents, descriptions and DOM interfaces come from the spec’s element index. html-primitives-taxonomy.json holds the per-element data, the reverse index, syntax kinds, DOM node types and the summary table. html-primitives-taxonomy.md has the same content as readable tables.

Category	Always	Conditional
Metadata	8	0
Flow	84	4
Sectioning	4	0
Heading	7	0
Phrasing	54	3
Embedded	10	0
Interactive	7	5
Palpable	69	6
Script-supporting	2	0
Form-associated	8	0
Context-restricted	24	0

Conditional membership I recorded that you didn’t list:

img is Interactive with usemap or the new controls attribute.
input is labelable only when it isn’t type=hidden.
link and meta are Flow/Phrasing only in specific cases.
ol, ul, menu and dl are Palpable only when they have items.

Where the spec contradicts itself, I went with each element’s own definition and listed the conflicts in the files:

hgroup: the element index omits Heading, but its definition includes it.
th: the element index says interactive, but its definition says “None”. This may be an in-progress change.
selectedcontent: the element index says “none”, but its definition says Phrasing.
object: the element index marks it interactive, but its definition doesn’t.
label: the category index lists it as form-associated, but the binding form-associated list excludes it.
area, main: their conditions appear only in the category index, so I recorded them as conditional and flagged them.

The DOM node types section notes that CDATASection only exists in XML documents, and that ProcessingInstruction effectively does too