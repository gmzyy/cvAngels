"use client"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Server, Layout, Cpu, Terminal, Cloud, ShieldCheck, Code2, CheckCircle2 } from "lucide-react"

interface SkillTab {
  id: string
  title: string
  Icon: any
  tagline: string
  codeSnippet: string
  skills: { name: string; tag: string; isCore?: boolean }[]
}

const TABS: SkillTab[] = [
  {
    id: "backend",
    title: "Backend & Arquitectura",
    Icon: Server,
    tagline: "Construcción de servicios asíncronos, modelos relacionales y APIs de producción.",
    codeSnippet: `// Stack Backend Principal
const backendConfig = {
  frameworks: ["NestJS", "Node.js", "FastAPI"],
  orm: "Prisma ORM",
  specs: "OpenAPI 3.1.0",
  architecture: "REST / Microservices"
}`,
    skills: [
      { name: "Node.js", tag: "Core", isCore: true },
      { name: "NestJS", tag: "Enterprise", isCore: true },
      { name: "FastAPI", tag: "Async Python", isCore: true },
      { name: "Express", tag: "REST API" },
      { name: ".NET Core", tag: "C#" },
      { name: "Prisma ORM", tag: "Database Layer", isCore: true },
      { name: "OpenAPI 3.1", tag: "API Docs" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Interfaces Web",
    Icon: Layout,
    tagline: "Desarrollo de interfaces interactivas, rápidas y orientadas a la experiencia del usuario.",
    codeSnippet: `// Stack Frontend & UI
export const uiStack = {
  framework: "Next.js 15 (App Router)",
  library: "React 19 / TypeScript",
  styling: "Tailwind CSS + Framer Motion",
  mobile: "Flutter Web / Dio HTTP"
}`,
    skills: [
      { name: "Next.js (App Router)", tag: "SSR & Performance", isCore: true },
      { name: "React 19", tag: "UI Library", isCore: true },
      { name: "TypeScript", tag: "Type Safety", isCore: true },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "Flutter Web", tag: "Multiplatform" },
      { name: "Dio HTTP", tag: "Network Layer" },
      { name: "Framer Motion", tag: "Animations" },
    ],
  },
  {
    id: "ai",
    title: "Inteligencia Artificial & NLP",
    tagline: "Extracción semántica, procesamiento de texto on-premise y motores RAG.",
    Icon: Cpu,
    codeSnippet: `// Engine RAG & NLP
const aiEngine = {
  nlpModel: "SpaCy (es_core_news_md)",
  vectorDB: "ChromaDB",
  orchestration: "LangChain",
  llm: "Google Gemini Models"
}`,
    skills: [
      { name: "SpaCy NLP", tag: "Procesamiento Local", isCore: true },
      { name: "LangChain", tag: "Orquestación RAG", isCore: true },
      { name: "ChromaDB", tag: "Vector Database" },
      { name: "Google Gemini API", tag: "Generación LLM" },
      { name: "Prompt Engineering", tag: "Optimización" },
      { name: "Scoring Semántico", tag: "Ranking NLP", isCore: true },
    ],
  },
  {
    id: "languages",
    title: "Lenguajes de Programación",
    Icon: Terminal,
    tagline: "Dominio de sintaxis fuertemente tipada y desarrollo multiparadigma.",
    codeSnippet: `// Lenguajes Frecuentes
const languages = [
  "TypeScript", // Frontend & Backend
  "Python",     // IA & FastAPI
  "JavaScript", // Web Standard
  "Dart", "C#", "PHP", "SQL"
]`,
    skills: [
      { name: "TypeScript", tag: "Principal", isCore: true },
      { name: "JavaScript (ES6+)", tag: "Web Standard", isCore: true },
      { name: "Python 3.10+", tag: "IA & Backend", isCore: true },
      { name: "Dart", tag: "Flutter" },
      { name: "C#", tag: ".NET" },
      { name: "PHP", tag: "Backend" },
      { name: "SQL", tag: "Queries" },
    ],
  },
  {
    id: "devops",
    title: "Infraestructura & DevOps",
    Icon: Cloud,
    tagline: "Orquestación en contenedores, almacenamiento en la nube y pipelines CI/CD.",
    codeSnippet: `// Infraestructura & Deployment
version: '3.8'
services:
  app: { build: '.', ports: ['3000:3000'] }
  storage: { provider: 'AWS S3 Multipart' }
  ci_cd: { pipeline: 'GitHub Actions' }`,
    skills: [
      { name: "Docker & Compose", tag: "Contenedores", isCore: true },
      { name: "AWS S3 Multipart", tag: "Cloud Storage", isCore: true },
      { name: "GitHub Actions", tag: "CI/CD Pipeline" },
      { name: "Git / GitHub", tag: "Control de Versiones" },
      { name: "Vercel", tag: "Deployment" },
    ],
  },
  {
    id: "security",
    title: "Seguridad & Bases de Datos",
    Icon: ShieldCheck,
    tagline: "Protección de endpoints transaccionales y modelos relacionales/NoSQL.",
    codeSnippet: `// Security & Storage
const securityProfile = {
  auth: "2FA / TOTP (QR & Backup)",
  tokens: "JWT + Session Expiry",
  defense: "Anti-Replay Attack Headers",
  databases: ["MongoDB", "MySQL", "PostgreSQL"]
}`,
    skills: [
      { name: "2FA / TOTP", tag: "Autenticación Segura", isCore: true },
      { name: "JWT Session", tag: "Control de Roles", isCore: true },
      { name: "Defensa Replay Attack", tag: "Seguridad HTTP" },
      { name: "MongoDB", tag: "NoSQL", isCore: true },
      { name: "MySQL", tag: "Relacional" },
      { name: "PostgreSQL", tag: "Relacional" },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTabId, setActiveTabId] = useState<string>("backend")

  const currentTab = TABS.find(t => t.id === activeTabId) || TABS[0]

  return (
    <section
      ref={ref}
      id="skills"
      className="container-pad"
      style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid rgba(243,239,239,0.06)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Section Title */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--red-accent)", fontWeight: 600, marginBottom: "0.4rem" }}>
          Herramientas &amp; Capacidad Técnica
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#F3EFEF" }}>
          Ecosistema Tecnológico
        </h2>
      </div>

      {/* Horizontal Interactive Category Selector */}
      <div style={{
        display: "flex", gap: "0.6rem", overflowX: "auto", paddingBottom: "0.75rem", marginBottom: "2rem",
        scrollbarWidth: "none", msOverflowStyle: "none",
      }}>
        {TABS.map(tab => {
          const isActive = tab.id === activeTabId
          const IconComp = tab.Icon

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                padding: "0.65rem 1.25rem",
                borderRadius: 999,
                fontSize: "0.74rem",
                fontWeight: isActive ? 700 : 500,
                letterSpacing: "0.02em",
                border: isActive ? "1px solid var(--red-accent)" : "1px solid rgba(243,239,239,0.08)",
                background: isActive ? "linear-gradient(135deg, rgba(163,22,56,0.25) 0%, rgba(217,70,99,0.15) 100%)" : "rgba(243,239,239,0.02)",
                color: isActive ? "#FFFFFF" : "#8D8D9E",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
                boxShadow: isActive ? "0 4px 20px rgba(163,22,56,0.2)" : "none",
              }}
            >
              <IconComp size={15} style={{ color: isActive ? "var(--red-accent)" : "#8D8D9E" }} />
              <span>{tab.title}</span>
            </button>
          )
        })}
      </div>

      {/* Interactive Main Showcase (Split Layout: Terminal Code + Tech Badges) */}
      <div
        style={{
          display: "grid", gridTemplateColumns: "1fr",
          background: "var(--bg-card)",
          border: "1px solid rgba(243,239,239,0.08)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
        className="lg:!grid-cols-[1.1fr_1fr]"
      >
        {/* Left Side: Dynamic Tech List & Badges */}
        <div style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red-accent)", boxShadow: "0 0 10px var(--red-accent)" }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#F3EFEF", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                {currentTab.title}
              </h3>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#8D8D9E", lineHeight: 1.6, marginBottom: "2rem" }}>
              {currentTab.tagline}
            </p>

            {/* Badges List */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {currentTab.skills.map(skill => (
                <div
                  key={skill.name}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.45rem 0.85rem",
                    borderRadius: 10,
                    background: skill.isCore ? "rgba(217,70,99,0.14)" : "rgba(243,239,239,0.04)",
                    border: `1px solid ${skill.isCore ? "rgba(217,70,99,0.35)" : "rgba(243,239,239,0.08)"}`,
                    color: skill.isCore ? "#FFFFFF" : "#C8C4C8",
                  }}
                >
                  <CheckCircle2 size={13} style={{ color: skill.isCore ? "var(--red-accent)" : "#3D3D4E" }} />
                  <span style={{ fontSize: "0.8rem", fontWeight: skill.isCore ? 700 : 500 }}>
                    {skill.name}
                  </span>
                  <span style={{ fontSize: "0.58rem", color: "#8D8D9E", background: "rgba(0,0,0,0.3)", padding: "1px 5px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Code Terminal Snippet */}
        <div style={{
          background: "#08080C",
          borderLeft: "1px solid rgba(243,239,239,0.06)",
          padding: "1.5rem",
          display: "flex", flexDirection: "column",
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {/* Terminal Window Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", paddingBottom: "0.6rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
            </div>
            <div style={{ fontSize: "0.62rem", color: "#3D3D4E", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Code2 size={12} />
              <span>architecture.config.ts</span>
            </div>
          </div>

          {/* Terminal Body */}
          <pre style={{
            fontSize: "0.78rem",
            color: "#D94663",
            lineHeight: 1.7,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            margin: 0,
            overflowX: "auto",
            flex: 1,
          }}>
            <code>{currentTab.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
