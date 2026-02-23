import SectionHeader from "../molecules/SectionHeader"
import { Briefcase } from "lucide-react"

interface Job {
  title: string
  company: string
  period: string
  accent: string
  bullets: (string | React.ReactNode)[]
}

const jobs: Job[] = [
  {
    title: "Full Stack Developer",
    company: "Softech",
    period: "Julio 2024 – Febrero 2025",
    accent: "#7c3aed",
    bullets: [
      <>Optimicé el rendimiento del backend reduciendo la <strong style={{ color: '#f0f4ff' }}>latencia de consultas en MongoDB en un 35%</strong> mediante el rediseño de esquemas e índices.</>,
      <>Implementé componentes con Next.js App Router logrando una mejora del <strong style={{ color: '#f0f4ff' }}>20% en las métricas de LCP</strong> (Largest Contentful Paint).</>,
      <>Automaticé pipelines de CI/CD para despliegues en producción, incrementando la <strong style={{ color: '#f0f4ff' }}>velocidad de entrega de nuevas funcionalidades en un 15%</strong>.</>,
    ],
  },
  {
    title: "Software Developer Jr",
    company: "Quavanti Innovación Digital",
    period: "Julio 2025 – Septiembre 2025",
    accent: "#06b6d4",
    bullets: [
      <>Desarrollé y mantuve módulos MVC utilizando <strong style={{ color: '#f0f4ff' }}>C# / .NET Core</strong>, garantizando la consistencia de datos en bases MySQL.</>,
      <>Participé en revisiones de código y ceremonias <strong style={{ color: '#f0f4ff' }}>Scrum</strong> para asegurar la calidad del software y el cumplimiento de entregas.</>,
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(99,102,241,0.1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <SectionHeader title="Experiencia Laboral" sectionNumber="02" icon={<Briefcase className="w-5 h-5" />} />

      <div className="relative flex flex-col gap-10">
        {/* Timeline line */}
        <div
          className="absolute left-[7px] top-3 bottom-3 w-px"
          style={{ background: 'linear-gradient(180deg, var(--accent-violet), var(--accent-cyan), transparent)' }}
        />

        {jobs.map((job) => (
          <div key={job.company} className="relative pl-8">
            {/* Glow dot */}
            <span
              className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full flex-shrink-0"
              style={{
                background: job.accent,
                boxShadow: `0 0 0 3px rgba(10,15,30,1), 0 0 12px ${job.accent}80`,
              }}
            />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                {job.title}{" "}
                <span className="font-semibold text-sm" style={{ color: job.accent }}>
                  @ {job.company}
                </span>
              </h3>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full w-fit flex-shrink-0"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  color: 'var(--text-muted)',
                  border: '1px solid rgba(99,102,241,0.15)',
                }}
              >
                {job.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: job.accent }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}