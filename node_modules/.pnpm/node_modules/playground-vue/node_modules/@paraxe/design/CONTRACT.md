

---

## 1 · Naming Conventions

| Rule | Example |
|---|---|
| CSS custom properties, kebab-case | `--space-4`, `--text-primary` |
| Semantic category prefix | `--space-*`, `--font-*`, `--text-*`, `--surface-*`, `--border-*`, `--motion-*`, `--button-*`, `--card-*`, `--nav-*` |
| Component tokens start with the component name | `--button-primary-bg`, `--card-radius`, `--nav-height` |
| Raw values never used directly in components — always reference the semantic token | components use `--button-primary-bg`, never `--brand-primary` directly for buttons |
| No Loba prefix on tokens (no `--loba-*`) | `--surface-card`, NOT `--loba-surface-card` |

## 2 · Token Layers

```
┌──────────────────────────────────────────────────────────────────┐
│ LAYER 1 — STRUCTURAL (tokens.css)                                │
│ Theme-independent raw + semantic non-color values.               │
│ spacing · typography · motion · radius · shadow · z-index ·      │
│ layout · component structure (radius/padding/height) · focus     │
├──────────────────────────────────────────────────────────────────┤
│ LAYER 2 — COLOR (themes/*.css)                                   │
│ Colors only. Brand family · semantic states · backgrounds ·      │
│ surfaces · text · borders · glass · overlays · focus color ·     │
│ selection · component color tokens                               │
├──────────────────────────────────────────────────────────────────┤
│ LAYER 3 — PERSONALITY (presets/*.css)                            │
│ ~15 variable overrides. Font families · density/radius/motion/   │
│ shadow anchors · component personality (button/card/nav shape)   │
├──────────────────────────────────────────────────────────────────┤
│ LAYER 4 — COMPONENT CLASSES (components.css)                     │
│ Framework-agnostic HTML/CSS component classes (.btn, .card,      │
│ .navbar, .container, .stack, .grid, .badge, forms, animations).  │
│ Consumed by non-@loba/ui projects. @loba/ui uses Vue components  │
│ that read the same tokens directly (no duplicate class layer).   │
└──────────────────────────────────────────────────────────────────┘
```

**Dependency rule:** Layer 2 may reference Layer 1 (`var(--space-4)`).
Layer 3 may reference Layer 1 and Layer 2. Layer 1 references nothing.
Layer 4 (components.css) references Layer 1/2/3 token variables only via
`var(--token)` — it never defines token values.

## 3 · Import / Cascade Order

```css
@import "@loba/design/tokens.css";            /* 1. Structural foundation */
@import "@loba/design/presets/default.css";   /* 2. Personality overrides */
@import "@loba/design/themes/default.css";    /* 3. Colors (consumes tokens) */
@import "@loba/design/components.css";        /* 4. Framework-agnostic component classes (non-@loba/ui) */
```

**Rendering paths (both share the same design system):**

- **`@loba/ui` path** — import the Vue components (`Button`, `Card`, etc.).
  They consume token variables directly. `components.css` is optional.
- **Non-`@loba/ui` path** — render plain HTML/CSS classes (`.btn`, `.card`,
  `.navbar`, `.stack`, `.grid`, forms). Import `@loba/design/components.css`
  so those classes are defined against the same canonical tokens.

Both paths import the same `tokens.css` + `presets/*.css` + `themes/*.css`,
so the look & feel is identical regardless of which path is used.

Optional Tailwind v4 bridge (only when Tailwind is used):

```css
@import "@loba/design/tailwind.css";          /* maps @theme → canonical tokens */
```

## 4 · Theming Model

- **Dark is the default** → declared on `:root`.
- **Light mode** → `[data-theme="light"]` block overrides colors only.
- **Theme file** = one CSS file per palette (e.g., `themes/dark.css`, `themes/forge.css`).
- **Preset file** = one CSS file per personality (e.g., `presets/tech.css`).
- A project **generates** its own `theme.css` / `preset.css` overrides on top of the
  package defaults (brand + background → OKLCH engine). The generated files are
  project-owned and can be edited.

## 5 · Canonical Token Names (v1.0)

### 5.1 Structural — `tokens.css`

**Spacing scale**

```
--space-0 · --space-px · --space-1 · --space-2 · --space-3 · --space-4
--space-5 · --space-6 · --space-7 · --space-8 · --space-9 · --space-10
--space-11 · --space-12 · --space-14 · --space-16 · --space-20 · --space-24
--space-28 · --space-32 · --space-36 · --space-40 · --space-44 · --space-48
--space-52 · --space-56 · --space-60 · --space-64 · --space-72 · --space-80
--space-96
```
*(Integer-only scale. Fractional steps are reserved for Tailwind `@theme` utilities with escaped dots, e.g. `--spacing-0\.5`, and are not part of the canonical `:root` contract.)*

**Spacing roles**

```
--section-spacing · --container-padding · --container-padding-lg
--card-padding · --card-padding-sm · --card-padding-lg
--stack-gap · --stack-gap-sm · --stack-gap-lg
--inline-gap · --inline-gap-sm · --inline-gap-lg
--grid-gap · --grid-gap-sm · --grid-gap-lg
```

**Layout**

```
--container-max-width · --container-narrow · --container-gutter · --container-gutter-lg
--content-width-narrow
```

**Z-index**

```
--z-base · --z-floor · --z-sticky · --z-navbar · --z-dropdown · --z-overlay
--z-modal · --z-popover · --z-tooltip
```

**Typography — families**

```
--font-family-display · --font-family-body · --font-family-mono
```

**Typography — weights**

```
--font-weight-light · --font-weight-regular · --font-weight-medium
--font-weight-semibold · --font-weight-bold · --font-weight-extrabold
```

