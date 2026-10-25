# `<audio>` — Audio player

> AI Primitive `html.element.audio` · kind: element · group: Embedded content · DOM interface: `HTMLAudioElement`

## Content categories

- Always: [Flow](https://html.spec.whatwg.org/multipage/dom.html#flow-content), [Phrasing](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content), [Embedded](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-2)
- Conditional: [Interactive](https://html.spec.whatwg.org/multipage/dom.html#interactive-content) — only when the controls attribute is present
- Conditional: [Palpable](https://html.spec.whatwg.org/multipage/dom.html#palpable-content) — only when the controls attribute is present

## Form categories

None.

## Syntax (text/html)

- Kind: **normal**
- Start tag: required · End tag: required
- Self-closing start tag allowed: no
- Children: normal — Child content is governed by the element’s content model in its spec definition.

## Placement

- Parent requirement: none recorded (placement still governed by the enclosing content model)

## Classification notes

- Flag: Element index shows Interactive without an asterisk; the definitions make it conditional on the controls attribute. *Resolution:* Recorded as conditional per the definitions.

## Main primitive

This element **is a main primitive** (`audio`, job: External content). Audio player. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<audio controls src="clip.mp3"></audio>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/media.html#the-audio-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
