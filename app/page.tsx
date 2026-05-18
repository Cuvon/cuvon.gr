// Home page — server component.
// Structure per brief: Hero → Differentiators → Audience → Ops & Quality → Products → CTA

import type { Metadata } from 'next'
import Link from 'next/link'
import DiffCard from '@/components/DiffCard'
import SectionLabel from '@/components/SectionLabel'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Cuvon — Healthcare Product Distribution, Greece',
  description:
    'Fast, reliable healthcare product distribution for the Greek market. Built with care. Reliably delivered.',
  alternates: { canonical: '/' },
}

// ── Static data ─────────────────────────────────────────────────────────
const differentiators = [
  {
    num: '01',
    title: 'Faster decisions',
    body: 'We assess and decide quickly. Partners know where things stand at every step.',
  },
  {
    num: '02',
    title: 'Reliable availability',
    body: 'Consistent supply is a baseline obligation. We build our operations around keeping it that way.',
  },
  {
    num: '03',
    title: 'Focused partnerships',
    body: 'We only carry products we believe in and can fully support. Every partner in our portfolio is there because it belongs.',
  },
]

const audience = [
  {
    title: 'Manufacturers',
    body: 'Global manufacturers who need a reliable, agile partner for Greek market access — with the focus and speed that larger distributors rarely offer.',
  },
  {
    title: 'Pharmacies',
    body: 'Pharmacy networks that depend on consistent stock levels and a distributor who communicates clearly when anything changes.',
  },
  {
    title: 'Healthcare Professionals',
    body: 'Clinicians and prescribers who need to know the products they rely on are available, documented, and quality-assured.',
  },
  {
    title: 'Distribution Partners',
    body: 'Logistics partners who share our standards for traceability, cold chain, and operational reliability.',
  },
]

const opsBlocks = [
  {
    title: 'Supply chain integrity',
    body: 'Robust stock management and forward planning by default. Proactive communication when disruptions occur, with clear resolution every time.',
  },
  {
    title: 'Quality without compromise',
    body: 'Full due diligence on every manufacturing partner. Complete rigour across cold chain, documentation, and traceability.',
  },
  {
    title: 'Deliberate portfolio',
    body: 'Every product has earned its place. We review against genuine market need, and grow only when it is right to do so.',
  },
  {
    title: 'Transparent reporting',
    body: 'Partners always know where things stand. Supply status, delivery windows, lead times — communicated directly and clearly.',
  },
]

const products = [
  { label: 'Area 01', title: 'Pharmaceuticals', body: 'Prescription medicines managed to the highest documentation and cold-chain standards, with full traceability at every step.' },
  { label: 'Area 02', title: 'OTC', body: 'Over-the-counter products distributed across Greek pharmacy networks. Consistent availability, fast replenishment.' },
  { label: 'Area 03', title: 'Food Supplements', body: 'Food supplement products selected for genuine market need and backed by credible manufacturers.' },
  { label: 'Area 04', title: 'Cosmetics', body: 'Cosmetic products requiring focused distribution and a partner that understands the category.' },
]

// ── Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-deep-blue overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
<div className="site-container relative z-10">
          <div className="max-w-[740px]">
            <h1 className="text-display text-white mb-7 leading-[1.05]">
              Fast, reliable healthcare product distribution for the Greek market.
            </h1>
            <p className="text-lead text-white/72 max-w-[520px] leading-[1.65] mb-11">
              Cuvon brings high-quality treatments to Greece. We move fast, keep supply consistent, and build partnerships that work.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/partners"
                className="inline-flex text-[0.9375rem] font-semibold text-deep-blue bg-white px-8 py-3.5 rounded-brand hover:bg-warm-sand transition-colors"
              >
                Work with us
              </Link>
              <Link
                href="/about"
                className="inline-flex text-[0.9375rem] font-medium text-white/82 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors"
              >
                About Cuvon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Cuvon Different ───────────────────────────────── */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>What makes Cuvon different</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5 mb-4">
              Built around performance.
            </h2>
            <p className="text-lead text-slate-blue max-w-[520px] leading-[1.65]">
              We entered the Greek market to fill a clear gap. We focus on reliable, consistent delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(d => (
              <DiffCard key={d.num} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ─────────────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">
              The right partners<br className="hidden lg:block" /> in the right positions.
            </h2>
          </div>
          {/* Grid with 1px separators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-deep-blue/10 rounded-brand overflow-hidden divide-x divide-y divide-deep-blue/10">
            {audience.map(a => (
              <div key={a.title} className="bg-white p-9">
                <h3 className="text-h3 text-deep-blue mb-2.5">{a.title}</h3>
                <p className="text-[0.875rem] text-slate-blue leading-[1.6]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operations & Quality ─────────────────────────────────────── */}
      <section className="bg-deep-blue section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Operations &amp; Quality</SectionLabel>
            <h2 className="text-h2 text-white mt-5 mb-4">Supply reliability is the product.</h2>
            <p className="text-lead text-white/65 max-w-[520px] leading-[1.65]">
              Quality and availability are operational facts — built into how Cuvon runs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {opsBlocks.map(b => (
              <OpsBlock key={b.title} {...b} />
            ))}
          </div>
          <Link
            href="/operations"
            className="inline-flex text-[0.9375rem] font-medium text-white/80 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            View operations detail
          </Link>
        </div>
      </section>

      {/* ── Product Areas ─────────────────────────────────────────────── */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Product areas</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5 mb-2">What we distribute.</h2>
            <p className="text-lead text-slate-blue">A deliberate portfolio. Every product is backed.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {products.map(p => (
              <div key={p.title} className="bg-white rounded-brand border border-deep-blue/8 shadow-card p-8">
                <p className="text-label text-soft-teal uppercase tracking-[0.12em] mb-3">{p.label}</p>
                <h3 className="text-[1.375rem] font-bold text-deep-blue mb-2.5">{p.title}</h3>
                <p className="text-[0.875rem] text-slate-blue leading-[1.65]">{p.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/products"
            className="inline-flex text-sm font-semibold text-deep-blue border-[1.5px] border-deep-blue px-6 py-2.5 rounded-brand hover:bg-deep-blue hover:text-white transition-colors"
          >
            View full portfolio
          </Link>
        </div>
      </section>

      {/* ── Partnership CTA ───────────────────────────────────────────── */}
      <CtaSection
        headline="Looking for a reliable Greek market partner?"
        sub="If there is a fit, we move fast and make it work. Tell us what you need."
        label="Get in touch"
      />
    </>
  )
}
