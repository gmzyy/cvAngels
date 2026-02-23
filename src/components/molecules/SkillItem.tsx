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
} from "react-icons/si"
import type { IconType } from "react-icons"

type Props = { name: string }

const ICON_MAP: Record<string, IconType> = {
  "JavaScript (ES6+)": SiJavascript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "React Query": SiReact,
  "Zustand": SiReact,
  "Shadcn/ui": SiReact,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "NestJS": SiNestjs,
  "Prisma ORM": SiPrisma,
  "REST APIs": SiNodedotjs,
  "JWT & Auth": SiGithub,
  "MongoDB": SiMongodb,
  "PostgreSQL / MySQL": SiPostgresql,
  "Docker": SiDocker,
  "CI/CD (Vercel, GitHub Actions)": SiGit,
  "AWS (ECS, RDS)": SiAmazon,
  "Git / GitHub": SiGit,
  "C# / .NET Core": SiDotnet,
  "PHP": SiPhp,
  "Scrum": SiGithub,
  "Postman": SiPostman,
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
        el.style.borderColor = 'var(--accent)'
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