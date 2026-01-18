'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Container } from '@/components/ui/Container'
import { CTAButton } from '@/components/ui/CTAButton'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { slideInLeft, slideInRight, duration, ease } from '@/lib/motion'
import { MessageCircle, Mail, Send, CheckCircle, Linkedin, Github } from 'lucide-react'

import { useNarrative } from '@/context/NarrativeContext'
import { useSearchParams } from 'next/navigation'
import { BUILDS } from '@/lib/builds/catalog'

type FormData = {
    name: string
    profile: string
    goal: string
    message: string
}

import { Suspense } from 'react'

export function Contact() {
    return (
        <Suspense fallback={<div className="py-24" />}>
            <ContactContent />
        </Suspense>
    )
}


function ContactContent() {
    const t = useTranslations('landing.contact')
    const tBuilds = useTranslations('landing.builds')
    const reducedMotion = useReducedMotion()
    const { setScene } = useNarrative()
    const searchParams = useSearchParams()
    const intent = searchParams.get('intent')
    const intentBuild = BUILDS.find(b => b.slug === intent)

    const [isSubmitted, setIsSubmitted] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log('Form data:', data)
        setIsSubmitted(true)
    }

    return (
        <section
            id="contact"
            className="py-24 md:py-32 relative overflow-hidden"
            onMouseEnter={() => setScene('contact')}
        >
            <motion.div onViewportEnter={() => setScene('contact')} />
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Contact Info */}
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
                            <p className="text-xl text-white/70 leading-relaxed text-pretty">{t('subtitle')}</p>
                            <p className="text-sm font-medium text-accent-purple mt-4">{t('trust')}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <CTAButton
                                href="https://wa.me/5491121925947"
                                variant="primary"
                                size="lg"
                                icon={<MessageCircle size={20} />}
                                className="w-full sm:w-auto whitespace-nowrap"
                            >
                                {t('ctaWhatsApp')}
                            </CTAButton>
                            <CTAButton
                                href="mailto:tomasgarbarino.dev@gmail.com"
                                variant="outline"
                                size="lg"
                                icon={<Mail size={20} />}
                                className="w-full sm:w-auto whitespace-nowrap"
                            >
                                {t('ctaEmail')}
                            </CTAButton>
                        </div>

                        {/* Social Links */}
                        <div className="pt-12 border-t border-white/10">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
                                {t('documentation.title')}
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/tomas-garbarino/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark-lighter rounded-full hover:bg-white/10 hover:text-accent-purple transition-all duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://github.com/tomigarbarino"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark-lighter rounded-full hover:bg-white/10 hover:text-accent-orange transition-all duration-200"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Mini-Audit Form */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-dark-lighter p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: duration.normal, ease: ease.smooth }}
                                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="w-20 h-20 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold">{t('audit.success')}</h3>
                                <CTAButton
                                    onClick={() => setIsSubmitted(false)}
                                    variant="outline"
                                    size="sm"
                                >
                                    Enviar otro
                                </CTAButton>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{t('audit.title')}</h3>
                                    {t.raw('audit.description') && (
                                        <p className="text-white/60 text-sm">{t('audit.description')}</p>
                                    )}

                                    {/* Trust Bullets */}
                                    <div className="mt-4 mb-2 space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-white/70">
                                            <CheckCircle size={14} className="text-accent-green/80 shrink-0" />
                                            <span>{t('audit.proof.time')}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-white/70">
                                            <CheckCircle size={14} className="text-accent-green/80 shrink-0" />
                                            <span>{t('audit.proof.value')}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-white/70">
                                            <CheckCircle size={14} className="text-accent-green/80 shrink-0" />
                                            <span>{t('audit.proof.speed')}</span>
                                        </div>
                                    </div>
                                </div>

                                {intentBuild && (
                                    <div className="p-4 bg-accent-purple/10 border border-accent-purple/20 rounded-xl">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        <p className="text-sm text-accent-purple font-medium">{t('contextual.prefix')} {tBuilds(`${intentBuild.key}.title` as any)}</p>
                                        <p className="text-xs text-white/50 mt-1">{t('contextual.question')}</p>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5 text-white/80">
                                            {t('audit.name')}
                                        </label>
                                        <input
                                            {...register('name', { required: true })}
                                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 
                        focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple 
                        outline-none transition-all placeholder:text-white/30"
                                            placeholder="Tomás"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5 text-white/80">
                                            {t('audit.profile')}
                                        </label>
                                        <input
                                            {...register('profile', { required: true })}
                                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 
                        focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple 
                        outline-none transition-all placeholder:text-white/30"
                                            placeholder="linkedin.com/in/..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5 text-white/80">
                                            {t('audit.goal')}
                                        </label>
                                        <input
                                            {...register('goal')}
                                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 
                        focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple 
                        outline-none transition-all placeholder:text-white/30"
                                            placeholder="Conseguir trabajo, vender más..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5 text-white/80">
                                            {t('audit.message')}
                                        </label>
                                        <textarea
                                            {...register('message')}
                                            rows={4}
                                            className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 
                        focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple 
                        outline-none transition-all resize-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                <CTAButton
                                    disabled={isSubmitting}
                                    type="submit"
                                    variant="primary"
                                    className="w-full py-4 text-lg"
                                    icon={!isSubmitting && <Send size={18} />}
                                    iconPosition="right"
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">Enviando...</span>
                                    ) : (
                                        t('audit.submit')
                                    )}
                                </CTAButton>

                                <p className="text-center text-xs text-white/40">
                                    {t('audit.fallback')}{' '}
                                    <a
                                        href="mailto:tomasgarbarino.dev@gmail.com"
                                        className="text-white/60 hover:text-white underline underline-offset-2 transition-colors"
                                    >
                                        email
                                    </a>
                                    .
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
