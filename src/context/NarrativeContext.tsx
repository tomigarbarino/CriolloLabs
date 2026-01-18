'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type NarrativeContextType = {
    activeScene: string
    setScene: (scene: string) => void
}

const NarrativeContext = createContext<NarrativeContextType | undefined>(undefined)

export function NarrativeProvider({ children }: { children: ReactNode }) {
    const [activeScene, setActiveScene] = useState('hero_beat_0')

    return (
        <NarrativeContext.Provider value={{ activeScene, setScene: setActiveScene }}>
            {children}
        </NarrativeContext.Provider>
    )
}

export function useNarrative() {
    const context = useContext(NarrativeContext)
    if (!context) {
        throw new Error('useNarrative must be used within a NarrativeProvider')
    }
    return context
}
