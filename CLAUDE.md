"Fraga" — a **multi-page** marketing site for a luxury watch business (the folder is still named `oficina`; the brand was renamed). One HTML file per nav topic: `index.html` (home), `story.html`, `collection.html`, `faq.html`, `contact.html`. Shared `styles.css` and `site.js`; the background stage, nav and footer are duplicated in each page, so when adding a page or nav item update every page.

##Design

- The site should bring **indirectly** the sensation of a beach at night.

- The specs row and collection list are intentionally borderless/hairline-only (no boxes or cards) to fit the luxury aesthetic

##Architecture 

- All copy, prices, model names and the hello@fraga.example contact address are placeholders.

- The photo's black background is blended into the navy page with mix-blend-mode: lighten plus a radial mask-image; changing either re-exposes a visible rectangle around the photo.

- The menu on top should have a background; this avoids superposition of text