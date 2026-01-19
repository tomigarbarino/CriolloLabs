import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-300',
        hoverable && 'border-white/20 hover:border-accent-purple/30 hover:bg-white/10',
        className
      )}
    >
      {children}
    </div>
  )
}
