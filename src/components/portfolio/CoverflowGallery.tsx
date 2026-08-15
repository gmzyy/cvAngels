"use client"

import {
    useState,
    useEffect,
    useCallback,
    useRef,
    type CSSProperties,
} from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const useIsStaticRenderer = () => false

export interface CoverflowSlide {
    image?: { src?: string; srcSet?: string; alt?: string }
    title?: string
    subtitle?: string
    demoUrl?: string
    techStack?: string[]
}

export type AutoplayDir = "leftToRight" | "rightToLeft"
export type TitleCorner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

export interface Smooth3DSlideshowProps {
    slides?: CoverflowSlide[]
    cardWidth?: number
    cardHeight?: number
    radius?: number
    tilt?: number
    sideTilt?: number
    gap?: number
    opacity?: number
    transition?: any
    autoplay?: boolean
    autoplayDirection?: AutoplayDir
    showTitle?: boolean
    titleFont?: CSSProperties
    titleColor?: string
    titlePosition?: {
        position?: TitleCorner
        paddingLeft?: number
        paddingRight?: number
        paddingTop?: number
        paddingBottom?: number
    }
    style?: CSSProperties
    onSelectSlide?: (slide: CoverflowSlide, index: number) => void
    onOpenModal?: (slide: CoverflowSlide, index: number) => void
}

const DEFAULT_SLIDES: CoverflowSlide[] = [
    {
        image: {
            src: "/barber.png",
        },
        title: "Barber Ángeles",
        subtitle: "Plataforma Web de Citas",
        demoUrl: "https://barber-angeles.vercel.app/home",
    },
    {
        image: {
            src: "/empaques.png",
        },
        title: "San Andrés Empaques",
        subtitle: "Catálogo Industrial B2B",
        demoUrl: "https://emciel.vercel.app/",
    },
    {
        image: {
            src: "/staickasaas.png",
        },
        title: "Staicka SaaS",
        subtitle: "Plataforma Web SaaS & IA",
        demoUrl: "https://staicka.vercel.app/",
    },
    {
        image: {
            src: "/tallerMecanico.png",
        },
        title: "Taller Mecánico Nava",
        subtitle: "Cotización Automotriz",
        demoUrl: "https://nava-opal.vercel.app/",
    },
    {
        image: {
            src: "/emciel.png",
        },
        title: "EMCiel Nails",
        subtitle: "Sistema de Citas & Estética",
        demoUrl: "https://emciel.vercel.app/",
    },
]

const PERSPECTIVE = 1600
const SCALE_STEP = 0.16
const MAX_VISIBLE = 2
const DEPTH = 240

function cssTransition(t: any): { dur: number; ease: string } {
    const dur = t && typeof t.duration === "number" ? t.duration : 0.6
    let ease = "cubic-bezier(0.22, 1, 0.36, 1)"
    const e = t?.ease
    if (Array.isArray(e) && e.length === 4) {
        ease = `cubic-bezier(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`
    } else if (typeof e === "string") {
        const map: Record<string, string> = {
            linear: "linear",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
        }
        ease = map[e] || "ease"
    }
    return { dur, ease }
}

