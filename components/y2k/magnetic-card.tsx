"use client"

import { useRef, type ReactNode, type MouseEvent } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

type MagneticCardProps = {
  children: ReactNode
  className?: string
}

export function MagneticCard({ children, className }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const xTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null)
  const yTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null)

  const ensureTweens = () => {
    if (!ref.current) return
    if (!xTo.current) {
      xTo.current = gsap.quickTo(ref.current, "x", { duration: 0.35, ease: "power3.out" })
      yTo.current = gsap.quickTo(ref.current, "y", { duration: 0.35, ease: "power3.out" })
    }
  }

  const onMove = (e: MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    ensureTweens()
    const el = ref.current
    if (!el || !xTo.current || !yTo.current) return
    const r = el.getBoundingClientRect()
    xTo.current((e.clientX - r.left - r.width / 2) * 0.18)
    yTo.current((e.clientY - r.top - r.height / 2) * 0.18)
  }

  const onLeave = () => {
    xTo.current?.(0)
    yTo.current?.(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("will-change-transform", className)}
    >
      {children}
    </div>
  )
}
