# Unplug Web App Implementation Plan

We will build the 4-screen SPA using Vite, Vanilla JavaScript, and Tailwind CSS. The app will transition between UI states to achieve the requested visual aesthetic and flow.

## Proposed Changes

### 1. Tailwind Configuration
#### [MODIFY] tailwind.config.js
- Set the exact colors as design tokens: Primary (#4C6545), Surface (#FAF9F5), and Surface-Container (#F3F4EE).
- Setup the custom fonts: `Manrope` for headings and `Inter` for body copy.
- Add path mappings for Tailwind to detect classes in `index.html` and `src/**/*.js`.

### 2. Styling Foundation
#### [MODIFY] src/style.css
- Add Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
- Add custom utility classes for the "500ms ease-in-out drift" transitions for screens: `.screen` and `.screen.active`.

### 3. Application Structure
#### [MODIFY] index.html
- Import web fonts (Google Fonts: Inter & Manrope) in the `<head>`.
- Restructure the `#app` container to hold 4 distinct `<section>` blocks (one for each screen).
- Set background colors globally avoiding borders.

### 4. Application Logic and Views
#### [MODIFY] src/main.js
- Implement a simple state machine / routing system using DOM manipulation to toggle the active screen classes.
- **Screen 1 (Onboarding)**: Large heading, negative space, simple CTA.
- **Screen 2 (Timer)**: Implement a Javascript-driven SVG interactive/visual circular dial.
- **Screen 3 (Active Session)**: Dynamically inject a `.dark` or inverted mode to apply glassmorphism (`backdrop-blur`) over the inverted palette.
- **Screen 4 (Summary)**: 1:2 CSS grid layout utilizing background tonal shifts for block separation.

## Design Rules Applied
- **Typography:** Manrope logic applied via Tailwind (`font-heading`), Inter for body (`font-sans`).
- **Separators:** Absolute restriction on borders (`border-w-something`); usage of margin/padding alongside `bg-surface` and `bg-surfaceContainer` colors.
- **Motion:** Global `.drift` animation for entering/exiting views (moving slightly while fading in).

## User Review Required

> [!IMPORTANT]  
> **Dial Implementation**: A fully draggable custom SVG circular dial in Vanilla JS requires significant math and logic. Our initial implementation will provide a visually tactile SVG ring that registers clicks across discrete time zones (or features a simplified click-drag approach). Please confirm if this approach is suitable.

## Verification Plan

### Automated Tests
- Run `npm run dev` to preview the vite server locally.
- Verify screen flow triggers accurately in console.

### Manual Verification
- Visual inspection of transitions to ensure the 500ms drift is smooth.
- Checking contrast and glassmorphism behavior on Screen 3.
- Verifying NO borders exist across all UI states within DevTools.
