<script lang="ts">
  import SpecimenHero from "$lib/components/SpecimenHero.svelte";
  import PaperList from "$lib/components/PaperList.svelte";
  import { papers } from "$lib/data/papers";
</script>

<svelte:head>
  <title>Evidence TAP — living evidence for policymaking</title>
  <meta
    name="description"
    content="Evidence TAP is a traceable AI pipeline that maintains living evidence databases — continuously ingesting, screening, appraising and extracting the research literature so that systematic reviews stay current for policymaking, across conservation, education, and beyond."
  />
</svelte:head>

<SpecimenHero />

<section class="about">
  <h2 class="label">What we're building</h2>

  <p class="lead">
    Conventional systematic reviews are slow and costly, and they start going out
    of date the moment they are published — yet policymakers often need current,
    context-specific evidence within narrow windows. Evidence TAP replaces one-off
    reviews with <em>living evidence databases</em> that keep updating as new
    research appears.
  </p>

  <p>
    At its core is a <strong>traceable AI pipeline</strong>. It ingests the
    literature across many sources and languages, screens it for relevance,
    appraises study design, and extracts structured data — with every output kept
    fully traceable back to its original source. It runs on local, self-hosted
    models, pairing keyword and semantic retrieval with a statistically-principled
    stopping rule.
  </p>

  <ul class="stages" aria-label="Pipeline stages">
    <li>Ingest</li>
    <li>Screen</li>
    <li>Appraise</li>
    <li>Extract</li>
    <li>Synthesise</li>
  </ul>

  <p class="highlight">
    <strong>97% recall</strong> against a large-scale manual review.
  </p>

  <p>
    The pipeline adapts to the decision at hand. For urgent questions it can
    synthesise all of the available evidence rapidly with minimal human checking,
    flagging gaps for follow-up; where the stakes are higher, experts verify each
    stage. Every verification is retained and feeds back into the models, so the
    system keeps improving — a transparent, quantifiable trade-off between speed
    and accuracy.
  </p>

  <p>
    It began in conservation, through Cambridge's Conservation Evidence
    collaboration, and is now being applied to education — with health, climate
    and other fields to follow. The longer-term aim is a global mesh of
    self-hosted nodes, sharing evidence equitably across and within countries.
  </p>

  <ul class="domains" aria-label="Fields">
    <li>Conservation</li>
    <li>Education</li>
    <li class="more"><em>more to follow</em></li>
  </ul>
</section>

<section id="papers" class="papers-section">
  <h2 class="label">Papers</h2>
  <PaperList {papers} titleAs="h3" />
</section>

<nav class="closing" aria-label="Sections">
  <a href="/people">Meet the team</a>
</nav>

<style>
  .label {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 16, "wght" 520, "wdth" 78;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9rem;
    color: var(--accent);
    margin: 0 0 1.5rem;
  }

  .about { max-width: var(--measure); }
  .about p { font-size: clamp(1.05rem, 1rem + 0.5vw, 1.3rem); }
  .about .lead {
    font-size: clamp(1.2rem, 1.05rem + 1vw, 1.6rem);
    line-height: 1.4;
  }
  .about em { font-style: italic; color: var(--accent); }
  .about strong { font-weight: 600; }

  .stages {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
    padding: 0;
    margin: 2.5rem 0;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 20, "wght" 440, "wdth" 78;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: clamp(0.95rem, 0.8rem + 0.7vw, 1.2rem);
  }
  .stages li:not(:last-child)::after {
    content: "→";
    margin-left: 1rem;
    opacity: 0.4;
    color: var(--accent);
  }

  .highlight {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 40, "wght" 360, "wdth" 100;
    font-size: clamp(1.4rem, 1rem + 2vw, 2.2rem) !important;
    line-height: 1.2;
    margin: 2.5rem 0;
  }
  .highlight strong {
    font-variation-settings: "opsz" 40, "wght" 680, "wdth" 100;
    color: var(--accent);
    font-weight: normal;
  }

  .domains {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.25rem;
    padding: 0;
    margin: 2.5rem 0 0;
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

  .papers-section {
    margin-top: clamp(4rem, 9vw, 7rem);
    padding-top: clamp(2.5rem, 6vw, 4rem);
    border-top: 1px solid var(--rule);
    scroll-margin-top: 2rem;
  }

  .closing { margin-top: clamp(3.5rem, 8vw, 6rem); }
  .closing a {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 28, "wght" 420, "wdth" 96;
    font-size: 1.35rem;
    text-decoration: none;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 0.15em;
  }
  .closing a:hover { color: var(--accent); border-color: var(--accent); }
</style>
