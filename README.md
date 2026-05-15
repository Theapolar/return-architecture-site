# With AI — site

A structured publication on sustained relations with AI, approached seriously. Built with [Astro](https://astro.build/), deployed on [Netlify](https://www.netlify.com/).

## Running locally

You'll need [Node.js](https://nodejs.org/) (version 18.17.1 or newer; v20+ recommended). Install it once, then:

```bash
cd site
npm install
npm run dev
```

The site will appear at `http://localhost:4321` — open that in your browser. Save any file and the page reloads automatically.

To make a production build:

```bash
npm run build
```

The built site appears in `site/dist/`. To preview the production build locally:

```bash
npm run preview
```

## Where things live

```
site/
├── src/
│   ├── pages/          # Routes — every .astro file is a page on the site
│   ├── layouts/        # BaseLayout wraps every page (header/footer/styles)
│   ├── components/     # Reusable bits (SiteHeader, SiteFooter)
│   ├── content/        # Structured content — edit these to change content
│   │   ├── essays/         # MDX essays
│   │   ├── principles/     # One file per principle
│   │   ├── taxonomy/       # One file per taxonomy entry
│   │   ├── failureModes/   # One file per failure mode
│   │   └── bibliography/   # One file per source
│   └── styles/         # tokens.css (design system) + global.css
├── astro.config.mjs    # Astro configuration
├── netlify.toml        # Netlify deploy config
└── package.json
```

## Editing content

Most prose lives in `.md` or `.mdx` files inside `src/content/`. Frontmatter (the bit between `---` lines at the top) holds title, summary, etc.; everything below the frontmatter is the body.

Page intros, section headings, and page-level copy live inside the `.astro` files in `src/pages/`. Look between `<BaseLayout>` and `</BaseLayout>` — the markup in there is the page.

Design tokens (colors, spacing, font sizes) are in `src/styles/tokens.css`. Global page styles are in `src/styles/global.css`.

## Deploying

1. Push this folder to a GitHub repository.
2. In Netlify, "Add new site → Import an existing project" and connect the repo.
3. Build settings auto-detect from `netlify.toml`. Deploy.

That's the whole loop. Edit locally → commit → push → Netlify rebuilds.

## What's a placeholder

The page-level prose Morrow drafted in chat is in here as a starting point so the site has something to render. None of it is meant to ship — treat it as scaffolding to react to. The Local Setup pages especially want substantive content from your actual practice rather than abstract description.
