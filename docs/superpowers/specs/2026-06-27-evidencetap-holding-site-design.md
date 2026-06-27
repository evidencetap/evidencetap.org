# Evidence TAP — holding site design

**Date:** 2026-06-27
**Status:** Approved (pending spec review)
**Domain:** evidencetap.org
**Owner:** Anil Madhavapeddy (avsm2@cam.ac.uk)

## 1. Overview

A small, static "holding" website for **Evidence TAP** (TAP = *Traceable AI
Pipeline*) — the Cambridge project building traceable AI pipelines that maintain
*living evidence databases*: continuously ingesting, screening, and extracting
structured data from the scientific literature so that systematic reviews stay
current for policymaking. The project began in conservation (the Cambridge
Conservation Evidence collaboration) and is now being applied to a second
field, education, with the intention to expand further.

The site has three jobs only: say what the project is, list the people, and
list the papers. The visual interest comes entirely from typography: the
licensed **Roslindale** family (David Jonathan Ross / DJR), used as a living
type specimen across its full range of weights, widths, optical sizes, and
slant.

### Goals

- Communicate the project's mission and "one engine, many fields" framing in one screen.
- Present the core team and the published papers cleanly.
- Be visually distinctive through type alone, with near-zero chrome.
- Ship as a fully static site deployable to GitHub Pages on a custom apex domain.

### Non-goals (YAGNI)

- No CMS, blog, database, search, or contact form.
- No analytics, cookies, or third-party scripts.
- No per-paper detail pages or PDFs hosted here (link out via DOI).
- No live demo of the pipeline.
- No build-time ingestion from the `bushel` repo — paper/people content is
  hand-authored into local data files (small, stable set).

## 2. Audience

Academics, policymakers, and collaborators arriving from talks, papers, and
referrals. Tone: serious, calm, editorial. Not a startup landing page.

## 3. Content

### 3.1 Copy

- **Wordmark:** `Evidence TAP`
- **Hero tagline:** *Empowering equitable, rational policymaking through living evidence.*
- **Sub:** *The Cambridge Traceable AI pipeline.*
- **What it is (one paragraph, home):** Evidence TAP builds traceable AI
  pipelines that keep the world's research evidence continuously up to date.
  Instead of one-off systematic reviews that age the moment they are published,
  the pipeline ingests, screens, and extracts structured data from the
  literature on local, self-hosted infrastructure — with human verification
  retained at each step. It began in conservation and is now being applied to
  education, with more fields to follow.
- **Quiet highlight:** *97% recall against a large-scale manual review.*
- **Two-domains statement:** Conservation · Education · *(more to follow)*.

### 3.2 People

Text-only. Grouped by strand to reinforce the "one engine, multiple fields"
story. Each entry: name · affiliation (· optional link). Grouping is a
presentation choice and easily adjusted.

**Infrastructure**
- Anil Madhavapeddy — Department of Computer Science & Technology, University of Cambridge
- Sadiq Jaffer — Department of Computer Science & Technology, University of Cambridge

**Conservation**
- William Sutherland — Department of Zoology, University of Cambridge
- Sam Reynolds — Department of Zoology, University of Cambridge
- Alec Christie — Imperial College London
- William Morgan — Cambridge Conservation Initiative

**Education**
- Jenny Gibson — Faculty of Education, University of Cambridge
- Melanie Greaux — Faculty of Education, University of Cambridge

### 3.3 Papers

The "key 5", newest first. Each entry: title · authors · venue, year · DOI link
· one-line plain-language summary. Metadata sourced from the `bushel` repo.

1. **AI-assisted Living Evidence Databases for Conservation Science** — Jaffer,
   Morgan, Reynolds, Christie, Madhavapeddy, Sutherland. *Cambridge Open Engage,
   2025.* doi:10.33774/coe-2025-rmsqf.
   *The flagship pipeline: a self-hosted, end-to-end system that ingests,
   screens, and extracts structured data from the literature — achieving 97%
   recall against a large manual review.*
2. **Will AI speed up literature reviews or derail them entirely?** — Reynolds,
   Christie, Dicks, Jaffer, Madhavapeddy, Sutherland. *Nature, 2025.*
   doi:10.1038/d41586-025-02069-w.
   *AI-generated "poison" papers threaten evidence synthesis — but traceable AI
   pipelines can be part of the defence.*
3. **Careful design of Large Language Model pipelines enables expert-level
   retrieval** — Iyer, Christie, Madhavapeddy, Reynolds, Sutherland, Jaffer.
   *PLOS ONE, 2025.* doi:10.1371/journal.pone.0323563.
   *Well-designed hybrid retrieval pipelines reach expert-level performance on
   conservation evidence questions — while off-the-shelf LLMs fall short.*
4. **Conservation changed but not divided** — Reynolds et al. *Trends in Ecology
   & Evolution, 2025.* doi:10.1016/j.tree.2025.04.002.
   *AI can unite rather than divide conservation — if built around human
   expertise, openness, and capacity-building.*
5. **The potential for AI to revolutionize conservation: a horizon scan** —
   Reynolds et al. *Trends in Ecology & Evolution, 2024.*
   doi:10.1016/j.tree.2024.11.013.
   *A horizon scan of where AI could most transform conservation practice —
   opportunities and risks.*

Exact author lists and summaries are finalized at build time from the data
file; long author lists may be truncated with "et al." in the UI.

## 4. Visual design

### 4.1 Concept — a living type specimen

The site *is* a Roslindale specimen. No boxes, shadows, or UI furniture. The
signature move: the hero presents key words (e.g. *evidence* / *living
evidence*) graded through the variable axes — the same word stepping through
weight (ExtraLight → Ultra), width (Display → Condensed), and roman → italic.
It shows the font "in variations" while stating what the project is.

