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

const PR = 3.2   // radio pupila en px renderizados

const clamp = (v: number, lo: number, hi: number) =>
  v < lo ? lo : v > hi ? hi : v

export default function CaraOjos() {
  const imgRef  = useRef<HTMLImageElement>(null)
  const pupLRef = useRef<HTMLDivElement>(null)
  const pupRRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rectRef = { current: null as DOMRect | null }
    const updateRect = () => {
      if (imgRef.current) rectRef.current = imgRef.current.getBoundingClientRect()
    }
    updateRect()
    window.addEventListener("resize", updateRect, { passive: true })
    window.addEventListener("scroll", updateRect, { passive: true })

    const handlePos = (clientX: number, clientY: number) => {
      const rect = rectRef.current
      const pL   = pupLRef.current
      const pR   = pupRRef.current
      if (!rect || !pL || !pR) return

      const mx = (clientX - rect.left) * (IMG_W / rect.width)
      const my = (clientY - rect.top)  * (IMG_H / rect.height)

      const lx = clamp(mx - 461,   -MAX_NX, MAX_NX) * SCALE_X
      const ly = clamp(my - 688,   -MAX_NY, MAX_NY) * SCALE_Y
      const rx = clamp(mx - 851.5, -MAX_NX, MAX_NX) * SCALE_X
      const ry = clamp(my - 687.5, -MAX_NY, MAX_NY) * SCALE_Y

      pL.style.transform = `translate(calc(-50% + ${lx}px), calc(-50% + ${ly}px))`
      pR.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`
    }

    const onMouseMove = (e: MouseEvent) => handlePos(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handlePos(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("touchstart", onTouchMove, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchstart", onTouchMove)
      window.removeEventListener("touchmove", onTouchMove)
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
    background: "#030712",
    transform: "translate(-50%, -50%)",
    willChange: "transform",
    boxShadow: `0 0 6px #FFFFFF, 0 0 10px rgba(255,255,255,0.8)`,
    border: "1px solid #FFFFFF",
  })

  return (
    <div
      id="cara-ojos-container"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "1.2rem",
        right: "1.4rem",
        zIndex: 98,
        width: SIZE,
        height: SIZE,
        pointerEvents: "none",
        userSelect: "none",
        filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.4)) drop-shadow(0 6px 20px rgba(0,0,0,0.9))",
        transition: "filter 0.3s ease",
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
