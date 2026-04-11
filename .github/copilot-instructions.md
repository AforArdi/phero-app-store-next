# Phero App Store - Workspace Instructions

## Project Overview
This is a **Next.js 16.2.3 app store interface** showcasing mobile applications with detailed ratings, downloads, and installation tracking. Built with React 19, Tailwind CSS 4, and DaisyUI.

**Key entry points:**
- Home: [src/app/page.js](src/app/page.js) → displays Banner, Stats, TrendingApps
- Apps listing: [src/app/apps/page.jsx](src/app/apps/page.jsx)
- App details: [src/app/apps/[id]/page.jsx](src/app/apps/[id]/page.jsx)
- Layout & providers: [src/app/layout.js](src/app/layout.js)

## Critical Setup Notes

⚠️ **This is NOT standard Next.js** — Version 16.2.3 has breaking changes. Read `node_modules/next/dist/docs/` before implementing features. Check [AGENTS.md](AGENTS.md) for details.

### Start development
```bash
npm run dev  # Runs at http://localhost:3000
```

### Build & deploy
```bash
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint check (ESLint 9 + Next.js config)
```

## Architecture & Conventions

### Directory Structure
```
src/
  app/           # Next.js App Router pages
  components/    # Reusable UI components (organized by feature)
  context/       # React Context providers
  lib/           # Utilities (providers, config, etc.)
  assets/        # Images, static files
public/data.json # App catalog (static data source)
```

### Tech Stack
- **Framework:** Next.js 16.2.3 with React 19
- **Styling:** Tailwind CSS 4 + DaisyUI components
- **Icons:** React Icons (FaStar, IoMdDownload, etc.)
- **Notifications:** React Toastify (top-left, 3s auto-close)
- **Charts:** Recharts (used in Stats)
- **Loading:** React Spinners

### Component Patterns

**1. Page Components** (`.jsx`)
Located in `src/app/` — file-based routing with App Router pattern.

**2. UI Components**
- Stored in `src/components/` or `src/components/ui/`
- Example: [AppCard.jsx](src/components/ui/AppCard.jsx) — displays app with image, title, downloads, rating
- Use DaisyUI classes (card, badge, btn, etc.)
- Import Next.js Image component for optimization

**3. Feature Components**
- Grouped by feature: `src/components/navbar/`, `src/components/apps/`
- Example: [Navbar.jsx](src/components/navbar/Navbar.jsx), [InstallToggleBtn.jsx](src/components/apps/InstallToggleBtn.jsx)

### State Management
- **Global state:** [AppInstallContext](src/context/AppInstallContext.jsx) — tracks installed apps
  - Provider configured in [src/app/lib/providers/index.js](src/app/lib/providers/index.js)
  - Access via `useContext(AppInstallContext)` in client components
- **Local state:** useState for component-level data

### Data Flow
1. **Data source:** [public/data.json](public/data.json) — array of app objects with id, title, image, ratings, downloads, etc.
2. **Data schema:**
   ```javascript
   {
     id: 1,
     title: string,
     companyName: string,
     image: string (URL),
     description: string,
     size: number (MB),
     reviews: string,
     ratingAvg: number,
     downloads: string,
     ratings: [{ name: string, count: number }]  // for charts
   }
   ```

### Import Aliases
Always use `@/` path alias (configured in [jsconfig.json](jsconfig.json)):
```javascript
import AppCard from "@/components/ui/AppCard";
import { AppInstallContext } from "@/context/AppInstallContext";
```

## Code Style & Best Practices

### Markers for AI Agent Context
- Use `// use client` at the top of files with interactivity (hooks, context, event handlers)
- Use server components by default; only opt-in to client rendering when needed
- React Compiler is enabled — avoid patterns incompatible with it

### Component Organization
- Each component in its own file
- Descriptive PascalCase names
- Props at top of function
- Return JSX wrapped in semantic HTML (div, section, etc.)

### Styling
- Use Tailwind utilities (not inline styles)
- DaisyUI components for consistency:
  - `card`, `card-body`, `card-actions` for layouts
  - `badge`, `btn`, `badge-soft`, `badge-warning` for UI elements
  - Data theme: `data-theme='light'` in root HTML tag
- Responsive: Use Tailwind breakpoints (sm:, md:, lg:, etc.)

### UI Components Template
```jsx
"use client";  // If using hooks/state
import { ClassName } from "react-icons/...";

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="...">
      {/* JSX here */}
    </div>
  );
};

export default ComponentName;
```

## Common Workflows

### Add a new app page
1. Create file: `src/app/apps/page.jsx`
2. Import [AppCard](src/components/ui/AppCard.jsx) component
3. Load data from `public/data.json`
4. Map over apps and render cards
5. Use Tailwind grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Add new feature requiring state
1. Create context in `src/context/FeatureName.jsx`
2. Wrap provider in [src/app/lib/providers/index.js](src/app/lib/providers/index.js)
3. Use `useContext(FeatureContext)` in client components

### Display app details
- Page: `src/app/apps/[id]/page.jsx`
- Use dynamic route params: `{ params: { id } }`
- Fetch from `public/data.json` or pass via context
- For ratings: Use Recharts Bar chart (see Stats component pattern)

## File Guidelines

- **Do NOT edit:** [AGENTS.md](AGENTS.md) — breaking changes reference (read-only)
- **Update when:** Adding new data structures, changing build commands, or architectural decisions
- Avoid modifying: [next.config.mjs](next.config.mjs) without testing (React Compiler enabled)

## Testing & Validation

When implementing features:
1. Run `npm run dev` to test in browser
2. Run `npm run lint` to check for style issues
3. Test responsive design (mobile, tablet, desktop)
4. Verify DaisyUI theme consistency

## Documentation Links

- **Next.js 16 breaking changes:** `node_modules/next/dist/docs/`
- **Tailwind CSS 4 Migration:** [Tailwind Docs](https://tailwindcss.com/docs/installation)
- **DaisyUI Components:** [DaisyUI Docs](https://daisyui.com/components)
- **React Compiler:** Check Next.js docs for limitations
