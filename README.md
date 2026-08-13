# Pomelo

A demo marketing site for **Pomelo** — a Spanish-language brunch & specialty-coffee house (cream paper, grapefruit-coral accent, script-over-sans type, image-clipped hero lettering). Built as a portfolio piece for [Unnati Works](https://github.com/arod90/Unnati-Works).

Ported from a Pomelo design-system concept into a real, performance-first **Next.js** app.

## Stack

- **Next.js 16** (App Router) + **React 19** — statically prerendered
- **next/font** self-hosting Rubik + Sacramento + Yellowtail (no external request, no layout shift)
- Optimized hero photography (the five `background-clip:text` images crushed from ~10MB → ~1.3MB)
- Plain CSS design tokens (cream / coral / espresso) — no CSS framework
- Scroll-reveal system + choreographed hero (letters clip-in, script writes, doodle draws)

## The page

A single scrolling site: sticky nav, image-clipped **POMELO** hero, seasonal coral feature
block, Café & Brunch big-word sections, an About scene, and a footer — plus a working
**"Reservar"** reservation modal (Dialog + form) built from the design-system components.

Copy is in Spanish throughout.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.js       Fonts, metadata
  page.js         The whole site (client component) + reservation modal
  globals.css     Tokens + site layout + hero choreography + reveal motion
components/       Design system (Button, Card, IconButton, Dialog, Input, Select)
lib/motion.js     Scroll-reveal system
public/assets/    Hero photography (optimized) + storefront line-art
```

## Design provenance

Design, tokens, and components from a Pomelo design-system concept (a house style inspired
by contemporary brunch-cafe branding; no third-party brand assets were used). This repo is a
faithful, performance-oriented port: the visual design and Spanish content are preserved, the
original in-browser Babel + CDN React runtime is removed, images are pre-optimized, fonts are
self-hosted, and the page is a statically-rendered Next.js route.
