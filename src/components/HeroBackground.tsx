'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'

const Scene = dynamic(() => import('@/components/Scene').then((mod) => ({ default: mod.Scene })), {
  ssr: false,
})

interface HeroBackgroundProps {
  isReady: boolean
  onReady: () => void
}

export function HeroBackground({ isReady, onReady }: HeroBackgroundProps) {
  const [showCanvas, setShowCanvas] = useState(false)

  useEffect(() => {
    // Mount canvas after a brief delay to ensure smooth initial load
    const timer = setTimeout(() => setShowCanvas(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      {/* Premium placeholder - visible until canvas is ready */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-dark to-accent-green/10 transition-opacity duration-700 ease-out"
        style={{
          opacity: isReady ? 0 : 1,
          pointerEvents: isReady ? 'none' : 'auto'
        }}
      >
        {/* Animated noise overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 grain" />
        </div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* 3D Canvas - fades in when ready */}
      {showCanvas && (
        <div 
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            opacity: isReady ? 0.4 : 0
          }}
        >
          <Suspense fallback={null}>
            <Scene onReady={onReady} />
          </Suspense>
        </div>
      )}
    </div>
  )
}
