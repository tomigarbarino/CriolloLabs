'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { getDemoUrl } from '@/lib/contact'

const path = '/es/seguimiento-presupuestos'
export default function BudgetLink({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const [href, setHref] = useState(path)
  function refresh() {
    const query = getDemoUrl(window.location.search).split('?')[1]
    const next = query ? `${path}?${query}` : path
    setHref(next)
    return next
  }
  useEffect(() => {
    refresh()
  }, [])
  return (
    <a
      className={className}
      href={href}
      onClick={(event) => {
        event.currentTarget.href = refresh()
      }}
      onAuxClick={(event) => {
        event.currentTarget.href = refresh()
      }}
    >
      {children}
    </a>
  )
}
