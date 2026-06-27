# evidencetap.org

Static holding site for **Evidence TAP** — the Cambridge Traceable AI pipeline.

## Develop

```bash
pnpm install
pnpm dev        # local dev server
pnpm test       # data-module unit tests (Vitest)
pnpm build      # static output -> build/
pnpm preview    # serve the built site
```

## Stack

SvelteKit (Svelte 5) prerendered via `@sveltejs/adapter-static`. Roslindale
(DJR) is self-hosted under `static/fonts/` (web-licensed; subset only). Content
lives in typed modules under `src/lib/data/`.

## Deploy

Push to `main` → GitHub Actions builds and publishes `build/` to GitHub Pages on
the custom domain `evidencetap.org` (`static/CNAME`). Enable **Settings → Pages →
Source: GitHub Actions** once, then set the apex DNS records and **Enforce HTTPS**.

> The repo is private; only the built artifact is published. The full DJR font
> package is gitignored — see `docs/superpowers/specs/` for the design and
> `docs/superpowers/plans/` for the implementation plan.

## Notes

- `pnpm-workspace.yaml` approves esbuild's build script and disables pnpm's
  pre-run dependency check (`verifyDepsBeforeRun`), so `pnpm build`/`pnpm test`
  run cleanly under pnpm 10+.
