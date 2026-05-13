# Repository Guidelines

## Project Structure & Module Organization
- Primary entry: `src/main.jsx` boots the React tree, applies the MUI theme, and renders `App.jsx`.
- Gameplay UI lives in `src/App.jsx`; supporting data and helpers are in `src/game/`. Physics helpers remain in `src/matter_base.js` to bridge Matter.js with the DOM.
- Static art assets are served from `public/images/`; reference them via `/images/...` so Vite can copy them into the build.
- Vite writes production assets to `dist/`. Treat this directory as build output—never hand-edit or commit generated files.
- External dependencies are managed through npm; update `package.json`/`package-lock.json` when adding or upgrading packages.

## Build, Test, and Development Commands
- `npm install` — install dependencies after cloning or whenever lockfiles change.
- `npm run dev` — start the Vite dev server with hot-module reload.
- `npm run build` — create an optimized production bundle in `dist/`.
- `npm run preview` — serve the production build locally for smoke testing.

## Coding Style & Naming Conventions
- Use modern ES modules with explicit named exports for shared helpers.
- Follow the existing 4-space indentation, double quotes for strings, and omit semicolons unless a file already uses them.
- Prefer camelCase for functions/variables and PascalCase for components or classes; keep global flags on `window` clearly prefixed (e.g., `window.engine`).
- Co-locate React UI in `App.jsx`, physics helpers in `matter_base.js`, and shared data under `src/game/` to keep concerns tidy.

## Testing Guidelines
- Automated tests are not yet configured; when adding them, introduce Jest and place specs in a new `tests/` directory mirroring `src/` (e.g., `tests/App.test.jsx`).
- Until automated coverage exists, document manual verification (commands run, browsers checked) in your PR and rerun `npm run dev` after significant changes.
- Strive for dual-path coverage: include both success and failure scenarios when new logic is introduced.

## Commit & Pull Request Guidelines
- Mirror the repository history: short, lower-case, imperative-style summaries (e.g., `migrate ui`, `tune physics`).
- Keep commits narrow in scope, referencing issues with `Refs #123` when relevant and avoiding unrelated file changes.
- PRs should include a clear summary, testing notes, screenshots or GIFs for UI updates, and call out follow-up work or known gaps.

## Suggestions Backlog
- Maintain `SUGGESTIONS.md` broken into Improvements, Nice To Haves, Bug Fixes, Gameplay Suggestions, and Backend Suggestions.
- Keep at least five entries under each heading; when you check one off, backfill a new idea with a fresh uppercase ID (e.g., `IMP-137`).
- When closing an item, tick the box, mention the implementing commit/PR beside it, and cross-link the ID in commit messages (`Refs BUG-320`).
