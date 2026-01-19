'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { buttonPress, duration, ease } from '@/lib/motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface CTAButtonProps {
    children: React.ReactNode
    href?: string
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit'
    disabled?: boolean
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
}

/**
 * Enhanced CTA button with press feedback microinteraction.
 * Premium feel with gradient backgrounds and smooth transitions.
 */
export function CTAButton({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    type = 'button',
    disabled = false,
    icon,
    iconPosition = 'left',
}: CTAButtonProps) {
    const reducedMotion = useReducedMotion()

    const baseStyles = cn(
        'relative inline-flex items-center justify-center font-medium',
        'rounded-full overflow-hidden',
        'transition-all',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:ring-offset-2 focus:ring-offset-dark'
    )

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm gap-1.5',
        md: 'px-6 py-3 text-base gap-2',
        lg: 'px-8 py-4 text-lg gap-2.5',
    }

    const variantStyles = {
        primary: cn(
            'bg-gradient-to-r from-accent-purple via-accent-orange to-accent-purple bg-[length:200%_auto] animate-gradient text-white',
            'hover:shadow-lg hover:shadow-accent-purple/30',
            'active:shadow-accent-purple/20'
        ),
        secondary: cn(
            'bg-white/10 text-white backdrop-blur-sm',
            'hover:bg-white/20'
        ),
        outline: cn(
            'border border-white/20 text-white',
            'hover:bg-white/5 hover:border-white/30'
        ),
        ghost: cn(
            'text-white',
            'hover:text-white hover:bg-white/5'
        ),
    }

    const combinedClassName = cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
    )



    // Motion wrapper with press effect
    const MotionWrapper = reducedMotion ? 'span' : motion.span
    const motionProps = reducedMotion
        ? {}
        : {
            variants: buttonPress,
            initial: 'rest',
            whileTap: 'pressed',
            transition: {
                duration: duration.fast,
                ease: ease.out,
            },
        }

    if (href) {
        return (
            <MotionWrapper {...motionProps} className="inline-block relative group">
                <Link
                    href={href}
                    className={combinedClassName}
                >
                    <span className="relative z-20 flex items-center gap-2">
                        {icon && iconPosition === 'left' && icon}
                        <span>{children}</span>
                        {icon && iconPosition === 'right' && icon}
                    </span>
                </Link>
            </MotionWrapper>
        )
    }

    return (
        <MotionWrapper {...motionProps} className="inline-block relative group">
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={combinedClassName}
            >
                <span className="relative z-20 flex items-center gap-2">
                    {icon && iconPosition === 'left' && icon}
                    <span>{children}</span>
                    {icon && iconPosition === 'right' && icon}
                </span>
            </button>
        </MotionWrapper>
    )
}
