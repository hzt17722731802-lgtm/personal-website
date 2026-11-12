import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/lib/site"

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl leading-none tracking-[-0.015em]">
              {site.name}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Portrait, editorial and wedding photography. Based in{" "}
              {site.location}, working elsewhere when the light asks.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow">Sections</p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.emailHref}
                  className="text-sm text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Instagram — {site.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-border/70 pt-6 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p>{site.location}</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
