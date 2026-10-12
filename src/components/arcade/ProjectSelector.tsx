import Image from 'next/image'
import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { projects } from '@/content/arcade'
import { useLanguage } from '@/context/LanguageContext'
import { Flip, ScrollTrigger, useGSAP } from '@/lib/arcade/motion'

export default function ProjectSelector({ reduced }: { reduced: boolean }) {
  const { t } = useLanguage()
  const root = useRef<HTMLDivElement>(null)
  const detail = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<string | null>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const { contextSafe } = useGSAP({ scope: root })
  const animate = contextSafe((update: () => void) => {
    const state = Flip.getState(root.current!.querySelectorAll('[data-flip-id]'))
    flushSync(update)
    if (!reduced) Flip.from(state, { duration: .55, ease: 'power3.inOut', scale: true, prune: true, onComplete: () => ScrollTrigger.refresh() })
    else ScrollTrigger.refresh()
  })
  const active = projects.find(p => p.name === selected)
  function close() { animate(() => setSelected(null)); opener.current?.focus({ preventScroll: true }) }
  return <div ref={root}>
    <div className="arc-filters" aria-label={t('Filtros de proyectos', 'Project filters')}>
      {[['all', t('Todos', 'All')], ['featured', t('SaaS & IA', 'SaaS & AI')], ['web', t('Web comercial', 'Commercial web')]].map(([key, label]) => <button className="pixel-button" key={key} aria-pressed={filter === key} onClick={() => animate(() => { setSelected(null); setFilter(key) })}>{label}</button>)}
    </div>
    <p className="pixel-label" role="status">{projects.filter(p => filter === 'all' || p.category === filter).length} {t('PROYECTOS SELECCIONADOS', 'SELECTED PROJECTS')}</p>
    <div className="arc-project-grid">
      {projects.map((p, i) => <article className="arc-project" key={p.name} data-flip-id={p.name} hidden={selected !== null ? selected !== p.name : filter !== 'all' && p.category !== filter}>
        <button className="arc-project-cover" onClick={event => {
          opener.current = event.currentTarget
          animate(() => setSelected(p.name))
          detail.current?.focus({ preventScroll: true })
        }} aria-label={`${t('Explorar', 'Explore')} ${p.name}`}>
          <Image src={p.image} alt={p.name} width={1000} height={650} sizes="(max-width: 700px) 90vw, 45vw" />
          <span className="pixel-label">{String(i + 1).padStart(2, '0')} / {p.badge}</span><span className="arc-play">▶</span>
        </button>
        <h3>{p.name}</h3><p>{t(p.es, p.en)}</p><small>{p.tech}</small>
        {selected === p.name && <div className="arc-project-detail" ref={detail} tabIndex={-1} onKeyDown={e => { if (e.key === 'Escape') { e.stopPropagation(); close() } }}>
          <p className="pixel-label">{t('DETALLE DEL PROYECTO', 'PROJECT DETAILS')}</p>
          {active?.isExternal ? <a className="pixel-button filled" href={active.url} target="_blank" rel="noreferrer">{t('Ver en vivo ↗', 'View live ↗')}</a> : <p>{t('Proyecto interno · Demo pública no disponible.', 'Internal project · No public demo available.')}</p>}
          <button className="pixel-button" onClick={close}>{t('← Volver al listado', '← Back to list')}</button>
        </div>}
      </article>)}
    </div>
  </div>
}
