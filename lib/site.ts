/**
 * Site-wide identity and contact details.
 * Everything marked PLACEHOLDER should be replaced with the photographer's
 * own details before the site goes live.
 */
export const site = {
  // PLACEHOLDER — replace with your own name.
  name: "Alex Rowan",
  role: "Photographer",
  // PLACEHOLDER — address shown on the page. Every mail link uses emailHref.
  email: "hello@example.com",
  // PLACEHOLDER — target of every email link, kept separate from the display
  // text above so the visible address can differ from the mailbox opened.
  emailHref: "mailto:mailto@example.com",
  // PLACEHOLDER — replace with your city and region.
  location: "Portland, Oregon",
  availability: "Booking spring – autumn 2026",
  // PLACEHOLDER — replace with your own profile, or remove the link from
  // components/site-footer.tsx and the contact section in app/page.tsx.
  instagram: {
    handle: "@alexrowan",
    href: "https://www.instagram.com/",
  },
  description:
    "Portrait, editorial and wedding photography by Alex Rowan, based in Portland, Oregon. Natural light, unhurried sessions, photographs made to last.",
} as const
