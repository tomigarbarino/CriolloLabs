'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/config/i18n'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname if present
    const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '') || '/'
    
    // Navigate to new locale
    const newPath = newLocale === 'es' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`
            px-3 py-1.5 rounded-full text-sm font-medium transition-all
            ${
              locale === loc
                ? 'bg-gradient-to-r from-accent-cyan to-accent-green text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }
          `}
          aria-label={`Switch to ${loc === 'es' ? 'Español' : 'English'}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
