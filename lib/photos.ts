/**
 * Placeholder photography.
 *
 * Every image below is a free-to-use Unsplash photograph, standing in for the
 * photographer's own work. To swap one out:
 *
 *   1. Put your file in /public/photos (for example /public/photos/elin.jpg).
 *   2. Replace `src` with "/photos/elin.jpg" and update `width`, `height`
 *      and `alt` to match the real photograph.
 *
 * The placeholder list in README.md maps every slot on the page to this file.
 */

export type Photo = {
  id: string
  src: string
  alt: string
  title: string
  category: "Portrait" | "Editorial" | "Wedding" | "Landscape" | "Still life"
  location: string
  year: string
  width: number
  height: number
}

/** Build a reasonably sized Unsplash URL for a placeholder photo. */
function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`
}

export const heroPhoto: Photo = {
  id: "hero",
  src: unsplash("1544005313-94ddf0286df2", 1400),
  alt: "A woman with long brown hair, photographed in warm evening light",
  title: "Elin, last light",
  category: "Portrait",
  location: "Sauvie Island",
  year: "2025",
  width: 1200,
  height: 1800,
}

export const breakPhoto: Photo = {
  id: "weather",
  src: unsplash("1470071459604-3b5ec3a7fe05", 2000),
  alt: "Low cloud and evening sun over a green, rocky valley",
  title: "Weather over Trotternish",
  category: "Landscape",
  location: "Isle of Skye",
  year: "2023",
  width: 1800,
  height: 1080,
}

export const aboutPhoto: Photo = {
  id: "tools",
  src: unsplash("1516035069371-29a1b244cc32", 1200),
  alt: "A camera body and three lenses arranged on a dark table",
  title: "The tools, mostly",
  category: "Still life",
  location: "Studio, Portland",
  year: "2024",
  width: 1200,
  height: 1500,
}

export const galleryPhotos: Photo[] = [
  {
    id: "forest",
    src: unsplash("1441974231531-c6227db76b6e"),
    alt: "A path through tall trees with sunlight falling between the trunks",
    title: "The path at dusk",
    category: "Landscape",
    location: "Ardennes",
    year: "2024",
    width: 1800,
    height: 1200,
  },
  {
    id: "studio",
    src: unsplash("1506794778202-cad84cf45f1d"),
    alt: "A man in a heavy knit sweater against a dark studio background",
    title: "Jonas, studio",
    category: "Portrait",
    location: "Portland",
    year: "2025",
    width: 1200,
    height: 1800,
  },
  {
    id: "rooftop",
    src: unsplash("1521119989659-a83eee488004"),
    alt: "A man in a black turtleneck and rust-coloured beanie on a rooftop",
    title: "Cole, rooftop",
    category: "Editorial",
    location: "London",
    year: "2024",
    width: 1200,
    height: 1650,
  },
  {
    id: "vows",
    src: unsplash("1519741497674-611481863552"),
    alt: "A couple holding a bouquet in backlit afternoon sun",
    title: "Vows, late afternoon",
    category: "Wedding",
    location: "Hood River",
    year: "2024",
    width: 1800,
    height: 1200,
  },
  {
    id: "blue-hour",
    src: unsplash("1534528741775-53994a69daeb"),
    alt: "A portrait lit with cool blue light against a pale backdrop",
    title: "Blue hour study",
    category: "Portrait",
    location: "Studio, Portland",
    year: "2025",
    width: 1200,
    height: 1500,
  },
  {
    id: "road",
    src: unsplash("1500530855697-b586d89ba3ee"),
    alt: "An empty road running between red rock formations toward a mountain",
    title: "Route 12, Mojave",
    category: "Landscape",
    location: "California",
    year: "2023",
    width: 1200,
    height: 1800,
  },
]
