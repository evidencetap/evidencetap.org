<script lang="ts">
  import EventStream from "$lib/components/EventStream.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import { events } from "$lib/data/news";
</script>

<svelte:head>
  <title>News · Evidence TAP</title>
  <meta
    name="description"
    content="News from the Evidence TAP project: talks, papers, workshops and milestones, linking through to the team's own sites."
  />
</svelte:head>

<h1 class="headline"><Icon name="newspaper" size={32} /><span>News</span></h1>
<p class="lead">
  Dispatches from the project. Every entry links through to the fuller story
  on the team's own sites.
</p>

<EventStream {events} />

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
  .lead {
    max-width: var(--measure);
    margin: 0 0 2.5rem;
    font-style: italic;
    opacity: 0.75;
  }
</style>
