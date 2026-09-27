# Suit Yourself Web (SvelteKit PWA)

If `../CLAUDE.md` does not exist, this repo was cloned outside the SuitYourself workspace. Ignore instructions that reference `../shared`, `../gaps`, `../docs`, or `../tools`.

Canonical app, live at suityourself.app. Android and iOS are built from what this app does. Read `../CLAUDE.md` first.

## Stack

- SvelteKit 2, Svelte 5, TypeScript, Vite 5. Most components use runes (`$props`, `$derived`); a few still use legacy syntax (`$:`, `createEventDispatcher`, `on:` events). Match the file you're editing.
- `@sveltejs/adapter-vercel`. Deployed on Vercel.
- PWA: hand-written service worker in `src/service-worker.ts` (caches build + `static/`, network-first for everything else), manifest in `static/manifest.json`. Install and update prompts are toasts in `src/routes/+layout.svelte` using `svelte-french-toast`.
- Browser `localStorage` only, no backend.
- Playwright for end-to-end tests. This is the main safety net. Vitest is set up but has only a placeholder test.

## Commands

| Task | Command |
|---|---|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` (port 4173) |
| All tests | `npm test` (Playwright, then Vitest) |
| Playwright only | `npm run test:integration`. Builds and starts preview itself via `webServer`. |
| Vitest only | `npx vitest run`. `npm run test:unit` runs `vitest` bare, which watches in an interactive terminal. |
| Type check | `npm run check` |
| Lint / format | `npm run lint` (Prettier check + ESLint), `npm run format` |
| Deploy | No script. Vercel builds from the GitHub repo; merging the PR ships it. |

Node 24.x is required (`engines` + `engine-strict=true` in `.npmrc`, so `npm install` fails on other versions).

## Routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/decks` | Quick-start decks. Choosing one goes to `/cards`. |
| `/setup` | Pick one exercise per suit, then go to `/cards` |
| `/cards` | Workout session. Also works with no exercises chosen ("plain cards": no stopwatch, nothing saved). |
| `/activities` | Completed workouts from `localStorage`. Repeat or delete. |
| `/library`, `/library/[exerciseName]` | Exercise library with search and filter checkboxes. Detail pages embed YouTube demos and emit HowTo JSON-LD. |
| `/faq` | FAQ / how to use |
| `/login` | Dormant stub. Not linked; the redirect to it in `+layout.svelte` is commented out. Has the app's only `+page.server.ts`. Leave it alone unless asked. |
| `/robots.txt`, `/sitemap.xml` | `+server.js` endpoints. The sitemap lists static routes plus every exercise in `exercisesDB`. |

Library slugs are the exercise `name` key lowercased (`PUSH_UPS` → `/library/push_ups`); the detail page's `load` uppercases the param to look it up. Slugs are public URLs and must never change. Old URLs `/exercises` and `/index/*` are permanent redirects in `vercel.json`.

Session state (deck, current card, discards, reps, stopwatch) lives in in-memory Svelte stores, so a reload during a workout loses it. Routes pass data to `/cards` through those stores, not the URL.

## Where the logic lives

Business logic is not under `src/lib/` yet. It's spread across:

- `src/store.ts`: the deck store (shuffle, pluck, discard, putBack), current card, discarded cards, per-suit rep totals (`addReps`), stopwatch, workout name, and `randomCardIndex` (the draw)
- `src/classes/`, `src/functions/`, `src/enums/`, `src/types/`: card model, deck building, rep values (`src/enums/cardValue.ts`: Ace = 16)
- `src/lib/exercisesDB.ts`: all exercises. `src/lib/workoutsDB.ts`: quick-start decks.
- `src/lib/strings/*.ts`: page copy and SEO titles/descriptions
- Inside components: `src/lib/components/cards/PlayingCardWidget.svelte` handles discard, put-back, swipe and keyboard input, and saving the finished workout to `localStorage`. `StartButton.svelte` draws the first card and starts the stopwatch.

Native sessions read this repo to learn behavior, so logic belongs in plain TypeScript modules, not `.svelte` components. Extracting logic from a component is a worthwhile refactor: its own branch, Playwright passing before and after.

