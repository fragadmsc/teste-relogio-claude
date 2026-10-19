"Fraga" — a **single-page** marketing site for a luxury watch business (the folder is still named `oficina`; the brand was renamed). Everything lives in `index.html` as one long scroll: hero, story, collection, FAQ, contact, in that order. There is **no navigation bar**, and the site should stay one page (no separate HTML pages). Shared `styles.css` and `site.js`.

##Design

- The site should bring **indirectly** the sensation of a beach at night.

- The specs row and collection list are intentionally borderless/hairline-only (no boxes or cards) to fit the luxury aesthetic

##Architecture 

- All copy, prices, model names and the hello@fraga.example contact address are placeholders.

- The photo's black background is blended into the navy page with mix-blend-mode: lighten plus a radial mask-image; changing either re-exposes a visible rectangle around the photo.