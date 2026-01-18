'use client'

import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { useGSAPContext } from '@/lib/hooks/useGSAPContext'
import { usePrefersReducedMotion } from '@/lib/hooks/useIsMobile'

const steps = [
  {
    number: '01',
    title: 'Entender',
    description: 'Llamada de 30 min para entender oferta, audiencia y objetivo.',
  },
  {
    number: '02',
    title: 'Diseñar',
    description: 'Estructura y wireframe con foco en CTA y flujo.',
  },
  {
    number: '03',
    title: 'Construir',
    description: 'Implementación + tracking + optimización de velocidad.',
  },
  {
    number: '04',
    title: 'Entregar',
    description: 'Deploy, handoff y 2 rondas de cambios.',
  },
]

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAPContext(sectionRef, async () => {
    if (prefersReducedMotion || !lineRef.current) return

    const gsap = (await import('gsap')).default
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    // Line draw animation
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
      }
    )

    // Stagger cards entrance
    const validSteps = stepsRef.current.filter(Boolean)
    gsap.fromTo(
      validSteps,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )
  })

  return (
    <Section ref={sectionRef}>
      <div className="container-custom max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">Cómo trabajamos</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Proceso simple para entregar resultados rápido.
          </p>
        </div>

        <div className="relative">
          {/* Timeline spine - decorative only, no pointer events */}
          <div
            className="absolute left-6 md:left-1/2 top-8 bottom-8 w-px pointer-events-none -z-10 md:-translate-x-1/2"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-dark-border" />
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-b from-accent-cyan via-accent-green to-accent-lime origin-top"
              style={{ transform: prefersReducedMotion ? 'scaleY(1)' : 'scaleY(0)' }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => {
                  stepsRef.current[i] = el
                }}
                className={`relative ${i % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}
                style={{ opacity: prefersReducedMotion ? 1 : 0 }}
              >
                {/* Dot connector */}
                <div
                  className={`absolute top-6 ${
                    i % 2 === 0
                      ? 'left-6 md:left-auto md:-right-8'
                      : 'left-6 md:-left-8'
                  } w-4 h-4 bg-accent-cyan rounded-full ring-4 ring-dark -z-10 pointer-events-none`}
                  aria-hidden="true"
                />

                <Card className="relative z-10 backdrop-blur-sm bg-dark-lighter/80 border-dark-border/50 pl-12 md:pl-6">
                  <div className={`${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    <span className="inline-block text-5xl md:text-6xl font-bold gradient-text mb-3">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
