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
        className={`relative overflow-hidden px-5 py-2.5 rounded-xl font-semibold text-sm tracking-wide
          border transition-all duration-200 active:scale-95 ${className}`}
        style={{
          borderColor: 'rgba(124,58,237,0.4)',
          color: 'var(--text-primary)',
          background: 'transparent',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#7c3aed'
            ; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124,58,237,0.08)'
            ; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 12px rgba(124,58,237,0.2)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(124,58,237,0.4)'
            ; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
            ; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
        }}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`btn-shimmer relative overflow-hidden px-5 py-2.5 rounded-xl font-semibold text-sm tracking-wide text-white
        transition-all duration-200 active:scale-95 ${className}`}
      style={{
        background: 'var(--grad-button)',
        boxShadow: '0 4px 15px rgba(124,58,237,0.3)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(124,58,237,0.5), 0 0 30px rgba(6,182,212,0.2)'
          ; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(124,58,237,0.3)'
          ; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
      }}
    >
      {children}
    </button>
  )
}