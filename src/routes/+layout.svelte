<script lang="ts">
  import "../app.css";
  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  let { children } = $props();
</script>

<SiteHeader />
<main class="wrap">
  {@render children()}
</main>
<SiteFooter />

<style>
  .wrap {
    max-width: 72rem;
    margin: 0 auto;
    padding: clamp(2.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem) 0;
  }
</style>
