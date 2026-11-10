# Profile webpage structure & decorative motion

**Scope:** Minimal Zen Android-dev portfolio (`app/page.tsx` + `ZenAtmosphere` + Remotion `PatternMotion`).  
**Sources:** Official docs / specs only (Remotion, GSAP, MDN, WCAG/WAI, Next.js, Schema.org). No blog roundups.  
**Date:** 2026-09-24

**Local baseline**

- Atmosphere: [`components/zen/atmosphere.tsx`](../../components/zen/atmosphere.tsx) — fixed canvas, `aria-hidden`, mist + GSAP `matchMedia` + ScrollTrigger parallax, Remotion layer.
- Player: [`components/zen/pattern-motion-player.tsx`](../../components/zen/pattern-motion-player.tsx) — `next/dynamic` (`ssr: false`), `loop` + `autoPlay`, reduced-motion static fallback.
- Composition: [`remotion/PatternMotion.tsx`](../../remotion/PatternMotion.tsx) — frame-driven SVG lattice / rings / ribbons / tiles.
- Design intent: [`design-system/minimal-zen/MASTER.md`](../minimal-zen/MASTER.md) (Motion dial 8/10, style #21 intensity).

---

## 1. Profile / personal portfolio structure & UX

### Findings

- **Landmarks & regions** — Mark page regions with HTML5 landmarks (`header`, `nav`, `main`, `footer`, labelled `section`s) so AT and “reader” modes can skip chrome and jump to content. ([WAI Page Structure](https://www.w3.org/WAI/tutorials/page-structure/), [WAI Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/))
- **Headings** — Nest heading ranks logically; one clear primary content heading; avoid skipping ranks within a section. Use headings to label regions (`aria-labelledby` where useful). ([WAI Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/), WCAG 1.3.1 / 2.4.6 via that tutorial)
- **Info & relationships** — Structure implied visually (hero identity, work list, skills) must be programmatically available (semantics, not only CSS). ([WCAG 1.3.1 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html))
- **Person entity (data model, not layout)** — Schema.org `Person` is the vocabulary for a person profile (alive/dead/fictional); useful for JSON-LD identity, not as a visual pattern. ([Schema.org Person](https://schema.org/Person))
- **`<section>`** — Generic thematic grouping; each section should have a heading when it is a content landmark. ([MDN `<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section))
- **Mobile / reader benefit** — Correct main/landmarks improve mobile reader modes that strip chrome and show main content only. ([WAI Page Structure — why](https://www.w3.org/WAI/tutorials/page-structure/))

### Recommendations (this repo)

- Keep the existing section order (hero identity → about → work → skills → contact) inside a single `<main>`; ensure site nav is `<nav aria-label="…">` and footer is page-level `<footer>`.
- Hero: one brand-level name (`h1`), one role line, one short support sentence, one CTA group — matches Minimal Zen dials and WAI “organize passages of text.”
- Spacious mobile shell: rely on section spacing tokens from MASTER; do not put secondary marketing blocks in the first viewport.
- Decorative atmosphere stays **outside** `main` (sibling under page root) so landmarks describe content, not mist/Player DOM.

---

## 2. Remotion Player as animated background patterns

### Findings

- **Embed API** — `<Player>` takes `component`, `durationInFrames`, `fps`, `compositionWidth` / `compositionHeight`; optional `loop`, `autoPlay`, `controls`, `style`. ([Remotion `<Player>`](https://www.remotion.dev/docs/player/player))
- **Looping** — `loop` restarts when the composition ends; example documents `controls` + `loop` together. For backgrounds, omit `controls`. ([Player examples — Loop video](https://www.remotion.dev/docs/player/examples), [`loop` prop](https://www.remotion.dev/docs/player/player#loop))
- **Composition loops inside markup** — `<Loop durationInFrames times>` repeats children (default `times={Infinity}`, default layout `absolute-fill`). Useful for independent pattern cycles without lengthening the whole Player timeline. ([Remotion `<Loop>`](https://www.remotion.dev/docs/loop))
- **Sizing** — Default size follows composition dimensions; `style={{ width: "100%", height: "100%" }}` fills the wrapper; fitting docs show relative container + aspect-ratio. ([Player sizing](https://www.remotion.dev/docs/player/scaling))
- **Performance — avoid Player re-renders** — Do not drive Player re-renders from high-frequency parent state (e.g. time updates); keep UI siblings; memoize `inputProps`. ([Player best practices](https://www.remotion.dev/docs/player/best-practices))
- **Performance — GPU / JS cost** — `filter: blur()`, box/text shadows, gradients, canvas/WebGL are GPU-heavy; slow JS in the composition hurts preview/render — memoize expensive work. ([Remotion Performance Tips](https://www.remotion.dev/docs/performance))
- **Autoplay** — Browser policies mainly restrict **audio**; `autoPlay` is discouraged when the composition has sound. Silent decorative backgrounds are fine for autoplay. ([Player autoplay](https://www.remotion.dev/docs/player/autoplay))
- **License console** — `acknowledgeRemotionLicense` silences the license console message. ([`acknowledgeRemotionLicense`](https://www.remotion.dev/docs/player/player#acknowledgeremotionlicense))
- **Player a11y (product)** — Remotion documents that composition content is real DOM (readable by AT). Decorative use must therefore hide the subtree. ([Remotion Accessibility](https://www.remotion.dev/docs/accessibility))
- **Next.js code-split** — Lazy-load client libraries with `next/dynamic`; `ssr: false` disables prerender for client-only modules (must live in a Client Component). ([Next.js Lazy Loading](https://nextjs.org/docs/app/guides/lazy-loading))
- **Imperative pause** — `PlayerRef.pause()` / `play()` / `isPlaying()` for visibility or user “freeze atmosphere” controls. ([PlayerRef](https://www.remotion.dev/docs/player/player#playerref))

### Recommendations (this repo)

- Keep `controls` unset/`false`, no audio, `loop` + `autoPlay`, `acknowledgeRemotionLicense` (already present).
- Prefer a **stable** composition size (e.g. 1080×1920 or viewport-sized once) and CSS-scale the Player; avoid resizing `compositionWidth`/`compositionHeight` on every `resize` event (triggers remount cost / tree work — conflicts with [best practices](https://www.remotion.dev/docs/player/best-practices)).
- Add more motion by nesting Remotion `<Loop>` / phased `interpolate` layers inside `PatternMotion`, not by stacking multiple Players.
- Cap DOM cost: large SVG grids of circles are per-frame paint; prefer fewer nodes, CSS patterns, or canvas for denser lattices ([Performance Tips](https://www.remotion.dev/docs/performance)).
- Cap playback cost on battery: optional `playbackRate` &lt; 1 or lower `fps` for background-only ([`playbackRate`](https://www.remotion.dev/docs/player/player#playbackrate)).

---

## 3. GSAP / ScrollTrigger parallax with Remotion overlays

### Findings

- **ScrollTrigger** — Attach scroll-linked motion via `scrollTrigger` on tweens/timelines; supports `scrub`, `pin`, `start`/`end`, callbacks. Scrub ties animation progress to scroll (optionally with lag, e.g. `scrub: 1`). ([GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/))
- **matchMedia + reduced motion** — `gsap.matchMedia()` runs setup only while a query matches; animations/ScrollTriggers created inside revert automatically when the query no longer matches. Docs explicitly call out `prefers-reduced-motion` customization. ([gsap.matchMedia()](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/))
- **Parallax pattern** — Common official pattern: `ease: "none"` + `scrub` + `yPercent` (or `y`) over a long `start`/`end` range (as in ScrollTrigger advanced examples). ([ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/))
- **Stacking with Remotion** — No Remotion API couples to GSAP. Treat Remotion as a continuous time-based layer; use GSAP only on CSS mist/grain siblings. Scroll-scrubbed motion of large layers is exactly the class of non-essential motion WCAG warns about for vestibular users. ([WCAG 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html))

### Recommendations (this repo)

- Keep current pattern: `mm.add("(prefers-reduced-motion: no-preference)", …)` then `mm.revert()` on cleanup ([matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)) — already in `ZenAtmosphere` / `page.tsx`.
- Parallax **mist only**; do not ScrollTrigger-transform the Remotion root (avoids compounding scroll + loop motion).
- Keep `pointer-events-none` on the atmosphere canvas so overlay never steals clicks ([MDN `pointer-events`](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) — use `none` on non-interactive layers).
- Prefer modest `yPercent` and `scrub` lag (current `0.8`) over large displacements; Vestibular risk rises when scroll moves page elements beyond essential scroll ([WCAG 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)).
- On `resize`, call `ScrollTrigger.refresh()` if layout of triggers changes (documented via invalidate/refresh behaviors on ScrollTrigger).

---

## 4. Accessibility for decorative motion

### Findings

- **`prefers-reduced-motion`** — Media feature to detect user preference to minimize non-essential motion; authors should remove/reduce/replace motion-based animation. Vestibular warning on MDN for scaling movement examples. ([MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion))
- **`aria-hidden="true"`** — Removes element **and descendants** from the accessibility tree; appropriate for purely decorative content. Must not wrap focusable controls. ([MDN aria-hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden))
- **Pause, Stop, Hide (WCAG 2.2.2, Level A)** — Moving/blinking/scrolling info that (1) starts automatically, (2) lasts **more than five seconds**, and (3) is parallel with other content needs a mechanism to **pause, stop, or hide**, unless essential. Continuous looping backgrounds qualify. ([WCAG 2.2.2 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [normative SC](https://www.w3.org/TR/WCAG22/#pause-stop-hide))
- **Animation from Interactions (2.3.3, AAA)** — Motion triggered by interaction (e.g. scroll parallax) can be disabled unless essential; scroll-linked movement can trigger vestibular disorders. ([WCAG 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html))
- **Three flashes (2.3.1, A)** — Nothing flashes more than three times per second (or below thresholds). Keep pulse/opacity cycles slow. ([WCAG 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html))
- **Remotion DOM** — Because Player renders real DOM, decorative Players must sit under `aria-hidden` (or equivalent) so AT does not read pattern markup. ([Remotion Accessibility](https://www.remotion.dev/docs/accessibility))

### Recommendations (this repo)

- Keep wrappers `aria-hidden="true"` + `pointer-events-none` (already on atmosphere / player). Never put focusable CTAs inside that tree.
- Keep JS + CSS reduced-motion paths: static CSS lattice fallback (player) and GSAP gated by `no-preference` (atmosphere + page reveals).
- **Gap vs WCAG 2.2.2:** reduced-motion alone is not a pause control for users who leave motion on. Add a visible “Pause motion” / “Freeze atmosphere” control in the content chrome that calls `PlayerRef.pause()` and kills/pauses GSAP mist tweens (or toggles a `data-motion="off"` class).
- Ensure any new pulse/flash stays well under 3 Hz ([2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)).
- Optional: pause Player when `document.visibilityState === "hidden"` via Page Visibility + `PlayerRef` (saves work; complements 2.2.2 when combined with explicit user pause).

---

## Gap check vs current Minimal Zen implementation

| Topic | Status | Note |
|--------|--------|------|
| Decorative `aria-hidden` + no pointer events | Done | Atmosphere root |
| `prefers-reduced-motion` Player fallback | Done | Static radial lattice |
| GSAP behind `matchMedia(no-preference)` | Done | Mist + page reveals |
| WCAG 2.2.2 pause/stop/hide UI | Done | “Pause motion” control freezes Player + GSAP mist |
| Stable Player dimensions (avoid resize churn) | Done | Fixed 1080×1920, CSS-scaled |
| MASTER / Loop layers | Done | Independent `<Loop>` cycles; CSS lattice |
| Scroll parallax on Remotion root | Avoided | Mist layers only |
| Landmarks (`header`/`nav`/`main`/`footer`) | Done | `aria-label` on nav; footer outside `main` |
| Section headings / `aria-labelledby` | Done | About, Work, Skills, Contact |
| Hero budget (no stats in first viewport) | Done | Stats moved below fold |
| Schema.org `Person` JSON-LD | Done | `app/layout.tsx` |
| `ScrollTrigger.refresh` on resize | Done | Atmosphere mist parallax |

---

## Top actionable items for MORE background motion patterns

See shortlist in the summary below; implement inside `PatternMotion` / atmosphere, not as extra marketing sections in the hero.

---

## Source index

| Topic | URL / path |
|--------|------------|
| Remotion Player API | https://www.remotion.dev/docs/player/player |
| Remotion Player examples | https://www.remotion.dev/docs/player/examples |
| Remotion Player best practices | https://www.remotion.dev/docs/player/best-practices |
| Remotion Player sizing | https://www.remotion.dev/docs/player/scaling |
| Remotion Player autoplay | https://www.remotion.dev/docs/player/autoplay |
| Remotion `<Loop>` | https://www.remotion.dev/docs/loop |
| Remotion performance | https://www.remotion.dev/docs/performance |
| Remotion accessibility | https://www.remotion.dev/docs/accessibility |
| GSAP ScrollTrigger | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ |
| GSAP matchMedia | https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ |
| MDN prefers-reduced-motion | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion |
| MDN aria-hidden | https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden |
| MDN pointer-events | https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events |
| MDN `<section>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section |
| WCAG 2.2.2 Pause Stop Hide | https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html |
| WCAG 2.3.3 Animation from Interactions | https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html |
| WCAG 2.3.1 Three Flashes | https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html |
| WCAG 1.3.1 Info and Relationships | https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html |
| WAI page structure | https://www.w3.org/WAI/tutorials/page-structure/ |
| WAI regions / headings | https://www.w3.org/WAI/tutorials/page-structure/regions/ · https://www.w3.org/WAI/tutorials/page-structure/headings/ |
| Next.js lazy loading | https://nextjs.org/docs/app/guides/lazy-loading |
| Schema.org Person | https://schema.org/Person |
| Local design system | `design-system/minimal-zen/MASTER.md` |
| Local implementation | `components/zen/atmosphere.tsx`, `components/zen/pattern-motion-player.tsx`, `remotion/PatternMotion.tsx`, `app/page.tsx` |
