'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { mockProjects } from '@/lib/data'

const categories = ['All', 'Web Apps', 'Landing', 'UI']

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? mockProjects
    : mockProjects.filter(p => p.category === activeFilter)

  return (
    <div className="pt-32">
      <Section>
        <div className="container-custom">
          <div className="mb-16">
            <h1 className="text-display-lg font-bold mb-6">Our Work</h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Selected projects showcasing our expertise in building modern web experiences
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-green text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: project.image }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                    <p className="text-white/70">{project.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs text-white/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
