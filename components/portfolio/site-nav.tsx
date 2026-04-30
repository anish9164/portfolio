"use client"

import { useEffect, useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full px-5 py-3 transition-all duration-300",
          scrolled ? "glass-strong" : "border border-transparent",
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground"
          >
            <span className="text-[10px] font-bold">AK</span>
          </span>
          <span className="hidden sm:inline">Anish Kumar</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground transition-all hover:border-accent/40 hover:text-accent sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden />
            Resume
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto mt-3 max-w-6xl px-4">
            <div className="glass-strong overflow-hidden rounded-3xl p-2">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base text-foreground hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-2xl px-4 py-3 text-base text-foreground hover:bg-secondary"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
