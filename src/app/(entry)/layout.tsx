import SiteDocument, { siteMetadata } from '@/components/SiteDocument'
export const metadata = siteMetadata
export default function EntryLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument>{children}</SiteDocument>
}
