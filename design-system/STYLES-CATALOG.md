# Design Styles Catalog (1–50)

> Source of truth for style switching. **Active site style: #21 Y2K.**
> Each entry maps to keywords for ui-ux-pro-max / implementation notes.
> DB match = found in ui-ux-pro-max `styles.csv`; otherwise researched fallback.

| # | Style | Keywords | DB | Notes |
| -: | ----- | -------- | -- | ----- |
| 1 | Neoclassical | columns, marble, symmetry, serif, restrained gold | — | Formal editorial |
| 2 | Baroque | ornate, drama, gold scrollwork, chiaroscuro | — | Heavy ornament |
| 3 | Aurora | northern lights, soft gradients, glow bands | — | Ambient color washes |
| 4 | Ethereal | soft focus, mist, translucent, dreamlike | — | Low contrast haze |
| 5 | Filigree | fine metal lace, delicate linework | — | Decorative borders |
| 6 | Acanthus | classical leaf motif, carved relief | — | Ornamental botanical |
| 7 | Anthropomorphic | humanized objects, character faces | — | Playful personification |
| 8 | Pixel Art | 8-bit, block, alias, Press Start | ~ | Retro gaming |
| 9 | Conceptual Sketch | pencil, wireframe, unfinished | — | Process aesthetic |
| 10 | Luxury Typography | oversized type, tracking, editorial | ~ | Type as hero |
| 11 | Japandi | wabi + scandi, warm neutrals, ma | — | Calm craft |
| 12 | Memphis | 80s shapes, squiggles, primary pops | — | Postmodern play |
| 13 | Bohemian | layered textiles, warm, eclectic | — | Maximal wanderlust |
| 14 | Shabby Chic | distressed pastels, florals, lace | — | Soft vintage |
| 15 | Farmhouse / Cottagecore | linen, wood, pastoral | ~ | Nature Distilled |
| 16 | Victorian | dense pattern, serifs, gothic revival | — | Period ornament |
| 17 | Art Deco | sunburst, geometry, gold/black | — | Gatsby glamour |
| 18 | Art Nouveau | organic curves, Mucha, flora | — | Whiplash line |
| 19 | Mystical Western | desert dusk, occult cowboy | — | Dust + myth |
| 20 | Kitsch | gaudy, souvenir, ironic cute | — | Camp humor |
| 21 | **Y2K** ★ ACTIVE | chrome, pink, cyan, bubbles, gloss | ✅ `y2k-aesthetic` | Neon nostalgia |
| 22 | Bauhaus | primary RGBY, Outfit, hard shadow | ✅ `bauhaus` | Form/function |
| 23 | Brutalism | raw, system fonts, visible borders | ✅ `brutalism` | Anti-polish |
| 24 | Cybercore | matrix, HUD, terminal | ~ cyberpunk | Tech noir |
| 25 | Synthwave | sunset grid, neon magenta/cyan | — | 80s retrowave |
| 26 | Vaporwave | pastel greek busts, VHS, pink/teal | — | Irony nostalgia |
| 27 | Pop Art | Ben-Day, comic halftone, CMYK | — | Warhol punch |
| 28 | Bento Box | modular tiles, Apple-like cards | ✅ bento | Grid modules |
| 29 | Graffiti | spray, tags, street type | — | Urban mark-making |
| 30 | Tenebrism | void black + single spotlight | ~ OLED | Caravaggio light |
| 31 | Gothic | pointed arches, blackletter, stone | — | Medieval dark |
| 32 | Pointillism | dotted color fields | — | Optical mix |
| 33 | Mixed Media | collage, tape, layered media | — | Assemblage |
| 34 | Steampunk | brass, gears, Victorian tech | — | Retro-mech |
| 35 | Kawaii | pastel, rounded, cute icons | — | Soft cute |
| 36 | Coquette | bows, pink, lace, feminine | — | Soft glam |
| 37 | Surrealism | dream logic, impossible objects | — | Uncanny |
| 38 | Utilitarian | industrial, labels, functional | — | Workwear UI |
| 39 | Mid-Century | atomic, teak, boomerang | — | 50s modern |
| 40 | Scrapbook | stickers, washi, polaroids | — | Handmade page |
| 41 | Neo Frutiger Aero | gloss orbs, sky blue, skeuo | — | 2000s web |
| 42 | Dark Magic Academia | candles, grimoire, emerald | — | Occult scholar |
| 43 | Light Academia | parchment, sepia, libraries | — | Soft scholarly |
| 44 | Wabi Sabi | imperfect, grain, muted earth | — | Beauty in wear |
| 45 | South West / Wild West | adobe, turquoise, desert | — | Mesa palette |
| 46 | Nautical | navy, rope, stripes, brass | — | Maritime |
| 47 | Rebus | puzzle icons as language | — | Visual riddles |
| 48 | Glassmorphism | blur, frost, translucent | ✅ glassmorphism | Frosted layers |
| 49 | Modular Typography | type blocks, grid letters | — | Type system |
| 50 | Neo-Brutalism | bold borders, flat color, chunky | ✅ brutalism-adj | Soft-brutal |

## Active implementation

- **Style:** #21 Y2K
- **Motion dial:** 10 (complex) — GSAP + Lottie banner
- **Density:** 7 (compact)
- **Variance:** 8 (bold / asymmetric)
- **Fonts:** Orbitron (display) + Exo 2 (body)
- **Motion stack:** `lottie-react` banner · GSAP ScrollTrigger/stagger · magnetic hover · marquee

## Switching styles later

1. Pick a row from this catalog.
2. Run ui-ux-pro-max `--design-system` with that style’s keywords.
3. Persist under `design-system/<slug>/` and set active in this file.
