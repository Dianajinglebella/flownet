# Flownet

An artistic landing page and working browser-local product preview for the Flownet concept: choose your algorithm, understand your recommendations, and keep a copy of your data.

The design follows the supplied Integrated Biosciences reference: deep green canvas, oversized single-weight typography, monospaced labels, fine borders, restrained lime accents, and original rendered network art. Light creator sections alternate with dark product sections. The interface supports English and Chinese and adapts to desktop and mobile.

## Try it

Open the deployed private Site, or serve `dist/` with any static HTTP server:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Visit `http://127.0.0.1:4173`. ES modules require HTTP; do not open the HTML with a file URL.

## Working features

- Five transparent ranking presets: Serendipity, Chronological, Deep Focus, Local Pulse, Creator Boost.
- Discovery and freshness controls, chosen-city filtering signals, editable interests, and exact score explanations.
- Bilingual search and topic filters, following feed, saved posts, likes, and article views.
- Local profile onboarding, profile editing, text post creation, and JSON data export.
- Creator studio with manually entered source records and five declared commercial relationship classes. Every record remains explicitly unverified.
- English and Chinese keyword feed recipes, plus magazine, grid, and list layouts.
- Downloadable JSON or copyable export including profile, settings, posts, records, and feed recipe.
- Browser-local persistence. No login or wallet is needed for this preview.

All sample profiles and posts are fictional. Their counts and ranking signals are illustrative. Local posts are visible only in the browser where they were created. This version does not connect blockchain identity, wallets, real payments, live AI, a shared social database, or cross-device accounts. Export is a copy of local data, not a live social-graph migration. The source whitepaper is not included in the deployment.

## Files

- `dist/index.html` — landing page and application shell.
- `dist/styles.css` — responsive visual design and CSS illustrations.
- `dist/laboratory.css` — current reference-based design and responsive overrides.
- `dist/landing.js` — bilingual product narrative, creator home, trust layer, architecture, roadmap, and FAQ.
- `dist/app.js` — interface, local storage, bilingual content, forms and export.
- `dist/engine.mjs` — sample data and deterministic ranking logic.
- `tests/engine.test.mjs` — behavioral ranking and filtering tests.
- `.openai/hosting.json` — existing private Site project binding.
- `DESIGN.md` — design reference decisions and scope.
- `ASSET.md` — generated artwork location and the final generation prompt.

Run the ranking tests with `node --test tests/engine.test.mjs`. The site has no build step or npm dependencies. Google Fonts is optional; system fonts provide a fallback.

## Data

The browser storage key is `flownet-preview-v1`. Export from “Your profile” before clearing browser data if you want to keep your local profile and posts. The application has no analytics scripts. Hosting and font services may receive normal service requests.

## Next product stage

Connect real authentication and a shared database, then implement consent-based portable identity and social connections. Add AI and creator payments only after their actual providers and product rules are selected. These integrations are explicitly presented as future work throughout the interface.

## Validation

Seven automated checks cover algorithm ordering, tuning, exact score reconstruction, combined filters, bilingual recipe parsing and unsupported inputs. Browser checks cover record creation, local persistence, profile editing, feed recipes and layouts, following, saved posts, search, export text/copy and responsive layouts at 390 px and 1280 px. No application console errors were observed. The in-app browser did not expose a download event, so export also provides the complete JSON as copyable text; the download link remains available in regular browsers.
