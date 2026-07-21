"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Compass, Target, Heart, Terminal, ShieldCheck, Zap } from "lucide-react"

export default function PersonalAboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const ideologia = [
    {
      title: "Pragmatismo & Calidad",
      desc: "Prefiero soluciones sencillas, bien probadas y mantenibles antes que sobre-diseños innecesarios. El mejor código es el que resuelve un problema real con eficiencia.",
      Icon: Terminal,
    },
    {
      title: "Seguridad por Diseño",
      desc: "La seguridad (2FA, cifrado de tokens, mitigación de replay attacks) no es una ocurrencia tardía, es la base de cualquier software profesional.",
      Icon: ShieldCheck,
    },
    {
      title: "Autonomía & Aprendizaje",
      desc: "Capacidad de tomar un requerimiento complejo, investigarlo a fondo y llevarlo hasta producción con criterio propio y mentalidad abierta.",
      Icon: Zap,
    },
  ]

  const metas = [
    "Diseñar y escalar arquitecturas de software e Inteligencia Artificial on-premise sin depender de APIs de terceros.",
    "Construir plataformas de alta transaccionalidad donde la latencia, la seguridad y la experiencia de usuario sean impecables.",
    "Alcanzar la certificación oficial de inglés B2 (2026) para colaborar activamente en equipos y proyectos internacionales de alto nivel.",
    "Liderar iniciativas técnicas que aporten valor real a negocios y usuarios finales, manteniendo cero deuda técnica.",
  ]

  const gustos = [
    { label: "Optimización de Algoritmos", text: "Me apasiona refactorizar código para reducir latencias (como el 35% en MongoDB que logré en Softech)." },
    { label: "Arquitectura & IA", text: "Disfruto experimentar con modelos locales (SpaCy, LangChain, ChromaDB) y ver cómo resuelven tareas complejas." },
    { label: "Diseño UI/UX Limpio", text: "Disfruto crear interfaces oscuras, elegantes y fluidas donde cada animación tenga un propósito claro." },
    { label: "Aprendizaje Constante", text: "Apasionado por descubrir nuevas tecnologías, buenas prácticas de desarrollo e ingeniería de software moderna." },
  ]

  return (
    <section
      ref={ref}
      id="about-personal"
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
        Más Allá del Código
      </p>
      <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
        Conoce de Mí
      </h2>

      {/* Grid containing Ideología, Metas & Gustos */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:!grid-cols-3 gap-8">

        {/* 1. Ideología & Filosofía */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: "1.8rem",
          display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(201,24,74,0.12)", border: "1px solid rgba(201,24,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)" }}>
              <Compass size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: "#fff" }}>
                Filosofía de Trabajo
              </h3>
              <p style={{ fontSize: "0.62rem", color: "var(--grey)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Principios e Ideología
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {ideologia.map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <item.Icon size={16} style={{ color: "var(--red)", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff", marginBottom: 3 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.75rem", color: "var(--grey)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Metas & Objetivos */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: "1.8rem",
          display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(201,24,74,0.12)", border: "1px solid rgba(201,24,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)" }}>
              <Target size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: "#fff" }}>
                Metas &amp; Visión
              </h3>
              <p style={{ fontSize: "0.62rem", color: "var(--grey)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Hacia Dónde Voy
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {metas.map((meta, idx) => (
              <div key={idx} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.78rem", color: "var(--grey)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--red)", fontWeight: 700, fontSize: "0.7rem", marginTop: 2, flexShrink: 0 }}>0{idx + 1}.</span>
                <span>{meta}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Gustos & Intereses */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: "1.8rem",
          display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(201,24,74,0.12)", border: "1px solid rgba(201,24,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)" }}>
              <Heart size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: "#fff" }}>
                Gustos &amp; Intereses
              </h3>
              <p style={{ fontSize: "0.62rem", color: "var(--grey)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Lo Que Me Apasiona
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {gustos.map((item, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 8, padding: "0.85rem" }}>
                <h4 style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--red)", marginBottom: 4 }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: "0.74rem", color: "var(--grey)", lineHeight: 1.55 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
