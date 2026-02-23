import type { Transition } from "framer-motion"

// Easing as a proper tuple (Framer Motion accepts [x1, y1, x2, y2] cubic bezier)
const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export const defaultTransition: Transition = { duration: 0.5, ease }
export const fastTransition: Transition = { duration: 0.3, ease }
export const springTransition: Transition = { type: "spring", stiffness: 260, damping: 24 }

export const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

export const slideInLeft = {
    initial: { opacity: 0, x: -16 },
    animate: { opacity: 1, x: 0 },
}

export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
}

export const drawLine = {
    initial: { scaleY: 0, originY: 0 },
    animate: { scaleY: 1 },
}

export const staggerContainer = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
}

export const staggerContainerFast = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.04, delayChildren: 0.05 },
    },
}
