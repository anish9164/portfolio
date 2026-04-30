export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-50"
      />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Currently
            </p>
            <p className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
              <span className="relative mr-2 inline-flex h-2 w-2 -translate-y-1 rounded-full bg-accent align-middle">
                <span className="absolute inset-0 animate-pulse-ring rounded-full" />
              </span>
              Booking Q3 · 2026
            </p>
          </div>
          <a
            href="#contact"
            className="font-display text-4xl tracking-tight text-foreground transition-colors hover:text-accent sm:text-6xl"
          >
            hello@anish.design →
          </a>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Anish Kumar. Crafted with intent.</p>
          <p className="font-display uppercase tracking-[0.25em]">
            Bangalore · 12.97°N 77.59°E
          </p>
        </div>
      </div>
    </footer>
  )
}
