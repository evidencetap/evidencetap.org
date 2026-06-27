<script lang="ts">
  import { groups } from "$lib/data/people";
  import PersonList from "$lib/components/PersonList.svelte";
</script>

<svelte:head>
  <title>People — Evidence TAP</title>
  <meta
    name="description"
    content="The Evidence TAP team across computer science, conservation, and education."
  />
</svelte:head>

<h1 class="page-title">People</h1>
<PersonList {groups} />

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
