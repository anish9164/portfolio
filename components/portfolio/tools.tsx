const tools = [
  { name: "Photoshop", short: "Ps", level: "Expert", use: "Compositing & retouch" },
  { name: "Illustrator", short: "Ai", level: "Expert", use: "Vector & marks" },
  { name: "After Effects", short: "Ae", level: "Advanced", use: "Motion & FX" },
  { name: "Premiere Pro", short: "Pr", level: "Advanced", use: "Editorial cuts" },
  { name: "Figma", short: "Fg", level: "Expert", use: "Product systems" },
  { name: "Cinema 4D", short: "C4", level: "Intermediate", use: "3D type & scenes" },
  { name: "Blender", short: "Bl", level: "Intermediate", use: "3D & rendering" },
  { name: "Adobe XD", short: "Xd", level: "Advanced", use: "Wireframing" },
]

export function Tools() {
  return (
    <section id="tools" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> Toolkit
            </p>
            <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              The instruments behind the work.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Hover any tile to learn how it fits into my process.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {tools.map((t) => (
            <li
              key={t.name}
              className="group relative isolate overflow-hidden rounded-2xl border border-border bg-card/40 p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-display text-2xl font-semibold text-muted-foreground transition-colors group-hover:text-accent"
                  aria-hidden
                >
                  {t.short}
                </span>
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.level}
                </span>
              </div>
              <p className="mt-10 font-display text-base text-foreground">
                {t.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{t.use}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/20"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
