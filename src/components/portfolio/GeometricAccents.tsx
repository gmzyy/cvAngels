"use client"

import { motion } from "framer-motion"

interface OrbitalRingProps {
  size?: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
}

export function OrbitalRing({
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.15,
}: OrbitalRingProps) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: "none",
        zIndex: 0,
        opacity,
      }}
    >
      {/* Outer Rotating Dashed Ring */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        style={{ position: "absolute", inset: 0 }}
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="8 8"
        />
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          strokeDasharray="3 12"
        />
      </motion.svg>

      {/* Inner Counter-Rotating Precision Reticle */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        style={{ position: "absolute", inset: 0 }}
      >
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="40 20"
        />
        <circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.5"
        />
        {/* Cardinal Crosshair Lines */}
        <line x1="200" y1="60" x2="200" y2="90" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="200" y1="310" x2="200" y2="340" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="60" y1="200" x2="90" y2="200" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="310" y1="200" x2="340" y2="200" stroke="#FFFFFF" strokeWidth="1.5" />
      </motion.svg>
    </div>
  )
}

export function FloatingPolyhedron({
  size = 140,
  style = {},
}: {
  size?: number
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 180, 0],
        y: [0, -15, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: "none",
        zIndex: 1,
        ...style,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Wireframe Octahedron */}
        <polygon points="50,10 90,50 50,90 10,50" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <polygon points="50,10 70,50 50,90 30,50" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.5" />
        <circle cx="50" cy="10" r="2.5" fill="#FFFFFF" />
        <circle cx="90" cy="50" r="2.5" fill="#FFFFFF" />
        <circle cx="50" cy="90" r="2.5" fill="#FFFFFF" />
        <circle cx="10" cy="50" r="2.5" fill="#FFFFFF" />
      </svg>
    </motion.div>
  )
}
