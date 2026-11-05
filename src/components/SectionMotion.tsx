'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/** Progressive enhancement: all copy remains visible without JS or with reduced motion. */
export default function SectionMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let disposed = false
    let revert = () => {}
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (disposed || !root.current) return
        gsap.registerPlugin(ScrollTrigger)
        const media = gsap.matchMedia()
        revert = () => media.revert()
        media.add(
          { motion: '(prefers-reduced-motion: no-preference)', wide: '(min-width: 901px)' },
          (context) => {
            if (!context.conditions?.motion) return
            const scope = root.current!
            scope.querySelectorAll<HTMLElement>('[data-enter]').forEach((el) => {
              gsap.from(el, {
                y: el.matches('details, a, button') ? 0 : 26,
                opacity: 0,
                duration: 0.65,
                ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 94%', once: true },
              })
            })
            scope.querySelectorAll<HTMLElement>('.service-row').forEach((row) => {
              gsap.from(row.querySelector('.service-copy'), {
                x: 24,
                opacity: 0.2,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: { trigger: row, start: 'top 90%', once: true },
              })
              gsap.fromTo(
                row.querySelector('.row-trace'),
                { scaleX: 0 },
                {
                  scaleX: 1,
                  ease: 'none',
                  scrollTrigger: { trigger: row, start: 'top 86%', end: 'bottom 54%', scrub: 0.4 },
                }
              )
            })
            const process = scope.querySelector('.process')
            const track = scope.querySelector('.process-track-fill')
            if (process && track) {
              const wide = context.conditions?.wide
              const sequence = gsap.timeline({
                scrollTrigger: {
                  trigger: process,
                  start: 'top 72%',
                  end: 'bottom 54%',
                  scrub: 0.45,
                },
              })
              sequence.fromTo(
                track,
                wide ? { scaleX: 0, scaleY: 1 } : { scaleY: 0, scaleX: 1 },
                wide
                  ? { scaleX: 1, duration: 1, ease: 'none' }
                  : { scaleY: 1, duration: 1, ease: 'none' },
                0
              )
              scope.querySelectorAll('.steps .number').forEach((number, i) =>
                sequence.to(
                  number,
                  {
                    backgroundColor: '#6631a0',
                    color: '#ffffff',
                    borderColor: '#6631a0',
                    duration: 0.12,
                  },
                  i * 0.27
                )
              )
            }
            const monthly = scope.querySelector('.monthly')
            if (monthly) {
              gsap.to(scope.querySelector('.cycle-orbit'), {
                rotation: 240,
                svgOrigin: '120 120',
                ease: 'none',
                scrollTrigger: {
                  trigger: monthly,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.7,
                },
              })
              gsap.fromTo(
                scope.querySelector('.cycle-core'),
                { scale: 0.85 },
                {
                  scale: 1.08,
                  svgOrigin: '120 120',
                  ease: 'none',
                  scrollTrigger: {
                    trigger: monthly,
                    start: 'top 85%',
                    end: 'bottom 25%',
                    scrub: 0.6,
                  },
                }
              )
            }
            const contact = scope.querySelector('.contact-section')
            if (contact)
              gsap.from(scope.querySelector('.contact-stroke'), {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: { trigger: contact, start: 'top 78%', once: true },
              })
            // Keyboard navigation must never land on copy still awaiting an entrance.
            const onFocus = (event: FocusEvent) => {
              const target = (event.target as HTMLElement).closest<HTMLElement>(
                '[data-enter],.service-copy'
              )
              if (target) {
                gsap.killTweensOf(target)
                gsap.set(target, { opacity: 1, x: 0, y: 0 })
              }
            }
            const onToggle = () => ScrollTrigger.refresh()
            scope.addEventListener('toggle', onToggle, true)
            scope.addEventListener('focusin', onFocus)
            return () => {
              scope.removeEventListener('focusin', onFocus)
              scope.removeEventListener('toggle', onToggle, true)
            }
          },
          root.current
        )
      })
      .catch(() => {
        revert() // Restore static content after an initialization failure.
      })
    return () => {
      disposed = true
      revert()
    }
  }, [])
  return (
    <div ref={root} className="section-motion">
      {children}
    </div>
  )
}
