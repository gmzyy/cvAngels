"use client"
import { useEffect, useRef } from "react"

type Theme = "nexus" | "lumina" | "orion"

function drawNexus(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!
  const W = canvas.width, H = canvas.height
  const nodes = Array.from({ length: 14 }, () => ({
    x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2.5 + 1.5,
  }))
  ctx.strokeStyle = "rgba(201,24,74,0.22)"
  ctx.lineWidth = 0.7
  nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => {
    if (Math.hypot(a.x - b.x, a.y - b.y) < 110) {
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
    }
  }))
  nodes.forEach(n => {
    ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(201,24,74,0.9)"
    ctx.shadowColor = "#c9184a"; ctx.shadowBlur = 9; ctx.fill(); ctx.shadowBlur = 0
  })
  const g = ctx.createLinearGradient(0, 0, 0, H)
  g.addColorStop(0.45, "transparent"); g.addColorStop(1, "#111120")
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
}

function drawLumina(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!
  const W = canvas.width, H = canvas.height
  const cx = W * 0.55, cy = H * 0.44
  // Grid
  ctx.strokeStyle = "rgba(140,100,255,0.08)"; ctx.lineWidth = 0.6
  for (let x = 0; x < W; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
  for (let y = 0; y < H; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }
  // Rings
  ;[80, 58, 40, 26, 14].forEach((r, i) => {
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(180,140,255,${0.1 + i * 0.045})`; ctx.lineWidth = 1; ctx.stroke()
  })
  // Dots on rings
  ;[[80, 0.8], [58, 2.2], [40, 4.0]].forEach(([r, a]) => {
    const x2 = cx + r * Math.cos(a), y2 = cy + r * Math.sin(a)
    ctx.beginPath(); ctx.arc(x2, y2, 3, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(200,170,255,0.9)"
    ctx.shadowColor = "#b48fff"; ctx.shadowBlur = 9; ctx.fill(); ctx.shadowBlur = 0
  })
  const g = ctx.createLinearGradient(0, 0, 0, H)
  g.addColorStop(0.5, "transparent"); g.addColorStop(1, "#111120")
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
}

function drawOrion(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!
  const W = canvas.width, H = canvas.height
  // Dot grid
  ctx.fillStyle = "rgba(30,220,140,0.18)"
  for (let x = 20; x < W; x += 28) for (let y = 20; y < H; y += 28) {
    ctx.beginPath(); ctx.arc(x, y, 1.2, 0, Math.PI * 2); ctx.fill()
  }
  // Hexagon
  const hcx = W * 0.42, hcy = H * 0.47, hr = 40
  ctx.beginPath()
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6
    i === 0 ? ctx.moveTo(hcx + hr * Math.cos(a), hcy + hr * Math.sin(a))
            : ctx.lineTo(hcx + hr * Math.cos(a), hcy + hr * Math.sin(a))
  }
  ctx.closePath()
  ctx.strokeStyle = "rgba(30,220,140,0.55)"; ctx.lineWidth = 1.5; ctx.stroke()
  ctx.fillStyle   = "rgba(30,220,140,0.06)"; ctx.fill()
  // Center glow
  ctx.beginPath(); ctx.arc(hcx, hcy, 5, 0, Math.PI * 2)
  ctx.fillStyle = "rgba(30,220,140,0.9)"
  ctx.shadowColor = "#1edc8c"; ctx.shadowBlur = 14; ctx.fill(); ctx.shadowBlur = 0
  const g = ctx.createLinearGradient(0, 0, 0, H)
  g.addColorStop(0.5, "transparent"); g.addColorStop(1, "#111120")
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
}

const DRAW_MAP = { nexus: drawNexus, lumina: drawLumina, orion: drawOrion }
const BG_MAP = {
  nexus:  "radial-gradient(ellipse at 30% 50%, rgba(201,24,74,0.2) 0%, transparent 60%), linear-gradient(135deg,#0d0d1c,#0a0518)",
  lumina: "radial-gradient(ellipse at 60% 40%, rgba(100,60,200,0.18) 0%, transparent 65%), linear-gradient(135deg,#0a0a1a,#0d0a1c)",
  orion:  "radial-gradient(ellipse at 50% 60%, rgba(20,200,120,0.15) 0%, transparent 60%), linear-gradient(135deg,#080e10,#050c0a)",
}

export default function CardVisual({ theme, height = 170 }: { theme: Theme; height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap   = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    canvas.width  = wrap.offsetWidth  || 300
    canvas.height = height
    DRAW_MAP[theme](canvas)
  }, [theme, height])

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative", width: "100%", height,
        background: BG_MAP[theme], overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
    </div>
  )
}
