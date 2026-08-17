<script lang="ts">
  import PaperList from "$lib/components/PaperList.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import { papers } from "$lib/data/papers";
</script>

<svelte:head>
  <title>Papers · Evidence TAP</title>
  <meta
    name="description"
    content="Key papers behind Evidence TAP, from the living evidence databases preprint to the Nature comment on AI and the scientific literature."
  />
</svelte:head>

<h1 class="headline"><Icon name="file-text" size={32} /><span>Papers</span></h1>
<PaperList {papers} titleAs="h2" />

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
</style>
