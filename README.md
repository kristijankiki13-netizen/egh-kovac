# EGH Kovač

Premium one-page website for **EGH Kovač**, a family-owned refrigeration & logistics company based in Zagreb (Fallerovo šetalište 86).

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion** and **Lucide React**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- Framer Motion (subtle reveal animations)
- Lucide React (icons)
- Inter via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — run production server
- `npm run lint` — lint with Next defaults

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Single-page composition
  globals.css       # Tailwind + base styles
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  Infrastructure.tsx
  About.tsx
  Contact.tsx
  Reveal.tsx        # Framer Motion in-view wrapper
tailwind.config.ts  # Custom navy + ice palette
next.config.mjs     # Whitelists images.unsplash.com
```

## Design notes

- Palette: deep `navy` (trust) + `ice`/`sky` accents (cooling) on white & light gray.
- Typography: Inter, balanced headings (`text-wrap: balance`).
- Motion: gentle fade + slight slide-up on scroll, no parallax/3D.
- Imagery: Unsplash placeholders related to refrigeration, fleet, and team.

Replace placeholder content (phone numbers, image URLs, copy nuances) with the
client's final assets before going live.
# egh-kovac
