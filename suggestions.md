# Suggestions Backlog

## Improvements
- [x] IMP-102 — Standardize the start dialog CTAs so “Start Game”, “Open Store”, and “Leaderboard” render at matching sizes and alignment.
- [x] IMP-104 — Relocate the power-up controls into the bottom notification bar with activate/dismiss actions and fading notices.
- [x] IMP-106 — Hide gravity and tether switches behind `GAME_OPTIONS`, applying separate scales for goal and world bodies.
- [ ] IMP-130 — Add keyboard shortcuts for store navigation so players can browse weapons without a mouse.
- [ ] IMP-131 — Surface a lightweight settings drawer that exposes volume and accessibility toggles driven from config.

## Nice To Haves
- [ ] NTH-201 — Create an achievements ribbon that celebrates streak milestones with bespoke art.
- [ ] NTH-202 — Rotate ambient arena backgrounds based on time of day to keep repeat sessions fresh.
- [ ] NTH-203 — Offer a guided tutorial overlay that walks through crate taps and power-ups on first launch.
- [ ] NTH-204 — Ship localized copy for the UI headings, targeting at least FR and ES in a `i18n` bundle.
- [ ] NTH-205 — Add subtle vibration feedback support for mobile taps using the Web Vibration API.

## Bug Fixes
- [x] BUG-304 — Gate the supply-drop cinematic so it fires only once per wave instead of flashing twice.
- [x] BUG-305 — Remove stale gravity slider hooks that crashed the start sequence in the React build.
- [ ] BUG-320 — Investigate crate timers skipping frames on low-end devices and adjust the polling cadence.
- [ ] BUG-321 — Clamp weapon health bars to zero when props despawn to avoid negative percentages.
- [ ] BUG-322 — Harden score submission retries with exponential backoff and clearer error toasts.

## Gameplay Suggestions
- [x] GPL-401 — Add streak-based score multipliers with a zoom-out flash to reward sustained hits.
- [x] IDEA-110 — Spawn timed crate waves that pop with weapon drops, first-aid boosts, and toned-down supply cinematics.
- [ ] GPL-410 — Introduce boss-style hazards in the final 10 seconds that require targeted throws.
- [ ] GPL-411 — Vary crate loot tables by streak tier so high multipliers unlock rarer weapons.
- [ ] GPL-413 — Add a co-op "assist" indicator showing when another player’s power-up affects you (for future multiplayer).

## Backend Suggestions or Code Suggestions
- [x] COD-402 — Refactor Matter.js access behind `usePhysicsEngine` and context ownership to prevent global leaks.
- [x] COD-405 — Split gameplay state into custom hooks (`useInventory`, `usePowerups`, `useScore`) for cleaner components.
- [ ] COD-420 — Add Vitest coverage for crate spawning and multiplier math to catch regressions automatically.
- [ ] COD-421 — Introduce ESLint + Prettier rules aligned with the 4-space, no-semi style documented in `AGENTS.md`.
- [ ] COD-422 — Replace raw fetch calls with a typed client wrapper that centralizes request/response handling.
