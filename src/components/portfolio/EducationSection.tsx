"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { GraduationCap, Award, BookOpen, CheckCircle2, ShieldAlert, Disc } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { t } = useLanguage()

  const CERTIFICATIONS = [
    { name: "Scrum Fundamentals Certified (SFC)", org: "SCRUMstudy", year: "2026", code: "CERT-SFC-2026" },
    { name: "NestJS Microservices & Architecture", org: "Udemy / Enterprise", year: "2025", code: "CERT-NEST-01" },
    { name: "FastAPI & Python Advanced Async", org: "Udemy / Core", year: "2025", code: "CERT-FAST-02" },
    { name: "LangChain & Vector DBs (ChromaDB)", org: "AI Academy", year: "2025", code: "CERT-RAG-03" },
  ]

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
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.3rem 1.2rem",
            fontSize: "1.3rem",
            transform: "rotate(-2deg)",
            boxShadow: "4px 4px 0px var(--navy)",
          }}>
            🎓 // {t("FORMACIÓN & DIPLOMAS", "ACADEMIC DIPLOMAS")}
          </span>
          <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--navy)", letterSpacing: "0.2em", fontWeight: 900 }}>
            [DEGREES &amp; CERTS]
          </span>
        </div>

        <h2 className="font-display" style={{
          fontSize: "clamp(2.8rem, 8vw, 7rem)",
          lineHeight: 0.85,
          color: "var(--navy)",
          textShadow: "5px 5px 0px var(--red)",
          textTransform: "uppercase",
          margin: 0,
        }}>
          {t("FORMACIÓN", "EDUCATION")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(2.4rem, 7vw, 6rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-4deg) translateY(-12px) translateX(15px)",
          WebkitTextStroke: "1.5px var(--navy)",
          textShadow: "5px 5px 0px var(--navy)",
          display: "inline-block",
        }}>
          &amp; {t("CERTIFICACIONES", "CERTIFICATIONS")}
        </div>
      </div>

      {/* Grid: Left University Degree + Right Certifications Stack */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:!grid-cols-[1.1fr_0.9fr] gap-10">

        {/* LEFT: STREET DIPLOMA CARD ON BONE PAPER */}
        <div style={{
          background: "#FAF4EC",
          border: "4px solid var(--navy)",
          boxShadow: "12px 12px 0px var(--red)",
          padding: "2.5rem 2rem",
          position: "relative",
          color: "var(--navy)",
          transform: "rotate(-1.2deg)",
          clipPath: "polygon(0.5% 0%, 99.5% 0.5%, 99% 99.5%, 0% 99%)",
        }}>
          {/* Street Stamp Seal */}
          <div style={{
            position: "absolute",
            top: "-15px",
            right: "20px",
            background: "var(--navy)",
            color: "#FFFFFF",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 900,
            padding: "0.2rem 1rem",
            transform: "rotate(3deg)",
            border: "2px solid var(--red)",
            boxShadow: "3px 3px 0px var(--red)",
          }}>
            [ GRADUATED // 2026 ]
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

        {/* RIGHT: CERTIFICATIONS LIST ON BONE PAPER */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.name}
              style={{
                background: "#FAF4EC",
                border: "3px solid var(--navy)",
                boxShadow: "8px 8px 0px var(--red)",
                padding: "1.4rem 1.6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                color: "var(--navy)",
                transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                clipPath: "polygon(1% 0%, 99% 1%, 100% 99%, 0% 98%)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.2rem" }}>
                  <Award size={18} style={{ color: "var(--red)" }} />
                  <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--red)", fontWeight: 900 }}>
                    [{cert.code}]
                  </span>
                </div>
                <div className="font-display" style={{ fontSize: "1.6rem", color: "var(--navy)", lineHeight: 1 }}>
                  {cert.name}
                </div>
                <div className="font-mono" style={{ fontSize: "0.75rem", color: "#334455", marginTop: 4, fontWeight: 700 }}>
                  {cert.org}
                </div>
              </div>

              <span className="font-mono" style={{ fontSize: "0.85rem", background: "var(--navy)", color: "#FFF", padding: "0.4rem 0.8rem", border: "2px solid var(--navy)", fontWeight: 900 }}>
                {cert.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
