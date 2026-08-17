<!--
  The Evidence TAP pipeline as an annotated SVG: a funnel refines the
  literature into the living evidence database, and synthesis happens at
  the tap, per question, for each audience. Every stage, the vat, the tap
  and each audience carries a fuller explanation shown on hover or
  keyboard focus (dotted underlines mark the hotspots). Static by design;
  tooltips are pure CSS.
-->
<figure class="pipeline">
  <svg viewBox="0 0 720 736" role="group" aria-label="The Evidence TAP pipeline, from ingesting the literature to pouring evidence for policymakers, practitioners, educators and researchers.">
    <defs>
      <marker id="tap-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="#33503F"/>
      </marker>
    </defs>

    <text class="cap side-label" font-size="13" transform="rotate(-90 30 300)" x="30" y="300" text-anchor="middle" opacity="0.6">TRACEABLE ACCOUNTABLE PIPELINE</text>

    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-ingest" tabindex="0" role="img" aria-label="Ingest. Journals, preprints, reports and grey literature are harvested continuously, across many sources and languages, on self-hosted models.">
      <path d="M40 70 H680 L600 134 H120 Z" fill="#33503F" fill-opacity="0.07" stroke="#33503F" stroke-opacity="0.5"/>
      <text class="cap hint" x="360" y="97" font-size="16" text-anchor="middle">INGEST</text>
      <text class="desc" x="360" y="118" font-size="13" text-anchor="middle">everything published, in any language or format</text>
    </g>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-screen" tabindex="0" role="img" aria-label="Screen. AI sifts everything for relevance to the question, pairing keyword and semantic retrieval with a statistically principled stopping rule.">
      <path d="M120 152 H600 L530 216 H190 Z" fill="#33503F" fill-opacity="0.14" stroke="#33503F" stroke-opacity="0.5"/>
      <text class="cap hint" x="360" y="179" font-size="16" text-anchor="middle">SCREEN</text>
      <text class="desc" x="360" y="200" font-size="13" text-anchor="middle">sifted for relevance to the question</text>
    </g>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-appraise" tabindex="0" role="img" aria-label="Appraise. AI screening plus quality grading assesses the strength of each study. Grading rather than gating lets non-academic sources such as grey literature contribute, which matters in education, where randomised trials are rare.">
      <path d="M190 234 H530 L470 298 H250 Z" fill="#33503F" fill-opacity="0.22" stroke="#33503F" stroke-opacity="0.5"/>
      <text class="cap hint" x="360" y="261" font-size="16" text-anchor="middle">APPRAISE</text>
      <text class="desc" x="360" y="282" font-size="13" text-anchor="middle">quality grading of study strength</text>
    </g>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-extract" tabindex="0" role="img" aria-label="Extract. Structured findings are pulled from every study, and each value keeps its link to the exact passage it came from.">
      <path d="M250 316 H470 L390 380 H330 Z" fill="#33503F" fill-opacity="0.32" stroke="#33503F" stroke-opacity="0.5"/>
      <text class="cap hint" x="360" y="343" font-size="16" text-anchor="middle">EXTRACT</text>
      <text class="desc" x="360" y="364" font-size="13" text-anchor="middle">structured data</text>
    </g>

    <path d="M330 380 H390 L368 416 H352 Z" fill="#33503F" fill-opacity="0.45" stroke="#33503F" stroke-opacity="0.5"/>
    <rect x="352" y="416" width="16" height="32" fill="#33503F" fill-opacity="0.45"/>

    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-vat" tabindex="0" role="img" aria-label="The living evidence database updates as new research appears. Nothing goes stale, and nothing loses its citation.">
      <path d="M172 448 v76 a188 7 0 0 0 376 0 v-76" fill="#33503F" fill-opacity="0.12" stroke="none"/>
      <path d="M170 446 v78 a190 8 0 0 0 380 0 v-78" fill="none" stroke="#33503F" stroke-width="1.5"/>
      <ellipse cx="360" cy="446" rx="190" ry="15" fill="#faf8f2" stroke="#33503F" stroke-width="1.5"/>
      <text class="cap hint" x="360" y="492" font-size="15" text-anchor="middle">LIVING EVIDENCE DATABASE</text>
      <text class="desc" x="360" y="513" font-size="12.5" text-anchor="middle">always current, every entry traceable to its source</text>
    </g>

    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-tap" tabindex="0" role="img" aria-label="Synthesise. A living review is drawn for the question at hand, with a transparent trade-off between speed and expert verification.">
      <rect x="352" y="532" width="16" height="24" fill="#33503F" fill-opacity="0.45" stroke="#33503F" stroke-opacity="0.5"/>
      <text class="cap hint" x="396" y="566" font-size="15" text-anchor="start">SYNTHESISE</text>
      <text class="desc" x="396" y="586" font-size="13" text-anchor="start">a living review, per question</text>
      <path d="M360 568 C353 580 349 586 360 594 C371 586 367 580 360 568 Z" fill="#33503F"/>
    </g>

    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-a1" tabindex="0" role="img" aria-label="Policymakers. Rapid evidence briefs, delivered inside the policy window, with confidence made explicit.">
      <path d="M342 598 C 310 634, 228 640, 142 650" fill="none" stroke="#33503F" stroke-width="1.3" marker-start="url(#tap-arr)" marker-end="url(#tap-arr)"/>
      <text class="cap hint" x="130" y="682" font-size="14" text-anchor="middle">POLICYMAKERS</text>
      <text class="desc" x="130" y="702" font-size="12.5" text-anchor="middle">"what works for<tspan x="130" dy="17">peatland restoration?"</tspan></text>
    </g>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-a2" tabindex="0" role="img" aria-label="Practitioners. What works on the ground for conservation managers and field teams, drawing on graded grey literature as well as journals.">
      <path d="M354 602 C 328 638, 302 648, 289 654" fill="none" stroke="#33503F" stroke-width="1.3" marker-start="url(#tap-arr)" marker-end="url(#tap-arr)"/>
      <text class="cap hint" x="285" y="682" font-size="14" text-anchor="middle">PRACTITIONERS</text>
      <text class="desc" x="285" y="702" font-size="12.5" text-anchor="middle">"how do I help pollinators<tspan x="285" dy="17">on my farm?"</tspan></text>
    </g>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-a3" tabindex="0" role="img" aria-label="Educators. Classroom guidance in a field with few randomised trials: graded appraisal makes the wider evidence usable.">
      <path d="M366 602 C 392 638, 418 648, 431 654" fill="none" stroke="#33503F" stroke-width="1.3" marker-start="url(#tap-arr)" marker-end="url(#tap-arr)"/>
      <text class="cap hint" x="435" y="682" font-size="14" text-anchor="middle">EDUCATORS</text>
      <text class="desc" x="435" y="702" font-size="12.5" text-anchor="middle">"does tutoring close<tspan x="435" dy="17">attainment gaps?"</tspan></text>
    </g>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex (focusable on purpose: focus reveals the tooltip) -->
    <g class="hs hs-a4" tabindex="0" role="img" aria-label="Researchers. Living reviews and gap maps that show where evidence is thin and steer the next study.">
      <path d="M378 598 C 410 634, 492 640, 578 650" fill="none" stroke="#33503F" stroke-width="1.3" marker-start="url(#tap-arr)" marker-end="url(#tap-arr)"/>
      <text class="cap hint" x="590" y="682" font-size="14" text-anchor="middle">RESEARCHERS</text>
      <text class="desc" x="590" y="702" font-size="12.5" text-anchor="middle">"where is the<tspan x="590" dy="17">evidence thin?"</tspan></text>
    </g>

    <g class="tips" aria-hidden="true">
      <foreignObject class="tip tip-ingest" x="450" y="98" width="240" height="110">
        <div><strong>Ingest.</strong> Journals, preprints, reports and grey literature are harvested continuously, across many sources and languages, on self-hosted models.</div>
      </foreignObject>
      <foreignObject class="tip tip-screen" x="450" y="180" width="240" height="110">
        <div><strong>Screen.</strong> AI sifts everything for relevance to the question, pairing keyword and semantic retrieval with a statistically principled stopping rule.</div>
      </foreignObject>
      <foreignObject class="tip tip-appraise" x="440" y="252" width="256" height="170">
        <div><strong>Appraise.</strong> AI screening plus quality grading assesses the strength of each study. Grading rather than gating lets non-academic sources such as grey literature contribute, which matters in education, where randomised trials are rare.</div>
      </foreignObject>
      <foreignObject class="tip tip-extract" x="450" y="344" width="240" height="110">
        <div><strong>Extract.</strong> Structured findings are pulled from every study, and each value keeps its link to the exact passage it came from.</div>
      </foreignObject>
      <foreignObject class="tip tip-vat" x="548" y="436" width="164" height="160">
        <div><strong>The database.</strong> It updates as new research appears. Nothing goes stale, and nothing loses its citation.</div>
      </foreignObject>
      <foreignObject class="tip tip-tap" x="452" y="596" width="240" height="120">
        <div><strong>Synthesise.</strong> A living review is drawn for the question at hand, with a transparent trade-off between speed and expert verification.</div>
      </foreignObject>
      <foreignObject class="tip tip-a1" x="38" y="550" width="200" height="120">
        <div><strong>Policymakers.</strong> Rapid evidence briefs, delivered inside the policy window, with confidence made explicit.</div>
      </foreignObject>
      <foreignObject class="tip tip-a2" x="192" y="550" width="200" height="130">
        <div><strong>Practitioners.</strong> What works on the ground for conservation managers and field teams, drawing on graded grey literature as well as journals.</div>
      </foreignObject>
      <foreignObject class="tip tip-a3" x="342" y="550" width="200" height="130">
        <div><strong>Educators.</strong> Classroom guidance in a field with few randomised trials: graded appraisal makes the wider evidence usable.</div>
      </foreignObject>
      <foreignObject class="tip tip-a4" x="492" y="550" width="200" height="120">
        <div><strong>Researchers.</strong> Living reviews and gap maps that show where evidence is thin and steer the next study.</div>
      </foreignObject>
    </g>
  </svg>
