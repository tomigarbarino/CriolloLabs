'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface BadgeProps {
    children: React.ReactNode
    icon?: LucideIcon
    variant?: 'default' | 'outline' | 'glow'
    size?: 'sm' | 'md'
    className?: string
}

/**
 * Badge/chip component for trust signals, tags, and labels.
 * Supports icons and multiple visual variants.
 */
export function Badge({
    children,
    icon: Icon,
    variant = 'default',
    size = 'sm',
    className,
}: BadgeProps) {
    const baseStyles = 'inline-flex items-center gap-2 rounded-full transition-all duration-200'

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
    }

    const variantStyles = {
        default: 'bg-white/5 border border-white/10 text-white/60 hover:text-white/90 hover:border-white/20',
        outline: 'border border-white/20 text-white/70 hover:bg-white/5',
        glow: 'bg-white/5 border border-accent-purple/30 text-accent-purple-light hover:border-accent-purple/50',
    }

    return (
        <span
            className={cn(
                baseStyles,
                sizeStyles[size],
                variantStyles[variant],
                className
            )}
        >
            {Icon && <Icon size={size === 'sm' ? 14 : 16} className="flex-shrink-0" />}
            <span>{children}</span>
        </span>
    )
}
