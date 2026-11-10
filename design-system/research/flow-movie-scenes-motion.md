# Flow (2024) scene motifs → decorative motion

**Scope:** Motif extraction for Minimal Zen portfolio Remotion background (`remotion/FlowEnvironment.tsx`).  
**Film:** *Flow* (2024), directed by Gints Zilbalodis — dialogue-free animated feature about a cat surviving a worldwide flood.  
**Rule:** Do **not** copy copyrighted frames, character designs, or audio. Translate plot/production descriptions into **generic visual motifs** only.  
**Date:** 2026-09-24

---

## Primary sources

| Claim area | Source |
|------------|--------|
| Plot beats (flood, cabin/statue, sailboat, submerged forest/city, stone pillars, storm, water draining) | [Wikipedia — *Flow* (2024 film), Plot](https://en.wikipedia.org/wiki/Flow_(2024_film)) via MediaWiki API wikitext |
| Film identity / director / festival premiere | Same article lead / infobox (Cannes 2024 premiere noted in Wikipedia film data) |
| Remotion looping layers | [Remotion `<Loop>`](https://www.remotion.dev/docs/loop) |
| Remotion frame-driven motion | [Remotion markup practices](https://www.remotion.dev/docs) — `useCurrentFrame` / `interpolate`; no CSS transitions in compositions |
| Decorative a11y + pause | [WCAG 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html); [MDN `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion); [MDN `aria-hidden`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) |
| Style dials (organic / biophilic motion language) | ui-ux-pro-max `organic-biophilic` style + reduced-motion UX guidelines |

---

## Motifs extracted (not frames)

From the Wikipedia plot summary, reusable **environment / motion** motifs:

1. **Flooded world / rising water** — waterline climbing; still then swelling surfaces.
2. **Forest → higher ground → open water** — layered horizon, soft terrain bands.
3. **Misty / submerged architecture** — half-drowned silhouettes, soft vertical pillars in haze (generic stone forms, not film-specific designs).
4. **Lone cat journey** — a single small grey feline silhouette drifting / bobbing on water with wake; no dialogue UI.
5. **Boat / float on water** — soft circular “glass float” debris as drifting orbs (motif of flotation, not a prop replica).
6. **Heavy weather light** — storm wash, brief bright portal-like light bloom (abstract radial wash only).
7. **Water draining / fault lines (abstract)** — optional: waterline dropping or parting bands (subtle, not literal geology).
8. **Quiet watercolor light** — soft caustics and breath vignette over painterly plates.

---

## Mapping → Remotion layers

| Motif | Implementation | Loop / beat |
|-------|----------------|-------------|
| Horizon / flooded landscape | `EnvPlate` Ken Burns on `public/flow/environment.png` | Continuous `<Loop>` |
| Terrain pattern | SVG `env-pattern.svg` slow drift | Continuous |
| Rising / living flood surface | `FluidWaves` + `FloodLevel` water band | Continuous + pulse beat |
| Mountain mist pass | `MountainMist` soft silhouette bands | Sequence beat overlap |
| Stone pillar haze | `PillarHaze` faint verticals in mist | Mist beat |
| Cat journey | `FlowCat` SVG silhouette + wake | Continuous mid/lower band |
| Floating debris | `DriftFloats` soft orbs | Continuous |
| Caustic / portal light | `Caustics` + `LightBloom` | Sequence after mist |
| Scene rhythm | Outer `SceneBeats` `<Loop>` with `<Sequence>` crossfades: Quiet water → Mist → Cat emphasis → Caustic bloom | ~20s @ 24fps |

**Style #21:** motion intensity only (complex loops). Palette stays Minimal Zen / biophilic (sage, sand, sky mist) — **no neon Y2K colors**.

---

## Accessibility constraints (must keep)

- Atmosphere + Player under `aria-hidden="true"`; no focusables inside.
- Existing **Pause motion** control (WCAG 2.2.2) pauses Remotion + GSAP mist.
- `prefers-reduced-motion: reduce` → static env image fallback (no Player loop).
- Cat / debris stay **behind** page content (`ZenAtmosphere` under `z-10` main chrome).
- Keep pulse rates well under 3 Hz ([WCAG 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)).

---

## Anti-patterns

- ❌ Reproducing film stills, character likenesses beyond a generic cat silhouette, logos, or score.
- ❌ Multiple Remotion Players for each scene (use one Player + nested `<Loop>` / `<Sequence>`).
- ❌ CSS `transition` / Tailwind animate classes inside Remotion markup.
- ❌ Cat covering hero headline (keep lower scenic band or side drift).

---

## Implementation status

See `remotion/FlowEnvironment.tsx` + `components/zen/atmosphere.tsx` + `public/flow/*`.
