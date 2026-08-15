"use client"
import React, { useState } from "react"

export const GRAFFITI_SHAPES = {
  torn1: "polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px))",
  torn2: "polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
  torn3: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
  torn4: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",

  tagLeft:   "polygon(0 0, 100% 0, 94% 100%, 0 100%)",
  tagRight:  "polygon(0 0, 94% 0, 100% 100%, 0 100%)",
  tagSharp:  "polygon(0 0, 100% 0, 92% 100%, 0 100%)",

  arrowRight: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
  arrowLeft:  "polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)",

  slashLeft:  "polygon(0 0, 100% 0, 94% 100%, 0 100%)",
  slashRight: "polygon(0 0, 94% 0, 100% 100%, 0 100%)",

  ticketNotch: "polygon(0 0, 100% 0, 100% calc(50% - 12px), calc(100% - 10px) 50%, 100% calc(50% + 12px), 100% 100%, 0 100%, 0 calc(50% + 12px), 10px 50%, 0 calc(50% - 12px))",

  hexagonTag: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)",
  bannerRibbon: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)",
  badgeBadge: "polygon(0 0, 94% 0, 100% 14%, 100% 86%, 94% 100%, 0 100%)",
} as const

export type GraffitiShape = keyof typeof GRAFFITI_SHAPES

interface TornCardProps {
  shape?:            GraffitiShape
  shadow?:           "red" | "navy" | "none" | "cyan" | "magenta"
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
  children,
  floatingElements,
  style = {},
  innerStyle = {},
  innerPadding = "2rem 1.8rem",
  className = "",
}: TornCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const borderColor = "rgba(255, 255, 255, 0.25)"
  const glowColor = "rgba(255, 255, 255, 0.15)"

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cyber-card-container ${className}`}
      style={{
        position: "relative",
        overflow: "visible",
        filter: isHovered
          ? `drop-shadow(0 0 20px rgba(255, 255, 255, 0.25)) drop-shadow(0 10px 30px rgba(0,0,0,0.8))`
          : `drop-shadow(0 0 10px ${glowColor})`,
        transform: isHovered ? "translateY(-4px) scale(1.005)" : "none",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, filter",
        maxWidth: "100%",
        ...style,
      }}
    >
      {floatingElements}

      {/* Main Clipped Glass Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          clipPath: GRAFFITI_SHAPES[shape],
          background: "rgba(10, 14, 26, 0.82)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: `1px solid ${borderColor}`,
          padding: innerPadding,
          color: "#F1F5F9",
          maxWidth: "100%",
          wordBreak: "normal",
          overflowWrap: "anywhere",
          boxShadow: `inset 0 0 20px ${glowColor}`,
          ...innerStyle,
        }}
      >
        {/* HUD Target Brackets */}
        <div className="hud-corner hud-tl" style={{ borderColor }} />
        <div className="hud-corner hud-tr" style={{ borderColor }} />
        <div className="hud-corner hud-bl" style={{ borderColor }} />
        <div className="hud-corner hud-br" style={{ borderColor }} />

        {children}
      </div>
    </div>
  )
}

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
  bg = "rgba(255, 255, 255, 0.12)",
  size = 76,
  rotate = 0,
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
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 0 15px rgba(255,255,255,0.2), inset 0 0 10px rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        lineHeight: 1.1,
        padding: "0.4rem",
        zIndex: 25,
        userSelect: "none",
        backdropFilter: "blur(8px)",
        ...style,
      }}
    >
      <span style={{ fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
      {sublabel && <span style={{ fontSize: "0.55rem", opacity: 0.85, marginTop: 2 }}>{sublabel}</span>}
    </div>
  )
}

interface VinylRecordBadgeProps {
  title?: string
  size?: number
  rotate?: number
  style?: React.CSSProperties
}

export function VinylRecordBadge({ title = "DATA", size = 64, rotate = 0, style = {} }: VinylRecordBadgeProps) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "#030712",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transform: `rotate(${rotate}deg)`,
        zIndex: 25,
        ...style,
      }}
    >
      <div style={{ position: "absolute", inset: "6px", borderRadius: "50%", border: "1px dashed rgba(255, 255, 255, 0.3)" }} />
      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 8px #FFFFFF" }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#030712" }} />
      </div>
    </div>
  )
}

interface GraffitiCircleProps {
  size?: number | string
  color?: string
  opacity?: number
  style?: React.CSSProperties
}

export function GraffitiCircle({ size = 220, color = "#FFFFFF", opacity = 0.04, style = {} }: GraffitiCircleProps) {
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
      <circle cx="100" cy="100" r="85" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity={opacity * 2} />
      <circle cx="100" cy="100" r="60" stroke={color} strokeWidth="0.5" opacity={opacity} />
    </svg>
  )
}

export function SprayBlob({ children, color = "rgba(255, 255, 255, 0.1)", textColor = "#FFFFFF", style = {} }: { children: React.ReactNode; color?: string; textColor?: string; style?: React.CSSProperties; variant?: any }) {
  return (
    <div
      style={{
        background: color,
        color: textColor,
        border: "1px solid rgba(255, 255, 255, 0.25)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.3rem 0.8rem",
        fontSize: "0.75rem",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
        clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
