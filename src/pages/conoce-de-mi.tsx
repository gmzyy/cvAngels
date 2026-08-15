"use client"

import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import TopNavBar from "@/components/portfolio/TopNavBar"
import SiteFooter from "@/components/portfolio/SiteFooter"
import { Terminal, ShieldCheck, Cpu, ArrowLeft, MessageSquare, Sparkles } from "lucide-react"

export default function ConoceDeMiPage() {
  const { t } = useLanguage()

  const intereses = [
    { label: t("Diseño de interfaces (UI) y experiencias digitales con estética cyber futurista de alta precisión.", "UI Design and high-precision cyber futuristic digital experiences.") },
    { label: t("Animaciones web avanzadas, interacciones reactivas y rendimiento sin concesiones.", "Advanced web animations, reactive interactions, and uncompromised performance.") },
    { label: t("Desarrollo personal, disciplina de hierro constante y superación de límites mentales.", "Personal growth, ironclad discipline, and constantly pushing mental limits.") },
    { label: t("Filosofía, lectura crítica y análisis profundo de la psicología humana.", "Philosophy, critical reading, and deep analysis of human psychology.") },
    { label: t("Música electrónica independiente, synthwave, industrial y producciones sonoras con carácter.", "Independent electronic music, synthwave, industrial, and atmospheric sonic productions.") },
    { label: t("Explorar lugares nuevos, cultura urbana contemporánea y vivir experiencias reales.", "Exploring new places, contemporary urban culture, and living authentic experiences.") },
    { label: t("Crear productos propios, startups e iniciativas tecnológicas verdaderamente disruptivas.", "Building proprietary products, startups, and truly disruptive tech ventures.") },
  ]

  return (
    <>
      <Head>
        <title>{t("CONOCE DE MÍ — GEELMZ // BIO", "ABOUT ME — GEELMZ // BIO")}</title>
        <meta
          name="description"
          content={t(
            "Visión personal, filosofía de vida e intereses de Angel Gomez Garcia (GEELMZ).",
            "Personal vision, philosophy of life, and passions of Angel Gomez Garcia (GEELMZ)."
          )}
        />
      </Head>

      <div style={{ background: "transparent", color: "#F1F5F9", minHeight: "100vh", position: "relative" }}>
        <TopNavBar />

        {/* Main Content */}
        <main style={{ maxWidth: 1200, margin: "0 auto", padding: "7rem 1.5rem 6rem" }}>

          {/* ══ HERO FLOATING ABSTRACT BANNER WITH IMAGE.PNG ══ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
              marginBottom: "5rem",
              paddingBottom: "3rem",
              position: "relative",
            }}
            className="md:!grid-cols-[1fr_340px]"
          >
            {/* LEFT: FLOATING TYPOGRAPHY */}
            <div>
              <h1
                className="spray-drippy-title"
                style={{
                  fontSize: "clamp(3.2rem, 8vw, 6.8rem)",
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 0.9,
                }}
              >
                {t("MÁS ALLÁ DEL", "BEYOND THE")}
              </h1>
              <div
                className="font-display glitch-text"
                style={{
                  fontSize: "clamp(2.8rem, 7.5vw, 6rem)",
                  color: "#94A3B8",
                  lineHeight: 0.9,
                  display: "block",
                  marginTop: "0.2rem",
                }}
              >
                {t("CÓDIGO & SISTEMAS", "CODE & SYSTEMS")}
              </div>

              <p style={{ color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.8, marginTop: "1.8rem", maxWidth: "680px", fontFamily: "var(--font-body)" }}>
                {t(
                  "Ingeniero de Software y Desarrollador Fullstack motivado por la creación de soluciones digitales que combinan alto rendimiento, arquitectura bancaria y estética futurista.",
                  "Fullstack Engineer motivated by digital solutions combining high performance, banking architecture, and futuristic design."
                )}
              </p>
            </div>

            {/* RIGHT: ABSTRACT FLOATING ARTWORK WITH IMAGE.PNG */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Abstract Concentric Glass Aura */}
              <div
                style={{
                  position: "absolute",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />

              {/* Glowing Ambient Ring */}
              <div
                style={{
                  position: "absolute",
                  width: "290px",
                  height: "290px",
                  borderRadius: "50%",
                  border: "1px stroke rgba(255, 255, 255, 0.25)",
                  borderStyle: "dashed",
                  pointerEvents: "none",
                }}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image.png"
                alt="GEELMZ Abstract Avatar"
                style={{
                  width: "240px",
                  height: "240px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 35px rgba(255, 255, 255, 0.35))",
                  position: "relative",
                  zIndex: 2,
                }}
              />
            </motion.div>
          </div>

          {/* ══ UN-BOXED FLOATING MANIFESTO ESSAYS ══ */}
          <section style={{ marginBottom: "6rem", display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {[
              {
                num: "01",
                tag: t("PROPÓSITO", "PURPOSE"),
                title: t("CÓDIGO CON ARQUITECTURA E IDENTIDAD", "CODE WITH ARCHITECTURE & IDENTITY"),
                text: t(
                  "Para mí, desarrollar software va mucho más allá de escribir código. Es una forma de crear, resolver problemas reales y convertir ideas complejas en productos digitales con rendimiento brutal, máxima seguridad y carácter único.",
                  "To me, developing software goes far beyond writing code. It's a way of creating, solving real-world problems, and turning complex ideas into digital products with brutal performance, top security, and unique character."
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
                tag: t("CRAFTSMANSHIP", "CRAFTSMANSHIP"),
                title: t("ARQUITECTURA SÓLIDA & UI HIGH-PERFORMANCE", "SOLID ARCHITECTURE & HIGH-PERFORMANCE UI"),
                text: t(
                  "Me apasiona el diseño de interfaces (UI/UX) con enfoque en rendimiento. Cuido cada detalle: la jerarquía tipográfica, el contraste alto, el micro-feedback y la solidez arquitectónica que respalda a cada endpoint.",
                  "I'm passionate about UI/UX design focused on speed and impact. I care about every single detail: typographic hierarchy, crisp contrast, micro-feedback, and the robust architecture powering every endpoint."
                ),
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  padding: "1rem 0",
                  position: "relative",
                  color: "#F1F5F9",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <span className="font-mono" style={{ background: "rgba(255, 255, 255, 0.12)", color: "#FFFFFF", padding: "3px 12px", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 700, border: "1px solid rgba(255,255,255,0.2)" }}>
                    // {card.tag}
                  </span>
                  <span className="font-mono" style={{ fontSize: "0.8rem", color: "#94A3B8" }}>
                    #{card.num}
                  </span>
                </div>

                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                    color: "#FFFFFF",
                    marginBottom: "1.2rem",
                    lineHeight: 1.05,
                  }}
                >
                  {card.title}
                </h2>

                <p
                  style={{
                    fontSize: "1.08rem",
                    lineHeight: 1.8,
                    color: "#CBD5E1",
                    fontFamily: "var(--font-body)",
                    margin: 0,
                    maxWidth: "920px",
                  }}
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </section>

          {/* ══ UN-BOXED FLOATING PASSIONS ══ */}
          <section style={{ marginBottom: "6rem" }}>
            <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "0.4rem 1.2rem", borderRadius: "9999px", marginBottom: "1rem" }}>
                <Sparkles size={14} style={{ color: "#FFFFFF" }} />
                <span className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em" }}>
                  // {t("INTERESES & DRIVES", "PASSIONS & DRIVES")}
                </span>
              </div>
              <h2 className="spray-drippy-title" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 0.9 }}>
                {t("LO QUE ME MUEVE", "WHAT DRIVES ME")}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.4rem",
              }}
            >
              {intereses.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  style={{
                    background: "rgba(10, 14, 26, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "24px",
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.78rem",
                      background: "rgba(255, 255, 255, 0.12)",
                      color: "#FFFFFF",
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    #{idx + 1}
                  </span>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "#CBD5E1",
                      fontFamily: "var(--font-body)",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ══ UN-BOXED FLOATING CALL TO ACTION ══ */}
          <section
            style={{
              padding: "4rem 1.5rem",
              textAlign: "center",
              color: "#FFFFFF",
              position: "relative",
            }}
          >
            <div className="font-mono" style={{ fontSize: "0.85rem", color: "#94A3B8", marginBottom: "0.5rem", fontWeight: 700 }}>
              // {t("¿TIENES UN PROYECTO O UNA IDEA?", "HAVE A PROJECT OR IDEA?")}
            </div>
            <h2 className="spray-drippy-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1, marginBottom: "2rem" }}>
              {t("CONSTRUYAMOS ALGO BRUTAL", "LET'S BUILD SOMETHING GREAT")}
            </h2>

            <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/522218226470"
                target="_blank"
                rel="noreferrer"
                className="font-mono"
                style={{
                  background: "rgba(255, 255, 255, 0.22)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  color: "#FFFFFF",
                  padding: "0.8rem 2rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <MessageSquare size={16} /> WHATSAPP ➔
              </a>
              <Link
                href="/#hero"
                className="font-mono"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#CBD5E1",
                  padding: "0.8rem 2rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <ArrowLeft size={16} /> {t("VOLVER AL INICIO", "BACK TO HOME")}
              </Link>
            </div>
          </section>

        </main>

        <SiteFooter />
      </div>
    </>
  )
}
