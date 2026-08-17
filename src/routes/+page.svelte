<script lang="ts">
  import SpecimenHero from "$lib/components/SpecimenHero.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import { papers, doiUrl } from "$lib/data/papers";
  import { groups } from "$lib/data/people";
  import { events, formatDate, linkHost, splitEvents } from "$lib/data/news";

  const today = new Date().toISOString().slice(0, 10);
  const { upcoming, past } = splitEvents(events, today);

  const illustrated = past.filter((e) => e.picture);
  const lead = illustrated[0];
  const briefs = illustrated.slice(1, 5);
  const next = upcoming[0];

  const flagship = papers[0];
  const shelf = papers.slice(0, 3);

  const coreStrands = ["Computer Science", "Conservation", "Education"];
  const coreGroups = groups.filter((g) => coreStrands.includes(g.strand));

  const policy = groups.find((g) => g.strand === "Policy & society")?.people ?? [];

  const shortAffiliation = (a: string) =>
    a.replace(/,\s*University of Cambridge$/, "");
</script>

<svelte:head>
  <title>Evidence TAP: living evidence for policymaking</title>
  <meta
    name="description"
    content="Evidence TAP is a traceable AI pipeline that maintains living evidence databases. It continuously ingests, screens, appraises and extracts the research literature, keeping systematic reviews current for policymaking in conservation, education, and beyond."
  />
</svelte:head>

<SpecimenHero />

