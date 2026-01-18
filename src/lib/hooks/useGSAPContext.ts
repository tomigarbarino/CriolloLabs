'use client'

import { useEffect, useRef, type RefObject } from 'react'
import gsap from 'gsap'

/**
 * Hook para manejar GSAP context correctamente y evitar memory leaks
 * Funciona con React StrictMode (doble mount)
 */
export function useGSAPContext<T extends HTMLElement>(
  scopeRef: RefObject<T>,
  animationFn: (ctx: gsap.Context) => void | Promise<void>,
  dependencies: unknown[] = []
) {
  const contextRef = useRef<gsap.Context>()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion || !scopeRef.current) return

    // Create GSAP context scoped to the ref
    contextRef.current = gsap.context(() => {
      // Call animation function (can be async)
      void animationFn(contextRef.current!)
    }, scopeRef)

    return () => {
      // Cleanup: revert all animations in this context
      contextRef.current?.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scopeRef, ...dependencies])

  return contextRef
}
