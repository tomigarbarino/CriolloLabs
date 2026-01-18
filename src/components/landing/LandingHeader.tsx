'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { underlineSlide } from '@/lib/motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Magnetic } from '@/components/ui/Magnetic'
import { TextScramble } from '@/components/ui/TextScramble'

export function LandingHeader() {
  const t = useTranslations('header')
  const reducedMotion = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: t('home'), href: '#hero' },
    { label: t('story'), href: '#story' },
    { label: t('builds'), href: '#builds' },
    { label: t('work'), href: '#services' },
    { label: t('process'), href: '#process' },
    { label: t('faq'), href: '#faq' },
    { label: t('contact'), href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'backdrop-blur-md bg-dark/80 border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="CriolloLabs"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-accent-purple to-accent-orange bg-clip-text text-transparent">
              <TextScramble>Criollo</TextScramble>
            </span>
            <TextScramble>Labs</TextScramble>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Magnetic key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                onClick={(e) => handleScrollTo(e, link.href)}
                reducedMotion={reducedMotion}
              />
            </Magnetic>
          ))}

          <a
            href="https://www.linkedin.com/in/tomas-garbarino/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-dark-lighter border-b border-white/5 p-6 flex flex-col gap-2 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-lg font-medium text-white/80 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}

function NavLink({
  href,
  label,
  onClick,
  reducedMotion,
}: {
  href: string
  label: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  reducedMotion: boolean
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
      whileHover="hover"
      initial="rest"
    >
      {label}
      {/* Underline effect */}
      {!reducedMotion && (
        <motion.span
          variants={underlineSlide}
          className="absolute bottom-1 left-4 right-4 h-px bg-accent-orange"
        />
      )}
    </motion.a>
  )
}
