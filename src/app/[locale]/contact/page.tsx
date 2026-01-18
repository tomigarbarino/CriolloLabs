import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto — Criollo Labs',
  description: 'Agendá una llamada de 30 minutos o escribí un mensaje rápido.',
}

export default function ContactPage() {
  return (
    <div className="pt-32">
      <Section>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Info */}
            <div>
              <h1 className="text-display-lg font-bold mb-6">Agendá una llamada o escribime</h1>
              <p className="text-xl text-white/70 mb-8">
                Elegí un horario que te sirva o mandá un mensaje rápido acá abajo.
              </p>

              {/* Primary CTA - Calendly */}
              <a
                href="https://calendly.com/tomasgarbarino-dev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 px-8 mb-12 bg-gradient-to-r from-accent-cyan to-accent-green text-white rounded-full text-lg font-bold hover:shadow-lg hover:shadow-accent-cyan/50 transition-all"
              >
                📅 Reservar vía Calendly (30 min)
              </a>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Email</h3>
                  <a 
                    href="mailto:tomasgarbarino.dev@gmail.com" 
                    className="text-white/70 hover:text-accent-cyan transition-colors block mb-2"
                  >
                    tomasgarbarino.dev@gmail.com
                  </a>
                  <a 
                    href="mailto:tomasgarbarino.dev@gmail.com?subject=Consulta Landing Page"
                    className="inline-flex px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all"
                  >
                    Escribime directo
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Disponibilidad</h3>
                  <p className="text-white/70">
                    2 cupos por semana • Entrega en 48h
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Tiempo de respuesta</h3>
                  <p className="text-white/70">
                    Usualmente en 24 horas
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">O mandá un mensaje</h2>
              <ContactForm />
              
              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-white/60 text-center">
                  ¿Problemas con el formulario?{' '}
                  <a 
                    href="mailto:tomasgarbarino.dev@gmail.com"
                    className="text-accent-cyan hover:underline"
                  >
                    Escribime directo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
