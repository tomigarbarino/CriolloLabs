'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Gift } from 'lucide-react'

const carePlans = [
  {
    name: 'Care Landing',
    price: '$99',
    priceNote: 'desde',
    features: [
      'Hasta 60 min/mes de cambios (texto, secciones, CTA)',
      'Soporte técnico básico (email)',
      'Ajustes menores de tracking/analytics',
      'SLA: 72h hábiles',
    ],
    cta: 'Sumar mantenimiento',
    color: 'cyan',
  },
  {
    name: 'Care Automations',
    price: '$249',
    priceNote: 'desde',
    features: [
      'Monitoreo + alertas (fallos, tokens, integraciones)',
      'Ajustes por cambios en APIs/campos',
      '2h/mes de mejoras o fixes',
      'SLA: 48h hábiles',
    ],
    cta: 'Asegurar la automatización',
    color: 'green',
    popular: true,
  },
  {
    name: 'Care Software',
    price: '$499',
    priceNote: 'desde',
    features: [
      'Fixes + mejoras continuas',
      'Updates de dependencias / seguridad básicos',
      'Hasta 4h/mes de trabajo',
      'SLA: 24–48h hábiles (según criticidad)',
    ],
    cta: 'Mantener el sistema',
    color: 'lime',
  },
]

export function CarePlans() {
  return (
    <Section className="bg-dark-lighter/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">Planes de mantenimiento</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4">
            Elegimos el plan según criticidad y tipo de solución.
          </p>
          <p className="text-sm text-white/50 max-w-xl mx-auto">
            El precio final depende de criticidad y volumen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {carePlans.map((plan, i) => (
            <Card key={i} hoverable className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-green to-accent-lime rounded-full text-xs font-bold">
                  RECOMENDADO
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-white/50">{plan.priceNote}</span>
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-white/50">/ mes</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full bg-accent-${plan.color}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <span className={`w-2 h-2 rounded-full bg-accent-${plan.color}`} />
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
                {plan.cta}
              </a>
            </Card>
          ))}
        </div>

        {/* Discount note */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <Icon icon={Gift} size={20} className="text-accent-green" />
            <p className="text-sm text-white/80">
              <span className="font-semibold">Descuento primer mes:</span> Si lo sumás al contratar el proyecto: <span className="gradient-text font-bold">-20%</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
