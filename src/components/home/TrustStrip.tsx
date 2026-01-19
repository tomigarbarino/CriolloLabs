'use client'

import { Section } from '@/components/ui/Section'

const logos = [
  'Logo Alpha',
  'Logo Beta',
  'Logo Gamma',
  'Logo Delta',
  'Logo Epsilon',
]

export function TrustStrip() {
  return (
    <Section className="py-16 border-y border-dark-border bg-dark-lighter/50">
      <div className="container-custom">
        <p className="text-center text-sm text-white mb-8 uppercase tracking-wider">
          Usado por equipos que construyen productos modernos
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="text-white font-semibold text-lg hover:text-white transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
