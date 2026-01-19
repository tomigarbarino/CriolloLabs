'use client'

import { useRef, useState } from 'react'
import React from 'react'
import { Button } from '@/components/ui/Button'
import { HeroBackground } from '@/components/HeroBackground'
import { splitTextByWords } from '@/lib/utils'
import { useGSAPContext } from '@/lib/hooks/useGSAPContext'
import { usePrefersReducedMotion } from '@/lib/hooks/useIsMobile'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [canvasReady, setCanvasReady] = useState(false)

  useGSAPContext(containerRef, async (_ctx) => {
    if (!titleRef.current || !subtitleRef.current) return

    const gsap = (await import('gsap')).default
    const titleChars = titleRef.current.querySelectorAll('.char')
    
    gsap.fromTo(
      titleChars,
      { opacity: 0, y: 100, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: 'power4.out',
        delay: 0.2,
      }
    )

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      }
    )
  })

  // Nuevo copy - Opción A: directo, punchy, dos frases
  const titleText = 'Convertimos visitas en consultas. Y tareas en automático.'
  const words = splitTextByWords(titleText)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground isReady={canvasReady} onReady={() => setCanvasReady(true)} />
      
      <div ref={containerRef} className="relative z-10 container-custom text-center">
        <h1 
          ref={titleRef} 
          className="text-display-xl font-bold mb-8 perspective-1000 text-balance break-normal"
          style={{ opacity: prefersReducedMotion ? 1 : undefined }}
        >
          {prefersReducedMotion ? (
            titleText
          ) : (
            words.map((wordObj, wordIdx) => (
              <React.Fragment key={wordIdx}>
                <span className="word inline-block whitespace-nowrap">
                  {wordObj.chars.map((char, charIdx) => (
                    <span 
                      key={`${wordIdx}-${charIdx}`} 
                      className="char inline-block"
                    >
                      {char}
                    </span>
                  ))}
                </span>
                {wordIdx < words.length - 1 && ' '}
              </React.Fragment>
            ))
          )}
        </h1>

        <p 
          ref={subtitleRef} 
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 text-balance"
          style={{ opacity: prefersReducedMotion ? 1 : undefined }}
        >
          Landings listas para convertir en 48h. Automatizaciones que eliminan lo manual. Software a medida que ordena tu operación.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            href="https://calendly.com/tomasgarbarino-dev/30min" 
            variant="primary" 
            size="lg"
          >
            Agendá una llamada (30 min)
          </Button>
          <Button href="/work" variant="outline" size="lg">
            Ver trabajos
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
          {[
            'Entrega rápida',
            'Precio claro',
            '50% seña',
            '2 cupos por semana'
          ].map((badge, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  )
}