<div class="front">
  <article class="col feature">
    <h2 class="label">
      <a href="/about"><Icon name="workflow" /><span>What we're building</span></a>
    </h2>
    <p class="feature-lead">
      Systematic reviews start going out of date the moment they are published.
      Evidence TAP replaces them with <em>living evidence databases</em> that
      continuously ingest, screen, appraise and extract the research
      literature. Every claim stays traceable to its source.
    </p>
    <p class="feature-more">
      The pipeline runs on local, self-hosted models and adapts to the decision
      at hand: rapid synthesis for urgent questions, expert verification where
      the stakes are higher. In <a href={doiUrl(flagship.doi)} rel="noopener">our
      flagship study</a> it reached 97% recall against a large-scale manual
      review.
    </p>
    <p class="feature-more">
      It began in Cambridge's Conservation Evidence collaboration and is now
      expanding into education, with health and climate to follow.
    </p>
    <ul class="domains" aria-label="Fields">
      <li>Conservation</li>
      <li>Education</li>
      <li class="more"><em>more to follow</em></li>
    </ul>
    <p class="cta"><a href="/about">How the pipeline works →</a></p>
  </article>

  <section class="col dispatches">
    <h2 class="label">
      <a href="/news"><Icon name="newspaper" /><span>Latest news</span></a>
    </h2>

    <a class="story" href={lead.url} rel="noopener">
      {#if lead.picture}
        <img
          src={lead.picture.src}
          srcset={lead.picture.srcset}
          sizes="(max-width: 44rem) 100vw, 24rem"
          alt={lead.picture.alt}
          style:object-position={lead.picture.pos}
          loading="lazy"
        />
      {/if}
      <time datetime={lead.date}>{formatDate(lead.date)}</time>
      <h3 class="story-title">{lead.title}</h3>
      <p class="story-detail">{lead.detail}</p>
      <span class="via">{linkHost(lead.url)} →</span>
    </a>

    <ol class="briefs">
      {#each briefs as event}
        <li>
          <a href={event.url} rel="noopener">
            {#if event.picture}
              <img
                src={event.picture.src}
                srcset={event.picture.srcset}
                sizes="5rem"
                alt={event.picture.alt}
                style:object-position={event.picture.pos}
                loading="lazy"
              />
            {/if}
            <span class="brief-text">
              <time datetime={event.date}>{formatDate(event.date)}</time>
              <span class="brief-title">{event.title}</span>
            </span>
          </a>
        </li>
      {/each}
    </ol>

    {#if next}
      <p class="next">
        <span class="next-label">Next</span>
        {formatDate(next.date)}: <a href={next.url} rel="noopener">{next.title}</a>
      </p>
    {/if}

    <p class="cta"><a href="/news">All news →</a></p>
  </section>

  <section class="col literature">
    <h2 class="label">
      <a href="/papers"><Icon name="file-text" /><span>Papers</span></a>
    </h2>
    <ol class="shelf">
      {#each shelf as paper}
        <li>
          <h3 class="paper-title">
            <a href={doiUrl(paper.doi)} rel="noopener">{paper.title}</a>
          </h3>
          <p class="paper-meta">{paper.venue}, {paper.year}</p>
          <p class="paper-summary">{paper.summary}</p>
        </li>
      {/each}
    </ol>
    <p class="cta"><a href="/papers">All papers →</a></p>
  </section>
</div>

<footer class="colophon">
  <h2 class="label">
    <a href="/people"><Icon name="users" /><span>The team</span></a>
  </h2>
  <p class="team-intro">
    Computer scientists, conservation scientists and education researchers
    work side by side at the <strong>University of Cambridge</strong>. They
    share a single living evidence engine and apply it wherever policy needs
    to know what works.
  </p>
  <div class="team-grid">
    {#each coreGroups as group}
      <div class="strand">
        <h3 class="strand-name">{group.strand}</h3>
        <ul class="members">
          {#each group.people as person}
            <li>
              <span class="member-name">{person.name}</span>
              <span class="member-affil">{shortAffiliation(person.affiliation)}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  {#if policy.length}
    <p class="assoc">
      <span class="assoc-label">In association with</span>
      {#each policy as person, i}<a href={person.url} rel="noopener">{person.name}</a>{i < policy.length - 2 ? ", " : i === policy.length - 2 ? " and " : ""}{/each}, across the Centre for Science and Policy and the Centre for the Study of Existential Risk.
    </p>
  {/if}

  <p class="team-note">
    With collaborators beyond Cambridge, plus the students, interns and alumni
    who have shaped the pipeline.
    <a class="team-link" href="/people">Meet the full team →</a>
  </p>
</footer>

<style>
  /* ------ broadsheet grid ------ */
  /* One prominent rule under the hero is the page's main separator; every
     other divider on the page is a single hairline in var(--rule). */
  .front {
    border-top: 2px solid var(--accent);
    padding-top: clamp(1.75rem, 4vw, 2.75rem);
    display: grid;
    gap: 0 clamp(1.75rem, 3vw, 2.75rem);
  }

  @media (min-width: 64rem) {
    .front { grid-template-columns: 1fr 1fr 1fr; }
    .col + .col {
      border-left: 1px solid var(--rule);
      padding-left: clamp(1.75rem, 3vw, 2.75rem);
    }
  }
  @media (min-width: 44rem) and (max-width: 63.99rem) {
    .front { grid-template-columns: 1fr 1fr; }
    .feature {
      grid-column: 1 / -1;
      border-bottom: 1px solid var(--rule);
      padding-bottom: 2.25rem;
      margin-bottom: 2.25rem;
    }
    .literature {
      border-left: 1px solid var(--rule);
      padding-left: clamp(1.75rem, 3vw, 2.75rem);
    }
  }
  @media (max-width: 43.99rem) {
    .col + .col {
      border-top: 1px solid var(--rule);
      margin-top: 2.25rem;
      padding-top: 2.25rem;
    }
  }

  /* ------ column labels ------ */
  .label {
    margin: 0 0 1.5rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 26, "wght" 540, "wdth" 82;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: clamp(1.05rem, 0.95rem + 0.5vw, 1.3rem);
    color: var(--accent);
  }
  .label a {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    text-decoration: none;
    color: inherit;
  }
  .label a :global(.icon) { opacity: 0.9; }
  .label a:hover span { text-decoration: underline; text-underline-offset: 4px; }

  /* ------ feature column ------ */
  .feature-lead {
    margin: 0 0 1.5rem;
    font-size: var(--text-lead);
    line-height: 1.38;
  }
  .feature-lead em { font-style: italic; color: var(--accent); }

  .feature-more {
    margin: 0 0 1.4rem;
    font-size: var(--text-body);
    max-width: 46ch;
  }
  .feature-more a { text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .feature-more a:hover { color: var(--accent); }

  .domains {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.1rem;
    padding: 1.1rem 0 0;
    margin: 0 0 1.4rem;
    border-top: 1px solid var(--rule);
    font-family: var(--font-display);
    font-variation-settings: "opsz" 18, "wght" 460, "wdth" 80;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.85rem;
  }
  .domains li:not(:last-child)::after {
    content: "·";
    margin-left: 1.1rem;
    opacity: 0.4;
  }
  .domains .more { opacity: 0.55; text-transform: none; letter-spacing: 0; }

  /* ------ dispatches column ------ */
  .story {
    display: block;
    text-decoration: none;
    color: inherit;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid var(--rule);
  }
  .story img {
    width: 100%;
    aspect-ratio: 5 / 3;
    object-fit: cover;
    border: 1px solid var(--rule);
    margin-bottom: 0.8rem;
    filter: saturate(0.94);
    transition: filter 0.25s ease;
  }
  .story:hover img { filter: saturate(1.05); }
  .story time,
  .briefs time {
    font-size: 0.8rem;
    letter-spacing: 0.02em;
    opacity: 0.65;
  }
  .story-title {
    margin: 0.3rem 0 0.45rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 34, "wght" 440, "wdth" 94;
    font-size: 1.45rem;
    line-height: 1.12;
    letter-spacing: -0.008em;
  }
  .story:hover .story-title { color: var(--accent); }
  .story-detail {
    margin: 0 0 0.5rem;
    font-size: 0.94rem;
    line-height: 1.45;
    opacity: 0.88;
  }
  .via { font-size: 0.8rem; opacity: 0.55; }
  .story:hover .via { opacity: 1; color: var(--accent); }

  .briefs {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .briefs li { border-bottom: 1px solid var(--rule); }
  .briefs a {
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 1rem;
    align-items: center;
    padding: 0.8rem 0;
    text-decoration: none;
    color: inherit;
  }
  .briefs img {
    width: 5rem;
    aspect-ratio: 1;
    object-fit: cover;
    border: 1px solid var(--rule);
    filter: saturate(0.94);
    transition: filter 0.25s ease;
  }
  .briefs a:hover img { filter: saturate(1.05); }
  .briefs time { display: block; margin-bottom: 0.15rem; }
  .brief-title {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 24, "wght" 430, "wdth" 96;
    font-size: 1.08rem;
    line-height: 1.22;
  }
  .briefs a:hover .brief-title { color: var(--accent); }

  .next {
    margin: 1rem 0 0;
    font-size: 0.9rem;
    font-style: italic;
    opacity: 0.85;
  }
  .next-label {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 12, "wght" 520, "wdth" 84;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.72rem;
    color: var(--accent);
    margin-right: 0.5rem;
  }
  .next a { text-decoration: none; }
  .next a:hover { color: var(--accent); text-decoration: underline; }

  /* ------ literature rail ------ */
  .shelf {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .shelf li {
    padding: 0 0 1.15rem;
    margin-bottom: 1.15rem;
    border-bottom: 1px solid var(--rule);
  }
  .paper-title {
    margin: 0 0 0.3rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 24, "wght" 430, "wdth" 96;
    font-size: 1.12rem;
    line-height: 1.22;
    letter-spacing: -0.005em;
  }
  .paper-title a { text-decoration: none; }
  .paper-title a:hover { color: var(--accent); }
  .paper-meta {
    margin: 0 0 0.4rem;
    font-style: italic;
    font-size: 0.85rem;
    opacity: 0.7;
  }
  .paper-summary {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.45;
    opacity: 0.85;
  }

  /* ------ shared ------ */
  .cta { margin: 1.4rem 0 0; }
  .cta a {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 14, "wght" 500, "wdth" 86;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 0.8rem;
    text-decoration: none;
  }
  .cta a:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }

  /* ------ colophon / team ------ */
  .colophon {
    margin-top: clamp(3rem, 7vw, 5rem);
    border-top: 1px solid var(--rule);
    padding-top: clamp(1.75rem, 4vw, 2.5rem);
  }

  .team-intro {
    margin: 0 0 1.9rem;
    max-width: 52ch;
    font-size: var(--text-lead);
    line-height: 1.4;
  }
  .team-intro strong { font-weight: 600; }

  .team-grid {
    display: grid;
    gap: 1.75rem clamp(1.75rem, 3vw, 2.75rem);
  }
  @media (min-width: 44rem) {
    .team-grid { grid-template-columns: 1fr 1fr 1fr; }
    .strand + .strand {
      border-left: 1px solid var(--rule);
      padding-left: clamp(1.75rem, 3vw, 2.75rem);
    }
  }

  .strand-name {
    margin: 0 0 0.9rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 18, "wght" 480, "wdth" 82;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.9rem;
    opacity: 0.85;
  }

  .members {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .members li { margin-bottom: 0.55rem; }
  .member-name {
    display: block;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 22, "wght" 440, "wdth" 96;
    font-size: 1.05rem;
    line-height: 1.25;
  }
  .member-affil {
    display: block;
    font-style: italic;
    font-size: 0.82rem;
    opacity: 0.65;
  }

  .assoc {
    margin: 1.9rem 0 0;
    padding-top: 1.4rem;
    border-top: 1px solid var(--rule);
    font-size: 0.98rem;
    line-height: 1.5;
    max-width: 60ch;
  }
  .assoc-label {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 12, "wght" 520, "wdth" 84;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    font-size: 0.72rem;
    color: var(--accent);
    margin-right: 0.5rem;
  }
  .assoc a {
    text-decoration: none;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
  .assoc a:hover { color: var(--accent); text-decoration: underline; }

  .team-note {
    margin: 1.4rem 0 0;
    font-style: italic;
    font-size: 0.95rem;
    opacity: 0.85;
  }
  .team-link {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 14, "wght" 500, "wdth" 86;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 0.8rem;
    text-decoration: none;
    margin-left: 0.5rem;
    white-space: nowrap;
  }
  .team-link:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
</style>
