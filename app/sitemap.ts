// sitemap.ts — auto-generated sitemap served at /sitemap.xml
// Next.js 14 App Router: export a default function returning MetadataRoute.Sitemap
// All routes are static, so lastModified is fixed at build time.

import { MetadataRoute } from 'next'

const BASE_URL = 'https://cuvon.gr'

// Static routes for both EN and GR sections
const routes = [
  '',          // home
  '/about',
  '/products',
  '/partners',
  '/operations',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    // English version
    entries.push({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          el: `${BASE_URL}/gr${route}`,
        },
      },
    })

    // Greek version
    entries.push({
      url: `${BASE_URL}/gr${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          el: `${BASE_URL}/gr${route}`,
        },
      },
    })
  }

  return entries
}
