import SectionHeader from "../molecules/SectionHeader"
import { GraduationCap, Globe } from "lucide-react"

interface EduEntry {
  degree: string
  school: string
  period: string
  accent: string
}

const education: EduEntry[] = [
  {
    degree: "Ingeniería en Software",
    school: "Universidad Tecnológica de Puebla (UTP)",
    period: "2024 – 2026",
    accent: "#7c3aed",
  },
  {
    degree: "TSU en Software",
    school: "Universidad Tecnológica de Puebla (UTP)",
    period: "2022 – 2024",
    accent: "#06b6d4",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(99,102,241,0.1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      {/* ── Educación ──────────────────────────────────────── */}
      <SectionHeader title="Educación" sectionNumber="05" icon={<GraduationCap className="w-5 h-5" />} />

      <div className="relative flex flex-col gap-8 mb-10">
        {/* Timeline line */}
        <div
          className="absolute left-[7px] top-3 bottom-3 w-px"
          style={{ background: 'linear-gradient(180deg, var(--accent-violet), var(--accent-cyan), transparent)' }}
        />

        {education.map((entry) => (
          <div key={entry.degree} className="relative pl-8">
            {/* Glow dot */}
            <span
              className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full"
              style={{
                background: entry.accent,
                boxShadow: `0 0 0 3px rgba(10,15,30,1), 0 0 12px ${entry.accent}80`,
              }}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                {entry.degree}
              </h3>
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full w-fit flex-shrink-0"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  color: 'var(--text-muted)',
                  border: '1px solid rgba(99,102,241,0.15)',
                }}
              >
                {entry.period}
              </span>
            </div>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              {entry.school}
            </p>
          </div>
        ))}
      </div>

      {/* ── Idiomas ────────────────────────────────────────── */}
      <SectionHeader title="Idiomas" />

      <div
        className="rounded-xl p-5 transition-all duration-200"
        style={{
          background: 'rgba(99,102,241,0.06)',
          border: '1px solid rgba(99,102,241,0.15)',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = 'rgba(124,58,237,0.35)'
          el.style.boxShadow = '0 0 20px rgba(124,58,237,0.1)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = 'rgba(99,102,241,0.15)'
          el.style.boxShadow = 'none'
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Globe className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-violet)' }} />
          <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
            Inglés
          </h3>
          <span
            className="text-[0.65rem] font-bold px-2 py-0.5 rounded-md"
            style={{
              background: 'rgba(124,58,237,0.15)',
              color: '#a78bfa',
              border: '1px solid rgba(124,58,237,0.25)',
            }}
          >
            Nivel A2
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Capacidad sólida para la{" "}
          <strong style={{ color: 'var(--text-primary)' }}>lectura de documentación técnica</strong>, gestión y resolución de{" "}
          <em style={{ color: 'var(--accent-violet)', fontStyle: 'normal' }}>issues</em>{" "}
          en repositorios (GitHub), y comunicación escrita efectiva en entornos de desarrollo de software.
        </p>
      </div>
    </section>
  )
}