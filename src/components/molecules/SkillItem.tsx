import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGit,
  SiGithub,
  SiDotnet,
  SiPhp,
  SiPostman,
  SiPython,
  SiFastapi,
  SiDart,
} from "react-icons/si"
import { Shield, Database } from "lucide-react"

type Props = { name: string }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, any> = {
  "TypeScript":                     SiTypescript,
  "JavaScript (ES6+)":              SiJavascript,
  "Python":                         SiPython,
  "Dart":                           SiDart,
  "C# / .NET Core":                 SiDotnet,
  "PHP":                            SiPhp,
  "SQL":                            Database,
  "Node.js":                        SiNodedotjs,
  "NestJS":                         SiNestjs,
  "Express":                        SiExpress,
  "FastAPI":                        SiFastapi,
  "Prisma ORM":                     SiPrisma,
  "REST APIs":                      SiNodedotjs,
  "JWT & Auth":                     Shield,
  "Next.js":                        SiNextdotjs,
  "React.js":                       SiReact,
  "Tailwind CSS":                   SiTailwindcss,
  "Framer Motion":                  SiFramer,
  "React Query":                    SiReact,
  "Zustand":                        SiReact,
  "MongoDB":                        SiMongodb,
  "PostgreSQL / MySQL":             SiPostgresql,
  "Docker":                         SiDocker,
  "AWS (ECS, RDS)":                 SiAmazon,
  "CI/CD (Vercel, GitHub Actions)": SiGit,
  "Git / GitHub":                   SiGithub,
  "2FA/TOTP & MFA":                 Shield,
  "Postman":                        SiPostman,
  "Scrum":                          SiGithub,
}

export default function SkillItem({ name }: Props) {
  const Icon = ICON_MAP[name]

  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium cursor-default select-none transition-colors duration-150"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--accent-border)'
        el.style.color = 'var(--text-primary)'
        el.style.background = 'var(--accent-soft)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border)'
        el.style.color = 'var(--text-secondary)'
        el.style.background = 'var(--bg-surface)'
      }}
      tabIndex={0}
      aria-label={`Habilidad: ${name}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />}
      <span className="leading-tight truncate">{name}</span>
    </div>
  )
}