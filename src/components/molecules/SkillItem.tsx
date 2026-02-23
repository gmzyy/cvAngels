type Props = {
  name: string
}

export default function SkillItem({ name }: Props) {
  return (
    <div
      className="px-3 py-2 rounded-lg text-xs font-semibold text-center cursor-default select-none transition-all duration-200"
      style={{
        background: 'rgba(99,102,241,0.08)',
        border: '1px solid rgba(99,102,241,0.18)',
        color: 'var(--text-secondary)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = 'rgba(124,58,237,0.15)'
        el.style.borderColor = 'rgba(124,58,237,0.45)'
        el.style.color = 'var(--text-primary)'
        el.style.boxShadow = '0 0 10px rgba(124,58,237,0.2)'
        el.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = 'rgba(99,102,241,0.08)'
        el.style.borderColor = 'rgba(99,102,241,0.18)'
        el.style.color = 'var(--text-secondary)'
        el.style.boxShadow = 'none'
        el.style.transform = 'translateY(0)'
      }}
      tabIndex={0}
      aria-label={`Habilidad: ${name}`}
    >
      {name}
    </div>
  )
}