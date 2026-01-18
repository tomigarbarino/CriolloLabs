'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'
import { cn } from '@/lib/utils'
import { useEffects } from '@/context/EffectsContext'

interface SpotlightHeadingProps {
    children: React.ReactNode
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function SpotlightHeading({
    children,
    className,
    as: Component = 'h1',
}: SpotlightHeadingProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const { effectsEnabled } = useEffects()

    const maskImage = useMotionTemplate`
        radial-gradient(
            200px circle at ${mouseX}px ${mouseY}px,
            black 0%,
            black 40%,
            transparent 100%
        )
    `

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        if (!effectsEnabled) return
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <Component
            className={cn(
                'relative block overflow-hidden',
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {/* If effects enabled, use dimmed base + spotlight overlay. If disabled, use normal text. */}
            <span className={cn(
                "block select-none pb-1 transition-opacity duration-300",
                effectsEnabled ? "text-white/20" : "text-white"
            )}>
                {children}
            </span>

            {/* Lit Overlay Text (Masked) - Only if enabled */}
            {effectsEnabled && (
                <motion.div
                    className="absolute inset-0 select-auto pointer-events-none pb-1 text-white"
                    style={{
                        maskImage,
                        WebkitMaskImage: maskImage,
                    }}
                >
                    {children}
                </motion.div>
            )}
        </Component>
    )
}
