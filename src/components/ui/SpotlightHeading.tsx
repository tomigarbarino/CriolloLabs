'use client'

import { cn } from '@/lib/utils'

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
    return (
        <Component
            className={cn(
                'block font-bold text-white',
                className
            )}
        >
            {children}
        </Component>
    )
}
