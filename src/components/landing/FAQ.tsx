'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { CTAButton } from '@/components/ui/CTAButton'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { fadeUp, duration, ease } from '@/lib/motion'
import { Plus, Minus } from 'lucide-react'
import { useNarrative } from '@/context/NarrativeContext'

export function FAQ() {
    const t = useTranslations('landing.faq')
    const reducedMotion = useReducedMotion()
    const { setScene } = useNarrative()

    const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6']

    return (
        <section
            id="faq"
            className="py-24 md:py-32"
            onMouseEnter={() => setScene('faq')}
        >
            <motion.div onViewportEnter={() => setScene('faq')} />
            <Container size="md">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
                        {t('title')}
                    </h2>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-4">
                    {questions.map((key, idx) => (
                        <motion.div
                            key={key}
                            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: duration.normal,
                                delay: idx * 0.05,
                                ease: ease.smooth,
                            }}
                        >
                            <AccordionItem
                                question={t(`${key}.q`)}
                                answer={t(`${key}.a`)}
                                reducedMotion={reducedMotion}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Closing CTA */}
                <div className="mt-12 flex justify-center">
                    <CTAButton
                        href="#contact?intent=mini-audit-faq"
                        variant="secondary"
                        size="sm"
                        className="text-white/70 hover:text-white"
                    >
                        {t('cta.miniAudit')}
                    </CTAButton>
                </div>
            </Container>
        </section >
    )
}

function AccordionItem({
    question,
    answer,
    reducedMotion,
}: {
    question: string
    answer: string
    reducedMotion: boolean
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={`
        border border-white/5 rounded-xl
        bg-dark-lighter overflow-hidden
        transition-all duration-300
        ${isOpen ? 'border-white/10' : ''}
      `}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          w-full flex items-center justify-between
          p-6 text-left
          hover:bg-white/5 transition-colors
          focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:ring-inset
        `}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium pr-8 text-white">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.2 }}
                    className="flex-shrink-0"
                >
                    {isOpen ? (
                        <Minus className="text-accent-orange" size={20} />
                    ) : (
                        <Plus className="text-white/50" size={20} />
                    )}
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={reducedMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reducedMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{
                            duration: reducedMotion ? 0 : duration.normal,
                            ease: ease.smooth,
                        }}
                    >
                        <div className="px-6 pb-6 text-white leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
