import { getTranslations } from 'next-intl/server'
import { Link } from '@/navigation'
import { Container } from '@/components/ui/Container'
import { SpotlightHeading } from '@/components/ui/SpotlightHeading'
import { Card } from '@/components/ui/Card'
import { BuildPreviewBackofficeAutopilot } from '@/components/builds/BuildPreviewBackofficeAutopilot'

export default async function BackofficeAutopilotBuildPage() {
    const t = await getTranslations('landing.builds.backofficeAutopilot')
    const bullets = t.raw('bullets') as string[]

    return (
        <main className="py-20 md:py-28">
            <Container size="lg">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/#builds" className="text-sm text-white/60 hover:text-white transition">
                        {t('ctaBack')}
                    </Link>

                    <Link
                        href="/#contact?intent=backoffice-autopilot"
                        className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 border border-white/15 hover:bg-white/12 hover:border-white/25 transition"
                    >
                        {t('ctaWantThis')}
                    </Link>
                </div>

                <div className="mt-10 md:mt-12 max-w-3xl">
                    <span className="text-accent-orange font-mono text-xs uppercase tracking-widest">
                        {t('eyebrow')}
                    </span>

                    <SpotlightHeading as="h1" className="mt-3 text-3xl md:text-5xl font-bold text-balance">
                        {t('title')}
                    </SpotlightHeading>

                    <p className="mt-4 text-base md:text-lg text-white/65 leading-relaxed">
                        {t('subtitle')}
                    </p>

                    <div className="mt-6 grid gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
                            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">
                                {t('problemLabel')}
                            </p>
                            <p className="mt-1 text-white/75 leading-relaxed">{t('problem')}</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
                            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">
                                {t('outcomeLabel')}
                            </p>
                            <p className="mt-1 text-white/75 leading-relaxed">{t('outcome')}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-12">
                    <BuildPreviewBackofficeAutopilot />
                </div>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                        <p className="text-xs font-mono text-white/45 uppercase tracking-wider">
                            {t('whatItDoesLabel')}
                        </p>
                        <ul className="mt-4 space-y-2 text-white/70 leading-relaxed list-disc pl-5">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6">
                        <p className="text-xs font-mono text-white/45 uppercase tracking-wider">
                            {t('stackLabel')}
                        </p>

                        <div className="mt-4">
                            <p className="text-sm text-white/60">{t('techLabel')}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {['Node', 'Webhooks', 'Queues', 'Observability'].map((x) => (
                                    <span key={x} className="rounded-full px-3 py-1 text-xs bg-white/5 border border-white/10 text-white/70">
                                        {x}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="text-sm text-white/60">{t('integrationsLabel')}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {['MercadoPago/Stripe', 'Sheets', 'Slack', 'Email'].map((x) => (
                                    <span key={x} className="rounded-full px-3 py-1 text-xs bg-white/5 border border-white/10 text-white/70">
                                        {x}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/#contact?intent=backoffice-autopilot"
                                className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 border border-white/15 hover:bg-white/12 hover:border-white/25 transition"
                            >
                                {t('ctaAudit')}
                            </Link>
                        </div>
                    </Card>
                </div>
            </Container>
        </main>
    )
}
