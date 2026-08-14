"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { GraduationCap, Award, BookOpen, CheckCircle2, ShieldAlert, Disc } from "lucide-react"
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
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Title Header */}
      <div style={{ marginBottom: "3.5rem", position: "relative" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.3rem 1.2rem",
            fontSize: "1.3rem",
            transform: "rotate(-2deg)",
            boxShadow: "4px 4px 0px var(--navy)",
            border: "2px solid var(--navy)",
          }}>
            // {t("FORMACIÓN ACADÉMICA", "ACADEMIC EDUCATION")}
          </span>
          <span className="stamp-badge">
            APPROVED
          </span>
          <span className="handwritten-note font-marker">
            Verified Degree ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("FORMACIÓN", "EDUCATION")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-4deg) translateY(-12px) translateX(15px)",
          WebkitTextStroke: "2px var(--navy)",
          textShadow: "5px 5px 0px var(--navy)",
          display: "inline-block",
        }}>
          &amp; {t("TITULACIÓN", "DEGREE")}
        </div>
      </div>

      {/* University Degree Card */}
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>

        {/* DIPLOMA CARD */}
        <div style={{
          background: "#FAF5EB",
          border: "4px solid var(--navy)",
          boxShadow: "12px 12px 0px var(--red)",
          padding: "2.5rem 2rem",
          position: "relative",
          color: "var(--navy)",
          transform: "rotate(-1.2deg)",
        }}>
          {/* Washi Tape */}
          <div className="washi-tape-top" />

          {/* Stamp Seal */}
          <div className="stamp-badge" style={{ position: "absolute", top: "20px", right: "20px" }}>
            GRADUATED
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
            <GraduationCap size={36} style={{ color: "var(--red)" }} />
            <div>
              <span className="font-mono" style={{ fontSize: "0.7rem", background: "var(--red)", color: "#FFF", padding: "2px 8px", fontWeight: 900 }}>
                DEGREE CERTIFIED
              </span>
              <h3 className="font-display" style={{ fontSize: "2.6rem", color: "var(--navy)", lineHeight: 0.95, marginTop: 4 }}>
                {t("INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE", "SOFTWARE DEVELOPMENT & MANAGEMENT DEGREE")}
              </h3>
            </div>
          </div>

          <div className="font-spray" style={{ fontSize: "1.6rem", color: "var(--red)", marginBottom: "1.2rem" }}>
            Universidad Tecnológica de Puebla (UTP)
          </div>

          <p className="font-body" style={{ color: "#112233", fontSize: "1rem", lineHeight: 1.65, fontWeight: 700, marginBottom: "1.5rem" }}>
            {t(
              "Especialización en arquitectura de software, metodologías ágiles (Scrum), bases de datos relacionales/NoSQL y desarrollo web/móvil.",
              "Specialization in software architecture, agile methodologies (Scrum), relational/NoSQL databases, and web/mobile development."
            )}
          </p>

          <div style={{ borderTop: "3px dashed var(--red)", paddingTop: "1.2rem" }}>
            <div className="font-mono" style={{ fontSize: "0.8rem", color: "var(--red)", marginBottom: "0.8rem", fontWeight: 900 }}>
              [ {t("COMPETENCIAS CLAVE", "KEY COMPETENCIES")} ]
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
              {[
                t("Arquitectura de Software", "Software Architecture"),
                t("Metodología Scrum/Agile", "Scrum/Agile Methodology"),
                t("Bases de Datos & SQL", "Databases & SQL"),
                t("Integración de APIs", "API Integrations"),
              ].map((c) => (
                <div key={c} className="font-mono" style={{ fontSize: "0.82rem", color: "var(--navy)", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 800 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--red)" }} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
