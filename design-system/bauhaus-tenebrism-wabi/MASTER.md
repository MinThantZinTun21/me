# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Bauhaus Tenebrism Wabi
**Generated:** 2026-09-24 10:44:35
**Category:** General
**Design Dials:** Variance 8/10 (Bold / Asymmetric) | Motion 8/10 (Complex) | Density 4/10 (Standard)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#F0C020` | `--color-primary` |
| On Primary | `#0A0A0A` | `--color-on-primary` |
| Secondary | `#1040C0` | `--color-secondary` |
| On Secondary | `#F5F5F0` | `--color-on-secondary` |
| Accent/CTA | `#D02020` | `--color-accent` |
| On Accent/CTA | `#F5F5F0` | `--color-on-accent` |
| Background | `#0A0A0A` | `--color-background` |
| Foreground | `#E8E4DC` | `--color-foreground` |
| Card | `#141412` | `--color-card` |
| Card Foreground | `#E8E4DC` | `--color-card-foreground` |
| Muted | `#1A1916` | `--color-muted` |
| Muted Foreground | `#8A8680` | `--color-muted-foreground` |
| Border | `#2A2824` | `--color-border` |
| Destructive | `#D02020` | `--color-destructive` |
| On Destructive | `#F5F5F0` | `--color-on-destructive` |
| Ring | `#F0C020` | `--color-ring` |
| Bauhaus Red | `#D02020` | `--color-bh-red` |
| Bauhaus Blue | `#1040C0` | `--color-bh-blue` |
| Bauhaus Yellow | `#F0C020` | `--color-bh-yellow` |

**Color Notes:** Fusion override — Bauhaus primaries (DB `bauhaus`) as blocks; Tenebrism void `#0A0A0A` + yellow chiaroscuro; Wabi warm grey text + grain (not pure white).

### Typography

- **Heading Font:** Outfit
- **Body Font:** Outfit
- **Mood:** bauhaus, geometric, constructivist, bold, uppercase, architectural, mechanical, poster, tactile
- **Google Fonts:** [Outfit + Outfit](https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap');
```

**Motion research:** Geometric assemble + pin scrub + grid stagger (`back.out`). Mechanical press CTAs. Reduced-motion final state.

**Layout:** Asymmetric Bauhaus composition, hard shadows, 0 radius, single light pool hero.
### Spacing Variables

*Density: 4/10 — Standard*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #2563EB;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #18181B;
  border: 2px solid #18181B;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FAFAFA;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #18181B;
  outline: none;
  box-shadow: 0 0 0 3px #18181B20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Brutalism

**Keywords:** Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, asymmetric, anti-design

**Best For:** Design portfolios, artistic projects, counter-culture brands, editorial/media sites, tech blogs

**Key Effects:** No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks

### Page Pattern

**Pattern Name:** Hero + Features + CTA

- **Conversion Strategy:** Deep CTA placement. For CTA label text, verify at least 4.5:1 against the button fill; use 7:1 only when the product explicitly targets AAA normal-text contrast. Keep focus and component boundaries independently visible. Disable hero parallax under reduced motion and render its static final state.
- **CTA Placement:** Hero (sticky) + Bottom
- **Section Order:** Hero with headline/image > Value prop > Key features (3-5) > CTA section > Footer

---

## Motion

**Page Transition** (Complex) — Trigger: route change | Duration: 500-800ms | Easing: `expo.inOut`

```js
const state = Flip.getState('.hero-image'); navigate(); Flip.from(state, { duration: 0.6, ease: 'expo.inOut', absolute: true, zIndex: 100 });
```

**Framework notes:** Requires the GSAP Flip plugin; the 'from' and 'to' route must render the same element with a shared data-flip-id; Use matchMedia('(prefers-reduced-motion: reduce)') to skip non-essential motion and render the final state immediately

- ✅ Verify the shared element exists in both DOM states before calling Flip.from to avoid a silent no-op
- ❌ Don't use shared-element transitions across more than one element pair per navigation; compounding Flips are hard to time correctly
- ⚡ Flip recalculates layout (FLIP technique) so test on low-end devices for jank

---

## Anti-Patterns (Do NOT Use)


### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
