# AGENTS.md

## Build Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build (run to check for errors)
- `npm run preview` - Preview production build

## Tech Stack
Astro 5 + React 19 + Tailwind CSS 4 + MDX + TypeScript (strict mode)

## Code Style
- **Formatting**: Prettier with 80 char width, prose wrap always
- **Imports**: Use path aliases (`components/`, `layouts/`, `assets/`, `styles/`) - baseUrl is `src`
- **Types**: Strict TypeScript; use interfaces for props (e.g., `interface PostProps {}`)
- **Components**: React components use named exports; Astro components use frontmatter for logic
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Styling**: Tailwind utility classes; custom theme colors in `src/styles/global.css` (@theme block)
- **Theme colors**: primary, secondary, accent, text, text-muted, code-bg

## Project Structure
- `src/pages/` - Astro pages and routes
- `src/components/` - React (.tsx) and Astro components
- `src/content/blog/` - MDX/MD blog posts with frontmatter (title, description, date, tags)
- `src/layouts/` - Layout components
- `src/assets/` - Images (use Astro's Image component)
