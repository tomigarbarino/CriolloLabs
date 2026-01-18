'use client'

import { useEffect, useState, useRef } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface TextScrambleProps {
    children: string
    className?: string
    chars?: string
    speed?: number
    revealSpeed?: number
}

export function TextScramble({
    children,
    className,
    chars = '!<>-_\\/[]{}—=+*^?#________',
    speed = 50,
    revealSpeed = 70,
}: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(children)
    const [isScrambling, setIsScrambling] = useState(false)
    const reducedMotion = useReducedMotion()
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const scramble = () => {
        if (reducedMotion) return

        let pos = 0
        clearInterval(intervalRef.current!)

        intervalRef.current = setInterval(() => {
            const scrambled = children
                .split('')
                .map((char, index) => {
                    if (index < pos) {
                        return children[index]
                    }
                    return chars[Math.floor(Math.random() * chars.length)]
                })
                .join('')

            setDisplayText(scrambled)
            pos += 1 / 3

            if (pos > children.length) {
                clearInterval(intervalRef.current!)
                setDisplayText(children)
            }
        }, speed)
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current!)
    }, [])

    return (
        <span
            className={className}
            onMouseEnter={scramble}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }} // Ensures layout stability
        >
            {displayText}
        </span>
    )
}
