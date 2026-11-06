'use client'

import { useEffect, useState, type ComponentPropsWithoutRef } from 'react'
import { getBudgetUrl, type BudgetLocale } from '@/lib/contact'

export default function BudgetLink({
  locale = 'es',
  onClick,
  onAuxClick,
  ...props
}: Omit<ComponentPropsWithoutRef<'a'>, 'href'> & { locale?: BudgetLocale }) {
  const [href, setHref] = useState(() => getBudgetUrl(locale))
  useEffect(() => {
    setHref(getBudgetUrl(locale, window.location.search))
  }, [locale])
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        event.currentTarget.href = getBudgetUrl(locale, window.location.search)
        onClick?.(event)
      }}
      onAuxClick={(event) => {
        event.currentTarget.href = getBudgetUrl(locale, window.location.search)
        onAuxClick?.(event)
      }}
    />
  )
}
