'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface EffectsContextType {
    effectsEnabled: boolean
    toggleEffects: () => void
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined)

export function EffectsProvider({ children }: { children: React.ReactNode }) {
    const [effectsEnabled, setEffectsEnabled] = useState(true)

    // Optional: Persist state
    useEffect(() => {
        const stored = localStorage.getItem('criollo_effects')
        if (stored !== null) {
            setEffectsEnabled(stored === 'true')
        }
    }, [])

    const toggleEffects = () => {
        setEffectsEnabled((prev) => {
            const newState = !prev
            localStorage.setItem('criollo_effects', String(newState))
            return newState
        })
    }

    return (
        <EffectsContext.Provider value={{ effectsEnabled, toggleEffects }}>
            {children}
        </EffectsContext.Provider>
    )
}

export function useEffects() {
    const context = useContext(EffectsContext)
    if (context === undefined) {
        throw new Error('useEffects must be used within an EffectsProvider')
    }
    return context
}
