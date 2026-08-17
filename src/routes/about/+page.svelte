<script lang="ts">
  import PipelineDiagram from "$lib/components/PipelineDiagram.svelte";
  import Icon from "$lib/components/Icon.svelte";

  const ceProject = "https://anil.recoil.org/projects/ce";
  const aicam =
    "https://ai.conservation.cam.ac.uk/projects/ai-driven-conservation-copilot-revolutionising-biodiversity-solutions/";

  const history: { year: string; title: string; desc: string }[] = [
    {
      year: "2022",
      title: "Undergraduate beginnings",
      desc: `Initial group projects at Cambridge explore whether AI can help screen the vast conservation literature, made possible by the decades-long corpus of evidence assembled in the <a href="https://conservationevidence.com" rel="noopener">Conservation Evidence</a> database.`
    },
    {
      year: "2023",
      title: "Conservation Evidence Copilots",
      desc: `The <a href="${ceProject}" rel="noopener">project</a> formally begins, supported by the <a href="${aicam}" rel="noopener">ai@cam</a> initiative as &ldquo;AI-Driven Conservation CoPilot: Revolutionising Biodiversity Solutions&rdquo;, working with the Conservation Evidence database of 1.6 million screened papers and 8,600 summarised studies.`
    },
    {
      year: "2024",
      title: "First LLM evaluations",
      desc: "Early preprints show that carefully designed pipelines can reach expert-level retrieval, while off-the-shelf LLMs fall short. The project is selected as an ai@cam flagship challenge."
    },
    {
      year: "2025",
      title: "The living evidence pipeline",
      desc: "A working paper sets out a self-hosted, end-to-end pipeline, which in an initial evaluation reached 97% recall against a large-scale manual review."
    },
    {
      year: "2026",
      title: "Evidence TAP",
      desc: "The project broadens beyond conservation into education, with health and climate to follow, and becomes Evidence TAP."
    }
  ];
</script>

<svelte:head>
  <title>About · Evidence TAP</title>
  <meta
    name="description"
    content="What Evidence TAP is building: a traceable AI pipeline that maintains living evidence databases for policymaking in conservation, education, and beyond."
  />
</svelte:head>

<section class="about">
  <h1 class="headline"><Icon name="workflow" size={32} /><span>What we're building</span></h1>

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
    <strong><a href="https://doi.org/10.33774/coe-2025-rmsqf" rel="noopener"
    >97% recall</a></strong> against a large-scale manual review, in our
    flagship study.
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

  <h2 class="subhead">How it started</h2>
  <p class="history-intro">
    Evidence TAP grew out of the Conservation Evidence Copilots project and has
    broadened, discipline by discipline, into a general living evidence pipeline.
  </p>

  <ol class="timeline">
    {#each history as item}
      <li>
        <span class="year">{item.year}</span>
        <div class="entry">
          <h3 class="t-title">{item.title}</h3>
          <p class="t-desc">{@html item.desc}</p>
        </div>
      </li>
    {/each}
  </ol>
</section>

<style>
  .headline {
    display: flex;
    align-items: center;
    gap: 0.7rem;
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
  .about a { text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .about a:hover { color: var(--accent); }

  .subhead {
    margin: 3rem 0 1rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 26, "wght" 500, "wdth" 84;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 1.1rem;
    color: var(--accent);
  }

  .history-intro { margin: 0 0 2rem; }

  .timeline {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .timeline li {
    display: grid;
    grid-template-columns: 4.5rem 1fr;
    gap: 0 1.5rem;
    position: relative;
    padding: 0 0 1.75rem 1.5rem;
    border-left: 1px solid var(--rule);
    margin-left: 0.35rem;
  }
  .timeline li:last-child { padding-bottom: 0; }
  /* dot on the line */
  .timeline li::before {
    content: "";
    position: absolute;
    left: -0.35rem;
    top: 0.55rem;
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 4px var(--paper);
  }

  .year {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 28, "wght" 620, "wdth" 92;
    font-size: 1.15rem;
    line-height: 1.2;
    color: var(--accent);
    padding-top: 0.15rem;
  }
  .t-title {
    margin: 0 0 0.3rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 30, "wght" 440, "wdth" 96;
    font-size: 1.3rem;
    line-height: 1.15;
    letter-spacing: -0.005em;
  }
  .t-desc {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 48ch;
  }
  @media (max-width: 34rem) {
    .timeline li {
      grid-template-columns: 1fr;
      gap: 0.25rem;
    }
    .year { padding-top: 0; }
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
  .highlight a {
    color: inherit;
    text-decoration-thickness: 2px;
    text-underline-offset: 5px;
  }
  .highlight a:hover { text-decoration-style: dotted; }

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
</style>