## Session input (PlayingCardWidget.svelte)

- Touch: `touchstart`/`touchend` listeners on the current card. Moves of 20px or less on both axes are ignored. The larger axis wins: up or right discards, down or left puts the card back. No mouse-drag swiping.
- Tap, click, Enter, or Space discards (the card is a `<button>`).
- Arrow keys: Up/Right discard, Down/Left put back.
- Put back returns the card to the deck and immediately draws a random card, which can be the same one ("Plucked same card!" message).
- Reps are added on discard. When the 52nd card is discarded and every suit has an exercise, the workout is appended to `localStorage`.

## Local data

`localStorage` only. No IndexedDB, no cookies in normal use.

- `workouts`: JSON array of `TSavedWorkout` (`src/types/savedWorkout.ts`): `name`, `exercises` (exercise name keys like `PUSH_UPS`, in suit order), `time.startedAt`, `time.elapsed`. Older entries used `time.start`/`time.end`; `reformatLocalStorageWorkouts` in `src/lib/utils.ts` converts them on read.
- `username`: written only by the dormant `/login` stub.

## SEO (web-only)

- Each route's `+page.ts` `load` returns `title`, `description`, `metaImageUrl`. `src/routes/+layout.svelte` turns those into `<title>`, description, Open Graph, and Twitter tags. New routes must return all three.
- Titles, descriptions, and image URLs live in `src/lib/strings/forSeo.ts` (exercise detail titles are built in their `+page.ts`).
- The layout sets `<link rel="canonical">` to `https://suityourself.app` + path (non-www).
- JSON-LD is only on exercise detail pages (HowTo schema).
- Add new public routes to `staticRoutes` in `src/routes/sitemap.xml/+server.js`.
- Specs: `tests/seo-*.spec.ts`, `tests/library/structured-data.test.ts`.

Don't move SEO metadata, long-form SEO copy, the install toast, or the service worker into `../shared/`. Page copy that also appears in the native apps does go in `../shared/strings/en.json`.

## Generated files (planned)

`../tools/sync` and most of `../shared/` don't exist yet, so neither folder below exists. Once sync runs, it will write these, and they are never edited by hand:

- `src/lib/generated/`: strings, exercises, decks, deck rules, design tokens as CSS custom properties
- `tests/shared-fixtures/`: copies of rule fixtures and export fixtures

Until then, copy lives in `src/lib/strings/`, data in `exercisesDB.ts` and `workoutsDB.ts`, and colors and sizes are hardcoded in component `<style>` blocks and `src/app.css`.

## Playwright

- Config: `playwright.config.ts`. Specs in `tests/` (plus `tests/library/`, `tests/decks/`), matching `*.test.ts` or `*.spec.ts`. Helpers in `tests/helperFunctions/`, fake saved workouts in `tests/fakeWorkoutData.ts`.
- Projects: `Mobile Chrome` (Pixel 7, touch) runs every spec. `chromium` (Desktop Chrome) runs only `keyboard.test.ts`. The `android*.test.ts` specs need a physical device on the LAN and are skipped by both projects.
- Run the full suite before asking to commit anything that touches behavior, copy, or styling.
- No visual snapshots exist yet. Add `toHaveScreenshot` on key screens so token changes show up as diffs.
- When adding or changing a spec, update `../shared/test-scenarios.md` and log a gap in `../gaps/android.md` and `../gaps/ios.md`.

## Rules

- No new hardcoded user-facing copy or visual values in components once generated files exist. Until then, put copy in `src/lib/strings/`, not inline.
- No network requests beyond loading the app and its own assets. Known exception: YouTube iframes on `/library/[exerciseName]`.
- Exports must validate against `../shared/schema/export.v1.schema.json`. (No export/import feature exists yet.)

## Quirks

- `Session.vim` and `pwa` in the repo root are tracked Vim session files, not app code. `Session.vim` is also in `.gitignore`.
- `src/lib/utils.ts` has an unused `createDeckOfCards`. The real one is `src/functions/createDeckOfCards.ts`.
- `src/lib/db.ts` is empty.
