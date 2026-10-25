# Custom element — `<name-with-dash>`

> AI Primitive `html.custom-element` · kind: custom-element · DOM interface: HTMLElement (autonomous and form-associated) or the extended built-in interface (customized built-in), subclassed by the author

Any element whose custom element name is a valid hyphenated name registered through customElements.define(). Names cannot be enumerated, so one primitive covers the whole family. Three variants exist and share the same naming rule; they differ only in the base class they extend and in the categories they gain.

## Naming

- Valid custom element name: begins with [a-z], contains at least one hyphen, contains no uppercase ASCII letters, and is not a reserved hyphenated name (annotation-xml, color-profile, font-face, font-face-src, font-face-uri, font-face-format, font-face-name, missing-glyph).
- Registration: `customElements.define(name, constructor[, { extends }])`
- Spec: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)
- Applies to the autonomous and form-associated variants. A customized built-in element takes the categories of its built-in local name instead.

## Form categories

- Autonomous variant: none. Form-associated variant: see variants.form-associated. Customized built-in variant: those of the built-in local name.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Applies to the autonomous and form-associated variants; a customized built-in element keeps the syntax kind of its built-in local name.

## Placement

- Allowed wherever flow or phrasing content is expected, subject to the enclosing content model. A customized built-in element follows the placement of its built-in local name.

## Variants

| Variant | Base class | Content categories | Form categories | Written as |
|---|---|---|---|---|
| Autonomous custom element | HTMLElement (author subclass) | Flow, Phrasing, Palpable | none | `<name-with-dash>` |
| Form-associated custom element | HTMLElement (author subclass with static formAssociated = true) | Flow, Phrasing, Palpable | Form-associated, listed, submittable, resettable, labelable | `<name-with-dash>` |
| Customized built-in element | The built-in element’s interface (for example HTMLButtonElement), subclassed by the author | inherited from the built-in local name | inherited from the built-in local name | `<built-in is="name-with-dash">` |

### Autonomous custom element

Extends HTMLElement directly and is written with its own tag name.

```html
<user-card name="Ada"></user-card>
<script>
  customElements.define("user-card", class extends HTMLElement {});
</script>
```

Spec: https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements

### Form-associated custom element

An autonomous custom element whose class sets static formAssociated = true. It gains a form owner through ElementInternals and joins the listed form categories in addition to the autonomous categories.

Does not automatically gain autocapitalize-and-autocorrect-inheriting membership.

```html
<form>
  <fancy-input name="nickname"></fancy-input>
</form>
<script>
  customElements.define("fancy-input", class extends HTMLElement {
    static formAssociated = true;
    #internals = this.attachInternals();
  });
</script>
```

Spec: https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example

### Customized built-in element

Extends a built-in element’s interface and is used through the is="" attribute on the built-in tag. The hyphenated name is the is value; no new element name is introduced.

Use the classification of their built-in local name; is does not introduce a new element name.

```html
<button is="fancy-button">Click</button>
<script>
  customElements.define("fancy-button", class extends HTMLButtonElement {}, { extends: "button" });
</script>
```

Spec: https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element

## Example

```html
<user-card name="Ada"></user-card>
<script>
  customElements.define("user-card", class extends HTMLElement {});
</script>
```

## Spec

- Custom elements: https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements
- Valid custom element name: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `description`, `naming`, `dom.interface`, `placement`, `syntax.start_tag`, `syntax.end_tag`, `syntax.children`, `variants.*.description`, `variants.*.example`, `example`
- Machine-readable twin: `primitive.json`
