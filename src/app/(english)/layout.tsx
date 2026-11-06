import SiteDocument from '@/components/SiteDocument'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL('https://criollo-labs.vercel.app'),
  icons: { icon: '/logo.svg', apple: '/logo.png' },
}
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>
}
