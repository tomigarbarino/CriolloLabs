import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work — Criollo Labs',
  description: 'See conversion-focused landing pages and web projects built for premium offers. Real results.',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
