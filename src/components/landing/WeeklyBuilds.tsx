'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { BuildCard } from '@/components/landing/BuildCard'
import { CTAButton } from '@/components/ui/CTAButton'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { useNarrative } from '@/context/NarrativeContext'

interface BuildItem {
    title: string
    description: string
    tech: string[]
    demoUrl?: string
    repoUrl?: string
}

export function WeeklyBuilds() {
    const t = useTranslations('landing.weeklyBuilds')
    const { setScene } = useNarrative()

    const items = t.raw('items') as BuildItem[]

    return (
        <section
            id="builds"
            className="py-24 md:py-32 overflow-hidden"
            onMouseEnter={() => setScene('builds')} // Basic interactions to trigger ambient mode
            onTouchStart={() => setScene('builds')}
        >
            <Container>
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                    onViewportEnter={() => setScene('builds')}
                >
                    <span
                        className="text-accent-orange font-mono text-sm uppercase tracking-widest block mb-4"
                    >
                        {t('title')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
                        {t('subtitle')}
                    </h2>
                </motion.div>

                {/* Cards Grid - Desktop */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {items.map((item, idx) => (
                        <BuildCard
                            key={idx}
                            title={item.title}
                            description={item.description}
                            tech={item.tech}
                            demoUrl={item.demoUrl}
                            repoUrl={item.repoUrl}
                            index={idx}
                        />
                    ))}
                </motion.div>

                {/* Horizontal Scroll - Mobile */}
                <div
                    className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[85vw] max-w-[320px] snap-start"
                        >
                            <BuildCard
                                title={item.title}
                                description={item.description}
                                tech={item.tech}
                                demoUrl={item.demoUrl}
                                repoUrl={item.repoUrl}
                                index={idx}
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile scroll hint */}
                <div className="md:hidden flex justify-center mt-4 gap-2">
                    {items.map((_, idx) => (
                        <div
                            key={idx}
                            className="w-2 h-2 rounded-full bg-white/20"
                        />
                    ))}
                </div>

                {/* Closing CTA */}
                <div className="mt-12 flex justify-center">
                    <CTAButton
                        href="#contact?intent=mini-audit-builds"
                        variant="secondary"
                        size="sm"
                        className="text-white hover:text-white"
                    >
                        {t('cta.miniAudit')}
                    </CTAButton>
                </div>
            </Container>
        </section >
    )
}
