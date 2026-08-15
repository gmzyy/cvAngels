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
      style={{
        position: "relative",
        zIndex: 10,
        padding: "6rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="tag-white" style={{ marginBottom: "0.8rem" }}>
        // MÁS ALLÁ DEL CÓDIGO
      </div>
      <h2 className="spray-drippy-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", color: "#FFFFFF", marginBottom: "3rem" }}>
        FILOSOFÍA &amp; VISIÓN
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:!grid-cols-3 gap-8">
        {/* 1. Ideología & Filosofía */}
        <div className="cyber-card" style={{ padding: "1.8rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 34, height: 34, background: "rgba(0, 240, 255, 0.15)", border: "1px solid var(--cyan)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cyan)" }}>
              <Compass size={18} />
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "1.2rem", color: "#FFFFFF", margin: 0 }}>
                Filosofía de Trabajo
              </h3>
              <p className="font-mono" style={{ fontSize: "0.68rem", color: "var(--cyan)" }}>
                PRINCIPIOS E IDEOLOGÍA
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {ideologia.map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <item.Icon size={16} style={{ color: "var(--cyan)", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <h4 className="font-mono" style={{ fontSize: "0.88rem", fontWeight: 700, color: "#FFFFFF", marginBottom: 3 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#CBD5E1", lineHeight: 1.6, fontFamily: "var(--font-body)", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Metas & Objetivos */}
        <div className="cyber-card-magenta" style={{ padding: "1.8rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 34, height: 34, background: "rgba(255, 0, 85, 0.15)", border: "1px solid var(--magenta)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--magenta)" }}>
              <Target size={18} />
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "1.2rem", color: "#FFFFFF", margin: 0 }}>
                Metas &amp; Visión
              </h3>
              <p className="font-mono" style={{ fontSize: "0.68rem", color: "var(--magenta)" }}>
                HACIA DÓNDE VOY
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {metas.map((meta, idx) => (
              <div key={idx} className="font-mono" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.82rem", color: "#CBD5E1", lineHeight: 1.6 }}>
                <span style={{ color: "var(--magenta)", fontWeight: 700, flexShrink: 0 }}>0{idx + 1}.</span>
                <span>{meta}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Gustos & Intereses */}
        <div className="cyber-card" style={{ padding: "1.8rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 34, height: 34, background: "rgba(0, 240, 255, 0.15)", border: "1px solid var(--cyan)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--cyan)" }}>
              <Heart size={18} />
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "1.2rem", color: "#FFFFFF", margin: 0 }}>
                Gustos &amp; Intereses
              </h3>
              <p className="font-mono" style={{ fontSize: "0.68rem", color: "var(--cyan)" }}>
                LO QUE ME APASIONA
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {gustos.map((item, idx) => (
              <div key={idx} style={{ background: "rgba(3, 7, 18, 0.6)", border: "1px solid rgba(255,255,255,0.06)", padding: "0.85rem" }}>
                <h4 className="font-mono" style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--cyan)", marginBottom: 4, margin: 0 }}>
                  {item.label}
                </h4>
                <p style={{ fontSize: "0.8rem", color: "#CBD5E1", lineHeight: 1.55, margin: 0, fontFamily: "var(--font-body)" }}>
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
