"use client"

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type Ref,
} from "react"
import type { PlayerRef } from "@remotion/player"
import { FlowEnvironment } from "@/remotion/FlowEnvironment"

/** Stable mobile composition — CSS-scale into viewport (no resize remounts) */
const COMP_W = 1080
const COMP_H = 1920

export type PatternMotionHandle = {
  pause: () => void
  play: () => void
  isPlaying: () => boolean
}

type PatternMotionPlayerProps = {
  className?: string
  frozen?: boolean
}

type PlayerProps = {
  ref?: Ref<PlayerRef>
  component: typeof FlowEnvironment
  durationInFrames: number
  compositionWidth: number
  compositionHeight: number
  fps: number
  playbackRate?: number
  loop?: boolean
  autoPlay?: boolean
  acknowledgeRemotionLicense?: boolean
  style?: CSSProperties
}

/** Remotion Player — Flow environment + #21 motion intensity */
export const PatternMotionPlayer = forwardRef<
  PatternMotionHandle,
  PatternMotionPlayerProps
>(function PatternMotionPlayer({ className, frozen = false }, ref) {
  const playerRef = useRef<PlayerRef>(null)
  const [Player, setPlayer] = useState<ComponentType<PlayerProps> | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useImperativeHandle(ref, () => ({
    pause: () => playerRef.current?.pause(),
    play: () => playerRef.current?.play(),
    isPlaying: () => playerRef.current?.isPlaying() ?? false,
  }))

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)

    let cancelled = false
    void import("@remotion/player").then((m) => {
      if (!cancelled) {
        setPlayer(() => m.Player as unknown as ComponentType<PlayerProps>)
      }
    })

    return () => {
      cancelled = true
      mq.removeEventListener("change", onChange)
    }
  }, [])

  useEffect(() => {
    if (reduceMotion || !Player) return

    const sync = () => {
      const player = playerRef.current
      if (!player) return
      const shouldPlay = !frozen && document.visibilityState === "visible"
      if (shouldPlay) player.play()
      else player.pause()
    }

    const id = requestAnimationFrame(sync)
    document.addEventListener("visibilitychange", sync)
    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener("visibilitychange", sync)
    }
  }, [frozen, reduceMotion, Player])

  if (reduceMotion) {
    return (
      <div
        className={className}
        aria-hidden="true"
        style={{
          backgroundImage: `
            url(/flow/environment.png),
            url(/flow/env-pattern.svg)
          `,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          opacity: 0.7,
        }}
      />
    )
  }

  if (!Player) {
    return <div className={className} aria-hidden="true" />
  }

  return (
    <div className={className} aria-hidden="true">
      <Player
        ref={playerRef}
        component={FlowEnvironment}
        durationInFrames={480}
        compositionWidth={COMP_W}
        compositionHeight={COMP_H}
        fps={24}
        playbackRate={1}
        loop
        autoPlay={!frozen}
        acknowledgeRemotionLicense
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
})
