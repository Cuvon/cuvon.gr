// Sanity GROQ queries.
// All data-fetching is centralised here — never write inline GROQ in page files.
// Types are inlined for simplicity; extract to types.ts as the project grows.

import { sanityClient } from './sanity'

// ── Types ────────────────────────────────────────────────────────────────

export interface SanityPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  category: string
  excerpt: string
  body?: unknown[]
  seoTitle?: string
  seoDescription?: string
}

export interface SanityProduct {
  _id: string
  name: string
  slug: { current: string }
  area: 'otc' | 'prescription' | 'wellness' | 'specialist'
  manufacturer?: string
  strength?: string
  available: boolean
  description?: string
}

// ── Queries ──────────────────────────────────────────────────────────────

// All published posts, newest first — for news listing page
const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt
  }
`

// Single post by slug — for [slug] detail page
const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    body,
    seoTitle,
    seoDescription
  }
`

// All available products — for products page
const PRODUCTS_QUERY = `
  *[_type == "product" && available == true] | order(area asc, name asc) {
    _id,
    name,
    slug,
    area,
    manufacturer,
    strength,
    available,
    description
  }
`

// ── Fetch functions ──────────────────────────────────────────────────────

export async function getPosts(): Promise<SanityPost[]> {
  // next: { revalidate: 60 } — ISR, cached for 60s
  return sanityClient.fetch<SanityPost[]>(POSTS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug }, { next: { revalidate: 60 } })
}

export async function getProducts(): Promise<SanityProduct[]> {
  return sanityClient.fetch<SanityProduct[]>(PRODUCTS_QUERY, {}, { next: { revalidate: 300 } })
}
