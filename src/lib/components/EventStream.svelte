<script lang="ts">
  import type { NewsEvent } from "$lib/types";
  import { formatDate, linkHost, splitEvents } from "$lib/data/news";

  let { events }: { events: NewsEvent[] } = $props();

  const today = new Date().toISOString().slice(0, 10);
  const { upcoming, past } = $derived(splitEvents(events, today));

  const kindLabel: Record<NewsEvent["kind"], string> = {
    paper: "Paper",
    talk: "Talk",
    workshop: "Workshop",
    media: "Media",
    milestone: "Milestone"
  };
</script>

{#snippet entry(event: NewsEvent)}
  <li>
    <p class="when">
      <time datetime={event.date}>{formatDate(event.date)}</time>
      <span class="kind">{kindLabel[event.kind]}</span>
    </p>
    <div class="what">
      <h4 class="title"><a href={event.url} rel="noopener">{event.title}</a></h4>
      <p class="detail">{event.detail}</p>
      <p class="via"><a href={event.url} rel="noopener">{linkHost(event.url)} →</a></p>
    </div>
    {#if event.picture}
      <a class="pic" href={event.url} rel="noopener" tabindex="-1" aria-hidden="true">
        <img
          src={event.picture.src}
          srcset={event.picture.srcset}
          sizes="(max-width: 46rem) 100vw, 15rem"
          alt={event.picture.alt}
          style:object-position={event.picture.pos}
          loading="lazy"
        />
      </a>
    {/if}
  </li>
{/snippet}

{#if upcoming.length}
  <h3 class="group">Upcoming</h3>
  <ol class="events">
    {#each upcoming as event}{@render entry(event)}{/each}
  </ol>
{/if}

<h3 class="group">Recently</h3>
<ol class="events">
  {#each past as event}{@render entry(event)}{/each}
</ol>

<style>
  .group {
    margin: 2.5rem 0 0.5rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 18, "wght" 460, "wdth" 80;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.95rem;
    color: var(--accent);
  }
  .group:first-child { margin-top: 0; }

  .events {
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 62rem;
  }

  li {
    display: grid;
    grid-template-columns: 9.5rem minmax(0, 1fr) auto;
    grid-template-areas: "when what pic";
    gap: 0.35rem 1.75rem;
    align-items: start;
    padding: 1.35rem 0;
    border-top: 1px solid var(--rule);
  }
  @media (max-width: 46rem) {
    li {
      grid-template-columns: 1fr;
      grid-template-areas: "when" "pic" "what";
      padding: 1.1rem 0;
    }
  }

  .when {
    grid-area: when;
    margin: 0;
    font-size: 0.85rem;
    letter-spacing: 0.02em;
  }
  .when time { display: block; opacity: 0.72; }
  .kind {
    display: inline-block;
    margin-top: 0.3rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 12, "wght" 500, "wdth" 84;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.72rem;
    color: var(--accent);
  }
  @media (max-width: 46rem) {
    .when time { display: inline; }
    .kind { margin: 0 0 0 0.6rem; }
  }

  .what { grid-area: what; }

  .title {
    margin: 0 0 0.35rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 30, "wght" 420, "wdth" 96;
    font-size: 1.25rem;
    line-height: 1.15;
    letter-spacing: -0.005em;
  }
  .title a { text-decoration: none; }
  .title a:hover { color: var(--accent); }

  .detail {
    margin: 0 0 0.4rem;
    max-width: 56ch;
    font-size: 0.98rem;
  }

  .via { margin: 0; font-size: 0.82rem; }
  .via a {
    text-decoration: none;
    opacity: 0.6;
    letter-spacing: 0.01em;
  }
  .via a:hover { opacity: 1; color: var(--accent); text-decoration: underline; }

  .pic {
    grid-area: pic;
    display: block;
    line-height: 0;
  }
  .pic img {
    width: 15rem;
    max-width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border: 1px solid var(--rule);
    filter: saturate(0.94);
    transition: filter 0.25s ease;
  }
  li:hover .pic img { filter: saturate(1.05); }
  @media (max-width: 46rem) {
    .pic { margin: 0.35rem 0 0.55rem; }
    .pic img { width: 100%; aspect-ratio: 5 / 3; }
  }
</style>
