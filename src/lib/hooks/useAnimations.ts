'use client'

import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollReveal(ref: RefObject<HTMLElement>, options?: {
  delay?: number
  duration?: number
  y?: number
  stagger?: number
}) {
  // Extract values to avoid dependency on object reference
  const delay = options?.delay ?? 0
  const duration = options?.duration ?? 1
  const y = options?.y ?? 50
  const stagger = options?.stagger ?? 0

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion || !ref.current) return

    const element = ref.current

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ctx.revert()
    }
  }, [ref, delay, duration, y, stagger])
}

export function useParallax(ref: RefObject<HTMLElement>, speed: number = 0.5) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion || !ref.current) return

    const element = ref.current

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      animation.kill()
    }
  }, [ref, speed])
}

export function useTextReveal(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion || !ref.current) return

    const element = ref.current
    const chars = element.querySelectorAll('.char')

    if (chars.length === 0) return

    const animation = gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      animation.kill()
    }
  }, [ref])
}
