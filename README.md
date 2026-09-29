# weft-site

Marketing site for [Weft](https://github.com/MennoAf/weft) — shared persistent memory for you
and your agents. Static Astro build, vanilla CSS tokens, no framework beyond Astro itself.

Pages:

- `/` — What Is Weft (stance: Weft saves what you tell it to save) + honest benchmarks summary
- `/getting-started` — the five-step quickstart
- `/how-it-works` — memory lifecycle + interactive five-beat demo (works without JS as a static list)
- `/release-notes` — content collection + RSS at `/release-notes/rss.xml`

## Scripts

```bash
npm install     # install (deps: astro + @astrojs/rss, pinned)
npm run dev     # local dev server
npm run build   # static build to dist/
npm run preview # serve the built site locally
```

## Editing

- **Copy** lives in `src/pages/*.astro`; the demo storyboard is one object at the top of
  `src/pages/how-it-works.astro` (rendered to static HTML and to inline JSON from the same source).
- **Release notes**: add `src/content/release-notes/<version>.md` with frontmatter
  `{version, date, tags[]}`, push, deploy. RSS updates automatically.
- **Theme**: tokens at the top of `src/styles/global.css`. Dark is the default; the toggle is
  persisted in `localStorage` and applied pre-paint (no flash).

## Deploying (Cloudflare Pages)

The repo is not created by this scaffold — create it first:

```bash
git remote add origin git@github.com:MennoAf/weft-site.git
git push -u origin main
```

Then in Cloudflare:

1. Workers & Pages → **Create application** → **Pages** → **Connect to Git**.
2. Select the `MennoAf/weft-site` repository, branch `main`.
3. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Deploy — the site serves at `weft.pages.dev` until a custom domain is attached (Pages →
   Custom domains).
