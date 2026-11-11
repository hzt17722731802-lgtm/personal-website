import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/site"

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role} in ${site.location}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe5" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1b17" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="min-h-svh bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-foreground focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:tracking-[0.18em] focus:text-background focus:uppercase"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
