"use client"
import Link from "next/link"
import Scene3D from "./Scene3D"

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative", zIndex: 10,
        minHeight: "88vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.25rem 3rem",
        gap: "1.2rem",
      }}
    >
      {/* Title / Name */}
      <h1 style={{
        fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
        fontWeight: 900,
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        color: "#F3EFEF",
        maxWidth: 920,
        textTransform: "uppercase",
        animation: "fadeUp 0.8s ease both",
      }}>
        Angel Gomez Garcia
      </h1>

      {/* Tagline */}
      <p style={{
        fontSize: "clamp(0.9rem, 1.8vw, 1.25rem)",
        color: "var(--red-accent)",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        animation: "fadeUp 0.8s ease 0.1s both",
      }}>
        Desarrollo de Software &amp; Soluciones Digitales
      </p>

      {/* Description — Open, non-pigeonholed, authentic */}
      <p style={{
        fontSize: "clamp(0.88rem, 1.3vw, 1.05rem)",
        color: "#8D8D9E",
        fontWeight: 400,
        letterSpacing: "0.01em",
        maxWidth: 600,
        lineHeight: 1.7,
        animation: "fadeUp 0.9s ease 0.2s both",
      }}>
        Creo tecnología y experiencias web orientadas a resolver problemas reales, combinando arquitectura sólida, diseño de interfaz cuidadoso y atención al detalle.
      </p>

      {/* 3D Geometry */}
      <div style={{ animation: "fadeUp 1s ease 0.3s both", transform: "scale(0.9)", maxWidth: "100%", margin: "0.3rem 0" }}>
        <Scene3D />
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.4rem" }}>
        <a
          href="#portfolio"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.85rem 2.4rem",
            border: "1px solid rgba(217,70,99,0.5)",
            borderRadius: 999,
            background: "rgba(163,22,56,0.18)",
            color: "#F3EFEF",
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            boxShadow: "0 10px 25px rgba(163,22,56,0.25)",
            transition: "all 0.25s ease",
            animation: "fadeUp 1s ease 0.4s both",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = "translateY(-2px)"
            el.style.borderColor = "var(--red-accent)"
            el.style.background = "rgba(163,22,56,0.32)"
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.transform = "translateY(0)"
            el.style.borderColor = "rgba(217,70,99,0.5)"
            el.style.background = "rgba(163,22,56,0.18)"
          }}
        >
          Explorar Proyectos
        </a>

        <Link
          href="/conoce-de-mi"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.85rem 2.4rem",
            border: "1px solid rgba(243,239,239,0.18)",
            borderRadius: 999,
            background: "rgba(243,239,239,0.04)",
            color: "#F3EFEF",
            fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            backdropFilter: "blur(8px)",
            transition: "all 0.25s ease",
            animation: "fadeUp 1s ease 0.4s both",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = "rgba(243,239,239,0.4)"
            el.style.background  = "rgba(243,239,239,0.09)"
            el.style.transform   = "translateY(-2px)"
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = "rgba(243,239,239,0.18)"
            el.style.background  = "rgba(243,239,239,0.04)"
            el.style.transform   = "translateY(0)"
          }}
        >
          Conoce de Mí ↗
        </Link>
      </div>

      {/* Scroll indicator */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: "#3D3D4E", fontSize: "0.56rem", letterSpacing: "0.16em",
        textTransform: "uppercase",
        marginTop: "1.2rem",
        animation: "fadeUp 1s ease 0.8s both",
      }}>
        <div style={{
          width: 1, height: 34,
          background: "linear-gradient(to bottom, transparent, #D94663)",
          animation: "scroll-drip 2s ease-in-out infinite",
        }} />
        Desliza
      </div>
    </section>
  )
}
