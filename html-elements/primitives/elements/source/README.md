# `<source>` — Image source for img or media source for video or audio

> AI Primitive `html.element.source` · kind: element · group: Embedded content · DOM interface: `HTMLSourceElement`

## Content categories

None. This element is **context-restricted**: it has no content category and is valid only inside the parent named under Placement.

## Form categories

None.

## Syntax (text/html)

- Kind: **void**
- Start tag: required · End tag: forbidden
- Self-closing start tag allowed: yes
- Children: none — Void element: never has contents. An end tag must not be written; a trailing "/" in the start tag is permitted and ignored.

## Placement

- Parent requirement: Child of picture before img; or child of audio/video before flow content or track, when the media element has no src attribute.
- Parents (short form): `picture`, `video`, `audio`

## Main primitive

This element **is a main primitive** (`source`, job: External content). Alternative resource for a picture or media element. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <img src="hero.jpg" alt="Hero image">
</picture>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
