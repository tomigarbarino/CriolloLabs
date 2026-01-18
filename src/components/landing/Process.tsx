'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SpotlightHeading } from '@/components/ui/SpotlightHeading'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { fadeUp, duration, ease } from '@/lib/motion'

interface Step {
    title: string
    description: string
}

import { useNarrative } from '@/context/NarrativeContext'

export function Process() {
    const t = useTranslations('landing.process')
    const reducedMotion = useReducedMotion()
    const sectionRef = useRef<HTMLElement>(null)
    const { setScene } = useNarrative()

    const steps = t.raw('steps') as Step[]

    // Scroll-based progress for connector line
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end center'],
    })

    const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <section
            ref={sectionRef}
            id="process"
            className="py-24 md:py-32"
            onMouseEnter={() => setScene('process')}
        >
            <motion.div onViewportEnter={() => setScene('process')} />
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
                        <p className="text-lg text-white/60">{t('subtitle')}</p>
                    )}
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connector line - Desktop */}
                    <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-white/10">
                        {!reducedMotion && (
                            <motion.div
                                style={{ width: lineProgress }}
                                className="h-full bg-gradient-to-r from-accent-purple via-accent-purple-light to-accent-orange"
                            />
                        )}
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: duration.slow,
                                    delay: idx * 0.15,
                                    ease: ease.smooth,
                                }}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Step number */}
                                <motion.div
                                    whileInView={reducedMotion ? {} : { scale: [0.8, 1] }}
                                    transition={{ duration: duration.normal, delay: idx * 0.15 }}
                                    className={`
                    relative z-10 w-20 h-20 rounded-full
                    bg-dark border-2 border-white/10
                    flex items-center justify-center
                    mb-6 shadow-xl
                    transition-all duration-300
                    group-hover:border-accent-purple/50
                  `}
                                >
                                    <span className="text-2xl font-bold text-white/80">
                                        {idx + 1}
                                    </span>

                                    {/* Active glow effect */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ delay: idx * 0.2 + 0.3 }}
                                        className="absolute inset-0 rounded-full bg-accent-purple/20 blur-xl -z-10"
                                    />
                                </motion.div>

                                {/* Step content */}
                                <SpotlightHeading as="h3" className="text-lg font-bold mb-2 text-white">
                                    {step.title}
                                </SpotlightHeading>
                                <p className="text-sm text-white/60 max-w-xs md:max-w-[200px] leading-relaxed text-pretty">
                                    {step.description}
                                </p>

                                {/* Mobile connector */}
                                {idx < steps.length - 1 && (
                                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
