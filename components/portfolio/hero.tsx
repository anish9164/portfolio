"use client"

import { ArrowUpRight, Sparkles } from "lucide-react"
import { Typewriter } from "./typewriter"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />

      <div
        aria-hidden
        className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-24 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[140px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 -z-10 hidden h-[640px] w-[640px] -translate-y-1/2 lg:block"
      >
        <div className="relative h-full w-full animate-orbit">
          <div className="absolute inset-0 rounded-full border border-border" />
          <div className="absolute inset-8 rounded-full border border-border/70" />
          <div className="absolute inset-20 rounded-full border border-border/40" />
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-glow" />
          <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-foreground/70" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start gap-8">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
            Available for select projects · 2026
          </span>

          <h1 className="font-display text-balance text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[9.5rem]">
            <span className="block text-foreground/90">ANISH</span>
            <span className="block text-glow">
              KUMAR
              <span className="text-accent">.</span>
            </span>
          </h1>

          <div className="flex flex-col gap-3">
            <p className="font-display text-lg text-muted-foreground sm:text-xl">
              Graphic Designer &amp; Visual Creator
            </p>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
              I design{" "}
              <Typewriter
                className="font-display text-accent"
                phrases={[
                  "bold brand identities.",
                  "kinetic motion graphics.",
                  "futuristic interfaces.",
                  "typography systems.",
                ]}
              />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_var(--accent)]"
            >
              Explore Work
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:rotate-45"
                aria-hidden
              />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {"Let's Talk"}
            </a>
          </div>

          <div className="mt-12 w-full overflow-hidden border-y border-border py-4">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span>Branding</span>
                  <span className="text-accent">/</span>
                  <span>Motion</span>
                  <span className="text-accent">/</span>
                  <span>UI Systems</span>
                  <span className="text-accent">/</span>
                  <span>Editorial</span>
                  <span className="text-accent">/</span>
                  <span>3D &amp; Type</span>
                  <span className="text-accent">/</span>
                  <span>Art Direction</span>
                  <span className="text-accent">/</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
