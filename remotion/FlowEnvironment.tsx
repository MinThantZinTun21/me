"use client"

import React from "react"
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Loop,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

/** Flow motifs → Minimal Zen palette (biophilic; #21 = intensity only) */
const WATER = "rgba(142, 168, 158, 0.5)"
const SKY = "rgba(196, 214, 222, 0.55)"
const SAND = "rgba(232, 214, 196, 0.5)"
const SAGE = "rgba(122, 138, 110, 0.35)"
const BLUSH = "rgba(212, 184, 168, 0.4)"
const CAUSTIC = "rgba(255, 252, 248, 0.32)"
const STONE = "rgba(74, 67, 60, 0.14)"
const MIST = "rgba(232, 228, 220, 0.55)"

/** Flooded horizon plate — Ken Burns / horizon drift */
function EnvPlate() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const t = frame / fps
  const driftY = interpolate(Math.sin(t / 5), [-1, 1], [-32, 32])
  const driftX = interpolate(Math.sin(t / 7), [-1, 1], [-40, 40])
  const scale = interpolate(Math.sin(t / 6), [-1, 1], [1.1, 1.2])
  const rotate = interpolate(Math.sin(t / 11), [-1, 1], [-1.4, 1.4])

  return (
    <AbsoluteFill
      style={{
        scale,
        translate: `${driftX}px ${driftY}px`,
        rotate: `${rotate}deg`,
        opacity: 0.78,
      }}
    >
      <Img
        src={staticFile("flow/environment.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(247,244,240,0.2) 0%, transparent 38%, rgba(110,138,124,0.28) 100%)",
        }}
      />
    </AbsoluteFill>
  )
}

function PatternOverlay() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const shiftY = interpolate(frame, [0, fps * 10], [0, 64], { easing: Easing.linear })
  const shiftX = interpolate(Math.sin(frame / fps / 4), [-1, 1], [-24, 24])

  return (
    <AbsoluteFill style={{ opacity: 0.32, translate: `${shiftX}px ${-shiftY}px` }}>
      <Img
        src={staticFile("flow/env-pattern.svg")}
        style={{ width: "112%", height: "132%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  )
}

/** Rising flood band — waterline living motif */
function FloodLevel() {
  const frame = useCurrentFrame()
  const { fps, height } = useVideoConfig()
  const t = frame / fps
  const level = interpolate(Math.sin(t / 8), [-1, 1], [0.52, 0.46])
  const shimmer = interpolate(Math.sin(t * 0.9), [-1, 1], [0.2, 0.4])

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: height * level,
          width: "100%",
          height: height * (1 - level + 0.08),
          background: `linear-gradient(180deg, rgba(168,196,186,${shimmer}) 0%, rgba(110,138,124,0.35) 55%, rgba(90,112,100,0.45) 100%)`,
        }}
      />
    </AbsoluteFill>
  )
}

function FluidWaves() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const t = frame / fps

  const path = (yBase: number, amp: number, phase: number, freq: number) => {
    const steps = 32
    let d = `M 0 ${yBase}`
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width
      const y =
        yBase +
        Math.sin((i / steps) * Math.PI * freq + phase) * amp +
        Math.sin((i / steps) * Math.PI * (freq * 0.45) + phase * 1.5) * (amp * 0.4)
      d += ` L ${x} ${y}`
    }
    return d
  }

  return (
    <AbsoluteFill style={{ opacity: 0.85 }}>
      <svg width={width} height={height} aria-hidden>
        {[0.42, 0.52, 0.62, 0.72, 0.82].map((ratio, i) => (
          <path
            key={i}
            d={path(
              height * ratio,
              20 + i * 8,
              t * (0.8 + i * 0.16) + i,
              2.5 + i * 0.4,
            )}
            fill="none"
            stroke={i % 2 === 0 ? WATER : SKY}
            strokeWidth={2.2}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </AbsoluteFill>
  )
}

function OrganicBlobs() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const t = frame / fps
  const blobs = [
    { x: "12%", y: "16%", w: 210, h: 150, c: BLUSH, d: 0 },
    { x: "64%", y: "12%", w: 250, h: 170, c: SKY, d: 1.1 },
    { x: "50%", y: "58%", w: 290, h: 190, c: WATER, d: 0.5 },
    { x: "6%", y: "70%", w: 180, h: 130, c: SAND, d: 1.7 },
  ]

  return (
    <>
      {blobs.map((b, i) => {
        const morph = interpolate(Math.sin(t * 0.85 + b.d), [-1, 1], [0.82, 1.16])
        const bob = interpolate(Math.sin(t * 1.05 + b.d), [-1, 1], [-26, 26])
        const drift = interpolate(Math.sin(t * 0.55 + b.d), [-1, 1], [-20, 20])
        const rot = interpolate(Math.sin(t * 0.45 + b.d), [-1, 1], [-8, 8])
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: b.x,
              top: b.y,
              width: b.w * morph,
              height: b.h * morph,
              borderRadius: `${48 + i * 8}% ${40 - i * 4}% ${55 + i * 3}% ${42}%`,
              background: b.c,
              filter: "blur(32px)",
              translate: `${drift}px ${bob}px`,
              rotate: `${rot}deg`,
              opacity: 0.72,
            }}
          />
        )
      })}
    </>
  )
}