### 4.2 Palette — warm editorial

- Ink: warm near-black `#17150F`
- Paper: warm off-white `#FAF8F2`
- Accent: a single muted colour (default deep botanical green `#33503F`),
  reserved for links/hover and the active nav item. The design must read
  correctly with the accent removed (pure monochrome fallback).
- Optional dark mode: near-black ground with paper-coloured type (the
  high-contrast serif glows); toggled, respects `prefers-color-scheme`.
  Dark mode is a nice-to-have, not required for first ship.

### 4.3 Type system (one family, full range)

- **Hero / wordmark:** Roslindale **Display** — variable woff2 for live axis
  play; huge, hairline-to-bold.
- **Section heads / domain labels / metadata:** Roslindale **Display Condensed**
  or **Deck Narrow**, small, letterspaced.
- **Body:** Roslindale **Text** (Regular / Italic / SemiBold).
- Hairline rules, generous whitespace, asymmetric single-column editorial grid.

### 4.4 Interaction (progressive enhancement)

- On load, the wordmark/hero breathes once via the variable `wght`/`wdth` axes
  and settles.
- Headings gain a touch of weight as the cursor nears (variable-axis response).
- All interactions are pure enhancement: with JavaScript disabled the page
  renders fully using static fallback weights. No layout shift depends on JS.
- Motion respects `prefers-reduced-motion` (animations disabled).

## 5. Information architecture

SvelteKit routes, shared minimal layout (header text nav: *Evidence TAP ·
People · Papers*; footer: contact `avsm2@cam.ac.uk` · University of Cambridge).

- `/` — wordmark + tagline specimen; the "what it is" paragraph; the two-domains
  statement; the quiet highlight stat; links to People and Papers.
- `/people` — the three strands above.
- `/papers` — the key 5, newest first.

Each route is its own focused unit; content lives in typed data modules
(`people`, `papers`) separate from presentation so entries can be edited
without touching layout.

## 6. Technical design

### 6.1 Stack

- **pnpm** package manager.
- **SvelteKit** (Svelte 5) with **`@sveltejs/adapter-static`** — every route
  prerendered; output is plain static HTML/CSS/JS, no server.
- **Vite** build. TypeScript (light) for the data modules.
- No UI framework or CSS library; hand-written CSS with custom properties for
  the palette and type scale.

### 6.2 Project structure (indicative)

```
src/
  routes/
    +layout.svelte        # header, footer, global styles, font @font-face
    +layout.ts            # prerender = true
    +page.svelte          # home
    people/+page.svelte
    papers/+page.svelte
  lib/
    data/people.ts        # typed people list (grouped by strand)
    data/papers.ts        # typed paper list
    components/            # Wordmark, SpecimenHero, PersonList, PaperList, ...
  app.css                 # tokens: colours, type scale, rules
static/
  fonts/                  # subset Roslindale woff2 actually used
  CNAME                   # evidencetap.org
  .nojekyll
svelte.config.js          # adapter-static, paths.base = ''
```

### 6.3 Fonts & licensing

- The DJR licence covers **web use** (15,000 monthly unique visitors). Source
  repo is **private**; GitHub Actions deploys only the **built artifact**, so
  the raw font package never lives in a public source tree.
- Only the woff2 files actually used are committed under `static/fonts`
  (the full `DJR-Fonts-*` package is gitignored). Target subset: the Roslindale
  **Variable** woff2 (covers the Display range for the specimen/interaction)
  plus **Text** Regular/Italic/SemiBold, and one Condensed/Narrow cut for
  labels. Keep total font payload lean.
- `@font-face` with `font-display: swap` and a serif fallback stack to avoid
  invisible text and minimize layout shift.

### 6.4 Deployment

- **GitHub Pages** via a GitHub Actions workflow (`.github/workflows/deploy.yml`):
  `pnpm install` → `pnpm build` → upload `build/` → deploy to Pages.
- Custom apex domain: `static/CNAME` = `evidencetap.org`; `paths.base = ''`
  (root, no `/repo/` prefix); `static/.nojekyll` so SvelteKit's `_app` assets
  are served.

## 7. Cross-cutting requirements

- **Accessibility:** semantic HTML, logical heading order, visible focus states,
  sufficient contrast in both palettes, `prefers-reduced-motion` honoured, fully
  usable without JS.
- **Performance:** subset fonts, no third-party requests, prerendered HTML;
  target a near-instant first paint with fallback fonts then swap.
- **SEO/social:** per-route `<title>`/description, a simple Open Graph/Twitter
  card (static OG image optional/later), `lang="en"`.
- **Responsive:** single fluid column; the specimen scales with the viewport
  (clamp-based type) and stays legible on mobile.

## 8. Verification

- `pnpm build` produces a static `build/` with `index.html`, `people/`,
  `papers/`, fonts, `CNAME`, `.nojekyll`.
- Manual check: pages render with Roslindale; site is fully functional with JS
  disabled; reduced-motion disables animation; Lighthouse pass on
  accessibility/performance.
- Links: every DOI resolves.

## 9. Assumptions & open items

- Person roles/titles are listed at affiliation level; finer titles can be added
  later. Affiliations as confirmed by owner: Morgan → CCI, Christie → Imperial,
  Greaux → Cambridge Education.
- Accent colour and the optional dark mode are tunable during implementation;
  the monochrome reading is the baseline.
- Exact hero composition (which words are graded, the specimen layout) is
  refined visually during build against this concept.
