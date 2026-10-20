# Fraga — Design System

Source of truth for the look of the site. Derived from `styles.css`, plus the rules in **Rules** below. Where the two disagree, this file describes the target; `styles.css` will be refactored to match later.

## Rules

1. **Four font sizes only.** The site uses exactly the four sizes in the Type scale. No other `font-size` values.
2. **Two fonts only.** Cormorant Garamond (serif) and Inter (sans). No third family, no fallback-driven look.
3. **Gold is reserved for the call to action.** Gold appears only on "Join the list" buttons (top bar, hero, end of page): border, hover fill, and nothing else. Not on eyebrows, numbers, spec labels, hairlines, emphasis (`em`), hover states, or icons.
4. **Whitespace first.** Give every block room. When in doubt, add space rather than tighten. Nothing should feel crammed.
5. **Ask before contradicting this file.** If an instruction from the user conflicts with anything here, stop and ask which wins before making the change.

## Mood

A beach at night, felt indirectly: deep navy, moonlit pale blue, a few stars, slow drifting water. Luxury through restraint: hairlines instead of boxes, no prices, generous space. Heritage voice (founded 1987), not a start-up.

## Color

| Token | Value | Use |
|---|---|---|
| `--bg` | `#030912` | Page background, nav, footer |
| `--fg` | `#eaf0f4` | Primary text |
| `--moon` | `#bcd6e6` | Accents, stars, moonlight, highlights that are not CTAs |
| `--muted` | `#7f97a8` | Secondary text, footer |
| `--line` | `rgba(188, 214, 230, .16)` | Every hairline and divider |
| `--gold` | `#c9a45c` | **CTA only** (see Rule 3) |

- Lead paragraph text (`--lead`): `#b9cbd8`. Used only for lead paragraphs on the dark panels (story, closing), never for the hero subline.
- Stage gradient: `#0d2a44` → `#06182b` → `#030912`.
- Button hover text on gold: `#06121f`.
- `--gold-soft` (`#e8d3a0`) is retired. Use `--moon` where it was used for `em` and hover states.

## Typography

Fonts (Google Fonts):

- **Cormorant Garamond** — 300, 400; italic 300. Headlines, big numerals, the `+` mark.
- **Inter** — 300, 400, 500. Body, labels, buttons, nav, logo.

### Type scale (the only four sizes)

| Role | Size | Font | Weight | Notes |
|---|---|---|---|---|
| Display | `clamp(48px, 8vw, 96px)` | Cormorant | 300 | `h1`, line-height 1, tracking .02em |
| Heading | `clamp(28px, 4vw, 56px)` | Cormorant | 300 | `h2`, `h3`, spec numerals, model names, FAQ questions; line-height 1.1 |
| Body | `16px` | Inter | 300 | Paragraphs, lead, descriptions, FAQ answers; line-height 1.6 |
| Caption | `12px` | Inter | 400–500 | Logo, buttons, eyebrow, spec labels, numbering, footer; uppercase, tracking .25–.4em |

Hierarchy beyond size comes from font, weight, case and color, never from a fifth size. These rules are mandatory, because several levels share a size:

**Headings (shared Heading size, told apart by weight, style and space)**

| Level | Element | Weight / style | Color | Space |
|---|---|---|---|---|
| 1 | `h2` section title ("The Collection") | Cormorant **400**, upright; the `em` phrase is italic 300 in `--moon` | `--fg` | 24px below, 96px+ of section padding around it |
| 2 | `h3` model names, FAQ questions | Cormorant **300**, upright | `--fg`; hover `--moon` | Sit inside hairline rows, 40px row padding |
| 2 | Spec numerals | Cormorant **300**, upright | `--fg` | Over a Caption label in `--muted` |

A section title and the first model name below it are the same size on purpose; the heavier weight, the italic phrase and the extra space around `h2` make it read as the higher level. Do not make an `h3` 400 or give it an italic phrase.

**Hero text (Display plus Body)**

