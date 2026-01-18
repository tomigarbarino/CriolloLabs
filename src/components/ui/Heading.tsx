'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { heroReveal, fadeUp } from '@/lib/motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface HeadingProps {
    children: React.ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4'
    size?: 'xl' | 'lg' | 'md' | 'sm'
    className?: string
    gradient?: boolean
    animate?: boolean
    delay?: number
}

const sizeStyles = {
    xl: 'text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]',
    lg: 'text-3xl md:text-5xl font-bold tracking-tight leading-tight',
    md: 'text-2xl md:text-3xl font-bold tracking-tight',
    sm: 'text-xl md:text-2xl font-semibold',
} as const

/**
 * Typography component with optional gradient and entrance animation.
 * Maps to semantic heading tags with consistent sizing.
 */
export function Heading({
    children,
    as: Component = 'h2',
    size = 'lg',
    className,
    gradient = false,
    animate = true,
    delay = 0,
}: HeadingProps) {
    const reducedMotion = useReducedMotion()

    const baseClassName = cn(
        sizeStyles[size],
        gradient && 'bg-gradient-to-r from-accent-cyan via-accent-green to-accent-lime bg-clip-text text-transparent',
        'text-balance',
        className
    )

    // Skip animation for reduced motion or if disabled
    if (reducedMotion || !animate) {
        return (
            <Component className={baseClassName}>
                {children}
            </Component>
        )
    }

    const variants = size === 'xl' ? heroReveal : fadeUp

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay }}
        >
            <Component className={baseClassName}>
                {children}
            </Component>
        </motion.div>
    )
}