/** Mist pass over mountain bands */
function MountainMist() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const t = frame / fps
  const drift = interpolate(frame, [0, fps * 8], [-width * 0.15, width * 0.2], {
    easing: Easing.inOut(Easing.sin),
  })
  const opacity = interpolate(
    frame,
    [0, fps * 1.2, fps * 5, fps * 7.5],
    [0, 0.7, 0.65, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  )

  return (
    <AbsoluteFill style={{ opacity, translate: `${drift}px 0px` }}>
      <svg width={width} height={height} aria-hidden>
        <path
          d={`M -80 ${height * 0.4}
              Q ${width * 0.2} ${height * 0.32 + Math.sin(t) * 12}, ${width * 0.45} ${height * 0.38}
              T ${width + 80} ${height * 0.34}
              L ${width + 80} ${height * 0.55}
              Q ${width * 0.5} ${height * 0.5}, -80 ${height * 0.52} Z`}
          fill={MIST}
        />
        <path
          d={`M -40 ${height * 0.48}
              Q ${width * 0.3} ${height * 0.42}, ${width * 0.6} ${height * 0.46}
              T ${width + 60} ${height * 0.44}
              L ${width + 60} ${height * 0.62}
              L -40 ${height * 0.6} Z`}
          fill="rgba(186, 198, 188, 0.45)"
        />
      </svg>
    </AbsoluteFill>
  )
}

/** Soft stone pillar haze — submerged city motif (abstract) */
function PillarHaze() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const opacity = interpolate(
    frame,
    [0, fps, fps * 4, fps * 5.5],
    [0, 0.55, 0.5, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  )
  const sway = Math.sin(frame / fps / 3) * 8

  return (
    <AbsoluteFill style={{ opacity, translate: `${sway}px 0px` }}>
      {[0.18, 0.32, 0.48, 0.62, 0.78].map((x, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: width * x,
            top: height * (0.28 + (i % 3) * 0.04),
            width: 14 + (i % 3) * 6,
            height: height * (0.28 + (i % 2) * 0.08),
            background: `linear-gradient(180deg, transparent, ${STONE}, transparent)`,
            borderRadius: 4,
            filter: "blur(1px)",
          }}
        />
      ))}
    </AbsoluteFill>
  )
}

function Caustics() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const t = frame / fps

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
      }}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const cycle = fps * 5
        const local = (frame + i * (cycle / 5)) % cycle
        const scale = interpolate(local, [0, cycle], [0.45, 2.25], {
          easing: Easing.out(Easing.quad),
        })
        const opacity = interpolate(local, [0, cycle * 0.12, cycle], [0, 0.42, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
        const x = Math.sin(t * 0.4 + i) * 60
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "55%",
              width: 150 * scale,
              height: 64 * scale,
              borderRadius: "50%",
              border: `1.5px solid ${CAUSTIC}`,
              boxShadow: `0 0 28px ${CAUSTIC}`,
              translate: `${x}px 0px`,
              opacity,
            }}
          />
        )
      })}
    </AbsoluteFill>
  )
}

