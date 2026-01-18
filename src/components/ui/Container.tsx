'use client'

import { cn } from '@/lib/utils'

interface ContainerProps {
    children: React.ReactNode
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    as?: 'div' | 'section' | 'article' | 'main'
}

const sizeMap = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
} as const

/**
 * Consistent container component with responsive padding.
 * Use this instead of raw container-custom class for consistency.
 */
export function Container({
    children,
    className,
    size = 'xl',
    as: Component = 'div',
}: ContainerProps) {
    return (
        <Component
            className={cn(
                'mx-auto px-6 md:px-8 lg:px-12',
                sizeMap[size],
                className
            )}
        >
            {children}
        </Component>
    )
}
