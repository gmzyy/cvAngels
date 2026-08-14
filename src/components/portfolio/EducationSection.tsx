"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { GraduationCap, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { TornCard, GraffitiCircle, SprayBlob, CircularSealBadge } from "./TornCard"

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
        padding: "7rem 1.5rem 9rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
        willChange: "opacity, transform",
      }}
    >
      {/* Background Accents */}
      <GraffitiCircle size={360} color="#A31621" opacity={0.06} style={{ top: "0px", left: "10%", zIndex: 0 }} />
      <GraffitiCircle size={280} color="#0F1B33" opacity={0.07} style={{ bottom: "20px", right: "10%", zIndex: 0 }} />

      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "4.5rem", position: "relative", zIndex: 5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.35rem 1.4rem",
            fontSize: "1.3rem",
            transform: "rotate(-2deg)",
            boxShadow: "5px 5px 0px var(--navy)",
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
          fontSize: "clamp(3.2rem, 9vw, 8rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("FORMACIÓN", "EDUCATION")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(2.6rem, 8vw, 7rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-4.5deg) translateY(-14px) translateX(20px)",
          WebkitTextStroke: "2px var(--navy)",
          textShadow: "5px 5px 0px var(--navy)",
          display: "inline-block",
        }}>
          &amp; {t("TITULACIÓN", "DEGREE")}
        </div>
      </div>

      {/* ══ STREET DIPLOMA DOCK ══ */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <TornCard
          shape="torn2"
          shadow="red"
          rotate={-2.5}
          floatingElements={
            <>
              <div className="washi-tape-top" style={{ top: "-18px", left: "20%" }} />
              <CircularSealBadge
                label="UTP DEGREE"
                sublabel="GRADUATED"
                bg="#A31621"
                size={82}
                rotate={12}
                style={{ position: "absolute", top: "-28px", right: "20px" }}
              />
            </>
          }
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <GraduationCap size={44} style={{ color: "var(--red)", flexShrink: 0 }} />
            <div>
              <span className="font-mono" style={{ fontSize: "0.75rem", background: "var(--red)", color: "#FFF", padding: "3px 10px", fontWeight: 900, clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)" }}>
                DEGREE CERTIFIED
              </span>
              <h3 className="font-display" style={{ fontSize: "2.8rem", color: "var(--navy)", lineHeight: 0.95, marginTop: 6 }}>
                {t("INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE", "SOFTWARE DEVELOPMENT & MANAGEMENT DEGREE")}
              </h3>
            </div>
          </div>

          <div className="font-spray" style={{ fontSize: "1.8rem", color: "var(--red)", marginBottom: "1.5rem" }}>
            Universidad Tecnológica de Puebla (UTP)
          </div>

          <p className="font-body" style={{ color: "#112233", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 700, marginBottom: "2rem" }}>
            {t(
              "Especialización en arquitectura de software, metodologías ágiles (Scrum), bases de datos relacionales/NoSQL y desarrollo web/móvil.",
              "Specialization in software architecture, agile methodologies (Scrum), relational/NoSQL databases, and web/mobile development."
            )}
          </p>

          <div style={{ borderTop: "3px dashed var(--red)", paddingTop: "1.5rem" }}>
            <div className="font-mono" style={{ fontSize: "0.85rem", color: "var(--red)", marginBottom: "1rem", fontWeight: 900 }}>
              [ {t("COMPETENCIAS CLAVE", "KEY COMPETENCIES")} ]
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[
                t("Arquitectura de Software", "Software Architecture"),
                t("Metodología Scrum/Agile", "Scrum/Agile Methodology"),
                t("Bases de Datos & SQL", "Databases & SQL"),
                t("Integración de APIs", "API Integrations"),
              ].map((c, i) => (
                <div
                  key={c}
                  className="font-mono"
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--navy)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontWeight: 800,
                    background: "#EAE0D0",
                    padding: "0.6rem 0.9rem",
                    border: "2px solid var(--navy)",
                    boxShadow: "3px 3px 0px var(--navy)",
                    transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "var(--red)" }} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </TornCard>
      </div>
    </section>
  )
}