export default function CoverflowGallery(props: Smooth3DSlideshowProps) {
    props = { ...COMPONENT_DEFAULTS, ...props }
    const {
        slides = DEFAULT_SLIDES,
        radius = 8,
        tilt = 12,
        sideTilt = 8,
        opacity = 60,
        transition,
        autoplay = false,
        autoplayDirection = "rightToLeft",
        showTitle = true,
        titleColor = "#ffffff",
        titlePosition,
        style,
        onSelectSlide,
        onOpenModal,
    } = props

    const [cardDim, setCardDim] = useState({ width: 480, height: 340, gap: 8 })

    useEffect(() => {
        const handleResize = () => {
            const w = typeof window !== "undefined" ? window.innerWidth : 1200
            if (w < 480) {
                setCardDim({ width: Math.min(w - 40, 310), height: 230, gap: 4 })
            } else if (w < 768) {
                setCardDim({ width: 380, height: 270, gap: 6 })
            } else {
                setCardDim({ width: 480, height: 340, gap: 8 })
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const cardWidth = cardDim.width
    const cardHeight = cardDim.height
    const gap = cardDim.gap

    const tp = titlePosition || {}
    const padLeft = tp.paddingLeft ?? 18
    const padRight = tp.paddingRight ?? 18
    const padBottom = tp.paddingBottom ?? 18

    const isStatic = useIsStaticRenderer()
    const list = slides && slides.length ? slides : DEFAULT_SLIDES
    const n = list.length

    const loop = true
    const [active, setActive] = useState(0)

    useEffect(() => {
        setActive((a) => Math.max(0, Math.min(n - 1, a)))
    }, [n])

    const moveDur =
        transition && typeof transition.duration === "number"
            ? transition.duration
            : 0.6
    const lockRef = useRef(false)
    const lock = useCallback(() => {
        lockRef.current = true
        window.setTimeout(
            () => {
                lockRef.current = false
            },
            Math.max(50, moveDur * 1000)
        )
    }, [moveDur])

    const changeActiveIndex = useCallback(
        (newIdx: number) => {
            setActive(newIdx)
            if (onSelectSlide && list[newIdx]) {
                onSelectSlide(list[newIdx], newIdx)
            }
        },
        [list, onSelectSlide]
    )

    const step = useCallback(
        (dir: number) => {
            if (lockRef.current) return
            lock()
            setActive((a) => {
                const next = (((a + dir) % n) + n) % n
                if (onSelectSlide && list[next]) {
                    onSelectSlide(list[next], next)
                }
                return next
            })
        },
        [n, lock, list, onSelectSlide]
    )

    const handleCardClick = useCallback(
        (i: number) => {
            if (isStatic || lockRef.current) return
            lock()
            if (i === active) {
                if (onOpenModal) onOpenModal(list[i], i)
            } else {
                changeActiveIndex(i)
            }
        },
        [isStatic, active, lock, list, changeActiveIndex, onOpenModal]
    )

    // Touch Swipe Gestures for Mobile
    const touchStartRef = useRef<number | null>(null)
    const touchEndRef = useRef<number | null>(null)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartRef.current = e.targetTouches[0].clientX
        touchEndRef.current = null
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndRef.current = e.targetTouches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!touchStartRef.current || !touchEndRef.current) return
        const distance = touchStartRef.current - touchEndRef.current
        if (distance > 35) {
            step(1)
        } else if (distance < -35) {
            step(-1)
        }
    }

    const delay =
        transition && typeof transition.delay === "number"
            ? transition.delay
            : 2.5
    useEffect(() => {
        if (isStatic || !autoplay || n < 2) return
        const ms = Math.max(0.3, delay) * 1000
        const dir = autoplayDirection === "leftToRight" ? -1 : 1
        const id = window.setInterval(() => step(dir), ms)
        return () => window.clearInterval(id)
    }, [isStatic, autoplay, autoplayDirection, delay, n, step])

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                e.preventDefault()
                step(1)
            } else if (e.key === "ArrowLeft") {
                e.preventDefault()
                step(-1)
            }
        },
        [step]
    )

    const { dur, ease } = cssTransition(transition)
    const transitionCss = `transform ${dur}s ${ease}, opacity ${dur}s ${ease}`

    const effectiveRadius =
        (Math.max(0, Math.min(20, radius)) / 20) *
        (Math.min(cardWidth, cardHeight) / 2)
    const dim = 1 - Math.max(0, Math.min(100, opacity)) / 100

    const rootStyle: CSSProperties = {
        ...(style || {}),
        position: "relative",
        width: "100%",
        height: "100%",
        minWidth: 300,
        minHeight: cardHeight + 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: `${PERSPECTIVE}px`,
        overflow: "hidden",
        outline: "none",
        touchAction: "pan-y",
    }

    return (
        <div
            style={rootStyle}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            onKeyDown={isStatic ? undefined : onKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                style={{
                    position: "relative",
                    width: cardWidth,
                    height: cardHeight,
                    transformStyle: "preserve-3d",
                }}
            >
                {list.map((slide, i) => {
                    let rel = i - active
                    if (loop) {
                        if (rel > n / 2) rel -= n
                        if (rel < -n / 2) rel += n
                    }
                    const ax = Math.abs(rel)
                    const visible = ax <= MAX_VISIBLE
                    const isActive = rel === 0
                    const sc = Math.max(0.4, 1 - ax * SCALE_STEP)
                    const tx = rel * (gap * 32)
                    const tz = -ax * DEPTH
                    const ry = -rel * tilt
                    const rz = rel * sideTilt
                    const src = slide.image?.src || ""

                    const cardStyle: CSSProperties = {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: cardWidth,
                        height: cardHeight,
                        borderRadius: effectiveRadius,
                        overflow: "hidden",
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
                        transition: transitionCss,
                        opacity: visible ? 1 : 0,
                        cursor: "pointer",
                        pointerEvents: visible && !isStatic ? "auto" : "none",
                        backgroundColor: "#0A0E1A",
                        border: isActive ? "1px solid rgba(255, 255, 255, 0.45)" : "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: isActive ? "0 20px 50px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 255, 255, 0.25)" : "0 10px 30px rgba(0,0,0,0.7)",
                    }

                    return (
                        <div
                            key={i}
                            style={cardStyle}
                            onClick={
                                isStatic ? undefined : () => handleCardClick(i)
                            }
                            aria-label={slide.title}
                            aria-hidden={!visible}
                        >
                            {src ? (
                                <img
                                    src={src}
                                    alt={slide.image?.alt || slide.title || ""}
                                    draggable={false}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "top",
                                        display: "block",
                                        userSelect: "none",
                                    }}
                                />
                            ) : null}

                            {showTitle && (
                                <>
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(3,7,18,0.92) 100%)",
                                            pointerEvents: "none",
                                        }}
                                    />

                                    <div
                                        style={{
                                            position: "absolute",
                                            left: padLeft,
                                            right: padRight,
                                            bottom: padBottom,
                                            textAlign: "left",
                                            pointerEvents: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "2px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: titleColor,
                                                fontSize: cardWidth < 350 ? 18 : 22,
                                                fontWeight: 700,
                                                lineHeight: "1.1em",
                                                fontFamily: "var(--font-display)",
                                                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                                            }}
                                        >
                                            {slide.title}
                                        </span>
                                        {slide.subtitle && (
                                            <span
                                                style={{
                                                    color: "#CBD5E1",
                                                    fontSize: cardWidth < 350 ? 12 : 13,
                                                    fontFamily: "var(--font-mono)",
                                                    opacity: 0.9,
                                                }}
                                            >
                                                {slide.subtitle}
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* Dim overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "#000000",
                                    opacity: isActive ? 0 : dim,
                                    transition: `opacity ${dur}s ${ease}`,
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                    )
                })}
            </div>

            {/* TOUCH-FRIENDLY FLOATING NAVIGATION ARROW BUTTONS FOR MOBILE & DESKTOP */}
            <button
                onClick={() => step(-1)}
                aria-label="Anterior proyecto"
                style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 20,
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(10, 14, 26, 0.85)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.8)",
                }}
            >
                <ChevronLeft size={22} />
            </button>

            <button
                onClick={() => step(1)}
                aria-label="Siguiente proyecto"
                style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 20,
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(10, 14, 26, 0.85)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.8)",
                }}
            >
                <ChevronRight size={22} />
            </button>
        </div>
    )
}

const COMPONENT_DEFAULTS: Smooth3DSlideshowProps = {
    slides: DEFAULT_SLIDES,
    radius: 6,
    tilt: 12,
    sideTilt: 8,
    opacity: 60,
    autoplay: false,
    autoplayDirection: "rightToLeft" as AutoplayDir,
    transition: {
        type: "tween",
        duration: 0.6,
        delay: 2.5,
        ease: [0.22, 1, 0.36, 1],
    },
    showTitle: true,
    titleColor: "#ffffff",
    titlePosition: {
        position: "bottomLeft" as TitleCorner,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 18,
        paddingBottom: 18,
    },
}
