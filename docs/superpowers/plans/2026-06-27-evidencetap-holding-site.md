# Evidence TAP holding site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimalist static holding site for Evidence TAP (`evidencetap.org`) — home, people, and papers — with the Roslindale variable font as the sole visual signature, deployable to GitHub Pages.

**Architecture:** SvelteKit (Svelte 5) prerendered to fully static HTML via `@sveltejs/adapter-static`. Content lives in typed data modules (`people`, `papers`) consumed by thin route/component code. The licensed Roslindale fonts are self-hosted and subset; the Display *variable* woff2 drives all headline/specimen typography through CSS `font-variation-settings`, with static Roslindale Text for body copy. GitHub Actions builds and deploys the `build/` artifact to Pages on the custom apex domain.

**Tech Stack:** pnpm · SvelteKit 2 · Svelte 5 · Vite 5 · TypeScript · Vitest · `@sveltejs/adapter-static` · hand-written CSS (no UI/CSS framework).

## Global Constraints

- Package manager: **pnpm** only. Every install/run command uses `pnpm`.
- Node: 20 LTS or newer.
- Site must be **fully static** (`adapter-static`, every route prerendered) — no server, no runtime data fetch, no third-party network requests at runtime.
- Custom apex domain `evidencetap.org`: `paths.base = ''` (root, no `/repo/` prefix). Ship `static/CNAME` (`evidencetap.org`) and `static/.nojekyll`.
- Fonts are licensed (DJR, web use ≤15k monthly visitors). Only the **subset actually used** is committed under `static/fonts/`. The full `DJR-Fonts-2026-06-27-e88882c/` package is gitignored (already in `.gitignore`). Source repo stays **private**; only the built artifact is published.
- Palette tokens (verbatim): paper `#FAF8F2`, ink `#17150F`, accent `#33503F`. Design must read correctly in pure monochrome (accent removable).
- Copy (verbatim): wordmark `Evidence TAP`; tagline `Empowering equitable, rational policymaking through living evidence.`; sub `The Cambridge Traceable AI pipeline.`; highlight `97% recall against a large-scale manual review.`
- People grouping/affiliations and the key-5 papers are the source of truth in `docs/superpowers/specs/2026-06-27-evidencetap-holding-site-design.md` §3.2/§3.3 — copy them exactly into the data modules.
- Accessibility: semantic HTML, visible focus, `prefers-reduced-motion` honoured, fully usable with JavaScript disabled. No layout shift may depend on JS.
- Commit after every task with a `feat:`/`chore:` style message. Repo already initialized; `.gitignore` already present.

---

### Task 1: Project scaffold & static build pipeline

Hand-write the SvelteKit + adapter-static scaffold (avoids interactive `sv create`) and prove `pnpm build` emits static HTML.

**Files:**
- Create: `package.json`, `.npmrc`, `svelte.config.js`, `vite.config.ts`, `tsconfig.json`
- Create: `src/app.html`, `src/app.css`
- Create: `src/routes/+layout.ts`, `src/routes/+layout.svelte`, `src/routes/+page.svelte`
- Create: `static/.nojekyll`, `static/favicon.svg`

**Interfaces:**
- Produces: a buildable SvelteKit app; root layout sets `export const prerender = true;` (every later route inherits prerendering). `src/app.css` is imported once in `+layout.svelte`.

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "evidencetap-site",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "test": "vitest run"
  },
  "devDependencies": {
    "@sveltejs/adapter-static": "^3.0.6",
    "@sveltejs/kit": "^2.8.0",
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "svelte": "^5.2.0",
    "svelte-check": "^4.1.0",
    "typescript": "^5.6.0",
    "vite": "^5.4.0",
    "vitest": "^2.1.0"
  },
  "packageManager": "pnpm@9.12.0"
}
```

- [ ] **Step 2: Write `.npmrc`**

```
auto-install-peers=true
```

- [ ] **Step 3: Write `svelte.config.js`**

```js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: { base: '' }
  }
};

export default config;
```

- [ ] **Step 4: Write `vite.config.ts`**

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
```

- [ ] **Step 5: Write `tsconfig.json`**

```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

- [ ] **Step 6: Write `src/app.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
```

- [ ] **Step 7: Write `static/.nojekyll` (empty file) and `static/favicon.svg`**

`static/.nojekyll`: empty file (create with no content).

`static/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#FAF8F2"/>
  <text x="16" y="23" font-family="Georgia, 'Times New Roman', serif" font-size="22" text-anchor="middle" fill="#17150F">E</text>
</svg>
```

- [ ] **Step 8: Write `src/app.css` (minimal tokens + reset; fonts added in Task 2)**

```css
:root {
  --paper: #faf8f2;
  --ink: #17150f;
  --accent: #33503f;
  --rule: rgba(23, 21, 15, 0.14);
  --measure: 62ch;
  --font-display: Georgia, "Times New Roman", serif; /* replaced in Task 2 */
  --font-text: Georgia, "Times New Roman", serif;     /* replaced in Task 2 */
}

