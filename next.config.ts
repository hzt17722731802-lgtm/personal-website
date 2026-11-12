import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography is served from Unsplash. Picsum is allowed too,
    // in case you prefer its simpler placeholder URLs.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
}

export default nextConfig
