"use client"
import { useState, useRef } from "react"
import CardVisual from "./CardVisual"

type Theme = "nexus" | "lumina" | "orion"
type Category = "all" | "frontend" | "fullstack_ai"

interface Project {
  id: string
  num: string
  title: string
  subtitle?: string
  category: Category
  desc: string
  details?: string[]
  tags: string[]
  github?: string
  demo?: string
  theme: Theme
  badge: "bell" | "star" | "sun"
}

const PROJECTS: Project[] = [
  // Fullstack / AI / Backend
  {
    id: "rag-py",
    num: "01",
    title: "STAICKA RAG — Análisis de Documentos",
    subtitle: "Motor RAG con LangChain, ChromaDB & Gemini",
    category: "fullstack_ai",
    theme: "nexus",
    badge: "star",
    desc: "Motor de búsqueda y análisis semántico para procesar PDFs (CVs o manuales corporativos) y extraer información inteligente mediante vectores matemáticos.",
    details: [
      "Ingesta inteligente con LangChain & ChromaDB",
      "Modelos Google Gemini & Text-Embeddings",
      "Búsqueda semántica contextual y ranking de perfiles",
    ],
    tags: ["Python 3.10", "LangChain", "ChromaDB", "Gemini", "FastAPI"],
    github: "https://github.com/gmzyy/RAG-PY",
  },
  {
    id: "talent-scout",
    num: "02",
    title: "STAICKA Talent Scout",
    subtitle: "Motor de Reclutamiento con IA (100% On-Premise)",
    category: "fullstack_ai",
    theme: "lumina",
    badge: "bell",
    desc: "Sistema integral de reclutamiento inteligente que utiliza SpaCy NLP para extraer texto de PDFs, detectar ~60 patrones de habilidades y rankear candidatos.",
    details: [
      "Extracción PDF con PyMuPDF & SpaCy (es_core_news_md)",
      "Dashboard interactivo Next.js 15, React 19 & Tailwind 4",
      "Orquestación Docker Compose multi-servicio (FastAPI + MongoDB)",
    ],
    tags: ["FastAPI", "Next.js 15", "SpaCy NLP", "MongoDB", "Docker"],
    github: "https://github.com/gatsbyy/talent-ia",
  },
  {
    id: "auth-core",
    num: "03",
    title: "AUTH CORE — Identity System",
    subtitle: "Sistema Fullstack Dockerizado",
    category: "fullstack_ai",
    theme: "orion",
    badge: "star",
    desc: "Sistema de autenticación fullstack con arquitectura desacoplada, JWT, Prisma ORM, MySQL y despliegue multi-contenedor con Docker Compose.",
    details: [
      "NestJS + Prisma ORM + MySQL relacional",
      "Autenticación JWT & Gestión de roles/perfiles",
      "Contenedores independientes para backend, frontend y MySQL",
    ],
    tags: ["NestJS", "Prisma ORM", "MySQL", "JWT", "Next.js", "Docker"],
    github: "https://github.com/gatsbyy/auth-system-docker",
  },
  {
    id: "arcika",
    num: "04",
    title: "STAICKA ARCIKA",
    subtitle: "Generador de Arquitecturas con IA",
    category: "fullstack_ai",
    theme: "nexus",
    badge: "sun",
    desc: "Herramienta que transforma requerimientos técnicos en esquemas y diagramas de flujo mediante LLMs avanzados. Redujo un 60% el tiempo de setup inicial.",
    tags: ["Next.js", "NestJS", "LLMs", "Prompt Engineering", "Docker"],
    github: "https://github.com/Gmzyy",
    demo: "https://staicka.vercel.app/",
  },

  // Frontend & Webs
  {
    id: "barber",
    num: "05",
    title: "Barber Management Platform",
    subtitle: "Gestión de Citas & Barbería",
    category: "frontend",
    theme: "orion",
    badge: "star",
    desc: "Plataforma completa de reserva y gestión de citas en tiempo real. Panel administrativo, experiencia de usuario fluida y diseño responsivo.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Express"],
    github: "https://github.com/gatsbyy/BarberAngeles",
    demo: "https://barber-angeles.vercel.app/home",
  },
  {
    id: "sante",
    num: "06",
    title: "Santē Dental Clinic",
    subtitle: "Plataforma Web Odontológica",
    category: "frontend",
    theme: "lumina",
    badge: "sun",
    desc: "Sitio web comercial para clínica dental con interfaz moderna, presentación de servicios médicos, integración de citas y diseño de alta conversión.",
    tags: ["React", "Next.js", "Tailwind CSS", "UX/UI"],
    demo: "https://sante-dental.vercel.app/",
  },
  {
    id: "la-ververa",
    num: "07",
    title: "La Ververa",
    subtitle: "E-Commerce / Branding Web",
    category: "frontend",
    theme: "nexus",
    badge: "bell",
    desc: "Aplicación web comercial y catálogo interactivo con enfoque en diseño minimalista, animaciones fluidas y optimización de rendimiento.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://la-ververa.vercel.app/",
  },
  {
    id: "staicka-studio",
    num: "08",
    title: "Staicka Studio",
    subtitle: "Estudio Freelance de Desarrollo & IA",
    category: "frontend",
    theme: "orion",
    badge: "star",
    desc: "Plataforma oficial de Staicka Studio para exhibición de servicios de desarrollo fullstack, integración de IA y soluciones cloud para negocios.",
    tags: ["Next.js", "Tailwind CSS", "NestJS", "Vercel"],
    demo: "https://staicka.vercel.app/",
  },
]

