'use client'

import { Container } from '@/components/ui/Container'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

const benefits = [
    {
        title: "Te ahorramos laburo manual",
        description: "Automatizamos tareas repetitivas (cargas, reportes, seguimiento) para que el equipo se enfoque en vender y operar."
    },
    {
        title: "Orden y control",
        description: "Centralizamos la info en un solo lugar para que no dependas de planillas sueltas o mensajes perdidos."
    },
    {
        title: "Decisiones con datos",
        description: "Tableros simples con lo importante: qué está pasando y qué falta resolver."
    }
]

export function WhatWeSolve() {
    const reducedMotion = useReducedMotion()

    return (
        <section className="relative py-16 md:py-24">
            <Container size="lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        ¿Qué resolvemos?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Convertimos el caos operativo en sistemas ordenados. Sin humo, sin promesas imposibles.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-colors"
                        >
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-accent-purple flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed text-pretty">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
