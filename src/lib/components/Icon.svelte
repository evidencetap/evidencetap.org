<script lang="ts">
  /**
   * Minimal line icons (Lucide-style, ISC-licensed geometry), drawn with
   * currentColor so they inherit the surrounding text colour.
   */
  let { name, size = 20 }: { name: string; size?: number } = $props();

  const paths: Record<string, string> = {
    // pipeline / what we're building
    workflow:
      '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
    // news
    newspaper:
      '<path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M22 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13"/><rect width="8" height="5" x="6" y="10" rx="1"/>',
    // papers / literature
    "file-text":
      '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    // team / people
    users:
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    // text & data mining
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    // event kinds
    paper:
      '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    talk:
      '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
    workshop:
      '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/>',
    media:
      '<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/>',
    milestone:
      '<path d="M12 13v8"/><path d="M12 3v3"/><path d="M4 6h13l3 3.5L17 13H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"/>'
  };
</script>

<svg
  class="icon"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
  focusable="false"
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html paths[name] ?? ""}
</svg>

<style>
  .icon {
    display: inline-block;
    flex: none;
    vertical-align: -0.15em;
  }
</style>
