"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { MapPin, Mail, Phone, MessageSquare, Globe, Download, Award } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="about"
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
      <div style={{ marginBottom: "3rem", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="sticker-box font-mono" style={{ transform: "rotate(-2deg)", color: "var(--red)" }}>
            // {t("PERFIL PROFESIONAL", "PROFESSIONAL PROFILE")}
          </span>
          <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--grey)", letterSpacing: "0.2em" }}>
            [SYS_ID: GEELMZ_01]
          </span>
        </div>

        <h2 className="font-display" style={{
          fontSize: "clamp(2.4rem, 7.5vw, 6.5rem)",
          lineHeight: 0.85,
          color: "#FFFFFF",
          textShadow: "4px 4px 0px var(--red)",
          textTransform: "uppercase",
          margin: 0,
        }}>
          {t("INGENIERÍA", "SOFTWARE")}
        </h2>

        <div className="font-spray" style={{
          fontSize: "clamp(2.2rem, 6.5vw, 5.5rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-4deg) translateY(-10px)",
          WebkitTextStroke: "1px #FFFFFF",
          textShadow: "4px 4px 0px #000000",
          display: "inline-block",
        }}>
          &amp; {t("DESARROLLO FULLSTACK", "FULLSTACK DEV")}
        </div>
      </div>

      {/* ══ MAXIMALIST GRID LAYOUT ══ */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "start" }}
        className="lg:!grid-cols-[1.1fr_380px]"
      >
        {/* ── LEFT: BIO ZINE CARD ── */}
        <div style={{
          background: "#0C0C0C",
          border: "4px solid #FFFFFF",
          boxShadow: "12px 12px 0px var(--red), 12px 12px 0px 4px #000000",
          padding: "2.2rem",
          position: "relative",
        }}>
          {/* Top Tape Accent */}
          <div style={{
            position: "absolute",
            top: "-15px",
            right: "20px",
            background: "var(--red)",
            color: "#FFF",
            padding: "0.2rem 1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            fontWeight: 700,
            transform: "rotate(3deg)",
            border: "2px solid #FFF",
            boxShadow: "3px 3px 0px #000",
          }}>
            MANIFESTO // 2026
          </div>

          <p style={{
            fontSize: "1.1rem",
            color: "#FFFFFF",
            lineHeight: 1.8,
            fontFamily: "var(--font-body)",
            marginBottom: "1.5rem",
          }}>
            {t(
              "Desarrollador Fullstack versátil, especializado en plataformas fintech de alta transaccionalidad, motores de IA para reclutamiento y aplicaciones web de alto rendimiento.",
              "Versatile Fullstack Developer specializing in high-concurrency fintech platforms, AI recruitment engines, and high-performance web applications."
            )}
          </p>

          <p style={{
            fontSize: "1.05rem",
            color: "#BBBBBB",
            lineHeight: 1.75,
            fontFamily: "var(--font-body)",
            borderLeft: "4px solid var(--red)",
            paddingLeft: "1.2rem",
            marginBottom: "2rem",
            background: "#141414",
            padding: "1rem 1.2rem",
          }}>
            {t(
              "Manejo fluido entre backend (NestJS, FastAPI), frontend (Next.js 15, React 19), seguridad (2FA/TOTP, anti-replay) y modelos NLP (SpaCy, LangChain, ChromaDB).",
              "Proficient across backend (NestJS, FastAPI), frontend (Next.js 15, React 19), security (2FA/TOTP, anti-replay) and NLP models (SpaCy, LangChain, ChromaDB)."
            )}
          </p>

          {/* Quick Stat Sticker Badges */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1.2rem",
            marginTop: "2rem",
          }}>
            {[
              { num: "2+", label: t("AÑOS EXP", "YEARS EXP") },
              { num: "3", label: t("EMPRESAS", "COMPANIES") },
              { num: "100%", label: t("CÓDIGO PROPIO", "CUSTOM CODE") },
            ].map(({ num, label }, i) => (
              <div key={label} style={{
                border: "3px solid #FFFFFF",
                padding: "1rem",
                background: i === 0 ? "var(--red)" : "#000000",
                color: "#FFFFFF",
                boxShadow: "5px 5px 0px #000000",
                transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
              }}>
                <div className="font-display" style={{
                  fontSize: "2.8rem",
                  lineHeight: 0.9,
                  color: i === 0 ? "#FFFFFF" : "var(--red)",
                  textShadow: "2px 2px 0px #000",
                }}>
                  {num}
                </div>
                <div className="font-mono" style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  marginTop: 6,
                  fontWeight: 700,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: CONTACT STICKER POSTER CARD ── */}
        <div style={{
          border: "4px solid #FFFFFF",
          background: "#000000",
          boxShadow: "10px 10px 0px var(--red)",
          padding: "2rem",
          position: "relative",
        }}>
          {/* Header Tag */}
          <div style={{ marginBottom: "1.5rem", borderBottom: "3px dashed var(--red)", paddingBottom: "1.2rem" }}>
            <span className="font-wild" style={{ fontSize: "1.5rem", color: "var(--red)", display: "block", transform: "rotate(-3deg)" }}>
              #GEELMZ!!
            </span>
            <h3 className="font-display" style={{ fontSize: "2.4rem", color: "#FFFFFF", lineHeight: 1, marginTop: 4 }}>
              ANGEL GOMEZ
            </h3>
            <div className="font-spray" style={{ fontSize: "1.6rem", color: "var(--red)", marginTop: 2 }}>
              aka Feelmz
            </div>
            <div className="sticker-box font-mono" style={{ marginTop: 8, display: "inline-block" }}>
              [ FULLSTACK DEVELOPER ]
            </div>
          </div>

          {/* Contact Details List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { Icon: MapPin, text: "Puebla, México" },
              { Icon: Mail, text: "angelgom042@gmail.com" },
              { Icon: MessageSquare, text: "WA / Tel: +52 221 822 6470" },
            ].map(({ Icon, text }) => (
              <div key={text} className="font-mono" style={{
                display: "flex", alignItems: "center", gap: "0.8rem",
                fontSize: "0.85rem",
                color: "#FFFFFF",
                background: "#111111",
                padding: "0.6rem 0.8rem",
                border: "1px solid #333",
              }}>
                <Icon size={16} style={{ color: "var(--red)", flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div style={{ borderTop: "2px dashed #333", paddingTop: "1.2rem", marginTop: "1.5rem" }}>
            <div className="font-mono" style={{
              fontSize: "0.65rem", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--red)",
              marginBottom: "0.6rem", fontWeight: 700,
            }}>
              [ {t("IDIOMAS", "LANGUAGES")} ]
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: "0.6rem",
              background: "#161616", padding: "0.6rem 0.8rem", border: "1px solid #333"
            }}>
              <Globe size={16} style={{ color: "var(--red)" }} />
              <span className="font-mono" style={{ fontSize: "0.85rem", color: "#FFFFFF" }}>
                {t("Inglés Técnico", "Technical English")} (A2+)
              </span>
            </div>
          </div>

          {/* Download CV CTA Button */}
          <a
            href="/CV_Angel_GG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-street-primary"
            style={{
              marginTop: "1.8rem",
              width: "100%",
              justifyContent: "center",
              fontSize: "1.4rem",
              padding: "0.8rem",
              transform: "rotate(-1deg)",
            }}
          >
            DESCARGAR CV <Download size={20} style={{ marginLeft: 6 }} />
          </a>
        </div>
      </div>
    </section>
  )
}
