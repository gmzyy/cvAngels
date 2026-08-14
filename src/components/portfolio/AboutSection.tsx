"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Mail, MessageSquare, GraduationCap, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { TornCard, GraffitiCircle, SprayBlob } from "./TornCard"

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
        padding: "7rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        overflow: "visible",
      }}
    >
      {/* Background Graffiti Accents */}
      <GraffitiCircle size={350} color="#A31621" opacity={0.06} style={{ top: "0px", left: "-60px", zIndex: 0 }} />
      <GraffitiCircle size={280} color="#0F1B33" opacity={0.07} style={{ bottom: "20px", right: "-40px", zIndex: 0 }} />

      {/* ══ HEADER CANVAS BANNER ══ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "4.5rem", position: "relative", zIndex: 5 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.35rem 1.4rem",
            fontSize: "1.3rem",
            transform: "rotate(-3deg)",
            boxShadow: "5px 5px 0px var(--navy)",
            border: "2px solid var(--navy)",
          }}>
            // {t("MANIFIESTO & PROFILE", "MANIFESTO & PROFILE")}
          </span>
          <span className="stamp-badge animate-stamp" style={{ transform: "rotate(5deg)" }}>
            REAL TALK
          </span>
          <span className="handwritten-note font-marker">
            Street Verified ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3.2rem, 9vw, 8rem)",
          color: "var(--red)",
          margin: 0,
        }}>
          {t("INGENIERÍA", "SOFTWARE")}
        </h2>

        <div className="font-spray" style={{
          fontSize: "clamp(2.6rem, 8vw, 7rem)",
          color: "var(--navy)",
          lineHeight: 0.9,
          transform: "rotate(-4.5deg) translateY(-14px) translateX(20px)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          display: "inline-block",
        }}>
          &amp; {t("DESARROLLO FULLSTACK", "FULLSTACK DEV")}
        </div>
      </motion.div>

      {/* ══ STREET CANVAS COLLAGE LAYOUT ══ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3.5rem", alignItems: "center", position: "relative", zIndex: 10 }} className="lg:!grid-cols-[1.1fr_0.9fr]">

        {/* ── LEFT: MANIFESTO POSTER ── */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -2 }}
          animate={inView ? { opacity: 1, x: 0, rotate: -1.5 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <TornCard
            shape="torn3"
            shadow="red"
            rotate={-2}
            floatingElements={
              <>
                <div className="washi-tape-top" style={{ top: "-18px", left: "15%" }} />
                <div className="stamp-badge animate-stamp" style={{ position: "absolute", bottom: "-15px", right: "25px", zIndex: 25, transform: "rotate(-8deg)" }}>
                  APPROVED
                </div>
              </>
            }
          >
            <p className="font-body" style={{
              fontSize: "1.2rem",
              color: "var(--navy)",
              lineHeight: 1.85,
              fontWeight: 800,
              marginBottom: "1.8rem",
            }}>
              {t(
                "Desarrollador Fullstack versátil, especializado en plataformas fintech de alta transaccionalidad, motores de IA para reclutamiento y aplicaciones web de alto rendimiento.",
                "Versatile Fullstack Developer specializing in high-concurrency fintech platforms, AI recruitment engines, and high-performance web applications."
              )}
            </p>

            <p className="font-body" style={{
              fontSize: "1.08rem",
              color: "#112233",
              lineHeight: 1.75,
              borderLeft: "6px solid var(--red)",
              background: "#EAE0D0",
              padding: "1.3rem 1.5rem",
              border: "2px solid var(--navy)",
              fontWeight: 700,
              transform: "rotate(0.5deg)",
              boxShadow: "4px 4px 0px var(--navy)",
            }}>
              {t(
                "Manejo fluido entre backend (NestJS, FastAPI), frontend (Next.js 15, React 19), seguridad (2FA/TOTP, anti-replay) y modelos NLP (SpaCy, LangChain, ChromaDB).",
                "Proficient across backend (NestJS, FastAPI), frontend (Next.js 15, React 19), security (2FA/TOTP, anti-replay) and NLP models (SpaCy, LangChain, ChromaDB)."
              )}
            </p>
          </TornCard>

          {/* OVERLAPPING STATS STICKERS PINNED TO THE MANIFESTO */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1.2rem",
            marginTop: "2.5rem",
            position: "relative",
            zIndex: 15,
          }}>
            {[
              { num: "2+", label: t("AÑOS EXP", "YEARS EXP"), bg: "var(--red)", color: "#FFF", rot: "-5deg", shape: "tagLeft" as const },
              { num: "3", label: t("EMPRESAS", "COMPANIES"), bg: "#FAF5EB", color: "var(--navy)", rot: "4deg", shape: "ticketNotch" as const },
              { num: "100%", label: t("CÓDIGO PROPIO", "CUSTOM CODE"), bg: "var(--navy)", color: "#FFF", rot: "-3deg", shape: "slashRight" as const },
            ].map(({ num, label, bg, color, rot, shape }) => (
              <TornCard
                key={label}
                shape={shape}
                shadow="none"
                rotate={parseFloat(rot)}
                innerPadding="0.8rem 1rem"
                innerStyle={{ background: bg, color: color, border: "3px solid var(--navy)" }}
              >
                <div className="font-display" style={{
                  fontSize: "3.2rem",
                  lineHeight: 0.85,
                  color: color,
                  textShadow: bg === "#FAF5EB" ? "3px 3px 0px var(--red)" : "none",
                }}>
                  {num}
                </div>
                <div className="font-mono" style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  marginTop: 8,
                  fontWeight: 900,
                }}>
                  {label}
                </div>
              </TornCard>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: POLAROID ID STICKER CARD ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 3 }}
          animate={inView ? { opacity: 1, x: 0, rotate: 2.5 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ position: "relative" }}
        >
          <TornCard
            shape="tagLeft"
            shadow="navy"
            rotate={3}
            floatingElements={
              <>
                <div className="washi-tape-corner" style={{ top: "-16px", left: "-14px", zIndex: 25 }} />
                <SprayBlob
                  variant={1}
                  color="#A31621"
                  style={{
                    position: "absolute",
                    top: "-22px",
                    right: "-12px",
                    zIndex: 25,
                    width: "4.2rem",
                    height: "4.2rem",
                    transform: "rotate(12deg)",
                  }}
                >
                  <span className="font-mono" style={{ fontSize: "0.65rem", textAlign: "center", lineHeight: 1.1 }}>
                    DEV ID<br />#042
                  </span>
                </SprayBlob>
              </>
            }
          >
            {/* Header Tag */}
            <div style={{ marginBottom: "1.6rem", borderBottom: "3px dashed var(--red)", paddingBottom: "1.4rem" }}>
              <span className="font-wild" style={{ fontSize: "2.4rem", color: "var(--red)", display: "block", transform: "rotate(-4deg)" }}>
                #GEELMZ ➔
              </span>
              <h3 className="font-display" style={{ fontSize: "3.2rem", color: "var(--navy)", lineHeight: 0.9, marginTop: 4 }}>
                ANGEL GOMEZ
              </h3>
              <div className="font-spray" style={{ fontSize: "1.9rem", color: "var(--red)", marginTop: 2 }}>
                aka Feelmz
              </div>
              <div className="font-tag" style={{
                marginTop: 12,
                display: "inline-block",
                background: "var(--navy)",
                color: "#FFF",
                padding: "0.25rem 0.9rem",
                fontSize: "1.2rem",
                transform: "rotate(-2deg)",
                boxShadow: "4px 4px 0px var(--red)",
              }}>
                [ FULLSTACK DEVELOPER &amp; IA ]
              </div>
            </div>

            {/* Contact Details List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { Icon: MapPin, text: "Puebla, México" },
                { Icon: Mail, text: "angelgom042@gmail.com" },
                { Icon: MessageSquare, text: "WA / Tel: +52 221 822 6470" },
              ].map(({ Icon, text }, idx) => (
                <div key={text} className="font-mono" style={{
                  display: "flex", alignItems: "center", gap: "0.8rem",
                  fontSize: "0.88rem",
                  color: "var(--navy)",
                  background: "#EAE0D0",
                  padding: "0.7rem 0.9rem",
                  border: "2px solid var(--navy)",
                  fontWeight: 900,
                  transform: `rotate(${idx % 2 === 0 ? -1 : 1}deg)`,
                  boxShadow: "3px 3px 0px var(--navy)",
                }}>
                  <Icon size={16} style={{ color: "var(--red)", flexShrink: 0 }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Languages Section */}
            <div style={{ borderTop: "2px dashed var(--red)", paddingTop: "1.2rem", marginTop: "1.6rem" }}>
              <div className="font-mono" style={{
                fontSize: "0.72rem", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--red)",
                marginBottom: "0.6rem", fontWeight: 900,
              }}>
                [ {t("IDIOMAS", "LANGUAGES")} ]
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                background: "#EAE0D0", padding: "0.65rem 0.9rem", border: "2px solid var(--navy)",
                transform: "rotate(1deg)",
                boxShadow: "3px 3px 0px var(--navy)",
              }}>
                <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--navy)", fontWeight: 800 }}>
                  {t("Nivel Técnico A2", "Technical Level A2")}
                </span>
              </div>
            </div>

            {/* Download CV CTA Button */}
            <div style={{ marginTop: "1.8rem" }}>
              <a
                href="/CV_Angel_GG.pdf"
                download="CV_Angel_GG.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-street-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t("DESCARGAR CV", "DOWNLOAD CV")} ➔
              </a>
            </div>
          </TornCard>
        </motion.div>

      </div>
    </section>
  )
}
