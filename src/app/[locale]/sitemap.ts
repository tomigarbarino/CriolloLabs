import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://criollo-labs.vercel.app/es', changeFrequency: 'monthly', priority: 1 }]
}