- `h1` is Display, Cormorant 300, `--fg`; its `em` phrase ("men of the sea.") is italic in `--moon`.
- The hero subline is level two of the hero hierarchy and must stay clearly readable over the photo and stars: Body size, Inter **400**, color `--fg` (not `--lead`, not `--muted`), 24px below the `h1`. It must never be dimmer than the lead text elsewhere.
- The hero eyebrow is Caption in `--moon` (not gold).

**Text colors by role:** primary text and hero subline `--fg`; lead paragraphs `--lead`; descriptions, FAQ answers, labels, footer `--muted`.

## Layout and spacing

- Single page, one long scroll: hero → story (`#story`) → collection → FAQ → contact (`#contact`).
- Every section is at least full viewport height, content vertically centered.
- Section padding: `clamp(24px, 8vw, 120px)` horizontal, `120px` vertical (`90px` top on mobile, non-hero).
- Spacing scale (use these, not ad-hoc values): `16 · 24 · 40 · 64 · 96 · 120` px.
  - Between heading and paragraph: 24px.
  - Between a block and its list or specs row: 64px.
  - List row padding: 40px vertical.
  - Space between a CTA and the text above it: 40px.
- Text blocks max width ~34em; panels max 560px. Never run text edge to edge.

## Components

**Top bar.** Fixed. Logo top left, "Join the list" button top right, nothing else. Own background `rgba(3, 9, 18, .88)` with 14px backdrop blur and a bottom hairline, so it never overlaps the text beneath. Padding `18px clamp(20px, 5vw, 64px)`.

**CTA button ("Join the list").** Transparent-ish fill, 1px gold border, `--fg` text, Caption size, uppercase. Hover: gold fill, dark text, 0.35s. Padding `18px 46px` (nav: `10px 22px`). This is the only gold on the site.

**Specs row.** Open row, no boxes. Cormorant numerals at Heading size over a Caption label in `--muted`. Columns separated by vertical `--line` hairlines; a `--line` hairline on top.

**Collection list.** Editorial rows, no cards, no prices. Three columns: number (Caption, `--muted`), model name (Heading), description (Body, `--muted`). Hairline between rows. Hover: row shifts 14px right and the name turns `--moon` italic.

**FAQ.** Hairline accordion. Number, question (Heading), `+` mark that rotates 45° when open. Answer in Body, `--muted`, max width 38em.

**Footer.** Centered Caption text in `--muted`, top hairline, on `--bg`.

## Imagery and background

- Fixed stage behind all content: radial navy gradient, twinkling stars, a soft column of moonlight, two slowly drifting wave layers, and a vignette.
- The watch photo's black background is blended into the page with `mix-blend-mode: lighten` plus a radial `mask-image`. Changing either re-exposes a rectangle around the photo.

## Motion

- Scroll reveal: fade + 46px rise, 1.1s, `cubic-bezier(.2, .7, .2, 1)`, staggered .15s steps.
- Ambient: stars twinkle (7s), moonlight shimmers (6s), waves drift (28s / 40s).
- Respect `prefers-reduced-motion`: no reveal, no smooth scroll.

## Known conflicts with the current `styles.css` (to refactor)

- Hero subline currently uses `p.lead` (`#b9cbd8`, weight 300), too low in contrast over the photo; must become Inter 400 in `--fg`.
- `h2` and `h3` currently share weight 300; `h2` must move to 400.
- Many font sizes in use (10, 11, 12, 13, 14, 15, 16, 24, 28, 30, 36, 38, 44, 48, 58, 76, 110 px and several clamps); must collapse to four.
- Gold currently on eyebrow, spec labels, spec top hairline, numbering, FAQ `+`, collection hover line, and `--gold-soft` on `em` and hovers; must be removed from all of these.
- Spacing values are ad hoc (18, 22, 28, 34, 38, 56, 72 px…); move to the spacing scale.
- `--gold-soft` token to be removed.
