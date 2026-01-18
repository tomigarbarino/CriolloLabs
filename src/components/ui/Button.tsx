'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useState, useRef } from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setMousePosition({ x: x * 0.2, y: y * 0.2 })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const baseStyles = cn(
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden group',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
    }
  )

  const variantStyles = {
    primary: 'bg-gradient-to-r from-accent-cyan to-accent-green text-white rounded-full hover:shadow-lg hover:shadow-accent-cyan/50',
    secondary: 'bg-white/10 text-white rounded-full hover:bg-white/20 backdrop-blur-sm',
    outline: 'border border-white/20 text-white rounded-full hover:bg-white/5',
  }

  const buttonStyle = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
  }

  const commonProps = {
    ref: buttonRef as React.Ref<HTMLButtonElement> & React.Ref<HTMLAnchorElement>,
    className: cn(baseStyles, variantStyles[variant], className),
    style: buttonStyle,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }

  if (href) {
    return (
      <Link {...commonProps} href={href}>
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-accent-green to-accent-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    )
  }

  return (
    <button {...commonProps} onClick={onClick} type={type} disabled={disabled}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-accent-green to-accent-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
