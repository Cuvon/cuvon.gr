// Individual news post page.
// Fetches from Sanity by slug. Generates static params for known posts at build time.
// Falls back gracefully to 404 if post not found.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, getPosts } from '@/lib/sanity.queries'

interface Props {
  params: { slug: string }
}

// Pre-render all known post slugs at build time
export async function generateStaticParams() {
  try {
    const posts = await getPosts()
    return posts.map(p => ({ slug: p.slug.current }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPost(params.slug)
    if (!post) return {}
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `/news/${params.slug}` },
    }
  } catch {
    return {}
  }
}

export const revalidate = 60

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function NewsPostPage({ params }: Props) {
  let post: Awaited<ReturnType<typeof getPost>>

  try {
    post = await getPost(params.slug)
  } catch {
    notFound()
  }

  if (!post) notFound()

  return (
    <article className="bg-white">
      {/* Header */}
      <div className="bg-deep-blue pt-16 pb-14 lg:pt-20 lg:pb-16">
        <div className="site-container">
          <p className="text-label text-soft-teal uppercase tracking-[0.12em] mb-4">
            {post.category ?? 'News'}
            {post.publishedAt && (
              <> &nbsp;·&nbsp; {formatDate(post.publishedAt)}</>
            )}
          </p>
          <div className="w-8 h-0.5 bg-soft-teal mb-5" />
          <h1 className="text-h1 text-white max-w-[680px]">{post.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="site-container py-section">
        <div className="max-w-[680px]">
          {post.body ? (
            // Render Sanity Portable Text blocks — install @portabletext/react if needed
            <div className="prose prose-lg text-slate-blue leading-[1.7]">
              {/* TODO: replace with <PortableText value={post.body} /> */}
              <p className="text-lead text-slate-blue">{post.excerpt}</p>
            </div>
          ) : (
            <p className="text-lead text-slate-blue">{post.excerpt}</p>
          )}
        </div>

        <div className="mt-14 pt-8 border-t border-deep-blue/8">
          <Link
            href="/news"
            className="text-sm font-semibold text-slate-blue hover:text-deep-blue transition-colors"
          >
            ← Back to news
          </Link>
        </div>
      </div>
    </article>
  )
}
