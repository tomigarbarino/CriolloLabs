import '@/styles/globals.css'
import { Space_Grotesk } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { SmoothScroll } from '@/components/SmoothScroll'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { BackgroundEffects } from '@/components/ui/BackgroundEffects'
import { EffectsProvider } from '@/context/EffectsContext'
import { NarrativeProvider } from '@/context/NarrativeContext'
import { AmbientNarrativeLayer } from '@/components/ui/AmbientNarrativeLayer'
import { Metadata } from 'next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Criollo Labs — Presencia + Sistemas para gente que construye',
  description: 'Te ayudo a ordenar tu presencia digital y automatizar tus procesos. Sin humo, sin fórmulas mágicas.',
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Hardcoded for single-locale (es)
  const locale = 'es';
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${spaceGrotesk.variable}`}>
      <body className="bg-dark text-white antialiased grain">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <EffectsProvider>
            <NarrativeProvider>
              <BackgroundEffects />
              <AmbientNarrativeLayer />
              <SmoothScroll />
              {children}
              <CustomCursor />
            </NarrativeProvider>
          </EffectsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
