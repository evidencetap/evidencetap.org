<script lang="ts">
  import { onMount } from "svelte";

  const sections = [
    { id: "about", label: "About" },
    { id: "papers", label: "Papers" },
    { id: "people", label: "People" }
  ];

  let active = $state("");

  onMount(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const threshold = window.innerHeight * 0.33;
      let current = "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && current) current = sections[sections.length - 1].id;
      active = current;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  });
</script>

<header class="site-header">
  <nav aria-label="Primary">
    <a href="/" class="brand" class:active={active === ""}>Evidence TAP</a>
    {#each sections as section}
      <a
        href={"/#" + section.id}
        class:active={active === section.id}
        aria-current={active === section.id ? "location" : undefined}
      >{section.label}</a>
    {/each}
  </nav>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: color-mix(in srgb, var(--paper) 90%, transparent);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--rule);
  }
  nav {
    display: flex;
    gap: 1.75rem;
    align-items: baseline;
    max-width: 72rem;
    margin: 0 auto;
    padding: 1.2rem clamp(1.25rem, 5vw, 4rem);
  }
  a {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 12, "wght" 480, "wdth" 88;
    font-size: 0.9rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--ink);
    opacity: 0.62;
    transition: opacity 0.2s ease, color 0.2s ease;
  }
  .brand { margin-right: auto; opacity: 1; letter-spacing: 0.02em; }
  a:hover { opacity: 1; }
  a.active { opacity: 1; color: var(--accent); }
</style>
