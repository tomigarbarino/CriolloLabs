'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Scene = dynamic(() => import('@/components/Scene').then((mod) => ({ default: mod.Scene })), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 animate-pulse" />
  ),
})

export function BackgroundCanvas() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-green/10" />
      }>
        <Scene />
      </Suspense>
    </div>
  )
}
