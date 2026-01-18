'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Zap, ShieldCheck, AlertCircle } from 'lucide-react'

const plans = [
  {
    name: 'Landing 48h',
    duration: '48h',
    price: '$449',
    popular: false,
    features: [
      '1 página (6–8 secciones)',
      'CTA claro (WhatsApp / Formulario / Email)',
      'SEO básico + OG',
      'Medición mínima (evento CTA)',
      '2 rondas de cambios',
      'v1 en 24h, final en 48h',
    ],
  },
  {
    name: 'Automatización Sprint',
    duration: '5–7 días',
    price: '$899',
    popular: true,
    features: [
      'Diagnóstico del proceso (rápido y concreto)',
      'Automatizo 1 flujo crítico (menos tareas manuales)',
      'Alertas + trazabilidad básica',
      'Handoff + Loom de operación',
    ],
  },
  {
    name: 'Sistema Express',
    duration: '10–14 días',
    price: '$1,999+',
    popular: false,
    features: [
      'Herramienta interna / dashboard chico',
      'Alcance definido en kickoff',
      '2 hitos + entrega + handoff',
    ],
  },
]

export function Pricing() {
  return (
    <Section>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">Planes</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Elegí un plan. Reservá un cupo. Recibí v1 en 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => (
            <Card key={i} hoverable className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-cyan to-accent-green rounded-full text-xs font-bold">
                  MÁS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-white/50">/ {plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                    </span>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/tomasgarbarino-dev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 bg-gradient-to-r from-accent-cyan to-accent-green text-white rounded-full text-center font-medium hover:shadow-lg hover:shadow-accent-cyan/50 transition-all"
              >
                Reservar cupo
              </a>

              <p className="text-xs text-white/40 text-center mt-4">
                50% de seña para reservar. 50% antes del handoff.
              </p>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 glass rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center text-accent-green">
                <Icon icon={Zap} size={24} />
              </div>
              <div className="text-left">
                <p className="font-semibold">Entrega en tiempo o 20% off</p>
                <p className="text-sm text-white/60">Entregamos rápido o pagás menos</p>
              </div>
            </div>

            <div className="w-px h-12 bg-dark-border hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                <Icon icon={ShieldCheck} size={24} />
              </div>
              <div className="text-left">
                <p className="font-semibold">v1 en 24h o cancelás</p>
                <p className="text-sm text-white/60">Recibís la seña si no hay v1 en el día 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scarcity */}
        <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-8">
          <Icon icon={AlertCircle} size={16} />
          <p>Solo 2 cupos por semana disponibles</p>
        </div>
      </div>
    </Section>
  )
}
