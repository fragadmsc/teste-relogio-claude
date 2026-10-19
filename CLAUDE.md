"Fraga" — a **single-page** marketing site for a luxury watch business (the folder is still named `oficina`; the brand was renamed). Everything lives in `index.html` as one long scroll: hero, story, collection, FAQ, contact, in that order. There is **no navigation bar**, and the site should stay one page (no separate HTML pages). Shared `styles.css` and `site.js`.

##Brand

- Fraga is an **established brand founded in 1987**, not a new or start-up label. Copy should carry heritage and continuity, never "new brand" or "first collection" framing.

- Target audience: **men around 34 years old** who live in or near a coastal city and want their watch to show their hobbies and a lifestyle built around the sea (sailing, diving, surfing, fishing, the coast).

- When anything in this file or the site conflicts with this identity, this section wins.

##Design

- The site should bring **indirectly** the sensation of a beach at night.

- The specs row and collection list are intentionally borderless/hairline-only (no boxes or cards) to fit the luxury aesthetic

##Architecture 

- All copy, prices, model names and the hello@fraga.example contact address are placeholders.

- The photo's black background is blended into the navy page with mix-blend-mode: lighten plus a radial mask-image; changing either re-exposes a visible rectangle around the photo.