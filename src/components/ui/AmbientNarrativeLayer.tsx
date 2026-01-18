'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useNarrative } from '@/context/NarrativeContext'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

// --- SCENE CONFIGURATION ---
const SCENES: Record<string, {
    x: string | number,
    y: string | number,
    scale: number,
    color: string,
    blur: string,
    artifact?: 'bracket' | 'circle' | 'square' | 'dots'
}> = {
    // HERO (Showcase Mode - Anchor Follow)
    'hero_beat_0': { x: '80%', y: '20%', scale: 1.5, color: 'bg-accent-purple/30', blur: 'blur-[120px]', artifact: 'circle' },
    'hero_beat_1': { x: '25%', y: '80%', scale: 1.2, color: 'bg-accent-purple/40', blur: 'blur-[100px]', artifact: 'square' },
    'hero_beat_2': { x: '50%', y: '50%', scale: 1.8, color: 'bg-accent-orange/20', blur: 'blur-[130px]', artifact: 'dots' },
    'hero_beat_3': { x: '90%', y: '90%', scale: 1.0, color: 'bg-accent-purple/30', blur: 'blur-[100px]', artifact: 'bracket' },

    // STORY (Narrative Mode - Default if anchor fails)
    'story_title': { x: '50%', y: '15%', scale: 1.2, color: 'bg-accent-purple/20', blur: 'blur-[100px]', artifact: 'circle' },
    'story_closing': { x: '50%', y: '80%', scale: 1.5, color: 'bg-accent-orange/20', blur: 'blur-[100px]', artifact: 'square' },

    // WEEKLY BUILDS (Ambient Mode)
    'builds': { x: '85%', y: '15%', scale: 1.4, color: 'bg-accent-orange/15', blur: 'blur-[110px]', artifact: undefined },

    // SERVICES (Hue Shift Mode - Base Config)
    'services': { x: '50%', y: '25%', scale: 1.4, color: 'bg-accent-purple/20', blur: 'blur-[105px]', artifact: undefined },

    // PROCESS (Line Energy Mode)
    'process': { x: '10%', y: '50%', scale: 1.6, color: 'bg-accent-purple/15', blur: 'blur-[95px]', artifact: undefined },

    // AUDIENCE (Ambient Calm Mode)
    'audience': { x: '90%', y: '30%', scale: 1.1, color: 'bg-accent-cyan/10', blur: 'blur-[120px]', artifact: undefined },

    // FAQ (Quiet Mode)
    'faq': { x: '50%', y: '90%', scale: 0.9, color: 'bg-accent-purple/10', blur: 'blur-[130px]', artifact: undefined },

    // CONTACT (CTA Focus Mode)
    'contact': { x: '50%', y: '50%', scale: 1.5, color: 'bg-accent-orange/25', blur: 'blur-[100px]', artifact: 'square' },
}

const DEFAULT_SCENE = SCENES['hero_beat_0']

