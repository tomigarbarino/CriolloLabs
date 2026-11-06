import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://criollo-labs.vercel.app/es', changeFrequency: 'monthly', priority: 1 },
    {
      url: 'https://criollo-labs.vercel.app/es/seguimiento-presupuestos',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: 'https://criollo-labs.vercel.app/es/demo', changeFrequency: 'monthly', priority: 0.7 },
  ]
}
