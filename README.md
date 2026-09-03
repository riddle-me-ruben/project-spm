# CS 5388 · Living Project Portal

A single-page React application built for the CS 5388 Software Project Management course project. It serves as a "living" project artifact — a portal where the project charter, business case, hybrid delivery plan, sprint board, roadmap metrics, and AI governance documentation for the team's project all live side by side, staying interactive and up to date instead of sitting in static slide decks.

## Key technologies

- **React 18** (function components + hooks) for the UI
- **Vite** as the dev server and build tool
- **Tailwind CSS** for styling, with a custom Deep Navy Blue / Vibrant Orange theme and a `class`-based dark mode strategy
- **Lucide React** for icons
- Plain browser `localStorage` for persisting the Kanban board across page reloads — no backend is required for this project

## Structure

The app is organized into six independent, modular tabs, each its own component under `src/tabs/`:

1. `CharterTab.jsx` — Project charter, stakeholder power/interest matrix, RACI grid
2. `BusinessCaseTab.jsx` — ROI/cost-benefit analysis and COCOMO vs. Story Point estimation
3. `PlanRiskTab.jsx` — Work breakdown structure, milestone timeline, categorized risk/RAID log
4. `KanbanTab.jsx` — Drag-and-drop Kanban board with local persistence
5. `RoadmapTopologyTab.jsx` — Agile roadmap, DORA metrics, team topology & staffing
6. `AIGovernanceTab.jsx` — AI governance framework and data privacy/audit tracking

A `ThemeContext` in `src/context/ThemeContext.jsx` drives the light/dark mode toggle from the navbar and persists the preference in `localStorage`.

## Running locally

```bash
npm install
npm run dev
```

This starts the Vite dev server (default `http://localhost:5173`). To build a production bundle:

```bash
npm run build
npm run preview
```
