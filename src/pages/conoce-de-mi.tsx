"use client"

import Head from "next/head"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import TopNavBar from "@/components/portfolio/TopNavBar"
import SiteFooter from "@/components/portfolio/SiteFooter"

export default function ConoceDeMiPage() {
  const { t } = useLanguage()

  const intereses = [
    { label: t("Diseño de interfaces (UI) y experiencias digitales con personalidad única, cruda y brutalista.", "UI Design and digital experiences with raw, brutalist, and unique personality.") },
    { label: t("Animaciones, interacciones web avanzadas y estética street underground sin censura.", "Animations, advanced web interactions, and uncensored underground street aesthetics.") },
    { label: t("Desarrollo personal, disciplina de hierro constante y superación de límites mentales.", "Personal growth, ironclad discipline, and constantly pushing mental limits.") },
    { label: t("Filosofía, lectura crítica y análisis profundo de la psicología humana.", "Philosophy, critical reading, and deep analysis of human psychology.") },
    { label: t("Música independiente, hip hop, punk y producciones sonoras con verdadero carácter.", "Independent music, hip hop, punk, and high-energy sonic productions.") },
    { label: t("Explorar lugares nuevos, cultura urbana de calle y vivir experiencias reales.", "Exploring new places, urban street culture, and living authentic experiences.") },
    { label: t("Crear productos propios, startups e iniciativas tecnológicas verdaderamente disruptivas.", "Building proprietary products, startups, and truly disruptive tech ventures.") },
  ]

  return (
    <>
      <Head>
        <title>{t("CONOCE DE MÍ — FEELMZ // GEELMZ", "ABOUT ME — FEELMZ // GEELMZ")}</title>
        <meta
          name="description"
          content={t(
            "Visión personal, filosofía de vida e intereses de Angel Gomez Garcia (Geelmz).",
            "Personal vision, philosophy of life, and passions of Angel Gomez Garcia (Geelmz)."
          )}
        />
      </Head>

      <div style={{ background: "var(--bg)", color: "var(--navy)", minHeight: "100vh", position: "relative" }}>

        <TopNavBar />

        {/* Main Content */}
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "8rem 1.5rem 6rem" }}>

          {/* ══ HEADER HERO BANNER — RAW PUNK ZINE ══ */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "5rem",
            borderBottom: "4px dashed var(--red)",
            paddingBottom: "4rem",
            position: "relative",
          }} className="md:!grid-cols-[1fr_320px]">

            {/* Halftone Dot Accent */}
            <div className="halftone-bg" style={{ position: "absolute", top: "-20px", left: "-20px", width: "260px", height: "130px", pointerEvents: "none" }} />

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.8rem" }}>
                <span className="font-tag" style={{
                  background: "var(--red)",
                  color: "#FFFFFF",
                  padding: "0.3rem 1.2rem",
                  fontSize: "1.3rem",
                  transform: "rotate(-2deg)",
                  boxShadow: "4px 4px 0px var(--navy)",
                  border: "2px solid var(--navy)",
                }}>
                  // {t("AUTOBIOGRAFÍA & MANIFIESTO", "AUTOBIOGRAPHY & MANIFESTO")}
                </span>
                <span className="stamp-badge">
                  ONLY ONE
                </span>
                <span className="handwritten-note font-marker">
                  Uncensored Journal ➔
                </span>
              </div>

              <h1 className="spray-drippy-title" style={{
                fontSize: "clamp(3.8rem, 9.5vw, 8rem)",
                color: "var(--navy)",
                WebkitTextStroke: "2px var(--red)",
                textShadow: "6px 6px 0px var(--red)",
                margin: 0,
              }}>
                {t("MÁS ALLÁ DEL", "BEYOND THE")}
              </h1>
              <div className="font-spray" style={{
                fontSize: "clamp(3.5rem, 8.5vw, 7rem)",
                color: "var(--red)",
                lineHeight: 0.9,
                transform: "rotate(-4deg) translateY(-15px) translateX(10px)",
                WebkitTextStroke: "2px var(--navy)",
                textShadow: "6px 6px 0px var(--navy)",
                display: "inline-block",
              }}>
                {t("CÓDIGO CRUDO", "RAW CODE")}
              </div>

              <div className="font-tag" style={{
                marginTop: "2.2rem",
                fontSize: "1.8rem",
                transform: "rotate(-2deg)",
                boxShadow: "6px 6px 0px var(--red)",
                display: "inline-block",
                border: "3px solid var(--navy)",
                background: "var(--navy)",
                color: "#FFFFFF",
                padding: "0.3rem 1.2rem",
              }}>
                ANGEL GOMEZ GARCIA
              </div>
            </div>

            {/* AVATAR POLAROID FRAME WITH WASHI TAPE */}
            <div className="polaroid-frame" style={{
              transform: "rotate(3deg)",
              maxWidth: "290px",
              margin: "0 auto",
            }}>
              <div className="washi-tape-corner" />
              <div className="stamp-badge" style={{ position: "absolute", top: "15px", right: "15px" }}>
                ORIGINAL
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image.png"
                alt="Geelmz Avatar"
                style={{ width: "100%", height: "auto", display: "block", padding: "0.5rem", filter: "contrast(1.2)" }}
              />
              <div className="polaroid-caption">
                [PUEBLA_MX] ➔
              </div>
            </div>

          </div>

          {/* ══ ESSAY PUNK ZINE CARDS WITH WASHI TAPE ══ */}
          <section style={{ marginBottom: "5rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              {
                num: "01",
                tag: t("PROPÓSITO", "PURPOSE"),
                title: t("CÓDIGO CON CARÁCTER E IDENTIDAD", "CODE WITH CHARACTER & IDENTITY"),
                text: t(
                  "Para mí, desarrollar software va mucho más allá de escribir código. Es una forma de crear, resolver problemas reales y convertir ideas complejas en productos digitales con personalidad, rendimiento brutal y carácter único.",
                  "To me, developing software goes far beyond writing code. It's a way of creating, solving real-world problems, and turning complex ideas into digital products with personality, brutal performance, and unique character."
                ),
              },
              {
                num: "02",
                tag: t("MENTALIDAD", "MINDSET"),
                title: t("PSICOLOGÍA, FILOSOFÍA & DISCIPLINA DE HIERRO", "PSYCHOLOGY, PHILOSOPHY & IRON DISCIPLINE"),
                text: t(
                  "Me interesa profundamente entender cómo funciona la mente humana. Disfruto leer sobre psicología, filosofía y desarrollo personal porque creo que el crecimiento técnico debe ir de la mano con la madurez mental. Cuestiono constantemente mis propias ideas, aprendo de los errores y mantengo una disciplina constante sin dar excusas.",
                  "I am deeply interested in understanding how the human mind works. I enjoy reading about psychology, philosophy, and personal growth because technical execution must go hand in hand with mental clarity and relentless discipline."
                ),
              },
              {
                num: "03",
                tag: t("CULTURA", "CULTURE"),
                title: t("MÚSICA INDEPENDIENTE & GRÁFICA DE CALLE", "INDEPENDENT MUSIC & STREET GRAPHICS"),
                text: t(
                  "La música y la estética urbana ocupan un lugar central en mi proceso creativo. Las letras crudas, la gráfica de calle y el diseño agresivo me motivan a construir software que destaque sobre lo común y desafíe la monotonía corporativa.",
                  "Music and urban aesthetics sit at the core of my creative process. Raw lyrics, street graphics, and bold design motivate me to build software that breaks through generic noise and corporate monotony."
                ),
              },
              {
                num: "04",
                tag: t("CRAFTSMANSHIP", "CRAFTSMANSHIP"),
                title: t("ARQUITECTURA SÓLIDA & UI HIGH-PERFORMANCE", "SOLID ARCHITECTURE & HIGH-PERFORMANCE UI"),
                text: t(
                  "Me apasiona el diseño de interfaces (UI/UX) con enfoque en rendimiento. Cuido cada detalle: la jerarquía tipográfica, el contraste alto, el micro-feedback y la solidez arquitectónica que respalda a cada endpoint.",
                  "I'm passionate about UI/UX design focused on speed and impact. I care about every single detail: typographic hierarchy, crisp contrast, micro-feedback, and the robust architecture powering every endpoint."
                ),
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FAF5EB",
                  border: "4px solid var(--navy)",
                  boxShadow: idx % 2 === 0 ? "12px 12px 0px var(--red)" : "12px 12px 0px var(--navy)",
                  padding: "2.5rem 2rem",
                  position: "relative",
                  color: "var(--navy)",
                  transform: idx % 2 === 0 ? "rotate(-1.2deg)" : "rotate(1.2deg)",
                }}
              >
                {/* Washi Tape */}
                <div className="washi-tape-top" />

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.2rem",
                  borderBottom: "3px dashed var(--red)",
                  paddingBottom: "1rem",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <span className="font-mono" style={{ background: "var(--red)", color: "#FFFFFF", padding: "3px 10px", fontSize: "0.8rem", fontWeight: 900 }}>
                      SECTION_{card.num}
                    </span>
                    <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--red)", letterSpacing: "0.15em", fontWeight: 900 }}>
                      // {card.tag}
                    </span>
                  </div>
                  <span className="font-display" style={{ fontSize: "2.5rem", color: "var(--red)" }}>
                    #{card.num}
                  </span>
                </div>

                <h2 className="font-display" style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "var(--navy)",
                  marginBottom: "1rem",
                  lineHeight: 1.05,
                }}>
                  {card.title}
                </h2>

                <p className="font-body" style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "#112233",
                  fontWeight: 700,
                  margin: 0,
                }}>
                  {card.text}
                </p>
              </div>
            ))}
          </section>

          {/* ══ PASSIONS & INTERESTS GRID ══ */}
          <section style={{ marginBottom: "5rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <span className="font-tag" style={{ background: "var(--navy)", color: "#FFF", padding: "0.3rem 1.2rem", fontSize: "1.3rem", transform: "rotate(-1deg)" }}>
                // {t("INTERESES & INTERECCIONES", "PASSIONS & DRIVES")}
              </span>
              <h2 className="font-display" style={{ fontSize: "3.8rem", color: "var(--navy)", marginTop: "0.5rem", margin: 0, lineHeight: 0.9 }}>
                {t("LO QUE ME MUEVE", "WHAT DRIVES ME")}
              </h2>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.4rem",
            }}>
              {intereses.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#FAF5EB",
                    border: "3px solid var(--navy)",
                    boxShadow: "8px 8px 0px var(--red)",
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    color: "var(--navy)",
                    position: "relative",
                    transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    background: "var(--red)",
                    color: "#FFF",
                    padding: "3px 8px",
                    fontWeight: 900,
                    flexShrink: 0,
                  }}>
                    #{idx + 1}
                  </span>
                  <p className="font-body" style={{
                    fontSize: "0.98rem",
                    lineHeight: 1.6,
                    color: "#112233",
                    fontWeight: 700,
                    margin: 0,
                  }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ══ CONTACT FOOTER CTA CARD WITH WASHI TAPE & STAMP ══ */}
          <section style={{
            background: "#FAF5EB",
            border: "4px solid var(--navy)",
            boxShadow: "14px 14px 0px var(--red)",
            padding: "3.5rem 2rem",
            textAlign: "center",
            color: "var(--navy)",
            position: "relative",
            transform: "rotate(-1deg)",
          }}>
            <div className="washi-tape-top" />
            <div className="stamp-badge" style={{ position: "absolute", top: "20px", right: "20px" }}>
              LET'S GO
            </div>

            <div className="font-spray" style={{ fontSize: "3rem", color: "var(--red)", marginBottom: "0.5rem" }}>
              {t("¿TIENES UN PROYECTO O UNA IDEA?", "HAVE A PROJECT OR IDEA?")}
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)", color: "var(--navy)", lineHeight: 0.95, marginBottom: "1.8rem" }}>
              {t("CONSTRUYAMOS ALGO BRUTAL", "LET'S BUILD SOMETHING BRUTAL")}
            </h2>

            <div style={{ display: "flex", justifyContent: "center", gap: "1.4rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="btn-street-primary"
              >
                WHATSAPP ➔
              </a>
              <Link href="/#hero" className="btn-street-secondary">
                ← {t("VOLVER AL INICIO", "BACK TO HOME")}
              </Link>
            </div>
          </section>

        </main>

        <SiteFooter />
      </div>
    </>
  )
}