</figure>

<style>
  .pipeline { margin: 2.5rem 0; }
  svg { display: block; width: 100%; height: auto; }

  .cap {
    font-family: var(--font-display);
    font-variation-settings: "opsz" 20, "wght" 500, "wdth" 78;
    letter-spacing: 0.07em;
    fill: var(--accent);
  }
  .desc {
    font-family: var(--font-text);
    font-style: italic;
    fill: var(--ink);
    opacity: 0.68;
  }

  .hs { cursor: help; outline: none; }
  .hs:focus-visible path:first-of-type { stroke: var(--accent); stroke-opacity: 1; stroke-width: 2; }
  .hint {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: rgba(51, 80, 63, 0.5);
    text-underline-offset: 4px;
  }

  .tip { opacity: 0; transition: opacity 0.18s ease; pointer-events: none; }
  .tip div {
    font-family: var(--font-text);
    font-size: 12.5px;
    line-height: 1.5;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--accent);
    box-shadow: 0 3px 14px rgba(23, 21, 15, 0.15);
    padding: 10px 12px;
  }
  .tip strong { font-weight: 600; color: var(--accent); }

  .hs-ingest:hover   ~ .tips .tip-ingest,   .hs-ingest:focus   ~ .tips .tip-ingest,
  .hs-screen:hover   ~ .tips .tip-screen,   .hs-screen:focus   ~ .tips .tip-screen,
  .hs-appraise:hover ~ .tips .tip-appraise, .hs-appraise:focus ~ .tips .tip-appraise,
  .hs-extract:hover  ~ .tips .tip-extract,  .hs-extract:focus  ~ .tips .tip-extract,
  .hs-vat:hover      ~ .tips .tip-vat,      .hs-vat:focus      ~ .tips .tip-vat,
  .hs-tap:hover      ~ .tips .tip-tap,      .hs-tap:focus      ~ .tips .tip-tap,
  .hs-a1:hover       ~ .tips .tip-a1,       .hs-a1:focus       ~ .tips .tip-a1,
  .hs-a2:hover       ~ .tips .tip-a2,       .hs-a2:focus       ~ .tips .tip-a2,
  .hs-a3:hover       ~ .tips .tip-a3,       .hs-a3:focus       ~ .tips .tip-a3,
  .hs-a4:hover       ~ .tips .tip-a4,       .hs-a4:focus       ~ .tips .tip-a4 { opacity: 1; }
</style>
