<!--
  Pure-CSS variable-font specimen. The load animation runs via @keyframes,
  so it works with JavaScript disabled. The base styles are the final,
  fully-visible state; there is no JS-dependent reveal. prefers-reduced-motion
  disables the animation and shows the settled state immediately.
-->
<div class="hero">
  <h1 class="tagline">
    Empowering equitable, rational policymaking through
    <em>living&nbsp;evidence</em>.
  </h1>
  <p class="sub">The Cambridge Traceable Accountable Pipeline (TAP).</p>
</div>

<style>
  .hero { padding: clamp(1rem, 4vw, 3rem) 0 clamp(2rem, 6vw, 4rem); }

  /* Base = final, visible state (what no-JS / reduced-motion users see). */
  .tagline {
    margin: 0;
    max-width: 18ch;
    font-family: var(--font-display);
    font-weight: normal;
    font-size: var(--text-hero);
    line-height: 0.98;
    letter-spacing: -0.012em;
    font-variation-settings: "opsz" 80, "wght" 360, "wdth" 100;
    opacity: 1;
    animation: settle 1100ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }

  @keyframes settle {
    from {
      font-variation-settings: "opsz" 80, "wght" 220, "wdth" 112;
      opacity: 0;
    }
    to {
      font-variation-settings: "opsz" 80, "wght" 360, "wdth" 100;
      opacity: 1;
    }
  }

  .tagline em {
    font-style: italic;
    font-variation-settings: "opsz" 80, "slnt" -10, "wght" 540, "wdth" 92;
    color: var(--accent);
  }

  .sub {
    margin: clamp(1.5rem, 4vw, 2.5rem) 0 0;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 24, "wght" 380, "wdth" 96;
    font-size: var(--text-lead);
    font-style: italic;
    opacity: 0.8;
  }

  @media (prefers-reduced-motion: reduce) {
    .tagline { animation: none; }
  }
</style>
