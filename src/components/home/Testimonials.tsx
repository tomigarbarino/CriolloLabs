'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const testimonials = [
  {
    quote: 'Criollo Labs transformó nuestra visión en una app web impresionante y de alto rendimiento. Su atención al detalle y experiencia técnica es inigualable.',
    author: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    note: 'Testimonio de ejemplo',
  },
  {
    quote: 'Trabajar con Criollo Labs fue fluido. Entregaron antes de lo previsto y el producto final superó nuestras expectativas en todos los aspectos.',
    author: 'Marcus Chen',
    role: 'Product Lead, Innovate Co',
    note: 'Testimonio de ejemplo',
  },
  {
    quote: 'La experiencia del equipo en Next.js y sistemas de diseño nos ayudó a escalar nuestra plataforma eficientemente. Recomiendo sus servicios altamente.',
    author: 'Emma Williams',
    role: 'CTO, StartupX',
    note: 'Testimonio de ejemplo',
  },
]

export function Testimonials() {
  return (
    <Section className="bg-dark-lighter/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Experiencias reales de quienes trabajaron con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} hoverable>
              <div className="flex flex-col h-full">
                <p className="text-lg text-white/80 mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="border-t border-dark-border pt-4">
                  <p className="font-semibold mb-1">{testimonial.author}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                  <p className="text-xs text-white/40 mt-2 italic">{testimonial.note}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
