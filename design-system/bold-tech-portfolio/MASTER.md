# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Bold Tech Portfolio
**Generated:** 2026-09-24
**Category:** Android developer portfolio
**Design Dials:** Variance 8/10 (Bold / Asymmetric) | Motion 8/10 | Density 7/10
**Styles:** #23 Brutalism + #24 Cybercore (+ #50 Neo-Brutalism weight)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#00E5A8` | `--color-primary` |
| On Primary | `#050505` | `--color-on-primary` |
| Secondary | `#FFEE32` | `--color-secondary` |
| On Secondary | `#050505` | `--color-on-secondary` |
| Accent/CTA | `#3D7EFF` | `--color-accent` |
| On Accent/CTA | `#FAFAFA` | `--color-on-accent` |
| Background | `#050505` | `--color-background` |
| Foreground | `#F2F4F7` | `--color-foreground` |
| Card | `#0E0E10` | `--color-card` |
| Card Foreground | `#F2F4F7` | `--color-card-foreground` |
| Muted | `#16161A` | `--color-muted` |
| Muted Foreground | `#8B93A7` | `--color-muted-foreground` |
| Border | `#2A2F3A` | `--color-border` |
| Destructive | `#FF3B30` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `--color-on-destructive` |
| Ring | `#00E5A8` | `--color-ring` |
| Grid | `#1C222C` | `--color-grid` |
| Signal | `#00E5A8` | `--color-signal` |

**Color Notes:** Catalog **#23 Brutalism** + **#24 Cybercore**. Hard black canvas, signal mint + electric blue + alert yellow. No purple, no soft cream, no zen neutrals.

### Typography

- **Heading Font:** Space Grotesk (700–800)
- **Body Font:** Space Grotesk (400–500)
- **Mono / HUD:** JetBrains Mono
- **Mood:** bold, mechanical, terminal, high contrast, Android-dev tech
- **Google Fonts:** Space Grotesk + JetBrains Mono

### Spacing

Density 7 — tighter than zen. Section padding `py-16` / `py-24`. Hero full viewport.

### Effects

- `border-radius: 0`
- Borders `2–3px` solid / hard offset shadows (`4px 4px 0`)
- Instant or snap transitions (≤150ms), hard stagger reveals
- Visible grid + scanline atmosphere (decorative, `aria-hidden`)
- Pause motion control (WCAG 2.2.2)
- `prefers-reduced-motion`: static final state

### Layout

- Full-width desktop storytelling (not mobile-app shell)
- Hero: brand name dominant, one line, one CTA group, full-bleed grid plane
- No soft cards in hero; interaction blocks use hard-border panels only when needed
- Section order: Hero → Systems (approach) → About → Journey → Work → Stack → Contact

### Anti-patterns

- Soft glass blur, serif calm typography, mist/Flow cat Remotion
- Purple gradients, cream Japandi, rounded-full pills as default
- Hidden work / vague soft copy

---

## Voice

Short, assertive, shipping-focused. Prefer verbs: ship, build, own, harden. Avoid “quiet / soft / calm / ma”.
