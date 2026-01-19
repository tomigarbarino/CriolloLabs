'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const services = [
  {
    title: 'Web Apps (Next.js)',
    description: 'Production-ready applications with SSR, ISR, and optimal performance. From MVP to scale.',
    features: ['App Router', 'Server Actions', 'Edge Runtime', 'Middleware'],
  },
  {
    title: 'Design Systems',
    description: 'Scalable component libraries with accessibility, dark mode, and full TypeScript support.',
    features: ['Tailwind CSS', 'Radix Primitives', 'Storybook', 'Design Tokens'],
  },
  {
    title: 'Performance & UX',
    description: 'Core Web Vitals optimization, animations, and seamless user experiences that convert.',
    features: ['GSAP/Framer', 'Image Optimization', 'Code Splitting', 'Analytics'],
  },
]

export function Services() {
  return (
    <Section>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-bold mb-4">What we do</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            End-to-end web development with design-first thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} hoverable>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
