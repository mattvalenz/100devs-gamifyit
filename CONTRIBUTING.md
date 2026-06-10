# Contributing

## Project Structure

```
100devs-gamifyit/
├── frontend/               # Next.js app (React 19, TypeScript, Tailwind v4)
│   ├── public/             # Static assets (SVGs, images)
│   └── src/
│       ├── app/
│       │   ├── (auth)/             # Route group: auth pages share their own layout
│       │   │   ├── layout.tsx      # Wraps login + register (no Navbar/Footer)
│       │   │   ├── login/
│       │   │   │   └── page.tsx    # URL: /login
│       │   │   └── register/
│       │   │       └── page.tsx    # URL: /register
│       │   ├── globals.css         # Global styles and Tailwind theme (colors, fonts)
│       │   ├── layout.tsx          # Root layout (Navbar, Footer, etc.)
│       │   └── page.tsx            # URL: /
│       ├── components/
│       │   ├── layout/     # Structural components (Navbar, Footer, Sidebar, etc.)
│       │   └── ui/         # Reusable primitives (Button, Input, Card, etc.)
│       └── lib/            # Helpers, API clients, hooks, utilities
└── backend/ tbd
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:3000`.

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on `http://localhost:3001` (once scaffolded).

### Running Both at Once

From the project root, you can use `concurrently` to start frontend and backend together:

```bash
npm run dev
```

> If this script is not set up yet, open two terminals and run each separately.

## Design Tokens

Tailwind utility classes map to these brand colors. They are defined in [frontend/src/app/globals.css](frontend/src/app/globals.css) and available globally.

| Class        | Hex       | Usage                       |
| ------------ | --------- | --------------------------- |
| `primary`    | `#F34E4E` | Primary actions, highlights |
| `secondary`  | `#FFF6EA` | Backgrounds, soft fills     |
| `action`     | `#7BB9FA` | Links, interactive elements |
| `accent`     | `#D0D0D0` | Borders, dividers, muted UI |
| `background` | `#FFFFFF` | Page background             |

Use them like: `bg-primary`, `text-action`, `border-accent`.

## App Router and Route Groups

Next.js uses the file system as the router. Any folder inside `src/app/` with a `page.tsx` becomes a URL.

**Route groups** (folders wrapped in parentheses like `(auth)`) let you organize pages together without affecting the URL. The `(auth)` folder does not appear in the URL, it is only used to:

1. Co-locate related pages (login, register, forgot-password, etc.) in one place.
2. Give those pages their own `layout.tsx`, separate from the root layout.

For example, `(auth)/login/page.tsx` is accessible at `/login`, not `/auth/login`.

If you add a new auth-related page (e.g. forgot password):

```
src/app/(auth)/forgot-password/page.tsx  ->  URL: /forgot-password
```

It will automatically inherit the `(auth)/layout.tsx` wrapper.

## Component Guidelines

- **`components/shared/`** is for layout-level components that appear on every (or most) pages, like `Navbar` and `Footer`.
- **`components/ui/`** is for small, stateless primitives like buttons, inputs, and cards that are composed into pages and shared components.
- Name component files in PascalCase: `MyComponent.tsx`.
- One component per file.

## Branch Naming

```
feat/short-description
fix/short-description
refactor/short-description
chore/short-description
```

## Pull Requests

Use the PR template in `.github/pull_request_template.md`. It will auto-populate when you open a PR on GitHub.

Key checklist items before requesting review:

- Tested locally
- No leftover `console.log` or debug code
- Self-reviewed your own diff
- Code follows the conventions in this file

## Linting

```bash
cd frontend
npm run lint
```

Fix all lint errors before opening a PR.

Any questions DM me on Discord, making mistakes is fine but if anyone is stuck
I'll be more than happy to help
