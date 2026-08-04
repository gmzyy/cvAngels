"use client"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Server, Layout, Cpu, Terminal, Cloud, ShieldCheck, Activity, Sliders, Volume2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface SkillItem {
  name: string
  tag: string
  level: number
  isCore?: boolean
}

interface SkillTab {
  id: string
  title: string
  Icon: any
  channelNum: string
  tagline: string
  cmdPrompt: string
  codeSnippet: string
  skills: SkillItem[]
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTabId, setActiveTabId] = useState<string>("backend")
  const { t } = useLanguage()

  const TABS: SkillTab[] = [
    {
      id: "backend",
      title: t("Backend & Arquitectura", "Backend & Architecture"),
      Icon: Server,
      channelNum: "PAD_01",
      tagline: t("APIs de producción, microservicios y motores asíncronos.", "Production APIs, microservices, and async engines."),
      cmdPrompt: "$ feelmz --inspect --stack=backend",
      codeSnippet: `const backend = {
  runtime: "Node.js 20+ / Python 3.10",
  frameworks: ["NestJS", "FastAPI", "Express"],
  orm: "Prisma ORM",
  architecture: "REST / Microservices"
}`,
      skills: [
        { name: "Node.js", tag: "Runtime Core", level: 95, isCore: true },
        { name: "NestJS", tag: "Enterprise", level: 92, isCore: true },
        { name: "FastAPI", tag: "Async Python", level: 90, isCore: true },
        { name: "Express", tag: "REST API", level: 88 },
        { name: ".NET Core", tag: "C# Services", level: 82 },
        { name: "Prisma ORM", tag: "DB Layer", level: 94, isCore: true },
        { name: "OpenAPI 3.1", tag: "API Docs", level: 90 },
      ],
    },
    {
      id: "frontend",
      title: t("Frontend & Interfaces Web", "Frontend & Web Interfaces"),
      Icon: Layout,
      channelNum: "PAD_02",
      tagline: t("Interfaces interactivas, ultra rápidas y modernas.", "Interactive, ultra-fast, and modern interfaces."),
      cmdPrompt: "$ feelmz --render --stack=frontend",
      codeSnippet: `export const ui = {
  framework: "Next.js 15 (App Router)",
  library: "React 19 / TypeScript",
  styling: "Tailwind CSS + Custom CSS",
  mobile: "Flutter Web / Dio HTTP"
}`,
      skills: [
        { name: "Next.js 15 (App Router)", tag: "SSR & Perf", level: 96, isCore: true },
        { name: "React 19", tag: "UI Library", level: 95, isCore: true },
        { name: "TypeScript", tag: "Type Safety", level: 94, isCore: true },
        { name: "Tailwind CSS", tag: "Styling", level: 92 },
        { name: "Flutter Web", tag: "Multiplatform", level: 85 },
        { name: "Dio HTTP", tag: "Network Layer", level: 88 },
        { name: "Framer Motion", tag: "Animations", level: 90, isCore: true },
      ],
    },
    {
      id: "ai",
      title: t("Inteligencia Artificial & NLP", "Artificial Intelligence & NLP"),
      Icon: Cpu,
      channelNum: "PAD_03",
      tagline: t("Extracción semántica local On-Premise y motores RAG.", "Local On-Premise semantic extraction and RAG engines."),
      cmdPrompt: "$ feelmz --run --module=rag_ai",
      codeSnippet: `const aiPipeline = {
  nlpModel: "SpaCy (es/en)",
  vectorDB: "ChromaDB",
  orchestration: "LangChain",
  llms: "Google Gemini 1.5 Pro"
}`,
      skills: [
        { name: "SpaCy NLP", tag: "Local NLP", level: 92, isCore: true },
        { name: "LangChain", tag: "RAG Engine", level: 90, isCore: true },
        { name: "ChromaDB", tag: "Vector Index", level: 88, isCore: true },
        { name: "Google Gemini API", tag: "LLMs", level: 94 },
        { name: "Prompt Engineering", tag: "Tuning", level: 91 },
        { name: t("Scoring Semántico", "Semantic Scoring"), tag: "Ranking", level: 93, isCore: true },
      ],
    },
    {
      id: "languages",
      title: t("Lenguajes de Programación", "Programming Languages"),
      Icon: Terminal,
      channelNum: "PAD_04",
      tagline: t("Sintaxis fuertemente tipada y desarrollo multiparadigma.", "Strongly typed syntax and multi-paradigm development."),
      cmdPrompt: "$ feelmz --compile --target=langs",
      codeSnippet: `const languages = [
  "TypeScript", // Core Web
  "Python 3.10",// AI & FastAPI
  "JavaScript", // Standard
  "Dart", "C#", "SQL"
]`,
      skills: [
        { name: "TypeScript", tag: "Principal", level: 96, isCore: true },
        { name: "JavaScript (ES6+)", tag: "Standard", level: 95, isCore: true },
        { name: "Python 3.10+", tag: "IA & FastAPI", level: 92, isCore: true },
        { name: "Dart", tag: "Flutter Engine", level: 85 },
        { name: "C#", tag: ".NET", level: 82 },
        { name: "PHP", tag: "Backend", level: 80 },
        { name: "SQL", tag: "Queries", level: 90, isCore: true },
      ],
    },
    {
      id: "devops",
      title: t("Infraestructura & DevOps", "Infrastructure & DevOps"),
      Icon: Cloud,
      channelNum: "PAD_05",
      tagline: t("Contenedores Docker, almacenamiento S3 y pipelines CI/CD.", "Docker containers, S3 storage, and CI/CD pipelines."),
      cmdPrompt: "$ feelmz --deploy --docker",
      codeSnippet: `const infra = {
  containers: "Docker & Compose",
  storage: "AWS S3 Pre-Signed",
  ci_cd: "GitHub Actions",
  deploy: "Vercel / Cloud Edge"
}`,
      skills: [
        { name: "Docker & Compose", tag: "Containers", level: 92, isCore: true },
        { name: "AWS S3 Multipart", tag: "Storage", level: 90, isCore: true },
        { name: "GitHub Actions", tag: "CI/CD Pipelines", level: 88, isCore: true },
        { name: "Git / GitHub", tag: "Version Control", level: 96 },
        { name: "Vercel", tag: "Cloud Edge", level: 94 },
      ],
    },
    {
      id: "security",
      title: t("Seguridad & DBs", "Security & DBs"),
      Icon: ShieldCheck,
      channelNum: "PAD_06",
      tagline: t("Protección 2FA/TOTP, defensa anti-replay attacks y bases de datos.", "2FA/TOTP protection, anti-replay attacks, and databases."),
      cmdPrompt: "$ feelmz --audit --2fa --totp",
      codeSnippet: `const security = {
  auth: "2FA / TOTP (QR Code)",
  tokens: "Encrypted JWT",
  defense: "Anti-Replay Nonce",
  databases: ["MongoDB", "MySQL"]
}`,
      skills: [
        { name: "2FA / TOTP", tag: "Security", level: 94, isCore: true },
        { name: "JWT Session", tag: "Auth Security", level: 95, isCore: true },
        { name: t("Defensa Replay Attack", "Replay Attack Defense"), tag: "HTTP Nonce", level: 92, isCore: true },
        { name: "MongoDB", tag: "NoSQL", level: 90, isCore: true },
        { name: "MySQL", tag: "Relational", level: 88 },
        { name: "PostgreSQL", tag: "Relational", level: 86 },
      ],
    },
  ]

  const currentTab = TABS.find(t => t.id === activeTabId) || TABS[0]

  return (
    <section
      ref={ref}
      id="skills"
      style={{
        position: "relative",
        zIndex: 10,
        padding: "5rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Title Header */}
      <div style={{ marginBottom: "3rem", position: "relative" }}>
        {/* Halftone Comic Dots Backdrop */}
        <div className="halftone-bg" style={{ position: "absolute", top: "-20px", left: "-20px", width: "250px", height: "120px", pointerEvents: "none" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.3rem 1.2rem",
            fontSize: "1.3rem",
            transform: "rotate(-2deg)",
            boxShadow: "4px 4px 0px var(--navy)",
            border: "2px solid var(--navy)",
          }}>
            // {t("MPC SOUNDBOARD & STACK", "MPC SOUNDBOARD & STACK")}
          </span>
          <span className="stamp-badge">
            PROTOTYPE
          </span>
          <span className="handwritten-note font-marker">
            Peak Equalizer Levels ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          ARSENAL
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
          SKILLS &amp; TECH SOUNDBOARD
        </div>
      </div>

      {/* MPC Drum Machine Pads Selector */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "0.9rem",
        marginBottom: "2.5rem",
      }}>
        {TABS.map((tab) => {
          const isActive = tab.id === activeTabId
          const Icon = tab.Icon

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              style={{
                background: isActive ? "var(--red)" : "var(--navy)",
                color: "#FFFFFF",
                border: "3px solid var(--navy)",
                boxShadow: isActive ? "6px 6px 0px var(--navy)" : "4px 4px 0px var(--red)",
                padding: "1rem 0.9rem",
                cursor: "pointer",
                textAlign: "left",
                transform: isActive ? "rotate(-3deg) scale(1.02)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span className="font-mono" style={{ fontSize: "0.7rem", background: "#061024", color: "#FFF", padding: "2px 6px", fontWeight: 900 }}>
                  {tab.channelNum}
                </span>
                <span style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: isActive ? "#FFFFFF" : "var(--red)",
                  boxShadow: isActive ? "0 0 8px #FFF" : "none",
                  display: "inline-block",
                }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Icon size={18} style={{ color: "#FFFFFF", flexShrink: 0 }} />
                <span className="font-display" style={{ fontSize: "1.3rem", lineHeight: 1 }}>
                  {tab.title}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Main Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2rem",
        alignItems: "start",
      }} className="lg:!grid-cols-[1.3fr_380px]">

        {/* LEFT: SKILL METERS */}
        <div style={{
          background: "#FAF5EB",
          border: "4px solid var(--navy)",
          boxShadow: "12px 12px 0px var(--red)",
          padding: "2.2rem 2rem",
          color: "var(--navy)",
          position: "relative",
          transform: "rotate(-0.8deg)",
        }}>
          {/* Washi Tape */}
          <div className="washi-tape-top" />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "0.5rem" }}>
            <h3 className="font-display" style={{ fontSize: "2.8rem", color: "var(--navy)", margin: 0 }}>
              {currentTab.title}
            </h3>
            <span className="font-tag" style={{ background: "var(--red)", color: "#FFF", padding: "0.2rem 0.8rem", fontSize: "1.2rem", transform: "rotate(2deg)" }}>
              {currentTab.channelNum} // ON AIR
            </span>
          </div>

          <p className="font-spray" style={{ fontSize: "1.5rem", color: "var(--red)", marginBottom: "1.8rem" }}>
            {currentTab.tagline}
          </p>

          {/* 2-Column Audio Equalizer Skill Meters */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {currentTab.skills.map((skill) => (
              <div key={skill.name} style={{ background: "#EAE0D0", padding: "1rem", border: "2px solid var(--navy)", boxShadow: "4px 4px 0px var(--navy)", transform: "rotate(-0.5deg)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.95rem", color: "var(--navy)", fontWeight: 900 }}>
                    {skill.name}
                  </span>
                  <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--red)", fontWeight: 900 }}>
                    {skill.level}%
                  </span>
                </div>

                {/* VU Meter Audio Equalizer Gauge */}
                <div style={{ width: "100%", height: "10px", background: "#FAF5EB", border: "2px solid var(--navy)", padding: "1px" }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: "100%",
                    background: skill.isCore ? "var(--red)" : "var(--navy)",
                  }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.68rem", color: "#334455", fontWeight: 700 }}>
                    {skill.tag}
                  </span>
                  {skill.isCore && (
                    <span className="font-mono" style={{ fontSize: "0.6rem", background: "var(--red)", color: "#FFF", padding: "1px 6px", fontWeight: 900 }}>
                      CORE
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: BOOMBOX CODE CONSOLE */}
        <div style={{
          background: "#FAF5EB",
          border: "4px solid var(--navy)",
          boxShadow: "12px 12px 0px var(--navy)",
          padding: "1.8rem",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-mono)",
          color: "var(--navy)",
          position: "relative",
          transform: "rotate(1.5deg)",
        }}>
          {/* Washi Tape Corner */}
          <div className="washi-tape-corner" />

          {/* Stamp Badge */}
          <div className="stamp-badge" style={{ position: "absolute", top: "15px", right: "15px" }}>
            APPROVED
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", borderBottom: "3px dashed var(--red)", paddingBottom: "0.6rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Volume2 size={18} style={{ color: "var(--red)" }} />
              <span className="font-mono" style={{ fontSize: "0.8rem", color: "var(--navy)", fontWeight: 900 }}>
                CONSOLE // AUDIO_MONITOR
              </span>
            </div>
          </div>

          <div style={{ background: "var(--navy)", padding: "0.5rem 0.8rem", border: "2px solid var(--navy)", color: "#FFFFFF", fontSize: "0.78rem", marginBottom: "0.8rem", fontWeight: 900 }}>
            {currentTab.cmdPrompt}
          </div>

          <pre style={{
            fontSize: "0.85rem",
            color: "var(--navy)",
            lineHeight: 1.7,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            margin: 0,
            background: "#EAE0D0",
            padding: "1.2rem",
            border: "2px solid var(--navy)",
            fontWeight: 800,
          }}>
            <code>{currentTab.codeSnippet}</code>
          </pre>

          <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--navy)", fontWeight: 900 }}>
            <Activity size={14} style={{ color: "var(--red)" }} />
            <span>EXECUTION_TIME: 0.1ms // 100% OK</span>
          </div>
        </div>

      </div>
    </section>
  )
}
