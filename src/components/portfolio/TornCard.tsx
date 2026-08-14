"use client"
import React, { useState } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// High-Impact Visual Graffiti Shapes with 100% Safe Top-Left Corner for Titles
// ─────────────────────────────────────────────────────────────────────────────
export const GRAFFITI_SHAPES = {
  torn1: "polygon(0% 0%, 12% 1.0rem, 24% 0.1rem, 36% 1.1rem, 48% 0rem, 60% 1.0rem, 72% 0.1rem, 84% 1.1rem, 96% 0.2rem, 100% 1.0rem, 98.8% 35%, 100% 70%, 98.5% 98%, 100% 100%, 90% calc(100% - 1.0rem), 80% 100%, 70% calc(100% - 1.1rem), 58% 100%, 46% calc(100% - 0.9rem), 35% 100%, 22% calc(100% - 1.2rem), 12% 100%, 0% calc(100% - 0.8rem), 1.2% 65%, 0% 30%)",

  torn2: "polygon(0% 0%, 12% 1.1rem, 24% 0.1rem, 36% 1.2rem, 48% 0rem, 60% 1.0rem, 72% 0.1rem, 84% 1.2rem, 96% 0.3rem, 100% 1.2rem, 98.5% 45%, 100% 88%, 93% 100%, 82% calc(100% - 1.2rem), 70% 100%, 58% calc(100% - 0.9rem), 44% 100%, 32% calc(100% - 1.2rem), 20% 100%, 8% calc(100% - 1.0rem), 0% 100%, 1.5% 55%, 0% 20%)",

  torn3: "polygon(0% 0%, 14% 1.2rem, 28% 0rem, 42% 1.1rem, 55% 0.1rem, 70% 1.2rem, 84% 0rem, 96% 1.0rem, 100% 0rem, 98.2% 40%, 100% 85%, 92% 100%, 78% calc(100% - 1.1rem), 65% 100%, 50% calc(100% - 1.2rem), 36% 100%, 22% calc(100% - 0.9rem), 10% 100%, 0% calc(100% - 1.1rem), 1.4% 50%)",

  torn4: "polygon(0% 0%, 10% 0.8rem, 22% 1.2rem, 36% 0.1rem, 50% 1.1rem, 64% 0rem, 78% 1.2rem, 90% 0.1rem, 100% 1.0rem, 98.5% 50%, 100% 98%, 88% calc(100% - 1.2rem), 76% 100%, 62% calc(100% - 1.0rem), 48% 100%, 34% calc(100% - 1.1rem), 20% 100%, 8% calc(100% - 0.9rem), 0% 100%, 1.2% 45%)",

  tagLeft:   "polygon(0% 0%, 100% 0%, 94% 100%, 0% 100%)",
  tagRight:  "polygon(0% 0%, 94% 0%, 100% 100%, 0% 100%)",
  tagSharp:  "polygon(0% 0%, 100% 0%, 93% 100%, 0% 100%)",

  arrowRight: "polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)",
  arrowLeft:  "polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%)",

  slashLeft:  "polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)",
  slashRight: "polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)",

  ticketNotch: "polygon(0% 0%, 100% 0%, 100% calc(50% - 16px), calc(100% - 12px) 50%, 100% calc(50% + 16px), 100% 100%, 0% 100%, 0% calc(50% + 16px), 12px 50%, 0% calc(50% - 16px))",

  hexagonTag: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
  bannerRibbon: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
  badgeBadge: "polygon(0% 0%, 94% 0%, 100% 14%, 100% 86%, 94% 100%, 0% 100%)",
} as const

export type GraffitiShape = keyof typeof GRAFFITI_SHAPES

function getDefaultPadding(shape: GraffitiShape): string {
  return "2.8rem 2.4rem 2.8rem 2.4rem"
}

// ─────────────────────────────────────────────────────────────────────────────
// Hardware-Accelerated 60FPS Smooth TornCard Component
// ─────────────────────────────────────────────────────────────────────────────
interface TornCardProps {
  shape?:            GraffitiShape
  shadow?:           "red" | "navy" | "none"
  rotate?:           number
  children:          React.ReactNode
  floatingElements?: React.ReactNode
  style?:            React.CSSProperties
  innerStyle?:       React.CSSProperties
  innerPadding?:     string
  className?:        string
}

