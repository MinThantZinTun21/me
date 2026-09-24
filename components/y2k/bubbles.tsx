"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)

export function Y2KBubbles() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".bubble", {
          y: "random(-24, 24)",
          x: "random(-16, 16)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: { each: 0.2, from: "random" },
        })
      })
      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="bubble absolute left-[8%] top-[20%] h-16 w-16 rounded-full bg-neon-pink/20 blur-sm" />
      <div className="bubble absolute right-[12%] top-[30%] h-24 w-24 rounded-full bg-neon-cyan/15 blur-md" />
      <div className="bubble absolute bottom-[25%] left-[30%] h-12 w-12 rounded-full border border-chrome/40 bg-chrome/10" />
      <div className="bubble absolute right-[28%] bottom-[18%] h-20 w-20 rounded-full bg-neon-pink/10 blur-sm" />
    </div>
  )
}
