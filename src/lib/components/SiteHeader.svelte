<script lang="ts">
  import { page } from "$app/state";

  const links = [
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
    { href: "/papers", label: "Papers" },
    { href: "/people", label: "People" }
  ];

  const current = $derived(page.url.pathname);
</script>

<header class="site-header">
  <nav aria-label="Primary">
    <a href="/" class="brand" class:active={current === "/"}>Evidence TAP</a>
    {#each links as link}
      <a
        href={link.href}
        class:active={current.startsWith(link.href)}
        aria-current={current.startsWith(link.href) ? "page" : undefined}
      >{link.label}</a>
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
    flex-wrap: wrap;
    gap: 0.5rem clamp(0.9rem, 2.5vw, 1.75rem);
    align-items: baseline;
    max-width: 72rem;
    margin: 0 auto;
    padding: 1.2rem clamp(1.25rem, 5vw, 4rem);
  }
  .brand { white-space: nowrap; }
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
