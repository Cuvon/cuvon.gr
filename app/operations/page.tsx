import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import DiffCard from '@/components/DiffCard'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Operations & Quality',
  description:
    'Cuvon\'s operational standards — supply chain integrity, cold chain, quality assurance, traceability, and reliability.',
  alternates: { canonical: '/operations' },
}

const qualityCards = [
  { num: '01', title: 'Manufacturing due diligence', body: 'Full due diligence on every manufacturing partner before a product enters the portfolio. We review, we verify, we decide — and we document everything.' },
  { num: '02', title: 'Cold chain integrity', body: 'Complete rigour across cold chain, documentation, and traceability. Temperature-sensitive products are managed from source to pharmacy.' },
  { num: '03', title: 'Issue resolution', body: 'Quality issues are addressed immediately and transparently. Partners are told what happened, what we did, and what we changed.' },
]

const traceabilityBlocks = [
  { title: 'Full chain of custody', body: 'From manufacturer release through to pharmacy delivery, every step is documented and auditable. Complete coverage, every time.' },
{ title: 'Regulatory compliance', body: 'All distribution operations comply with Greek and EU pharmaceutical regulations. Documentation is accurate, current, and accessible.' },
  { title: 'Audit readiness', body: 'We operate as if an audit is always possible. Records are clean, current, and complete — always ready.' },
]

export default function OperationsPage() {
  return (
    <>
      <PageHeader
        label="Operations & Quality"
        title={<span style={{whiteSpace: 'nowrap'}}>Supply reliability is our core commodity</span>}
        lead="We view supply chain reliability not just as an operational goal, but as the primary value we deliver to our partners. Our infrastructure is built to eliminate risk, ensure compliance, and guarantee product availability without exception."
      />


      {/* Seneka — Logistics partner */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Logistics infrastructure</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Built on a world-class facility.</h2>
            <p className="text-lead text-slate-blue mt-4 max-w-2xl leading-[1.7]">
              Our logistics operations are anchored at Seneka — one of Greece's most advanced warehousing and distribution centres, located in Kifisia, Athens. The facility provides the scale, precision, and environmental controls that our product range demands.
            </p>
          </div>

          {/* Two-image layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
            {/* Interior — warehouse shelving, dominant image */}
            <div className="lg:col-span-3 relative overflow-hidden rounded-brand bg-deep-blue/5" style={{aspectRatio: '3/4', maxHeight: '560px'}}>
              <Image
                src="/images/seneka-warehouse.jpg"
                alt="Seneka logistics centre — high-density automated warehousing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            {/* Exterior — facility building */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-brand bg-deep-blue/5 flex-1" style={{minHeight: '260px'}}>
                <Image
                  src="/images/seneka-facility.jpg"
                  alt="Seneka logistics centre — exterior facility, Kifisia Athens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Facility callout */}
              <div className="bg-light-grey rounded-brand p-7">
                <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-soft-teal mb-3">Seneka Logistics</p>
                <p className="text-[0.9375rem] text-slate-blue leading-[1.65] mb-4">
                  State-of-the-art warehousing in Kifisia, Athens. High-capacity storage, temperature-controlled environments, and full traceability infrastructure — purpose-built for healthcare product distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Quality</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Trust is non-negotiable.</h2>
            <p className="text-lead text-slate-blue mt-4 max-w-lg">
              We work only with manufacturers and partners who meet our standard, and we hold that standard consistently — regardless of convenience or cost.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityCards.map(c => <DiffCard key={c.num} {...c} />)}
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="bg-deep-blue section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Traceability</SectionLabel>
            <h2 className="text-h2 text-white mt-5">Every product. Every step.</h2>
            <p className="text-lead text-white/85 mt-4 max-w-lg">
              Traceability is how we operate — a core part of every distribution process, not a separate compliance layer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traceabilityBlocks.map(b => <OpsBlock key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Want to know more about how we operate?"
        sub="Ask us directly. We will give you a specific answer."
      />
    </>
  )
}
