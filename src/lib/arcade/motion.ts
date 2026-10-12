import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Flip } from 'gsap/dist/Flip'
import { SplitText } from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip, SplitText)
export { gsap, ScrollTrigger, Flip, SplitText, useGSAP }
export const motion = { enter: .65, exit: .22, stagger: .055, ease: 'power3.out' }
export const levels = ['perfil', 'stack', 'experiencia', 'proyectos', 'educacion', 'contacto'] as const
export type Level = typeof levels[number]
export type Screen = 'menu' | Level
