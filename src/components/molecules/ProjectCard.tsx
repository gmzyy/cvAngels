import { Github, ExternalLink } from "lucide-react"

type Props = {
  title: string
  description: string
  image?: string
  tech: string[]
  github: string
  demo?: string
  link?: string
  featured?: boolean
  accentColor?: string
}

const TECH_COLORS: Record<string, string> = {
  "Next.js": "#e2e8f0",
  "React.js": "#61dafb",
  "Node.js": "#6ee7b7",
  "NestJS": "#f87171",
  "TypeScript": "#60a5fa",
  "Docker": "#60a5fa",
  "MySQL": "#fbbf24",
  "MongoDB": "#4ade80",
  "PostgreSQL": "#a78bfa",
  "Prisma": "#e2e8f0",
  "JWT": "#f472b6",
  "Express": "#94a3b8",
  "SQL": "#fbbf24",
  "Tailwind CSS": "#38bdf8",
  "IA / LLMs": "#c084fc",
  "AWS": "#fb923c",
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  link,
  featured = false,
  accentColor = '#7c3aed',
}: Props) {
  const demoUrl = link || demo
  return (
    <div
      className="group flex flex-col justify-between h-full rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(99,102,241,0.12)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = `${accentColor}50`
        el.style.boxShadow = `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${accentColor}20`
        el.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(99,102,241,0.12)'
        el.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* Color banner top */}
      <div className="h-1 w-full" style={{
        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}80)`,
      }} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3
            className={`font-bold tracking-tight transition-colors duration-200 ${featured ? 'text-xl' : 'text-lg'}`}
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h3>
          <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tech.map(t => (
            <span
              key={t}
              className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-md"
              style={{
                background: 'rgba(15,25,40,0.8)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: TECH_COLORS[t] || '#94a3b8',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center gap-5 px-6 py-4"
        style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}
      >
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = accentColor }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
        >
          <Github className="w-3.5 h-3.5" />
          Código
        </a>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#06b6d4' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Demo
          </a>
        )}
      </div>
    </div>
  )
}