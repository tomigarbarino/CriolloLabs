'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SpotlightHeading } from '@/components/ui/SpotlightHeading'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { FileText, Database, Bot } from 'lucide-react'
import { useNarrative } from '@/context/NarrativeContext'
import { cn } from '@/lib/utils'

export function Services() {
    const t = useTranslations('landing.services')
    const reducedMotion = useReducedMotion()
    const { setScene } = useNarrative()

    const services = [
        {
            icon: FileText,
            title: t('card1.title'),
            desc: t('card1.desc'),
            deliverable: t('card1.deliverable'),
            gradient: 'from-accent-purple to-accent-purple-light',
        },
        {
            icon: Database,
            title: t('card2.title'),
            desc: t('card2.desc'),
            deliverable: t('card2.deliverable'),
            gradient: 'from-accent-purple-light to-accent-orange',
        },
        {
            icon: Bot,
            title: t('card3.title'),
            desc: t('card3.desc'),
            deliverable: t('card3.deliverable'),
            gradient: 'from-accent-orange to-accent-orange-light',
        },
    ]

    return (
        <motion.section
            id="services"
            className="py-24 md:py-32"
            onViewportEnter={() => setScene('services_item_0')} // Start with first color
        >
            <Container>
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <SpotlightHeading as="h2" className="text-3xl md:text-5xl font-bold mb-4">
                        {t('title')}
                    </SpotlightHeading>
                    {t.raw('subtitle') && (
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    )}
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, idx) => {
                        const Icon = service.icon

                        // Content inside the card
                        return (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onViewportEnter={() => setScene(`services_item_${idx}`)}
                                onHoverStart={() => setScene(`services_item_${idx}`)} // Hue shift on hover
                            >
                                <Card className="h-full group hover:shadow-2xl hover:shadow-accent-purple/5 transition-shadow">
                                    {/* Gradient overlay on hover */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none",
                                            service.gradient
                                        )}
                                    />

                                    <div className="relative h-full flex flex-col z-10">
                                        {/* Icon */}
                                        <div
                                            className={cn(
                                                "w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br group-hover:scale-105 transition-transform duration-300",
                                                service.gradient
                                            )}
                                        >
                                            <Icon className="text-white" size={24} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/60 mb-6 flex-grow leading-relaxed text-pretty">
                                            {service.desc}
                                        </p>

                                        {/* Deliverable */}
                                        <div className="pt-6 border-t border-white/5 mt-auto mb-6">
                                            <p className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                                                Entregable
                                            </p>
                                            <p className="text-sm text-accent-orange font-medium">{service.deliverable}</p>
                                        </div>

                                        {/* CTA */}
                                        <a
                                            href={`#contact?intent=${encodeURIComponent(service.title)}`}
                                            className="block w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-sm font-medium transition-colors text-center border border-white/5"
                                        >
                                            {t('cta')}
                                        </a>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </Container>
        </motion.section>
    )
}
