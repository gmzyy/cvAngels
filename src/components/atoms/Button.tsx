type Props = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: Props) {
  if (variant === 'ghost') {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 active:scale-95 w-full ${className}`}
        style={{
          border: '1px solid var(--accent-border)',
          color: 'var(--text-secondary)',
          background: 'transparent',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.borderColor = 'var(--accent)'
          el.style.color = 'var(--text-primary)'
          el.style.background = 'var(--accent-soft)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.borderColor = 'var(--accent-border)'
          el.style.color = 'var(--text-secondary)'
          el.style.background = 'transparent'
        }}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`btn-shimmer relative overflow-hidden px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-150 active:scale-95 w-full ${className}`}
      style={{ background: 'var(--grad-button)' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.opacity = '0.9'
          ; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.opacity = '1'
          ; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
      }}
    >
      {children}
    </button>
  )
}