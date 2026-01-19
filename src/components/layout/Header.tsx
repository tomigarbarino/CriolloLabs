'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const t = useTranslations('header')
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: t('work'), href: '/work' },
    { label: t('services'), href: '/services' },
    { label: t('contact'), href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Criollo Labs
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button href="https://calendly.com/tomasgarbarino-dev/30min" variant="primary" size="sm">
            {t('bookCall')}
          </Button>
        </div>
      </nav>
    </header>
  )
}
