"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Mail, MessageSquare, ShieldCheck, Terminal, Cpu, Download, ArrowRight, Sparkles } from "lucide-react"
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
      }}
    >
      {/* ══ HEADER BANNER ══ */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "3.5rem", textAlign: "center" }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "0.4rem 1.2rem", borderRadius: "9999px", marginBottom: "1rem" }}>
          <Sparkles size={14} style={{ color: "#FFFFFF" }} />
          <span className="font-mono" style={{ fontSize: "0.78rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em" }}>
            // {t("PERFIL & ARQUITECTURA", "PROFILE & ARCHITECTURE")}
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{ fontSize: "clamp(1.7rem, 6.5vw, 5.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
          ANGEL GOMEZ GARCIA
        </h2>
      </motion.div>

      {/* ══ DIVERSE GEOMETRIC CONTENT CONTAINERS (CIRCULAR, UN-BOXED FLOATING, HEXAGONAL) ══ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
        className="lg:!grid-cols-3"
      >
        {/* ITEM 1: CIRCULAR GLASS ENCLAVE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "min(100%, 340px)",
              height: "340px",
              borderRadius: "50%",
              background: "rgba(10, 14, 26, 0.85)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.85), inset 0 0 30px rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "2rem",
              position: "relative",
            }}
          >
            {/* Concentric Circle Sheen */}
            <div style={{ position: "absolute", inset: "12px", borderRadius: "50%", border: "1px stroke rgba(255, 255, 255, 0.2)", borderStyle: "dashed" }} />
            
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.8rem" }}>
              <ShieldCheck size={22} style={{ color: "#FFFFFF" }} />
            </div>
            
            <span className="font-mono" style={{ fontSize: "0.7rem", color: "#94A3B8" }}>// SPEI &amp; FINTECH</span>
            <h3 className="font-display" style={{ fontSize: "1.5rem", color: "#FFFFFF", marginTop: "0.3rem", marginBottom: "0.6rem" }}>
              FINTECH 2FA
            </h3>
            <p style={{ color: "#CBD5E1", fontSize: "0.88rem", lineHeight: 1.6, margin: 0, fontFamily: "var(--font-body)" }}>
              {t(
                "Integración SPEI en tiempo real, autenticación 2FA/TOTP y encriptación bancaria de datos.",
                "Real-time SPEI integration, 2FA/TOTP authentication, and banking data encryption."
              )}
            </p>
          </div>
        </motion.div>

        {/* ITEM 2: UN-BOXED FLOATING FREE TEXT (FLOTANDO SIN NADA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.2rem",
            padding: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Cpu size={22} style={{ color: "#FFFFFF" }} />
            <span className="font-mono" style={{ fontSize: "0.85rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.1em" }}>
              // IA &amp; MOTOR RAG (FLOTANTE)
            </span>
          </div>

          <h3 className="font-display" style={{ fontSize: "2.4rem", color: "#FFFFFF", margin: 0, lineHeight: 1 }}>
            INTELIGENCIA ARTIFICIAL
          </h3>

          <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.8, margin: 0, fontFamily: "var(--font-body)" }}>
            {t(
              "Orquestación de pipelines NLP con SpaCy para lectura inteligente de documentos y CVs, vectores en ChromaDB y conexión de modelos LLMs.",
              "Orchestration of NLP pipelines with SpaCy for intelligent CV parsing, ChromaDB vector embeddings, and LLM model integration."
            )}
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["SpaCy NLP", "LangChain", "ChromaDB", "LLMs"].map((badge) => (
              <span
                key={badge}
                className="font-mono"
                style={{
                  fontSize: "0.78rem",
                  color: "#FFFFFF",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ITEM 3: HEXAGONAL ASYMMETRIC CAPSULE */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            background: "rgba(10, 14, 26, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            padding: "2.2rem 1.8rem",
            clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.8)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Terminal size={20} style={{ color: "#FFFFFF" }} />
            </div>
            <div>
              <span className="font-mono" style={{ fontSize: "0.68rem", color: "#94A3B8" }}>// FULLSTACK STACK</span>
              <h3 className="font-display" style={{ fontSize: "1.6rem", color: "#FFFFFF", margin: 0 }}>HEXAGONAL WEB</h3>
            </div>
          </div>
          <p style={{ color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.7, fontFamily: "var(--font-body)", margin: 0 }}>
            {t(
              "Desarrollo de interfaces reactivas con Next.js 16, React 19, TypeScript, NestJS, FastAPI y microservicios Docker.",
              "Development of reactive interfaces with Next.js 16, React 19, TypeScript, NestJS, FastAPI, and Docker microservices."
            )}
          </p>
        </motion.div>
      </div>

      {/* ══ PERSONAL DATA SUMMARY STRIP (ROUNDED PILL TUBE) ══ */}
      <div
        style={{
          marginTop: "3.5rem",
          background: "rgba(10, 14, 26, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          borderRadius: "9999px",
          padding: "1.2rem 2.2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.8rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <MapPin size={18} style={{ color: "#FFFFFF" }} />
            <span className="font-mono" style={{ fontSize: "0.9rem", color: "#FFFFFF", fontWeight: 700 }}>PUEBLA, MÉXICO</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Mail size={18} style={{ color: "#FFFFFF" }} />
            <span className="font-mono" style={{ fontSize: "0.9rem", color: "#CBD5E1" }}>angelgom042@gmail.com</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/522218226470"
            target="_blank"
            rel="noreferrer"
            className="font-mono"
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "0.55rem 1.4rem",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              textDecoration: "none",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <MessageSquare size={15} /> WHATSAPP
          </a>
          <a
            href="/CV_Angel_GG.pdf"
            download="CV_Angel_GG.pdf"
            className="font-mono"
            style={{
              background: "rgba(255, 255, 255, 0.18)",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              padding: "0.55rem 1.4rem",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              textDecoration: "none",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Download size={15} /> DESCARGAR CV
          </a>
        </div>
      </div>
    </section>
  )
}
