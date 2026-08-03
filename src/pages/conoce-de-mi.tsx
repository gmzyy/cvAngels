"use client"

import Head from "next/head"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import TopNavBar from "@/components/portfolio/TopNavBar"
import SiteFooter from "@/components/portfolio/SiteFooter"
import { Sparkles, Terminal, Flame, ShieldAlert, HeartHandshake, Send } from "lucide-react"

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

      <div style={{ background: "#060606", color: "#FFFFFF", minHeight: "100vh", position: "relative" }}>

        <TopNavBar />

        {/* Main Content */}
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "8rem 1.5rem 6rem" }}>

          {/* ══ HEADER HERO BANNER — MAXIMUM STREET VIBE ══ */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "5rem",
            borderBottom: "4px dashed var(--red)",
            paddingBottom: "4rem",
          }} className="md:!grid-cols-[1fr_320px]">

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.8rem" }}>
                <span className="sticker-box font-mono" style={{ background: "var(--red)", color: "#FFFFFF", transform: "rotate(-2deg)" }}>
                  // {t("AUTOBIOGRAFÍA & MANIFIESTO", "AUTOBIOGRAPHY & MANIFESTO")}
                </span>
                <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--grey)", letterSpacing: "0.2em" }}>
                  [FEELMZ_CORE_VISION]
                </span>
              </div>

              <h1 className="font-display" style={{
                fontSize: "clamp(4.2rem, 9.5vw, 8rem)",
                lineHeight: 0.82,
                color: "#FFFFFF",
                textShadow: "6px 6px 0px var(--red)",
                textTransform: "uppercase",
                margin: 0,
              }}>
                {t("MÁS ALLÁ DEL", "BEYOND THE")}
              </h1>
              <div className="font-spray" style={{
                fontSize: "clamp(3.8rem, 8.5vw, 7rem)",
                color: "var(--red)",
                lineHeight: 0.9,
                transform: "rotate(-4deg) translateY(-15px) translateX(10px)",
                WebkitTextStroke: "1.5px #FFFFFF",
                textShadow: "6px 6px 0px #000000",
                display: "inline-block",
              }}>
                {t("CÓDIGO CRUDO", "RAW CODE")}
              </div>

              <div className="tag-white font-marker" style={{
                marginTop: "2.2rem",
                fontSize: "2rem",
                transform: "rotate(-1deg)",
                boxShadow: "6px 6px 0px #000000",
                display: "inline-block",
                border: "2px solid #000",
              }}>
                ANGEL GOMEZ GARCIA // AKA GEELMZ
              </div>
            </div>

            {/* AVATAR ZINE BOX */}
            <div style={{
              background: "#FFFFFF",
              border: "4px solid #000000",
              boxShadow: "12px 12px 0px var(--red), 12px 12px 0px 4px #000000",
              transform: "rotate(3deg)",
              maxWidth: "280px",
              margin: "0 auto",
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: "-12px",
                right: "-10px",
                background: "var(--red)",
                color: "#FFF",
                padding: "2px 8px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 700,
                transform: "rotate(6deg)",
              }}>
                // ORIGINAL //
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image.png"
                alt="Geelmz Avatar"
                style={{ width: "100%", height: "auto", display: "block", padding: "1rem", filter: "contrast(1.2)" }}
              />
              <div className="font-mono" style={{ background: "#000000", color: "#FFFFFF", fontSize: "0.7rem", padding: "0.4rem 0.8rem", textAlign: "center", borderTop: "2px solid #000" }}>
                [GEELMZ // PUEBLA_MX]
              </div>
            </div>

          </div>

          {/* ══ ESSAY ZINE CARDS SECTION ══ */}
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
                  background: "#0C0C0C",
                  border: "4px solid #FFFFFF",
                  boxShadow: idx % 2 === 0 ? "10px 10px 0px var(--red), 10px 10px 0px 4px #000000" : "10px 10px 0px #FFFFFF, 10px 10px 0px 4px var(--red)",
                  padding: "2.2rem",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="sticker-box font-mono" style={{ background: "var(--red)", color: "#FFF" }}>
                    [{card.num}] // {card.tag}
                  </span>
                  <span className="font-spray" style={{ color: "var(--red)", fontSize: "1.4rem" }}>
                    #FEELMZ
                  </span>
                </div>

                <h3 className="font-display" style={{ fontSize: "2.4rem", color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem" }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: "1.08rem", color: "#DDDDDD", lineHeight: 1.8, fontFamily: "var(--font-body)", margin: 0 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </section>

          {/* ══ INTERESTS LIST ══ */}
          <section style={{ marginBottom: "5rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <span className="sticker-box font-mono" style={{ transform: "rotate(-1deg)" }}>
                // {t("PASIONES & ESTILO DE VIDA", "PASSIONS & LIFESTYLE")}
              </span>
              <h2 className="font-display" style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", color: "#FFFFFF", marginTop: "0.5rem" }}>
                {t("MIS", "MY")} <span className="font-spray" style={{ color: "var(--red)" }}>{t("INTERESES", "PASSIONS")}</span>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {intereses.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#0F0F0F",
                    border: "3px solid #FFFFFF",
                    boxShadow: "6px 6px 0px var(--red)",
                    padding: "1.4rem 1.6rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.2rem",
                  }}
                >
                  <span className="font-mono" style={{ color: "var(--red)", fontSize: "1.3rem", fontWeight: "bold", background: "#000", padding: "0.2rem 0.6rem", border: "1px solid #333" }}>
                    [0{idx + 1}]
                  </span>
                  <span style={{ fontSize: "1.05rem", color: "#FFFFFF", fontFamily: "var(--font-body)", fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ══ PHILOSOPHY QUOTE BANNER ══ */}
          <section
            style={{
              background: "#000000",
              border: "4px solid var(--red)",
              boxShadow: "12px 12px 0px #FFFFFF, 12px 12px 0px 4px #000000",
              padding: "3rem",
              marginBottom: "5rem",
              transform: "rotate(-1.5deg)",
              position: "relative",
            }}
          >
            <span className="sticker-box font-mono" style={{ marginBottom: "1rem", display: "inline-block" }}>
              // {t("MI FILOSOFÍA DE TRABAJO", "MY WORK PHILOSOPHY")}
            </span>
            <blockquote className="font-spray" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#FFFFFF", lineHeight: 1.3, margin: 0 }}>
              {t(
                "“Quiero que mi trabajo hable por mí. Cada proyecto, cada error y cada aprendizaje son un paso firme hacia la excelencia técnica y personal.”",
                "“I let my work speak for itself. Every project, every challenge, and every iteration is a concrete step toward technical excellence.”"
              )}
            </blockquote>
          </section>

          {/* ══ CONTACT CALLOUT BANNER ══ */}
          <section
            style={{
              background: "#0A0A0A",
              border: "4px solid #FFFFFF",
              boxShadow: "12px 12px 0px var(--red), 12px 12px 0px 4px #000000",
              padding: "4rem 2rem",
              textAlign: "center",
            }}
          >
            <h2 className="font-display" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", color: "#FFFFFF", lineHeight: 1, marginBottom: "1.2rem", textTransform: "uppercase" }}>
              {t("¿BUSCAS UN DEVELOPER CON CARÁCTER Y COMPROMISO?", "LOOKING FOR A DEV WITH GRIT AND DRIVE?")}
            </h2>
            <p style={{ color: "#CCCCCC", fontSize: "1.1rem", maxWidth: 700, margin: "0 auto 2.5rem", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
              {t(
                "Si necesitas a alguien que resuelva problemas reales sin dar excusas y entregue trabajo de máxima calidad, contáctame directo.",
                "If you need someone who solves real problems without excuses and delivers high-performance code, message me directly."
              )}
            </p>

            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="btn-street-primary"
                style={{ fontSize: "1.6rem" }}
              >
                {t("WHATSAPP DIRECTO", "DIRECT WHATSAPP")} →
              </a>
              <a
                href="mailto:angelgom042@gmail.com"
                className="btn-street-secondary"
                style={{ fontSize: "1.6rem" }}
              >
                {t("ENVIAR CORREO", "SEND EMAIL")} ↗
              </a>
            </div>
          </section>

        </main>

        <SiteFooter />

      </div>
    </>
  )
}
