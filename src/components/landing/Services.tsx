'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { CTAButton } from '@/components/ui/CTAButton'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { FileText, Database, Bot, Check } from 'lucide-react'
import { useNarrative } from '@/context/NarrativeContext'
import { cn } from '@/lib/utils'

export function Services() {
    const t = useTranslations('landing.services')
    const { setScene } = useNarrative()

    const services = [
        {
            icon: FileText,
            title: t('card1.title'),
            desc: t('card1.desc'),
            deliverable: t('card1.deliverable'),
            idealFor: t('card1.idealFor'),
            includes: t.raw('card1.includes') as string[],
            timeline: t('card1.timeline'),
            gradient: 'from-accent-purple to-accent-purple-light', // MVP: Purple
        },
        {
            icon: Database,
            title: t('card2.title'),
            desc: t('card2.desc'),
            deliverable: t('card2.deliverable'),
            idealFor: t('card2.idealFor'),
            includes: t.raw('card2.includes') as string[],
            timeline: t('card2.timeline'),
            gradient: 'from-accent-purple-light to-accent-orange', // Scaling: Orange/Purple
        },
        {
            icon: Bot,
            title: t('card3.title'),
            desc: t('card3.desc'),
            deliverable: t('card3.deliverable'),
            idealFor: t('card3.idealFor'),
            includes: t.raw('card3.includes') as string[],
            timeline: t('card3.timeline'),
            gradient: 'from-accent-orange to-accent-orange-light', // Auto: Orange
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        {t('title')}
                    </h2>
                    {t.raw('subtitle') && (
                        <p className="text-lg text-white max-w-2xl mx-auto">
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
                                        {/* Badge: Ideal For */}
                                        <div className="mb-6">
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white">
                                                {service.idealFor}
                                            </span>
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className={cn(
                                                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br group-hover:scale-105 transition-transform duration-300",
                                                service.gradient
                                            )}
                                        >
                                            <Icon className="text-white" size={20} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white mb-6 text-sm leading-relaxed text-pretty">
                                            {service.desc}
                                        </p>

                                        {/* Includes List */}
                                        <ul className="space-y-2 mb-8 flex-grow">
                                            {service.includes.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-white">
                                                    <Check size={16} className="text-accent-green mt-0.5 shrink-0" />
                                                    <span className="text-pretty">{item}</span>
                                                </li>
                                            ))}
                                        </ul>


                                        {/* Metadata Footer */}
                                        <div className="pt-6 border-t border-white/5 mt-auto mb-6 space-y-4">
                                            {/* Deliverable */}
                                            <div>
                                                <p className="text-xs font-mono text-white/60 uppercase tracking-wider mb-1">
                                                    Entregable
                                                </p>
                                                <p className="text-sm font-medium text-white">{service.deliverable}</p>
                                            </div>
                                            {/* Timeline */}
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs font-mono text-white/60 uppercase tracking-wider">
                                                    Tiempo:
                                                </p>
                                                <p className="text-sm font-bold text-accent-orange">{service.timeline}</p>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <CTAButton
                                            href={`#contact?intent=${encodeURIComponent(service.title)}`}
                                            variant="secondary"
                                            className="w-full justify-center border-white/5 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                                        >
                                            {t('cta.primary')}
                                        </CTAButton>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Closing CTA */}
                <div className="mt-16 flex justify-center">
                    <CTAButton
                        href="#contact?intent=mini-audit-services"
                        variant="secondary"
                        size="sm"
                        className="text-white hover:text-white"
                    >
                        {t('cta.miniAudit')}
                    </CTAButton>
                </div>
            </Container>
        </motion.section>
    )
}
