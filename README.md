# Alex Johnson — Frontend Developer Portfolio

A modern, animated personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Dark / Light mode toggle (persisted to localStorage)
- Smooth scroll with active section highlight in navbar
- Framer Motion scroll-triggered animations throughout
- Responsive mobile-first design with hamburger menu
- Project filter tabs (React / JavaScript / TypeScript / API / CSS)
- Animated vertical timeline for learning journey
- Contact form with success feedback
- Download CV button

## Sections

- **Hero** — Animated intro with floating gradient orbs
- **About** — Background, stats, and career goals
- **Skills** — Animated skill cards with proficiency bars
- **Projects** — Bento-style project grid with hover reveal
- **Experience** — Animated vertical timeline
- **Contact** — Contact form + social links

## Tech Stack

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

All personal content lives in one file:

```
src/data/portfolioData.ts
```

Update your name, bio, links, skills, projects, and timeline entries there — the rest of the site updates automatically.

## License

MIT
