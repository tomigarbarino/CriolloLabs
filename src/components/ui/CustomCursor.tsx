'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

export function CustomCursor() {
    const reducedMotion = useReducedMotion()
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    // Mouse position
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth physics for the follower ring
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
    const followerX = useSpring(mouseX, springConfig)
    const followerY = useSpring(mouseY, springConfig)

    useEffect(() => {
        // Only enable on desktop/mouse devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isTouchDevice || reducedMotion) return

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if hovering over clickable elements
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')

            setIsHovering(!!isInteractive)
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        // Hide default cursor
        document.body.style.cursor = 'none'
        const links = document.querySelectorAll('a, button')
        links.forEach((el) => {
            (el as HTMLElement).style.cursor = 'none'
        })

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
            document.body.style.cursor = ''
        }
    }, [mouseX, mouseY, isVisible, reducedMotion])

    if (!isVisible || reducedMotion) return null

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* The main follower ring */}
            <motion.div
                className="absolute w-8 h-8 rounded-full border border-accent-purple/50 mix-blend-screen"
                style={{
                    x: followerX,
                    y: followerY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    borderColor: isHovering
                        ? 'rgba(255, 81, 18, 1)' // Orange full opacity
                        : 'rgba(139, 61, 217, 0.8)', // Purple stronger opacity
                    borderWidth: isHovering ? '3px' : '2px', // Thicker lines
                }}
                transition={{ duration: 0.15 }}
            />

            {/* The small central dot (instant) */}
            <motion.div
                className="absolute w-2 h-2 rounded-full bg-white mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClicking ? 0.5 : isHovering ? 0 : 1, // Hide dot when hovering to let ring take focus
                }}
            />
        </div>
    )
}
