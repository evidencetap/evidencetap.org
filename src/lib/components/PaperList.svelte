<script lang="ts">
  import type { Paper } from "$lib/types";
  import { doiUrl } from "$lib/data/papers";
  let { papers, titleAs = "h2" }: { papers: Paper[]; titleAs?: string } =
    $props();

  const authorLine = (authors: string[]) =>
    authors.length > 4
      ? `${authors.slice(0, 3).join(", ")}, et al.`
      : authors.join(", ");
</script>

<ol class="papers">
  {#each papers as paper}
    <li>
      <svelte:element this={titleAs} class="title">
        <a href={doiUrl(paper.doi)} rel="noopener">{paper.title}</a>
      </svelte:element>
      <p class="meta">
        {authorLine(paper.authors)}
        <span aria-hidden="true">·</span>
        <span class="venue">{paper.venue}, {paper.year}</span>
      </p>
      <p class="summary">{paper.summary}</p>
      <p class="doi">
        <a href={doiUrl(paper.doi)} rel="noopener">doi:{paper.doi}</a>
      </p>
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
    font-size: var(--text-title);
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
