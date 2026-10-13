# John William Davis

## Software Engineer

[My Website](https://papadavis47.github.io)

### 2026 version

Built with [Vue 3](https://vuejs.org/), [Vite](https://vite.dev/), TypeScript and [Tailwind CSS v4](https://tailwindcss.com/).
Deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `2026-version`.

Uses [pnpm](https://pnpm.io/) (version pinned in `package.json`).

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # type-check + production build into dist/
pnpm preview  # serve the production build locally
```

Site content (skills, projects, education, tools) lives in `src/data/site.ts`.
Static files (images, resume PDF, favicon) live in `public/` and are served from the site root.