/** Brief “portal / storm light” bloom — abstract only */
function LightBloom() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const opacity = interpolate(
    frame,
    [0, fps * 0.8, fps * 2.2, fps * 3.5],
    [0, 0.55, 0.4, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  )
  const scale = interpolate(frame, [0, fps * 3.5], [0.6, 1.35], {
    easing: Easing.out(Easing.quad),
    extrapolateRight: "clamp",
  })

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "18%",
        opacity,
      }}
    >
      <div
        style={{
          width: 280 * scale,
          height: 280 * scale,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,252,245,0.75) 0%, rgba(196,214,222,0.25) 45%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </AbsoluteFill>
  )
}

function AuroraRibbon() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const t = frame / fps
  const shift = interpolate(Math.sin(t * 0.45), [-1, 1], [-52, 52])

  return (
    <AbsoluteFill style={{ opacity: 0.45, translate: `${shift}px 0px` }}>
      <svg width={width} height={height} aria-hidden>
        <defs>
          <linearGradient id="aurora" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(168, 196, 210, 0)" />
            <stop offset="40%" stopColor="rgba(168, 196, 210, 0.55)" />
            <stop offset="70%" stopColor="rgba(186, 168, 196, 0.35)" />
            <stop offset="100%" stopColor="rgba(212, 184, 168, 0)" />
          </linearGradient>
        </defs>
        <path
          d={`M -40 ${height * 0.24}
              C ${width * 0.25} ${height * 0.14 + Math.sin(t * 1.2) * 28},
                ${width * 0.55} ${height * 0.32 + Math.cos(t) * 32},
                ${width + 40} ${height * 0.18}
              L ${width + 40} ${height * 0.38}
              C ${width * 0.6} ${height * 0.48},
                ${width * 0.3} ${height * 0.34},
                -40 ${height * 0.4} Z`}
          fill="url(#aurora)"
        />
      </svg>
    </AbsoluteFill>
  )
}

function DriftMotes() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const t = frame / fps
  const motes = Array.from({ length: 20 }, (_, i) => ({
    x: ((i * 97) % 100) / 100,
    y: ((i * 53) % 100) / 100,
    s: 2 + (i % 4),
    speed: 0.2 + (i % 5) * 0.05,
  }))

  return (
    <AbsoluteFill>
      {motes.map((m, i) => {
        const y = ((m.y + t * m.speed * 0.12) % 1.2) - 0.1
        const x = m.x + Math.sin(t * m.speed * 1.4 + i) * 0.04
        const glow = interpolate(Math.sin(t * 1.3 + i), [-1, 1], [0.3, 0.85])
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x * width,
              top: y * height,
              width: m.s,
              height: m.s,
              borderRadius: "50%",
              backgroundColor: i % 3 === 0 ? SAGE : SAND,
              opacity: glow,
            }}
          />
        )
      })}
    </AbsoluteFill>
  )
}

/** Glass-float / debris orbs — flotation motif */
function DriftFloats() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const t = frame / fps
  const floats = [
    { x: 0.2, y: 0.62, s: 28, d: 0 },
    { x: 0.72, y: 0.68, s: 18, d: 1.4 },
    { x: 0.48, y: 0.74, s: 22, d: 0.7 },
  ]

  return (
    <AbsoluteFill>
      {floats.map((f, i) => {
        const bob = Math.sin(t * 1.2 + f.d) * 14
        const x = f.x * width + Math.sin(t * 0.35 + f.d) * 30
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: f.y * height + bob,
              width: f.s,
              height: f.s,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,252,248,0.45)",
              background:
                "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.55), rgba(168,196,186,0.2))",
              opacity: 0.65,
              boxShadow: "0 4px 16px rgba(58,53,48,0.08)",
            }}
          />
        )
      })}
    </AbsoluteFill>
  )
}

/**
 * Lone cat journey — SVG silhouette (no PNG checkerboard).
 * Kept in lower scenic band so it sits behind the mobile shell content.
 */
