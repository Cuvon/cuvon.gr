// News listing page — fetches posts from Sanity.
// Falls back to placeholder posts during development / before CMS is connected.
// Server component — data fetched at request time (ISR in production).

import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import CtaSection from '@/components/CtaSection'
import { getPosts } from '@/lib/sanity.queries'

export const metadata: Metadata = {
  title: 'News',
  description:
    'Latest updates from Cuvon — product availability, partnerships, and market access news.',
  alternates: { canonical: '/news' },
}

// ISR — revalidate every 60 seconds so new Sanity posts appear without redeploy
export const revalidate = 60

// Placeholder posts — used when Sanity is not yet connected (SANITY_PROJECT_ID unset)
const PLACEHOLDER_POSTS = [
  {
    _id: 'p1',
    slug: { current: '#' },
    title: 'Atorvastatin 40mg now available across Greek pharmacy networks.',
    publishedAt: '2025-05-01',
    category: 'Product Update',
    excerpt: 'Stock levels are normal. Expected run rate: 3,000 units/month. Reorder lead time: 10 days. Distribution is live across all major networks.',
  },
  {
    _id: 'p2',
    slug: { current: '#' },
    title: 'New manufacturing partnership confirmed for specialist oncology products.',
    publishedAt: '2025-04-10',
    category: 'Partnership',
    excerpt: 'We have confirmed a distribution agreement covering two specialist oncology lines. Full details and availability schedule available on request.',
  },
  {
    _id: 'p3',
    slug: { current: '#' },
    title: 'Cold chain infrastructure upgrade complete.',
    publishedAt: '2025-03-18',
    category: 'Operations',
    excerpt: 'Infrastructure improvements to our temperature-controlled storage and transport are now complete. Capacity increased by 40%, with full supply continuity maintained throughout.',
  },
  {
    _id: 'p4',
    slug: { current: '#' },
    title: 'Vitamin D3 1000 IU added to wellness portfolio.',
    publishedAt: '2025-02-05',
    category: 'Product Update',
    excerpt: 'Vitamin D3 1000 IU is now available in Greece via Cuvon. Available across all major pharmacy networks. Supply is stable.',
  },
  {
    _id: 'p5',
    slug: { current: '#' },
    title: 'Cuvon operational. Distribution live across Greece.',
    publishedAt: '2025-01-10',
    category: 'Company',
    excerpt: 'Cuvon is operational. Initial portfolio of pharmaceutical and OTC products is live. Distribution is active across the Greek market. We are taking partner enquiries.',
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long',
  })
}

export default async function NewsPage() {
  // Try Sanity; fall back to placeholders if not configured
  let posts: typeof PLACEHOLDER_POSTS = []
  try {
    posts = await getPosts()
  } catch {
    // Sanity not configured yet — use placeholders
  }

  const displayPosts = posts.length > 0 ? posts : PLACEHOLDER_POSTS

  return (
    <>
      <PageHeader
        label="News"
        title="Updates from Cuvon."
        lead="Product availability, partnership news, and market access. We post when there is something to say."
      />

      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map(post => (
              <article
                key={post._id}
                className="bg-white rounded-brand border border-deep-blue/8 shadow-card flex flex-col overflow-hidden"
              >
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-caption text-caption-color mb-2.5">
                    {formatDate(post.publishedAt)}
                    {post.category && (
                      <> &nbsp;·&nbsp; <span className="text-soft-teal">{post.category}</span></>
                    )}
                  </p>
                  <h2 className="text-h3 text-deep-blue mb-3 leading-[1.3]">{post.title}</h2>
                  <p className="text-[0.875rem] text-slate-blue leading-[1.65] flex-1">{post.excerpt}</p>
                  <Link
                    href={`/news/${post.slug.current}`}
                    className="inline-flex mt-5 text-[0.8125rem] font-semibold text-soft-teal border-b border-soft-teal pb-px self-start hover:text-deep-blue hover:border-deep-blue transition-colors"
                  >
                    Read update
                  </Link>
                </div>
              </article>
            ))}

            {/* Sentinel card */}
            <div className="bg-light-grey rounded-brand border border-transparent flex items-center justify-center">
              <div className="text-center p-10">
                <p className="text-[0.9375rem] text-slate-blue leading-[1.65] mb-5">
                  We post when there is genuine news to share.
                </p>
                <Link href="/contact" className="text-sm font-semibold text-soft-teal border-b border-soft-teal pb-px">
                  Enquiries: contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        headline="Want to be notified about new products?"
        sub="We send updates when there is something relevant to say — direct and to the point."
      />
    </>
  )
}