* { box-sizing: border-box; }

html { -webkit-text-size-adjust: 100%; }

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-text);
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a { color: inherit; text-underline-offset: 0.18em; }
a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

img { max-width: 100%; }
```

- [ ] **Step 9: Write `src/routes/+layout.ts`**

```ts
export const prerender = true;
```

- [ ] **Step 10: Write `src/routes/+layout.svelte`**

```svelte
<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

{@render children()}
```

- [ ] **Step 11: Write `src/routes/+page.svelte` (temporary smoke page)**

```svelte
<h1>Evidence TAP</h1>
<p>Scaffold OK.</p>
```

- [ ] **Step 12: Install dependencies**

Run: `pnpm install`
Expected: completes without error; `node_modules/` and `pnpm-lock.yaml` created.

- [ ] **Step 13: Build and verify static output**

Run: `pnpm build`
Expected: completes; `build/index.html` exists and contains the text `Evidence TAP`.
Verify: `test -f build/index.html && grep -q "Evidence TAP" build/index.html && echo OK`

- [ ] **Step 14: Commit**

```bash
git add package.json .npmrc svelte.config.js vite.config.ts tsconfig.json src static pnpm-lock.yaml
git commit -m "chore: scaffold SvelteKit static site"
```

---

### Task 2: Self-host & wire the Roslindale font subset

Copy only the used woff2 into `static/fonts/`, declare `@font-face`, and point the CSS tokens at the real families.

**Files:**
- Create: `static/fonts/RoslindaleVariable.woff2`, `static/fonts/RoslindaleText-Regular.woff2`, `static/fonts/RoslindaleText-Italic.woff2`, `static/fonts/RoslindaleText-SemiBold.woff2`
- Modify: `src/app.css` (add `@font-face` block; update `--font-display` / `--font-text`)

**Interfaces:**
- Produces: CSS families `"Roslindale Display"` (variable: axes `opsz`,`slnt`,`wdth`,`wght`) and `"Roslindale Text"` (static 400/600 + italic), exposed via `--font-display` and `--font-text`.

- [ ] **Step 1: Copy the subset (note the variable source filename has brackets — rename on copy)**

```bash
mkdir -p static/fonts
SRC="DJR-Fonts-2026-06-27-e88882c/Roslindale_Web/fonts"
cp "$SRC/RoslindaleVariable[opsz,slnt,wdth,wght].woff2" static/fonts/RoslindaleVariable.woff2
cp "$SRC/RoslindaleText-Regular.woff2"  static/fonts/RoslindaleText-Regular.woff2
cp "$SRC/RoslindaleText-Italic.woff2"   static/fonts/RoslindaleText-Italic.woff2
cp "$SRC/RoslindaleText-SemiBold.woff2" static/fonts/RoslindaleText-SemiBold.woff2
```

- [ ] **Step 2: Verify the four files exist**

Run: `ls static/fonts/`
Expected: exactly `RoslindaleText-Italic.woff2 RoslindaleText-Regular.woff2 RoslindaleText-SemiBold.woff2 RoslindaleVariable.woff2`

- [ ] **Step 3: Prepend `@font-face` to `src/app.css` and update tokens**

Add at the very top of `src/app.css`:

```css
@font-face {
  font-family: "Roslindale Display";
  src: url("/fonts/RoslindaleVariable.woff2") format("woff2-variations");
  font-weight: 200 900;
  font-stretch: 50% 125%;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Roslindale Text";
  src: url("/fonts/RoslindaleText-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Roslindale Text";
  src: url("/fonts/RoslindaleText-Italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Roslindale Text";
  src: url("/fonts/RoslindaleText-SemiBold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
```

Then change the two token lines in `:root` to:

```css
  --font-display: "Roslindale Display", Georgia, "Times New Roman", serif;
  --font-text: "Roslindale Text", Georgia, "Times New Roman", serif;
```

- [ ] **Step 4: Verify build copies fonts**

Run: `pnpm build`
Expected: succeeds; `build/fonts/RoslindaleVariable.woff2` exists.
Verify: `test -f build/fonts/RoslindaleVariable.woff2 && echo OK`

- [ ] **Step 5: Manual visual check**

Run: `pnpm dev` and open the printed URL. Confirm the page renders in Roslindale (high-contrast serif), not the Georgia fallback. Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add static/fonts src/app.css
git commit -m "feat: self-host Roslindale font subset and wire @font-face"
```

---

### Task 3: Typed content model & data modules (TDD)

Define types and the people/papers data, with Vitest unit tests for the invariants that matter (papers sorted newest-first; required fields present; expected strands).

**Files:**
- Create: `src/lib/types.ts`
- Create: `src/lib/data/papers.ts`, `src/lib/data/papers.test.ts`
- Create: `src/lib/data/people.ts`, `src/lib/data/people.test.ts`

**Interfaces:**
- Produces:
  - `types.ts`: `interface Person { name: string; affiliation: string; url?: string }`, `interface PersonGroup { strand: string; people: Person[] }`, `interface Paper { title: string; authors: string[]; venue: string; year: number; month: number; doi: string; summary: string }`.
  - `people.ts`: `export const groups: PersonGroup[]` (order: Computer Science, Conservation, Education).
  - `papers.ts`: `export const papers: Paper[]` sorted newest-first; helper `export function doiUrl(doi: string): string`.

- [ ] **Step 1: Write `src/lib/types.ts`**

```ts
export interface Person {
  name: string;
  affiliation: string;
  url?: string;
}

export interface PersonGroup {
  strand: string;
  people: Person[];
}

export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  /** 1-12 */
  month: number;
  doi: string;
  summary: string;
}
```

- [ ] **Step 2: Write the failing test `src/lib/data/papers.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { papers, doiUrl } from "./papers";

describe("papers", () => {
  it("has the key 5", () => {
    expect(papers).toHaveLength(5);
  });

  it("every paper has the required fields", () => {
    for (const p of papers) {
      expect(p.title.length).toBeGreaterThan(0);
      expect(p.authors.length).toBeGreaterThan(0);
      expect(p.venue.length).toBeGreaterThan(0);
      expect(p.year).toBeGreaterThan(2000);
      expect(p.month).toBeGreaterThanOrEqual(1);
      expect(p.month).toBeLessThanOrEqual(12);
      expect(p.doi).toMatch(/^10\./);
      expect(p.summary.length).toBeGreaterThan(0);
    }
  });

  it("is sorted newest-first by year then month", () => {
    for (let i = 1; i < papers.length; i++) {
      const a = papers[i - 1];
      const b = papers[i];
      expect(a.year * 12 + a.month).toBeGreaterThanOrEqual(b.year * 12 + b.month);
    }
  });

  it("starts with the flagship Living Evidence Databases paper", () => {
    expect(papers[0].title).toMatch(/Living Evidence Databases/);
  });

  it("builds a resolvable DOI url", () => {
    expect(doiUrl("10.1038/d41586-025-02069-w")).toBe(
      "https://doi.org/10.1038/d41586-025-02069-w"
    );
  });
});
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `pnpm test`
Expected: FAIL — cannot resolve `./papers` (module not yet created).

- [ ] **Step 4: Write `src/lib/data/papers.ts`** (authors/venues/DOIs/summaries verbatim from spec §3.3; pre-sorted newest-first)

```ts
import type { Paper } from "$lib/types";

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}

export const papers: Paper[] = [
  {
    title: "AI-assisted Living Evidence Databases for Conservation Science",
    authors: [
      "Sadiq Jaffer",
      "William Morgan",
      "Sam Reynolds",
      "Alec Christie",
      "Anil Madhavapeddy",
      "William Sutherland"
    ],
    venue: "Cambridge Open Engage",
    year: 2025,
    month: 10,
    doi: "10.33774/coe-2025-rmsqf",
    summary:
      "The flagship pipeline: a self-hosted, end-to-end system that ingests, screens, and extracts structured data from the literature — achieving 97% recall against a large manual review."
  },
  {
    title: "Will AI speed up literature reviews or derail them entirely?",
    authors: [
      "Sam Reynolds",
      "Alec Christie",
      "Lynn Dicks",
      "Sadiq Jaffer",
      "Anil Madhavapeddy",
      "William J. Sutherland"
    ],
    venue: "Nature",
    year: 2025,
    month: 7,
    doi: "10.1038/d41586-025-02069-w",
    summary:
      "AI-generated “poison” papers threaten evidence synthesis — but traceable AI pipelines can be part of the defence."
  },
  {
    title:
      "Careful design of Large Language Model pipelines enables expert-level retrieval",
    authors: [
      "Radhika Iyer",
      "Alec Philip Christie",
      "Anil Madhavapeddy",
      "Sam Reynolds",
      "William Sutherland",
      "Sadiq Jaffer"
    ],
    venue: "PLOS ONE",
    year: 2025,
    month: 5,
    doi: "10.1371/journal.pone.0323563",
    summary:
      "Well-designed hybrid retrieval pipelines reach expert-level performance on conservation evidence questions — while off-the-shelf LLMs fall short."
  },
  {
    title: "Conservation changed but not divided",
    authors: ["Sam A. Reynolds", "et al."],
    venue: "Trends in Ecology & Evolution",
    year: 2025,
    month: 4,
    doi: "10.1016/j.tree.2025.04.002",
    summary:
      "AI can unite rather than divide conservation — if built around human expertise, openness, and capacity-building."
  },
  {
    title: "The potential for AI to revolutionize conservation: a horizon scan",
    authors: ["Sam Reynolds", "et al."],
    venue: "Trends in Ecology & Evolution",
    year: 2024,
    month: 12,
    doi: "10.1016/j.tree.2024.11.013",
    summary:
      "A horizon scan of where AI could most transform conservation practice — opportunities and risks."
  }
];
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `pnpm test`
Expected: PASS (papers suite green).

- [ ] **Step 6: Write the failing test `src/lib/data/people.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { groups } from "./people";

describe("people", () => {
  it("has the three strands in order", () => {
    expect(groups.map((g) => g.strand)).toEqual([
      "Computer Science",
      "Conservation",
      "Education"
    ]);
  });

  it("every group has people, every person has name + affiliation", () => {
    for (const g of groups) {
      expect(g.people.length).toBeGreaterThan(0);
      for (const p of g.people) {
        expect(p.name.length).toBeGreaterThan(0);
        expect(p.affiliation.length).toBeGreaterThan(0);
      }
    }
  });

  it("includes the ten named collaborators", () => {
    const names = groups.flatMap((g) => g.people.map((p) => p.name));
    expect(names).toHaveLength(10);
    expect(names).toContain("Anil Madhavapeddy");
    expect(names).toContain("Robin Message");
    expect(names).toContain("Lynn Dicks");
    expect(names).toContain("Melanie Greaux");
  });
});
```

- [ ] **Step 7: Run the test to verify it fails**

Run: `pnpm test`
Expected: FAIL — cannot resolve `./people`.

- [ ] **Step 8: Write `src/lib/data/people.ts`** (verbatim from spec §3.2)

```ts
import type { PersonGroup } from "$lib/types";

export const groups: PersonGroup[] = [
  {
    strand: "Computer Science",
    people: [
      { name: "Anil Madhavapeddy", affiliation: "Department of Computer Science & Technology, University of Cambridge" },
      { name: "Sadiq Jaffer", affiliation: "Department of Computer Science & Technology, University of Cambridge" },
      { name: "Robin Message", affiliation: "Department of Computer Science & Technology, University of Cambridge" }
    ]
  },
  {
    strand: "Conservation",
    people: [
      { name: "Lynn Dicks", affiliation: "Department of Zoology, University of Cambridge" },
      { name: "William Sutherland", affiliation: "Department of Zoology, University of Cambridge" },
      { name: "Sam Reynolds", affiliation: "Department of Zoology, University of Cambridge" },
      { name: "William Morgan", affiliation: "Department of Zoology, University of Cambridge" },
      { name: "Alec Christie", affiliation: "Imperial College London" }
    ]
  },
  {
    strand: "Education",
    people: [
      { name: "Jenny Gibson", affiliation: "Faculty of Education, University of Cambridge" },
      { name: "Melanie Greaux", affiliation: "Faculty of Education, University of Cambridge" }
    ]
  }
];
```

- [ ] **Step 9: Run the full test suite**

Run: `pnpm test`
Expected: PASS (both suites).

- [ ] **Step 10: Commit**

```bash
git add src/lib/types.ts src/lib/data
git commit -m "feat: typed people and papers data with tests"
```

---

### Task 4: Shared layout — header & footer

Add the persistent minimal nav and footer used by every page.

**Files:**
- Create: `src/lib/components/SiteHeader.svelte`, `src/lib/components/SiteFooter.svelte`
- Modify: `src/routes/+layout.svelte`

**Interfaces:**
- Consumes: `$app/stores` `page` for active-link state.
- Produces: `<SiteHeader />`, `<SiteFooter />` (no props). Layout wraps page content in `<main class="wrap">`.

- [ ] **Step 1: Write `src/lib/components/SiteHeader.svelte`**

```svelte
<script lang="ts">
  import { page } from "$app/stores";
  const nav = [
    { href: "/", label: "Evidence TAP" },
    { href: "/people", label: "People" },
    { href: "/papers", label: "Papers" }
  ];
  const active = (href: string, path: string) =>
    href === "/" ? path === "/" : path.startsWith(href);
</script>

<header class="site-header">
  <nav aria-label="Primary">
    {#each nav as item}
      <a
        href={item.href}
        class:active={active(item.href, $page.url.pathname)}
        aria-current={active(item.href, $page.url.pathname) ? "page" : undefined}
      >{item.label}</a>
    {/each}
  </nav>
</header>

<style>
  .site-header {
    border-bottom: 1px solid var(--rule);
  }
  nav {
    display: flex;
    gap: 1.75rem;
    align-items: baseline;
    max-width: 72rem;
    margin: 0 auto;
    padding: 1.4rem clamp(1.25rem, 5vw, 4rem);
  }
  a {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 12, "wght" 480, "wdth" 88;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--ink);
    opacity: 0.62;
    transition: opacity 0.2s ease;
  }
  a:first-child { margin-right: auto; opacity: 1; letter-spacing: 0.02em; }
  a:hover { opacity: 1; }
  a.active { opacity: 1; color: var(--accent); }
</style>
```

- [ ] **Step 2: Write `src/lib/components/SiteFooter.svelte`**

```svelte
<footer class="site-footer">
  <p>
    <a href="mailto:avsm2@cam.ac.uk">avsm2@cam.ac.uk</a>
    <span aria-hidden="true">·</span>
    University of Cambridge
  </p>
</footer>

<style>
  .site-footer {
    border-top: 1px solid var(--rule);
    margin-top: 6rem;
  }
  p {
    max-width: 72rem;
    margin: 0 auto;
    padding: 2rem clamp(1.25rem, 5vw, 4rem) 3rem;
    font-size: 0.85rem;
    opacity: 0.7;
  }
  span { margin: 0 0.5em; }
  a { text-decoration: none; }
  a:hover { color: var(--accent); text-decoration: underline; }
</style>
```

- [ ] **Step 3: Update `src/routes/+layout.svelte`**

```svelte
<script lang="ts">
  import "../app.css";
  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  let { children } = $props();
</script>

<SiteHeader />
<main class="wrap">
  {@render children()}
</main>
<SiteFooter />

<style>
  .wrap {
    max-width: 72rem;
    margin: 0 auto;
    padding: clamp(2.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem) 0;
  }
</style>
```

- [ ] **Step 4: Build to verify nav prerenders on every route**

Run: `pnpm build`
Expected: succeeds; `grep -q "People" build/index.html` returns success.

- [ ] **Step 5: Commit**

```bash
git add src/lib/components/SiteHeader.svelte src/lib/components/SiteFooter.svelte src/routes/+layout.svelte
git commit -m "feat: shared header and footer layout"
```

---

### Task 5: Home page & SpecimenHero

Build the typographic hero (the variable-font "specimen" signature) and the home content. Interaction is progressive enhancement and respects reduced motion.

**Files:**
- Create: `src/lib/components/SpecimenHero.svelte`
- Modify: `src/routes/+page.svelte` (replace smoke page)

**Interfaces:**
- Consumes: nothing (static copy from spec §3.1).
- Produces: `<SpecimenHero />` (no props). Home page composes hero + intro + domains + highlight + links.

- [ ] **Step 1: Write `src/lib/components/SpecimenHero.svelte`**

```svelte
<script lang="ts">
  import { onMount } from "svelte";
  let settled = $state(false);

  onMount(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      settled = true;
      return;
    }
    const id = requestAnimationFrame(() => (settled = true));
    return () => cancelAnimationFrame(id);
  });
</script>

<div class="hero" class:settled>
  <p class="wordmark">Evidence&nbsp;<span class="tap">TAP</span></p>
  <h1 class="tagline">
    Empowering equitable, rational policymaking through
    <em>living&nbsp;evidence</em>.
  </h1>
  <p class="sub">The Cambridge Traceable AI pipeline.</p>
</div>

<style>
  .hero { padding: clamp(1rem, 4vw, 3rem) 0 clamp(2rem, 6vw, 4rem); }

  .wordmark {
    margin: 0 0 clamp(1.5rem, 4vw, 2.5rem);
    font-family: var(--font-display);
    font-variation-settings: "opsz" 16, "wght" 520, "wdth" 84;
    font-size: 0.95rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.66;
  }
  .wordmark .tap { font-variation-settings: "opsz" 16, "wght" 760, "wdth" 84; }

  .tagline {
    margin: 0;
    max-width: 18ch;
    font-family: var(--font-display);
    font-weight: normal;
    font-variation-settings: "opsz" 80, "wght" 300, "wdth" 100;
    font-size: clamp(2.6rem, 1.2rem + 8vw, 7rem);
    line-height: 0.98;
    letter-spacing: -0.012em;
    /* animate the variable axes on load */
    transition:
      font-variation-settings 1100ms cubic-bezier(0.2, 0.7, 0.2, 1),
      opacity 900ms ease;
    opacity: 0.001;
  }
  .hero.settled .tagline { opacity: 1; }

  /* pre-settle (thin/wide) -> settled (set weight). Reduced-motion users
     jump straight to settled because .settled is applied immediately. */
  .tagline { font-variation-settings: "opsz" 80, "wght" 220, "wdth" 112; }
  .hero.settled .tagline {
    font-variation-settings: "opsz" 80, "wght" 360, "wdth" 100;
  }

  .tagline em {
    font-style: italic;
    font-variation-settings: "opsz" 80, "slnt" -10, "wght" 540, "wdth" 92;
    color: var(--accent);
  }

  .sub {
    margin: clamp(1.5rem, 4vw, 2.5rem) 0 0;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 24, "wght" 380, "wdth" 96;
    font-size: clamp(1.1rem, 0.9rem + 1vw, 1.6rem);
    font-style: italic;
    opacity: 0.8;
  }

  @media (prefers-reduced-motion: reduce) {
    .tagline { transition: none; }
  }
</style>
```

- [ ] **Step 2: Write `src/routes/+page.svelte`**

```svelte
<script lang="ts">
  import SpecimenHero from "$lib/components/SpecimenHero.svelte";
</script>

<svelte:head>
  <title>Evidence TAP — living evidence for policymaking</title>
  <meta
    name="description"
    content="Evidence TAP builds traceable AI pipelines that keep research evidence continuously up to date, across conservation, education, and beyond."
  />
</svelte:head>

<SpecimenHero />

<section class="intro">
  <p>
    Evidence TAP builds traceable AI pipelines that keep the world's research
    evidence continuously up to date. Instead of one-off systematic reviews that
    age the moment they are published, the pipeline ingests, screens, and
    extracts structured data from the literature on local, self-hosted
    infrastructure — with human verification retained at each step. It began in
    conservation and is now being applied to education, with more fields to
    follow.
  </p>

  <p class="highlight">
    <strong>97% recall</strong> against a large-scale manual review.
  </p>

  <ul class="domains" aria-label="Fields">
    <li>Conservation</li>
    <li>Education</li>
    <li class="more"><em>more to follow</em></li>
  </ul>

  <nav class="more-links" aria-label="Sections">
    <a href="/people">People</a>
    <a href="/papers">Papers</a>
  </nav>
</section>

<style>
  .intro { max-width: var(--measure); }
  .intro p { font-size: clamp(1.05rem, 1rem + 0.5vw, 1.3rem); }

  .highlight {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 40, "wght" 360, "wdth" 100;
    font-size: clamp(1.4rem, 1rem + 2vw, 2.2rem);
    line-height: 1.2;
    margin: 2.5rem 0;
  }
  .highlight strong {
    font-variation-settings: "opsz" 40, "wght" 680, "wdth" 100;
    color: var(--accent);
  }

  .domains {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.25rem;
    padding: 0;
    margin: 0 0 3.5rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 18, "wght" 460, "wdth" 80;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.95rem;
  }
  .domains li:not(:last-child)::after {
    content: "·";
    margin-left: 1.25rem;
    opacity: 0.4;
  }
  .domains .more { opacity: 0.55; text-transform: none; letter-spacing: 0; }

  .more-links { display: flex; gap: 2rem; }
  .more-links a {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 28, "wght" 420, "wdth" 96;
    font-size: 1.35rem;
    text-decoration: none;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 0.15em;
  }
  .more-links a:hover { color: var(--accent); border-color: var(--accent); }
</style>
```

- [ ] **Step 3: Build & smoke-check the home content**

Run: `pnpm build`
Expected: succeeds.
Verify: `grep -q "Empowering equitable" build/index.html && grep -q "97% recall" build/index.html && echo OK`

- [ ] **Step 4: Manual check (font specimen + no-JS)**

Run: `pnpm dev`; confirm the hero animates once and settles, the italic "living evidence" is in the accent colour, and the layout is stable. Then view source / disable JS and confirm the hero text is still fully visible. Stop the server.

- [ ] **Step 5: Commit**

```bash
git add src/lib/components/SpecimenHero.svelte src/routes/+page.svelte
git commit -m "feat: home page with variable-font specimen hero"
```

---

### Task 6: People page

Render the three strands.

**Files:**
- Create: `src/lib/components/PersonList.svelte`
- Create: `src/routes/people/+page.svelte`

**Interfaces:**
- Consumes: `groups` from `$lib/data/people`, `PersonGroup` from `$lib/types`.
- Produces: `<PersonList {groups} />` where `groups: PersonGroup[]`.

- [ ] **Step 1: Write `src/lib/components/PersonList.svelte`**

```svelte
<script lang="ts">
  import type { PersonGroup } from "$lib/types";
  let { groups }: { groups: PersonGroup[] } = $props();
</script>

<div class="strands">
  {#each groups as group}
    <section class="strand">
      <h2>{group.strand}</h2>
      <ul>
        {#each group.people as person}
          <li>
            <span class="name">
              {#if person.url}
                <a href={person.url}>{person.name}</a>
              {:else}
                {person.name}
              {/if}
            </span>
            <span class="affil">{person.affiliation}</span>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  .strands { display: grid; gap: 3.5rem; max-width: 56rem; }
  h2 {
    margin: 0 0 1.25rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 16, "wght" 520, "wdth" 78;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9rem;
    color: var(--accent);
    border-bottom: 1px solid var(--rule);
    padding-bottom: 0.6rem;
  }
  ul { list-style: none; margin: 0; padding: 0; }
  li { padding: 0.6rem 0; }
  .name {
    display: block;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 36, "wght" 420, "wdth" 100;
    font-size: clamp(1.3rem, 1.1rem + 1vw, 1.7rem);
    line-height: 1.15;
  }
  .name a { text-decoration: none; }
  .name a:hover { color: var(--accent); text-decoration: underline; }
  .affil { font-size: 0.95rem; opacity: 0.66; font-style: italic; }
</style>
```

- [ ] **Step 2: Write `src/routes/people/+page.svelte`**

```svelte
<script lang="ts">
  import { groups } from "$lib/data/people";
  import PersonList from "$lib/components/PersonList.svelte";
</script>

<svelte:head>
  <title>People — Evidence TAP</title>
  <meta name="description" content="The Evidence TAP team across computer science, conservation, and education." />
</svelte:head>

<h1 class="page-title">People</h1>
<PersonList {groups} />

<style>
  .page-title {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 72, "wght" 300, "wdth" 100;
    font-size: clamp(2.4rem, 1.4rem + 5vw, 4.5rem);
    line-height: 1;
    margin: 0 0 clamp(2rem, 5vw, 3.5rem);
    letter-spacing: -0.01em;
  }
</style>
```

- [ ] **Step 3: Build & verify**

Run: `pnpm build`
Expected: succeeds; `build/people/index.html` exists.
Verify: `grep -q "Melanie Greaux" build/people/index.html && grep -q "Computer Science" build/people/index.html && echo OK`

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/PersonList.svelte src/routes/people/+page.svelte
git commit -m "feat: people page grouped by strand"
```

---

### Task 7: Papers page

Render the key-5 papers, newest-first, each linking to its DOI.

**Files:**
- Create: `src/lib/components/PaperList.svelte`
- Create: `src/routes/papers/+page.svelte`

**Interfaces:**
- Consumes: `papers`, `doiUrl` from `$lib/data/papers`, `Paper` from `$lib/types`.
- Produces: `<PaperList {papers} />` where `papers: Paper[]`.

- [ ] **Step 1: Write `src/lib/components/PaperList.svelte`**

```svelte
<script lang="ts">
  import type { Paper } from "$lib/types";
  import { doiUrl } from "$lib/data/papers";
  let { papers }: { papers: Paper[] } = $props();

  const authorLine = (authors: string[]) =>
    authors.length > 4
      ? `${authors.slice(0, 3).join(", ")}, et al.`
      : authors.join(", ");
</script>

<ol class="papers">
  {#each papers as paper}
    <li>
      <h2 class="title">
        <a href={doiUrl(paper.doi)} rel="noopener">{paper.title}</a>
      </h2>
      <p class="meta">
        {authorLine(paper.authors)}
        <span aria-hidden="true">·</span>
        <span class="venue">{paper.venue}, {paper.year}</span>
      </p>
      <p class="summary">{paper.summary}</p>
      <p class="doi"><a href={doiUrl(paper.doi)} rel="noopener">doi:{paper.doi}</a></p>
    </li>
  {/each}
</ol>

<style>
  .papers { list-style: none; margin: 0; padding: 0; max-width: 52rem; }
  li { padding: 2.25rem 0; border-top: 1px solid var(--rule); }
  li:first-child { border-top: none; padding-top: 0; }

  .title {
    margin: 0 0 0.6rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 44, "wght" 400, "wdth" 96;
    font-size: clamp(1.5rem, 1.2rem + 1.6vw, 2.3rem);
    line-height: 1.08;
    letter-spacing: -0.01em;
  }
  .title a { text-decoration: none; }
  .title a:hover { color: var(--accent); }

  .meta {
    margin: 0 0 0.9rem;
    font-style: italic;
    opacity: 0.72;
    font-size: 0.98rem;
  }
  .meta span { margin: 0 0.35em; }
  .venue { font-style: normal; opacity: 0.9; }

  .summary { margin: 0 0 0.8rem; max-width: 46ch; }

  .doi { margin: 0; font-size: 0.85rem; }
  .doi a {
    font-family: var(--font-text);
    opacity: 0.6;
    text-decoration: none;
    letter-spacing: 0.01em;
  }
  .doi a:hover { opacity: 1; color: var(--accent); text-decoration: underline; }
</style>
```

- [ ] **Step 2: Write `src/routes/papers/+page.svelte`**

```svelte
<script lang="ts">
  import { papers } from "$lib/data/papers";
  import PaperList from "$lib/components/PaperList.svelte";
</script>

<svelte:head>
  <title>Papers — Evidence TAP</title>
  <meta name="description" content="Selected papers from the Evidence TAP project on living evidence and AI-assisted synthesis." />
</svelte:head>

<h1 class="page-title">Papers</h1>
<PaperList {papers} />

<style>
  .page-title {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 72, "wght" 300, "wdth" 100;
    font-size: clamp(2.4rem, 1.4rem + 5vw, 4.5rem);
    line-height: 1;
    margin: 0 0 clamp(2rem, 5vw, 3.5rem);
    letter-spacing: -0.01em;
  }
</style>
```

- [ ] **Step 3: Build & verify**

Run: `pnpm build`
Expected: succeeds; `build/papers/index.html` exists.
Verify: `grep -q "Living Evidence Databases" build/papers/index.html && grep -q "doi.org/10.1038" build/papers/index.html && echo OK`

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/PaperList.svelte src/routes/papers/+page.svelte
git commit -m "feat: papers page with DOI links"
```

---

### Task 8: Accessibility, motion, SEO & responsive polish

Cross-cutting pass: focus styles, reduced-motion, shared meta defaults, social card, mobile spacing.

**Files:**
- Modify: `src/app.css` (focus-visible already present — add reduced-motion guard, link hover defaults)
- Modify: `src/app.html` (add Open Graph / Twitter defaults + theme-color)
- Create: `static/og.svg` (optional simple social card referenced by meta)

**Interfaces:**
- Produces: global reduced-motion rule; default OG/Twitter tags overridable per-route by `<svelte:head>`.

- [ ] **Step 1: Append to `src/app.css`**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

main :where(p) a { color: var(--accent); }
```

- [ ] **Step 2: Add default head tags to `src/app.html`** (inside `<head>`, before `%sveltekit.head%`)

```html
    <meta name="theme-color" content="#faf8f2" />
    <meta property="og:site_name" content="Evidence TAP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Evidence TAP" />
    <meta
      property="og:description"
      content="Empowering equitable, rational policymaking through living evidence. The Cambridge Traceable AI pipeline."
    />
    <meta property="og:url" content="https://evidencetap.org/" />
    <meta property="og:image" content="https://evidencetap.org/og.svg" />
    <meta name="twitter:card" content="summary_large_image" />
```

- [ ] **Step 3: Create `static/og.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf8f2"/>
  <text x="100" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="120" fill="#17150f">Evidence TAP</text>
  <text x="104" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-style="italic" fill="#33503f">Empowering policymaking through living evidence</text>
</svg>
```

- [ ] **Step 4: Build & verify meta present**

Run: `pnpm build`
Expected: succeeds.
Verify: `grep -q 'og:title' build/index.html && grep -q 'theme-color' build/index.html && echo OK`

- [ ] **Step 5: Manual responsive + a11y check**

Run: `pnpm dev`; narrow the viewport to ~360px and confirm the hero/type scales without overflow; tab through the page and confirm visible focus rings; toggle OS reduced-motion and confirm the hero no longer animates. Stop the server.

- [ ] **Step 6: Commit**

```bash
git add src/app.css src/app.html static/og.svg
git commit -m "feat: a11y, reduced-motion, and social meta polish"
```

---

### Task 9: GitHub Pages deployment

Add the custom-domain file and the Actions workflow that builds and publishes the static artifact.

**Files:**
- Create: `static/CNAME`
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

**Interfaces:**
- Produces: a Pages deploy on push to the default branch; `build/CNAME` and `build/.nojekyll` present in the artifact.

- [ ] **Step 1: Write `static/CNAME`**

```
evidencetap.org
```

- [ ] **Step 2: Write `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Write `README.md`**

```markdown
# evidencetap.org

Static holding site for **Evidence TAP** — the Cambridge Traceable AI pipeline.

## Develop

```bash
pnpm install
pnpm dev        # local dev server
pnpm test       # data-module unit tests
pnpm build      # static output -> build/
pnpm preview    # serve the built site
```

## Stack

SvelteKit (Svelte 5) prerendered via `@sveltejs/adapter-static`. Roslindale
(DJR) self-hosted under `static/fonts/` (web-licensed; subset only). Content
lives in `src/lib/data/`.

## Deploy

Push to `main` → GitHub Actions builds and publishes `build/` to GitHub Pages
on the custom domain `evidencetap.org` (`static/CNAME`).

> Repo is private; only the built artifact is published. The full DJR font
> package is gitignored — see `docs/superpowers/specs/`.
```

- [ ] **Step 4: Verify the artifact contains the domain files**

Run: `pnpm build`
Expected: succeeds.
Verify: `test -f build/CNAME && test -f build/.nojekyll && grep -q evidencetap.org build/CNAME && echo OK`

- [ ] **Step 5: Validate workflow YAML**

Run: `python3 -c "import yaml,sys; yaml.safe_load(open('.github/workflows/deploy.yml')); print('yaml OK')"`
Expected: `yaml OK`

- [ ] **Step 6: Commit**

```bash
git add static/CNAME .github/workflows/deploy.yml README.md
git commit -m "chore: GitHub Pages deploy workflow and custom domain"
```

---

## Post-implementation (manual, outside this plan)

These require GitHub/DNS access and are the owner's to perform:
- Create the **private** GitHub repo, push, and set **Settings → Pages → Source: GitHub Actions**.
- DNS for the apex domain: `A`/`AAAA` records to GitHub Pages IPs (or `ALIAS`/`ANAME` to `<user>.github.io`), then enable **Enforce HTTPS**.
- Confirm the live site renders Roslindale and the DOI links resolve.

## Deferred / optional (per spec — not in this plan)

- Dark mode toggle (`prefers-color-scheme` + manual switch).
- Per-letter cursor-proximity weight effect on headings (current plan ships the simpler load-breathe + hover behaviour).
- A rasterised PNG OG image (current plan ships an SVG card).

## Self-review notes

- **Spec coverage:** §3.1 copy → Task 5; §3.2 people → Tasks 3,6; §3.3 papers → Tasks 3,7; §4 visual/type/interaction → Tasks 2,5 (+ component styles); §5 IA/routes → Tasks 4–7; §6 stack/structure/fonts/deploy → Tasks 1,2,9; §7 a11y/perf/SEO/responsive → Task 8; §8 verification → build/grep checks in each task; §9 assumptions → data modules + deferred list.
- **Placeholder scan:** no TBD/TODO; every code step contains full file contents.
- **Type consistency:** `Person`/`PersonGroup`/`Paper` defined in Task 3 `types.ts`; `groups`/`papers`/`doiUrl` consumed with matching names/types in Tasks 6/7; `$props()` destructuring matches the documented prop shapes.
