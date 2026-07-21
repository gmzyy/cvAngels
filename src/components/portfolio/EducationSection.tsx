"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const edu = [
    {
      degree: "Ingeniería en Desarrollo de Software Multiplataforma",
      institution: "Universidad Tecnológica de Puebla (UTP)",
      period: "2024 – 2026",
    },
    {
      degree: "TSU en Desarrollo de Software Multiplataforma",
      institution: "Universidad Tecnológica de Puebla (UTP)",
      period: "2022 – 2024",
    },
  ]

  return (
    <section
      ref={ref}
      id="education"
      className="container-pad"
      style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", fontWeight: 600, marginBottom: "0.7rem" }}>
        Formación &amp; Certificaciones
      </p>
      <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
        Educación e Idiomas
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="md:!grid-cols-2 gap-6">
        {/* Education list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {edu.map(item => (
            <div
              key={item.degree}
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10,
                padding: "1.5rem",
              }}
            >
              <div style={{ fontSize: "0.62rem", color: "var(--red)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>
                {item.period}
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                {item.degree}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--grey)" }}>
                {item.institution}
              </p>
            </div>
          ))}
        </div>

        {/* Languages & Certification details */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 10,
            padding: "1.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: "0.62rem", color: "var(--red)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
            Idiomas &amp; Formación Continua
          </div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: 10 }}>
            Inglés: Técnico (A2+)
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--grey)", lineHeight: 1.7, marginBottom: 14 }}>
            Dominio técnico para lectura de documentación avanzada, contribución en repositorios open-source y especificaciones de arquitectura.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 0.9rem", borderRadius: 8, background: "rgba(201,24,74,0.12)", border: "1px solid rgba(201,24,74,0.3)", width: "fit-content" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)" }} />
            <span style={{ fontSize: "0.72rem", color: "#fff", fontWeight: 600 }}>
              En preparación activa para certificación B2 (2026)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
