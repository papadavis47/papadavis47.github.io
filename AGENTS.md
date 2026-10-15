# papadavis47.github.io

The personal portfolio site of John William Davis, served by GitHub Pages at
<https://papadavis47.github.io>. It is a single-page Vue app that builds to static files.

## Technology Stack

- **Vue 3** with `<script setup lang="ts">` single-file components
- **TypeScript** (strict), type-checked with `vue-tsc`
- **Vite** for the dev server and production build
- **Tailwind CSS v4** through `@tailwindcss/vite` (no `tailwind.config.js`; configuration lives in CSS)
- **Fonts**: Inter and JetBrains Mono, self-hosted via `@fontsource-variable` packages
- **pnpm** as the package manager, pinned in `package.json` (`"packageManager": "pnpm@12.4.2"`)

## Commands

```sh
pnpm install     # install dependencies
pnpm dev         # local dev server (http://localhost:5173)
pnpm build       # vue-tsc type-check, then vite build into dist/
pnpm preview     # serve the production build locally
pnpm typecheck   # type-check only
```

Use pnpm only. Do not add `package-lock.json` or `yarn.lock`, and do not run `npm install`.
`pnpm-workspace.yaml` holds pnpm settings (a minimum-release-age exemption); keep it.

There is no test suite. `pnpm build` is the check: it must pass with no type errors before
any commit.

## Project Structure

```
index.html                  # <head> metadata, Open Graph tags, pre-paint theme script, #app mount
public/                     # copied as-is to the site root
  images/                   #   favicon, social preview image, icons
  images/projects/          #   project card images
  johnwilliamdavis_resume.pdf
src/
  main.ts                   # creates the app, registers v-reveal, imports fonts and CSS
  style.css                 # Tailwind import, theme tokens, light/dark values, reveal animation
  App.vue                   # page layout and the Skills/Projects/Education/Tools/Joy sections
  data/site.ts              # ALL site content: profile, socials, skills, projects, education, tools, joys
  components/
    SiteHeader.vue          # sticky header, section nav with active highlight, theme toggle, mobile menu
    HeroSection.vue         # name, role, intro sentence, call-to-action buttons, social links
    PageSection.vue         # shared section wrapper (index label, heading, optional lede)
    SiteFooter.vue          # contact card, copyright year, social links
    AppIcon.vue             # inline SVG icon set (brand marks and UI glyphs)
  composables/
    useTheme.ts             # light/dark state, persisted to localStorage
    useActiveSection.ts     # IntersectionObserver that tracks the visible section
  directives/reveal.ts      # v-reveal: fade-in on first scroll into view
.github/workflows/deploy.yml  # builds and deploys to GitHub Pages
```

## Editing Content

Text and links belong in `src/data/site.ts`, not in components. To add or change a skill,
project, tool, or education entry, edit the typed arrays there; the components render them
with `v-for`.

- The intro sentence in `HeroSection.vue` is built from the `focus` array
  (currently Rust, TypeScript, Python, in that order).
- The site description in `index.html` (`<meta name="description">` and `og:description`)
  repeats the focus languages. Update it whenever `focus` changes.
- Files in `public/` must be referenced through the `asset()` helper in `site.ts`
  (e.g. `asset("images/projects/caleb.png")`). It prefixes `import.meta.env.BASE_URL`,
  so paths work on GitHub Pages and in preview builds with a relative base.
- Project cards take an optional `imageKind: "logo"` (centered mark on a plain panel, for
  repos without a screenshot) and `imageAnchor: "left"` (keep the left edge of a cropped
  screenshot in view).
- Keep copy plain and accurate. Do not invent claims about John's experience; ask when
  wording about him is not given.

## Styling Conventions

- Colors come from semantic tokens defined in `src/style.css`: `canvas`, `surface`, `ink`,
  `muted`, `line`, `accent`, `accent-soft`. Use them as Tailwind utilities
  (`bg-surface`, `text-muted`, `border-line`, `text-accent`). Do not hard-code hex colors or
  palette classes like `text-zinc-500` in components; they will break one of the themes.
- Dark mode is class-based: `.dark` on `<html>`, applied before first paint by the inline
  script in `index.html` and toggled by `useTheme`. Every component must look right in both
  themes.
- Tailwind only generates classes it can find as complete strings in source files. Never
  build class names by string concatenation; use full literal class names in a conditional.
- Layout must work at phone width (about 390px) with no horizontal scrolling.
- Respect `prefers-reduced-motion` (handled globally in `style.css`). Keep animation subtle.
- Keep visible keyboard focus states and meaningful `alt` text / `aria-label`s.

## Deployment

GitHub Pages serves the site from a GitHub Actions deployment, not from a branch.

- Every push to the **`2026-version`** branch runs `.github/workflows/deploy.yml`, which
  installs with pnpm, runs `pnpm build`, and publishes `dist/` to Pages.
- The repository's Pages source is set to "GitHub Actions", and the `github-pages`
  environment allows deployments from `2026-version`.
- This is a user site served from the domain root, so Vite's `base` stays `/`.
- The workflow file exists only on `2026-version`, so there is no "Run workflow" button in
  the Actions tab; push a commit or re-run a failed run instead.
- Older versions of the site live on other branches (`2025-version`, `main`, `new-profile`).
  Leave them alone.

## Working Agreement

- Develop on `2026-version`.
- Do not commit or push unless John asks. A push to `2026-version` publishes the live site.
- Before committing, run `pnpm build` and check the change in a browser in both light and
  dark themes and at phone width.
