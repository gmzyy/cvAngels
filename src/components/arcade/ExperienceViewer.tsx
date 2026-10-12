import React, { useState, useRef, useEffect, useCallback } from 'react'
import { getExperience } from '@/content/arcade'
import { useLanguage } from '@/context/LanguageContext'
import { gsap, useGSAP } from '@/lib/arcade/motion'

interface ExperienceViewerProps {
  reduced: boolean
}

export default function ExperienceViewer({ reduced }: ExperienceViewerProps) {
  const { t } = useLanguage()
  const jobs = getExperience(t)
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const cardRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const goToMission = useCallback(
    (index: number) => {
      if (index === activeIdx) return
      setDirection(index > activeIdx ? 1 : -1)
      setActiveIdx(index)
    },
    [activeIdx]
  )

  const prevMission = useCallback(() => {
    if (activeIdx > 0) goToMission(activeIdx - 1)
  }, [activeIdx, goToMission])

  const nextMission = useCallback(() => {
    if (activeIdx < jobs.length - 1) goToMission(activeIdx + 1)
  }, [activeIdx, jobs.length, goToMission])

  // Soporte de gestos táctiles (Swipe en móvil)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const diffX = touchStartX.current - e.changedTouches[0].clientX
    const diffY = touchStartY.current - e.changedTouches[0].clientY

    // Validar que sea un swipe predominantemente horizontal
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.4) {
      if (diffX > 0) {
        nextMission()
      } else {
        prevMission()
      }
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  // Soporte de navegación por teclado (flechas izquierda/derecha cuando está enfocado)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prevMission()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      nextMission()
    }
  }

  // Animaciones GSAP de entrada y transición entre misiones
  useGSAP(
    () => {
      if (reduced || !cardRef.current) return

      const tl = gsap.timeline()

      // 1. Entrada de la tarjeta con deslizamiento según la dirección
      tl.fromTo(
        cardRef.current,
        {
          opacity: 0,
          x: direction * 32,
          scale: 0.98,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.42,
          ease: 'power3.out',
        }
      )

      // 2. Barra de experiencia / progreso
      const barSpan = cardRef.current.querySelector('.arc-mission-bar span')
      if (barSpan) {
        tl.fromTo(
          barSpan,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: 'power2.out' },
          0.08
        )
      }

      // 3. Cascada en viñetas de logros
      const bullets = cardRef.current.querySelectorAll('.arc-mission-bullets li')
      if (bullets.length > 0) {
        tl.fromTo(
          bullets,
          { opacity: 0, x: -14 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.045,
            duration: 0.35,
            ease: 'power2.out',
          },
          0.12
        )
      }

      // 4. Pop-in de etiquetas de stack
      const tags = cardRef.current.querySelectorAll('.arc-tags span')
      if (tags.length > 0) {
        tl.fromTo(
          tags,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.02,
            duration: 0.25,
            ease: 'back.out(1.8)',
          },
          0.2
        )
      }
    },
    { scope: rootRef, dependencies: [activeIdx, reduced, direction] }
  )

  const currentJob = jobs[activeIdx]

  return (
    <div
      ref={rootRef}
      className="arc-exp-viewer"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={t(
        'Explorador interactivo de trayectoria profesional',
        'Interactive professional journey explorer'
      )}
    >
      {/* 1. Barra de progreso visual y timeline de misiones */}
      <div className="arc-exp-timeline-header">
        <div className="arc-exp-progress-tracker">
          <div className="arc-exp-tracker-line">
            <div
              className="arc-exp-tracker-fill"
              style={{
                width: `${((activeIdx + 1) / jobs.length) * 100}%`,
              }}
            />
          </div>
          <div className="arc-exp-milestones">
            {jobs.map((job, idx) => (
              <button
                key={job.company}
                className={`arc-exp-milestone-node ${
                  idx === activeIdx ? 'active' : idx < activeIdx ? 'completed' : ''
                }`}
                onClick={() => goToMission(idx)}
                aria-current={idx === activeIdx ? 'step' : undefined}
                aria-label={`Misión 0${idx + 1}: ${job.company}`}
              >
                <span className="arc-node-gem">{idx === activeIdx ? '▶' : '◆'}</span>
                <span className="arc-node-label">
                  <span className="pixel-label">0{idx + 1}</span> {job.company}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Controles de Navegación Rápida */}
        <div className="arc-exp-controls-row">
          <div className="arc-mission-tabs">
            {jobs.map((job, idx) => (
              <button
                key={job.company}
                className={`pixel-button ${activeIdx === idx ? 'filled' : ''}`}
                onClick={() => goToMission(idx)}
              >
                <span aria-hidden="true">{activeIdx === idx ? '▶' : '◇'}</span> 0
                {idx + 1}. {job.company}
              </button>
            ))}
          </div>

          <div className="arc-mission-stepper">
            <button
              className="pixel-button"
              onClick={prevMission}
              disabled={activeIdx === 0}
              aria-label={t('Misión anterior', 'Previous mission')}
            >
              ◀ {t('ANT', 'PREV')}
            </button>
            <span className="pixel-label">
              0{activeIdx + 1} / 0{jobs.length}
            </span>
            <button
              className="pixel-button"
              onClick={nextMission}
              disabled={activeIdx === jobs.length - 1}
              aria-label={t('Siguiente misión', 'Next mission')}
            >
              {t('SIG', 'NEXT')} ▶
            </button>
          </div>
        </div>
      </div>

      {/* 2. Tarjeta activa de la misión con soporte Swipe táctil */}
      <div
        className="arc-exp-card-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <article
          ref={cardRef}
          key={currentJob.company}
          className="arc-mission arc-mission-active arc-exp-active-card"
        >
          {/* Cabecera de la Misión */}
          <div className="arc-mission-top">
            <div className="arc-exp-badge-group">
              <span className="pixel-label arc-exp-status-tag">
                ● {t('MISIÓN ACTIVA', 'ACTIVE MISSION')} 0{activeIdx + 1}/0
                {jobs.length}
              </span>
              <p className="pixel-label arc-mission-period">{currentJob.period}</p>
            </div>
            <span className="arc-achievement">
              ◆ {currentJob.badge || t('TRAYECTORIA', 'EXPERIENCE')}
            </span>
          </div>

          {/* Título de la empresa y rol */}
          <div className="arc-exp-title-block">
            <h3>{currentJob.company}</h3>
            <p className="arc-mission-role">{currentJob.role}</p>
          </div>

          {/* Barra de experiencia dinámica */}
          <div className="arc-mission-bar" aria-hidden="true">
            <span />
          </div>

          {/* Viñetas de logros clave */}
          <ul className="arc-mission-bullets">
            {currentJob.bullets.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>

          {/* Stack Tecnológico */}
          <div className="arc-exp-stack-section">
            <span className="pixel-label arc-exp-stack-label">
              {t('STACK Y HERRAMIENTAS CLAVE:', 'KEY STACK & TOOLS:')}
            </span>
            <div className="arc-tags">
              {currentJob.stack.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Indicador inferior para móviles (swipe hint) */}
          <div className="arc-exp-swipe-hint" aria-hidden="true">
            <span>← {t('Desliza para explorar misiones', 'Swipe to explore missions')} →</span>
          </div>
        </article>
      </div>

      {/* 3. Paginador de puntos en móvil */}
      <div className="arc-exp-mobile-pips" aria-hidden="true">
        {jobs.map((_, i) => (
          <button
            key={i}
            className={`arc-exp-pip ${i === activeIdx ? 'active' : ''}`}
            onClick={() => goToMission(i)}
            tabIndex={-1}
          />
        ))}
      </div>
    </div>
  )
}
