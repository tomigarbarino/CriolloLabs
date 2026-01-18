import { notFound } from 'next/navigation'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { mockProjects } from '@/lib/data'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = mockProjects.find(p => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} — Criollo Labs`,
    description: project.overview,
  }
}

export function generateStaticParams() {
  return mockProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default function WorkDetailPage({ params }: Props) {
  const project = mockProjects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-32">
      {/* Hero */}
      <Section className="py-16">
        <div className="container-custom">
          <div className="mb-8">
            <Button href="/work" variant="outline" size="sm">
              ← Back to Work
            </Button>
          </div>

          <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12">
            <div
              className="absolute inset-0"
              style={{ background: project.image }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-display-lg font-bold mb-4">{project.title}</h1>
              <p className="text-2xl text-white/80">{project.subtitle}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                <div className="space-y-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-sm text-white/60 mb-1">{metric.label}</p>
                      <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/40 mt-6 italic">
                  * Placeholder metrics for demonstration
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-dark-border">
        <div className="container-custom text-center">
          <h2 className="text-display-md font-bold mb-6">
            Have a similar project?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help bring your vision to life
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </Section>
    </div>
  )
}
