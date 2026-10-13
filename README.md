# John William Davis

## Software Engineer

[My Website](https://papadavis47.github.io)

### 2026 version

Built with [Vue 3](https://vuejs.org/), [Vite](https://vite.dev/), TypeScript and [Tailwind CSS v4](https://tailwindcss.com/).
Deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `2026-version`.

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

Site content (skills, projects, education, tools) lives in `src/data/site.ts`.
Static files (images, resume PDF, favicon) live in `public/` and are served from the site root.
