# GEMINI_SYNC.md

## Technical State (2026-04-16)
- **Framework**: Vite-based web application with Tailwind CSS.
- **Build System**: Configured with `vite.config.js` for GitHub Pages deployment (base path: `/Unplug/`).
- **Deployment Strategy**: "Root Alignment" — the production build from `dist/` is moved to the project root to satisfy GitHub Pages default serving requirements.
- **Git Status**: All recent build fixes and deployments staged, committed, and pushed to `main`.
- **Environment**: Windows PowerShell environment, using `npm.cmd` for scripts due to execution policy constraints.

## Roadmap Status
- [x] **Mission 0.1**: GitHub Connectivity & Write Access Verified.
- [x] **Mission 4.7**: GitHub Pages Alignment (Moved build output to root).
- [x] **Mission 4.8**: Asset Pathing Fix (Configured `defineConfig` and verified `/Unplug/assets/` resolution).
- [ ] **Current Focus**: Ensuring stable deployment and preparing for potential Android TWA packaging (Bubblewrap).

## Critical Notes
- **WARNING**: The project root `index.html` currently contains the production build. Before running another build, `index.html` must point back to `src/main.js` to avoid resolution errors, or the build process should be automated to handle this flip.
