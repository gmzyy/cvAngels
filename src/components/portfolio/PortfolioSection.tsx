"use client"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { TornCard, GraffitiCircle, GraffitiShape, SprayBlob, CircularSealBadge } from "./TornCard"

interface ProjectItem {
  id: string
  title: string
  subtitle: string
  tag: string
  category: "web" | "ai"
  status: string
  description: string
  features: string[]
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  highlighted?: boolean
}

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()
  const [filter, setFilter] = useState<string>("all")

  const PROJECTS: ProjectItem[] = [
    {
      id: "sendro",
      title: "SENDRO SPEI / 2FA",
      subtitle: "Fintech Core Platform",
      tag: "FINTECH_SECURITY",
      category: "web",
      status: "IN PRODUCTION",
      highlighted: true,
      description: t(
        "Módulo de alta seguridad bancaria con 2FA/TOTP end-to-end, mecanismos anti-replay (tokens de un solo uso y firmas de solicitud en NestJS) y gestión integral de operaciones SPEI.",
        "High-security banking module with end-to-end 2FA/TOTP, anti-replay mechanisms (one-time tokens and NestJS request signatures), and full SPEI operations management."
      ),
      features: [
        t("Flujo TOTP completo (QR, OTP, códigos de respaldo)", "Full TOTP flow (QR, OTP, backup codes)"),
        t("Firmado y verificación anti-replay en NestJS", "Anti-replay signing and verification in NestJS"),
        t("Panel administrativo multitenant para comercios", "Multitenant merchant admin portal"),
        t("Especificación técnica OpenAPI 3.1.0", "OpenAPI 3.1.0 technical specification"),
      ],
      techStack: ["NestJS", "Next.js 15", "Prisma ORM", "2FA/TOTP", "OpenAPI 3.1", "MySQL"],
    },
    {
      id: "staicka-ai",
      title: "STAICKA RAG & RECRUITMENT",
      subtitle: "AI Resume Parsing Engine",
      tag: "AI_NLP_RAG",
      category: "ai",
      status: "LIVE DEMO",
      highlighted: true,
      description: t(
        "Motor de inteligencia artificial para reclutamiento que analiza automáticamente CVs en PDF mediante SpaCy NLP, indexa perfiles en vectores con LangChain + ChromaDB y realiza búsquedas semánticas avanzadas.",
        "AI recruitment engine automatically parsing PDF resumes with SpaCy NLP, vector-indexing candidate profiles with LangChain + ChromaDB, and executing advanced semantic searches."
      ),
      features: [
        t("Extracción automatizada de texto y entidades de PDF", "Automated text and entity extraction from PDFs"),
        t("Indexación vectorial con LangChain y ChromaDB", "Vector indexing with LangChain & ChromaDB"),
        t("Puntuación semántica de candidatos vs requerimientos", "Semantic candidate scoring vs job requirements"),
        t("Dashboard web responsivo desarrollado en Next.js", "Responsive web dashboard developed in Next.js"),
      ],
      techStack: ["FastAPI", "Python", "SpaCy NLP", "LangChain", "ChromaDB", "Next.js", "NestJS"],
    },
    {
      id: "softech-mongo",
      title: "SOFTECH MONGO ENGINE",
      subtitle: "Database & LCP Optimization",
      tag: "HIGH_PERFORMANCE",
      category: "web",
      status: "COMPLETED",
      description: t(
        "Rediseño integral de esquemas e índices en MongoDB reduciendo la latencia de consultas en un 35%, junto con optimizaciones Next.js App Router mejorando métricas LCP en 20%.",
        "Complete MongoDB schema & index redesign cutting query latency by 35%, combined with Next.js App Router tuning boosting LCP performance by 20%."
      ),
      features: [
        t("Reducción de latencia MongoDB del 35% vía índices", "35% MongoDB latency reduction via index strategy"),
        t("Mejora del 20% en LCP con Next.js App Router", "20% LCP improvement with Next.js App Router"),
        t("Automatización de despliegues mediante pipelines CI/CD", "Automated deployments via CI/CD pipelines"),
      ],
      techStack: ["Next.js", "React", "MongoDB", "Node.js", "CI/CD"],
    },
    {
      id: "barber-angeles",
      title: "BARBER ANGELES PLATFORM",
      subtitle: "Real-time Booking & Management",
      tag: "SAAS_PLATFORM",
      category: "web",
      status: "IN PRODUCTION",
      description: t(
        "Plataforma web completa para reserva de citas en tiempo real, catálogo interactivo de servicios y panel administrativo para control de agenda y métricas.",
        "Full web platform for real-time appointment booking, interactive service catalog, and admin dashboard for schedule and metric control."
      ),
      features: [
        t("Sistema de agendamiento en tiempo real", "Real-time booking schedule system"),
        t("Almacenamiento de archivos y multimedia en AWS S3", "File & media storage on AWS S3"),
        t("Rendimiento 95+ en métricas Google Lighthouse", "95+ performance on Google Lighthouse metrics"),
      ],
      techStack: ["Next.js", "React", "MongoDB", "AWS S3", "Tailwind CSS"],
    },
    {
      id: "sante-dental",
      title: "SANTĒ DENTAL CLINIC",
      subtitle: "Medical Service Management",
      tag: "HEALTHCARE_WEB",
      category: "web",
      status: "IN PRODUCTION",
      description: t(
        "Aplicación web clínica para presentación de servicios odontológicos, contacto directo y gestión eficiente de pacientes.",
        "Clinical web application for dental services showcase, direct contact, and efficient patient management."
      ),
      features: [
        t("Diseño accesible e interfaz ultra responsiva", "Accessible design & ultra-responsive UI"),
        t("Optimización SEO técnica para posicionamiento local", "Technical SEO optimization for local search"),
      ],
      techStack: ["Next.js", "React", "AWS S3", "Tailwind CSS"],
    },
  ]

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true
    return p.category === filter
  })

  return (
    <section
      ref={ref}
      id="portfolio"
      style={{
        position: "relative",
        zIndex: 10,
        padding: "7rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
        transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
        willChange: "opacity, transform",
      }}
    >
      {/* Background Accents */}
      <GraffitiCircle size={360} color="#A31621" opacity={0.06} style={{ top: "-30px", right: "5%", zIndex: 0 }} />
      <GraffitiCircle size={280} color="#0F1B33" opacity={0.07} style={{ bottom: "5%", left: "-40px", zIndex: 0 }} />

      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "4rem", position: "relative", zIndex: 5 }}>
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
            // {t("PROYECTOS & COMPROBABLES", "VERIFIABLE PROJECTS")}
          </span>
          <span className="stamp-badge">
            ONLY ONE
          </span>
          <span className="handwritten-note font-marker">
            Handcrafted Systems ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3.2rem, 9vw, 8rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("PROYECTOS", "SELECTED")}
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
          {t("SELECCIONADOS", "WORKS")}
        </div>
      </div>

      {/* Street Stencil Filter Tabs */}
      <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginBottom: "4rem", zIndex: 10, position: "relative" }}>
        {[
          { id: "all", label: t("TODOS (5)", "ALL (5)"), rot: "-3deg" },
          { id: "web", label: "WEB PLATFORMS", rot: "2.5deg" },
          { id: "ai", label: "IA & RAG", rot: "-2deg" },
        ].map((f) => {
          const isActive = filter === f.id
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="font-mono"
              style={{
                background: isActive ? "var(--red)" : "var(--navy)",
                color: "#FFFFFF",
                border: "3px solid var(--navy)",
                boxShadow: isActive ? "6px 6px 0px var(--navy)" : "4px 4px 0px var(--red)",
                padding: "0.75rem 1.6rem",
                fontSize: "0.92rem",
                fontWeight: 900,
                cursor: "pointer",
                transform: `rotate(${f.rot}) ${isActive ? "scale(1.05)" : "scale(1)"}`,
                transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                clipPath: isActive ? "polygon(0% 0%, 96% 0%, 100% 100%, 4% 100%)" : "none",
              }}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {/* ══ UNDERGROUND GALLERY CANVAS WALL ══ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "4rem", position: "relative", zIndex: 10 }}>

        {filteredProjects.map((p, idx) => {
          const shapes: GraffitiShape[] = ["torn1", "tagRight", "torn2", "arrowRight", "ticketNotch"]
          const shape = shapes[idx % shapes.length]
          const shadow = p.highlighted ? "red" as const : "navy" as const
          const rotations = [-3, 2.8, -2, 3.5, -2.5]
          const rotate = rotations[idx % rotations.length]

          return (
            <TornCard
              key={p.id}
              shape={shape}
              shadow={shadow}
              rotate={rotate}
              style={{ zIndex: 1 }}
              innerStyle={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
              floatingElements={
                <>
                  <div className="washi-tape-top" style={{ top: "-16px", left: idx % 2 === 0 ? "15%" : "65%" }} />
                  <CircularSealBadge
                    label={p.status}
                    sublabel={p.category === "ai" ? "NLP RAG" : "WEB APP"}
                    bg={p.highlighted ? "#A31621" : "#0F1B33"}
                    size={68}
                    rotate={idx % 2 === 0 ? -6 : 6}
                    style={{ position: "absolute", bottom: "-26px", right: "15px" }}
                  />
                </>
              }
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.75rem", background: "var(--red)", color: "#FFF", padding: "4px 12px", fontWeight: 900, transform: "rotate(-2deg)", clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)" }}>
                    [{p.tag}]
                  </span>
                </div>

                <h3 className="font-display" style={{ fontSize: "2.6rem", color: "var(--navy)", lineHeight: 0.95, marginBottom: "0.4rem" }}>
                  {p.title}
                </h3>
                <div className="font-spray" style={{ fontSize: "1.6rem", color: "var(--red)", marginBottom: "1.2rem" }}>
                  {p.subtitle}
                </div>

                <p className="font-body" style={{ color: "#112233", fontSize: "1rem", lineHeight: 1.65, fontWeight: 700, marginBottom: "1.5rem" }}>
                  {p.description}
                </p>

                <div style={{ marginBottom: "1.6rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {p.features.map((feat, i) => (
                    <div key={i} className="font-mono" style={{ fontSize: "0.85rem", color: "var(--navy)", display: "flex", alignItems: "flex-start", gap: "0.6rem", fontWeight: 800 }}>
                      <span style={{ color: "var(--red)", fontWeight: 900 }}>▸</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.6rem", borderTop: "2px dashed var(--red)", paddingTop: "1.2rem" }}>
                  {p.techStack.map((tech, i) => (
                    <span key={tech} className="font-mono" style={{ fontSize: "0.75rem", background: "var(--navy)", color: "#FFF", padding: "4px 10px", border: "1px solid var(--navy)", fontWeight: 900, transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn-street-primary" style={{ flex: 1, justifyContent: "center", fontSize: "1.1rem", padding: "0.65rem" }}>
                      <ExternalLink size={16} /> SITIO LIVE ➔
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-street-secondary" style={{ flex: 1, justifyContent: "center", fontSize: "1.1rem", padding: "0.65rem" }}>
                      <Github size={16} /> REPO ➔
                    </a>
                  )}
                </div>
              </div>
            </TornCard>
          )
        })}
      </div>
    </section>
  )
}
