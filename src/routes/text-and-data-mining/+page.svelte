<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { papers, doiUrl } from "$lib/data/papers";

  const contact = "avsm2@cam.ac.uk";
  const pipelinePaper = papers[0];

  const faqs = [
    {
      q: "What is the purpose of the text and data mining?",
      a: "Non-commercial academic research. We build living evidence databases for particular fields, beginning with conservation and education, that keep systematic reviews current for policymakers. Mining full text lets us screen studies for relevance, appraise their design, and extract structured findings that remain traceable to their source.",
      basis: "https://libguides.cam.ac.uk/e-resources/tdmguidance",
      link: { text: "Read the pipeline paper", href: doiUrl(pipelinePaper.doi) }
    },
    {
      q: "Is the research team using any third-party software or tools to do this mining?",
      a: "All of our software is built in house for crawling, and is designed to be as considerate as possible of third-party API rate limits and keys. We do not use commercial scraping services or resell access."
    },
    {
      q: "Can the team specify what tools they are using for this exercise?",
      a: "We use a custom software stack written in OCaml and Python that performs local-only analysis of full text. It uses a locally deployed instance of GROBID, local mirrors of CORE (core.ac.uk), Crossref and PubMed Central (PMC), and locally deployed large language models to perform a variety of metadata analysis. No article content is sent to any external or third-party service."
    },
    {
      q: "Where does the copying and analysis take place?",
      a: "Entirely in the United Kingdom. All copying, storage and analysis takes place on University of Cambridge servers hosted in the Department of Computer Science and Technology (the Computer Laboratory). No article data is processed or stored outside the UK."
    },
    {
      q: "How can we identify or allowlist your crawler?",
      a: "Our crawler requests identify themselves with a descriptive User-Agent string, EvidenceTAP/1.0 (+https://evidencetap.org/text-and-data-mining), and originate from University of Cambridge network ranges. If you would prefer we use a particular access route, respect a specific rate limit, or be added to an allowlist, please get in touch and we will adjust accordingly."
    },
    {
      q: "Can you confirm the results will be closed and only available to Cambridge-authorised users?",
      a: "Yes. All downloaded data is stored on University of Cambridge servers that are firewalled to provide access only to the local research team and named collaborators. There is no public access to the underlying full-text corpus."
    },
    {
      q: "Will the full text be redistributed or republished?",
      a: "No. The full-text corpus is never redistributed or republished; it remains firewalled on University of Cambridge servers. The living evidence database we produce contains derived outputs (structured findings and metadata, each linked back to the original publication), and these may be shared openly so that the evidence stays traceable to its source. We do not reproduce substantial portions of the original articles."
    }
  ];
</script>

<svelte:head>
  <title>Text and Data Mining · Evidence TAP</title>
  <meta
    name="description"
    content="How the Evidence TAP research project at the University of Cambridge intends to use text and data mining of the research literature, for publishers and rights-holders."
  />
</svelte:head>

<h1 class="headline">
  <Icon name="database" size={32} /><span>Text &amp; data mining</span>
</h1>

<div class="prose">
  <p class="lead">
    This page is for publishers and rights-holders. It sets out how the
    <strong>Evidence TAP</strong> research project at the University of Cambridge
    intends to use text and data mining (TDM) of the research literature, and the
    safeguards we apply.
  </p>

  <h2>The project</h2>
  <p>
    Evidence TAP (the Cambridge Traceable AI Pipeline) is a non-commercial
    academic research project, hosted at the University of Cambridge departments
    of Computer Science, Zoology and Education. Its goal is to create
    <em>living evidence
    databases</em> for particular fields, beginning with conservation and
    education, with others to follow. A living evidence database continuously
    ingests the published and grey literature, screens it for relevance,
    appraises study design, and extracts structured findings, so that systematic
    reviews stay current for evidence-based policymaking rather than going out of
    date the moment they are published.
  </p>
  <p>
    Delivering this depends on analysing the full text of research articles. We
    are committed to doing so responsibly, transparently, and in a way that
    respects publishers' infrastructure and licensing.
  </p>

  <h2>Frequently asked questions</h2>
  <dl class="faq">
    {#each faqs as item}
      <div class="qa">
        <dt>{item.q}</dt>
        <dd>
          {item.a}
          {#if item.link}
            <a class="qa-link" href={item.link.href} rel="noopener">{item.link.text} →</a>
          {/if}
          {#if item.basis}
            <span class="qa-basis">
              Text and data mining is enabled for non-commercial research by the
              <a href={item.basis} rel="noopener">copyright exception</a>.
            </span>
          {/if}
        </dd>
      </div>
    {/each}
  </dl>

  <h2>Get in touch</h2>
  <p>
    We are happy to answer questions, discuss access arrangements, or provide
    further detail about our infrastructure and safeguards. Please contact
    <a href={"mailto:Professor Anil Madhavapeddy <" + contact + ">"}
      >Professor Anil Madhavapeddy</a> (<a href={"mailto:" + contact}>{contact}</a>).
  </p>
</div>

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

  .prose { max-width: var(--measure); }
  .prose p { font-size: var(--text-body); }
  .lead {
    font-size: var(--text-lead);
    line-height: 1.4;
  }
  .prose em { font-style: italic; color: var(--accent); }
  .prose strong { font-weight: 600; }

  h2 {
    margin: 2.75rem 0 1rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 26, "wght" 500, "wdth" 84;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 1.1rem;
    color: var(--accent);
  }

  .faq { margin: 0; }
  .qa {
    padding: 1.5rem 0;
    border-top: 1px solid var(--rule);
  }
  .qa:last-child { border-bottom: 1px solid var(--rule); }
  dt {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 30, "wght" 600, "wdth" 96;
    font-size: 1.28rem;
    line-height: 1.2;
    letter-spacing: -0.005em;
    color: var(--ink);
    margin-bottom: 0.6rem;
  }
  dd {
    margin: 0;
    font-size: var(--text-body);
    line-height: 1.5;
  }

  .qa-link {
    display: inline-block;
    margin-left: 0.15rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 14, "wght" 500, "wdth" 90;
    text-decoration: none;
    color: var(--accent);
    white-space: nowrap;
  }
  .qa-link:hover { text-decoration: underline; text-underline-offset: 3px; }

  .qa-basis {
    display: block;
    margin-top: 0.55rem;
    font-style: italic;
    font-size: 0.92rem;
    opacity: 0.85;
  }
  .qa-basis a { text-decoration-thickness: 1px; text-underline-offset: 2px; }
  .qa-basis a:hover { color: var(--accent); }

  a { text-decoration-thickness: 1px; text-underline-offset: 3px; }
  a:hover { color: var(--accent); }
</style>
