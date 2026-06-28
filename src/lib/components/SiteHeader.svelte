<script lang="ts">
  import { page } from "$app/stores";
  const nav = [
    { href: "/", label: "Evidence TAP" },
    { href: "/people", label: "People" },
    { href: "/#papers", label: "Papers" }
  ];
  const active = (href: string, path: string) =>
    href === "/" ? path === "/" : path.startsWith(href);
</script>

<header class="site-header">
  <nav aria-label="Primary">
    {#each nav as item}
      <a
        href={item.href}
        class:active={active(item.href, $page.url.pathname)}
        aria-current={active(item.href, $page.url.pathname) ? "page" : undefined}
      >{item.label}</a>
    {/each}
  </nav>
</header>

<style>
  .site-header {
    border-bottom: 1px solid var(--rule);
  }
  nav {
    display: flex;
    gap: 1.75rem;
    align-items: baseline;
    max-width: 72rem;
    margin: 0 auto;
    padding: 1.4rem clamp(1.25rem, 5vw, 4rem);
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
    transition: opacity 0.2s ease;
  }
  a:first-child { margin-right: auto; opacity: 1; letter-spacing: 0.02em; }
  a:hover { opacity: 1; }
  a.active { opacity: 1; color: var(--accent); }
</style>
