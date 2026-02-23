"use client"
import { useEffect, useState, useRef } from "react"

/** Returns a ref + boolean: true when the element has entered the viewport. */
export function useInView(threshold = 0.15) {
    const ref = useRef<HTMLElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
            { threshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [threshold])

    return { ref, inView }
}

/** Counts from 0 to target when triggered. */
export function useCounter(target: number, duration = 1200, trigger = false) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (!trigger) return
        let start: number | null = null
        const step = (ts: number) => {
            if (!start) start = ts
            const progress = Math.min((ts - start) / duration, 1)
            setValue(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [trigger, target, duration])

    return value
}
