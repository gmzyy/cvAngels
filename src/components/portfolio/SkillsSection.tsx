"use client"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Server, Layout, Cpu, Cloud, Activity, Volume2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { TornCard, SprayBlob, GraffitiCircle } from "./TornCard"

interface SkillItem {
  name: string
  tag: string
  level: number
  isCore?: boolean
}

interface SkillCategory {
  id: string
  channelNum: string
  title: string
  tagline: string
  icon: any
  cmdPrompt: string
  codeSnippet: string
  skills: SkillItem[]
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>("backend")

  const CATEGORIES: SkillCategory[] = [
    {
      id: "backend",
      channelNum: "CANAL 01",
      title: "BACKEND & ARQUITECTURA",
      tagline: t("APIs seguras, microservicios y sistemas fintech SPEI", "Secure APIs, microservices & SPEI fintech systems"),
      icon: Server,
      cmdPrompt: "nest start --watch --config nest-cli.json",
      codeSnippet: `@Injectable()\nexport class SpeiSecurityGuard implements CanActivate {\n  constructor(private readonly totp: TotpService) {}\n  async canActivate(context: ExecutionContext): Promise<boolean> {\n    const req = context.switchToHttp().getRequest();\n    return this.totp.verifyOneTimeToken(req.headers['x-2fa-token']);\n  }\n}`,
      skills: [
        { name: "Node.js / Express", tag: "RUNTIME_CORE", level: 92, isCore: true },
        { name: "NestJS (SPEI / 2FA)", tag: "ENTERPRISE_FRAMEWORK", level: 90, isCore: true },
        { name: "FastAPI / Python", tag: "AI_ASYNC_BACKEND", level: 85, isCore: true },
        { name: "Prisma ORM", tag: "DATABASE_MAPPING", level: 88, isCore: true },
        { name: "MongoDB & Mongoose", tag: "NOSQL_DATASTORE", level: 86 },
        { name: "MySQL & PostgreSQL", tag: "RELATIONAL_DB", level: 84 },
        { name: "REST APIs & OpenAPI 3.1", tag: "API_SPECIFICATION", level: 95, isCore: true },
        { name: "2FA / TOTP & Anti-Replay", tag: "SECURITY_PROTOCOLS", level: 90, isCore: true },
      ],
    },
    {
      id: "frontend",
      channelNum: "CANAL 02",
      title: "FRONTEND & UI REACTIVA",
      tagline: t("Interfaces veloces, accesibles y con estética propia", "Fast, accessible UIs with distinct street aesthetics"),
      icon: Layout,
      cmdPrompt: "npx next dev --turbo --port 3000",
      codeSnippet: `export default function Dashboard() {\n  const { data, isLoading } = useQuery(['metrics'], fetchMetrics);\n  return (\n    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>\n      <MetricGrid metrics={data} loading={isLoading} />\n    </motion.div>\n  );\n}`,
      skills: [
        { name: "Next.js 15 (App Router)", tag: "REACT_FRAMEWORK", level: 90, isCore: true },
        { name: "React 19 & Hooks", tag: "UI_LIBRARY", level: 92, isCore: true },
        { name: "TypeScript", tag: "TYPE_SAFETY", level: 88, isCore: true },
        { name: "Tailwind CSS", tag: "UTILITY_STYLING", level: 92 },
        { name: "Framer Motion", tag: "ANIMATION_ENGINE", level: 85 },
        { name: "HTML5 & CSS3 Vanilla", tag: "WEB_STANDARDS", level: 95 },
        { name: "SEO Técnico & LCP 95+", tag: "PERFORMANCE_TUNING", level: 88, isCore: true },
      ],
    },
    {
      id: "ai",
      channelNum: "CANAL 03",
      title: "IA & MOTOR RAG",
      tagline: t("NLP, procesamiento de lenguaje y búsqueda vectorial", "NLP, language processing & vector retrieval"),
      icon: Cpu,
      cmdPrompt: "python -m spacy download es_core_news_lg",
      codeSnippet: `from langchain.vectorstores import Chroma\nfrom langchain.embeddings import OpenAIEmbeddings\n\nvectorstore = Chroma.from_documents(\n    documents=pdf_chunks,\n    embedding=OpenAIEmbeddings(),\n    collection_name="candidates_rag"\n)`,
      skills: [
        { name: "SpaCy NLP (Lectura CVs)", tag: "TEXT_EXTRACTION", level: 85, isCore: true },
        { name: "LangChain RAG Engine", tag: "LLM_ORCHESTRATION", level: 82, isCore: true },
        { name: "ChromaDB (Vector Store)", tag: "VECTOR_DATABASE", level: 84, isCore: true },
        { name: "Integración LLMs / OpenAI", tag: "AI_MODELS", level: 86 },
        { name: "Python 3.11+", tag: "AI_PRIMARY_LANG", level: 85, isCore: true },
      ],
    },
    {
      id: "cloud",
      channelNum: "CANAL 04",
      title: "CLOUD & HERRAMIENTAS",
      tagline: t("Contenedores, almacenamiento cloud y DevOps", "Containers, cloud storage & DevOps tooling"),
      icon: Cloud,
      cmdPrompt: "docker compose -f docker-compose.prod.yml up -d --build",
      codeSnippet: `version: '3.8'\nservices:\n  api:\n    build: .\n    ports:\n      - "4000:4000"\n    environment:\n      - NODE_ENV=production\n      - DATABASE_URL=\${DATABASE_URL}`,
      skills: [
        { name: "Docker & Compose", tag: "CONTAINERIZATION", level: 82, isCore: true },
        { name: "AWS S3 Cloud Storage", tag: "OBJECT_STORAGE", level: 85 },
        { name: "Git & GitHub Actions CI/CD", tag: "VERSION_CONTROL", level: 90, isCore: true },
        { name: "Swagger / Postman", tag: "API_TESTING", level: 92 },
      ],
    },
  ]

