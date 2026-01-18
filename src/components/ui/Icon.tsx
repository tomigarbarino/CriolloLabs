import { LucideIcon } from 'lucide-react'
import { ComponentType } from 'react'

interface IconProps {
  icon: LucideIcon | ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  size?: number
  className?: string
  'aria-hidden'?: boolean
}

export function Icon({ icon: IconComponent, size = 20, className = '', 'aria-hidden': ariaHidden = true }: IconProps) {
  return (
    <IconComponent
      className={className}
      style={{ width: size, height: size, flexShrink: 0 }}
      aria-hidden={ariaHidden}
    />
  )
}
