"use client"
import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { ExternalLink, Github, Sparkles, Shield, Cpu, Code2, Flame, Disc } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: string
  tag: string
  description: string
  features: string[]
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  status: string
  highlighted?: boolean
  imagePlaceholder?: string
}

export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState("all")
  const { t } = useLanguage()

  const PROJECTS: ProjectItem[] = [
    {
      id: "sendro",
      title: "SENDRO PAYMENTS",
      subtitle: "Fintech Core & 2FA / SPEI Platform",
      category: "fintech",
      tag: "FINTECH_SECURITY",
      description: t(
        "Plataforma fintech de alta concurrencia con integración SPEI y autenticación 2FA/TOTP end-to-end con firmas anti-replay.",
        "High-concurrency fintech platform with SPEI integration and end-to-end 2FA/TOTP auth featuring anti-replay signatures."
      ),
      features: [
        t("Flujo 2FA/TOTP con QR, OTP y códigos de respaldo", "2FA/TOTP flow with QR, OTP & backup codes"),
        t("Token de un solo uso y firmas de solicitud en NestJS", "One-time tokens & request signatures in NestJS"),
        t("Panel de control administrativo con Prisma ORM", "Admin dashboard backed by Prisma ORM"),
        t("Especificación OpenAPI 3.1.0 (Swagger)", "OpenAPI 3.1.0 specification (Swagger)"),
      ],
      techStack: ["NestJS", "Next.js 15", "Prisma ORM", "2FA / TOTP", "MySQL", "Swagger"],
      status: "PRODUCTION",
      highlighted: true,
    },
    {
      id: "staicka",
      title: "STAICKA TALENT SCOUT",
      subtitle: "AI Resume Parsing & RAG Engine",
      category: "ai",
      tag: "AI_RAG_ENGINE",
      description: t(
        "Motor inteligente de reclutamiento que procesa CVs masivos en PDF usando SpaCy NLP y búsquedas semánticas con RAG (LangChain + ChromaDB).",
        "Intelligent recruitment engine processing PDF resumes via SpaCy NLP and semantic search with RAG (LangChain + ChromaDB)."
      ),
      features: [
        t("Extracción de texto PDF en backend Python / FastAPI", "PDF text extraction in Python / FastAPI backend"),
        t("Embeddings vectoriales con Google Gemini 1.5 Pro", "Vector embeddings via Google Gemini 1.5 Pro"),
        t("RAG Pipeline estructurado con LangChain y ChromaDB", "Structured RAG pipeline with LangChain & ChromaDB"),
        t("Despliegue automatizado en Docker Compose", "Automated deployment in Docker Compose"),
      ],
      techStack: ["FastAPI", "Python 3.10", "SpaCy NLP", "LangChain", "ChromaDB", "Docker"],
      githubUrl: "https://github.com/Gmzyy",
      status: "STABLE",
      highlighted: true,
    },
    {
      id: "barber-angeles",
      title: "BARBER ANGELES",
      subtitle: "Realtime Booking & Admin System",
      category: "web",
      tag: "WEB_PLATFORM",
      description: t(
        "Sistema integral de reservas en tiempo real y catálogo digital interactivo para barberías con panel de control para estilistas.",
        "Comprehensive real-time booking system and interactive digital catalog for barbershops with stylist dashboards."
      ),
      features: [
        t("Reserva de turnos interactiva con confirmación instantánea", "Interactive slot booking with instant confirmation"),
        t("Panel administrativo para control de horarios y cajas", "Admin panel for schedule and cash flow control"),
        t("Almacenamiento de activos e imágenes en AWS S3", "Asset & image storage on AWS S3"),
      ],
      techStack: ["Next.js", "React", "MongoDB", "AWS S3", "Tailwind CSS"],
      githubUrl: "https://github.com/Gmzyy",
      status: "LIVE",
    },
    {
      id: "sante-dental",
      title: "SANTĒ DENTAL CLINIC",
      subtitle: "Medical Appointments & Clinical Portal",
      category: "web",
      tag: "CLINICAL_WEB",
      description: t(
        "Portal clínico interactivo para citas odontológicas, expedientes digitales y agenda médica en tiempo real.",
        "Interactive clinical portal for dental appointments, digital records, and real-time medical scheduling."
      ),
      features: [
        t("Gestión de citas médicas y catálogo de tratamientos", "Medical appointment management & treatment catalog"),
        t("Interfaces optimizadas para dispositivos móviles", "Mobile-optimized responsive interfaces"),
        t("Rendimiento de carga ultrarrápido (Lighthouse 98)", "Ultra-fast load performance (Lighthouse 98)"),
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "CSS Modules"],
      githubUrl: "https://github.com/Gmzyy",
      status: "LIVE",
    },
  ]

  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter)

  return (
    <section
      ref={ref}
      id="portfolio"
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
      {/* Title Header */}
      <div style={{ marginBottom: "3rem", position: "relative" }}>
        {/* Halftone Dot Backdrop */}
        <div className="halftone-bg" style={{ position: "absolute", top: "-20px", left: "-20px", width: "250px", height: "120px", pointerEvents: "none" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.3rem 1.2rem",
            fontSize: "1.3rem",
            transform: "rotate(2deg)",
            boxShadow: "4px 4px 0px var(--navy)",
            border: "2px solid var(--navy)",
          }}>
            // {t("PROYECTOS & GRAFFITI WALL", "PROJECTS & STREET WALL")}
          </span>
          <span className="stamp-badge">
            ONLY ONE
          </span>
          <span className="handwritten-note font-marker">
            Handcrafted Systems ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("PROYECTOS", "SELECTED")}
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-4deg) translateY(-12px) translateX(15px)",
          WebkitTextStroke: "2px var(--navy)",
          textShadow: "5px 5px 0px var(--navy)",
          display: "inline-block",
        }}>
          {t("SELECCIONADOS", "WORKS")}
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        {[
          { id: "all", label: t("TODOS (4)", "ALL (4)") },
          { id: "fintech", label: "FINTECH & 2FA" },
          { id: "ai", label: "IA & RAG" },
          { id: "web", label: "WEB PLATFORMS" },
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
                boxShadow: isActive ? "5px 5px 0px var(--navy)" : "3px 3px 0px var(--red)",
                padding: "0.6rem 1.4rem",
                fontSize: "0.85rem",
                fontWeight: 900,
                cursor: "pointer",
                transform: isActive ? "rotate(-2deg) scale(1.03)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
      }}>
        {filteredProjects.map((p, idx) => (
          <div
            key={p.id}
            style={{
              background: "#FAF5EB",
              border: "4px solid var(--navy)",
              boxShadow: p.highlighted ? "12px 12px 0px var(--red)" : "10px 10px 0px var(--navy)",
              padding: "2rem 1.8rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              color: "var(--navy)",
              transform: idx % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)",
            }}
          >
            {/* Washi Tape */}
            <div className="washi-tape-top" />

            {/* Stamp Badge */}
            <div className="stamp-badge" style={{ position: "absolute", bottom: "15px", right: "15px", fontSize: "0.95rem" }}>
              {p.status}
            </div>

            <div>
              {/* Header Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span className="font-mono" style={{ fontSize: "0.7rem", background: "var(--red)", color: "#FFF", padding: "3px 10px", fontWeight: 900, transform: "rotate(-2deg)" }}>
                  [{p.tag}]
                </span>
                <span className="font-mono" style={{ fontSize: "0.7rem", background: "var(--navy)", color: "#FFF", padding: "3px 10px", fontWeight: 900 }}>
                  {p.status}
                </span>
              </div>

              <h3 className="font-display" style={{ fontSize: "2.4rem", color: "var(--navy)", lineHeight: 0.95, marginBottom: "0.2rem" }}>
                {p.title}
              </h3>
              <div className="font-spray" style={{ fontSize: "1.4rem", color: "var(--red)", marginBottom: "1rem" }}>
                {p.subtitle}
              </div>

              <p className="font-body" style={{ color: "#112233", fontSize: "0.98rem", lineHeight: 1.6, fontWeight: 700, marginBottom: "1.4rem" }}>
                {p.description}
              </p>

              {/* Bullet Features */}
              <div style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {p.features.map((feat, i) => (
                  <div key={i} className="font-mono" style={{ fontSize: "0.82rem", color: "var(--navy)", display: "flex", alignItems: "flex-start", gap: "0.6rem", fontWeight: 800 }}>
                    <span style={{ color: "var(--red)", fontWeight: 900 }}>▸</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stack & Links */}
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem", borderTop: "2px dashed var(--red)", paddingTop: "1rem" }}>
                {p.techStack.map((tech) => (
                  <span key={tech} className="font-mono" style={{ fontSize: "0.72rem", background: "var(--navy)", color: "#FFF", padding: "3px 8px", border: "1px solid var(--navy)", fontWeight: 900 }}>
                    {tech}
                  </span>
                ))}
              </div>

              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-street-secondary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "1.2rem", padding: "0.6rem" }}
                >
                  <Github size={16} /> REPO GITHUB ➔
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
