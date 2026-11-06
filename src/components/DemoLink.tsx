'use client'

import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { getDemoUrl } from '@/lib/contact'

function updateHref(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.href = getDemoUrl(window.location.search)
}

export default function DemoLink({ children }: { children: ReactNode }) {
  const [href, setHref] = useState(() => getDemoUrl())

  useEffect(() => {
    setHref(getDemoUrl(window.location.search))
  }, [])

  return (
    <a href={href} onClick={updateHref} onAuxClick={updateHref}>
      {children}
    </a>
  )
}
