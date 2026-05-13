# Legacy Canvas Prototype

This directory archives the original DOM-driven gameplay prototype that lived in `src/main.js` prior to the React/Vite rewrite. The script manipulates the page directly, wiring Matter.js bodies to DOM elements without the modern state containers.

## Running the Prototype

1. Copy `legacy/main.js` back into `src/` (or load it via a simple HTML file) so that it replaces the new React entry point.
2. Ensure the old dependencies (`bootstrap`, `matter-dom-plugin`) remain installed — they are still present in `package.json` for posterity.
3. Open `index.html` (or host the bundle) with the classic Webpack setup if you wish to revisit the original behaviour.

## Notes

- The modern React app does **not** import anything from `legacy/`, so builds remain lean.
- Keep changes to the archived file isolated—if you need to experiment, copy it elsewhere to avoid conflicts with the new UI layer.
