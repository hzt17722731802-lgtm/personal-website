import { sessions } from "@/lib/pricing"
import { site } from "@/lib/site"

function Includes({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] tracking-[0.14em] text-muted-foreground uppercase">
      {items.map((item) => (
        <li key={item} className="after:ml-4 after:content-['·'] last:after:content-['']">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function PricingTable() {
  return (
    <div>
      {/* Table for wider screens. */}
      <table className="hidden w-full border-collapse text-left md:table">
        <caption className="sr-only">
          Sessions and starting prices, in US dollars
        </caption>
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="eyebrow pb-4 font-normal">
              Session
            </th>
            <th scope="col" className="eyebrow pb-4 pl-8 font-normal">
              Duration
            </th>
            <th scope="col" className="eyebrow pb-4 text-right font-normal">
              From
            </th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr
              key={session.name}
              className="border-b border-border/70 align-top"
            >
              <td className="py-10 pr-8">
                <p className="font-serif text-[26px] leading-none tracking-[-0.01em]">
                  {session.name}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {session.summary}
                </p>
                <div className="mt-5">
                  <Includes items={session.includes} />
                </div>
              </td>
              <td className="py-10 pl-8 font-mono text-[10px] tracking-[0.16em] whitespace-nowrap text-muted-foreground uppercase">
                {session.duration}
              </td>
              <td className="py-10 pl-8 text-right">
                <span className="eyebrow">from</span>
                <span className="mt-2 block font-serif text-3xl tracking-[-0.02em]">
                  {session.price}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Stacked version for small screens. */}
      <div className="md:hidden">
        {sessions.map((session) => (
          <div
            key={session.name}
            className="border-t border-border/70 py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-serif text-2xl">{session.name}</p>
              <div className="text-right">
                <span className="eyebrow">from</span>
                <p className="font-serif text-2xl">{session.price}</p>
              </div>
            </div>
            <p className="mt-1 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase">
              {session.duration}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {session.summary}
            </p>
            <div className="mt-4">
              <Includes items={session.includes} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 border-t border-border/70 pt-8 text-sm sm:grid-cols-2">
        <p className="text-muted-foreground">
          <span className="text-foreground">Every commission includes</span> a
          conversation before the day, colour-graded files and a private online
          gallery you can share.
        </p>
        <p className="text-muted-foreground">
          Travel beyond {site.location} is quoted at cost. Dates are held with a
          30% deposit. Prices are in US dollars and include applicable tax.
        </p>
      </div>

      <a
        href={`mailto:${site.email}?subject=Session%20enquiry`}
        className="mt-10 inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-[10px] tracking-[0.18em] text-foreground uppercase transition-colors hover:border-foreground"
      >
        Ask about dates
        <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}
