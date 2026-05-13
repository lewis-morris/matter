# React Architecture Overview

## Entry point
The application boots from [`src/main.jsx`](../src/main.jsx), which creates the root with `ReactDOM.createRoot` and wraps the tree in the shared MUI theme and `GameEngineProvider`. For backward compatibility we expose the Matter helpers on `window` (`window.engine`, `window.create_element`, `window.create_constraint`) so abandoned legacy integrations keep working.

## Game engine integration
`GameEngineProvider` owns the singleton Matter engine, exposing `engineRef`, `setEngine`, `setGoal`, and their cleanup counterparts through context. Components interact with physics through hooks (`usePowerups`, `useScore`, etc.) instead of mutating globals. The provider makes sure old DOM nodes are detached and gravity is reset when the engine stops.

## Hooks directory
Reusable state lives under `src/hooks/`:
- `useInventory` keeps the shop balance and weapon counts.
- `usePowerups` tracks queued and active boosts with refs for imperative Matter calls.
- `useScore` centralises scoring to prevent stale closures.
- `useIsHydrated` guards browser-only behaviour so SSR/hydration mismatches are avoided.

## Matter helpers
`src/matter_base.js` exports:
- `engine` (the `MatterEngine` class)
- `create_element` and `create_constraint` factories used throughout React components
- `DEFAULT_GRAVITY` for consumers that need to reset physics.
The file also caps linear/angular velocity, restores gravity on stop, and drives rope rendering updates.

## Testing configuration
`vite.config.js` includes a shared `test` block that configures Vitest with the jsdom environment and a single setup file (`tests/setupTests.js`). Components and hooks tested via Vitest inherit the same JSX transformation pipeline that Vite uses for production builds.
