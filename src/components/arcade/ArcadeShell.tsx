import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { useLanguage } from '@/context/LanguageContext'
import { gsap, useGSAP, ScrollTrigger, SplitText, Flip, motion, levels, Screen } from '@/lib/arcade/motion'
import LevelContent from './LevelContent'
import InteractiveAvatar, { InteractiveAvatarHandle } from './InteractiveAvatar'

const aliases: Record<string, Screen> = { hero: 'menu', about: 'perfil', skills: 'stack', experience: 'experiencia', portfolio: 'proyectos', education: 'educacion', contact: 'contacto' }
const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export default function ArcadeShell({ personal = false }: { personal?: boolean }) {
  const { t, lang, setLang } = useLanguage()
  const root = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLElement>(null)
  const menu = useRef<HTMLElement>(null)
  const bars = useRef<HTMLDivElement>(null)
  const menuIndex = useRef(0)
  const audio = useRef<AudioContext | null>(null)
  const pending = useRef<gsap.core.Timeline | null>(null)
  const avatarRef = useRef<InteractiveAvatarHandle>(null)
  const [screen, setScreen] = useState<Screen>(personal ? 'perfil' : 'menu')
  const [boot, setBoot] = useState(!personal)
  const [avatarScrolled, setAvatarScrolled] = useState(false)
  const [ready, setReady] = useState(false)
  const [selected, setSelected] = useState(0)
  const [muted, setMuted] = useState(true)
  const [texture, setTexture] = useState(true)
  const [manualReduced, setManualReduced] = useState(false)
  const [systemReduced, setSystemReduced] = useState(false)
  const [secret, setSecret] = useState(false)
  const [busy, setBusy] = useState(false)
  const [visited, setVisited] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [pueblaTime, setPueblaTime] = useState('')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const reduced = manualReduced || systemReduced
  const labels = [t('Perfil', 'Profile'), 'Stack', t('Experiencia', 'Experience'), t('Proyectos', 'Projects'), t('Educación', 'Education'), t('Contacto', 'Contact')]
  const navItems: { id: Screen; label: string; num: string }[] = [
    { id: 'menu', label: t('Inicio', 'Home'), num: '00' },
    { id: 'perfil', label: t('Perfil', 'Profile'), num: '01' },
    { id: 'stack', label: 'Stack', num: '02' },
    { id: 'experiencia', label: t('Experiencia', 'Experience'), num: '03' },
    { id: 'proyectos', label: t('Proyectos', 'Projects'), num: '04' },
    { id: 'educacion', label: t('Educación', 'Education'), num: '05' },
    { id: 'contacto', label: t('Contacto', 'Contact'), num: '06' }
  ]
  const titles: Record<Screen, string> = {
    menu: 'Ángel Gómez',
    perfil: t('Detrás del código.', 'Behind the code.'),
    stack: t('Stack & Tecnologías.', 'Stack & Technologies.'),
    experiencia: t('Trayectoria profesional.', 'Professional journey.'),
    proyectos: t('Proyectos seleccionados.', 'Selected projects.'),
    educacion: t('Formación y aptitudes.', 'Education and skills.'),
    contacto: t('Conectemos.', 'Let’s connect.')
  }
  const { contextSafe } = useGSAP({ scope: root })

  const playSound = useCallback(() => {
    if (muted) return
    try {
      const ctx = audio.current ?? new AudioContext()
      audio.current = ctx
      void ctx.resume().catch(() => {})
      const oscillator = ctx.createOscillator(), gain = ctx.createGain()
      oscillator.type = 'square'
      oscillator.frequency.setValueAtTime(440, ctx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + .065)
      gain.gain.setValueAtTime(.025, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .1)
      oscillator.connect(gain); gain.connect(ctx.destination)
      oscillator.start(); oscillator.stop(ctx.currentTime + .11)
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect() }
    } catch { /* Audio is optional; navigation never depends on it. */ }
  }, [muted])

  const navigate = useCallback((next: Screen, history = true) => {
    if (pending.current?.isActive()) pending.current.kill()
    const commit = () => {
      const avatarEl = root.current?.querySelector('[data-flip-id="site-avatar"]')
      const state = avatarEl && !reduced ? Flip.getState(avatarEl) : null

      flushSync(() => {
        setBoot(false); setScreen(next); setBusy(false); setProgress(0)
        if (next !== 'menu') setVisited(old => old.includes(next) ? old : [...old, next])
        if (history && window.location.hash !== `#${next}`) window.history.pushState(null, '', `#${next}`)
        window.scrollTo({ top: 0, behavior: 'instant' })
      })

      if (state && !reduced) {
        Flip.from(state, {
          duration: 0.55,
          ease: 'power3.inOut',
          onComplete: () => {
            avatarRef.current?.updateMetrics()
            ScrollTrigger.refresh()
          }
        })
      }
    }
    playSound()
    if (reduced || boot) { commit(); return }
    setBusy(true)
    const tl = gsap.timeline({ onComplete: () => { pending.current = null } })
    pending.current = tl
    tl.to(content.current, { y: -12, opacity: .35, duration: motion.exit })
      .to(bars.current!.children, { scaleY: 1, stagger: .025, duration: .22, ease: 'power2.in' }, 0)
      .call(commit)
      .set(content.current, { y: 0, opacity: 1 })
      .to(bars.current!.children, { scaleY: 0, stagger: .025, duration: .25, ease: 'power3.out' })
  }, [boot, playSound, reduced])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setSystemReduced(query.matches)
    update(); query.addEventListener('change', update)
    const hash = window.location.hash.slice(1)
    const resolved = levels.includes(hash as typeof levels[number]) || hash === 'menu' ? hash as Screen : aliases[hash]
    if (resolved) { setScreen(resolved); setBoot(false); if (resolved !== 'menu') setVisited([resolved]) }
    else if (personal) setVisited(['perfil'])
    try {
      if (sessionStorage.getItem('arcade-started')) setBoot(false)
      const prefs = JSON.parse(localStorage.getItem('arcade-prefs') || '{}')
      setTexture(prefs.texture !== false); setManualReduced(prefs.reduced === true)
    } catch { /* Storage can be unavailable in private browsing. */ }
    setReady(true)
    return () => { query.removeEventListener('change', update); pending.current?.kill(); void audio.current?.close().catch(() => {}) }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    if (ready) { try { localStorage.setItem('arcade-prefs', JSON.stringify({ texture, reduced: manualReduced })) } catch {} }
  }, [lang, texture, manualReduced, ready])

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('es-MX', {
          timeZone: 'America/Mexico_City',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date())
        setPueblaTime(`${timeStr} CST · PUEBLA`)
      } catch {
        setPueblaTime('PUEBLA, MX · DEV')
      }
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    function restore() {
      const hash = window.location.hash.slice(1)
      navigate(levels.includes(hash as typeof levels[number]) ? hash as Screen : aliases[hash] || 'menu', false)
    }
    window.addEventListener('hashchange', restore)
    return () => { window.removeEventListener('hashchange', restore) }
  }, [navigate])

  useEffect(() => {
    let index = 0
    const key = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement).matches('input, textarea, select') || (event.target as HTMLElement).isContentEditable) return
      if (event.key === sequence[index]) { index++; if (index === sequence.length) { setSecret(s => !s); index = 0 } } else index = event.key === sequence[0] ? 1 : 0
      if (boot && event.key === 'Enter' && !(event.target as HTMLElement).closest('button, a, summary, input')) { event.preventDefault(); try { sessionStorage.setItem('arcade-started', '1') } catch {} navigate('menu') }
      if (event.key === 'Escape') {
        const settings = root.current?.querySelector<HTMLDetailsElement>('.arc-controls details[open]')
        if (settings) { settings.open = false; settings.querySelector('summary')?.focus(); return }
      }
      if (event.key === 'Escape' && screen !== 'menu' && !event.defaultPrevented) navigate('menu')
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [screen, navigate, boot])

  useGSAP(() => {
    if (!ready) return
    const mm = gsap.matchMedia()
    if (!reduced) {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const chars = content.current?.querySelectorAll<HTMLElement>('.arc-char')
        if (chars && chars.length > 0) {
          const variant = screen === 'stack' ? { y: 18, opacity: 0 } : screen === 'educacion' ? { y: -18, rotation: 6, opacity: 0 } : { y: 22, opacity: 0 }
          gsap.fromTo(
            chars,
            { ...variant },
            { y: 0, rotation: 0, opacity: 1, stagger: 0.015, duration: 0.45, ease: 'power3.out' }
          )
        }
        if (root.current?.querySelector('[data-enter]')) gsap.from('[data-enter]', { y: 22, rotation: -.6, opacity: 0, stagger: motion.stagger, duration: motion.enter, ease: motion.ease })
        if (root.current?.querySelector('.arc-menu-option')) gsap.from('.arc-menu-option', { x: -35, opacity: 0, stagger: .065, duration: .55, ease: 'back.out(1.4)' })
        if (root.current?.querySelector('.arc-project')) gsap.from('.arc-project', { scale: .93, y: 25, stagger: .06, duration: .6, ease: 'power3.out' })
        if (root.current?.querySelector('.arc-avatar')) gsap.to('.arc-avatar', { y: -8, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })

        if (screen === 'experiencia') {
          if (root.current?.querySelector('.arc-exp-timeline-header')) {
            gsap.from('.arc-exp-timeline-header', {
              y: -18,
              opacity: 0,
              duration: 0.45,
              ease: 'power3.out',
            })
          }
        }
      })
    }
    const focus = requestAnimationFrame(() => {
      if (!boot) {
        if (screen === 'menu') menu.current?.querySelectorAll<HTMLButtonElement>('button')[menuIndex.current]?.focus({ preventScroll: true })
        else content.current?.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true })
      }
      ScrollTrigger.refresh()
    })
    return () => { mm.revert(); cancelAnimationFrame(focus) }
  }, { scope: root, dependencies: [screen, boot, reduced, ready, lang], revertOnUpdate: true })

  useEffect(() => {
    if (boot) return
    const trigger = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => setProgress(Math.round(self.progress * 100)) })
    return () => trigger.kill()
  }, [screen, boot, reduced])

  useGSAP(() => {
    if (boot || reduced) return
    const mm = gsap.matchMedia()
    mm.add('(pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const cursor = root.current!.querySelector('.arc-cursor')
      const trail = root.current!.querySelector('.arc-cursor-trail')
      const cursorX = gsap.quickTo(cursor, 'x', { duration: .08 }), cursorY = gsap.quickTo(cursor, 'y', { duration: .08 })
      const trailX = gsap.quickTo(trail, 'x', { duration: .25 }), trailY = gsap.quickTo(trail, 'y', { duration: .25 })
      const move = (event: PointerEvent) => {
        cursorX(event.clientX); cursorY(event.clientY); trailX(event.clientX); trailY(event.clientY)
        gsap.set([cursor, trail], { opacity: .7 })
      }
      const leave = () => gsap.set([cursor, trail], { opacity: 0 })
      window.addEventListener('pointermove', move); document.addEventListener('pointerleave', leave)
      return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave) }
    })
    return () => mm.revert()
  }, { scope: root, dependencies: [screen, boot, reduced], revertOnUpdate: true })

  // ScrollTrigger para mover el avatar a la esquina cuando el avatar grande sale de pantalla en el menú
  useGSAP(() => {
    if (boot || screen !== 'menu' || reduced) return
    const trigger = ScrollTrigger.create({
      trigger: '.arc-character-panel',
      start: 'bottom top+=60',
      onEnter: () => {
        const avatarEl = root.current?.querySelector('[data-flip-id="site-avatar"]')
        const state = avatarEl ? Flip.getState(avatarEl) : null
        flushSync(() => setAvatarScrolled(true))
        if (state) {
          Flip.from(state, {
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => avatarRef.current?.updateMetrics()
          })
        }
      },
      onLeaveBack: () => {
        const avatarEl = root.current?.querySelector('[data-flip-id="site-avatar"]')
        const state = avatarEl ? Flip.getState(avatarEl) : null
        flushSync(() => setAvatarScrolled(false))
        if (state) {
          Flip.from(state, {
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => avatarRef.current?.updateMetrics()
          })
        }
      }
    })
    return () => trigger.kill()
  }, { scope: root, dependencies: [boot, screen, reduced] })

  const selectMenu = contextSafe((index: number) => {
    setSelected(index); menuIndex.current = index
    const buttons = menu.current?.querySelectorAll<HTMLButtonElement>('button')
    if (!reduced && buttons) gsap.fromTo(buttons[index].querySelector('.arc-menu-arrow'), { x: -12 }, { x: 0, duration: .45, ease: 'elastic.out(1,.5)' })
  })
  function start() { try { sessionStorage.setItem('arcade-started', '1') } catch {} navigate('menu') }
  const levelIndex = levels.indexOf(screen as typeof levels[number])
  return <div ref={root} className={`arcade ${texture ? 'arc-texture' : ''} ${reduced ? 'arc-reduced' : ''} ${secret ? 'arc-secret' : ''}`}>
    <Head><title>{`${titles[screen]} — Ángel Gómez · Developer`}</title><meta name="description" content="Ángel Gómez — Frontend / Full-Stack Developer Jr. React, Next.js, TypeScript y NestJS. Puebla, México. Explora mis proyectos, experiencia y tecnologías." /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="theme-color" content="#F1EEE3" /></Head>
    <a className="arc-skip" href="#arc-main">{t('Saltar al contenido', 'Skip to content')}</a>
    <header className="arc-hud">
      <button className="arc-brand" onClick={() => { setMobileNavOpen(false); navigate('menu') }} aria-label={t('Volver al inicio', 'Back to home')}>
        <span className="arc-brand-sig">AG<span>®</span></span>
        <span className="arc-brand-text">
          <strong>Ángel Gómez</strong>
          <small className="pixel-label">DEV · PUEBLA, MX</small>
        </span>
      </button>

      <nav className="arc-hud-nav" aria-label={t('Navegación principal', 'Main navigation')}>
        {navItems.map(item => {
          const isActive = screen === item.id || (boot && item.id === 'menu')
          return (
            <button
              key={item.id}
              className={`arc-hud-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => { setMobileNavOpen(false); navigate(item.id) }}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="arc-nav-num">{item.num}</span>
              <span className="arc-nav-label">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="arc-controls">
        <a className="pixel-button arc-cv-nav-btn" href="/CV_Angel_GG.pdf" download aria-label={t('Descargar CV (PDF)', 'Download CV (PDF)')}>
          ↓ CV
        </a>
        <button className="arc-ctrl-btn" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t('Switch to English', 'Cambiar a español')}>
          {lang.toUpperCase()}
        </button>
        <button className="arc-ctrl-btn" aria-pressed={!muted} aria-label={t('Activar sonido', 'Enable sound')} onClick={() => setMuted(v => !v)}>
          {muted ? '♪ OFF' : '♪ ON'}
        </button>
        <details>
          <summary aria-label={t('Ajustes de experiencia', 'Experience settings')}>⚙</summary>
          <div className="arc-settings">
            <label><input type="checkbox" checked={texture} onChange={e => setTexture(e.target.checked)} />{t('Textura CRT', 'CRT texture')}</label>
            <label><input type="checkbox" checked={manualReduced || systemReduced} disabled={systemReduced} onChange={e => setManualReduced(e.target.checked)} />{t('Reducir movimiento', 'Reduce motion')}</label>
            <button onClick={() => setSecret(v => !v)} aria-pressed={secret}>{t('Paleta especial', 'Special palette')} ✳</button>
          </div>
        </details>
        <button
          className="arc-mobile-toggle"
          onClick={() => setMobileNavOpen(o => !o)}
          aria-expanded={mobileNavOpen}
          aria-label={mobileNavOpen ? t('Cerrar menú', 'Close menu') : t('Abrir menú', 'Open menu')}
        >
          {mobileNavOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className="arc-hud-progress-line" style={{ transform: `scaleX(${progress / 100})` }} />

      {mobileNavOpen && (
        <div className="arc-mobile-drawer">
          <div className="arc-mobile-drawer-header">
            <span className="pixel-label">{t('ÍNDICE DE SECCIONES', 'TABLE OF CONTENTS')}</span>
            <span className="pixel-label">● {pueblaTime || 'PUEBLA, MX'}</span>
          </div>
          <div className="arc-mobile-drawer-links">
            {navItems.map(item => {
              const isActive = screen === item.id || (boot && item.id === 'menu')
              return (
                <button
                  key={item.id}
                  className={`arc-mobile-item ${isActive ? 'active' : ''}`}
                  onClick={() => { setMobileNavOpen(false); navigate(item.id) }}
                >
                  <span className="pixel-label">{item.num}</span>
                  <strong>{item.label}</strong>
                  <span className="arc-mobile-arrow">{isActive ? '●' : '→'}</span>
                </button>
              )
            })}
          </div>
          <div className="arc-mobile-drawer-footer">
            <a className="pixel-button filled" href="/CV_Angel_GG.pdf" download onClick={() => setMobileNavOpen(false)}>
              ↓ {t('DESCARGAR CV (PDF)', 'DOWNLOAD CV (PDF)')}
            </a>
          </div>
        </div>
      )}
    </header>
    <main id="arc-main" ref={content} aria-busy={busy}>
      {boot ? (
        <section className="arc-boot">
          <div className="arc-boot-copy">
            <span className="pixel-label">ÁNGEL GÓMEZ / PORTFOLIO EDITORIAL · 2026</span>
            <div className="arc-boot-log" aria-hidden="true">
              <span>INICIALIZANDO PORTFOLIO EDITORIAL...</span>
              <span>PERFIL: FRONTEND & FULL-STACK DEVELOPER</span>
              <span>ESTADO: DISPONIBLE PARA PROYECTOS ...... OK</span>
            </div>
            <h1>Code.<br /><em>Play. Create.</em></h1>
            <p className="arc-script">{t('Código con intención. Arquitectura con carácter.', 'Code with intention. Architecture with character.')}</p>
            <button className="arc-start" onClick={start}>▶ {t('EXPLORAR PORTFOLIO', 'EXPLORE PORTFOLIO')}</button>
            <p className="pixel-label">{t('ENTER / CLIC PARA CONTINUAR', 'ENTER / CLICK TO CONTINUE')}</p>
            <button className="arc-skip-intro" onClick={start}>{t('Omitir intro →', 'Skip intro →')}</button>
          </div>
          <div className="arc-boot-character">
            <div style={{ width: 'min(85%, 260px)', margin: '0 auto 12px' }}>
              <InteractiveAvatar mode="large" priority reduced={reduced} />
            </div>
            <span className="pixel-label">{t('PUEBLA, MÉXICO · FULL-STACK', 'PUEBLA, MEXICO · FULL-STACK')}</span>
          </div>
        </section>
      ) : screen === 'menu' ? (
        <section className="arc-menu-screen">
          <div className="arc-menu-heading" data-enter>
            <span className="pixel-label">{t('PORTFOLIO / ÍNDICE EDITORIAL', 'PORTFOLIO / EDITORIAL INDEX')}</span>
            <h1>Ángel <em>Gómez.</em></h1>
            <p>Frontend / Full-Stack Developer Jr.</p>
            <span className="pixel-label">REACT · NEXT.JS · TYPESCRIPT · NESTJS</span>
          </div>
          <div className="arc-menu-layout">
            <div className="arc-character-panel" data-enter>
              <span className="pixel-label">{t('PUEBLA, MÉXICO · DISPONIBLE', 'PUEBLA, MEXICO · AVAILABLE')}</span>
              {!avatarScrolled && (
                <div className="arc-avatar" data-flip-id="site-avatar">
                  <InteractiveAvatar ref={avatarRef} mode="large" priority reduced={reduced} />
                </div>
              )}
              <span className="arc-script">{t('¡Hola, soy Ángel!', 'Hi, I’m Ángel!')}</span>
              <p>{t('Código con intención. Arquitectura con carácter.', 'Code with intention. Architecture with character.')}</p>
              <div className="arc-social">
                <a href="mailto:angelgom042@gmail.com">EMAIL ↗</a>
                <a href="https://github.com/Gmzyy" target="_blank" rel="noreferrer">GITHUB ↗</a>
                <a href="https://www.linkedin.com/in/angel-gomez-59b341350" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
                <a href="#proyectos" onClick={e => { e.preventDefault(); navigate('proyectos') }}>PORTFOLIO ↗</a>
              </div>
            </div>
            <nav className="arc-menu" ref={menu} aria-label={t('Seleccionar sección', 'Select section')} onKeyDown={event => { if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 5 : (selected + (event.key === 'ArrowDown' ? 1 : -1) + 6) % 6; selectMenu(next); menu.current?.querySelectorAll<HTMLButtonElement>('button')[next]?.focus() }}>
              <span className="pixel-label">{t('ÍNDICE DE CONTENIDOS', 'TABLE OF CONTENTS')}</span>
              {levels.map((level, index) => (
                <button className={`arc-menu-option ${selected === index ? 'selected' : ''}`} key={level} onFocus={() => selectMenu(index)} onPointerEnter={() => selectMenu(index)} onClick={() => navigate(level)}>
                  <span className="arc-menu-arrow" aria-hidden="true">▶</span>
                  <span className="arc-menu-number">0{index + 1}</span>
                  <span>{labels[index]}</span>
                  <small>{visited.includes(level) ? '◆' : '↗'}</small>
                </button>
              ))}
              <p className="pixel-label arc-key-hint">↑ ↓ {t('MOVER', 'NAVIGATE')} · ENTER {t('EXPLORAR', 'EXPLORE')}</p>
              <a className="pixel-button" href="/CV_Angel_GG.pdf" download>↓ {t('DESCARGAR CV (PDF)', 'DOWNLOAD CV (PDF)')}</a>
            </nav>
          </div>
        </section>
      ) : (
        <section className={`arc-level arc-level-${screen}`}>
          <div className="arc-level-header">
            <button className="pixel-button" onClick={() => navigate('menu')}>← {t('ÍNDICE', 'INDEX')} <small>ESC</small></button>
            <span className="pixel-label">PORTFOLIO / SECCIÓN 0{levelIndex + 1}</span>
          </div>
          <h1 tabIndex={-1} className="arc-level-title">
            {titles[screen].split(' ').map((word, wIdx, arr) => (
              <span key={wIdx} className="arc-word">
                {word.split('').map((char, cIdx) => (
                  <span key={cIdx} className="arc-char">
                    {char}
                  </span>
                ))}
                {wIdx < arr.length - 1 ? '\u00a0' : ''}
              </span>
            ))}
          </h1>
          <LevelContent key={screen} level={screen} reduced={reduced} />
          <div className="arc-next">
            <span className="pixel-label">{t('LEÍDO', 'READ')} {visited.length} / 6</span>
            <button className="pixel-button filled" onClick={() => navigate(levelIndex === 5 ? 'menu' : levels[levelIndex + 1])}>
              {levelIndex === 5 ? t('VOLVER AL ÍNDICE', 'BACK TO INDEX') : `${t('SIGUIENTE SECCIÓN', 'NEXT SECTION')} →`}
            </button>
          </div>
        </section>
      )}
    </main>
    <footer className="arc-footer">
      <span>© 2026 ÁNGEL GÓMEZ / GEELMZ</span>
      <span>{secret ? '★ EDICIÓN ESPECIAL ACTIVA' : t('CÓDIGO CON INTENCIÓN · HECHO EN PUEBLA', 'CODE WITH INTENTION · CRAFTED IN PUEBLA')}</span>
      <span className="pixel-label">● {t('DISPONIBLE', 'AVAILABLE')}</span>
    </footer>
    {((screen === 'menu' && avatarScrolled) || (screen !== 'menu' && !boot)) && (
      <aside
        className="arc-corner-avatar"
        data-flip-id="site-avatar"
        role="button"
        tabIndex={-1}
        aria-label={t('Volver al índice', 'Back to index')}
        title={t('Volver al índice', 'Back to index')}
      >
        <InteractiveAvatar
          ref={avatarRef}
          mode="corner"
          reduced={reduced}
          onClick={() => {
            if (screen === 'menu') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
              navigate('menu')
            }
          }}
        />
      </aside>
    )}
    <div className="arc-wipe" ref={bars} aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <span key={i} />)}</div><div className="arc-cursor" aria-hidden="true">+</div><div className="arc-cursor-trail" aria-hidden="true">·</div>
  </div>
}
