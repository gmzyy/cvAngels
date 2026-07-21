"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface SkillGroup {
  category: string
  skills: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Lenguajes",
    skills: ["TypeScript", "JavaScript", "Dart", "C#", "PHP", "SQL", "Python"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", ".NET Core", "Express", "FastAPI", "Prisma ORM"],
  },
  {
    category: "Frontend",
    skills: ["Next.js (App Router)", "React", "Flutter Web", "Tailwind CSS", "Dio"],
  },
  {
    category: "Bases de Datos",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS S3 (Presigned URLs, Multipart)", "Docker", "Git/GitHub", "CI/CD", "CORS"],
  },
  {
    category: "Seguridad",
    skills: ["2FA/TOTP", "MFA", "JWT", "Prevención de Replay Attacks"],
  },
  {
    category: "IA & Automatización",
    skills: ["Prompt Engineering", "Integración de LLMs", "NLP (SpaCy)", "Automatización de flujos"],
  },
]

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="skills"
      className="container-pad"
      style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--red)", fontWeight: 600, marginBottom: "0.7rem" }}>
        Tech Stack &amp; Tools
      </p>
      <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "3rem" }}>
        Habilidades Técnicas
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
        {SKILL_GROUPS.map(group => (
          <div
            key={group.category}
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "1.4rem",
              transition: "border-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = "rgba(201,24,74,0.4)"
              el.style.transform = "translateY(-4px)"
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = "rgba(255,255,255,0.06)"
              el.style.transform = "translateY(0)"
            }}
          >
            <h3 style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1rem" }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {group.skills.map(s => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    padding: "0.3rem 0.65rem",
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#fff",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
