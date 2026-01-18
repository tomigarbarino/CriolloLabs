'use client'

import { useEffect, useState } from 'react'

/**
 * Hook to detect user's reduced motion preference.
 * Returns true if the user prefers reduced motion.
 * 
 * Usage:
 * const reducedMotion = useReducedMotion()
 * if (reducedMotion) return staticContent
 */
export function useReducedMotion(): boolean {
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        // Check if window exists (SSR safety)
        if (typeof window === 'undefined') return

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

        // Set initial value
        setReducedMotion(mediaQuery.matches)

        // Listen for changes
        const handleChange = (event: MediaQueryListEvent) => {
            setReducedMotion(event.matches)
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    return reducedMotion
}

/**
 * Get motion props based on reduced motion preference.
 * Use this to conditionally apply animations.
 * 
 * Usage:
 * const motionProps = useMotionSafe({
 *   initial: { opacity: 0, y: 20 },
 *   animate: { opacity: 1, y: 0 }
 * })
 * <motion.div {...motionProps} />
 */
export function useMotionSafe<T extends Record<string, unknown>>(
    motionProps: T
): T | Record<string, never> {
    const reducedMotion = useReducedMotion()

    if (reducedMotion) {
        // Return empty object to disable animations
        return {} as Record<string, never>
    }

    return motionProps
}
