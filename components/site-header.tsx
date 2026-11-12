import Link from "next/link"

import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const sections = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-4 md:px-10 lg:px-14">
        <Link
          href="#top"
          aria-label={`${site.name} — back to top`}
          className="flex flex-col leading-none"
        >
          <span className="font-serif text-[23px] tracking-[-0.01em]">
            {site.name}
          </span>
          <span className="mt-1.5 font-mono text-[9px] tracking-[0.28em] text-muted-foreground uppercase">
            {site.role}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-9"
        >
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className={cn(
                "font-mono text-[10px] tracking-[0.18em] uppercase transition-colors",
                section.href === "#contact"
                  ? "text-foreground underline decoration-border decoration-1 underline-offset-[6px] hover:decoration-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
