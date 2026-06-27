<script lang="ts">
  import { papers } from "$lib/data/papers";
  import PaperList from "$lib/components/PaperList.svelte";
</script>

<svelte:head>
  <title>Papers — Evidence TAP</title>
  <meta
    name="description"
    content="Selected papers from the Evidence TAP project on living evidence and AI-assisted synthesis."
  />
</svelte:head>

<h1 class="page-title">Papers</h1>
<PaperList {papers} />

<style>
  .page-title {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 72, "wght" 300, "wdth" 100;
    font-size: clamp(2.4rem, 1.4rem + 5vw, 4.5rem);
    line-height: 1;
    margin: 0 0 clamp(2rem, 5vw, 3.5rem);
    letter-spacing: -0.01em;
  }
</style>
