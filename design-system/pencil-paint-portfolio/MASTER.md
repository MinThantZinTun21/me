# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Pencil Paint Portfolio
**Generated:** 2026-09-24
**Category:** Android developer portfolio
**Design Dials:** Variance 7/10 | Motion 5/10 | Density 5/10
**Styles:** #9 Conceptual Sketch + #33 Mixed Media (+ sketch-hand-drawn)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#2D5DA1` | `--color-primary` |
| On Primary | `#FDFBF7` | `--color-on-primary` |
| Secondary | `#C45C26` | `--color-secondary` |
| On Secondary | `#FDFBF7` | `--color-on-secondary` |
| Accent/CTA | `#2D2D2D` | `--color-accent` |
| On Accent/CTA | `#FDFBF7` | `--color-on-accent` |
| Background | `#F7F3EA` | `--color-background` |
| Foreground | `#2D2D2D` | `--color-foreground` |
| Card | `#FFFEFA` | `--color-card` |
| Card Foreground | `#2D2D2D` | `--color-card-foreground` |
| Muted | `#EDE6D9` | `--color-muted` |
| Muted Foreground | `#5C564C` | `--color-muted-foreground` |
| Border | `#2D2D2D` | `--color-border` |
| Destructive | `#B91C1C` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `--color-on-destructive` |
| Ring | `#2D5DA1` | `--color-ring` |
| Wash Blue | `#A8C4E8` | `--color-wash-blue` |
| Wash Coral | `#F0A890` | `--color-wash-coral` |
| Wash Yellow | `#F5E6A3` | `--color-wash-yellow` |
| Pencil | `#2D2D2D` | `--color-pencil` |

**Color Notes:** Catalog **#9 Conceptual Sketch** + **#33 Mixed Media**. Sketch-pad paper, graphite pencil, watercolor washes (blue / coral / yellow). No purple neon, no cyber grid, no Bold Tech mint.

### Typography

- **Heading Font:** Kalam (700)
- **Body Font:** Patrick Hand
- **Mood:** hand-drawn, sketchbook, imperfect, human, artistic
- **Google Fonts:** Kalam + Patrick Hand

### Effects

- Paper grain texture + watercolor wash blobs (decorative, `aria-hidden`)
- Pencil stroke borders (2–3px solid / dashed), wobbly radii
- Slight card tilt (−1° / 1°)
- Hard offset pencil shadow (`4px 4px 0 #2D2D2D`)
- Soft wash drift motion; Pause control (WCAG 2.2.2)
- `prefers-reduced-motion`: static final state

### Layout

- Sketchbook storytelling: Hero → Approach → About → Journey → Work → Craft → Contact
- Brand name as hero-level hand-lettered signal
- Full-bleed paper plane (not inset cards in hero)
- Interaction panels use sketch borders only when needed

### Voice

Warm, craft-forward, sketchbook observations. Facts from resume stay exact — companies, dates, skills, education. No invented links. No salary on the public page.

### Anti-patterns

- Cyber neon, Space Grotesk HUD, scanlines, zero-radius brutal blocks
- Purple gradients, glassmorphism, emoji decoration
