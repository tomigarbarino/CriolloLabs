/**
 * Motion Design Tokens
 * Apple-like, executive motion: slow, smooth, purposeful
 */

// Timing durations (in seconds for Framer Motion)
export const duration = {
    fast: 0.15,      // micro-interactions (hover, press)
    normal: 0.25,    // standard transitions
    slow: 0.35,      // entrance animations
    slower: 0.5,     // hero elements, major reveals
    parallax: 0.1,   // parallax response time
} as const

// Easing curves (Apple-like smooth motion)
export const ease = {
    // Primary smooth ease - executive feel
    smooth: [0.2, 0.8, 0.2, 1] as const,
    // Quick out for snappy entrances
    out: [0, 0, 0.2, 1] as const,
    // Subtle bounce for emphasis (use sparingly)
    bounce: [0.34, 1.56, 0.64, 1] as const,
    // Linear for parallax
    linear: [0, 0, 1, 1] as const,
} as const

// Distance tokens (in pixels)
export const distance = {
    xs: 8,   // subtle slide
    sm: 12,  // standard entrance
    md: 16,  // hero elements
    lg: 24,  // parallax max shift
} as const

// Parallax speed multipliers (relative to scroll)
export const parallax = {
    slow: 0.05,   // background blobs
    medium: 0.1,  // mid-layer elements
    fast: 0.15,   // foreground accents
} as const

// Stagger delays for list animations
export const stagger = {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
} as const

/**
 * Framer Motion Variant Presets
 * Use these with <motion.div variants={fadeUp} initial="hidden" animate="visible">
 */

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: distance.sm
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        }
    }
} as const

export const fadeDown = {
    hidden: {
        opacity: 0,
        y: -distance.sm
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        }
    }
} as const

export const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: duration.slow,
            ease: ease.out,
        }
    }
} as const

export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -distance.md
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        }
    }
} as const

export const slideInRight = {
    hidden: {
        opacity: 0,
        x: distance.md
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        }
    }
} as const

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: duration.slow,
            ease: ease.smooth,
        }
    }
} as const

// Container variant for staggered children
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: stagger.normal,
            delayChildren: 0.1,
        }
    }
} as const

// Hero-specific slow reveal
export const heroReveal = {
    hidden: {
        opacity: 0,
        y: distance.md
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration.slower,
            ease: ease.smooth,
        }
    }
} as const

// Card hover lift effect
export const cardHover = {
    rest: {
        y: 0,
        scale: 1,
        transition: {
            duration: duration.fast,
            ease: ease.smooth,
        }
    },
    hover: {
        y: -4,
        scale: 1.01,
        transition: {
            duration: duration.fast,
            ease: ease.smooth,
        }
    }
} as const

// Button press effect
export const buttonPress = {
    rest: { scale: 1 },
    pressed: {
        scale: 0.98,
        transition: {
            duration: duration.fast,
            ease: ease.out,
        }
    }
} as const

// Underline slide-in for nav links
export const underlineSlide = {
    rest: {
        scaleX: 0,
        originX: 0
    },
    hover: {
        scaleX: 1,
        transition: {
            duration: duration.normal,
            ease: ease.smooth,
        }
    }
} as const
