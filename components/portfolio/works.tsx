"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  category: "Branding" | "Posters" | "UI" | "Motion"
  year: string
  src: string
  ratio: "tall" | "wide" | "square"
}

const projects: Project[] = [
  {
    id: "1",
    title: "Helios — Identity",
    category: "Branding",
    year: "2025",
    src: "/dark-minimalist-brand-identity-mockup-with-bold-ge.jpg",
    ratio: "tall",
  },
  {
    id: "2",
    title: "Nocturne Festival",
    category: "Posters",
    year: "2025",
    src: "/futuristic-music-festival-poster-with-neon-typogra.jpg",
    ratio: "wide",
  },
  {
    id: "3",
    title: "Vault — Banking App",
    category: "UI",
    year: "2024",
    src: "/dark-mode-fintech-mobile-app-ui-design-with-gradie.jpg",
    ratio: "square",
  },
  {
    id: "4",
    title: "Pulse Reel",
    category: "Motion",
    year: "2025",
    src: "/abstract-motion-graphics-still-with-glowing-shapes.jpg",
    ratio: "wide",
  },
  {
    id: "5",
    title: "Aurum Studio",
    category: "Branding",
    year: "2024",
    src: "/luxury-monochrome-brand-stationery-with-gold-foil-.jpg",
    ratio: "square",
  },
  {
    id: "6",
    title: "Type 03",
    category: "Posters",
    year: "2025",
    src: "/experimental-typography-poster-black-and-white-bru.jpg",
    ratio: "tall",
  },
  {
    id: "7",
    title: "Lumen OS",
    category: "UI",
    year: "2026",
    src: "/futuristic-operating-system-dashboard-ui-with-cyan.jpg",
    ratio: "wide",
  },
  {
    id: "8",
    title: "Kinetic Type 02",
    category: "Motion",
    year: "2024",
    src: "/kinetic-typography-still-frame-with-3d-letters-on-.jpg",
    ratio: "tall",
  },
]

const filters = ["All", "Branding", "Posters", "UI", "Motion"] as const
type Filter = (typeof filters)[number]

export function Works() {
  const [active, setActive] = useState<Filter>("All")

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="work" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> Selected Work
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Recent projects, in motion
              <br />
              and at rest.
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View archive
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </div>

        {/* Filters */}
        <div className="sticky top-24 z-30 mb-8 -mx-6 px-6">
          <div
            role="tablist"
            aria-label="Filter projects"
            className="glass-strong mx-auto inline-flex max-w-full items-center gap-1 rounded-full p-1.5"
          >
            {filters.map((f) => {
              const selected = f === active
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={selected}
                  type="button"
                  onClick={() => setActive(f)}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors sm:text-sm sm:tracking-[0.2em]",
                    selected
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {visible.map((p, i) => (
            <a
              key={p.id}
              href="#"
              className={cn(
                "group relative isolate block overflow-hidden rounded-2xl border border-border bg-card",
                p.ratio === "tall" && "row-span-2 aspect-[3/5]",
                p.ratio === "wide" && "col-span-2 aspect-[16/10]",
                p.ratio === "square" && "aspect-square",
              )}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Image
                src={p.src || "/placeholder.svg"}
                alt={`${p.title} — ${p.category}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Always-on subtle gradient */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0"
              />
              {/* Hover overlay */}
              <div
                aria-hidden
                className="absolute inset-0 bg-background/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                      {p.category} · {p.year}
                    </p>
                    <h3 className="mt-1 font-display text-base font-medium text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-lg">
                      {p.title}
                    </h3>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background/60 text-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:translate-x-2">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
