'use client'

import { forwardRef, ReactNode, useRef, useImperativeHandle } from 'react'
import { cn } from '@/lib/utils'
import { useGSAPContext } from '@/lib/hooks/useGSAPContext'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section({ children, className, id }, forwardedRef) {
    // Create internal ref for GSAP animations
    const internalRef = useRef<HTMLElement>(null)

    // Expose internal ref to parent if forwardedRef is provided
    useImperativeHandle(forwardedRef, () => internalRef.current!)

    useGSAPContext(internalRef, async (_ctx) => {
      if (!internalRef.current) return

      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const element = internalRef.current

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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

    return (
      <section
        ref={internalRef}
        id={id}
        className={cn('py-24 md:py-32', className)}
      >
        {children}
      </section>
    )
  }
)
