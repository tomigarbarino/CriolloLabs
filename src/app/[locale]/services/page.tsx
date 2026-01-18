import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Pricing } from '@/components/home/Pricing'
import { CarePlans } from '@/components/home/CarePlans'
import { Icon } from '@/components/ui/Icon'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios & Precios — Criollo Labs',
  description: 'Landing ($449), Automatización ($899), Sistema ($1,999+). Elegí un plan, reservá cupo, recibí v1 en 24h. Alcance fijo. Entrega rápida.',
}

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <Section>
        <div className="container-custom text-center mb-16">
          <h1 className="text-display-lg font-bold mb-6">Servicios & Precios</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Landing pages listas para convertir con precio fijo. Elegí tu plan y reservá un cupo.
          </p>
        </div>
      </Section>

      <Pricing />

      <CarePlans />

      {/* What's Included Section */}
      <Section className="border-t border-dark-border">
        <div className="container-custom">
          <h2 className="text-display-md font-bold mb-12 text-center">Qué incluye</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Arquitectura de Conversión</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Oferta clara y posicionada</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> CTAs estratégicos</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> WhatsApp / Calendly / Formulario</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Flujo sin fricción</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Performance</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Carga rápida (Next.js 14)</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Mobile-first responsive</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> SEO básico + OG images</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Core Web Vitals optimizado</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Medición</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Setup de GA4</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Eventos en CTAs</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Tracking de formularios</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Scroll depth (plan Growth)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Diseño</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Tema oscuro premium</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Animaciones custom (GSAP)</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Colores de marca + gradientes</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Accesible (WCAG)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Entrega</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> v1 en 24h</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Final en 48h</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> 2 rondas de cambios</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Código fuente incluido</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Soporte</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Deploy en Vercel</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Guía de setup rápida</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> 7 días bugs post-lanzamiento</li>
                <li className="flex items-center gap-2"><Icon icon={Check} size={16} className="text-accent-cyan" /> Care Plans disponibles (desde $99/mes)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-dark-lighter/30">
        <div className="container-custom">
          <h2 className="text-display-md font-bold mb-12 text-center">Preguntas frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: '¿Qué significa alcance fijo?',
                a: 'Sabés exactamente qué recibís y cuánto pagás antes de arrancar. Nada de cotizaciones a ciegas o presupuestos que explotan.',
              },
              {
                q: '¿Cuántas revisiones incluye?',
                a: '2 rondas de cambios incluidas en todos los planes. Después de eso, los cambios se cobran por hora o podés sumar un Care Plan.',
              },
              {
                q: '¿Qué pasa si pido algo fuera de plan?',
                a: 'Hablamos antes y acordamos el alcance extra. Se cobra por hora ($99/h) o podemos ajustar el plan si lo pedís antes del kickoff.',
              },
              {
                q: '¿Cómo funciona la seña 50%?',
                a: '50% al reservar tu cupo (confirmás semana de trabajo). 50% restante antes del delivery final. Pago seguro vía Stripe o transferencia.',
              },
              {
                q: '¿Cuándo conviene Care Automations vs Care Landing?',
                a: 'Care Landing es para mantener una web. Care Automations es para monitorear + arreglar flujos automáticos (Zapier, Make, APIs). Care Software si tenés un sistema custom interno.',
              },
              {
                q: '¿Trabajás en español? ¿Podemos coordinar async por email?',
                a: 'Sí. Trabajo 100% en español, remoto, con comunicación async (email/Slack/Loom). Perfecto para clientes de LATAM/España/EEUU con equipos distribuidos.',
              },
            ].map((faq, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
