# paraxe Design Style — `Paraxe-default`

> **The default paraxe design style**: a calm, layered, light-driven interface
> with restrained contrast, a single reserved accent, and typography-led
> hierarchy. This is the visual language the Paraxe Studios site demonstrates —
> but it is defined **independently** of that site, so any future Loba site
> can express the same language without copying a specific marketing page.

> **Scope.** This is intentionally the *only* style defined today. Future
> styles (Glass-forward, Minimal, Editorial, Soft UI, …) would be documented
> as siblings of this file. Multi-style support is out of scope until
> `Paraxe-default` is mature.

---

## 1 · Identity

| Attribute | Value |
|-----------|-------|
| Name | `paraxe-default` |
| Category | Calm / layered / light-driven |
| Mood | Premium, understated, confident |
| Light/dark | Dark is default; light is a first-class override |
| Colour count | Near-monochrome + one accent |
| Type | Display + body may share a family; hierarchy via scale/weight |
| Radius | Rounded but restrained (pills reserved for small elements) |

---

## 2 · Surface separation

Surfaces are separated by **light, transparency, and depth** — never by hue.

- A surface stays in the same colour family as its background and is lifted by:
  - **translucency** — `color-mix()` toward white/black at low alpha;
  - **blur** — `backdrop-filter: blur()` for floating / overlay surfaces;
  - **a hairline border** — 1px at 8–14% alpha;
  - **a top highlight** — `inset 0 1px 0 0` white at low alpha.
- Surface ladder (dark): `base → raised-1 → raised-2 → raised-3` are
  lightness steps of the background, not new hues.
- **Glass surfaces** (`--surface-glass`, `--glass-background`) are translucent
  fills + blur; use them where content scrolls beneath (nav, floating tiles,
  overlays).
- **Flat surfaces** (no fill, type directly on the background) are valid for
  typographic moments — the `Card` `flat` variant.

**Rule of thumb:** if you need a new hue to separate a layer, restructure the
layer instead.

---

## 3 · Depth

Depth is **layered**, not dropped.

- Elevation = stacking translucent layers + an inset highlight.
- Shadows are brand-tinted at low alpha (8–18%) and soft; hard or opaque
  shadows (`--shadow-2xl`, `--shadow-elevation-modal`) are reserved for modals
  and top-level overlays.
- Separation comes from the hairline + highlight, not from border weight.

---

## 4 · Contrast

Contrast is **restrained** and typography-driven.

- Text ladder is alpha-muted white/black — never flat grey:
  - `--text-primary`   ≈ 96% white
  - `--text-secondary` ≈ 78% white
  - `--text-muted`     ≈ 58% white
- Background is near-black (dark) or near-white (light); surfaces are subtle
  lightness steps.
- Accent (brand) is used at ≤10% alpha for identity tints; full-strength brand
  only for primary CTA, focus, selection, active/hover.
- Semantic colours appear only as muted tints, never full-strength fills.

---

## 5 · Motion philosophy

Motion communicates **state, hierarchy, and continuity** — never for its own sake.

| Use | Behaviour |
|-----|-----------|
| Hover | subtle lift (`translateY(-2px)`), background shift, border tint — 200–300ms, ease-smooth |
| Overlay reveal | opacity fade + `translateY` reveal — ~300ms |
| Entrance | staggered children (~50ms delay each), ease-smooth |
| Marquee / strip | decorative only; pause on hover |
| Primary content | no continuous auto-animation |

Token anchors: `--motion-duration-fast` (150ms), `--motion-duration-normal`
(300ms), `--motion-ease-smooth`, `--ease-spring` (small scale-ins only).

---

## 6 · Layout philosophy

Layout creates **rhythm through contrast, spacing, and composition**.

- Alternate section tones: `transparent → raised → surface → brand`.
- Prefer split rows, staggered offsets, and bento/asymmetric grids.
- Uniform card grids are the exception, reserved for genuinely parallel content.
- Breathing room: `--section-spacing` (6rem), `--stack-gap-lg` (2rem),
  `--container-max-width` (1280px) with generous gutters.
- One focal point per viewport; everything else recedes.

---

## 7 · Visual hierarchy

Hierarchy is **typography-first**.

- Semantic scale: **overline** (12px, widest tracking) → **display heading**
  (semibold, tight leading/tracking) → **lead** (22px) → **body** (16px) →
  **caption** (14px) → **meta** (12px).
- An overline in accent + a display heading + a lead in secondary = three
  tiers of hierarchy before any colour change.
- Bold is reserved for headings; body is regular/medium.
- `text-wrap: balance` for headings, `text-pretty` for paragraphs.

---

## 8 · Atmosphere

Calm, layered, premium. Dark space with light sculpting the surfaces; one
accent drawing the eye to meaning; type carrying the voice.

**Avoid:** saturated fills, heavy borders, hard shadows, flat grey text,
accent-as-decoration, and busy repeating grids.

---

## 9 · Token mapping

| Style concern | Canonical tokens |
|---------------|------------------|
| Surface ladder | `--surface-base`, `--surface-raised`, `--surface-card`, `--surface-hover` (+ `--surface-elevated-1/2/3`) |
| Glass | `--glass-background`, `--glass-border`, `--glass-blur`, `--surface-glass`, `--surface-glass-strong` |
| Top highlight | `--card-highlight` / `--card-highlight-inset` |
| Text ladder | `--text-primary`, `--text-secondary`, `--text-muted`, `--text-inverse` |
| Accent discipline | `--brand-primary`, `--text-accent`, `--button-primary-*`, `--focus-ring-color`, `--selection-*` |
| Semantic type | `--typography-h1-size`, `--typography-lead-size`, `--typography-overline-size`, … |
| Motion | `--motion-duration-fast/normal/slow`, `--motion-ease-smooth/spring`, `--transition-*` |
| Layout | `--section-spacing`, `--stack-gap-lg`, `--grid-gap`, `--container-max-width` |

---

## 10 · Relationship to themes / presets / components

- **Themes** supply the colour values this style expects (alpha-muted text,
  translucent surfaces, brand tint at low alpha).
- **Presets** adjust personality (fonts, density, radius) within the style's
  tolerance — a preset must not violate the style's contrast or accent rules.
- **Components** (`@paraxe/ui`) implement the style's defaults (glass `Card`
  variant, semantic type steps, asymmetric layouts).
- **PATTERNS.md** documents optional recipes — no site is required to use
  every pattern.

---

*Future: additional design styles (Glass-forward, Minimal, Editorial, Soft UI)
would be documented as siblings of this file. Until then, `paraxe-default` is the
canonical style.*

