'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import Link from 'next/link'
import { Target, Zap, Wrench } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

const solutions: Array<{
  key: string
  title: string
  description: string
  icon: LucideIcon
  bullets: string[]
  cta: string
  href: string
}> = [
  {
    key: 'landing',
    title: 'Landing Pages que Convierten',
    description: 'No una web. Una máquina de generar consultas.',
    icon: Target,
    bullets: [
      'Diseño enfocado 100% en conversión',
      'Arquitectura de CTAs clara',
      'Integración Calendly, WhatsApp, formularios',
    ],
    cta: 'Ver Pricing',
    href: '#pricing'
  },
  {
    key: 'automation',
    title: 'Automatizaciones que Ahorran Tiempo',
    description: 'Tareas manuales → Flujos automáticos. Más tiempo para crecer.',
    icon: Zap,
    bullets: [
      'Integración de herramientas (Notion, Airtable, CRMs)',
      'Webhooks y APIs personalizadas',
      'Flujos de email y notificaciones',
    ],
    cta: 'Ver Automatizaciones',
    href: '/services'
  },
  {
    key: 'software',
    title: 'Software a Medida',
    description: 'Sistemas custom que ordenan tu operación.',
    icon: Wrench,
    bullets: [
      'MVP en 2-4 semanas',
      'Next.js, React, Node.js',
      'Diseño UI/UX premium',
    ],
    cta: 'Consultar Software',
    href: '/contact'
  }
]

export function Solutions() {
  return (
    <Section>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">
            3 formas de hacer crecer tu negocio
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Elegí el servicio que necesitás. Precio fijo. Entrega rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.key} hoverable>
              <div className="mb-6 text-accent-cyan">
                <Icon icon={solution.icon} size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {solution.title}
              </h3>
              <p className="text-white mb-6">
                {solution.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {solution.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                    </span>
                    <span className="text-white text-sm">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={solution.href}
                className="inline-flex w-full justify-center py-3 px-6 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all"
              >
                {solution.cta}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
