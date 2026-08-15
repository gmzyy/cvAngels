"use client"
import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
}

interface CircuitLine {
  x0: number; y0: number
  x1: number; y1: number
  x2: number; y2: number
  progress: number
  speed: number
  color: string
  width: number
}

export default function BgCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let W = 0, H = 0
    let particles: Particle[] = []
    let circuits: CircuitLine[] = []

    function createParticle(): Particle {
      const isCyan = Math.random() < 0.6
      const isMagenta = !isCyan && Math.random() < 0.7
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        color: isCyan ? "0, 240, 255" : isMagenta ? "255, 0, 85" : "0, 255, 157",
      }
    }

    function createCircuit(): CircuitLine {
      const isCyan = Math.random() < 0.65
      const startX = Math.random() * W
      const startY = Math.random() * H
      const angle = (Math.floor(Math.random() * 4) * Math.PI) / 2
      const dist1 = Math.random() * 180 + 60
      const dist2 = Math.random() * 180 + 60
      
      const midX = startX + Math.cos(angle) * dist1
      const midY = startY + Math.sin(angle) * dist1
      
      const angle2 = angle + (Math.random() < 0.5 ? Math.PI / 2 : -Math.PI / 2)
      const endX = midX + Math.cos(angle2) * dist2
      const endY = midY + Math.sin(angle2) * dist2

      return {
        x0: startX, y0: startY,
        x1: midX, y1: midY,
        x2: endX, y2: endY,
        progress: 0,
        speed: Math.random() * 0.008 + 0.003,
        color: isCyan ? "rgba(0, 240, 255, " : "rgba(255, 0, 85, ",
        width: Math.random() * 1.5 + 0.8,
      }
    }

    function resize() {
      if (!canvas) return
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      particles = Array.from({ length: 90 }, createParticle)
      circuits = Array.from({ length: 12 }, createCircuit)
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)

      // ── 1. Cyber Digital Grid Overlay ──
      const gridSize = 64
      ctx.strokeStyle = "rgba(0, 240, 255, 0.035)"
      ctx.lineWidth = 1

      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.stroke()
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.stroke()
      }

      // ── 2. Quantum Cyber Particles & Node Mesh ──
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `rgb(${p.color})`
        ctx.fill()
        ctx.shadowBlur = 0

        // Connect close particles with subtle energy threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 110) * 0.12})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // ── 3. Animated Circuit Energy Pulse Streams ──
      circuits.forEach((c) => {
        c.progress += c.speed
        if (c.progress > 1) {
          Object.assign(c, createCircuit())
        }

        ctx.beginPath()
        ctx.moveTo(c.x0, c.y0)
        
        if (c.progress <= 0.5) {
          const t = c.progress * 2
          ctx.lineTo(c.x0 + (c.x1 - c.x0) * t, c.y0 + (c.y1 - c.y0) * t)
        } else {
          ctx.lineTo(c.x1, c.y1)
          const t = (c.progress - 0.5) * 2
          ctx.lineTo(c.x1 + (c.x2 - c.x1) * t, c.y1 + (c.y2 - c.y1) * t)
        }

        ctx.strokeStyle = `${c.color}0.4)`
        ctx.lineWidth = c.width
        ctx.shadowBlur = 10
        ctx.shadowColor = c.color.includes("0, 240") ? "#00F0FF" : "#FF0055"
        ctx.stroke()
        ctx.shadowBlur = 0
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  )
}
