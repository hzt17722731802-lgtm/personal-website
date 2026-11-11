import Image from "next/image"

import { PricingTable } from "@/components/pricing-table"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorkGallery } from "@/components/work-gallery"
import {
  aboutPhoto,
  breakPhoto,
  galleryPhotos,
  heroPhoto,
} from "@/lib/photos"
import { site } from "@/lib/site"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main id="main" className="flex-1">
        {/* Introduction */}
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14"
        >
          <div className="grid gap-12 pt-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-28">
            <div className="flex flex-col justify-center lg:col-span-5 lg:pr-6">
              <p className="eyebrow">Portrait · Editorial · Wedding</p>
              <h1
                id="hero-heading"
                className="mt-8 font-serif text-[clamp(2.9rem,7vw,5.6rem)] leading-[0.94] tracking-[-0.03em]"
              >
                Photographs,
                <br />
                <em>made slowly</em>
                <br />
                in natural light.
              </h1>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                I’m {site.name}, a photographer based in {site.location}. I work
                with people who would rather be photographed than posed —
                portraits, editorial stories and small weddings, usually
                outdoors and usually near the end of the day.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 border-b border-foreground pb-1 font-mono text-[10px] tracking-[0.18em] text-foreground uppercase"
                >
                  Selected work
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none"
                  >
                    ↓
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="border-b border-border pb-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:border-foreground hover:text-foreground"
                >
                  {site.email}
                </a>
              </div>
              <p className="mt-10 flex items-center gap-2.5 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                <span
                  aria-hidden="true"
                  className="inline-block size-1.5 rounded-full bg-foreground/60"
                />
                {site.availability}
              </p>
            </div>

            <figure className="lg:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={heroPhoto.src}
                  alt={heroPhoto.alt}
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-col justify-between gap-1.5 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase sm:flex-row sm:items-baseline sm:gap-6">
                <span>{heroPhoto.title}</span>
                <span>
                  {heroPhoto.location} · {heroPhoto.year}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Selected work */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="scroll-mt-24 border-t border-border/70"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">01 — Selected work</p>
                <h2
                  id="work-heading"
                  className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none tracking-[-0.02em]"
                >
                  Selected work
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Six frames from recent commissions and ongoing personal series.
                New work is added twice a year.
              </p>
            </div>

            <WorkGallery photos={galleryPhotos} email={site.email} />

            <figure className="mt-20 lg:mt-28">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted sm:aspect-[21/9]">
                <Image
                  src={breakPhoto.src}
                  alt={breakPhoto.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-col justify-between gap-1.5 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase sm:flex-row sm:items-baseline sm:gap-6">
                <span>{breakPhoto.title}</span>
                <span>
                  {breakPhoto.location} · {breakPhoto.year}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-24 border-t border-border/70"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <figure className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={aboutPhoto.src}
                    alt={aboutPhoto.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex flex-col justify-between gap-1.5 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase sm:flex-row sm:items-baseline sm:gap-6">
                  <span>{aboutPhoto.title}</span>
                  <span>
                    {aboutPhoto.location} · {aboutPhoto.year}
                  </span>
                </figcaption>
              </figure>

              <div className="lg:col-span-7 lg:pt-4">
                <p className="eyebrow">02 — About</p>
                <h2
                  id="about-heading"
                  className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]"
                >
                  A slower way
                  <br />
                  <em>of working.</em>
                </h2>
                <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    I photograph people, mostly. I studied architecture before I
                    picked up a camera, and it still shapes the way I work:
                    clean lines, soft light, and the moment just before someone
                    starts performing.
                  </p>
                  <p>
                    Film and digital sit side by side in my bag — a medium
                    format camera for portraits, a small digital body for
                    everything that moves. I develop and scan at home, and print
                    the frames I cannot stop looking at.
                  </p>
                  <p>
                    I take on a small number of commissions and weddings each
                    year, so that each one has room to unfold.
                  </p>
                </div>

                <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-border/70 pt-6 sm:grid-cols-3">
                  <div>
                    <dt className="eyebrow">Based in</dt>
                    <dd className="mt-2 text-sm">{site.location}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Travel</dt>
                    <dd className="mt-2 text-sm">Worldwide, quoted at cost</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Formats</dt>
                    <dd className="mt-2 text-sm">
                      35mm, medium format, digital
                    </dd>
                  </div>
                </dl>

                <p className="mt-8 font-mono text-[9px] leading-relaxed tracking-[0.14em] text-muted-foreground uppercase">
                  Selected clients — Course &amp; Field, Studio Marlowe, The
                  Quiet Hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="scroll-mt-24 border-t border-border/70"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">03 — Sessions</p>
                <h2
                  id="pricing-heading"
                  className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none tracking-[-0.02em]"
                >
                  Sessions <em>&amp;</em> pricing
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Three ways of working together. Each begins with a conversation
                about the light, the place and what you want the pictures to
                hold.
              </p>
            </div>

            <div className="mt-14">
              <PricingTable />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24 border-t border-border/70"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="eyebrow">04 — Contact</p>
                <h2
                  id="contact-heading"
                  className="mt-4 max-w-2xl font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[0.98] tracking-[-0.03em]"
                >
                  Tell me what you’re planning.
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-10 inline-block font-serif text-[clamp(1.75rem,4vw,2.85rem)] leading-none tracking-[-0.02em] underline decoration-border decoration-1 underline-offset-[10px] transition-colors hover:decoration-foreground"
                >
                  {site.email}
                </a>
                <p className="mt-9 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  I answer every message myself, usually within two working
                  days. Tell me a little about the people, the place and the
                  light you have in mind — we can take it from there.
                </p>
              </div>

              <dl className="grid content-start gap-6 border-t border-border/70 pt-8 lg:col-span-3 lg:col-start-10 lg:border-t-0 lg:pt-0">
                <div>
                  <dt className="eyebrow">Availability</dt>
                  <dd className="mt-2 text-sm">{site.availability}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Based in</dt>
                  <dd className="mt-2 text-sm">{site.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Instagram</dt>
                  <dd className="mt-2 text-sm">
                    <a
                      href={site.instagram.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-muted-foreground"
                    >
                      {site.instagram.handle}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Response</dt>
                  <dd className="mt-2 text-sm">Within two working days</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
