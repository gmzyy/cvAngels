type Props = {
  title: string
  sectionNumber?: string
  icon?: React.ReactNode
}

export default function SectionHeader({ title, sectionNumber, icon }: Props) {
  return (
    <div className="mb-7">
      {sectionNumber && (
        <span className="section-tag inline-block mb-1">
          {sectionNumber} •
        </span>
      )}
      <div className="flex items-center gap-3">
        {icon && <span style={{ color: 'var(--accent-violet)' }}>{icon}</span>}
        <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>
      </div>
      {/* Gradient underline */}
      <div className="mt-3 h-px w-full" style={{
        background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan), transparent)',
        opacity: 0.5,
      }} />
    </div>
  )
}
