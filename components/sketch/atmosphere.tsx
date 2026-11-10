"use client"

import { useEffect, useState } from "react"
import { Pause, Play } from "lucide-react"

/** Decorative paper grain + watercolor washes. Pause for WCAG 2.2.2. */
export function SketchAtmosphere() {
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  const motionOff = paused || reduced

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="paper-grain absolute inset-0 opacity-60" />
      <div
        className={`wash wash-blue absolute -left-16 top-12 h-64 w-72 ${motionOff ? "" : "wash-drift"}`}
      />
      <div
        className={`wash wash-coral absolute right-[-2rem] top-1/3 h-56 w-64 ${motionOff ? "" : "wash-drift-slow"}`}
      />
      <div
        className={`wash wash-yellow absolute bottom-24 left-1/3 h-48 w-80 ${motionOff ? "" : "wash-drift"}`}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" preserveAspectRatio="none">
        <defs>
          <pattern id="sketch-lines" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M0 40 Q30 38 60 42 T120 40"
              fill="none"
              stroke="#2D2D2D"
              strokeWidth="0.6"
            />
            <path
              d="M0 80 Q40 78 80 83 T120 80"
              fill="none"
              stroke="#2D2D2D"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sketch-lines)" />
      </svg>
      <div className="pointer-events-auto absolute bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="sketch-btn inline-flex h-11 cursor-pointer items-center gap-2 bg-card px-3 text-sm text-foreground focus-ring"
          aria-pressed={paused}
          aria-label={paused ? "Play background motion" : "Pause background motion"}
        >
          {paused || reduced ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          {reduced ? "Still" : paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  )
}
