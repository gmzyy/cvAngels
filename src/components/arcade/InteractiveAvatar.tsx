import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/arcade/motion'
import { AVATAR_CONFIG } from './avatarConfig'

export interface InteractiveAvatarHandle {
  updateMetrics: () => void
  triggerBlink: (double?: boolean) => void
  triggerReaction: () => void
}

export interface InteractiveAvatarProps {
  mode?: 'large' | 'corner'
  debug?: boolean
  reduced?: boolean
  className?: string
  priority?: boolean
  onClick?: () => void
}

const InteractiveAvatar = forwardRef<InteractiveAvatarHandle, InteractiveAvatarProps>(
  function InteractiveAvatar(
    {
      mode = 'large',
      debug = false,
      reduced = false,
      className = '',
      priority = false,
      onClick,
    },
    ref
  ) {
    const containerRef = useRef<HTMLDivElement>(null)
    const headRef = useRef<HTMLDivElement>(null)
    const leftPupilRef = useRef<HTMLDivElement>(null)
    const rightPupilRef = useRef<HTMLDivElement>(null)
    const leftEyelidRef = useRef<HTMLDivElement>(null)
    const rightEyelidRef = useRef<HTMLDivElement>(null)

    const [isDebug, setIsDebug] = useState(debug)

    // Estado interno para control de animación
    const isIntroPlaying = useRef(true)
    const isIdle = useRef(false)
    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const idleTween = useRef<gsap.core.Timeline | null>(null)
    const blinkTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Cache para posiciones y centros en pantalla
    const metricsRef = useRef<{
      containerWidth: number
      containerHeight: number
      leftCenterX: number
      leftCenterY: number
      rightCenterX: number
      rightCenterY: number
      headCenterX: number
      headCenterY: number
    }>({
      containerWidth: 0,
      containerHeight: 0,
      leftCenterX: 0,
      leftCenterY: 0,
      rightCenterX: 0,
      rightCenterY: 0,
      headCenterX: 0,
      headCenterY: 0,
    })

    // QuickTo setters de GSAP
    const quickLeftX = useRef<gsap.QuickToFunc | null>(null)
    const quickLeftY = useRef<gsap.QuickToFunc | null>(null)
    const quickRightX = useRef<gsap.QuickToFunc | null>(null)
    const quickRightY = useRef<gsap.QuickToFunc | null>(null)
    const quickPupilScale = useRef<gsap.QuickToFunc | null>(null)
    const quickHeadRotate = useRef<gsap.QuickToFunc | null>(null)
    const quickHeadX = useRef<gsap.QuickToFunc | null>(null)
    const quickHeadY = useRef<gsap.QuickToFunc | null>(null)

    // Recalcular métricas de pantalla (en resize, scroll o final de transición Flip)
    const updateMetrics = useCallback(() => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      const w = rect.width
      const h = rect.height

      const leftCX = rect.left + (w * AVATAR_CONFIG.leftEye.centerX) / 100
      const leftCY = rect.top + (h * AVATAR_CONFIG.leftEye.centerY) / 100

      const rightCX = rect.left + (w * AVATAR_CONFIG.rightEye.centerX) / 100
      const rightCY = rect.top + (h * AVATAR_CONFIG.rightEye.centerY) / 100

      metricsRef.current = {
        containerWidth: w,
        containerHeight: h,
        leftCenterX: leftCX,
        leftCenterY: leftCY,
        rightCenterX: rightCX,
        rightCenterY: rightCY,
        headCenterX: rect.left + w / 2,
        headCenterY: rect.top + h / 2,
      }
    }, [])

    // Parpadeo con GSAP
    const triggerBlink = useCallback(
      (doubleBlink = false) => {
        if (reduced || !leftEyelidRef.current || !rightEyelidRef.current) return

        const eyelids = [leftEyelidRef.current, rightEyelidRef.current]
        const tl = gsap.timeline()

        // Cierre rápido
        tl.to(eyelids, {
          scaleY: 1,
          duration: 0.08,
          ease: 'power2.in',
        })
          // Apertura
          .to(eyelids, {
            scaleY: 0,
            duration: 0.12,
            ease: 'power2.out',
          })

        if (doubleBlink) {
          tl.to({}, { duration: 0.09 }) // micro pausa
            .to(eyelids, {
              scaleY: 1,
              duration: 0.07,
              ease: 'power2.in',
            })
            .to(eyelids, {
              scaleY: 0,
              duration: 0.11,
              ease: 'power2.out',
            })
        }
      },
      [reduced]
    )

    // Reacción divertida al hacer clic o invocar reacción
    const triggerReaction = useCallback(() => {
      if (reduced) return

      const isWink = Math.random() < 0.65
      if (isWink && rightEyelidRef.current) {
        gsap
          .timeline()
          .to(rightEyelidRef.current, { scaleY: 1, duration: 0.1, ease: 'power2.in' })
          .to(rightEyelidRef.current, {
            scaleY: 0,
            duration: 0.16,
            ease: 'back.out(2)',
          })
        if (headRef.current) {
          gsap.to(headRef.current, {
            rotation: '+=3.5',
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
          })
        }
      } else {
        triggerBlink(false)
        if (leftPupilRef.current && rightPupilRef.current) {
          gsap
            .timeline()
            .to([leftPupilRef.current, rightPupilRef.current], {
              scale: 1.35,
              duration: 0.18,
              ease: 'back.out(2.5)',
            })
            .to([leftPupilRef.current, rightPupilRef.current], {
              scale: 1,
              duration: 0.35,
              ease: 'power2.out',
              delay: 0.25,
            })
        }
      }
    }, [reduced, triggerBlink])

    // Exponer API al padre vía ref
    useImperativeHandle(
      ref,
      () => ({
        updateMetrics,
        triggerBlink,
        triggerReaction,
      }),
      [updateMetrics, triggerBlink, triggerReaction]
    )

    // Programar siguiente parpadeo aleatorio (3 - 6 seg)
    const scheduleNextBlink = useCallback(() => {
      if (reduced) return
      if (blinkTimer.current) clearTimeout(blinkTimer.current)

      const delay =
        (AVATAR_CONFIG.motion.minBlinkInterval +
          Math.random() *
            (AVATAR_CONFIG.motion.maxBlinkInterval -
              AVATAR_CONFIG.motion.minBlinkInterval)) *
        1000

      blinkTimer.current = setTimeout(() => {
        const isDouble = Math.random() < 0.28
        triggerBlink(isDouble)
        scheduleNextBlink()
      }, delay)
    }, [reduced, triggerBlink])

    // Comportamiento de inactividad (mirada que pasea de aburrido)
    const startIdleWandering = useCallback(() => {
      if (reduced || !leftPupilRef.current || !rightPupilRef.current) return
      isIdle.current = true

      const { containerWidth, containerHeight } = metricsRef.current
      if (containerWidth === 0) return

      const maxLeftX = (containerWidth * AVATAR_CONFIG.leftEye.maxDeltaX) / 100
      const maxLeftY = (containerHeight * AVATAR_CONFIG.leftEye.maxDeltaY) / 100

      if (idleTween.current) idleTween.current.kill()

      idleTween.current = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
      idleTween.current
        .to([leftPupilRef.current, rightPupilRef.current], {
          x: maxLeftX * 0.75,
          y: -maxLeftY * 0.4,
          duration: 0.6,
          ease: 'power2.out',
        })
        .to({}, { duration: 1.2 })
        .to([leftPupilRef.current, rightPupilRef.current], {
          x: -maxLeftX * 0.7,
          y: maxLeftY * 0.6,
          duration: 0.7,
          ease: 'power2.out',
        })
        .call(() => triggerBlink(false))
        .to({}, { duration: 1.4 })
        .to([leftPupilRef.current, rightPupilRef.current], {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
    }, [reduced, triggerBlink])

    const resetIdleTimer = useCallback(() => {
      if (isIdle.current) {
        isIdle.current = false
        if (idleTween.current) {
          idleTween.current.kill()
          idleTween.current = null
        }
      }
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        startIdleWandering()
      }, AVATAR_CONFIG.motion.idleTimeoutMs)
    }, [startIdleWandering])

    const handleFaceClick = () => {
      if (onClick) onClick()
      triggerReaction()
    }

    // Inicializar QuickTo y Setup
    useEffect(() => {
      if (!leftPupilRef.current || !rightPupilRef.current || !headRef.current) return

      const { motion } = AVATAR_CONFIG

      quickLeftX.current = gsap.quickTo(leftPupilRef.current, 'x', {
        duration: motion.pupilDuration,
        ease: motion.pupilEase,
      })
      quickLeftY.current = gsap.quickTo(leftPupilRef.current, 'y', {
        duration: motion.pupilDuration,
        ease: motion.pupilEase,
      })
      quickRightX.current = gsap.quickTo(rightPupilRef.current, 'x', {
        duration: motion.pupilDuration,
        ease: motion.pupilEase,
      })
      quickRightY.current = gsap.quickTo(rightPupilRef.current, 'y', {
        duration: motion.pupilDuration,
        ease: motion.pupilEase,
      })

      quickPupilScale.current = gsap.quickTo(
        [leftPupilRef.current, rightPupilRef.current],
        'scale',
        { duration: 0.22, ease: 'power2.out' }
      )

      quickHeadRotate.current = gsap.quickTo(headRef.current, 'rotation', {
        duration: motion.headDuration,
        ease: motion.headEase,
      })
      quickHeadX.current = gsap.quickTo(headRef.current, 'x', {
        duration: motion.headDuration,
        ease: motion.headEase,
      })
      quickHeadY.current = gsap.quickTo(headRef.current, 'y', {
        duration: motion.headDuration,
        ease: motion.headEase,
      })

      updateMetrics()

      window.addEventListener('resize', updateMetrics, { passive: true })
      window.addEventListener('scroll', updateMetrics, { passive: true })

      // Animación de entrada
      const eyelids = [leftEyelidRef.current, rightEyelidRef.current]
      if (!reduced && eyelids[0] && eyelids[1]) {
        gsap.set(eyelids, { scaleY: 1 }) // Ojos cerrados al iniciar
        const introTl = gsap.timeline({
          delay: 0.25,
          onComplete: () => {
            isIntroPlaying.current = false
            scheduleNextBlink()
            resetIdleTimer()
          },
        })

        introTl
          .to(eyelids, {
            scaleY: 0,
            duration: 0.35,
            ease: 'back.out(2)',
          })
          .to([leftPupilRef.current, rightPupilRef.current], {
            x: -12,
            y: -4,
            duration: 0.3,
            ease: 'power2.out',
          })
          .to([leftPupilRef.current, rightPupilRef.current], {
            x: 14,
            y: -2,
            duration: 0.32,
            ease: 'power2.out',
          })
          .to([leftPupilRef.current, rightPupilRef.current], {
            x: 0,
            y: 0,
            duration: 0.25,
            ease: 'power3.out',
          })
      } else {
        isIntroPlaying.current = false
      }

      return () => {
        window.removeEventListener('resize', updateMetrics)
        window.removeEventListener('scroll', updateMetrics)
        if (blinkTimer.current) clearTimeout(blinkTimer.current)
        if (idleTimer.current) clearTimeout(idleTimer.current)
        if (idleTween.current) idleTween.current.kill()
      }
    }, [updateMetrics, reduced, scheduleNextBlink, resetIdleTimer])

    // Seguimiento del cursor con elipse y reacción a hover
    useEffect(() => {
      if (reduced) {
        quickLeftX.current?.(0)
        quickLeftY.current?.(0)
        quickRightX.current?.(0)
        quickRightY.current?.(0)
        quickHeadRotate.current?.(0)
        quickHeadX.current?.(0)
        quickHeadY.current?.(0)
        return
      }

      const handlePointerMove = (e: PointerEvent) => {
        if (isIntroPlaying.current) return
        resetIdleTimer()

        const {
          containerWidth,
          containerHeight,
          leftCenterX,
          leftCenterY,
          rightCenterX,
          rightCenterY,
          headCenterX,
          headCenterY,
        } = metricsRef.current

        if (containerWidth === 0) return

        const clientX = e.clientX
        const clientY = e.clientY

        // 1. OJO IZQUIERDO
        const dLeftX = clientX - leftCenterX
        const dLeftY = clientY - leftCenterY
        const maxLeftX = (containerWidth * AVATAR_CONFIG.leftEye.maxDeltaX) / 100
        const maxLeftY = (containerHeight * AVATAR_CONFIG.leftEye.maxDeltaY) / 100

        const leftSens = AVATAR_CONFIG.motion.pointerSensitivity
        const rawLeftX = (dLeftX / leftSens) * maxLeftX
        const rawLeftY = (dLeftY / leftSens) * maxLeftY

        const leftDistNorm = Math.sqrt(
          (rawLeftX / maxLeftX) ** 2 + (rawLeftY / maxLeftY) ** 2
        )
        const finalLeftX = leftDistNorm > 1 ? rawLeftX / leftDistNorm : rawLeftX
        const finalLeftY = leftDistNorm > 1 ? rawLeftY / leftDistNorm : rawLeftY

        quickLeftX.current?.(finalLeftX)
        quickLeftY.current?.(finalLeftY)

        // 2. OJO DERECHO
        const dRightX = clientX - rightCenterX
        const dRightY = clientY - rightCenterY
        const maxRightX = (containerWidth * AVATAR_CONFIG.rightEye.maxDeltaX) / 100
        const maxRightY = (containerHeight * AVATAR_CONFIG.rightEye.maxDeltaY) / 100

        const rightSens = AVATAR_CONFIG.motion.pointerSensitivity
        const rawRightX = (dRightX / rightSens) * maxRightX
        const rawRightY = (dRightY / rightSens) * maxRightY

        const rightDistNorm = Math.sqrt(
          (rawRightX / maxRightX) ** 2 + (rawRightY / maxRightY) ** 2
        )
        const finalRightX = rightDistNorm > 1 ? rawRightX / rightDistNorm : rawRightX
        const finalRightY = rightDistNorm > 1 ? rawRightY / rightDistNorm : rawRightY

        quickRightX.current?.(finalRightX)
        quickRightY.current?.(finalRightY)

        // 3. PARALLAX Y ROTACIÓN SUTIL DE LA CABEZA
        const dHeadX = (clientX - headCenterX) / (window.innerWidth / 2)
        const dHeadY = (clientY - headCenterY) / (window.innerHeight / 2)

        const clampedNormX = Math.max(-1, Math.min(1, dHeadX))
        const clampedNormY = Math.max(-1, Math.min(1, dHeadY))

        const rot = clampedNormX * AVATAR_CONFIG.motion.maxHeadRotateDeg
        const transX = clampedNormX * AVATAR_CONFIG.motion.maxHeadTranslatePx
        const transY = clampedNormY * (AVATAR_CONFIG.motion.maxHeadTranslatePx * 0.75)

        quickHeadRotate.current?.(rot)
        quickHeadX.current?.(transX)
        quickHeadY.current?.(transY)

        // 4. REACCIÓN HOVER SOBRE ELEMENTOS INTERACTIVOS (dilatación leve)
        const target = e.target as HTMLElement | null
        const isInteractive = target?.closest(
          'button, a, input, select, textarea, [role="button"], .arc-menu-option, .arc-project, .arc-stat'
        )
        if (isInteractive) {
          quickPupilScale.current?.(1.22)
        } else {
          quickPupilScale.current?.(1.0)
        }
      }

      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      window.addEventListener('pointerdown', handlePointerMove, { passive: true })

      return () => {
        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('pointerdown', handlePointerMove)
      }
    }, [reduced, resetIdleTimer])

    // Atajo Shift+D para debug
    useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'D' && e.shiftKey) {
          setIsDebug(prev => !prev)
        }
      }
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }, [])

    const { leftEye, rightEye } = AVATAR_CONFIG

    return (
      <div
        ref={containerRef}
        className={`interactive-avatar mode-${mode} ${className}`}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: `${AVATAR_CONFIG.imageWidth} / ${AVATAR_CONFIG.imageHeight}`,
          userSelect: 'none',
          display: 'block',
          cursor: 'pointer',
        }}
        aria-hidden="true"
        onClick={handleFaceClick}
      >
        <div
          ref={headRef}
          className="avatar-head-layer"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformOrigin: '50% 65%',
            willChange: 'transform',
          }}
        >
          {/* Ilustración de la cara */}
          <Image
            src="/caralogo.png"
            alt="Avatar ilustrado Ángel Gómez"
            width={AVATAR_CONFIG.imageWidth}
            height={AVATAR_CONFIG.imageHeight}
            priority={priority}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none',
            }}
          />

          {/* OJO IZQUIERDO */}
          <div
            className="avatar-eye-socket eye-left"
            style={{
              position: 'absolute',
              left: `${leftEye.left}%`,
              top: `${leftEye.top}%`,
              width: `${leftEye.width}%`,
              height: `${leftEye.height}%`,
              borderRadius: leftEye.clipRadius,
              overflow: 'hidden',
              pointerEvents: 'none',
              outline: isDebug ? '1.5px dashed rgba(255, 0, 0, 0.9)' : 'none',
            }}
          >
            {/* Pupila */}
            <div
              ref={leftPupilRef}
              className="avatar-pupil"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: `${(leftEye.pupilSizePct / leftEye.width) * 100}%`,
                height: `${
                  ((leftEye.pupilSizePct * AVATAR_CONFIG.aspectRatio) /
                    leftEye.height) *
                  100
                }%`,
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                backgroundColor: AVATAR_CONFIG.pupilColor,
                willChange: 'transform',
              }}
            />

            {/* Párpado */}
            <div
              ref={leftEyelidRef}
              className="avatar-eyelid"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: AVATAR_CONFIG.skinColor,
                transformOrigin: 'top center',
                transform: 'scaleY(0)',
                willChange: 'transform',
              }}
            />
          </div>

          {/* OJO DERECHO */}
          <div
            className="avatar-eye-socket eye-right"
            style={{
              position: 'absolute',
              left: `${rightEye.left}%`,
              top: `${rightEye.top}%`,
              width: `${rightEye.width}%`,
              height: `${rightEye.height}%`,
              borderRadius: rightEye.clipRadius,
              overflow: 'hidden',
              pointerEvents: 'none',
              outline: isDebug ? '1.5px dashed rgba(255, 0, 0, 0.9)' : 'none',
            }}
          >
            {/* Pupila */}
            <div
              ref={rightPupilRef}
              className="avatar-pupil"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: `${(rightEye.pupilSizePct / rightEye.width) * 100}%`,
                height: `${
                  ((rightEye.pupilSizePct * AVATAR_CONFIG.aspectRatio) /
                    rightEye.height) *
                  100
                }%`,
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                backgroundColor: AVATAR_CONFIG.pupilColor,
                willChange: 'transform',
              }}
            />

            {/* Párpado */}
            <div
              ref={rightEyelidRef}
              className="avatar-eyelid"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: AVATAR_CONFIG.skinColor,
                transformOrigin: 'top center',
                transform: 'scaleY(0)',
                willChange: 'transform',
              }}
            />
          </div>

          {/* OVERLAY DEBUG */}
          {isDebug && (
            <div
              className="avatar-debug-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 99,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: `${leftEye.centerX}%`,
                  top: `${leftEye.centerY}%`,
                  width: 6,
                  height: 6,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'cyan',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: `${rightEye.centerX}%`,
                  top: `${rightEye.centerY}%`,
                  width: 6,
                  height: 6,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'cyan',
                  borderRadius: '50%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: 4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0,0,0,0.85)',
                  color: '#fff',
                  fontSize: 10,
                  padding: '2px 6px',
                  fontFamily: 'monospace',
                  borderRadius: 2,
                }}
              >
                DEBUG (Shift+D)
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
)

export default InteractiveAvatar
