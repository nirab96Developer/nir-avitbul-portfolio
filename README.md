# Nir Avitbul — Portfolio

A professional portfolio website for **Nir Avitbul** — Software Engineer, Application Manager and Full Stack Developer.

Built as a fast, modern single-page site with a dark premium theme, smooth scrolling, scroll-reveal animations and a fully responsive, mobile-first layout.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for dev server and build
- Hand-written, organized CSS (design tokens, component styles, RTL support)
- Zero UI dependencies — lightweight and fast

## Sections

1. **Hero** — name, rotating titles and primary calls to action
2. **About** — professional summary
3. **Skills** — grouped by category (languages, frameworks, databases, DevOps & cloud, tools)
4. **Projects** — Forewise, Amit's Sweets, Terraform & Ansible Website, Secret Message Decoder
5. **Experience** — Application Manager & IT Systems Operations (KKL-JNF / ONE1)
6. **Contact** — GitHub and LinkedIn links

## Getting started

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (defaults to `http://localhost:5173`).

## Build for production

```bash
npm run build
```

The optimized output is generated in the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/      Section components (Header, Hero, About, Skills, Projects, Experience, Contact, Footer)
  data/            Centralized site content (profile, skills, projects, experience)
  hooks/           Reusable hooks (scroll reveal, active section tracking)
  styles/          Global stylesheet and design tokens
  App.tsx          Page composition
  main.tsx         App entry point
```

## Customizing content

All copy lives in [`src/data/content.ts`](src/data/content.ts). Update the profile,
skills, projects and experience there — the components render from that single source.

---

© Nir Avitbul