function FlowCat() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const t = frame / fps
  const cycle = fps * 16
  const progress = (frame % cycle) / cycle
  const goingRight = progress < 0.5

  const x = goingRight
    ? interpolate(progress, [0, 0.5], [width * 0.06, width * 0.58], {
        easing: Easing.inOut(Easing.sin),
      })
    : interpolate(progress, [0.5, 1], [width * 0.58, width * 0.06], {
        easing: Easing.inOut(Easing.sin),
      })

  // Lower scenic band — visible near stats, behind hero copy
  const waterY = height * 0.64
  const bob = Math.sin(t * 2.4) * 12
  const sway = Math.sin(t * 1.5) * 4
  const breath = interpolate(Math.sin(t * 1.2), [-1, 1], [0.96, 1.05])
  const catSize = Math.min(width * 0.28, 220)
  const wake = [0, 1, 2].map((i) => {
    const phase = (t * 1.9 + i * 0.7) % (Math.PI * 2)
    const r = 16 + i * 20 + Math.sin(phase) * 6
    const op = interpolate(Math.sin(phase), [-1, 1], [0.08, 0.32 - i * 0.07])
    return { r, op }
  })

  return (
    <AbsoluteFill>
      {wake.map((w, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: x + catSize * 0.4,
            top: waterY + bob + catSize * 0.55,
            width: w.r * 2.4,
            height: w.r * 0.65,
            marginLeft: -w.r * 1.2,
            borderRadius: "50%",
            border: `1.5px solid rgba(255,252,248,${w.op})`,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: x,
          top: waterY + bob - catSize * 0.72,
          width: catSize,
          height: catSize,
          rotate: `${sway}deg`,
          scale: breath,
          opacity: 0.8,
          filter: "drop-shadow(0 10px 18px rgba(58,53,48,0.18))",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            scale: goingRight ? 1 : -1,
          }}
        >
          <Img
            src={staticFile("flow/cat.svg")}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </AbsoluteFill>
  )
}

function BreathWash() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const breath = interpolate(Math.sin(frame / fps / 1.8), [-1, 1], [0.18, 0.48])

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, transparent 16%, rgba(247,244,240,0.42) 100%)",
        opacity: breath,
      }}
    />
  )
}

/** Scene beat reel: quiet water → mist → pillars → light bloom */
function SceneBeats() {
  const { fps } = useVideoConfig()
  // 20s reel @ composition fps
  const beat = Math.round(fps * 5)

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={beat} name="QuietWater" layout="absolute-fill">
        <AbsoluteFill style={{ opacity: 0.15, background: "rgba(196,214,222,0.2)" }} />
      </Sequence>
      <Sequence from={beat - 20} durationInFrames={beat + 10} name="MistPass" layout="absolute-fill">
        <MountainMist />
      </Sequence>
      <Sequence from={beat * 2 - 30} durationInFrames={beat} name="Pillars" layout="absolute-fill">
        <PillarHaze />
      </Sequence>
      <Sequence from={beat * 3 - 20} durationInFrames={beat} name="LightBloom" layout="absolute-fill">
        <LightBloom />
        <Caustics />
      </Sequence>
    </AbsoluteFill>
  )
}

/**
 * Flow-inspired environmental Remotion composition
 * Motifs from research (flood, mist, pillars, cat journey, caustics) — not film frames.
 */
export const FlowEnvironment: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", overflow: "hidden" }}>
      <Loop durationInFrames={480} name="EnvPlate">
        <EnvPlate />
      </Loop>
      <Loop durationInFrames={240} name="Pattern">
        <PatternOverlay />
      </Loop>
      <Loop durationInFrames={360} name="Flood">
        <FloodLevel />
      </Loop>
      <Loop durationInFrames={300} name="Blobs">
        <OrganicBlobs />
      </Loop>
      <Loop durationInFrames={200} name="Aurora">
        <AuroraRibbon />
      </Loop>
      <Loop durationInFrames={150} name="Waves">
        <FluidWaves />
      </Loop>
      <Loop durationInFrames={120} name="CausticsAmbient">
        <Caustics />
      </Loop>
      <Loop durationInFrames={300} name="Motes">
        <DriftMotes />
      </Loop>
      <Loop durationInFrames={240} name="Floats">
        <DriftFloats />
      </Loop>
      <Loop durationInFrames={480} name="SceneBeats">
        <SceneBeats />
      </Loop>
      <Loop durationInFrames={384} name="FlowCat">
        <FlowCat />
      </Loop>
      <Loop durationInFrames={180} name="Breath">
        <BreathWash />
      </Loop>
    </AbsoluteFill>
  )
}
