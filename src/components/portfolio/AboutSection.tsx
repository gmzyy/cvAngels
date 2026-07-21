"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { MapPin, Mail, Phone, MessageSquare, Globe } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const highlights = [
    { label: "35%", desc: "reducción latencia MongoDB" },
    { label: "40%", desc: "mejora tiempos de entrega" },
    { label: "60%", desc: "menos setup inicial con IA" },
    { label: "100%", desc: "exportación sincronizada" },
  ]

  return (
    <section
      ref={ref}
      id="about"
      className="container-pad"
      style={{
        position: "relative", zIndex: 10,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", fontWeight: 600, marginBottom: "0.7rem" }}>
        Perfil Profesional
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:!grid-cols-[1fr_360px] gap-12 items-start">

        {/* Left — bio text */}
        <div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.8rem" }}>
            Fullstack Developer<br />
            <span style={{ color: "var(--red)" }}>&amp; AI Integrator</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", fontSize: "0.9rem", color: "var(--grey)", lineHeight: 1.8 }}>
            <p>
              Desarrollador Fullstack versátil, con experiencia construyendo soluciones en distintos dominios:{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>plataformas fintech de alta transaccionalidad</span>,{" "}
              sistemas de reclutamiento con inteligencia artificial y aplicaciones web comerciales.
            </p>
            <p>
              Capaz de moverme con soltura entre{" "}
              <span style={{ color: "var(--red)", fontWeight: 600 }}>backend, frontend, seguridad y NLP</span>,
              adaptando arquitecturas escalables a las necesidades específicas de cada proyecto.
              Integro herramientas de IA para acelerar el ciclo de vida de desarrollo, siempre con
              foco en soluciones eficientes, seguras y de calidad.
            </p>
          </div>

          {/* Metric highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {highlights.map(h => (
              <div key={h.label}>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--red)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {h.label}
                </div>
                <div style={{ fontSize: "0.65rem", color: "var(--grey)", marginTop: 4, lineHeight: 1.4 }}>
                  {h.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — contact card */}
        <div style={{
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.07)",
          background: "var(--bg-card)",
          padding: "1.75rem",
          display: "flex", flexDirection: "column", gap: "1.4rem",
        }}>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Angel Gomez Garcia
            </div>
            <div style={{ fontSize: "0.65rem", color: "var(--red)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4, fontWeight: 600 }}>
              Desarrollador Fullstack
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {[
              { Icon: MapPin, text: "Puebla, México" },
              { Icon: Mail, text: "angelgom042@gmail.com" },
              { Icon: MessageSquare, text: "WA: +52 221 915 6631" },
              { Icon: Phone, text: "Tel: +52 221 822 6470" },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", color: "var(--grey)" }}>
                <Icon size={14} style={{ color: "var(--red)", flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.2rem" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.6rem", fontWeight: 600 }}>
              Idiomas
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--grey)" }}>
              <Globe size={14} style={{ color: "var(--red)", flexShrink: 0 }} />
              <span>Inglés técnico</span>
              <span style={{ background: "rgba(201,24,74,0.15)", border: "1px solid rgba(201,24,74,0.3)", borderRadius: 4, padding: "1px 6px", fontSize: "0.6rem", color: "var(--red)", fontWeight: 600 }}>
                A2+ → B2
              </span>
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--grey2)", marginTop: 6 }}>
              En preparación activa para certificación B2 (2026)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
