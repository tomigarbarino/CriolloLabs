import { notFound } from 'next/navigation'
import { Link } from '@/navigation'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/ui/Container'
import { SpotlightHeading } from '@/components/ui/SpotlightHeading'
import { Card } from '@/components/ui/Card'
import { BUILDS } from '@/lib/builds/catalog'
import { BuildPreview } from '@/components/builds/BuildPreview'

type Props = {
    params: { locale: string; slug: string }
}

export async function generateStaticParams() {
    // All current builds have specific pages (control-tower, whatsapp, etc.)
    // So we return empty here to avoid conflict during static export.
    // In the future, if we add generic builds without specific pages, we can add them here.
    return []
}

export async function generateMetadata({ params }: Props) {
    const build = BUILDS.find((b) => b.slug === params.slug)
    if (!build) return {}

    const t = await getTranslations({ locale: params.locale, namespace: 'landing.builds' })
    const title = t(`${build.key}.title`)
    const description = t(`${build.key}.subtitle`)

    return {
        title: `${title} | Criollo Labs`,
        description,
        openGraph: {
            title: `${title} | Criollo Labs`,
            description,
            type: 'website',
        },
    }
}

export default async function BuildPage({ params }: Props) {
    const build = BUILDS.find((b) => b.slug === params.slug)

    if (!build) return notFound()

    const t = await getTranslations()

    const title = t(`${build.key}.title`)
    const subtitle = t(`${build.key}.subtitle`)
    const problem = t(`${build.key}.problem`)
    const outcome = t(`${build.key}.outcome`)
    const bullets = t.raw(`${build.key}.bullets`) as string[]

    return (
        <main className="py-20 md:py-28">
            <Container size="lg">
                <div className="flex items-center justify-between gap-4">
                    <Link
                        href="/#builds"
                        className="text-sm text-white/60 hover:text-white transition"
                    >
                        ← Volver
                    </Link>

                    <Link
                        href={`/#contact?intent=${build.slug}`}
                        className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 border border-white/15 hover:bg-white/12 hover:border-white/25 transition"
                    >
                        Quiero algo así
                    </Link>
                </div>

                <div className="mt-10 md:mt-12 max-w-3xl">
                    <span className="text-accent-orange font-mono text-xs uppercase tracking-widest">
                        Product Demo
                    </span>

                    <SpotlightHeading as="h1" className="mt-3 text-3xl md:text-5xl font-bold text-balance">
                        {title}
                    </SpotlightHeading>

                    <p className="mt-4 text-base md:text-lg text-white/65 leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="mt-6 grid gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
                            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">Problema</p>
                            <p className="mt-1 text-white/75 leading-relaxed">{problem}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
                            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">Resultado</p>
                            <p className="mt-1 text-white/75 leading-relaxed">{outcome}</p>
                        </div>
                    </div>
                </div>

                {/* Preview (mock UI) */}
                <div className="mt-10 md:mt-12">
                    <BuildPreview slug={build.slug} />
                </div>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                        <p className="text-xs font-mono text-white/45 uppercase tracking-wider">Qué hace</p>
                        <ul className="mt-4 space-y-2 text-white/70 leading-relaxed list-disc pl-5">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6">
                        <p className="text-xs font-mono text-white/45 uppercase tracking-wider">Stack & Integraciones</p>

                        <div className="mt-4">
                            <p className="text-sm text-white/60">Tech</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {build.tech.map((x) => (
                                    <span key={x} className="rounded-full px-3 py-1 text-xs bg-white/5 border border-white/10 text-white/70">
                                        {x}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="text-sm text-white/60">Integrations típicas</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {build.integrations.map((x) => (
                                    <span key={x} className="rounded-full px-3 py-1 text-xs bg-white/5 border border-white/10 text-white/70">
                                        {x}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                href={`/#contact?intent=${build.slug}`}
                                className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 border border-white/15 hover:bg-white/12 hover:border-white/25 transition"
                            >
                                Pedir mini-diagnóstico
                            </Link>
                        </div>
                    </Card>
                </div>
            </Container>
        </main>
    )
}
