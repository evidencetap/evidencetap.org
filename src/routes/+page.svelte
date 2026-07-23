<script lang="ts">
  import SpecimenHero from "$lib/components/SpecimenHero.svelte";
  import PaperList from "$lib/components/PaperList.svelte";
  import PersonList from "$lib/components/PersonList.svelte";
  import PipelineDiagram from "$lib/components/PipelineDiagram.svelte";
  import { papers } from "$lib/data/papers";
  import { groups } from "$lib/data/people";
</script>

<svelte:head>
  <title>Evidence TAP: living evidence for policymaking</title>
  <meta
    name="description"
    content="Evidence TAP is a traceable AI pipeline that maintains living evidence databases. It continuously ingests, screens, appraises and extracts the research literature, keeping systematic reviews current for policymaking in conservation, education, and beyond."
  />
</svelte:head>

<SpecimenHero />

<section id="about" class="about">
  <h2 class="headline">What we're building</h2>

  <p class="lead">
    Conventional systematic reviews are slow and costly, and they start going out
    of date the moment they are published. Yet policymakers often need current,
    context-specific evidence within narrow windows. Evidence TAP replaces one-off
    reviews with <em>living evidence databases</em> that keep updating as new
    research appears.
  </p>

  <p>
    At its core is a <strong>traceable AI pipeline</strong>. It ingests the
    literature across many sources and languages, screens it for relevance,
    appraises study design, and extracts structured data. Every output remains
    traceable to its original source. The pipeline runs on local, self-hosted
    models, pairing keyword and semantic retrieval with a statistically principled
    stopping rule.
  </p>

  <PipelineDiagram />

  <p class="highlight">
    <strong>97% recall</strong> against a large-scale manual review.
  </p>

  <p>
    The pipeline adapts to the decision at hand. For urgent questions it can
    synthesise all of the available evidence rapidly with minimal human checking,
    flagging gaps for follow-up; where the stakes are higher, experts verify each
    stage. Every verification is retained and feeds back into the models, so the
    system keeps improving. The trade-off between speed and accuracy is
    transparent and quantifiable.
  </p>

  <p>
    It began in conservation, through Cambridge's Conservation Evidence
    collaboration, and is now being applied to education. Health, climate and
    other fields will follow. The longer-term aim is a global mesh of
    self-hosted nodes that shares evidence equitably across and within countries.
  </p>

  <ul class="domains" aria-label="Fields">
    <li>Conservation</li>
    <li>Education</li>
    <li class="more"><em>more to follow</em></li>
  </ul>
</section>

<section id="papers" class="band">
  <h2 class="headline">Papers</h2>
  <PaperList {papers} titleAs="h3" />
</section>

<section id="people" class="band">
  <h2 class="headline">People</h2>
  <PersonList {groups} />
</section>

<style>
  .headline {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 40, "wght" 480, "wdth" 80;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: var(--text-headline);
    line-height: 1.05;
    color: var(--accent);
    margin: 0 0 clamp(1.5rem, 4vw, 2.5rem);
  }

  .about { max-width: var(--measure); }
  .about p { font-size: var(--text-body); }
  .about .lead {
    font-size: var(--text-lead);
    line-height: 1.4;
  }
  .about em { font-style: italic; color: var(--accent); }
  .about strong { font-weight: 600; }

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

  .band {
    margin-top: clamp(4rem, 9vw, 7rem);
    padding-top: clamp(2.5rem, 6vw, 4rem);
    border-top: 1px solid var(--rule);
  }
</style>
