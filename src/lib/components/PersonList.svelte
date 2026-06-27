<script lang="ts">
  import type { PersonGroup } from "$lib/types";
  let { groups }: { groups: PersonGroup[] } = $props();
</script>

<div class="strands">
  {#each groups as group}
    <section class="strand">
      <h2>{group.strand}</h2>
      <ul>
        {#each group.people as person}
          <li>
            <span class="name">
              {#if person.url}
                <a href={person.url}>{person.name}</a>
              {:else}
                {person.name}
              {/if}
            </span>
            <span class="affil">{person.affiliation}</span>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  .strands { display: grid; gap: 3.5rem; max-width: 56rem; }
  h2 {
    margin: 0 0 1.25rem;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 16, "wght" 520, "wdth" 78;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9rem;
    color: var(--accent);
    border-bottom: 1px solid var(--rule);
    padding-bottom: 0.6rem;
  }
  ul { list-style: none; margin: 0; padding: 0; }
  li { padding: 0.6rem 0; }
  .name {
    display: block;
    font-family: var(--font-display);
    font-variation-settings: "opsz" 36, "wght" 420, "wdth" 100;
    font-size: clamp(1.3rem, 1.1rem + 1vw, 1.7rem);
    line-height: 1.15;
  }
  .name a { text-decoration: none; }
  .name a:hover { color: var(--accent); text-decoration: underline; }
  .affil { font-size: 0.95rem; opacity: 0.66; font-style: italic; }
</style>
