'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SpotlightHeading } from '@/components/ui/SpotlightHeading'
import { CTAButton } from '@/components/ui/CTAButton'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { duration, ease } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { useNarrative } from '@/context/NarrativeContext'

interface TimelineItem {
    year: string
    title: string
    description: string
}

export function Story() {
    const t = useTranslations('landing.story')
    const reducedMotion = useReducedMotion()
    const sectionRef = useRef<HTMLElement>(null)
    const { setScene } = useNarrative()

    const tt = (key: string, fallback: string) => {
        try {
            return t(key)
        } catch {
            return fallback
        }
    }

    const timeline = t.raw('timeline') as TimelineItem[]

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <motion.section
            ref={sectionRef}
            id="story"
            className="relative py-24 md:py-32"
            // escena base cuando entrás a story
            onViewportEnter={() => setScene('story_title')}
            viewport={{ margin: '-35% 0px -55% 0px' }}
        >
            {/* Sticky title/header */}
            <div
                className={cn(
                    'sticky top-0 z-20',
                    'pt-20 md:pt-24 pb-10',
                    'bg-transparent',
                    'backdrop-blur-md'
                )}
                data-scene-anchor="story_title"
            >
                <Container size="lg">
                    <div className="text-center">
                        <SpotlightHeading
                            as="h2"
                            className="text-[#e9d5ff] font-mono text-xl uppercase tracking-widest font-bold"
                        >
                            {t('title')}
                        </SpotlightHeading>

                        <p className="mx-auto mt-4 max-w-2xl text-white/70 leading-relaxed text-pretty">
                            {tt(
                                'subtitle',
                                'Autodidacta por naturaleza. Constructor por vocación.'
                            )}
                        </p>
                        <p className="mx-auto mt-4 max-w-2xl text-white/90 font-medium">
                            {tt('intro', 'Soy Tomás. Criollo Labs es mi estudio: diseño, construyo y entrego yo.')}
                        </p>
                    </div>
                </Container>
            </div>

            <Container size="lg" className="relative mt-12 md:mt-16">
                {/* Vertical progress line */}
                <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-0 md:-translate-x-1/2">
                    {!reducedMotion && (
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-accent-purple via-accent-purple-light to-accent-orange"
                        />
                    )}
                </div>

                <div className="space-y-20 md:space-y-28">
                    {timeline.map((item, idx) => {
                        const isEven = idx % 2 === 0
                        const isLast = idx === timeline.length - 1

                        return (
                            <motion.div
                                key={idx}
                                initial={
                                    reducedMotion
                                        ? {}
                                        : { opacity: 0, y: 18, x: isEven ? -18 : 18 }
                                }
                                whileInView={reducedMotion ? {} : { opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true, margin: '-120px' }}
                                // escena por item para que el orbe se mueva
                                onViewportEnter={() => setScene(`story_item_${idx}`)}
                                transition={{
                                    duration: duration.slow,
                                    ease: ease.smooth,
                                    delay: 0.06,
                                }}
                                className={cn(
                                    'relative flex items-start gap-8',
                                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                )}
                            >
                                {/* Year marker (anchor real para que el orbe se “pegue” perfecto) */}
                                <div
                                    data-scene-anchor={`story_item_${idx}`}
                                    className={cn(
                                        'absolute left-0 md:left-1/2',
                                        '-translate-x-0 md:-translate-x-1/2',
                                        'w-11 h-11 md:w-14 md:h-14 rounded-full',
                                        'bg-dark border border-white/12',
                                        'flex items-center justify-center z-10',
                                        'shadow-[0_18px_60px_-35px_rgba(0,0,0,0.9)]',
                                        isLast && 'border-accent-orange/60 bg-accent-orange/10'
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'text-[10px] md:text-xs font-mono font-bold',
                                            isLast ? 'text-accent-orange' : 'text-white/60'
                                        )}
                                    >
                                        {item.year}
                                    </span>
                                </div>

                                {/* Content side */}
                                <div
                                    className={cn(
                                        'ml-16 md:ml-0 md:w-[calc(50%-4rem)]',
                                        isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                                    )}
                                >
                                    <div
                                        className={cn(
                                            'rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm',
                                            'p-6 md:p-7',
                                            'shadow-[0_40px_120px_-90px_rgba(0,0,0,0.95)]',
                                            'transition-colors duration-300',
                                            isLast
                                                ? 'border-accent-orange/30'
                                                : 'hover:border-white/18'
                                        )}
                                    >
                                        <SpotlightHeading
                                            as="h3"
                                            className="text-xl md:text-2xl font-bold mb-3 text-white"
                                        >
                                            {item.title}
                                        </SpotlightHeading>

                                        <p className="text-white/70 leading-relaxed text-pretty">
                                            {item.description}
                                        </p>

                                        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                    </div>
                                </div>

                                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                            </motion.div>
                        )
                    })}


                </div>

                {/* Closing CTA */}
                <div className="mt-20 flex justify-center">
                    <CTAButton
                        href="#contact?intent=mini-audit-story"
                        variant="secondary"
                        size="sm"
                        className="text-white/70 hover:text-white"
                    >
                        {t('cta.miniAudit')}
                    </CTAButton>
                </div>
            </Container>
        </motion.section>
    )
}
