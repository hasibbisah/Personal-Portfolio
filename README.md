# Mohammad Mesbah Uddin Hasib — Portfolio

A premium, dark-mode personal portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. Add your resume PDF at `public/Mohammad_Mesbah_Uddin_Hasib_Resume.pdf`
   (the Hero and Resume section download buttons point to this path).
2. Update the metadata in `app/layout.tsx` (domain, OG image) once you have a live URL.
3. Wire the contact form in `components/Contact.tsx` to an email service
   (Formspree, Resend, or a custom API route) — it currently only shows a confirmation state.
4. Swap `public/favicon.svg` for a refined version if you want a custom mark.
5. All content lives in `lib/data.ts` — edit it there and every section updates.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom tokens: midnight navy background, coral accent, Manrope + Space Grotesk)
- Lucide React icons
- Scroll-reveal animations via IntersectionObserver (no extra animation library needed;
  add `framer-motion` — already in package.json — if you want to extend motion further)