export function AmbientNarrativeLayer() {
    const { activeScene } = useNarrative()
    const reducedMotion = useReducedMotion()
    const [targetState, setTargetState] = useState(DEFAULT_SCENE)

    useEffect(() => {
        const updatePosition = () => {
            // 1. Identify Mode based on scene name
            const isHero = activeScene.startsWith('hero_')
            const isStory = activeScene.startsWith('story_')
            const isServices = activeScene.startsWith('services')

            // Default: Look up directly or fallback to DEFAULT
            // Base config removed as it was unused]

            // --- MODE: ANCHOR FOLLOW (Hero & Story) ---
            if (isHero || isStory) {
                const anchor = document.querySelector(`[data-scene-anchor="${activeScene}"]`)
                if (anchor) {
                    const rect = anchor.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2

                    // Differentiate styling for Story Items vs Hero
                    const isStoryItem = activeScene.startsWith('story_item')

                    setTargetState({
                        x: centerX,
                        y: centerY,
                        // Use config if exists (e.g. hero beats), else dynamic story defaults
                        scale: SCENES[activeScene]?.scale || (isStoryItem ? 0.6 : 1.2),
                        color: SCENES[activeScene]?.color || (isStoryItem ? 'bg-accent-orange/30' : 'bg-accent-purple/30'),
                        blur: SCENES[activeScene]?.blur || 'blur-[80px]',
                        artifact: SCENES[activeScene]?.artifact || (isStoryItem ? 'dots' : undefined)
                    })
                    return
                }
                // If no anchor found, fall through to static config (defined in SCENES)
                if (SCENES[activeScene]) {
                    setTargetState(SCENES[activeScene])
                    return
                }
            }

            // --- MODE: HUE SHIFT (Services) ---
            if (isServices) {
                // Base position from 'services' or default
                const base = SCENES['services'] || DEFAULT_SCENE
                const idx = parseInt(activeScene.split('_').pop() || '0')

                setTargetState({
                    ...base,
                    // Subtle shifts based on index
                    color: idx === 1 ? 'bg-accent-orange/20' : 'bg-accent-purple/20',
                    artifact: idx === 0 ? 'bracket' : idx === 1 ? 'dots' : 'circle'
                })
                return
            }

            // --- MODES: AMBIENT / LINE / CALM / QUIET / FOCUS ---
            // These simply rely on the static SCENES config defined above.
            // If activeScene matches a key in SCENES, we use it.
            if (SCENES[activeScene]) {
                setTargetState(SCENES[activeScene])
            }
        }

        updatePosition()
        window.addEventListener('resize', updatePosition)
        return () => window.removeEventListener('resize', updatePosition)
    }, [activeScene])


    if (reducedMotion) return null

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* MAIN ORB */}
            <motion.div
                className={cn("absolute w-[500px] h-[500px] rounded-full mix-blend-screen transition-colors duration-700", targetState.color, targetState.blur)}
                initial={false}
                animate={{
                    left: targetState.x,
                    top: targetState.y,
                    scale: targetState.scale,
                    x: '-50%', // Centering offset
                    y: '-50%'
                }}
                transition={{
                    type: "spring",
                    stiffness: 45,
                    damping: 25,
                    mass: 0.8
                }}
            />

            {/* SECONDARY ORB (Follower) */}
            <motion.div
                className="absolute w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[80px] mix-blend-screen"
                animate={{
                    left: targetState.x,
                    top: targetState.y,
                    x: '-30%',
                    y: '-30%',
                    scale: targetState.scale * 0.7
                }}
                transition={{
                    type: "spring",
                    stiffness: 25,
                    damping: 35
                }}
            />

            {/* ARTIFACTS LAYER */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    {targetState.artifact && (
                        <motion.div
                            key={targetState.artifact + activeScene} // Re-trigger on scene change even if artifact is same type
                            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                            animate={{
                                opacity: 0.4,
                                scale: 1,
                                rotate: 0,
                                left: targetState.x,
                                top: targetState.y,
                                x: '-50%',
                                y: '-50%'
                            }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-16 h-16 text-white/30 flex items-center justify-center p-2"
                        >
                            {/* Render Artifact Glyphs */}
                            {targetState.artifact === 'circle' && (
                                <div className="border border-current rounded-full w-full h-full" />
                            )}
                            {targetState.artifact === 'square' && (
                                <div className="border border-current w-full h-full" />
                            )}
                            {targetState.artifact === 'bracket' && (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                                    <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3m8-18h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
                                </svg>
                            )}
                            {targetState.artifact === 'dots' && (
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-current" />
                                    <div className="w-2 h-2 rounded-full bg-current" />
                                    <div className="w-2 h-2 rounded-full bg-current" />
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Global Scrim for readability */}
            <div className="absolute inset-0 bg-dark/20 backdrop-blur-[0.5px]" />
        </div>
    )
}
