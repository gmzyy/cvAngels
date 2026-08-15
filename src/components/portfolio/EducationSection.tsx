"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { GraduationCap, CheckCircle2, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="education"
      style={{
        position: "relative",
        zIndex: 10,
        padding: "6rem 1.5rem 8rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "3.5rem", textAlign: "center", position: "relative", zIndex: 5 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "0.4rem 1.2rem", borderRadius: "9999px", marginBottom: "1rem" }}>
          <Sparkles size={14} style={{ color: "#FFFFFF" }} />
          <span className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em" }}>
            // {t("FORMACIÓN ACADÉMICA", "ACADEMIC CREDENTIALS")}
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{ fontSize: "clamp(1.7rem, 6.5vw, 5.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
          {t("FORMACIÓN", "EDUCATION")}
        </h2>
      </div>

      {/* ══ CIRCULAR MEDALLION & UN-BOXED GLASS PILLS ══ */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          background: "rgba(10, 14, 26, 0.85)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          borderRadius: "36px",
          padding: "1.5rem 1.2rem",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.85)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.35)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}>
            <GraduationCap size={32} style={{ color: "#FFFFFF" }} />
          </div>
          <div>
            <span className="font-mono" style={{ fontSize: "0.72rem", background: "rgba(255, 255, 255, 0.12)", color: "#FFFFFF", padding: "3px 10px", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.25)" }}>
              DEGREE_CERTIFIED // UTP
            </span>
            <h3 className="font-display" style={{ fontSize: "clamp(1.3rem, 4.5vw, 2.2rem)", color: "#FFFFFF", lineHeight: 1.15, marginTop: 8, margin: 0 }}>
              {t("INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE", "SOFTWARE DEVELOPMENT & MANAGEMENT DEGREE")}
            </h3>
            <div className="font-mono" style={{ fontSize: "1rem", color: "#94A3B8", marginTop: 4 }}>
              Universidad Tecnológica de Puebla (UTP)
            </div>
          </div>
        </div>

        <p style={{ color: "#CBD5E1", fontSize: "1rem", lineHeight: 1.7, fontFamily: "var(--font-body)", marginBottom: "1.8rem" }}>
          {t(
            "Especialización en arquitectura de software, metodologías ágiles (Scrum), bases de datos relacionales/NoSQL y desarrollo web/móvil.",
            "Specialization in software architecture, agile methodologies (Scrum), relational/NoSQL databases, and web/mobile development."
          )}
        </p>

        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: "1.4rem" }}>
          <div className="font-mono" style={{ fontSize: "0.82rem", color: "#FFFFFF", marginBottom: "1rem", fontWeight: 700 }}>
            [ {t("COMPETENCIAS CLAVE", "KEY COMPETENCIES")} ]
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.8rem" }}>
            {[
              t("Arquitectura de Software", "Software Architecture"),
              t("Metodología Scrum/Agile", "Scrum/Agile Methodology"),
              t("Bases de Datos & SQL", "Databases & SQL"),
              t("Integración de APIs REST", "REST API Integrations"),
            ].map((c) => (
              <div
                key={c}
                className="font-mono"
                style={{
                  fontSize: "0.82rem",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  padding: "0.6rem 1rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <CheckCircle2 size={16} style={{ color: "#FFFFFF" }} />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
