"use client"

import { useEffect, useRef, useState } from "react"

type Skill = {
  label: string
  value: number // 0–100
  caption: string
}

const skills: Skill[] = [
  { label: "Graphic Design", value: 96, caption: "Posters, editorial, print" },
  { label: "UI / UX Design", value: 88, caption: "Product systems & flows" },
  { label: "Motion Graphics", value: 82, caption: "Kinetic type & explainer" },
  { label: "Branding", value: 92, caption: "Identity & guidelines" },
]

function Ring({ value, label, caption }: Skill) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // animate from 0 to value
          const start = performance.now()
          const duration = 1400
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setProgress(Math.round(eased * value))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      ref={ref}
      className="glass group relative flex flex-col items-center gap-4 rounded-2xl p-6 transition-colors hover:border-accent/40"
    >
      <div className="relative h-32 w-32">
        <svg
          viewBox="0 0 130 130"
          className="h-full w-full -rotate-90"
          aria-hidden
        >
          <circle
            cx="65"
            cy="65"
            r={radius}
            stroke="currentColor"
            className="text-border"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="65"
            cy="65"
            r={radius}
            stroke="currentColor"
            className="text-accent transition-[stroke-dashoffset]"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              filter:
                "drop-shadow(0 0 10px color-mix(in oklab, var(--accent) 50%, transparent))",
            }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-3xl font-semibold tabular-nums">
            {progress}
            <span className="text-base text-muted-foreground">%</span>
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="font-display text-base font-medium text-foreground">
          {label}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> Skills
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Disciplines I move
              <br />
              between every day.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Six years of dedicated practice across brand, motion and product.
            The tools change — the obsession with detail doesn&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {skills.map((s) => (
            <Ring key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
