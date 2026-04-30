import Image from "next/image"

const timeline = [
  {
    year: "2026",
    title: "Independent Studio",
    detail:
      "Leading visual identity and motion projects for design-forward startups across India and the EU.",
  },
  {
    year: "2024",
    title: "Senior Designer · Northwave",
    detail:
      "Shipped 18+ brand systems and a design language used by 3M+ users.",
  },
  {
    year: "2022",
    title: "Designer · Hexlab",
    detail:
      "Crafted editorial layouts, packaging and motion identities for fintech & consumer brands.",
  },
  {
    year: "2020",
    title: "BFA, Visual Communication",
    detail: "Graduated with distinction. Specialised in typography & systems.",
  },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-2xl"
              />
              <div className="glass animate-float relative overflow-hidden rounded-[2rem] p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-secondary">
                  <Image
                    src="/portrait-of-a-designer-wearing-a-black-jacket-in-a.jpg"
                    alt="Portrait of Anish Kumar"
                    fill
                    sizes="(min-width: 1024px) 420px, 80vw"
                    className="object-cover grayscale"
                    priority
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-display text-xs uppercase tracking-[0.2em] text-foreground/80">
                    <span>Anish Kumar</span>
                    <span className="text-accent">/ 26</span>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="glass-strong absolute -bottom-6 -right-4 hidden rounded-2xl px-5 py-4 sm:block">
                <p className="font-display text-3xl font-semibold text-foreground">
                  6<span className="text-accent">+</span>
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  years designing
                </p>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7">
            <p className="mb-4 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> About
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              I build visual systems that feel{" "}
              <span className="text-accent">inevitable</span>.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m a multidisciplinary designer based in Bangalore, working
              at the intersection of brand, motion and interface. My practice
              is rooted in geometric type, restrained color, and the belief
              that good design quietly does the heavy lifting.
            </p>

            {/* Timeline */}
            <ol className="relative mt-12 border-l border-border pl-8">
              {timeline.map((t, i) => (
                <li key={t.year} className="group relative mb-10 last:mb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-border bg-background"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-display text-sm tracking-[0.2em] text-accent">
                      {t.year}
                    </span>
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {t.title}
                    </h3>
                  </div>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                  {i < timeline.length - 1 && null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
