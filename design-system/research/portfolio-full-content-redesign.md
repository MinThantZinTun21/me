# Personal Android-developer portfolio: content completeness & accessibility structure

**Scope:** What a complete personal profile / portfolio page should include for (1) content completeness and (2) accessibility structure — mapped to a single-page Android developer portfolio.  
**Method:** Primary sources only (WAI Page Structure tutorial, WAI-ARIA APG Landmark Regions, WCAG 2.2 Understanding docs, Schema.org `Person` and related types, Next.js Metadata / JSON-LD docs). No blog roundups or secondary “portfolio tips.”  
**Date:** 2026-09-24  

**How to read this:** Schema.org defines *what facts* a person profile can expose; WAI/WCAG/APG define *how* those facts must be structured for perception and navigation. Neither source publishes an “Android portfolio template.” Section names below are the practical grouping of those facts for a personal developer site.

**Local baseline (context only, not a source):** [`app/page.tsx`](../../app/page.tsx) already uses `header`/`nav`/`main`/`section`/`footer` and [`app/layout.tsx`](../../app/layout.tsx) already exports `metadata` plus a `Person` JSON-LD script.

---

## Sources

| Source | Role |
| --- | --- |
| [WAI Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/) | Why structure matters; related WCAG SCs |
| [WAI Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/) | `header`, `nav`, `main`, `aside`, `footer` |
| [WAI Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/) | `aria-label` / `aria-labelledby` for duplicate landmarks |
| [WAI Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) | Heading ranks, labeling regions with headings |
| [WAI Content Structure](https://www.w3.org/WAI/tutorials/page-structure/content/) | `section`, `article`, lists, paragraphs |
| [WAI Full Example](https://www.w3.org/WAI/tutorials/page-structure/example/) | Combined landmark + heading pattern |
| [APG Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) | Landmark design principles; `banner` / `main` / `navigation` / `contentinfo` / `region` |
| [WCAG 1.3.1 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) | Structure must be programmatically determinable |
| [WCAG 2.4.1 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) | Bypass repeated blocks (landmarks / skip) |
| [WCAG 2.4.6 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html) | Descriptive headings and labels |
| [WCAG 2.4.10 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html) | Section headings when content is sectioned (AAA) |
| [Schema.org Person](https://schema.org/Person) | Person entity + properties for profile data |
| [Schema.org skills](https://schema.org/skills), [knowsAbout](https://schema.org/knowsAbout), [SoftwareSourceCode](https://schema.org/SoftwareSourceCode), [Occupation](https://schema.org/Occupation), [Role](https://schema.org/Role) | Skills, expertise, code projects, occupation dating |
| [Next.js Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) | `metadata` / `generateMetadata` / file conventions |
| [Next.js `generateMetadata`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) | Fields: `title`, `description`, `authors`, `openGraph`, `twitter`, `metadataBase`, … |
| [Next.js JSON-LD guide](https://nextjs.org/docs/app/guides/json-ld) | Render `application/ld+json` via `<script>` in `layout.js` / `page.js` |

---

## 1. Accessibility structure (must-haves)

### Findings

- **Well-structured pages** improve navigation/orientation for screen-reader users, keyboard users, people with cognitive disabilities, mobile “reader” modes, and search indexing. ([WAI Page Structure](https://www.w3.org/WAI/tutorials/page-structure/))
- **Related WCAG criteria** called out by that tutorial: **1.3.1** Info and Relationships (A), **2.4.1** Bypass Blocks (A), **2.4.6** Headings and Labels (AA), **2.4.10** Section Headings (AAA). ([WAI Page Structure — Related WCAG](https://www.w3.org/WAI/tutorials/page-structure/))
- **Programmatic structure:** Information, structure, and relationships conveyed through presentation must be programmatically determinable or available in text (headings, lists, landmarks — not CSS alone). ([WCAG 1.3.1 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html))
- **All perceivable content** should sit in a landmark with a meaningful role. ([APG Landmark Regions — General Principles](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))
- **Top-level landmarks:** `banner`, `main`, `complementary`, and `contentinfo` should be top-level. ([APG Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))
- **One `main` per page** (primary content). ([APG Main](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/); [WAI Page Regions — Main](https://www.w3.org/WAI/tutorials/page-structure/regions/))
- **Page header (`<header>` in `body` context → `banner`):** Site-wide identity (logo/name), search, navigation. Nested `header` inside `section`/`article` does **not** get `banner`. ([WAI Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/); [APG Banner](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))
- **Navigation (`<nav>`):** Any number allowed; **label each** when more than one (e.g. `aria-label="Main"`). ([WAI Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/); [WAI Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/); [APG Navigation](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))
- **Page footer (`<footer>` in `body` context → `contentinfo`):** Site-wide info such as copyright, privacy, disclaimers. Nested footer inside section/article does **not** get `contentinfo`. ([WAI Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/); [APG Contentinfo](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))
- **`<section>` → `region` only when named** via `aria-labelledby` / `aria-label` (or title). Unnamed sections are thematic groups, not landmarks. ([APG Region](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/); [WAI Content Structure — Sections](https://www.w3.org/WAI/tutorials/page-structure/content/))
- **Prefer heading as region label** with `aria-labelledby` when a visible heading exists; use `aria-label` when the label should not appear visually. Labels should be short; do **not** include the word “navigation” in a nav label (avoids “Site Navigation Navigation”). ([WAI Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/); [APG Step 3](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))
- **Headings:** Nest by rank (`h1`–`h6`); equal/higher rank starts a new section; avoid skipping ranks when opening subsections. Headings organize passages and can label regions. ([WAI Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/))
- **Section headings (AAA):** Where content is organized into sections, provide headings that introduce them — visual boxes alone are insufficient. ([WCAG 2.4.10 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html))
- **Lists:** Use `ul` / `ol` / `dl` for grouped items (skills, project bullets, contact links) so relationships are programmatic. ([WAI Content Structure — Lists](https://www.w3.org/WAI/tutorials/page-structure/content/); [WCAG 1.3.1 techniques H48](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html))
- **Articles:** Self-contained compositions (e.g. each project card as `<article>` with its own heading) are valid HTML5 content structure. ([WAI Content Structure — Articles](https://www.w3.org/WAI/tutorials/page-structure/content/))
- **Responsive:** Visible components for a given viewport should keep a consistent order; structure should stay consistent across sizes when possible. ([WAI Page Regions — Responsive design](https://www.w3.org/WAI/tutorials/page-structure/regions/))

### Recommended page chrome (structural shell)

```text
<body>
  [<header> banner: site/person identity mark + optional global chrome]
  <nav aria-label="…"> primary in-page / site links </nav>
  <main>
    <h1> … primary person / page identity … </h1>
    <section aria-labelledby="…"> … thematic blocks … </section>
    …
  </main>
  <footer> contentinfo: copyright / legal / secondary links </footer>
</body>
```

Aligned with [WAI Full Example](https://www.w3.org/WAI/tutorials/page-structure/example/) and APG landmark rules above.

---

## 2. Content completeness via Schema.org `Person`

### Findings

- **`Person`:** “A person (alive, dead, undead, or fictional).” ([Schema.org Person](https://schema.org/Person))
- Core identity / presence properties relevant to a public profile:

| Property | Definition (Schema.org) | Portfolio use |
| --- | --- | --- |
| `name` / `givenName` / `familyName` / `additionalName` | Name parts of the person | Hero identity |
| `jobTitle` | Job title (e.g. Financial Manager) | Role line (“Android Developer”) |
| `description` | Description of the item | About / meta description |
| `image` | Image URL or `ImageObject` | Portrait / avatar |
| `url` | URL of the item | Canonical personal site URL |
| `email` / `telephone` / `address` / `contactPoint` | Contact channels | Contact section |
| `sameAs` | URL that unambiguously indicates identity (Wikipedia, Wikidata, official site, etc.) | GitHub, LinkedIn, Play Store developer page |
| `worksFor` | Organizations the person works for | Experience / employment |
| `affiliation` | Affiliated org (school, club, team) | Current affiliations |
| `alumniOf` | Org the person is an alumni of | Education |
| `hasOccupation` | Person’s occupation; past professions via `Role` + dates | Career / occupation |
| `knowsAbout` | Topic known about — suggests possible expertise, not skill level | Domain expertise (Android, Kotlin, architecture) |
| `skills` | Competency claimed or required for a role/occupation | Skills list |
| `knowsLanguage` | Known language; prefer IETF BCP 47 codes | Spoken/written languages |
| `workLocation` / `homeLocation` | Contact location for work / residence | Location (city/country) |
| `award` | Award won by or for this item | Awards / recognition |
| `memberOf` | Org or `ProgramMembership` | Communities, standards bodies |

([Schema.org Person](https://schema.org/Person) property definitions as cited; [skills](https://schema.org/skills); [knowsAbout](https://schema.org/knowsAbout); [knowsLanguage](https://schema.org/knowsLanguage); [hasOccupation](https://schema.org/hasOccupation); [Occupation](https://schema.org/Occupation); [Role](https://schema.org/Role) for dating past roles.)

- **Projects / work samples (code):** `SoftwareSourceCode` is “Computer programming source code”; `codeRepository` is the link to the un-compiled human-readable code location; `programmingLanguage` is the computer programming language. ([SoftwareSourceCode](https://schema.org/SoftwareSourceCode); [codeRepository](https://schema.org/codeRepository); [programmingLanguage](https://schema.org/programmingLanguage))
- **`knowsAbout` vs `skills`:** `knowsAbout` is topical expertise without skill levels; `skills` is an assertion of competency. Both are valid on `Person`; portfolios often expose both (domains + concrete competencies). ([knowsAbout](https://schema.org/knowsAbout); [skills](https://schema.org/skills))

---

## 3. Section outline & content checklist

Use one `<main>`, one clear `h1` for the person/page identity, then `h2` (and nested `h3` as needed) per section — matching [WAI Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) and [WCAG 2.4.10](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html). Name each major `<section>` with `aria-labelledby` pointing at that heading ([WAI Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/); [APG Region](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)).

### A. Hero identity (inside `main`, often first)

**Structure**

- [ ] Visible **person name** as primary `h1` (or site name as `h1` with content heading demoted — either pattern is documented). ([WAI Headings — main before/after nav](https://www.w3.org/WAI/tutorials/page-structure/headings/))
- [ ] Optional page-level `<header>` **outside** nested sections if it is true site banner identity. ([WAI Page Regions — Page header](https://www.w3.org/WAI/tutorials/page-structure/regions/))

**Content (Schema.org-backed)**

- [ ] `name` (and optionally given/family)
- [ ] `jobTitle` (e.g. Android Developer)
- [ ] Short `description` / support sentence
- [ ] `image` (portrait) with meaningful text alternative if informative ([WAI Images tutorials](https://www.w3.org/WAI/tutorials/images/) — linked from Page Structure hub; informative images need `alt`)
- [ ] Primary CTA(s) as real links/buttons (contact, GitHub) — relationships via native interactive elements ([WCAG 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html))
- [ ] Optional: `workLocation` / country

### B. About

**Structure**

- [ ] `<section aria-labelledby="about-heading">` + `h2`
- [ ] Body copy in `<p>` elements ([WAI Content Structure — Paragraphs](https://www.w3.org/WAI/tutorials/page-structure/content/))

**Content**

- [ ] Extended `description` (narrative bio)
- [ ] Focus areas as list or prose that maps to `knowsAbout`
- [ ] Optional: languages (`knowsLanguage`), awards (`award`)

### C. Experience / education

**Structure**

- [ ] Section heading (`h2`); each role or school as nested heading (`h3`) or list/description list so order and relationships are programmatic ([WAI Lists](https://www.w3.org/WAI/tutorials/page-structure/content/); [WCAG 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html))
- [ ] Chronological employment: prefer ordered list or clear date text associated with each role

**Content**

- [ ] Employment: `worksFor` + role title (`jobTitle` / `hasOccupation`); past roles dated via `Role` ([hasOccupation](https://schema.org/hasOccupation); [Role](https://schema.org/Role))
- [ ] Education: `alumniOf` (educational organization name)
- [ ] Optional: `affiliation`, `memberOf`

### D. Work / projects

**Structure**

- [ ] Section `h2`; each project as `<article>` with its own heading ([WAI Articles](https://www.w3.org/WAI/tutorials/page-structure/content/))
- [ ] Project links in lists where appropriate

**Content**

- [ ] Project name + short description
- [ ] For code: `SoftwareSourceCode` facts — `codeRepository`, `programmingLanguage`, runtime/platform notes as available ([SoftwareSourceCode](https://schema.org/SoftwareSourceCode))
- [ ] Outcome / role on the project (prose; not a Schema.org requirement, but needed for human completeness of a portfolio sample)

### E. Skills

**Structure**

- [ ] Section `h2`; competencies as `<ul>` (unordered — order not critical) ([WAI Unordered list](https://www.w3.org/WAI/tutorials/page-structure/content/))

**Content**

- [ ] `skills` (competencies: Kotlin, Jetpack, CI, …)
- [ ] Optionally separate topical `knowsAbout` if not already covered in About ([skills](https://schema.org/skills); [knowsAbout](https://schema.org/knowsAbout))

### F. Contact

**Structure**

- [ ] Section `h2`; contact methods as links list (`ul` of `mailto:` / `tel:` / profile URLs)
- [ ] If a form is used: labeled controls per WAI Forms (out of scope detail here; see [WAI Forms](https://www.w3.org/WAI/tutorials/forms/))

**Content**

- [ ] `email`, optional `telephone`
- [ ] `sameAs` profile URLs (GitHub minimum for an Android-dev identity signal)
- [ ] Optional `contactPoint` / `address` (country or city only if intentionally public)

### G. Footer (`contentinfo`)

**Structure**

- [ ] Page-level `<footer>` (child of `body` / not only inside a section) ([WAI Page footer](https://www.w3.org/WAI/tutorials/page-structure/regions/); [APG Contentinfo](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))

**Content**

- [ ] Copyright / ownership line
- [ ] Optional privacy / legal / secondary nav links (APG: copyrights, privacy, accessibility statements) ([APG Contentinfo](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))

### H. Site navigation (chrome)

**Structure**

- [ ] `<nav aria-label="…">` with in-page anchors to About, Experience, Work, Skills, Contact ([WAI Navigation](https://www.w3.org/WAI/tutorials/page-structure/regions/))
- [ ] Distinct label if a second nav exists (e.g. social links vs section jump list) ([WAI Labeling Regions](https://www.w3.org/WAI/tutorials/page-structure/labels/))

---

## 4. Metadata & JSON-LD (Next.js)

### Findings

- Next.js Metadata APIs define application metadata for SEO and shareability: static `metadata` object, `generateMetadata`, and file conventions (favicon, OG images, robots, sitemap). Exports are **Server Components only**. ([Next.js Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images))
- Default tags always include charset and viewport. ([same](https://nextjs.org/docs/app/getting-started/metadata-and-og-images))
- Documented fields useful for a person portfolio:
  - **`title`** → `<title>`
  - **`description`** → `<meta name="description">`
  - **`authors`**, **`creator`**, **`keywords`**
  - **`metadataBase`** + relative URLs for canonical / OG images
  - **`openGraph`**: `title`, `description`, `url`, `images` (absolute or via `metadataBase`), `locale`, `type` (docs exemplify `website` and `article`)
  - **`twitter`**: card, title, description, images
  - **`icons`**, **`robots`**
  ([generateMetadata — Metadata Fields](https://nextjs.org/docs/app/api-reference/functions/generate-metadata))
- **JSON-LD:** Render structured data as a native `<script type="application/ld+json">` in `layout.js` or `page.js` (not `next/script`). Sanitize/`\u003c`-escape stringified payload. Example shape uses `@context: https://schema.org` and `@type`. Validate with Google Rich Results Test or Schema Markup Validator. ([Next.js JSON-LD](https://nextjs.org/docs/app/guides/json-ld))

### Metadata checklist

- [ ] `title` includes person name + role
- [ ] `description` summarizes Android focus / experience (aligns with Person `description`)
- [ ] `authors: [{ name }]` matching the person
- [ ] `metadataBase` set to the live site origin
- [ ] `openGraph.title` / `description` / `images` / `url`
- [ ] Favicon / icon via Metadata file conventions or `icons`
- [ ] Optional `robots` / `sitemap.xml` / `robots.txt` file conventions ([Metadata file conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata))

### JSON-LD checklist (`@type: Person`)

Minimum useful graph for an Android-dev profile:

- [ ] `@context`, `@type: Person`
- [ ] `name`, `url`, `jobTitle`, `description`
- [ ] `image`, `email` (and `telephone` if public)
- [ ] `sameAs[]` (GitHub and other unambiguous profiles)
- [ ] `knowsAbout[]` and/or `skills`
- [ ] `alumniOf` / `worksFor` as applicable
- [ ] Optional: `address` / `workLocation`, `hasOccupation`
- [ ] Optional project entities: `SoftwareSourceCode` nodes linked from the person (e.g. via `subjectOf` / creator relationships as modeled in your graph)

Render via `<script type="application/ld+json">` per [Next.js JSON-LD](https://nextjs.org/docs/app/guides/json-ld); keep visible page content and JSON-LD facts consistent ([WCAG 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) — relationships should not exist only in unstructured CSS or only in invisible data).

---

## 5. Must-have content blocks (short checklist)

- **Landmarks:** page `banner`/`header` (if used), labelled `nav`, single `main`, page `footer`/`contentinfo`; major blocks as named `section`s. ([WAI Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/); [APG Landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/))
- **Headings:** one primary `h1` (person/page identity); `h2` per section; no confusing rank skips. ([WAI Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/))
- **Hero identity:** name, job title, short description, image, primary contact/profile CTAs. ([Person](https://schema.org/Person) `name`/`jobTitle`/`description`/`image`/`url`)
- **About:** extended bio + expertise topics (`description` / `knowsAbout`).
- **Experience & education:** employers/roles (`worksFor` / occupation) and schools (`alumniOf`), with clear structure/dates.
- **Work/projects:** self-contained project entries (`article`) with descriptions; repos/languages where code is the artifact (`SoftwareSourceCode`).
- **Skills:** list of competencies (`skills`).
- **Contact:** email and/or other channels + `sameAs` profile links.
- **Footer:** copyright / site-wide legal or secondary links (`contentinfo`).
- **Document metadata:** `title` + `description` (+ OG image/url). ([Next.js metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images))
- **JSON-LD `Person`:** structured mirror of the above facts in `application/ld+json`. ([Next.js JSON-LD](https://nextjs.org/docs/app/guides/json-ld); [Person](https://schema.org/Person))

---

## 7. Implementation status (this repo)

Applied in `lib/portfolio-content.ts`, `app/page.tsx`, `app/layout.tsx`, `components/zen/site-nav.tsx` (2026-09-24):

- [x] Landmarks: skip link, `header`/`nav`, `main`, page `footer`, named `section`s
- [x] Headings: one `h1` + section `h2` / nested `h3`
- [x] Hero: name, jobTitle, description, image, CTAs, workLocation
- [x] About: bio, knowsAbout chips, languages (`knowsLanguage`)
- [x] Experience ordered list + education (`alumniOf`)
- [x] Work as `article`s; JSON-LD `SoftwareSourceCode` graph
- [x] Skills as lists + meters; Schema.org `skills`
- [x] Contact as `ul` of mailto/tel/sameAs links
- [x] Footer contentinfo + social `nav`
- [x] Metadata: title, description, authors, keywords, OG, Twitter, robots
- [x] JSON-LD Person `@graph` (escaped `<`) mirroring visible facts
