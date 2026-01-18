'use client'

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
    useReducedMotion
} from 'framer-motion'
import { useEffects } from '@/context/EffectsContext'
import { cn } from '@/lib/utils'
import { useId, useState } from 'react'

export function LightCord() {
    const { toggleEffects, effectsEnabled } = useEffects()
    const [isHovered, setIsHovered] = useState(false)

    const reduceMotion = useReducedMotion()
    const tooltipId = useId()

    // --- PHYSICS ENGINE ---
    // Heavier, "premium" feel (higher damping = less bouncy, more mechanical)
    const y = useMotionValue(0)
    const smoothY = useSpring(y, { stiffness: 400, damping: 30, mass: 1.5 })
    const springY = reduceMotion ? y : smoothY

    const handleDragEnd = (_: unknown, info: { offset: { y: number } }) => {
        // Threshold to trigger (requires deliberate pull)
        if (info.offset.y > 90) toggleEffects()
    }

    const handleClick = () => toggleEffects()

    // --- VISUAL TRANSFORMATIONS ---
    // Cord stretches slightly
    const height = useTransform(springY, [0, 500], [100, 550])

    // --- SUBTLE SWING ---
    // A tiny bit of pendulum motion when interacting
    const rotateVar = useTransform(y, [-20, 0, 150, 200], [-3, 0, 2, 0])
    const rotateSpring = useSpring(rotateVar, { stiffness: 200, damping: 20 })

    return (
        <motion.div
            className="fixed top-0 left-6 md:left-10 z-[60] w-0 flex justify-center pointer-events-none select-none origin-top will-change-transform"
            style={{ rotate: reduceMotion ? 0 : rotateSpring }}
        >
            {/* 
        1. THE CORD 
        Ultra-thin, metallic feel with specular highlight 
      */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] origin-top rounded-full overflow-hidden"
                style={{
                    height: reduceMotion ? 120 : height,
                }}
            >
                {/* Core tread/fabric texture */}
                <div
                    className="absolute inset-0 w-full h-full opacity-60"
                    style={{
                        background: 'linear-gradient(90deg, rgba(0,0,0,0.5), rgba(255,255,255,0.2), rgba(0,0,0,0.5))'
                    }}
                />
                {/* Vertical Fade (disappears into ceiling) */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.8) 100%)'
                    }}
                />
            </motion.div>


            {/* 
        2. THE HANDLE / PENDANT 
        "Apple Glass" Aesthetic: 
        - High backdrop blur
        - Subtle border (rim light)
        - Inner shadows for depth
      */}
            <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 150 }}
                dragElastic={0.15} // Resistance feeling
                onDragEnd={handleDragEnd}
                onDragStart={() => setIsHovered(true)}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{ y: springY, x: "-50%" }}
                className="absolute top-[100px] left-1/2 pointer-events-auto"
            >
                {/* Connector Ring (Metallic) */}
                <div
                    className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[2px] border-white/20 bg-gradient-to-br from-white/30 to-white/5 shadow-sm z-0"
                />

                {/* INTERACTIVE CAPSULE */}
                <button
                    onClick={handleClick}
                    onFocus={() => setIsHovered(true)}
                    onBlur={() => setIsHovered(false)}
                    className="group relative flex flex-col items-center justify-end w-[36px] h-[64px] rounded-[18px] outline-none cursor-grab active:cursor-grabbing hover:scale-[1.02] transition-transform duration-300"
                    aria-label={effectsEnabled ? "Apagar efectos visuales" : "Prender efectos visuales"}
                    aria-pressed={effectsEnabled}
                    aria-describedby={tooltipId}
                >
                    {/* Glass Body */}
                    <div
                        className={cn(
                            "absolute inset-0 rounded-[18px] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500",
                            effectsEnabled
                                ? "bg-dark/40 shadow-[0_10px_40px_-10px_rgba(139,61,217,0.3)]"
                                : "bg-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                        )}
                    >
                        {/* Noise texture for realism (Inline Data URI) */}
                        <div
                            className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Specular Edge (Top-Left) */}
                        <div className="absolute inset-0 rounded-[18px] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] opacity-50" />

                        {/* Internal Illumination (when ON) */}
                        <div
                            className={cn(
                                "absolute inset-0 transition-opacity duration-700",
                                effectsEnabled ? "opacity-100" : "opacity-0"
                            )}
                            style={{
                                background: 'radial-gradient(circle at 50% 80%, rgba(139,61,217,0.4), transparent 60%)'
                            }}
                        />
                    </div>

                    {/* Grip Lines (Tactile feel) */}
                    <div className="relative z-10 flex flex-col gap-[3px] mb-4 opacity-30 group-hover:opacity-50 transition-opacity">
                        <div className="w-4 h-[1px] bg-white rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                        <div className="w-4 h-[1px] bg-white rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                        <div className="w-4 h-[1px] bg-white rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                    </div>

                    {/* Status Dot (The "LED") */}
                    <div className="relative z-10 mb-3">
                        <div
                            className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-500",
                                effectsEnabled
                                    ? "bg-accent-purple shadow-[0_0_8px_var(--accent-purple)]"
                                    : "bg-white/20 shadow-none ring-1 ring-white/10"
                            )}
                        />
                    </div>
                </button>

                {/* 
          3. THE TOOLTIP 
          "Dynamic Island" style floating label 
        */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 10, scale: 0.95 }}
                            animate={{ opacity: 1, x: 24, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="absolute left-[100%] top-1/2 -translate-y-1/2 z-50 pointer-events-none"
                        >
                            <div
                                id={tooltipId}
                                className="
                  flex items-center gap-2 pl-3 pr-4 py-2 
                  bg-dark/90 backdrop-blur-md border border-white/10 rounded-full 
                  shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]
                  whitespace-nowrap
                "
                            >
                                {/* Tiny Arrow */}
                                <div className="absolute left-0 top-1/2 -translate-x-[4px] -translate-y-1/2 w-2 h-2 bg-dark/90 rotate-45 border-l border-b border-white/10" />

                                <span className="text-[11px] font-medium tracking-wide text-white/90">
                                    {effectsEnabled ? "Apagar ambiente" : "Encender ambiente"}
                                </span>
                                <kbd className="hidden md:inline-flex items-center gap-0.5 text-[9px] font-mono text-white/40 border border-white/10 rounded px-1 min-h-[16px]">
                                    CLICK
                                </kbd>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}
