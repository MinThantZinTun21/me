"use client"

import { useEffect, useState } from "react"
import { Pause, Play } from "lucide-react"

/**
 * Decorative cyber-brutal atmosphere: grid + scanline + signal pulse.
 * aria-hidden; pause control for WCAG 2.2.2.
 */
export function TechAtmosphere() {
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
      <div className="tech-grid absolute inset-0 opacity-40" />
      <div
        className={`tech-scan absolute inset-0 opacity-30 ${motionOff ? "" : "tech-scan-run"}`}
      />
      <div
        className={`absolute -left-1/4 top-1/4 h-[50vmax] w-[50vmax] rounded-none bg-primary/10 blur-3xl ${
          motionOff ? "" : "tech-pulse"
        }`}
      />
      <div
        className={`absolute -right-1/4 bottom-0 h-[40vmax] w-[40vmax] bg-accent/10 blur-3xl ${
          motionOff ? "" : "tech-pulse-delay"
        }`}
      />
      <div className="pointer-events-auto absolute bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex h-11 cursor-pointer items-center gap-2 border-2 border-foreground bg-background px-3 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground shadow-hard focus-ring"
          aria-pressed={paused}
          aria-label={paused ? "Play background motion" : "Pause background motion"}
        >
          {paused || reduced ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          {reduced ? "Motion off" : paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  )
}
