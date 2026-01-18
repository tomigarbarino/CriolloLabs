'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { mockProjects } from '@/lib/data'

export function FeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <Section className="overflow-hidden">
      <div className="container-custom mb-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-display-md font-bold mb-4">Trabajos Destacados</h2>
            <p className="text-xl text-white/60">Casos de estudio seleccionados</p>
          </div>
          <Button href="/work" variant="outline">
            Ver Todos
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 px-6 md:px-8 lg:px-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {mockProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center group"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: project.image }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="inline-block px-3 py-1 bg-accent-cyan/20 backdrop-blur-sm rounded-full text-xs font-medium text-accent-cyan">
                    Concept build
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70">{project.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Section>
  )
}
