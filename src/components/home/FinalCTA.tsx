'use client'

import { Section } from '@/components/ui/Section'

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-accent-green/10 to-accent-lime/10" />
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-display-lg font-bold mb-6">
          ¿Listo para convertir tráfico en consultas?
        </h2>
        <p className="text-xl text-white max-w-2xl mx-auto mb-12">
          Reservá una llamada de 30 minutos. Sin pitch, solo una charla rápida sobre tu oferta y cómo convertir visitantes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/tomasgarbarino-dev/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-green text-white rounded-full font-bold hover:shadow-lg hover:shadow-accent-cyan/50 transition-all text-lg"
          >
            Agendar llamada
          </a>
          <a
            href="mailto:tomasgarbarino.dev@gmail.com?subject=Consulta Landing Page"
            className="inline-flex px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all"
          >
            O escribime
          </a>
        </div>
      </div>
    </Section>
  )
}