export function TornCard({
  shape = "torn1",
  shadow = "red",
  rotate = 0,
  children,
  floatingElements,
  style = {},
  innerStyle = {},
  innerPadding,
  className = "",
}: TornCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const shadowOffset = isHovered ? "14px 14px 0px" : "8px 8px 0px"
  const shadowColor = shadow === "red" ? "#A31621" : shadow === "navy" ? "#0F1B33" : "transparent"
  const shadowStyle = shadow !== "none" ? `drop-shadow(${shadowOffset} ${shadowColor})` : "none"

  const hoverTransform = isHovered
    ? `rotate(${rotate * 0.5}deg) translate3d(0, -6px, 0) scale(1.01)`
    : `rotate(${rotate}deg) translate3d(0, 0, 0)`

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`torn-card-container ${className}`}
      style={{
        position: "relative",
        overflow: "visible",
        filter: shadowStyle,
        transform: hoverTransform,
        transition: "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), filter 0.25s ease",
        willChange: "transform, filter",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        maxWidth: "100%",
        ...style,
      }}
    >
      {/* ── Outer Under-Layer Background Offset (Ripped Paper Border Effect) ── */}
      <div
        style={{
          position: "absolute",
          inset: "-4px",
          background: shadow === "red" ? "var(--red)" : "var(--navy)",
          clipPath: GRAFFITI_SHAPES[shape],
          transform: "rotate(0.8deg) scale(1.01)",
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      {/* ── Floating elements overflow boundaries ────────────────────────── */}
      {floatingElements}

      {/* ── Inner Main Clipped Kraft Paper Card ─────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          clipPath: GRAFFITI_SHAPES[shape],
          background: "#FAF5EB",
          border: "4px solid var(--navy)",
          padding: innerPadding ?? getDefaultPadding(shape),
          color: "#0F1B33",
          maxWidth: "100%",
          wordBreak: "normal",
          overflowWrap: "anywhere",
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CircularSealBadge
// ─────────────────────────────────────────────────────────────────────────────
interface CircularSealBadgeProps {
  label: string
  sublabel?: string
  color?: string
  bg?: string
  size?: number
  rotate?: number
  style?: React.CSSProperties
}

export function CircularSealBadge({
  label,
  sublabel,
  color = "#FFFFFF",
  bg = "#A31621",
  size = 72,
  rotate = -6,
  style = {},
}: CircularSealBadgeProps) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: bg,
        color: color,
        border: "3px dashed #0F1B33",
        boxShadow: "4px 4px 0px #0F1B33",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-mono)",
        fontWeight: 900,
        lineHeight: 1.1,
        padding: "0.4rem",
        zIndex: 25,
        userSelect: "none",
        willChange: "transform",
        ...style,
      }}
    >
      <span style={{ fontSize: "0.68rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</span>
      {sublabel && <span style={{ fontSize: "0.55rem", opacity: 0.9, marginTop: 2 }}>{sublabel}</span>}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// VinylRecordBadge
// ─────────────────────────────────────────────────────────────────────────────
interface VinylRecordBadgeProps {
  title?: string
  size?: number
  rotate?: number
  style?: React.CSSProperties
}

export function VinylRecordBadge({ title = "TRACK", size = 64, rotate = 12, style = {} }: VinylRecordBadgeProps) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "#0F1B33",
        border: "3px solid var(--red)",
        boxShadow: "4px 4px 0px #A31621",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transform: `rotate(${rotate}deg)`,
        zIndex: 25,
        willChange: "transform",
        ...style,
      }}
    >
      <div style={{ position: "absolute", inset: "6px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)" }} />
      <div style={{ position: "absolute", inset: "12px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)" }} />
      <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#A31621", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #FFF" }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0F1B33" }} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// GraffitiCircle
// ─────────────────────────────────────────────────────────────────────────────
interface GraffitiCircleProps {
  size?: number | string
  color?: string
  opacity?: number
  style?: React.CSSProperties
}

export function GraffitiCircle({ size = 220, color = "#A31621", opacity = 0.08, style = {} }: GraffitiCircleProps) {
  const sz = typeof size === "number" ? `${size}px` : size
  return (
    <svg
      width={sz}
      height={sz}
      viewBox="0 0 200 200"
      fill="none"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      aria-hidden
    >
      <defs>
        <filter id="graffiti-blur">
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="4" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="85" fill={color} opacity={opacity} filter="url(#graffiti-blur)" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SprayBlob
// ─────────────────────────────────────────────────────────────────────────────
interface SprayBlobProps {
  children: React.ReactNode
  color?: string
  textColor?: string
  style?: React.CSSProperties
  variant?: 1 | 2
}

export function SprayBlob({ children, color = "#A31621", textColor = "#FFF", style = {}, variant = 1 }: SprayBlobProps) {
  const clipPath = variant === 1
    ? "polygon(50% 0%, 68% 6%, 84% 3%, 94% 14%, 99% 28%, 100% 48%, 95% 66%, 99% 82%, 86% 94%, 68% 99%, 48% 100%, 30% 98%, 14% 90%, 4% 76%, 0% 56%, 4% 38%, 1% 22%, 14% 8%, 32% 2%)"
    : "polygon(48% 0%, 70% 3%, 86% 12%, 96% 26%, 100% 46%, 94% 68%, 98% 84%, 82% 96%, 64% 99%, 44% 97%, 24% 100%, 8% 86%, 0% 64%, 5% 44%, 0% 24%, 12% 10%, 28% 2%)"

  return (
    <div
      style={{
        clipPath,
        background: color,
        color: textColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.4rem 0.6rem",
        fontWeight: 900,
        boxShadow: "3px 3px 0px var(--navy)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
