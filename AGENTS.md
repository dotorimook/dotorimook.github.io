# AGENTS.md - Developer & Agent Guide (Astro Migration)

This project has been migrated from Gatsby to **Astro**.

## 1. Project Overview
- **Framework**: Astro (v5) + React
- **Styling**: Styled Components
- **Content**: Markdown (stored in `src/content/blog`)
- **Type Safety**: TypeScript + Zod (for Content Collections)

## 2. Key Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server (localhost:4321) |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview the build locally |
| `npm run astro sync` | Generate types for content collections |

## 3. Project Structure
```
.
├── src/
│   ├── components/    # React components (Islands)
│   ├── content/       # Blog posts & Assets
│   │   ├── blog/      # Markdown files (collections)
│   │   └── assets/    # Images used in markdown
│   ├── layouts/       # Astro layouts (if any)
│   ├── pages/         # File-based routing
│   │   ├── index.astro       # Blog list
│   │   └── [...slug].astro   # Blog post template
│   └── utils/         # Helper functions
├── astro.config.mjs   # Astro configuration
└── legacy_gatsby/     # Archived Gatsby source code
```

## 4. Working with Content
- **Add Post**: Create a `.md` file in `src/content/blog/`.
- **Frontmatter**: Must match the schema defined in `src/content/config.ts`.
  - Required: `title`, `date`
  - Optional: `tags`, `categories`, `description`
- **Images**: Place in `src/content/assets` and reference via relative path `../../assets/...` or standard markdown syntax.

## 5. Components & styling
- **React Components**: Located in `src/components`. Used inside `.astro` pages.
- **Styling**: `@emotion/styled` is configured via `astro.config.mjs` (Vite SSR) with `@emotion/babel-plugin`.
- **Interactive Components**: Use `client:visible` directive when using React components in Astro pages (e.g., `<Utterances client:visible />`).

## 7. Communication Guidelines
- **Language**: You may think in any language, but **all answers and deliverables must be written or spoken in Korean** (unless specifically requested otherwise).

