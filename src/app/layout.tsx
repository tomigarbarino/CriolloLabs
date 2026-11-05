import '@/styles/globals.css'
import '@/styles/launch.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://criollo-labs.vercel.app'),
  title: 'Criollo Labs — Software para mejorar tu operación',
  description: 'Simplificamos procesos con herramientas internas, integraciones y software a medida. Implementación y acompañamiento mensual. Charla inicial sin cargo.',
  icons: { icon: '/logo.svg', apple: '/logo.png' },
  openGraph: { title: 'Criollo Labs — Software para mejorar tu operación', description: 'Menos tareas repetidas. Más espacio para crecer.', url: 'https://criollo-labs.vercel.app/es', type: 'website', locale: 'es_AR' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>
}
