"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import TextMorph from "./TextMorph"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { OrbitalRing, FloatingPolyhedron } from "./GeometricAccents"

export default function HeroSection() {
  const { t, lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  const morphWords =
    lang === "es"
      ? "DESARROLLADOR FULLSTACK\nARQUITECTO DE IA & LLMs\nSISTEMAS SPEI & FINTECH\nFRONTENDS HIGH-PERFORMANCE\nCIUDADANO DIGITAL // PUEBLA"
      : "FULLSTACK DEVELOPER\nAI & LLMs ARCHITECT\nSPEI & FINTECH SYSTEMS\nHIGH-PERFORMANCE FRONTENDS\nDIGITAL CITIZEN // PUEBLA"

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        overflow: "hidden",
        padding: "4rem 1.5rem 5rem",
      }}
    >
      {/* ══ DYNAMIC GEOMETRIC ORBITAL ACCENTS ══ */}
      <OrbitalRing size={520} top="20%" left="50%" opacity={0.2} />
      <FloatingPolyhedron size={110} style={{ top: "15%", left: "10%" }} />
      <FloatingPolyhedron size={95} style={{ bottom: "20%", right: "12%" }} />

      {/* ══ AMBIENT LIGHT AURA ══ */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(95vw, 1000px)",
          height: "450px",
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.12), transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ══ HERO MINIMALIST CONTAINER ══ */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "2.4rem",
        }}
      >
        {/* ── GIANT GEELMZ GRAFFITI ARTWORK BANNER ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/geelmz-logo.png"
              alt="GEELMZ Graffiti Artwork"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "440px",
                objectFit: "contain",
                filter: "invert(1) drop-shadow(0 0 35px rgba(255, 255, 255, 0.55)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.2))",
                transition: "all 0.3s ease",
              }}
            />
          </motion.div>

          {/* Dynamic Text Morph Pill Subtitle */}
          <div
            style={{
              marginTop: "0.8rem",
              width: "100%",
              maxWidth: "760px",
              height: "60px",
              background: "rgba(10, 14, 26, 0.85)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "9999px",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 1.5rem",
            }}
          >
            <TextMorph
              words={morphWords}
              color="#FFFFFF"
              transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
              font={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 21,
                letterSpacing: "0.06em",
                textAlign: "center",
              }}
            />
          </div>
        </motion.div>

        {/* ── CLEAN & CONCISE ELEGANT BIO STATEMENT ── */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            maxWidth: "720px",
            color: "#CBD5E1",
            fontSize: "1.12rem",
            lineHeight: 1.8,
            fontFamily: "var(--font-body)",
            margin: "0 auto",
            fontWeight: 400,
          }}
        >
          {t(
            "Desarrollador Fullstack e Ingeniero de Software especializado en plataformas financieras de alta velocidad (SPEI/2FA), integración de Inteligencia Artificial (LLMs/SpaCy) e interfaces web reactivas de alto nivel.",
            "Fullstack Engineer specialized in high-concurrency fintech platforms (SPEI/2FA), Artificial Intelligence integrations (LLMs/SpaCy), and reactive web platforms."
          )}
        </motion.p>

        {/* ── HIGH-IMPACT ACTION BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "flex",
            gap: "1.2rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.4rem",
          }}
        >
          <a
            href="#portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.9rem 2.2rem",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.08))",
              color: "#FFFFFF",
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "9999px",
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.22)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            {t("EXPLORAR PROYECTOS", "EXPLORE PROJECTS")} <ArrowRight size={18} />
          </a>

          <Link
            href="/conoce-de-mi"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.9rem 2.2rem",
              background: "rgba(10, 14, 26, 0.85)",
              color: "#FFFFFF",
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "9999px",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.6)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            {t("CONOCE DE MÍ", "KNOW MORE")} <Sparkles size={18} />
          </Link>

          <a
            href="/CV_Angel_GG.pdf"
            download="CV_Angel_GG.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.9rem 1.8rem",
              background: "rgba(255, 255, 255, 0.08)",
              color: "#CBD5E1",
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "9999px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <Download size={18} /> CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
