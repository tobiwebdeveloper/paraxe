# Loba Design Patterns

> **Optional recipes** that express the principles in [`PHILOSOPHY.md`](./PHILOSOPHY.md)
> and the [`loba-default`](./STYLE.md) design style. These are *options*, not
> mandates — each fits certain content. No site is required to use all of them.

---

## 1 · Glass surface

A translucent surface lifted by light, not hue.

```css
.glass {
  background: var(--glass-background);        /* translucent fill, same hue */
  border: 1px solid var(--glass-border);       /* hairline, 8–14% alpha      */
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  box-shadow: var(--card-highlight, inset 0 1px 0 0 rgb(255 255 255 / 0.08));
}
```

**Use when:** content scrolls under (nav), floating tiles, overlays.
**Avoid when:** the surface should read as solid content (use `surface-card`).

---

## 2 · Layered surface

Depth by stacking translucent layers, not heavy shadows.

```html
<div class="surface-raised-1">
  <div class="surface-raised-2">
    <!-- inner content -->
  </div>
</div>
```

**Use when:** a panel needs inner structure (comparison tables, pricing).
**Rule:** each layer is a lightness step of the same background.

---

## 3 · Section header

Hierarchy without colour: overline → display heading → lead.

```html
<header class="stack" style="gap: var(--stack-gap-sm); max-width: var(--content-width-narrow);">
  <span class="eyebrow">Services</span>
  <h2 class="heading-lg">What we do</h2>
  <p class="text-secondary text-lg">A lead paragraph that explains, in secondary text.</p>
</header>
```

**Use when:** any section needs a voice.
**Rule:** three tiers before any colour change.

---

## 4 · Section rhythm

Alternate tones + asymmetric layout to create motion between sections.

```
Section 1  hero        → transparent
Section 2  services    → raised      + split/asymmetric
Section 3  showcase    → surface     + staggered/offset
Section 4  process     → transparent + centered column
Section 5  cta         → brand       + panel
```

**Use when:** building a full page.
**Rule:** never two identical grids back-to-back.

---

## 5 · Media tile

Aspect-ratio tile with a subtle gradient placeholder and a hover overlay.

```html
<article class="media-tile">
  <div class="media-tile__media">
    <img src="…" alt="" />
    <div class="media-tile__overlay">
      <div class="media-tile__info">
        <span class="text-xs uppercase tracking-widest text-accent">Category</span>
        <h3 class="heading-sm">Project title</h3>
      </div>
    </div>
  </div>
</article>
```

```css
.media-tile__media { aspect-ratio: 1; position: relative; overflow: hidden;
  background: linear-gradient(135deg, rgb(255 255 255 / 0.04), rgb(255 255 255 / 0.02)); }
.media-tile__overlay { position: absolute; inset: 0; display: flex; align-items: flex-end;
  background: linear-gradient(transparent, rgb(0 0 0 / 0.8)); opacity: 0; transition: opacity 300ms ease; }
.media-tile:hover .media-tile__overlay { opacity: 1; }
.media-tile__info { transform: translateY(8px); transition: transform 300ms ease; padding: var(--space-6); }
.media-tile:hover .media-tile__info { transform: translateY(0); }
```

**Use when:** portfolio, gallery, motion showcase.
**Rule:** tiles are aspect-ratio locked; info reveals on hover, never always-on.

---

## 6 · Staggered / offset grid

Rhythm by offsetting a column, not by adding borders.

```css
.stagger-grid { display: grid; grid-template-columns: repeat(2, 1fr);
  align-items: start; gap: var(--grid-gap-lg); }
.stagger-grid > :nth-child(even) { margin-top: 200px; }
```

**Use when:** a showcase wants editorial rhythm.
**Rule:** the offset column never exceeds ~50% of the row height.

---

## 7 · Split rows (zig-zag)

Alternating content/media rows for features and case studies.

```html
<div class="split-row">
  <div class="split-row__content">…</div>
  <div class="split-row__media">…</div>
</div>
<div class="split-row split-row--flip">
  <div class="split-row__content">…</div>
  <div class="split-row__media">…</div>
</div>
```

```css
.split-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--stack-gap-lg);
  align-items: center; }
.split-row--flip .split-row__content { order: 2; }
.split-row--flip .split-row__media { order: 1; }
```

**Use when:** services, features, case studies with strong media.
**Rule:** keep the ratio honest — `1 / 1` or `5 / 7`, never a cramped split.

---

## 8 · Accent discipline checklist

Brand colour may appear on:

- [ ] Primary CTA
- [ ] Active / hover / focus states
- [ ] Selection
- [ ] Current nav link
- [ ] Eyebrow / overline
- [ ] ≤10% alpha card tint (identity only)

Brand colour must **not** appear on:

- [ ] Secondary / ghost / outline buttons
- [ ] Card backgrounds (unless ≤10% tint)
- [ ] Badges, tags, form controls
- [ ] Borders (unless the element is interactive/hovered)
- [ ] Ambient decorative fills

---

## 9 · Type-scale recipe

| Role | Token | Notes |
|------|-------|-------|
| Display | `--typography-h1-size` / `--typography-h2-size` | semibold, tight leading, `-0.025em` |
| Lead | `--typography-lead-size` | secondary colour, relaxed leading |
| Body | `--typography-body-size` | primary colour, normal leading |
| Caption | `--typography-caption-size` | secondary/muted |
| Overline | `--typography-overline-size` | accent, widest tracking, uppercase |
| Meta | `--typography-caption-size` | muted |

---

## 10 · Motion recipe

```css
/* Entrance — stagger children */
.stagger > * { opacity: 0; animation: fade-in-up 500ms ease forwards; }
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 50ms; }
.stagger > *:nth-child(3) { animation-delay: 100ms; }
/* and so on */

/* Hover — subtle lift */
.card:hover { transform: translateY(-2px);
  box-shadow: var(--card-shadow-hover); transition: transform 250ms ease, box-shadow 250ms ease; }
```

**Rule:** motion is for state, hierarchy, and continuity — never continuous on
primary content.

