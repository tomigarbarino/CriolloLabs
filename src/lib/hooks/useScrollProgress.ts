'use client'

import { useEffect, useState, useRef, RefObject } from 'react'

/**
 * Hook to track scroll progress of the entire page.
 * Returns a value between 0 and 1.
 * Uses requestAnimationFrame for 60fps performance.
 */
export function useScrollProgress(): number {
    const [progress, setProgress] = useState(0)
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0
            setProgress(Math.min(1, Math.max(0, scrollProgress)))
        }

        const handleScroll = () => {
            if (rafRef.current) return // Already scheduled
            rafRef.current = requestAnimationFrame(() => {
                updateProgress()
                rafRef.current = null
            })
        }

        // Initial calculation
        updateProgress()

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
            }
        }
    }, [])

    return progress
}

/**
 * Hook to track scroll progress within a specific element.
 * Returns a value between 0 and 1 based on element's visibility in viewport.
 * 
 * @param elementRef - Ref to the element to track
 * @param offset - Viewport offset (0 = top, 0.5 = center, 1 = bottom)
 */
export function useElementScrollProgress(
    elementRef: RefObject<HTMLElement>,
    offset: number = 0.5
): number {
    const [progress, setProgress] = useState(0)
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const updateProgress = () => {
            const element = elementRef.current
            if (!element) return

            const rect = element.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const elementHeight = rect.height

            // Calculate progress based on element position
            // 0 = element just entered viewport, 1 = element just left viewport
            const elementTop = rect.top

            // Progress from element entering to leaving viewport
            const totalTravel = windowHeight + elementHeight
            const currentPosition = windowHeight - elementTop
            const scrollProgress = currentPosition / totalTravel

            setProgress(Math.min(1, Math.max(0, scrollProgress)))
        }

        const handleScroll = () => {
            if (rafRef.current) return
            rafRef.current = requestAnimationFrame(() => {
                updateProgress()
                rafRef.current = null
            })
        }

        updateProgress()

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
            }
        }
    }, [elementRef, offset])

    return progress
}

/**
 * Hook for parallax effect based on scroll.
 * Returns a transform value to apply to an element.
 * 
 * @param speed - Parallax multiplier (0.05 = slow, 0.15 = fast)
 * @param direction - 'up' moves element up on scroll, 'down' moves down
 */
export function useParallax(
    speed: number = 0.1,
    direction: 'up' | 'down' = 'up'
): number {
    const scrollProgress = useScrollProgress()
    const multiplier = direction === 'up' ? -1 : 1

    // Calculate parallax offset based on viewport height
    const maxOffset = typeof window !== 'undefined' ? window.innerHeight * speed : 100 * speed

    return scrollProgress * maxOffset * multiplier
}
