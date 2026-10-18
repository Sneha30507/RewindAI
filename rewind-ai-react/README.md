# Rewind AI Dashboard (React + TypeScript + Tailwind)

Built with Vite, React 18, TypeScript and Tailwind CSS 3.

## Run on localhost
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm run preview
```

## Structure
- `src/data.ts` - all dummy content (projects, activity, stats). Edit here to change text.
- `src/types.ts` - TypeScript types
- `src/components/` - Sidebar, TopBar, Hero, QuickActions, RecentProjects, RightPanel, Icon
- `tailwind.config.js` - colors and font

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Rewind AI dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/rewind-ai-dashboard.git
git push -u origin main
```
