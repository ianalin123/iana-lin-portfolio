# Iana Lin Portfolio — Design Brainstorm

## Context
Iana Lin is an EECS student at UC Berkeley focused on neural networks, creative computation, and building bridges between science and story. The new site needs a **cream and red** color theme, **more animations**, and **subtle slime animations** in the background (constant or on scroll).

---

<response>
<text>

## Idea 1: "Organic Biomechanics" — Biological Futurism

**Design Movement:** Bio-organic futurism meets editorial print design. Inspired by the visual language of scientific illustration plates, anatomical drawings, and the organic forms found in microscopy — all filtered through a warm, tactile lens.

**Core Principles:**
1. **Organic tension** — Juxtapose rigid typographic grids with fluid, amorphous slime shapes that feel alive
2. **Warm materiality** — Everything should feel like it has physical weight: paper-like textures, ink-like reds, wax-like cream
3. **Controlled chaos** — Animations are purposeful but feel slightly unpredictable, like watching cells divide under a microscope
4. **Layered depth** — Multiple z-layers of content, slime, and texture create parallax-like richness

**Color Philosophy:**
- **Cream (#F5F0E8)** as the primary canvas — warm, aged parchment feel, not sterile white
- **Deep Crimson (#B91C1C)** as the primary accent — rich, arterial, scientific
- **Soft Rose (#E8B4B8)** for secondary highlights — gentle, biological warmth
- **Charcoal (#2D2A26)** for text — warm black that doesn't fight the cream
- **Translucent Red (rgba(185, 28, 28, 0.08))** for slime overlays

**Layout Paradigm:** Asymmetric editorial layout with a strong left-weighted reading axis. Content blocks are arranged like specimens on a lab table — intentionally placed but with organic spacing. The slime elements break grid boundaries, creating visual bridges between sections.

**Signature Elements:**
1. **Slime blobs** — SVG-based amorphous shapes with perlin noise displacement that slowly morph and drift. They sit behind content at low opacity, occasionally "dripping" between sections on scroll.
2. **Ink-bleed borders** — Section dividers that look like ink spreading on wet paper, animated on scroll reveal.
3. **Specimen cards** — Project/section cards with rounded organic corners and subtle paper texture, as if pinned to a corkboard.

**Interaction Philosophy:** Hover states feel biological — elements "breathe" (subtle scale pulse), slime blobs react to cursor proximity by slightly deforming toward the mouse. Clicks produce a satisfying "ink splash" micro-animation.

**Animation:**
- Slime background: Continuous SVG morphing using CSS `@keyframes` with multiple timing functions layered. Blobs use `filter: url(#goo)` SVG filter for that liquid merging effect.
- Scroll-triggered: Sections fade-and-rise with staggered delays. Slime drips accelerate as user scrolls faster.
- Hover: Cards lift with box-shadow expansion + slight rotation. Text links get an underline that "bleeds" outward.
- Page load: Slime blobs "pour" in from top, settling into their resting positions over 2-3 seconds.

**Typography System:**
- **Display:** "Playfair Display" (serif) — elegant, editorial, high contrast strokes
- **Body:** "DM Sans" — geometric, clean, modern readability
- **Mono/Code:** "JetBrains Mono" — for the technical/code snippets
- Hierarchy: Display at 4-5rem for hero, 2rem for section heads, 1rem body with generous 1.7 line-height

</text>
<probability>0.08</probability>
</response>

---

<response>
<text>

## Idea 2: "Viscous Brutalism" — Raw Digital Materiality

**Design Movement:** Neo-brutalist web design fused with liquid/viscous aesthetics. Think of the rawness of exposed concrete meeting the organic unpredictability of non-Newtonian fluids. Inspired by Zaha Hadid's fluid architecture and the raw energy of punk zine layouts.

**Core Principles:**
1. **Unapologetic presence** — Large type, bold reds, elements that demand attention
2. **Viscous motion** — Everything moves like it's suspended in thick liquid: slow, heavy, satisfying
3. **Raw honesty** — Visible structure (borders, grids), no pretense of minimalism
4. **Tactile friction** — Interactions feel like dragging through honey, with resistance and weight

**Color Philosophy:**
- **Warm Ivory (#FAF6F0)** — Slightly yellowed, like aged concrete in warm light
- **Signal Red (#DC2626)** — Aggressive, unapologetic, the color of warning labels and passion
- **Burnt Sienna (#A0522D)** for warm tertiary accents
- **Near-Black (#1A1714)** — Warm, dense, like dried ink
- Slime uses semi-transparent reds and creams that blend where they overlap

**Layout Paradigm:** Overlapping grid with intentional collisions. Elements are placed on a strict 12-column grid but are allowed to overflow their cells, creating overlaps. The slime acts as a connective tissue between these overlapping elements. Navigation is a persistent vertical strip on the left side.

**Signature Elements:**
1. **Goo filter canvas** — A full-page SVG canvas with the gooey filter applied, where red and cream blobs continuously merge, split, and reform. This sits as a fixed background layer.
2. **Thick borders** — 3-4px borders on everything, in red or charcoal, giving a brutalist "boxed" feel that contrasts with the fluid slime.
3. **Stamped labels** — Section titles rendered as if rubber-stamped: slightly rotated, with ink texture, in all-caps.

**Interaction Philosophy:** Heavy and deliberate. Hover states are slow transitions (400-600ms). Scroll animations have momentum and overshoot. The slime in the background responds to scroll velocity — faster scrolling makes blobs stretch and deform more aggressively.

**Animation:**
- Slime background: Canvas-based (or heavy SVG) metaball simulation. Blobs are attracted to each other and merge using threshold filtering. Constant slow drift with scroll-velocity modulation.
- Scroll-triggered: Elements slide in from unexpected directions (not just bottom-up). Heavy easing curves (cubic-bezier with overshoot). Stagger delays of 100-200ms between siblings.
- Hover: Elements "sink" slightly (translateY + shadow reduction) as if pressed into viscous material.
- Text: Characters animate individually on reveal, each with slight random delay, like letters being stamped one by one.

**Typography System:**
- **Display:** "Space Grotesk" — geometric, bold, slightly quirky character shapes
- **Body:** "Work Sans" — clean, neutral, doesn't compete with display
- **Mono:** "Fira Code" — for technical content, ligatures enabled
- Hierarchy: Display at 5-6rem (oversized, cropped), section heads at 2.5rem with letter-spacing: -0.02em, body at 1.05rem

</text>
<probability>0.06</probability>
</response>

---

<response>
<text>

## Idea 3: "Liquid Wabi-Sabi" — Imperfect Organic Elegance

**Design Movement:** Japanese wabi-sabi aesthetics (beauty in imperfection) merged with liquid morphism. Inspired by the way water moves through rice paper, how ink bleeds in sumi-e painting, and the gentle imperfection of handmade ceramics — all translated into a digital cream-and-red palette.

**Core Principles:**
1. **Imperfect beauty** — Nothing is perfectly aligned; subtle offsets, organic shapes, and hand-drawn qualities
2. **Quiet motion** — Animations are slow, meditative, like watching lava lamps or ink in water
3. **Negative space as content** — Generous whitespace (cream-space) that breathes and gives weight to what's present
4. **Layered translucency** — Multiple semi-transparent layers create depth through overlap, not shadow

**Color Philosophy:**
- **Rice Paper (#F7F3EC)** — The warmest cream, with a hint of yellow-pink, like handmade Japanese paper
- **Vermillion (#C53030)** — Traditional Japanese red (shu-iro), warm and earthy rather than electric
- **Blush (#F0D9D5)** — Diluted vermillion, like watercolor washed once
- **Sumi Ink (#3D3530)** — Warm dark brown-black, like traditional ink
- **Translucent slime layers** use vermillion at 5-12% opacity, creating a watercolor wash effect

**Layout Paradigm:** Flowing vertical scroll with generous breathing room. Content is arranged along a slightly off-center vertical axis (55% left, 45% right), creating a natural reading flow that isn't rigidly centered. Sections are separated by vast cream expanses where slime animations live and breathe. No hard grid — elements are placed with intentional organic spacing.

**Signature Elements:**
1. **Ink-in-water slime** — Slime animations that look like drops of red ink slowly diffusing in water. They bloom on scroll, expand when sections enter view, and slowly dissipate. Uses SVG turbulence filters with animated seed values.
2. **Brush-stroke accents** — Decorative elements that look like single calligraphy brush strokes, used as underlines, dividers, and hover effects. Animated to "paint" themselves on scroll.
3. **Ceramic cards** — Content cards with very subtle, irregular border-radius (using CSS `border-radius` with 8 values) and a matte cream surface with the faintest grain texture.

**Interaction Philosophy:** Gentle and contemplative. Hover states are slow blooms (500ms+). Nothing snaps or bounces — everything eases in and out like breathing. The slime responds to scroll position, not velocity, creating a meditative parallax effect. Cursor proximity causes nearby slime to gently part, like moving your hand through still water.

**Animation:**
- Slime background: SVG `feTurbulence` + `feDisplacementMap` creating organic, slowly evolving noise patterns in red tones. The turbulence `baseFrequency` and `seed` are animated via JS requestAnimationFrame for smooth, continuous morphing. On scroll, new "ink drops" bloom at section boundaries.
- Scroll-triggered: Elements fade in with very long durations (800-1200ms) and gentle translateY (20-30px only). Opacity transitions are the primary reveal mechanism. Stagger delays of 150-250ms.
- Hover: Elements gain a warm glow (box-shadow in blush tone) and text slightly increases letter-spacing, as if breathing out.
- Page load: A single large ink bloom starts from center and slowly expands to fill the background, then settles into the ambient slime pattern (3-4 second intro).

**Typography System:**
- **Display:** "Cormorant Garamond" — refined serif with calligraphic qualities, high stroke contrast
- **Body:** "Karla" — humanist sans-serif, warm and approachable
- **Mono:** "IBM Plex Mono" — clean, slightly warm mono for code
- Hierarchy: Display at 3.5-4.5rem with tight letter-spacing (-0.03em), section heads at 1.8rem, body at 1rem with 1.8 line-height for maximum readability in cream-on-cream contexts

</text>
<probability>0.07</probability>
</response>
