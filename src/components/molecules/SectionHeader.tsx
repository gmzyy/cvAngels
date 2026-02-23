type Props = {
  title: string
  sectionNumber?: string
  icon?: React.ReactNode
}

export default function SectionHeader({ title, sectionNumber, icon }: Props) {
  return (
    <div className="mb-6">
      {sectionNumber && (
        <span className="section-tag inline-block mb-1">{sectionNumber}</span>
      )}
      <div className="flex items-center gap-2.5" style={{ color: 'var(--accent)' }}>
        {icon}
        <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>
      </div>
      <div className="mt-3 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}
