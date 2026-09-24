"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)

export function SunshineSky() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".sun-core",
          { scale: 0.6, y: 80, opacity: 0.4 },
          { scale: 1, y: 0, opacity: 1, duration: 1.4, ease: "expo.out" },
        )
        gsap.fromTo(
          ".sun-ray",
          { scaleY: 0.35, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1.1,
            stagger: 0.04,
            ease: "power2.out",
            delay: 0.2,
          },
        )
        gsap.to(".sun-core", {
          y: "+=12",
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
        gsap.to(".cloud-a", {
          x: 50,
          duration: 20,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
        gsap.to(".cloud-b", {
          x: -40,
          duration: 24,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <div
      ref={rootRef}
      className="sun-sky pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute right-[8%] top-[12%] md:right-[14%] md:top-[10%]">
        <div className="relative flex h-40 w-40 items-center justify-center md:h-56 md:w-56">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `rotate(${i * 30}deg)` }}
            >
              <span className="sun-ray absolute left-1/2 bottom-0 h-28 w-1 -translate-x-1/2 origin-bottom rounded-full bg-gradient-to-t from-sun/0 via-sun/70 to-sun md:h-40" />
            </span>
          ))}
          <div className="sun-core relative z-10 h-24 w-24 rounded-full bg-gradient-to-br from-sun via-accent to-sun-glow shadow-[0_0_80px_rgba(251,191,36,0.7)] md:h-32 md:w-32" />
        </div>
      </div>

      <div className="cloud-a absolute left-[-5%] top-[28%] h-16 w-48 rounded-full bg-white/50 blur-md md:h-24 md:w-72" />
      <div className="cloud-b absolute bottom-[22%] right-[-8%] h-20 w-64 rounded-full bg-white/40 blur-lg md:h-28 md:w-96" />
      <div className="absolute bottom-[18%] left-[30%] h-12 w-40 rounded-full bg-white/35 blur-md" />
    </div>
  )
}