  const currentTab = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0]

  return (
    <section
      ref={ref}
      id="skills"
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
      <GraffitiCircle size={380} color="#A31621" opacity={0.06} style={{ top: "0px", left: "-60px", zIndex: 0 }} />
      <GraffitiCircle size={300} color="#0F1B33" opacity={0.07} style={{ bottom: "0px", right: "-50px", zIndex: 0 }} />

      {/* ══ HEADER TITLE BANNER ══ */}
      <div style={{ marginBottom: "4.5rem", position: "relative", zIndex: 5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
          <span className="font-tag" style={{
            background: "var(--red)",
            color: "#FFFFFF",
            padding: "0.35rem 1.4rem",
            fontSize: "1.3rem",
            transform: "rotate(-3deg)",
            boxShadow: "5px 5px 0px var(--navy)",
            border: "2px solid var(--navy)",
          }}>
            // {t("CONSOLA DE CONTROL & SKILLS", "CONTROL CONSOLE & SKILLS")}
          </span>
          <span className="stamp-badge">
            LIVE MONITOR
          </span>
          <span className="handwritten-note font-marker">
            Full Stack Matrix ➔
          </span>
        </div>

        <h2 className="spray-drippy-title" style={{
          fontSize: "clamp(3.2rem, 9vw, 8rem)",
          color: "var(--navy)",
          WebkitTextStroke: "2px var(--red)",
          textShadow: "5px 5px 0px var(--red)",
          margin: 0,
        }}>
          {t("HABILIDADES", "SKILLS")}
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
          &amp; {t("TECNOLOGÍAS", "STACK")}
        </div>
      </div>

      {/* ══ STREET TAB BUTTONS ══ */}
      <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginBottom: "4rem", position: "relative", zIndex: 10 }}>
        {CATEGORIES.map((tab, idx) => {
          const isActive = activeCategory === tab.id
          const Icon = tab.icon
          const rots = ["-2.5deg", "3deg", "-2deg", "2.5deg"]
          const rot = rots[idx % rots.length]

          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className="font-mono"
              style={{
                background: isActive ? "var(--red)" : "var(--navy)",
                color: "#FFFFFF",
                border: "3px solid var(--navy)",
                boxShadow: isActive ? "6px 6px 0px var(--navy)" : "4px 4px 0px var(--red)",
                padding: "0.8rem 1.6rem",
                fontSize: "0.9rem",
                fontWeight: 900,
                cursor: "pointer",
                transform: `rotate(${rot}) ${isActive ? "scale(1.05)" : "scale(1)"}`,
                transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                clipPath: isActive ? "polygon(0% 0%, 96% 0%, 100% 100%, 4% 100%)" : "none",
              }}
            >
              <Icon size={18} style={{ color: isActive ? "#FFF" : "var(--red)" }} />
              <div>
                <div style={{ fontSize: "0.68rem", opacity: 0.85, letterSpacing: "0.1em" }}>{tab.channelNum}</div>
                <div className="font-display" style={{ fontSize: "1.3rem", lineHeight: 1 }}>{tab.title}</div>
              </div>
            </button>
          )
        })}
      </div>

      {/* ══ ASYMMETRICAL EQUALIZER CANVAS GRID ══ */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3.5rem", alignItems: "start", position: "relative", zIndex: 10 }}
        className="lg:!grid-cols-[1.3fr_380px]"
      >
        {/* LEFT: SKILL EQUALIZER CANVAS */}
        <TornCard
          shape="torn1"
          shadow="red"
          rotate={-2}
          style={{ zIndex: 1 }}
          floatingElements={<div className="washi-tape-top" style={{ top: "-16px", left: "20%" }} />}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "0.8rem" }}>
            <h3 className="font-display" style={{ fontSize: "3rem", color: "var(--navy)", margin: 0 }}>{currentTab.title}</h3>
            <span className="font-tag" style={{ background: "var(--red)", color: "#FFF", padding: "0.3rem 1rem", fontSize: "1.2rem", transform: "rotate(2deg)" }}>
              {currentTab.channelNum} // ON AIR
            </span>
          </div>

          <p className="font-spray" style={{ fontSize: "1.6rem", color: "var(--red)", marginBottom: "2rem" }}>{currentTab.tagline}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.2rem" }}>
            {currentTab.skills.map((skill, sIdx) => (
              <div
                key={skill.name}
                style={{
                  background: "#EAE0D0",
                  padding: "1.2rem 1.1rem",
                  border: "2px solid var(--navy)",
                  boxShadow: "4px 4px 0px var(--navy)",
                  transform: `rotate(${sIdx % 2 === 0 ? -0.8 : 0.8}deg)`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.98rem", color: "var(--navy)", fontWeight: 900 }}>{skill.name}</span>
                  <SprayBlob
                    variant={sIdx % 2 === 1 ? 2 : 1}
                    color={skill.isCore ? "#A31621" : "#0F1B33"}
                    style={{ width: "3.2rem", height: "3.2rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 900 }}
                  >
                    {skill.level}%
                  </SprayBlob>
                </div>

                <div style={{ width: "100%", height: "10px", background: "#FAF5EB", border: "2px solid var(--navy)", padding: "1px" }}>
                  <div style={{ width: `${skill.level}%`, height: "100%", background: skill.isCore ? "var(--red)" : "var(--navy)" }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.6rem" }}>
                  <span className="font-mono" style={{ fontSize: "0.7rem", color: "#334455", fontWeight: 800 }}>{skill.tag}</span>
                  {skill.isCore && (
                    <span style={{ fontSize: "0.62rem", background: "var(--red)", color: "#FFF", padding: "2px 7px", fontWeight: 900, clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)", fontFamily: "var(--font-mono)" }}>
                      CORE
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TornCard>

        {/* RIGHT: STENCIL CODE CONSOLE */}
        <TornCard
          shape="tagSharp"
          shadow="navy"
          rotate={3}
          style={{ zIndex: 1 }}
          floatingElements={
            <>
              <div className="washi-tape-corner" style={{ top: "-16px", left: "-14px", zIndex: 25 }} />
              <div
                className="stamp-badge"
                style={{ position: "absolute", top: "-22px", right: "24px", zIndex: 25, transform: "rotate(5deg)", boxShadow: "3px 3px 0px #0F1B33" }}
              >
                APPROVED
              </div>
            </>
          }
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem", borderBottom: "3px dashed var(--red)", paddingBottom: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Volume2 size={20} style={{ color: "var(--red)" }} />
              <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--navy)", fontWeight: 900 }}>CONSOLE // AUDIO_MONITOR</span>
            </div>
          </div>

          <div style={{ background: "var(--navy)", padding: "0.6rem 0.9rem", border: "2px solid var(--navy)", color: "#FFF", fontSize: "0.8rem", marginBottom: "1rem", fontWeight: 900 }}>
            {currentTab.cmdPrompt}
          </div>

          <pre style={{ fontSize: "0.88rem", color: "var(--navy)", lineHeight: 1.7, whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0, background: "#EAE0D0", padding: "1.3rem", border: "2px solid var(--navy)", fontWeight: 800, boxShadow: "4px 4px 0px var(--navy)" }}>
            <code>{currentTab.codeSnippet}</code>
          </pre>

          <div style={{ marginTop: "1.4rem", display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.78rem", color: "var(--navy)", fontWeight: 900 }}>
            <Activity size={16} style={{ color: "var(--red)" }} />
            <span>EXECUTION_TIME: 0.1ms // 100% OK</span>
          </div>
        </TornCard>
      </div>
    </section>
  )
}
