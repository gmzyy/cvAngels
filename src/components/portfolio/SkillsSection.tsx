"use client"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Server, Layout, Cpu, Terminal, Cloud, ShieldCheck, Code2, Zap, Activity, CheckCircle2 } from "lucide-react"
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
      channelNum: "CH_01",
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
      channelNum: "CH_02",
      tagline: t("Interfaces interactivas, ultra rápidas y con estética street.", "Interactive, ultra-fast interfaces with street aesthetics."),
      cmdPrompt: "$ feelmz --render --stack=frontend",
      codeSnippet: `export const ui = {
  framework: "Next.js 15 (App Router)",
  library: "React 19 / TypeScript",
  styling: "Tailwind CSS + Street CSS",
  mobile: "Flutter Web / Dio HTTP"
}`,
      skills: [
        { name: "Next.js 15 (App Router)", tag: "SSR & Perf", level: 96, isCore: true },
        { name: "React 19", tag: "UI Library", level: 95, isCore: true },
        { name: "TypeScript", tag: "Type Safety", level: 94, isCore: true },
        { name: "Tailwind CSS", tag: "Styling", level: 92 },
        { name: "Flutter Web", tag: "Multiplatform", level: 85 },
        { name: "Dio HTTP", tag: "Network Layer", level: 88 },
        { name: "Framer Motion", tag: "Street FX", level: 90, isCore: true },
      ],
    },
    {
      id: "ai",
      title: t("Inteligencia Artificial & NLP", "Artificial Intelligence & NLP"),
      Icon: Cpu,
      channelNum: "CH_03",
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
      channelNum: "CH_04",
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
      channelNum: "CH_05",
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
      channelNum: "CH_06",
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
      {/* Title */}
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="sticker-box font-mono" style={{ transform: "rotate(-1.5deg)", color: "var(--red)" }}>
            // {t("ECOSISTEMA TECNOLÓGICO", "TECH ECOSYSTEM")}
          </span>
          <span className="font-mono" style={{ fontSize: "0.7rem", color: "var(--grey)", letterSpacing: "0.2em" }}>
            [STACK_MATRIX // V3]
          </span>
        </div>

        <h2 className="font-display" style={{
          fontSize: "clamp(3.8rem, 8vw, 6.5rem)",
          lineHeight: 0.85,
          color: "#FFFFFF",
          textShadow: "6px 6px 0px var(--red)",
          textTransform: "uppercase",
          margin: 0,
        }}>
          ARSENAL
        </h2>
        <div className="font-spray" style={{
          fontSize: "clamp(3.2rem, 7vw, 5.5rem)",
          color: "var(--red)",
          lineHeight: 0.9,
          transform: "rotate(-3deg) translateY(-15px)",
          WebkitTextStroke: "1.5px #FFFFFF",
          textShadow: "6px 6px 0px #000000",
          display: "inline-block",
        }}>
          SKILLS &amp; TECH SOUNDBOARD
        </div>
      </div>

      {/* Street Channel Selector Buttons */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
                background: isActive ? "var(--red)" : "#0A0A0A",
                color: "#FFFFFF",
                border: "3px solid #FFFFFF",
                boxShadow: isActive ? "6px 6px 0px #FFFFFF" : "4px 4px 0px var(--red)",
                padding: "1rem 0.9rem",
                cursor: "pointer",
                textAlign: "left",
                transform: isActive ? "rotate(-2deg)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span className="font-mono" style={{ fontSize: "0.7rem", background: "#000", color: "#FFF", padding: "1px 5px" }}>
                  {tab.channelNum}
                </span>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: isActive ? "#FFFFFF" : "var(--red)",
                  display: "inline-block",
                }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Icon size={18} style={{ color: isActive ? "#000000" : "var(--red)", flexShrink: 0 }} />
                <span className="font-display" style={{ fontSize: "1.3rem", lineHeight: 1 }}>
                  {tab.title}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Main Grid: Skills Grid on Left + Compact Terminal on Right */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2rem",
        alignItems: "start",
      }} className="lg:!grid-cols-[1.3fr_380px]">

        {/* LEFT: TIGHT GRID OF SKILL STICKERS WITH METERS */}
        <div style={{
          background: "#080808",
          border: "4px solid #FFFFFF",
          boxShadow: "10px 10px 0px var(--red), 10px 10px 0px 4px #000000",
          padding: "2rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "0.5rem" }}>
            <h3 className="font-display" style={{ fontSize: "2.6rem", color: "#FFFFFF", margin: 0 }}>
              {currentTab.title}
            </h3>
            <span className="sticker-box font-mono" style={{ background: "var(--red)", color: "#FFF" }}>
              {currentTab.channelNum} // ACTIVE
            </span>
          </div>

          <p className="font-spray" style={{ fontSize: "1.4rem", color: "var(--red)", marginBottom: "1.8rem" }}>
            {currentTab.tagline}
          </p>

          {/* 2-Column Skill Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {currentTab.skills.map((skill) => (
              <div key={skill.name} style={{ background: "#111111", padding: "0.9rem 1rem", border: "2px solid #FFFFFF", boxShadow: "3px 3px 0px #000000" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.9rem", color: "#FFFFFF", fontWeight: 700 }}>
                    {skill.name}
                  </span>
                  <span className="font-mono" style={{ fontSize: "0.8rem", color: "var(--red)", fontWeight: 700 }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Gauge */}
                <div style={{ width: "100%", height: "8px", background: "#000000", border: "1px solid #333333" }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: "100%",
                    background: skill.isCore ? "var(--red)" : "#FFFFFF",
                  }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.4rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.6rem", color: "#888888" }}>
                    {skill.tag}
                  </span>
                  {skill.isCore && (
                    <span className="font-mono" style={{ fontSize: "0.55rem", background: "var(--red)", color: "#FFF", padding: "1px 4px", fontWeight: 700 }}>
                      CORE
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: SLEEK COMPACT TERMINAL BOX */}
        <div style={{
          background: "#000000",
          border: "4px solid #FFFFFF",
          boxShadow: "10px 10px 0px #FFFFFF, 10px 10px 0px 4px var(--red)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-mono)",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", borderBottom: "2px dashed #333333", paddingBottom: "0.6rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFF" }} />
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--red)", fontWeight: 700 }}>
              TERMINAL // STACK_OUTPUT
            </span>
          </div>

          <div style={{ background: "#111111", padding: "0.5rem 0.8rem", border: "1px solid #333", color: "var(--red)", fontSize: "0.75rem", marginBottom: "0.8rem" }}>
            {currentTab.cmdPrompt}
          </div>

          <pre style={{
            fontSize: "0.82rem",
            color: "#FFFFFF",
            lineHeight: 1.7,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            margin: 0,
            background: "#080808",
            padding: "1rem",
            border: "1px solid #222222",
          }}>
            <code>{currentTab.codeSnippet}</code>
          </pre>

          <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.68rem", color: "#888888" }}>
            <Activity size={12} style={{ color: "var(--red)" }} />
            <span>EXECUTION_TIME: 0.1ms // 100% OK</span>
          </div>
        </div>

      </div>
    </section>
  )
}
