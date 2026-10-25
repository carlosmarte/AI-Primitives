# `<object>` — Image, child navigable , or plugin

> AI Primitive `html.element.object` · kind: element · group: Embedded content · DOM interface: `HTMLObjectElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Embedded](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2), [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content)

## Form categories

- Form-associated: yes (can have a form owner)
- Always: [listed](https://html.spec.whatwg.org/multipage/forms.html#category-listed)

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Classification notes

- The non-normative element index suggests conditional Interactive membership; the normative Interactive list and object definition omit it. Interactive is therefore not assigned.
- Flag: Element index lists 'interactive*'. The definition omits Interactive (an editorial comment says it is interactive only when showing a plugin or child navigable, which is hard to check statically) and the category index omits it too. *Resolution:* Not classified as Interactive.

## Main primitive

Reduces to **`iframe`** ([`<iframe>`](../iframe/README.md)): External resource with fallback; image, document, or plugin. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<object data="report.pdf" type="application/pdf" width="600" height="400">Fallback content.</object>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
