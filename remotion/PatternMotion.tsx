"use client"

import React from "react"
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Loop,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

const SAGE = "rgba(122, 138, 110, 0.32)"
const WOOD = "rgba(148, 120, 90, 0.26)"
const BLUSH = "rgba(212, 184, 168, 0.42)"
const INK = "rgba(74, 67, 60, 0.14)"
const SAND = "rgba(214, 200, 180, 0.48)"
const MIST = "rgba(247, 244, 240, 0.5)"

function Lattice() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const shiftX = interpolate(frame, [0, fps * 8], [0, 48], { easing: Easing.linear })
  const shiftY = interpolate(frame, [0, fps * 8], [0, 36], { easing: Easing.linear })
  const opacity = interpolate(Math.sin(frame / fps), [-1, 1], [0.35, 0.65])

  return (
    <AbsoluteFill
      style={{
        translate: `${shiftX - 24}px ${shiftY - 18}px`,
        opacity,
        backgroundImage: `radial-gradient(circle, ${SAGE} 1.6px, transparent 1.7px)`,
        backgroundSize: "34px 34px",
      }}
    />
  )
}

function Hatch() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const shift = interpolate(frame, [0, fps * 14], [0, 40], { easing: Easing.linear })

  return (
    <AbsoluteFill style={{ translate: `${shift}px ${-shift * 0.5}px`, opacity: 0.32 }}>
      <svg width={width + 80} height={height + 80} aria-hidden>
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1={-40}
            y1={i * 120}
            x2={width + 80}
            y2={i * 120 + 40}
            stroke={INK}
            strokeWidth={1}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 140}
            y1={-40}
            x2={i * 140 - 50}
            y2={height + 80}
            stroke={SAGE}
            strokeWidth={1}
            opacity={0.5}
          />
        ))}
      </svg>
    </AbsoluteFill>
  )
}

function Waves() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const t = frame / fps

  const path = (yBase: number, amp: number, phase: number, freq: number) => {
    const steps = 20
    let d = `M 0 ${yBase}`
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width
      const y = yBase + Math.sin((i / steps) * Math.PI * freq + phase) * amp
      d += ` L ${x} ${y}`
    }
    return d
  }

  return (
    <AbsoluteFill style={{ opacity: 0.5 }}>
      <svg width={width} height={height} aria-hidden>
        {[0.3, 0.5, 0.7].map((ratio, i) => (
          <path
            key={i}
            d={path(height * ratio, 16 + i * 5, t * (0.7 + i * 0.2) + i, 2.4 + i * 0.3)}
            fill="none"
            stroke={i % 2 === 0 ? BLUSH : SAGE}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </AbsoluteFill>
  )
}

function Rings() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const t = frame / fps
  const pulse = interpolate(Math.sin(t * 0.9), [-1, 1], [0.9, 1.1])
  const rotate = (frame * 0.28) % 360

  return (
    <AbsoluteFill
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {[160, 280, 420].map((size, i) => (
        <div
          key={size}
          style={{
            position: "absolute",
            width: size * pulse,
            height: size * pulse,
            borderRadius: "50%",
            border: `1.5px solid ${i % 2 === 0 ? BLUSH : SAGE}`,
            rotate: `${rotate + i * 14}deg`,
            opacity: 0.45 - i * 0.08,
          }}
        />
      ))}
    </AbsoluteFill>
  )
}

function Ripples() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  return (
    <AbsoluteFill
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {[0, 1, 2].map((i) => {
        const cycle = fps * 5
        const local = (frame + i * (cycle / 3)) % cycle
        const scale = interpolate(local, [0, cycle], [0.4, 1.7], {
          easing: Easing.out(Easing.quad),
        })
        const opacity = interpolate(local, [0, cycle * 0.2, cycle], [0, 0.4, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 200 * scale,
              height: 200 * scale,
              borderRadius: "50%",
              border: `1px solid ${WOOD}`,
              opacity,
            }}
          />
        )
      })}
    </AbsoluteFill>
  )
}

