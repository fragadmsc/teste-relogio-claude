---
name: open-site
description: Serve the Fraga site over real HTTP and open it in the integrated browser in the side panel. Use when the user asks to open, preview, view, show or run the site, or to see a section (hero, story, collection, faq, contact) in the browser.
---

# Open the site in the side-panel browser

The site is a single page of plain static files (`index.html`, `styles.css`,
`site.js`, `watch.jpg`) at the project root. Always look at it the way a visitor would: the real files, served over
HTTP, in the real browser.

## Never take shortcuts

These can make the page look different from the real site, so never use them:
- Opening a file directly with a `file://` URL, or any "local document" or
  static HTML preview mode (these always show the light color scheme and can
  handle relative paths, fonts and scripts differently).
- Publishing the page as an Artifact, rendering it in a widget, or pasting the
  HTML anywhere to show it.
- Serving a copy, a bundle, a snapshot, or HTML with inlined CSS/JS. Serve the
  working tree as it is, from the project root.
- Starting the server with Bash. Use `preview_start`.
- Judging the page only from its source code. Look at the rendered page.

## Steps

1. **Check the launch config.** `.claude/launch.json` should have this entry:
   ```json
   {
     "name": "site",
     "runtimeExecutable": "python3",
     "runtimeArgs": ["-m", "http.server", "8000"],
     "port": 8000
   }
   ```
   If it's missing, add it (keep any other entries). The server must run from
   the project root so relative paths like `styles.css` and `watch.jpg` resolve.

2. **Start the server and open the pane.** Call
   `mcp__Claude_Browser__preview_start` with `{ "name": "site" }`. If it's
   already running, it gets reused. Keep the `tabId` from the result.
   If port 8000 is taken by something else, change the port in both
   `runtimeArgs` and `port` (e.g. 8001) and start again. Never point it at
   another process's server.

3. **Go to the section you want.** Everything is on `index.html`; to jump to a
   section call `mcp__Claude_Browser__navigate` with
   `http://localhost:8000/#<id>` (`story`, `collection`, `faq`, `contact`).

4. **Make sure the page is current.** If files were edited since the tab was
   opened, reload it so the browser doesn't show cached CSS/JS:
   `javascript_tool` → `location.reload()`, then look again.

5. **Check that everything loaded:**
   - `read_network_requests` with `urlPattern: "localhost:8000"`: `styles.css`,
     `site.js`, `watch.jpg` and the page itself should all return 200.
   - `read_console_messages` with `onlyErrors: true`: there should be none.
   - `preview_logs` with `level: "error"` for server-side errors (e.g. a 404).
   Fix any missing or failing asset before saying the site is open.

6. **Look at it.** Take a `computer` → `screenshot` and check the parts the
   design depends on:
   - The page has the night-beach navy look, not a white or browser-default page.
   - The watch photo blends into the navy with no visible rectangle around it
     (that rectangle means `mix-blend-mode: lighten` or the radial
     `mask-image` failed).
   - There is no navigation bar at the top, and the footer is present.

7. **Report back** in a line or two: the URL that's open, which checks passed,
   and the screenshot. Leave the server running so the user can keep browsing
   in the side panel. Stop it with `preview_stop` only if they ask.

## Optional

- **Phone layout:** `resize_window` with `preset: "mobile"`, reload, take a
  screenshot, then switch back with `preset: "desktop"`.
- **Every section:** scroll through, or repeat steps 3–6 for `#story`,
  `#collection`, `#faq` and `#contact`.
