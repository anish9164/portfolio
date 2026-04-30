"use client"

import { useEffect, useState } from "react"

type Props = {
  phrases: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
}

export function Typewriter({
  phrases,
  className,
  typingSpeed = 55,
  deletingSpeed = 30,
  pause = 1600,
}: Props) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
      return
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, Math.max(0, prev.length - 1))
            : current.slice(0, prev.length + 1),
        )
      },
      deleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[2px] -translate-y-[2px] bg-accent align-middle animate-blink"
      />
    </span>
  )
}
