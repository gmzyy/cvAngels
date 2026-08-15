"use client"

import React from "react"
import { motion } from "framer-motion"

interface SprayDividerProps {
  color?: string
  flip?: boolean
}

export default function SprayDivider({ flip = false }: SprayDividerProps) {
  const laserColor = "#FFFFFF"

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        margin: "3rem 0",
        transform: flip ? "scaleX(-1)" : "none",
        pointerEvents: "none",
        userSelect: "none",
        position: "relative",
        zIndex: 5,
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.2rem",
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Left Tech Grid Line */}
        <div
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${laserColor})`,
            boxShadow: `0 0 10px rgba(255, 255, 255, 0.4)`,
          }}
        />

        {/* Center Quantum Geometric Gate Node */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
          }}
        >
          {/* Outer Rotating Square */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "48px",
              height: "48px",
              border: "1px stroke rgba(255, 255, 255, 0.4)",
              borderStyle: "dashed",
              borderRadius: "8px",
            }}
          />

          {/* Counter Rotating Circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderTopColor: "transparent",
            }}
          />

          {/* Core Glowing Diamond Dot */}
          <div
            style={{
              width: "10px",
              height: "10px",
              background: "#FFFFFF",
              transform: "rotate(45deg)",
              boxShadow: "0 0 12px #FFFFFF",
            }}
          />
        </div>

        {/* Right Tech Grid Line */}
        <div
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(90deg, ${laserColor}, transparent)`,
            boxShadow: `0 0 10px rgba(255, 255, 255, 0.4)`,
          }}
        />
      </div>
    </div>
  )
}
