"use client"
import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.opacity = "1"
      el.style.left = e.clientX + "px"
      el.style.top = e.clientY + "px"
    }
    const hide = () => {
      el.style.opacity = "0"
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", hide)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", hide)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: 360,
        height: 360,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 1,
        background: "radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(255, 0, 85, 0.06) 45%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        transition: "opacity 0.3s ease",
        filter: "blur(8px)",
      }}
    />
  )
}
