# AGENTS.md

## What this project is

A client-only React SPA for the CS 5388 "Living Project Portal." There is no backend — every tab renders from data defined in-module (mostly under `src/data/` and inline constants at the top of each tab file), except the Kanban board, which mutates state persisted to `localStorage`.

## Architecture

- `src/main.jsx` — mounts `App` inside `ThemeProvider`.
- `src/App.jsx` — owns the single piece of navigation state (`activeTab`) and the `TABS` array that maps each tab id to its icon and component. Adding a tab means adding one entry here and one file under `src/tabs/`.
- `src/context/ThemeContext.jsx` — light/dark mode. Toggles the `dark` class on `<html>` (Tailwind's `darkMode: 'class'` strategy) and persists the choice to `localStorage`. Read via `useTheme()`.
- `src/components/Navbar.jsx` — top nav, tab switcher, theme toggle, mobile menu.
- `src/components/ui.jsx` — every shared visual primitive (`Card`, `CardHeader`, `CardBody`, `Badge`, `SectionHeading`, `StatTile`, `Table`). New tab content should compose these rather than hand-rolling new card/badge markup, so theming and spacing stay consistent.
- `src/data/team.js` — the single source of truth for the 5 project team members (id, name, role, initials, avatar color). Tabs that need to reference a member look them up by id via `memberById()`.
- `src/tabs/*.jsx` — one file per tab, each a self-contained default export. Each tab file owns its own mock/reference data as local constants.

## Kanban board specifics (`src/tabs/KanbanTab.jsx`)

- Board state is an array of task objects, persisted as JSON under the `lpp-kanban-board-v1` localStorage key, written on every state change via a `useEffect`.
- Cards support two independent ways to change column: native HTML5 drag-and-drop (`draggable` + `onDragStart`/`onDragOver`/`onDrop`) and a `<select>` status dropdown on the card, so the board is fully usable without drag support (touch devices, accessibility).
- Bump `STORAGE_KEY`'s version suffix (e.g. `-v2`) if the task shape changes, since there is no migration logic for previously stored boards.

## Conventions

- Components are `.jsx`, no TypeScript.
- Styling is Tailwind utility classes only — no CSS modules or styled-components. Dark-mode variants are inlined next to their light counterparts (`bg-white dark:bg-navy-900`), not in separate stylesheets.
- Color usage: `navy-*` for primary/structural UI, `accent-*` (orange) for actions/emphasis/highlights. Status/semantic colors (severity, priority, RACI letters) go through the `tone` prop on `Badge`/`StatTile`, backed by the `badgeTones` map in `src/components/ui.jsx` — add new tones there rather than inlining ad hoc color classes.
- No client-side router: navigation is just React state (`activeTab`) since there's a fixed, small set of tabs and no need for deep-linkable URLs.
