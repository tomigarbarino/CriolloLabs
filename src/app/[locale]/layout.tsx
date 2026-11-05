import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/config/i18n'
export function generateStaticParams() { return locales.map(locale => ({ locale })) }
export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) notFound()
  return <>{children}</>
}
