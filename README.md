# Personal website

A single-page photography portfolio built with Next.js (App Router), Tailwind CSS
v4 and the shadcn/ui “base-lyra” preset. Sharp corners, warm paper tones and a
serif display face keep the layout quiet and editorial rather than promotional.

## Getting started

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

| Command           | What it does                    |
| ----------------- | ------------------------------- |
| `pnpm dev`        | Development server              |
| `pnpm build`      | Production build                |
| `pnpm start`      | Serve the production build      |
| `pnpm lint`       | ESLint                          |
| `pnpm typecheck`  | TypeScript, no emit             |
| `pnpm format`     | Prettier with the Tailwind plugin |

## Where the content lives

| What you are changing                        | File                     |
| -------------------------------------------- | ------------------------ |
| Name, email, location, Instagram, availability | `lib/site.ts`          |
| All page copy (intro, about, contact, labels)  | `app/page.tsx`         |
| Session names, prices, durations, inclusions   | `lib/pricing.ts`       |
| Photography (sources, alt text, captions)      | `lib/photos.ts`        |
| Colours, fonts, spacing tokens                 | `app/globals.css`      |

The visible address and the mail link target are configured separately in
`lib/site.ts`: `email` is the text shown on the page (`hello@example.com`) and
`emailHref` is what every email link opens (`mailto:mailto@example.com`).
Update both when adapting the template.

Fonts are **Instrument Serif** for display type, **Geist** for body copy and
**Geist Mono** for the small uppercase labels. They are loaded with
`next/font/google`, so the font files are self-hosted at build time.

## Placeholder photography — replace these

Every photograph on the site is a free-to-use Unsplash stand-in. Replace each one
with your own work before the site goes live:

1. Put the file in `public/photos/` (for example `public/photos/elin.jpg`).
2. In `lib/photos.ts`, change `src` to `"/photos/elin.jpg"` and update
   `width`, `height` and `alt` to describe the real photograph.

| Slot on the page       | Caption shown          | Unsplash photo ID                  | Where to edit           |
| ---------------------- | ---------------------- | ---------------------------------- | ----------------------- |
| Hero (right column)    | Elin, last light       | `photo-1544005313-94ddf0286df2`    | `heroPhoto`             |
| Work grid, 1st         | The path at dusk       | `photo-1441974231531-c6227db76b6e` | `galleryPhotos[0]`      |
| Work grid, 2nd         | Jonas, studio          | `photo-1506794778202-cad84cf45f1d` | `galleryPhotos[1]`      |
| Work grid, 3rd         | Cole, rooftop          | `photo-1521119989659-a83eee488004` | `galleryPhotos[2]`      |
| Work grid, 4th         | Vows, late afternoon   | `photo-1519741497674-611481863552` | `galleryPhotos[3]`      |
| Work grid, 5th         | Blue hour study        | `photo-1534528741775-53994a69daeb` | `galleryPhotos[4]`      |
| Work grid, 6th         | Route 12, Mojave       | `photo-1500530855697-b586d89ba3ee` | `galleryPhotos[5]`      |
| Wide break after work  | Weather over Trotternish | `photo-1470071459604-3b5ec3a7fe05` | `breakPhoto`          |
| About (left column)    | The tools, mostly      | `photo-1516035069371-29a1b244cc32` | `aboutPhoto`            |

Other placeholders to replace: the photographer name, email address, location,
Instagram link and availability line in `lib/site.ts`; the three prices and
inclusions in `lib/pricing.ts`; the selected-clients line in `app/page.tsx`.
Alt text is written for the placeholder images — update it alongside your own
photographs.

Once your own images are in `/public/photos`, you can remove the Unsplash
entries from `images.remotePatterns` in `next.config.ts`.

## Structure

```
app/
  layout.tsx          Fonts, metadata, theme provider
  page.tsx            Hero, work, about, pricing, contact
  globals.css         Palette, typography tokens, base styles
components/
  site-header.tsx     Sticky wordmark and section nav
  work-gallery.tsx    Selected-work grid with a native <dialog> viewer
  pricing-table.tsx   Sessions table (stacked on small screens)
  site-footer.tsx     Footer and theme toggle
  theme-toggle.tsx    Light/dark switch (the “d” key also works, from the template)
lib/
  site.ts             Identity and contact details
  photos.ts           Photography data
  pricing.ts          Session pricing
```

## Deploying

The site is fully static and deploys to any Next.js host (Vercel, Netlify,
Cloudflare, or a Node server via `pnpm build && pnpm start`). Set the production
domain and add an Open Graph image before launch.

## Credits

Placeholder photographs come from [Unsplash](https://unsplash.com) and are used
under the Unsplash License. They are stand-ins only — remove them once your own
work is in place.
