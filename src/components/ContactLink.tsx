'use client'

import { useEffect, useState, type ComponentPropsWithoutRef } from 'react'
import { getContactUrl } from '@/lib/contact'

type ContactLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  source?: string
  message?: string
}

export default function ContactLink({
  source,
  message,
  onClick,
  onAuxClick,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}: ContactLinkProps) {
  const [href, setHref] = useState(() => getContactUrl({ source, message }))

  useEffect(() => {
    setHref(getContactUrl({ source, message, searchParams: window.location.search }))
  }, [source, message])

  return (
    <a
      {...props}
      href={href}
      target={target}
      rel={rel}
      onClick={(event) => {
        event.currentTarget.href = getContactUrl({
          source,
          message,
          searchParams: window.location.search,
        })
        onClick?.(event)
      }}
      onAuxClick={(event) => {
        event.currentTarget.href = getContactUrl({
          source,
          message,
          searchParams: window.location.search,
        })
        onAuxClick?.(event)
      }}
    />
  )
}
