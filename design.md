# Design System Strategy: The Tactile Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Tactile Sanctuary."** 

To move beyond the generic "Zen" aesthetic, we are treating the digital interface as a physical environment crafted from natural materials—sand, stone, and leaf. We reject the rigid, boxy constraints of traditional SaaS templates in favor of an **Editorial Layout philosophy**. This means using intentional asymmetry, generous oversized margins (negative space as a luxury), and a typography scale that favors dramatic contrast. The goal is not just to be "minimal," but to be "grounding." Every element should feel as though it has settled naturally onto the screen, rather than being forced into a grid.

## 2. Colors & Tonal Texture
Our palette is a curated selection of earth-derived tones. The color strategy focuses on low-vibration harmony to reduce cognitive load.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. Structural integrity must be achieved through:
*   **Background Shifts:** Using `surface-container-low` (#f3f4ee) for secondary information sitting on a `surface` (#fafaf5) base.
*   **Tonal Transitions:** Defining the edge of a section through the soft transition between `surface-container` and `surface-container-high`.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, organic layers. Use the `surface-container` tiers (Lowest to Highest) to create "nested" importance:
*   **Base:** `surface` (#fafaf5) for the main viewport.
*   **Level 1 (Nesting):** `surface-container-low` (#f3f4ee) for subtle content grouping.
*   **Level 2 (Interaction):** `surface-container-highest` (#dee4da) for elevated interactive cards.

### The "Glass & Gradient" Rule
To add soul to the interface, avoid flat-only color applications:
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface` (#fafaf5) at 70% opacity with a 20px-40px backdrop-blur. This allows the grounding earth tones to bleed through.
*   **Signature Textures:** For high-impact CTAs or Hero sections, apply a subtle linear gradient from `primary` (#4c6545) to `primary-container` (#ceebc2). This mimics the natural variegation of a leaf.

## 3. Typography
We utilize a dual-typeface system to bridge the gap between human warmth and digital precision.

*   **Display & Headline (Manrope):** Chosen for its geometric yet approachable skeleton. Use `display-lg` (3.5rem) with tightened letter-spacing to create an authoritative, editorial "cover-page" feel.
*   **Body & Labels (Inter):** Chosen for its exceptional legibility. `body-lg` (1rem) should be used for all long-form reflection text, ensuring a comfortable reading rhythm.

**Hierarchy Strategy:** Create high-contrast pairings. A `label-sm` (0.6875rem) uppercase tag in `on-surface-variant` (#5b6159) paired with a `headline-md` (1.75rem) title creates a sophisticated, premium layout that guides the eye without effort.

## 4. Elevation & Depth
In this design system, depth is a feeling, not a shadow. We abandon traditional "drop shadows" for **Tonal Layering**.

*   **The Layering Principle:** Stacking layers creates natural depth. For example, a `surface-container-lowest` (#ffffff) card placed on a `surface-dim` (#d5dcd0) background provides enough contrast to imply elevation without a single shadow pixel.
*   **Ambient Shadows:** If an element must "float" (like a primary action button), use an extra-diffused shadow. 
    *   *Blur:* 32px | *Spread:* 0 | *Color:* `on-surface` (#2e342d) at 4% opacity. 
    *   This mimics natural, diffused sunlight rather than a harsh artificial light source.
*   **The Ghost Border Fallback:** Where accessibility requires a container edge (e.g., input fields), use a "Ghost Border": the `outline-variant` (#aeb4aa) token at 20% opacity. Never use 100% opaque lines.

## 5. Components

### Buttons
*   **Primary:** Uses the `xl` (3rem) roundedness. Background is the `primary` to `primary-container` gradient. Text is `on-primary` (#e6ffda).
*   **Secondary:** Uses `surface-container-high` (#e5eae0) with `on-secondary-container` (#5e4f40) text. No border.
*   **Interaction:** On hover/tap, the color should shift slightly toward its `dim` variant (e.g., `primary` to `primary-dim`) rather than using a "glow" or "lift" effect.

### Cards & Lists
*   **Card Styling:** Forbid the use of divider lines. Instead, use the `DEFAULT` (1rem) or `lg` (2rem) roundedness scale. 
*   **Spacing as Separation:** Use the Spacing Scale to create massive vertical gaps (e.g., 4rem between modules) to let the content breathe.

### Input Fields
*   **Form Factor:** Use `md` (1.5rem) roundedness. 
*   **States:** The "Active" state is indicated by a background shift to `surface-container-lowest` and a subtle "Ghost Border," rather than a high-contrast color change.

### Specialized Components for Well-being
*   **The Breath Ring:** A glassmorphic circular container (`full` roundedness) using `surface-variant` with a backdrop-blur. 
*   **Reflection Prompts:** Asymmetric layouts where the text is aligned to the right-third of the screen, leaving the left two-thirds as "meditative white space."

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Place images or text off-center to create a sense of organic growth.
*   **Prioritize Negative Space:** If a screen feels "busy," increase the vertical padding by 50%.
*   **Use Tonal Shifts:** Rely on the `surface-container` tokens to organize information.

### Don't:
*   **No Hard Lines:** Never use a 100% opaque 1px border.
*   **No High-Frequency Motion:** Avoid "snappy" or "bouncy" animations. Transitions should be slow, linear fades or gentle drifts.
*   **No Pure Black:** Ensure all "dark" elements use `on-surface` (#2e342d) or `inverse_surface` (#0d0f0c) to maintain the soft, earthy feel.
*   **No Centered Grids:** Avoid the "bootstrap" look where every column is perfectly equal. Use the "Editorial" lens—one wide column, one narrow.