"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { MapPin, Mail, MessageSquare, Award, Flame, Disc, Radio } from "lucide-react"
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
      {/* ══ HEADER TITLE BANNER — PUNK ZINE SPRAY DRIP ══ */}
      <div style={{ marginBottom: "4rem", position: "relative" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.3rem 1.2rem",
            fontSize: "1.3rem",
            transform: "rotate(-3deg)",
            boxShadow: "4px 4px 0px var(--navy)",
            border: "2px solid var(--navy)",
          }}>
            // {t("MANIFIESTO & PROFILE", "MANIFESTO & PROFILE")}
          </span>
          <span className="stamp-badge">
            DRAFT
          </span>
          <span className="handwritten-note font-marker">
            Real Talk Only ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
          color: "var(--red)",
          margin: 0,
        }}>
          {t("INGENIERÍA", "SOFTWARE")}
        </h2>

        <div className="font-spray" style={{
          fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
          color: "var(--navy)",
          lineHeight: 0.9,
          transform: "rotate(-4deg) translateY(-12px) translateX(15px)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          display: "inline-block",
        }}>
          &amp; {t("DESARROLLO FULLSTACK", "FULLSTACK DEV")}
        </div>
      </div>

      {/* ══ DYNAMIC PUNK ZINE COLLAGE ══ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:!grid-cols-[1.2fr_0.8fr] gap-12">

        {/* ── LEFT: MANIFESTO ── */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          
          <div style={{
            background: "#FAF5EB",
            border: "4px solid var(--navy)",
            boxShadow: "12px 12px 0px var(--red)",
            padding: "2.5rem 2rem",
            color: "var(--navy)",
            position: "relative",
            transform: "rotate(-1.5deg)",
          }}>
            {/* Washi Tape */}
            <div className="washi-tape-top" />

            {/* Rubber Stamp */}
            <div className="stamp-badge" style={{ position: "absolute", bottom: "15px", right: "20px" }}>
              APPROVED
            </div>

            <p className="font-body" style={{
              fontSize: "1.15rem",
              color: "var(--navy)",
              lineHeight: 1.8,
              fontWeight: 800,
              marginBottom: "1.5rem",
            }}>
              {t(
                "Desarrollador Fullstack versátil, especializado en plataformas fintech de alta transaccionalidad, motores de IA para reclutamiento y aplicaciones web de alto rendimiento.",
                "Versatile Fullstack Developer specializing in high-concurrency fintech platforms, AI recruitment engines, and high-performance web applications."
              )}
            </p>

            <p className="font-body" style={{
              fontSize: "1.05rem",
              color: "#112233",
              lineHeight: 1.75,
              borderLeft: "5px solid var(--red)",
              background: "#EAE0D0",
              padding: "1.2rem 1.4rem",
              border: "1px solid var(--navy)",
              fontWeight: 700,
            }}>
              {t(
                "Manejo fluido entre backend (NestJS, FastAPI), frontend (Next.js 15, React 19), seguridad (2FA/TOTP, anti-replay) y modelos NLP (SpaCy, LangChain, ChromaDB).",
                "Proficient across backend (NestJS, FastAPI), frontend (Next.js 15, React 19), security (2FA/TOTP, anti-replay) and NLP models (SpaCy, LangChain, ChromaDB)."
              )}
            </p>
          </div>

          {/* BADGE STICKERS */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1.2rem",
            marginTop: "2.2rem",
          }}>
            {[
              { num: "2+", label: t("AÑOS EXP", "YEARS EXP"), bg: "var(--red)", color: "#FFF", rot: "-4deg" },
              { num: "3", label: t("EMPRESAS", "COMPANIES"), bg: "#FAF5EB", color: "var(--navy)", rot: "3deg" },
              { num: "100%", label: t("CÓDIGO PROPIO", "CUSTOM CODE"), bg: "var(--navy)", color: "#FFF", rot: "-2deg" },
            ].map(({ num, label, bg, color, rot }) => (
              <div key={label} style={{
                border: "3px solid var(--navy)",
                padding: "1rem",
                background: bg,
                color: color,
                boxShadow: "6px 6px 0px var(--red)",
                transform: `rotate(${rot})`,
                position: "relative",
              }}>
                <div className="font-display" style={{
                  fontSize: "3rem",
                  lineHeight: 0.85,
                  color: color,
                  textShadow: bg === "#FAF5EB" ? "3px 3px 0px var(--red)" : "none",
                }}>
                  {num}
                </div>
                <div className="font-mono" style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  marginTop: 8,
                  fontWeight: 900,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: POLAROID STYLE CONTACT CARD ── */}
        <div className="polaroid-frame" style={{
          transform: "rotate(2deg)",
          background: "#FAF5EB",
          color: "var(--navy)",
        }}>
          {/* Washi Tape Corner */}
          <div className="washi-tape-corner" />

          {/* Header Tag */}
          <div style={{ marginBottom: "1.5rem", borderBottom: "3px dashed var(--red)", paddingBottom: "1.2rem" }}>
            <span className="font-wild" style={{ fontSize: "2.2rem", color: "var(--red)", display: "block", transform: "rotate(-4deg)" }}>
              #GEELMZ ➔
            </span>
            <h3 className="font-display" style={{ fontSize: "3rem", color: "var(--navy)", lineHeight: 0.9, marginTop: 4 }}>
              ANGEL GOMEZ
            </h3>
            <div className="font-spray" style={{ fontSize: "1.8rem", color: "var(--red)", marginTop: 2 }}>
              aka Feelmz
            </div>
            <div className="font-tag" style={{
              marginTop: 10,
              display: "inline-block",
              background: "var(--navy)",
              color: "#FFF",
              padding: "0.2rem 0.8rem",
              fontSize: "1.2rem",
              transform: "rotate(-2deg)",
              boxShadow: "3px 3px 0px var(--red)",
            }}>
              [ FULLSTACK DEVELOPER &amp; IA ]
            </div>
          </div>

          {/* Contact Details List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { Icon: MapPin, text: "Puebla, México" },
              { Icon: Mail, text: "angelgom042@gmail.com" },
              { Icon: MessageSquare, text: "WA / Tel: +52 221 822 6470" },
            ].map(({ Icon, text }) => (
              <div key={text} className="font-mono" style={{
                display: "flex", alignItems: "center", gap: "0.8rem",
                fontSize: "0.88rem",
                color: "var(--navy)",
                background: "#EAE0D0",
                padding: "0.65rem 0.8rem",
                border: "2px solid var(--navy)",
                fontWeight: 900,
                transform: "rotate(-0.8deg)",
              }}>
                <Icon size={16} style={{ color: "var(--red)", flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div style={{ borderTop: "2px dashed var(--red)", paddingTop: "1.2rem", marginTop: "1.5rem" }}>
            <div className="font-mono" style={{
              fontSize: "0.72rem", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--red)",
              marginBottom: "0.6rem", fontWeight: 900,
            }}>
              [ {t("IDIOMAS", "LANGUAGES")} ]
            </div>
            <div style={{
              display: "flex", alignItems: "center", gap: "0.6rem",
              background: "#EAE0D0", padding: "0.6rem 0.8rem", border: "2px solid var(--navy)",
              transform: "rotate(1deg)",
            }}>
              <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--navy)", fontWeight: 800 }}>
                {t("Inglés Técnico (A2+ Lectura Documentación)", "Technical English (A2+ Docs Reading)")}
              </span>
            </div>
          </div>

          {/* Download CV CTA Button */}
          <div style={{ marginTop: "1.8rem" }}>
            <a
              href="https://drive.google.com/drive/folders/17lB8lK8cZgX2Yd2y1z-yX-w0"
              target="_blank"
              rel="noreferrer"
              className="btn-street-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {t("DESCARGAR CV", "DOWNLOAD CV")} ➔
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
