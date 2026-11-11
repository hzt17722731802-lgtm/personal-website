/**
 * Site-wide identity and contact details.
 * Everything marked PLACEHOLDER should be replaced with the photographer's
 * own details before the site goes live.
 */
export const site = {
  // PLACEHOLDER — replace with your own name.
  name: "Mara Voss",
  role: "Photographer",
  // PLACEHOLDER — replace with the email address you actually read.
  email: "hello@maravoss.com",
  // PLACEHOLDER — replace with your city and region.
  location: "Portland, Oregon",
  availability: "Booking spring – autumn 2026",
  // PLACEHOLDER — replace with your own profile, or remove the link from
  // components/site-footer.tsx and the contact section in app/page.tsx.
  instagram: {
    handle: "@maravoss",
    href: "https://www.instagram.com/",
  },
  description:
    "Portrait, editorial and wedding photography by Mara Voss, based in Portland, Oregon. Natural light, unhurried sessions, photographs made to last.",
} as const