function Orbits() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const t = frame / fps
  const rings = [
    { r: 120, spots: 4, speed: 0.45, color: SAGE },
    { r: 190, spots: 5, speed: -0.32, color: BLUSH },
    { r: 260, spots: 6, speed: 0.22, color: WOOD },
  ]

  return (
    <AbsoluteFill
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {rings.map((orbit, oi) =>
        Array.from({ length: orbit.spots }).map((_, si) => {
          const angle =
            ((si / orbit.spots) * Math.PI * 2 + t * orbit.speed) % (Math.PI * 2)
          const x = Math.cos(angle) * orbit.r
          const y = Math.sin(angle) * orbit.r * 0.72
          const glow = interpolate(Math.sin(t * 1.2 + si), [-1, 1], [0.4, 0.85])
          return (
            <div
              key={`${oi}-${si}`}
              style={{
                position: "absolute",
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: orbit.color,
                translate: `${x}px ${y}px`,
                opacity: glow,
              }}
            />
          )
        }),
      )}
    </AbsoluteFill>
  )
}

function Ribbons() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const drift = interpolate(frame, [0, fps * 6], [-70, 70], {
    easing: Easing.inOut(Easing.sin),
  })

  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "-20%",
            top: `${10 + i * 16}%`,
            width: "140%",
            height: 2,
            background: `linear-gradient(90deg, transparent, ${SAND}, transparent)`,
            rotate: "-12deg",
            translate: `${drift * (i % 2 === 0 ? 1 : -1)}px 0px`,
            opacity: 0.5,
          }}
        />
      ))}
    </>
  )
}

function Tiles() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const t = frame / fps
  const tiles = [
    { x: "10%", y: "18%", s: 48, delay: 0 },
    { x: "76%", y: "14%", s: 36, delay: 1.2 },
    { x: "70%", y: "58%", s: 56, delay: 0.6 },
    { x: "16%", y: "68%", s: 40, delay: 1.8 },
  ]

  return (
    <>
      {tiles.map((tile, i) => {
        const bob = interpolate(Math.sin(t * 1.1 + tile.delay), [-1, 1], [-12, 12])
        const rot = interpolate(Math.sin(t * 0.55 + tile.delay), [-1, 1], [-7, 7])
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: tile.x,
              top: tile.y,
              width: tile.s,
              height: tile.s,
              borderRadius: 14,
              border: `1px solid ${INK}`,
              backgroundColor:
                i % 2 === 0 ? "rgba(255,252,250,0.3)" : "rgba(122,138,110,0.1)",
              translate: `0px ${bob}px`,
              rotate: `${rot}deg`,
              boxShadow: "0 8px 28px rgba(58, 53, 48, 0.05)",
            }}
          />
        )
      })}
    </>
  )
}

function BreathBands() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const t = frame / fps
  const breath = interpolate(Math.sin(t * 0.7), [-1, 1], [0.35, 0.75])

  return (
    <>
      {[0.22, 0.55, 0.82].map((y, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 0,
            top: `${y * 100}%`,
            width: "100%",
            height: 44,
            background: `linear-gradient(90deg, transparent, ${MIST}, transparent)`,
            opacity: breath * (0.5 + i * 0.1),
            translate: `${Math.sin(t * 0.5 + i) * 24}px 0px`,
          }}
        />
      ))}
    </>
  )
}

/** Style #21 intensity — independent <Loop> cycles, low node count */
export const PatternMotion: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", overflow: "hidden" }}>
      <Loop durationInFrames={240} name="Lattice">
        <Lattice />
      </Loop>
      <Loop durationInFrames={336} name="Hatch">
        <Hatch />
      </Loop>
      <Loop durationInFrames={180} name="Waves">
        <Waves />
      </Loop>
      <Loop durationInFrames={300} name="Rings">
        <Rings />
      </Loop>
      <Loop durationInFrames={150} name="Ripples">
        <Ripples />
      </Loop>
      <Loop durationInFrames={360} name="Orbits">
        <Orbits />
      </Loop>
      <Loop durationInFrames={180} name="Ribbons">
        <Ribbons />
      </Loop>
      <Loop durationInFrames={240} name="Tiles">
        <Tiles />
      </Loop>
      <Loop durationInFrames={210} name="Breath">
        <BreathBands />
      </Loop>

      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 28%, rgba(247,244,240,0.58) 100%)",
        }}
      />
    </AbsoluteFill>
  )
}
