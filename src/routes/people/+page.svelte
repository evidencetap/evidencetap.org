<!-- The People page now lives on the home page; keep old links working. -->
<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  onMount(() => goto("/#people", { replaceState: true }));
</script>

<svelte:head>
  <title>People · Evidence TAP</title>
  <meta http-equiv="refresh" content="0;url=/#people" />
</svelte:head>

<p>The team is now on the <a href="/#people">People section of the home page</a>.</p>
