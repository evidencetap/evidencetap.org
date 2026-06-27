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
    font-weight: normal;
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
