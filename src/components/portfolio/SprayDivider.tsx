"use client"
import React from "react"

interface SprayDividerProps {
  color?: string
  flip?: boolean
}

export default function SprayDivider({ color = "var(--red)", flip = false }: SprayDividerProps) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        margin: "2rem 0",
        transform: flip ? "scaleX(-1) rotate(0.5deg)" : "rotate(-0.5deg)",
        opacity: 0.9,
        pointerEvents: "none",
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "32px", display: "block" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 Q 150 5, 300 24 T 600 18 T 900 26 T 1200 15 L 1200 25 Q 1050 38, 900 24 T 600 30 T 300 20 T 0 28 Z"
          fill={color}
        />
        <path
          d="M20 18 C 120 10, 240 28, 380 16 C 520 24, 680 12, 820 22 C 960 14, 1080 26, 1180 18 L 1180 22 C 1080 30, 960 20, 820 26 C 680 18, 520 28, 380 20 C 240 30, 120 16, 20 22 Z"
          fill={color}
          opacity="0.75"
        />
        {/* Spray splatter dots */}
        <circle cx="80" cy="10" r="2.5" fill={color} />
        <circle cx="140" cy="34" r="1.8" fill={color} />
        <circle cx="310" cy="8" r="3.2" fill={color} />
        <circle cx="480" cy="36" r="2.1" fill={color} />
        <circle cx="650" cy="6" r="2.8" fill={color} />
        <circle cx="880" cy="35" r="3.5" fill={color} />
        <circle cx="1020" cy="9" r="2.2" fill={color} />
        <circle cx="1140" cy="32" r="3.0" fill={color} />
      </svg>
    </div>
  )
}
