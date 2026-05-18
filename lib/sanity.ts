// Sanity client — single instance used across the app.
// Uses next-sanity for App Router compatibility (fetch caching, revalidation tags).

import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  // useCdn: true serves cached responses — fast for public content.
  // Set to false for draft previews.
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})
