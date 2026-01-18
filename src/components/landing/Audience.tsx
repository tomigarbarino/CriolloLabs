'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SpotlightHeading } from '@/components/ui/SpotlightHeading'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { fadeUp, slideInLeft, slideInRight, duration, ease } from '@/lib/motion'
import { Rocket, Building2, CheckCircle2 } from 'lucide-react'
import { useNarrative } from '@/context/NarrativeContext'

export function Audience() {
    const t = useTranslations('landing.audience.cols')
    const reducedMotion = useReducedMotion()
    const { setScene } = useNarrative()

    const startupsItems = t.raw('startups.items') as string[]
    const businessItems = t.raw('business.items') as string[]

    const columns = [
        {
            icon: Rocket,
            title: t('startups.title'),
            items: startupsItems,
            color: 'text-accent-purple',
            bgColor: 'bg-accent-purple/10',
            gradient: 'from-accent-purple to-accent-purple-light',
            variant: slideInLeft,
        },
        {
            icon: Building2,
            title: t('business.title'),
            items: businessItems,
            color: 'text-accent-orange',
            bgColor: 'bg-accent-orange/10',
            gradient: 'from-accent-orange to-accent-orange-light',
            variant: slideInRight,
        },
    ]

    return (
        <section
            id="audience"
            className="py-24 md:py-32 bg-dark-lighter/30"
            onMouseEnter={() => setScene('audience')}
        >
            <motion.div onViewportEnter={() => setScene('audience')} />
            <Container>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {columns.map((col, colIdx) => {
                        const Icon = col.icon

                        if (reducedMotion) {
                            return (
                                <div key={colIdx} className="h-full">
                                    <Card className="h-full group">
                                        {/* Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${col.gradient}`}>
                                                <Icon className="text-white" size={28} />
                                            </div>
                                            <SpotlightHeading as="h3" className="text-xl md:text-2xl font-bold">
                                                {col.title}
                                            </SpotlightHeading>
                                        </div>
                                        {/* Items same as below, duplication is tradeoff for simplicity or I should extract content */}
                                        <ul className="space-y-4">
                                            {col.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start gap-3">
                                                    <CheckCircle2 className={`${col.color} mt-0.5 flex-shrink-0`} size={18} />
                                                    <span className="text-white/80 leading-relaxed text-pretty">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </div>
                            )
                        }

                        return (
                            <motion.div
                                key={colIdx}
                                variants={col.variant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                className="h-full"
                            >
                                <Card className="h-full group">
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div
                                            className={`
                        p-3 rounded-xl bg-gradient-to-br ${col.gradient}
                        group-hover:scale-105 transition-transform duration-300
                      `}
                                        >
                                            <Icon className="text-white" size={28} />
                                        </div>
                                        <SpotlightHeading as="h3" className="text-xl md:text-2xl font-bold">
                                            {col.title}
                                        </SpotlightHeading>
                                    </div>

                                    {/* Items */}
                                    <ul className="space-y-4">
                                        {col.items.map((item, itemIdx) => (
                                            <motion.li
                                                key={itemIdx}
                                                initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                                                whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: duration.normal,
                                                    delay: 0.2 + itemIdx * 0.1,
                                                    ease: ease.smooth,
                                                }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2
                                                    className={`${col.color} mt-0.5 flex-shrink-0`}
                                                    size={18}
                                                />
                                                <span className="text-white/80 leading-relaxed">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
