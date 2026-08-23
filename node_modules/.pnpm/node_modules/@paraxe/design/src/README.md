# @loba/design

Canonical design tokens, themes, and presets for the Loba ecosystem.
This is the **source of truth** for every token name and default value.

## Import order

```css
@import "@loba/design/tokens.css";            /* 1. Structural (non-color) */
@import "@loba/design/presets/default.css";   /* 2. Personality */
@import "@loba/design/themes/default.css";    /* 3. Colors (dark default) */
@import "@loba/design/themes/light.css";      /* 3b. Optional light theme */
@import "@loba/design/components.css";        /* 4. Framework-agnostic component classes (non-@loba/ui) */
```

## Structure

```
src/
├── tokens.css            # Layer 1 — spacing, typography, motion, radius, z, layout
├── themes/               # Layer 2 — colors only
│   ├── default.css       #   dark default + [data-theme="light"] overrides
│   ├── dark.css          #   deep space blue
│   ├── light.css         #   clean light
│   └── forge.css         #   warm orange/copper
├── presets/              # Layer 3 — personality (~15 vars)
│   ├── default.css       #   Plus Jakarta Sans baseline
│   └── ...               #   tech, corporate, premium, editorial, etc.
├── components.css        # Layer 4 — framework-agnostic classes (.btn, .card, .navbar, .container, .stack, .grid, forms, animations)
├── tailwind.css          # optional Tailwind v4 bridge
└── index.ts              # token manifest + CSS side-effect imports
```

## Rendering paths

- **`@loba/ui` path** — consume the Vue components (`Button`, `Card`, etc.).
  They read canonical token variables directly. Import `@loba/design` token
  layers + `@loba/ui/style.css`. `components.css` is optional here.
- **Non-`@loba/ui` path** — render plain HTML/CSS classes (`.btn`,
  `.card`, `.navbar`, `.stack`, `.container`, forms). Import
  `@loba/design/components.css` so those classes are defined against the
  same canonical tokens. Both paths share the exact same design system.

Both paths import the same `tokens.css` + `presets/*.css` + `themes/*.css`,
so the look & feel is identical regardless of which path is used.

## Design language

The Loba design system is guided by three documents that sit above the tokens:

- **[PHILOSOPHY.md](../PHILOSOPHY.md)** — prescriptive composition principles
  (surfaces by light, accent discipline, typography-led hierarchy, etc.).
- **[STYLE.md](../STYLE.md)** — the `loba-default` design style spec:
  the visual language expressed by the Loba Studios site, defined independently
  so any future site follows the same language without copying the marketing page.
- **[PATTERNS.md](../PATTERNS.md)** — optional recipes (glass surface, section
  rhythm, staggered grids, accent checklist) — each is an option, not a mandate.

## Contract

See [CONTRACT.md](../CONTRACT.md) — FROZEN v1.0. Token renames are breaking changes.

