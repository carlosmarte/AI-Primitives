# `<track>` — Timed text track

> AI Primitive `html.element.track` · kind: element · group: Embedded content · DOM interface: `HTMLTrackElement`

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

- Parent requirement: Child of audio or video.
- Parents (short form): `audio`, `video`

## Main primitive

Reduces to **`source`** ([`<source>`](../source/README.md)): Timed-text alternative for a media element. See [MAIN-ELEMENTS.md](../../MAIN-ELEMENTS.md).

## Example

```html
<video controls src="talk.mp4">
  <track kind="subtitles" src="talk.en.vtt" srclang="en" label="English">
</video>
```

## Spec

- Element definition: https://html.spec.whatwg.org/multipage/media.html#the-track-element
- Syntax kinds: https://html.spec.whatwg.org/multipage/syntax.html#elements-2

## Provenance

- Source: `html-elements/SPEC.md` (WHATWG HTML Living Standard, updated 2026-10-22, retrieved 2026-10-24)
- Authored fields (not in SPEC.md): `example`, `group`, `main_primitive`, `syntax.start_tag`, `syntax.end_tag`, `syntax.self_closing_start_tag_allowed`, `syntax.children`, `dom.namespace`
- Machine-readable twin: `primitive.json`
