"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import type { Photo } from "@/lib/photos"
import { cn } from "@/lib/utils"

/**
 * Layout slots for the six selected photographs. Each entry pairs a grid
 * column span with the crop used for that photograph.
 */
const slots = [
  {
    className: "lg:col-span-7",
    aspect: "aspect-[3/2]",
    sizes: "(max-width: 1023px) 100vw, 46vw",
  },
  {
    className: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    sizes: "(max-width: 1023px) 100vw, 34vw",
  },
  {
    className: "lg:col-span-5 lg:mt-14",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 1023px) 100vw, 34vw",
  },
  {
    className: "lg:col-span-7",
    aspect: "aspect-[3/2]",
    sizes: "(max-width: 1023px) 100vw, 46vw",
  },
  {
    className: "lg:col-span-4",
    aspect: "aspect-[4/5]",
    sizes: "(max-width: 1023px) 100vw, 28vw",
  },
  {
    className: "lg:col-span-4 lg:mt-14",
    aspect: "aspect-[4/5]",
    sizes: "(max-width: 1023px) 100vw, 28vw",
  },
]

export function WorkGallery({
  photos,
  emailHref,
}: {
  photos: Photo[]
  emailHref: string
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const active = activeIndex === null ? null : photos[activeIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeIndex === null) {
      if (dialog.open) dialog.close()
      return
    }

    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [activeIndex])

  function goTo(direction: 1 | -1) {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + direction + photos.length) % photos.length
    })
  }

  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 lg:grid-cols-12 lg:gap-y-20">
        {photos.map((photo, index) => {
          const slot = slots[index] ?? slots[0]
          return (
            <figure key={photo.id} className={cn("group", slot.className)}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View “${photo.title}” larger`}
                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div
                  className={cn("relative overflow-hidden bg-muted", slot.aspect)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={slot.sizes}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <figcaption className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-serif text-[17px] leading-tight text-foreground">
                    {photo.title}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase sm:text-right">
                    {photo.category} · {photo.location} · {photo.year}
                  </span>
                </figcaption>
              </button>
            </figure>
          )
        })}

        <div className="flex flex-col justify-center border-t border-border/70 pt-8 lg:col-span-4 lg:mt-14 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
          <p className="font-serif text-[26px] leading-[1.15] tracking-[-0.01em]">
            A longer edit, on request.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The archive holds several hundred frames, arranged into series.
            Tell me what you are looking for and I will send a link.
          </p>
          <a
            href={emailHref}
            className="mt-6 inline-flex items-center gap-2 self-start border-b border-border pb-1 font-mono text-[10px] tracking-[0.18em] text-foreground uppercase transition-colors hover:border-foreground"
          >
            Ask for the full portfolio
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Photograph viewer"
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null)
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault()
            goTo(1)
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            goTo(-1)
          }
        }}
        className="m-auto max-h-[92svh] w-[min(92vw,1080px)] bg-transparent p-0 text-foreground"
      >
        {active && activeIndex !== null ? (
          <div className="flex flex-col bg-background">
            <div className="flex items-start justify-between gap-6 border-b border-border/70 px-4 py-3 sm:px-6">
              <div>
                <p className="font-serif text-lg leading-none">{active.title}</p>
                <p className="mt-1.5 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase">
                  {active.category} · {active.location} · {active.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close viewer"
                className="shrink-0 p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center bg-muted/40 p-2 sm:p-4">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="(max-width: 1080px) 90vw, 900px"
                className="h-auto max-h-[66svh] w-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border/70 px-4 py-3 sm:px-6">
              <button
                type="button"
                onClick={() => goTo(-1)}
                className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                ← Previous
              </button>
              <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => goTo(1)}
                className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Next →
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}
