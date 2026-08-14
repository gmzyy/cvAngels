"use client"
import { useEffect, useRef } from "react"

// ── Imagen nativa ──────────────────────────────────────────────────────────────
const IMG_W  = 1320
const IMG_H  = 1192
const ASPECT = IMG_W / IMG_H   // 1.1073

// ── Widget ─────────────────────────────────────────────────────────────────────
const SIZE      = 140
const RENDERED_H = SIZE / ASPECT       // ≈ 126.4 px
const OFFSET_Y   = (SIZE - RENDERED_H) / 2  // ≈ 6.8 px letterbox

const SCALE_X = SIZE / IMG_W           // ≈ 0.1061
const SCALE_Y = RENDERED_H / IMG_H    // ≈ 0.1061

// ── Centros exactos de los ojos (medidos por el usuario en 1320×1192) ──────────
const EYE_L = { x: 461   * SCALE_X, y: OFFSET_Y + 688   * SCALE_Y }
const EYE_R = { x: 851.5 * SCALE_X, y: OFFSET_Y + 687.5 * SCALE_Y }

// ── Movimiento máximo (px nativos → clampeado antes de escalar) ─────────────────
const MAX_NX = 50
const MAX_NY = 20

const PR = 3   // radio pupila en px renderizados

const clamp = (v: number, lo: number, hi: number) =>
  v < lo ? lo : v > hi ? hi : v

export default function CaraOjos() {
  const imgRef  = useRef<HTMLImageElement>(null)
  const pupLRef = useRef<HTMLDivElement>(null)
  const pupRRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // En touch no hay cursor — no registrar nada
    if (window.matchMedia("(pointer: coarse)").matches) return

    // Cachear rect — reflow solo en resize/scroll, nunca en mousemove
    const rectRef = { current: null as DOMRect | null }
    const updateRect = () => {
      if (imgRef.current) rectRef.current = imgRef.current.getBoundingClientRect()
    }
    updateRect()
    window.addEventListener("resize", updateRect, { passive: true })
    window.addEventListener("scroll", updateRect, { passive: true })

    const onMove = (e: MouseEvent) => {
      const rect = rectRef.current
      const pL   = pupLRef.current
      const pR   = pupRRef.current
      if (!rect || !pL || !pR) return

      const mx = (e.clientX - rect.left) * (IMG_W / rect.width)
      const my = (e.clientY - rect.top)  * (IMG_H / rect.height)

      const lx = clamp(mx - 461,   -MAX_NX, MAX_NX) * SCALE_X
      const ly = clamp(my - 688,   -MAX_NY, MAX_NY) * SCALE_Y
      const rx = clamp(mx - 851.5, -MAX_NX, MAX_NX) * SCALE_X
      const ry = clamp(my - 687.5, -MAX_NY, MAX_NY) * SCALE_Y

      // DOM directo — sin re-render, sin delay, sin parpadeo
      pL.style.transform = `translate(calc(-50% + ${lx}px), calc(-50% + ${ly}px))`
      pR.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`
    }

    window.addEventListener("mousemove", onMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("resize", updateRect)
      window.removeEventListener("scroll", updateRect)
    }
  }, [])

  const pupilStyle = (eye: { x: number; y: number }): React.CSSProperties => ({
    position: "absolute",
    left: eye.x,
    top:  eye.y,
    width:  PR * 2,
    height: PR * 2,
    borderRadius: "50%",
    background: "#0a1020",
    transform: "translate(-50%, -50%)",
    willChange: "transform",
    boxShadow: `${PR * 0.4}px ${-PR * 0.4}px ${PR * 0.6}px rgba(255,255,255,0.5)`,
  })

  return (
    // zIndex 98 < 99 (menú mobile) → el menú lo tapa cuando está abierto
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        bottom: "1.2rem",
        right: "1.4rem",
        zIndex: 98,
        width: SIZE,
        height: SIZE,
        pointerEvents: "none",
        userSelect: "none",
        filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.55))",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src="/caraojos.png"
        alt=""
        style={{ width: SIZE, height: SIZE, objectFit: "contain", display: "block" }}
      />
      <div ref={pupLRef} style={pupilStyle(EYE_L)} />
      <div ref={pupRRef} style={pupilStyle(EYE_R)} />
    </div>
  )
}
