"Fraga" — a **single-page** marketing site for a luxury watch business (the folder is still named `oficina`; the brand was renamed). Everything lives in `index.html` as one long scroll: hero, intro + specs (`#story`), collection, FAQ, closing "Join the list" (`#contact`), in that order. The site should stay one page (no separate HTML pages). The top bar holds only the Fraga logo (top left) and a "Join the list" button (top right) that is intentionally inert for now; it has no section links. The bar needs its own background so it doesn't overlap the text underneath. Shared `styles.css` and `site.js`.

##Brand

- Fraga is an **established brand founded in 1987**, not a new or start-up label. Copy should carry heritage and continuity, never "new brand" or "first collection" framing.

- Target audience: **men around 34 years old** who live in or near a coastal city and want their watch to show their hobbies and a lifestyle built around the sea (sailing, diving, surfing, fishing, the coast).

- When anything in this file or the site conflicts with this identity, this section wins.

##Design

- The site should bring **indirectly** the sensation of a beach at night.

- The specs row and collection list are intentionally borderless/hairline-only (no boxes or cards) to fit the luxury aesthetic

- No prices on the page: showing explicit prices is not a luxury-brand move. The collection lists models without them.

##Architecture 

- All copy and model names are placeholders. Every "Join the list" button (top bar, hero, end of page) is intentionally inert for now.

- The photo's black background is blended into the navy page with mix-blend-mode: lighten plus a radial mask-image; changing either re-exposes a visible rectangle around the photo.

##Design reference

- Before making any change to the design (styles, layout, colors, fonts, spacing), read `DESIGN.md` and follow it. If an instruction contradicts `DESIGN.md`, ask the user before proceeding.
