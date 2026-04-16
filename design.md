# Design System Strategy: The Tactile Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Tactile Sanctuary."** 

Digital wellness shouldn't feel like a digital prison; it should feel like a retreat. This system avoids the clinical "productivity" look in favor of an organic, grounded aesthetic. We use soft shadows, large touch targets, and earthen tones to make the interface feel less like a screen and more like a physical object.

## 2. Design Tokens (Earthen Stillness)

### Colors
- **Primary (Sage):** `#8A9A5B` — Used for primary actions and active states. Evokes nature and tranquility.
- **Surface (Bone):** `#FAF9F6` — The primary background. Soft on the eyes, reducing glare.
- **On-Surface (Charcoal):** `#2E342D` — High contrast for legibility but slightly desaturated to avoid the harshness of pure black.
- **Accent (Sand):** `#DEE4DA` — Used for secondary containers and subtle highlights.

### Typography
- **Primary Font:** `Manrope`
- **Headlines:** Semi-bold, tight tracking (`-0.02em`), designed to feel sturdy and intentional.
- **Body:** Regular weight, increased line-height (`1.6`) to promote a relaxed reading pace.

### Shape & Geometry
- **Corner Radius:** `9999px` (Full Roundness). Everything follows a pill or circular logic to eliminate "sharp" digital edges.
- **Spacing Scale:** Based on an `8px` grid, but with generous padding to ensure elements never feel crowded.

## 3. System Rules & Principles

### Motion & Interaction
- **Deliberate Pacing:** Transitions should use `cubic-bezier(0.4, 0, 0.2, 1)` with a duration of `500ms`. Movement should feel "weighted," like moving through water, not "snappy" like a computer.
- **Haptic Logic:** Buttons should visually depress slightly (`scale(0.98)`) to mimic physical tactility.

### Layout Philosophy
- **Negative Space as a Feature:** Whitespace is not empty; it is "breathing room." Use it aggressively to separate concepts and reduce cognitive load.
- **Center-Focused:** Primary interactions (like the timer dial) should be centered to ground the user's attention.

### Accessibility
- **Contrast:** Maintain a minimum contrast ratio of 4.5:1 for all functional text.
- **Touch Targets:** All interactive elements must be at least `48px` in height/width to accommodate all users comfortably.
