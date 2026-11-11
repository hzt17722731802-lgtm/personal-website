export type Session = {
  name: string
  duration: string
  price: string
  summary: string
  includes: string[]
}

/**
 * PLACEHOLDER pricing — replace the amounts, durations and inclusions with
 * real ones. Prices are shown as “from” figures in US dollars.
 */
export const sessions: Session[] = [
  {
    name: "Portrait",
    duration: "90 minutes",
    price: "$480",
    summary:
      "One person, one place, and enough time to stop noticing the camera. Outdoors or in the studio.",
    includes: ["25 edited images", "Private online gallery", "One location"],
  },
  {
    name: "Editorial",
    duration: "Half or full day",
    price: "$1,200",
    summary:
      "Commissions for magazines, studios and small brands. Planning help, and a light footprint on set.",
    includes: ["40–80 edited images", "Art direction support", "Print and web usage"],
  },
  {
    name: "Wedding",
    duration: "Up to 8 hours",
    price: "$3,200",
    summary:
      "Quiet, documentary coverage of a day that goes by faster than anyone expects.",
    includes: ["400+ edited images", "Preparation to first dance", "Second photographer on request"],
  },
]
