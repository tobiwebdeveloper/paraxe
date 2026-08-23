# paraxe Design Philosophy

> **Prescriptive.** These principles describe the visual language any paraxe site
> should follow. The patterns that implement them are optional — documented in
> [`PATTERNS.md`](./PATTERNS.md) and expressed through `@paraxe/design` tokens
> and `@paraxe/ui` components.

---

## 1. Surfaces are separated by light, not colour

A surface should feel like the same material as its background, lifted by how
light hits it — transparency, blur, and a subtle top highlight — never by
switching to a different hue.

**Guidelines:**
- Keep background and surface in the same colour family.
- Use alpha translucency + `backdrop-filter: blur()` for the glass effect.
- A thin `inset top 1px` highlight (white at low alpha) defines the edge.
- Avoid changing hue or introducing a saturated layer just to create separation.

---

## 2. Accent is used intentionally and sparingly

Brand colour is a reward for meaning, not a decorative default. It appears only
where it signals interaction, state, or identity — never as a background filler
or ambient tint.

**Guidelines:**
- Primary CTA, active/focus/hover states, and selection are accent-worthy.
- Current nav link, the eyebrow/overline mark, and small identity touches
  (≤10% alpha card tint) may use accent.
- Everything else — secondary buttons, cards, badges, backgrounds — stays
  neutral (white/black translucency, no brand saturation).
- If you find yourself adding accent "because a surface needs colour," you need
  a different surface approach (see Principle 1).

---

## 3. Typography establishes hierarchy before colour does

Type scale, weight, tracking, and line-height carry the visual hierarchy.
Colour (variants of muted → secondary → primary) refines it — never the
reverse.

**Guidelines:**
- Choose semantic sizes (display, lead, body, caption, overline) that create
  clear contrast without relying on colour.
- The text ladder is alpha-muted white/black, not flat grey — `--text-primary`
  (96% white), `--text-secondary` (78%), `--text-muted` (58%).
- An overline in brand, a display heading in semibold, and a lead paragraph in
  secondary — that's three tiers before any colour change.
- Reserve bold for headings; body weight stays regular or medium.

---

## 4. Layout creates rhythm through contrast, spacing, and composition

A page's rhythm comes from alternating section tones, asymmetric grids,
staggered offsets, and generous spacing — not from repeating identical card
grids. Uniform layouts are reserved for genuinely parallel content.

**Guidelines:**
- Alternate section backgrounds (`transparent` → `raised` → `surface` → `brand`).
- Prefer split rows, staggered offsets, and bento-asymmetric grids.
- A uniform card grid is a considered choice, not the default.
- Let content breathe: `--section-spacing` (6rem), `--stack-gap-lg` (2rem).

---

## 5. Components feel layered and calm, not heavy or noisy

Visual weight comes from stacking translucent surfaces at different depths,
not from strong shadows, thick borders, or saturated fills.

**Guidelines:**
- Cards and panels are translucent white/black with a hairline border
  (1px, 8–14% alpha) and an inset top highlight.
- Shadows are brand-tinted at low alpha (8–18%), never hard black.
- Heavy shadows (`--shadow-2xl`, `--shadow-elevation-modal`) are for modals and
  top-level overlays only.
- Avoid gradients on surfaces unless they're ultra-subtle (≤10% brand).

---

## 6. Every viewport has a clear visual focal point

Each section and each viewport should have one primary element. Everything else
recedes — by size, transparency, spacing, or motion.

**Guidelines:**
- The hero's heading is the focal point; lead text and CTA recede around it.
- A feature grid's first item should be visually heavier (wider span, larger
  icon, bolder title) than the rest.
- Avoid multiple competing elements at the same visual weight.
- Use transparency and spacing to create breathing room around the focal point.

---

## 7. Motion communicates state, hierarchy, and continuity

Motion is a material, not an ornament. It's used for affordance (hover lifts,
overlay reveals) and rhythm (staggered entrance, marquee), but never as a
continuous animation on primary content.

**Guidelines:**
- Hover states: subtle translateY (`-2px`), background shift, border colour
  change — about 200–300ms at ease-smooth.
- Overlays: opacity fade + translateY reveal (about 300ms).
- Entrances: staggered children (about 50ms delay per child) at ease-smooth.
- Marquee/scrolling motion is for decorative strips, not primary information.
- No auto-playing continuous motion on core content (hero, headings, CTAs).

---

## Relationship to the design system

```
PHILOSOPHY.md     — These principles (prescriptive)
     │
     ▼
CONTRACT.md       — Token names (frozen v1.0)
     │
     ▼
tokens.css        — Structural values (spacing, typography, motion, radius)
themes/*.css      — Colour values (brand, surfaces, text, borders)
presets/*.css     — Personality overrides (font families, density)
components.css    — Framework-agnostic component classes
     │
     ▼
@paraxe/vue        — Vue components consuming the tokens
     │
     ▼
PATTERNS.md       — Optional recipes expressing the philosophy
```

The philosophy informs which tokens, components, and patterns are chosen.
No pattern is mandatory — each is an optional way to express one or more
principles.

