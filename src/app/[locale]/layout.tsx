import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { SmoothScroll } from '@/components/SmoothScroll'
import { locales, type Locale } from '@/config/i18n'

export const metadata: Metadata = {
  title: 'Criollo Labs — Landing Pages que Convierten en 48h',
  description: 'Convertimos tráfico en consultas. Landing pages en 48h. Automatizaciones que ahorran tiempo. Software a medida. Precio fijo. Entrega rápida.',
  openGraph: {
    title: 'Criollo Labs — Landing Pages que Convierten en 48h',
    description: 'Convertimos tráfico en consultas. Landing pages en 48h. Automatizaciones que ahorran tiempo. Software a medida.',
    type: 'website',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SmoothScroll />
      <main>{children}</main>
    </NextIntlClientProvider>
  )
}