const BadgeIcon = ({ type }: { type: string }) => {
  if (type === "bell") return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
  if (type === "sun") return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  )
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ProjectCard({ p }: { p: Project }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 12,
        border: `1px solid ${hovered ? "rgba(201,24,74,0.45)" : "rgba(255,255,255,0.06)"}`,
        background: "var(--bg-card)",
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 14px 44px rgba(201,24,74,0.14), 0 4px 14px rgba(0,0,0,0.5)" : "none",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Badge */}
      <div style={{
        position: "absolute", top: 12, right: 12, zIndex: 5,
        width: 22, height: 22, borderRadius: 6,
        background: "var(--red)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff",
      }}>
        <BadgeIcon type={p.badge} />
      </div>

      {/* Visual Canvas Art */}
      <CardVisual theme={p.theme} height={160} />

      {/* Body */}
      <div style={{ padding: "1.2rem 1.25rem 1.3rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "0.54rem", letterSpacing: "0.2em", color: "var(--red)", textTransform: "uppercase", marginBottom: 4, fontWeight: 600 }}>
          {p.num} / Project
        </div>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.03em", textTransform: "uppercase", color: "#fff", marginBottom: 2 }}>
          {p.title}
        </h3>
        {p.subtitle && (
          <div style={{ fontSize: "0.68rem", color: "var(--red)", fontWeight: 500, marginBottom: 8 }}>
            {p.subtitle}
          </div>
        )}
        <p style={{ fontSize: "0.75rem", color: "var(--grey)", lineHeight: 1.6, flex: 1, marginBottom: p.details ? 8 : 12 }}>
          {p.desc}
        </p>

        {p.details && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: 12 }}>
            {p.details.map((d, i) => (
              <div key={i} style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.75)", display: "flex", gap: "0.45rem", alignItems: "center" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                <span>{d}</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "auto", paddingTop: "0.5rem" }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.08em",
              textTransform: "uppercase", padding: "0.2rem 0.5rem",
              border: `1px solid ${hovered ? "rgba(201,24,74,0.35)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 999, color: hovered ? "#fff" : "var(--grey)",
              transition: "border-color 0.25s, color 0.25s",
            }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.9rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "0.7rem" }}>
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "0.65rem", color: "var(--grey)", textDecoration: "none", display: "flex", alignItems: "center", gap: 5, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--red)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)"}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Repositorio
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "0.65rem", color: "var(--grey)", textDecoration: "none", display: "flex", alignItems: "center", gap: 5, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--red)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)"}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Demo Web ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Category>("all")

  const filteredProjects = PROJECTS.filter(p => filter === "all" || p.category === filter)

  return (
    <section id="portfolio" className="container-pad" style={{ position: "relative", zIndex: 10 }}>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", fontWeight: 600, marginBottom: 8 }}>
            Selected Work
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            Explore Portfolio
          </h2>
        </div>

        {/* Category Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {[
            { id: "all", label: "Todos los Proyectos" },
            { id: "fullstack_ai", label: "Sistemas Fullstack & IA" },
            { id: "frontend", label: "Frontend & Páginas Web" },
          ].map(btn => {
            const active = filter === btn.id
            return (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as Category)}
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: 999,
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  border: `1px solid ${active ? "var(--red)" : "rgba(255,255,255,0.08)"}`,
                  background: active ? "rgba(201,24,74,0.15)" : "rgba(255,255,255,0.03)",
                  color: active ? "#fff" : "var(--grey)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {btn.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Layout Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:!grid-cols-[200px_1fr] gap-10">

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h4 style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.8rem", fontWeight: 600 }}>
              Categorías
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <SidebarItem label="Sistemas RAG & NLP" />
              <SidebarItem label="Arquitectura Docker" />
              <SidebarItem label="APIs REST & OpenAPI" />
              <SidebarItem label="Webs Comerciales UI/UX" />
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: "0.8rem", fontWeight: 600 }}>
              Enfoque Tecnológico
            </h4>
            <p style={{ fontSize: "0.75rem", color: "var(--grey)", lineHeight: 1.6 }}>
              Desarrollo de motores de búsqueda semántica on-premise, microservicios contenerizados y landing pages con máximo performance.
            </p>
          </div>
        </aside>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map(p => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

      </div>
    </section>
  )
}

function SidebarItem({ label }: { label: string }) {
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li ref={ref} style={{ fontSize: "0.78rem", color: "var(--grey)", display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", transition: "color 0.2s" }}
      onMouseEnter={() => { if (ref.current) ref.current.style.color = "#fff" }}
      onMouseLeave={() => { if (ref.current) ref.current.style.color = "var(--grey)" }}
    >
      <span style={{ width: 12, height: 1, background: "var(--grey2)", display: "inline-block", flexShrink: 0 }} />
      {label}
    </li>
  )
}
