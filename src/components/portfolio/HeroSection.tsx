"use client"
import Link from "next/link"
import Scene3D from "./Scene3D"

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative", zIndex: 10,
        minHeight: "90vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "6.5rem 1.25rem 3rem",
        gap: "1.4rem",
      }}
    >
      {/* Eyebrow */}
      <p style={{
        fontSize: "clamp(0.6rem, 1.2vw, 0.72rem)",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--red)",
        fontWeight: 600,
        opacity: 0.9,
        animation: "fadeDown 0.8s ease both",
      }}>
        Desarrollador Fullstack &amp; Integrador de IA
      </p>

      {/* Title */}
      <h1 style={{
        fontSize: "clamp(2rem, 5vw, 4.2rem)",
        fontWeight: 900,
        letterSpacing: "-0.02em",
        lineHeight: 1.08,
        textTransform: "uppercase",
        maxWidth: 920,
        animation: "fadeUp 0.9s ease 0.1s both",
      }}>
        Construyendo software<br />
        con precisión y{" "}
        <span style={{ color: "var(--red)" }}>arquitectura real.</span>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)",
        color: "var(--grey)",
        fontWeight: 300,
        letterSpacing: "0.02em",
        maxWidth: 580,
        lineHeight: 1.7,
        animation: "fadeUp 0.9s ease 0.2s both",
      }}>
        Apasionado por la optimización de código, la seguridad en sistemas transaccionales y la creación de productos web de alto impacto.
      </p>

      {/* 3D Scene */}
      <div style={{ animation: "fadeUp 1s ease 0.3s both", transform: "scale(0.92)", maxWidth: "100%", margin: "0.5rem 0" }}>
        <Scene3D />
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="#portfolio"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.8rem 2.2rem",
            border: "1px solid rgba(201,24,74,0.5)",
            borderRadius: 999,
            background: "rgba(201,24,74,0.14)",
            color: "#fff",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", textDecoration: "none",
            backdropFilter: "blur(8px)",
            transition: "all 0.25s ease",
            animation: "fadeUp 1s ease 0.5s both",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = "var(--red)"
            el.style.background  = "rgba(201,24,74,0.25)"
            el.style.boxShadow   = "0 0 24px rgba(201,24,74,0.3)"
            el.style.transform   = "translateY(-2px)"
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = "rgba(201,24,74,0.5)"
            el.style.background  = "rgba(201,24,74,0.14)"
            el.style.boxShadow   = "none"
            el.style.transform   = "translateY(0)"
          }}
        >
          Ver Mis Proyectos
        </a>

        <Link
          href="/conoce-de-mi"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.8rem 2.2rem",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            color: "#fff",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", textDecoration: "none",
            backdropFilter: "blur(8px)",
            transition: "all 0.25s ease",
            animation: "fadeUp 1s ease 0.5s both",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = "rgba(255,255,255,0.5)"
            el.style.background  = "rgba(255,255,255,0.12)"
            el.style.transform   = "translateY(-2px)"
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = "rgba(255,255,255,0.25)"
            el.style.background  = "rgba(255,255,255,0.06)"
            el.style.transform   = "translateY(0)"
          }}
        >
          Conoce de Mí (Perfil Humano) ↗
        </Link>
      </div>

      {/* Scroll hint */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: "var(--grey2)", fontSize: "0.56rem", letterSpacing: "0.16em",
        textTransform: "uppercase",
        marginTop: "1rem",
        animation: "fadeUp 1s ease 0.9s both",
      }}>
        <div style={{
          width: 1, height: 36,
          background: "linear-gradient(to bottom, transparent, var(--red))",
          animation: "scroll-drip 2s ease-in-out infinite",
        }} />
        Desliza
      </div>
    </section>
  )
}
