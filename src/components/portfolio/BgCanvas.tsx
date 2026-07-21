"use client"
import { useEffect, useRef } from "react"

interface Particle { x: number; y: number; r: number; a: number; da: number }
interface Streak {
  x0: number; y0: number; cx1: number; cy1: number
  cx2: number; cy2: number; x1: number; y1: number
  color: string; width: number; offset: number
}

function makeParticle(W: number, H: number): Particle {
  return { x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.2+0.2, a: Math.random(), da: (Math.random()-0.5)*0.004 }
}
function makeStreak(W: number, H: number): Streak {
  const isRed = Math.random() < 0.65
  const alpha = (Math.random()*0.1+0.03).toFixed(3)
  const color = isRed ? `rgba(201,24,74,${alpha})` : `rgba(255,255,255,${(+alpha*0.5).toFixed(3)})`
  return {
    x0: Math.random()*W*1.4-W*0.2, y0: Math.random()*H,
    cx1: Math.random()*W,           cy1: Math.random()*H*0.5,
    cx2: Math.random()*W,           cy2: Math.random()*H*0.5+H*0.5,
    x1: Math.random()*W*1.4-W*0.2, y1: Math.random()*H,
    color, width: Math.random()*1.4+0.4, offset: Math.random()*Math.PI*2,
  }
}

export default function BgCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let animId: number
    let W = 0, H = 0
    let particles: Particle[] = []
    let streaks:   Streak[]   = []

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      particles = Array.from({ length: 160 }, () => makeParticle(W, H))
      streaks   = Array.from({ length: 14  }, () => makeStreak(W, H))
    }

    function draw(t: number) {
      ctx.clearRect(0, 0, W, H)
      // Stars
      particles.forEach(p => {
        p.a += p.da
        if (p.a < 0) p.da = Math.abs(p.da)
        if (p.a > 1) p.da = -Math.abs(p.da)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(255,255,255,${(p.a*0.45).toFixed(3)})`
        ctx.fill()
      })
      // Light streaks
      streaks.forEach(s => {
        const wave = Math.sin(t*0.0004+s.offset)*42
        ctx.beginPath()
        ctx.moveTo(s.x0, s.y0)
        ctx.bezierCurveTo(s.cx1+wave, s.cy1+wave*0.5, s.cx2-wave, s.cy2-wave*0.5, s.x1, s.y1)
        ctx.strokeStyle = s.color
        ctx.lineWidth   = s.width
        ctx.stroke()
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    animId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize) }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  )
}