**Typography — sizes**

```
--font-size-xs · --font-size-sm · --font-size-base · --font-size-lg · --font-size-xl
--font-size-2xl · --font-size-3xl · --font-size-4xl · --font-size-5xl · --font-size-6xl
--font-size-7xl · --font-size-8xl · --font-size-9xl
```

**Typography — line heights**

```
--line-height-tight · --line-height-snug · --line-height-normal
--line-height-relaxed · --line-height-loose
```

**Typography — letter spacing**

```
--letter-spacing-tight · --letter-spacing-normal · --letter-spacing-wide
--letter-spacing-wider · --letter-spacing-widest
```

**Radius**

```
--radius-none · --radius-sm · --radius-base · --radius-md · --radius-lg
--radius-xl · --radius-2xl · --radius-3xl · --radius-full
```

**Shadow**

```
--shadow-sm · --shadow-base · --shadow-md · --shadow-lg · --shadow-xl
--shadow-2xl · --shadow-inner
```

**Motion — durations**

```
--motion-duration-fast · --motion-duration-normal · --motion-duration-slow
--motion-duration-slower · --motion-duration-slowest
```

**Motion — easings**

```
--motion-ease-in · --motion-ease-out · --motion-ease-in-out
--motion-ease-spring · --motion-ease-smooth
```

**Motion — combinators**

```
--motion-fast · --motion-normal · --motion-slow · --motion-slower
--ease-standard · --ease-smooth · --ease-spring
--transition-fast · --transition-normal · --transition-slow
```

**Component structure (non-color)**

```
--button-radius · --button-padding-x · --button-padding-y · --button-gap
--card-radius · --badge-radius · --nav-height · --nav-blur · --glass-blur
--focus-ring-width · --focus-ring-offset
```

### 5.2 Color — `themes/*.css`

**Brand**

```
--brand-primary · --brand-primary-hover · --brand-primary-active
--brand-primary-light · --brand-primary-muted · --brand-glow · --text-on-brand
```

**Semantic states**

```
--color-success · --color-warning · --color-danger · --color-info
```

**Backgrounds & surfaces**

```
--background-primary · --background-secondary
--surface-base · --surface-raised · --surface-card · --surface-hover
```

**Text**

```
--text-primary · --text-secondary · --text-muted · --text-inverse
--text-accent · --text-link · --text-link-hover
```

**Borders**

```
--border-default · --border-strong · --border-subtle · --border-focus
```

**Glass & overlays**

```
--glass-background · --glass-border
--overlay-scrim · --overlay-scrim-strong
```

**Focus & selection (color)**

```
--focus-ring-color · --selection-background · --selection-text
```

**Component colors**

```
--button-primary-bg · --button-primary-text · --button-primary-border
--button-primary-hover-bg · --button-primary-hover-border
--button-primary-active-bg · --button-primary-disabled-bg · --button-primary-disabled-text
--button-secondary-bg · --button-secondary-text · --button-secondary-border
--button-secondary-hover-bg · --button-secondary-hover-border
--button-secondary-active-bg · --button-secondary-disabled-bg
--button-secondary-disabled-text · --button-secondary-disabled-border
--button-ghost-bg · --button-ghost-text · --button-ghost-border
--button-ghost-hover-bg · --button-ghost-hover-border · --button-ghost-active-bg
--button-ghost-disabled-text
--button-outline-bg · --button-outline-text · --button-outline-border
--button-outline-hover-bg · --button-outline-hover-border · --button-outline-active-bg
--button-outline-disabled-text · --button-outline-disabled-border
--button-danger-bg · --button-danger-text · --button-danger-border
--button-danger-hover-bg · --button-danger-hover-border · --button-danger-active-bg
--button-danger-disabled-bg · --button-danger-disabled-text
--card-background · --card-background-hover · --card-border · --card-border-hover
--card-shadow · --card-shadow-hover
--nav-background · --nav-border · --nav-link · --nav-link-hover · --nav-link-active
--nav-link-active-border · --nav-focus-ring
--form-background · --form-border · --form-border-hover · --form-border-focus
--form-text · --form-text-muted · --form-placeholder
--form-bg-disabled · --form-border-disabled · --form-text-disabled
--badge-background · --badge-border · --badge-text
--footer-background · --footer-border · --footer-text · --footer-link · --footer-link-hover
--shadow-elevation-low · --shadow-elevation-medium · --shadow-elevation-high
--shadow-elevation-modal
```

### 5.3 Personality — `presets/*.css`

```
--font-family-display · --font-family-body · --font-family-mono
--font-weight-light · --font-weight-regular · --font-weight-medium
--font-weight-semibold · --font-weight-bold · --font-weight-extrabold
--font-size-base
--space-4                       (density anchor)
--radius-md                     (radius anchor)
--motion-duration-normal        (speed anchor)
--motion-ease-out · --motion-ease-spring
--shadow-elevation-low          (shadow softness anchor)
--glass-blur
--button-radius · --button-padding-x · --button-padding-y
--card-radius · --nav-height
```

## 6 · Ownership Rules

| Owner | Rule |
|---|---|
| **@loba/design** | Defines canonical names + defaults. Adding a name = minor. Renaming/removing = **major**. |
| **@loba/ui** | References canonical names verbatim. Never defines token values. Optional local fallbacks only. |
| **@loba/cli** | Generates project `theme.css`/`preset.css` overrides using canonical names. Never invents names. |
| **Generated project** | May override *values* (theme/preset). May NOT add new canonical names (only project-scoped custom props prefixed `--project-*`). |

## 7 · Sync & Automation Gate

Automation (sync scripts, fallback generators, `loba update`) is **deferred** until this
contract is stable. Changes to this document require a major version bump of `@loba/design`.

npm version minor