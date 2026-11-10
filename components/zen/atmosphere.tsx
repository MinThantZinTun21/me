"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  PatternMotionPlayer,
  type PatternMotionHandle,
} from "@/components/zen/pattern-motion-player"

gsap.registerPlugin(ScrollTrigger)

/** Flow environment + Remotion fluid motion (#21 intensity) */
export function ZenAtmosphere() {
  const rootRef = useRef<HTMLDivElement>(null)
  const playerHandle = useRef<PatternMotionHandle>(null)
  const [frozen, setFrozen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".flow-env-plate", {
          yPercent: 4,
          scale: 1.06,
          duration: 22,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })

        gsap.to(".mist-a", {
          x: 50,
          y: -36,
          scale: 1.18,
          duration: 14,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
        gsap.to(".mist-b", {
          x: -56,
          y: 30,
          scale: 1.22,
          duration: 18,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
        gsap.to(".mist-c", {
          x: 34,
          y: 44,
          scale: 0.92,
          duration: 16,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
        gsap.to(".mist-d", {
          x: -28,
          y: -40,
          duration: 20,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })

        // Parallax decorative env layers only — never Remotion root
        gsap.utils.toArray<HTMLElement>(".parallax-layer").forEach((layer, i) => {
          gsap.to(layer, {
            yPercent: (i + 1) * -7,
            ease: "none",
            scrollTrigger: {
              trigger: "body",
              scrub: 0.7,
              start: "top top",
              end: "bottom bottom",
            },
          })
        })

        const onResize = () => ScrollTrigger.refresh()
        window.addEventListener("resize", onResize)

        gsap.to(".light-sweep", {
          xPercent: 130,
          duration: 12,
          repeat: -1,
          ease: "sine.inOut",
          yoyo: true,
        })

        gsap.to(".light-sweep-b", {
          xPercent: -110,
          duration: 16,
          repeat: -1,
          ease: "sine.inOut",
          yoyo: true,
        })

        gsap.utils.toArray<HTMLElement>(".zen-mote").forEach((mote, i) => {
          gsap.to(mote, {
            y: `-=${48 + i * 14}`,
            x: i % 2 === 0 ? 22 : -18,
            opacity: 0.2,
            duration: 9 + i * 1.4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: i * 0.35,
          })
        })

        return () => window.removeEventListener("resize", onResize)
      })

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  useEffect(() => {
    if (reduceMotion || !rootRef.current) return
    const nodes = rootRef.current.querySelectorAll(
      ".flow-env-plate, .mist-a, .mist-b, .mist-c, .mist-d, .light-sweep, .light-sweep-b, .zen-mote, .parallax-layer",
    )
    const tweens = gsap.getTweensOf(nodes)
    tweens.forEach((tween) => {
      if (frozen) tween.pause()
      else tween.resume()
    })
    if (frozen) playerHandle.current?.pause()
    else playerHandle.current?.play()
  }, [frozen, reduceMotion])

  const toggleFreeze = useCallback(() => {
    setFrozen((v) => !v)
  }, [])

  return (
    <>
      <div
        ref={rootRef}
        className="zen-canvas pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
        data-motion={frozen ? "off" : "on"}
      >
        {/* Static env plate under Remotion — Flow film atmosphere */}
        <div
          className="flow-env-plate parallax-layer absolute inset-[-8%] bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url(/flow/environment.png)" }}
        />
        <div
          className="parallax-layer absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url(/flow/env-pattern.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="wabi-grain absolute inset-0 opacity-55" />

        <PatternMotionPlayer
          ref={playerHandle}
          frozen={frozen}
          className="absolute inset-0 opacity-[0.88]"
        />

        <div className="parallax-layer mist-a absolute -left-[22%] top-[-12%] h-[58vmax] w-[58vmax] rounded-full bg-blush/35 blur-3xl" />
        <div className="parallax-layer mist-b absolute -right-[18%] top-[12%] h-[52vmax] w-[52vmax] rounded-full bg-[hsl(195_18%_72%/0.28)] blur-3xl" />
        <div className="parallax-layer mist-c absolute bottom-[-12%] left-[16%] h-[48vmax] w-[48vmax] rounded-full bg-sand/55 blur-3xl" />
        <div className="parallax-layer mist-d absolute right-[8%] bottom-[18%] h-[38vmax] w-[38vmax] rounded-full bg-[hsl(155_16%_48%/0.18)] blur-3xl" />

        <div className="light-sweep absolute -left-1/2 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-2xl" />
        <div className="light-sweep-b absolute -right-1/2 bottom-0 h-2/3 w-1/4 bg-gradient-to-l from-transparent via-[hsl(195_30%_80%/0.22)] to-transparent blur-3xl" />

        {[
          { t: "16%", l: "12%" },
          { t: "28%", l: "76%" },
          { t: "54%", l: "20%" },
          { t: "70%", l: "66%" },
          { t: "42%", l: "46%" },
          { t: "82%", l: "38%" },
        ].map((pos, i) => (
          <div
            key={i}
            className="zen-mote absolute h-1.5 w-1.5 rounded-full bg-[hsl(155_14%_55%/0.45)]"
            style={{ top: pos.t, left: pos.l }}
          />
        ))}
      </div>

      {!reduceMotion && (
        <button
          type="button"
          onClick={toggleFreeze}
          aria-pressed={frozen}
          aria-label={frozen ? "Resume background motion" : "Pause background motion"}
          className="fixed bottom-4 right-4 z-50 inline-flex h-11 min-w-[7.5rem] cursor-pointer items-center justify-center rounded-full border border-border/80 bg-card/90 px-4 text-xs font-medium tracking-wide text-ink shadow-soft backdrop-blur-sm focus-ring"
        >
          {frozen ? "Resume motion" : "Pause motion"}
        </button>
      )}
    </>
  )
}
