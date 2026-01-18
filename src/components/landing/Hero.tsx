'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { CTAButton } from '@/components/ui/CTAButton'
import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { SpotlightHeading } from '@/components/ui/SpotlightHeading'
import { Badge } from '@/components/ui/Badge'
import { useNarrative } from '@/context/NarrativeContext'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

// ... (TIMELINE constants remain same)
const TIMELINE = {
    START: 0,
    INTRO_END: 0.2,    // Intro fades out
    B1_START: 0.25,    // Beat 1 fades in
    B1_END: 0.45,      // Beat 1 fades out
    B2_START: 0.5,     // Beat 2 fades in
    B2_END: 0.7,       // Beat 2 fades out
    B3_START: 0.75,    // Beat 3 fades in
    END: 1
}

export function Hero() {
    const t = useTranslations('landing.hero')
    const containerRef = useRef<HTMLElement>(null)
    const { setScene } = useNarrative()
    const reducedMotion = useReducedMotion()

    // --- SCROLL ENGINE ---
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    // Synchronize Narrative (orbs)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // ... (same logic)
        if (latest < TIMELINE.B1_START) setScene('hero_beat_0')
        else if (latest < TIMELINE.B2_START) setScene('hero_beat_1')
        else if (latest < TIMELINE.B3_START) setScene('hero_beat_2')
        else setScene('hero_beat_3')
    })

    // ... (transforms remain defined, but unused if reducedMotion)
    // BEAT 0: INTRO
    const s0_opacity = useTransform(scrollYProgress, [TIMELINE.START, TIMELINE.INTRO_END], [1, 0])
    const s0_y = useTransform(scrollYProgress, [TIMELINE.START, TIMELINE.INTRO_END], [0, -40])
    const s0_blur = useTransform(scrollYProgress, [TIMELINE.START, TIMELINE.INTRO_END], ["blur(0px)", "blur(10px)"])
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    // BEAT 1: ORIGIN
    const s1_opacity = useTransform(scrollYProgress,
        [TIMELINE.INTRO_END, TIMELINE.B1_START, TIMELINE.B1_END, TIMELINE.B2_START],
        [0, 1, 1, 0]
    )
    const s1_y = useTransform(scrollYProgress,
        [TIMELINE.INTRO_END, TIMELINE.B1_START, TIMELINE.B1_END, TIMELINE.B2_START],
        [40, 0, 0, -40]
    )
    const s1_blur = useTransform(scrollYProgress,
        [TIMELINE.INTRO_END, TIMELINE.B1_START, TIMELINE.B1_END, TIMELINE.B2_START],
        [10, 0, 0, 10]
    )

    // BEAT 2: PAIN
    const s2_opacity = useTransform(scrollYProgress,
        [TIMELINE.B1_END, TIMELINE.B2_START, TIMELINE.B2_END, TIMELINE.B3_START],
        [0, 1, 1, 0]
    )
    const s2_y = useTransform(scrollYProgress,
        [TIMELINE.B1_END, TIMELINE.B2_START, TIMELINE.B2_END, TIMELINE.B3_START],
        [40, 0, 0, -40]
    )
    const s2_blur = useTransform(scrollYProgress,
        [TIMELINE.B1_END, TIMELINE.B2_START, TIMELINE.B2_END, TIMELINE.B3_START],
        [10, 0, 0, 10]
    )

    // BEAT 3: SOLUTION
    const s3_opacity = useTransform(scrollYProgress, [TIMELINE.B2_END, TIMELINE.B3_START], [0, 1])
    const s3_y = useTransform(scrollYProgress, [TIMELINE.B2_END, TIMELINE.B3_START], [40, 0])
    const s3_blur = useTransform(scrollYProgress, [TIMELINE.B2_END, TIMELINE.B3_START], [10, 0])


    return (
        <section
            ref={containerRef}
            className={cn(
                "relative min-h-screen transition-all",
                !reducedMotion && "md:h-[600vh]"
            )}
        >
            {/* STICKY CONTAINER (Desktop Only, Hidden on Reduced Motion) */}
            <div className={cn(
                "hidden md:flex flex-col justify-center overflow-hidden",
                !reducedMotion ? "md:sticky md:top-0 md:h-screen" : "hidden"
            )}>
                {/* ... (Desktop Content will go here via next chunk, but check logic) */}
                <div className="w-full h-full items-center justify-center relative z-10 hidden md:flex">
                    {/* ... (Desktop inner content) */}
                    {/* Note: I am rewriting this block so I need to be careful with nesting. 
                        The original code had 'div className="md:sticky..."' then 'div className="hidden md:flex..."'.
                    */}


                    {/* SCROLL HINT */}
                    <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
                        style={{ opacity: scrollHintOpacity }}
                    >
                        <span className="opacity-50">Scroll to explore</span>
                        <ChevronDown size={20} className="animate-bounce" />
                    </motion.div>

                    {/* CENTRAL STAGE */}
                    <div className="w-full max-w-6xl px-6 relative flex flex-col items-center h-[600px]">

                        {/* BEAT 0: INTRO */}
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center text-center"
                            style={{ opacity: s0_opacity, y: s0_y, filter: s0_blur }}
                        >
                            <div className="text-sm font-mono text-accent-purple mb-6 tracking-[0.3em] uppercase font-semibold">
                                {t('eyebrow')}
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-8 text-balance max-w-5xl mx-auto">
                                <SpotlightHeading as="span">{t('headline')}</SpotlightHeading>
                            </h1>
                            <p className="text-2xl text-white/80 leading-relaxed md:leading-[1.5] mb-12 max-w-3xl mx-auto text-pretty font-light">
                                {t('subheadline')}
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                {[1, 2, 3].map(i => (
                                    <Badge key={i} variant="outline" size="md" className="bg-white/5 border-white/10 hover:border-white/20 transition-colors text-white/70 px-6 py-2.5 text-sm">
                                        {t(`chips.c${i}`)}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center gap-6">
                                <CTAButton href="/projects" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                                    {t('ctaPrimary')}
                                </CTAButton>
                                <CTAButton href="https://wa.me/5491121925947" variant="ghost" size="lg">
                                    {t('ctaSecondary')}
                                </CTAButton>
                            </div>
                        </motion.div>

                        {/* BEAT 1: ORIGIN */}
                        <motion.div
                            className="absolute inset-x-0 top-12 flex flex-col items-center text-center px-4"
                            style={{ opacity: s1_opacity, y: s1_y, filter: useTransform(s1_blur, b => `blur(${b}px)`) }}
                            aria-hidden="true"
                        >
                            <div className="w-24 h-1.5 bg-accent-purple mb-12 rounded-full" />
                            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white text-balance max-w-4xl leading-tight">
                                {t('beats.b1.headline')}
                            </h2>
                            <p className="text-2xl lg:text-3xl text-white/80 leading-relaxed max-w-3xl mx-auto text-pretty font-light">
                                {t('beats.b1.sub')}
                            </p>
                        </motion.div>

                        {/* BEAT 2: PAIN */}
                        <motion.div
                            className="absolute inset-x-0 top-12 flex flex-col items-center text-center px-4"
                            style={{ opacity: s2_opacity, y: s2_y, filter: useTransform(s2_blur, b => `blur(${b}px)`) }}
                            aria-hidden="true"
                        >
                            <div className="w-24 h-1.5 bg-accent-orange mb-12 rounded-full" />
                            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white text-balance max-w-4xl leading-tight">
                                {t('beats.b2.headline')}
                            </h2>
                            <p className="text-2xl lg:text-3xl text-white/80 leading-relaxed max-w-3xl mx-auto text-pretty font-light">
                                {t('beats.b2.sub')}
                            </p>
                        </motion.div>

                        {/* BEAT 3: SOLUTION */}
                        <motion.div
                            className="absolute inset-x-0 top-12 flex flex-col items-center text-center px-4"
                            style={{ opacity: s3_opacity, y: s3_y, filter: useTransform(s3_blur, b => `blur(${b}px)`) }}
                            aria-hidden="true"
                        >
                            <div className="w-24 h-1.5 bg-green-500 mb-12 rounded-full" />
                            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white text-balance max-w-4xl leading-tight">
                                {t('beats.b3.headline')}
                            </h2>
                            <p className="text-2xl lg:text-3xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 text-pretty font-light">
                                {t('beats.b3.sub')}
                            </p>
                            <CTAButton href="https://wa.me/5491121925947" variant="outline" size="lg" icon={<MessageCircle size={22} />}>
                                {t('beats.b3.cta')}
                            </CTAButton>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* --- REDUCED MOTION / MOBILE FALLBACK --- 
                Visible on Mobile OR if Reduced Motion is ON.
            */}
            <div className={cn(
                "md:hidden pt-32 pb-24 px-6 flex flex-col gap-24 items-center text-center relative z-10",
                reducedMotion && "md:flex md:pt-32"
            )}>
                <div className="flex flex-col gap-6 items-center">
                    <div className="text-xs font-mono text-accent-purple tracking-widest uppercase opacity-90">{t('eyebrow')}</div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white text-balance max-w-4xl">
                        {t('headline')}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed text-balance max-w-2xl mx-auto">{t('subheadline')}</p>

                    <div className="flex flex-wrap gap-2 justify-center my-2">
                        {[1, 2, 3].map(i => (
                            <Badge key={i} variant="outline" size="sm" className="bg-white/5 border-white/10 text-white/70">
                                {t(`chips.c${i}`)}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full px-8 justify-center">
                        <CTAButton href="/projects" variant="primary">{t('ctaPrimary')}</CTAButton>
                        <CTAButton href="https://wa.me/5491121925947" variant="outline">{t('ctaSecondary')}</CTAButton>
                    </div>
                </div>

                {[1, 2, 3].map((b) => (
                    <div key={b} className="flex flex-col items-center max-w-3xl">
                        <div className="w-12 h-1 bg-accent-purple mb-6 rounded-full" />
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white text-balance">
                            {t(`beats.b${b}.headline`)}
                        </h3>
                        <p className="text-white/80 mb-6 leading-relaxed max-w-xl mx-auto text-balance text-lg">
                            {t(`beats.b${b}.sub`)}
                        </p>
                        {b === 3 && (
                            <CTAButton href="https://wa.me/5491121925947" variant="ghost" size="sm" icon={<ArrowRight size={16} />}>
                                {t('beats.b3.cta')}
                            </CTAButton>
                        )}
                    </div>
                ))}
            </div>

        </section>
    )
}
