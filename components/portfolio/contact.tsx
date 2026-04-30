"use client"

import { useState } from "react"
import { ArrowUpRight, Check, Loader2, Mail, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

type Status = "idle" | "loading" | "success"

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
]

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    // Demo submission animation; real backend would POST here.
    setTimeout(() => setStatus("success"), 1100)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Heading + meta */}
          <div className="lg:col-span-5">
            <p className="mb-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" /> Contact
            </p>
            <h2 className="font-display text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s build
              <br />
              something{" "}
              <span className="text-accent">brilliant</span>.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Briefs, collaborations, or just a hello — I read every message
              and reply within two working days.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary/40 text-accent">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <a href="mailto:hello@anish.design" className="hover:text-accent">
                  hello@anish.design
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary/40 text-accent">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                Bangalore, IN — working globally
              </li>
            </ul>

            <ul className="mt-10 flex flex-wrap items-center gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {s.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-10"
            >
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <FloatingField
                  id="name"
                  label="Name"
                  type="text"
                  autoComplete="name"
                  required
                />
                <FloatingField
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <FloatingField
                  id="company"
                  label="Company (optional)"
                  type="text"
                  className="sm:col-span-2"
                />
                <FloatingField
                  id="message"
                  label="Tell me about your project"
                  textarea
                  required
                  className="sm:col-span-2"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all",
                    status === "success"
                      ? "bg-accent text-accent-foreground"
                      : "bg-foreground text-background hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground",
                    status === "loading" && "opacity-70",
                  )}
                >
                  {status === "loading" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <Check className="h-4 w-4" aria-hidden />
                      Message sent
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      Send message
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:rotate-45"
                        aria-hidden
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingField({
  id,
  label,
  type = "text",
  textarea,
  className,
  ...rest
}: {
  id: string
  label: string
  type?: string
  textarea?: boolean
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const sharedClasses =
    "peer w-full rounded-xl border border-border bg-background/40 px-4 pt-6 pb-2 text-sm text-foreground placeholder-transparent outline-none transition-all focus:border-accent/60 focus:bg-background focus:ring-2 focus:ring-accent/30"

  return (
    <div className={cn("relative", className)}>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={label}
          className={cn(sharedClasses, "min-h-32 resize-y")}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          className={sharedClasses}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-accent"
      >
        {label}
      </label>
    </div>
  )
}
