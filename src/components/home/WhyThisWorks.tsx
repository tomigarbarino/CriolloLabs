'use client'

import { Section } from '@/components/ui/Section'
import { Icon } from '@/components/ui/Icon'
import { Target, Zap, TrendingUp } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

const benefits: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: 'Oferta clara + arquitectura de CTA',
    description: 'Cada píxel lleva a la acción. Sin confusión, sin fricción.',
    icon: Target,
  },
  {
    title: 'Reserva sin fricciones',
    description: 'Calendly con un click, WhatsApp, o formulario. Lo que mejor convierte.',
    icon: Zap,
  },
  {
    title: 'Medición para iterar',
    description: 'Eventos de GA4 en cada CTA. Sabés qué funciona, mejorás rápido.',
    icon: TrendingUp,
  },
]

export function WhyThisWorks() {
  return (
    <Section className="bg-dark-lighter/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">Por qué funciona</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Landing pages que convierten se construyen distinto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-green/20 flex items-center justify-center mx-auto mb-6">
                <Icon icon={benefit.icon} size={32} className="text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
