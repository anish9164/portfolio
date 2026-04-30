"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Anish translated a tangled brand into a system so disciplined that even our engineers ship pixel-perfect screens now. Rare talent.",
    name: "Maya Iyer",
    role: "Head of Brand",
    company: "Northwave",
    rating: 5,
  },
  {
    quote:
      "The motion identity he built for our launch reel set the tone for the whole product. Calm, confident, undeniably modern.",
    name: "Daniel Cho",
    role: "Founder",
    company: "Vault",
    rating: 5,
  },
  {
    quote:
      "Every detail thought through — from the kerning in the wordmark to the easing on the hover state. Worth every conversation.",
    name: "Priya Menon",
    role: "Creative Director",
    company: "Aurum Studio",
    rating: 5,
  },
  {
    quote:
      "Anish doesn&apos;t just deliver decks; he delivers conviction. We made decisions faster because the work pointed the way.",
    name: "Erik Lindqvist",
    role: "VP Marketing",
    company: "Helios",
    rating: 5,
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> Testimonials
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Words from people
              <br />
              I&apos;ve made things with.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="w-full shrink-0 px-1 sm:px-2"
                aria-hidden={i !== index}
              >
                <div className="glass-strong relative mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl p-8 sm:p-12">
                  <Quote
                    className="h-10 w-10 text-accent/60"
                    aria-hidden
                  />
                  <p className="font-display text-pretty text-2xl leading-snug text-foreground sm:text-3xl">
                    “{t.quote.replace("&apos;", "'")}”
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                    <div>
                      <p className="font-display text-base font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={cn(
                            "h-4 w-4",
                            s < t.rating
                              ? "fill-accent text-accent"
                              : "text-muted-foreground",
                          )}
                          aria-hidden
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-accent"
                    : "w-3 bg-border hover:bg-muted-foreground",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
