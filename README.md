# React Portfolio Landing (Learning-Oriented)

This repo has been restructured from a single static `index.html` page into a scalable React application using:

- `React`
- `TypeScript`
- `Vite`

This setup is a strong first React foundation because it is simple, fast, and teaches core React concepts without hiding too much behind framework conventions.

## Should You Use Next.js Instead?

Short answer: **not yet** for this specific project.

Use `Next.js` if you need:

- server-side rendering (SSR)
- file-based routing for many pages
- API routes / backend functions in the same repo
- advanced SEO needs from day one

For a portfolio landing page with project tiles, `React + Vite` is the better learning path:

- less framework overhead
- easier to understand React fundamentals
- faster iteration while learning components, props, and state

You can migrate to Next.js later once you want multi-page routing or content fetched on the server.

## Project Structure

```text
landing/
├─ index.html                # Vite HTML entry point (mounts the React app)
├─ package.json              # scripts + dependencies
├─ tsconfig*.json            # TypeScript configuration
├─ vite.config.ts            # Vite config with React plugin
└─ src/
   ├─ main.tsx               # React app bootstrap (renders <App />)
   ├─ App.tsx                # Page composition (sections + grid rendering)
   ├─ styles.css             # Global styles for the portfolio UI
   ├─ types.ts               # Shared TypeScript types
   ├─ components/
   │  └─ ProjectTile.tsx     # Reusable tile component
   └─ data/
      └─ projects.ts         # Data source for the 8 project tiles
```

## How React Is Being Used (Important Learning Notes)

### 1) Components

React apps are made of components (small UI building blocks).

- `App.tsx` is the page-level component.
- `ProjectTile.tsx` is a reusable UI component for each project card.

Why this matters:

- You write a tile once and reuse it 8 times.
- If you improve the tile design later, every tile updates automatically.

### 2) Props

`ProjectTile` receives a `project` object as a prop:

```tsx
<ProjectTile project={project} />
```

Props are how parent components pass data into child components.

- Parent: `App.tsx`
- Child: `ProjectTile.tsx`

This is one of the most important React patterns to learn.

### 3) Rendering Lists with `.map()`

The eight tiles are rendered from data in `src/data/projects.ts`:

```tsx
{projects.map((project) => (
  <ProjectTile key={project.id} project={project} />
))}
```

This is a major upgrade over copy/pasting HTML cards because:

- content and UI are separated
- adding a new tile is just adding a new object
- the UI stays consistent

### 4) TypeScript for Safety

`src/types.ts` defines the `Project` type.

This helps you catch mistakes early (example: missing `title`, wrong `status` value, etc.).

For a growing portfolio, TypeScript prevents a lot of small bugs.

## How to Run (After Installing Node.js)

### Prerequisite

Install Node.js (LTS version is fine).

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

## How to Customize Your 8 Tiles

Edit `src/data/projects.ts`.

Each tile is a `Project` object with:

- `title`
- `summary`
- `href`
- `tech` (array of tags)
- `status`

Example:

```ts
{
  id: 1,
  title: "Homelab Dashboard",
  summary: "A dashboard for monitoring local services and uptime.",
  href: "https://github.com/yourname/homelab-dashboard",
  tech: ["React", "Node.js", "Docker"],
  status: "Live"
}
```

## How to Scale This Later (Recommended Next Steps)

These are good learning upgrades after you get comfortable:

1. Add filtering (`All`, `Frontend`, `Backend`, `Security`) using React state.
2. Add React Router for separate pages (`/projects`, `/about`, `/contact`).
3. Move project data to a JSON file or CMS.
4. Add tests (`Vitest` + `React Testing Library`).
5. Migrate to Next.js when you need SSR, blog pages, or stronger SEO control.

## React Concepts to Practice in This Repo

If this is your first React app, focus on learning these in order:

1. JSX syntax (`className`, `{}` expressions, component tags)
2. Components and props
3. Rendering arrays with `.map()`
4. State with `useState` (next feature idea: tile filtering)
5. Effects with `useEffect` (next feature idea: fetch project data from an API)

## Files to Read First (Learning Path)

1. `src/main.tsx` (how React starts)
2. `src/App.tsx` (how the page is composed)
3. `src/data/projects.ts` (how content is modeled)
4. `src/components/ProjectTile.tsx` (how props build reusable UI)
5. `src/styles.css` (how the UI is styled)

## Why This Is More Scalable Than the Original Version

Original version:

- one large HTML file
- repeated markup for each project card
- harder to maintain as the site grows

React version:

- reusable components
- data-driven rendering
- typed data model
- clear separation of concerns

That means you can grow this from a landing page into a full portfolio app without rewriting everything.
