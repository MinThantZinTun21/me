"use client"

import { useEffect, useState } from "react"
import { Lottie } from "lottie-react"

const MARQUEE =
  " ★ ANDROID DEV ★ Y2K MODE ★ 50+ APPS ★ KOTLIN ★ 10+ YEARS ★ CHROME FUTURE ★ MTZT·21 ★ "

export function Y2KBanner() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <div className="relative z-40 overflow-hidden border-b border-neon-pink/40 bg-gradient-to-r from-neon-pink/20 via-background to-neon-cyan/20">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        {!reduceMotion && (
          <div className="h-14 w-full md:h-16">
            <Lottie src="/lottie/y2k-banner.json" autoplay loop />
          </div>
        )}
      </div>
      <div className="relative flex h-10 items-center overflow-hidden md:h-11">
        <div className="marquee-track gap-8 whitespace-nowrap px-4 font-display text-[10px] font-bold tracking-[0.35em] text-neon-cyan md:text-xs">
          <span>{MARQUEE.repeat(4)}</span>
          <span aria-hidden="true">{MARQUEE.repeat(4)}</span>
        </div>
      </div>
    </div>
  )
}
