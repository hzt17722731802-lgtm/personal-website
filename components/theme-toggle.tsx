"use client"

import { useTheme } from "next-themes"

/**
 * The two labels/icons swap through CSS (`.dark`) rather than React state, so
 * the markup is identical on the server and after hydration.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-3.5 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="hidden size-3.5 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </svg>
      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
    </button>
  )
}
