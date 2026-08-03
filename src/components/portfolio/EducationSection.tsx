"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { GraduationCap, Zap, Award, CheckCircle2, ShieldCheck, FileCheck2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { t } = useLanguage()

  const edu = [
    {
      code: "DEG_01",
      degree: t("Ingeniería en Desarrollo de Software Multiplataforma", "B.S. in Multiplatform Software Engineering"),
      institution: "Universidad Tecnológica de Puebla (UTP)",
      period: "2024 – 2026",
      status: t("VERIFICADO // TITULACIÓN", "VERIFIED // DEGREE"),
    },
    {
      code: "DEG_02",
      degree: t("TSU en Desarrollo de Software Multiplataforma", "Associate Degree in Multiplatform Software Development"),
      institution: "Universidad Tecnológica de Puebla (UTP)",
      period: "2022 – 2024",
      status: t("COMPLETADO // TITULADO", "COMPLETED // GRADUATED"),
    },
  ]

  return (
    <section
      ref={ref}
      id="education"
      style={{
        position: "relative",
        zIndex: 10,
        padding: "6rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "4rem", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="sticker-box font-mono" style={{ transform: "rotate(1.5deg)", color: "var(--red)" }}>
            // {t("CREDANCIALES & DOSSIER ACADÉMICO", "CREDENTIALS & ACADEMIC DOSSIER")}
          </span>
          <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--grey)", letterSpacing: "0.2em" }}>
            [ACADEMIC_SEAL: UTP_PUEBLA]
          </span>
        </div>

        <h2 className="font-display" style={{
          fontSize: "clamp(3.8rem, 8vw, 6.5rem)",
          lineHeight: 0.85,
          color: "#FFFFFF",
          textShadow: "6px 6px 0px var(--red)",
          textTransform: "uppercase",
          margin: 0,
        }}>
          {t("FORMACIÓN", "EDUCATION")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(3.2rem, 7vw, 5.5rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-3deg) translateY(-15px)",
          WebkitTextStroke: "1.5px #FFFFFF",
          textShadow: "6px 6px 0px #000000",
          display: "inline-block",
        }}>
          {t("ACADÉMICA & CERTIFICADOS", "DOSSIER & CERTS")}
        </div>
      </div>

      {/* ══ PASSPORT DOSSIER GRID ══ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:!grid-cols-[1.1fr_0.9fr] gap-12">
        
        {/* Left — Academic Degree Passport Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}>
          {edu.map((item, idx) => (
            <div
              key={item.degree}
              style={{
                background: "#0A0A0A",
                border: "4px solid #FFFFFF",
                boxShadow: idx === 0 ? "12px 12px 0px var(--red), 12px 12px 0px 4px #000000" : "12px 12px 0px #FFFFFF, 12px 12px 0px 4px var(--red)",
                padding: "2.2rem",
                position: "relative",
              }}
            >
              {/* Tape Accent Corner */}
              <div style={{
                position: "absolute",
                top: "-15px",
                right: "20px",
                background: "var(--red)",
                color: "#FFFFFF",
                padding: "2px 10px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 700,
                transform: "rotate(3deg)",
                border: "1px solid #FFF",
              }}>
                {item.code} // OFFICIAL
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
                <span className="sticker-box font-mono" style={{ background: "#FFFFFF", color: "#000000", fontWeight: 700 }}>
                  {item.period}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--red)" }}>
                  <ShieldCheck size={22} />
                  <span className="font-mono" style={{ fontSize: "0.7rem", fontWeight: 700 }}>
                    {item.status}
                  </span>
                </div>
              </div>

              <h3 className="font-display" style={{ fontSize: "2.4rem", color: "#FFFFFF", lineHeight: 1.05, marginBottom: "0.8rem", textShadow: "2px 2px 0px #000" }}>
                {item.degree}
              </h3>
              <p className="font-spray" style={{ fontSize: "1.7rem", color: "var(--red)", margin: 0 }}>
                {item.institution}
              </p>

              {/* Barcode Graphic Strip */}
              <div style={{ marginTop: "1.5rem", borderTop: "2px dashed #333333", paddingTop: "0.8rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="font-mono" style={{ fontSize: "0.65rem", color: "#666666" }}>
                  BARCODE: ||||| | |||| ||| |||||| | {item.code}
                </span>
                <FileCheck2 size={18} style={{ color: "var(--red)" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Right — Language & Certification Radar Dossier */}
        <div
          style={{
            background: "#000000",
            border: "4px solid #FFFFFF",
            boxShadow: "14px 14px 0px #FFFFFF, 14px 14px 0px 4px var(--red)",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "between",
            position: "relative",
          }}
        >
          {/* Top Status Lights */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", borderBottom: "3px dashed #333333", paddingBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <Award size={30} style={{ color: "var(--red)" }} />
              <span className="sticker-box font-mono" style={{ background: "var(--red)", color: "#FFF" }}>
                [ LANG_CERT // RADAR ]
              </span>
            </div>
            <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--red)", fontWeight: 700 }}>
              ● ACTIVE TARGET
            </span>
          </div>

          <h3 className="font-display" style={{ fontSize: "3.5rem", color: "#FFFFFF", marginBottom: "0.8rem", lineHeight: 0.9 }}>
            {t("INGLÉS: TÉCNICO (A2+)", "ENGLISH: TECHNICAL (A2+)")}
          </h3>

          <p style={{ color: "#DDDDDD", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "2.2rem", fontFamily: "var(--font-body)" }}>
            {t(
              "Dominio técnico para lectura fluida de documentación avanzada, spec papers, arquitecturas de software y contribuciones open-source internacionales.",
              "Technical proficiency for fluent reading of advanced documentation, software architecture spec papers, and international open-source contributions."
            )}
          </p>

          {/* Proficiency Meter */}
          <div style={{ background: "#111111", border: "2px solid #FFFFFF", padding: "1.2rem", marginBottom: "2.2rem", boxShadow: "4px 4px 0px #000" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
              <span className="font-mono" style={{ fontSize: "0.8rem", color: "#FFF", fontWeight: 700 }}>
                READING &amp; TECH SPECS PROFICIENCY
              </span>
              <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--red)", fontWeight: 700 }}>
                85% [ADVANCED]
              </span>
            </div>
            <div style={{ width: "100%", height: "12px", background: "#000", border: "1px solid #333" }}>
              <div style={{ width: "85%", height: "100%", background: "var(--red)", boxShadow: "0 0 10px var(--red)" }} />
            </div>
          </div>

          {/* Certification Target Sticker */}
          <div style={{
            background: "var(--red)",
            color: "#FFFFFF",
            border: "3px solid #FFFFFF",
            padding: "1rem 1.4rem",
            fontFamily: "var(--font-spray)",
            fontSize: "1.6rem",
            transform: "rotate(-2deg)",
            boxShadow: "6px 6px 0px #000000",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            marginTop: "auto",
          }}>
            <Zap size={26} style={{ color: "#FFF", flexShrink: 0 }} />
            <span>{t("En preparación activa para certificación B2 (2026)", "Active preparation for B2 certification (2026)")}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
