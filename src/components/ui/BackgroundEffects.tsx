'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { useEffects } from '@/context/EffectsContext'

export function BackgroundEffects() {
    const reducedMotion = useReducedMotion()
    const { effectsEnabled } = useEffects()
    const [mounted, setMounted] = useState(false)

    // Mouse tracking for parallax
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth springs for orb movement
    const springConfig = { damping: 100, stiffness: 30, mass: 1 } // Heavy, slow movement
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    // PARALLAX TRANSFORMS (Declared at top level to respect Rules of Hooks)
    const parallaxX1 = useTransform(x, (val) => val * 0.05)
    const parallaxY1 = useTransform(y, (val) => val * 0.05)

    const parallaxX2 = useTransform(x, (val) => val * -0.03)
    const parallaxY2 = useTransform(y, (val) => val * -0.03)

    useEffect(() => {
        setMounted(true)
        if (reducedMotion) return

        const handleMouseMove = (e: MouseEvent) => {
            // Center the coordinate system
            mouseX.set(e.clientX - window.innerWidth / 2)
            mouseY.set(e.clientY - window.innerHeight / 2)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY, reducedMotion])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
            {/* 
        LAYER 1: GLOBAL NOISE 
        Adds physical texture to the entire site.
        Visible even when effects are OFF, but subtle.
      */}
            <div
                className="absolute inset-0 z-[5] opacity-[0.035] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    filter: 'contrast(120%) brightness(100%)'
                }}
            />

            {/* 
        LAYER 2: AMBIENT ORBS (The "Bloom") 
        Orbs disappear when effects are OFF.
      */}
            <AnimatePresence>
                {effectsEnabled && !reducedMotion && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-[1]"
                    >
                        {/* Primary Orb (Purple) - Follows mouse slightly */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] md:w-[1000px] md:h-[1000px] rounded-full mix-blend-screen opacity-40"
                            style={{
                                x: parallaxX1,
                                y: parallaxY1,
                                translateX: '-50%',
                                translateY: '-50%',
                                background: 'radial-gradient(circle, rgba(102,16,190,0.3) 0%, rgba(102,16,190,0.05) 40%, transparent 70%)',
                                filter: 'blur(120px)',
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Secondary Orb (Orange/Warm) - Opposing movement */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] rounded-full mix-blend-screen opacity-20"
                            style={{
                                x: parallaxX2,
                                y: parallaxY2,
                                translateX: '-20%', // Offset starting position
                                translateY: '-20%',
                                background: 'radial-gradient(circle, rgba(255,81,18,0.2) 0%, rgba(255,81,18,0.05) 50%, transparent 80%)',
                                filter: 'blur(100px)',
                            }}
                            animate={{
                                scale: [1.1, 1, 1.1],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        {/* Tertiary Orb (Cyan/Cool) - Deep background depth */}
                        <motion.div
                            className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full mix-blend-screen opacity-10"
                            style={{
                                background: 'radial-gradient(circle, rgba(50,50,100,0.3) 0%, transparent 70%)',
                                filter: 'blur(150px)',
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 
        LAYER 3: VIGNETTE 
        Focuses the user on the center content. 
        Always present but stronger when Effects are ON for immersion.
      */}
            <motion.div
                className="absolute inset-0 z-[4] pointer-events-none"
                animate={{
                    background: effectsEnabled
                        ? 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.4) 80%, rgba(10,10,10,0.95) 100%)'
                        : 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.2) 80%, rgba(10,10,10,0.8) 100%)'
                }}
                transition={{ duration: 1 }}
            />
        </div>
    )
}
