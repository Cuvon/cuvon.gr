import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Partner with Cuvon for pharmaceutical distribution in Greece. Fast decisions, reliable supply, collaborative relationships.',
  alternates: { canonical: '/partners' },
}

const audience = [
  { title: 'Manufacturers', body: 'Global manufacturers who need a reliable, agile partner for Greek market access — with the focus and speed that larger distributors rarely offer.' },
  { title: 'Pharmacies', body: 'Pharmacy networks that depend on consistent stock levels and a distributor who communicates clearly and early when anything changes.' },
  { title: 'Healthcare Professionals', body: 'Clinicians and prescribers who need to know the products they rely on are available, correctly documented, and quality-assured.' },
  { title: 'Distribution Partners', body: 'Logistics partners who share our standards for traceability, cold chain integrity, and operational reliability.' },
]


const commitments = [
  { title: 'You will always know where things stand.', body: 'Supply status, delivery windows, order confirmation — communicated clearly and proactively.' },
  { title: 'Decisions are fast.', body: 'We assess, decide, and move. If there is a fit, you will know quickly.' },
  { title: 'Problems get resolved directly.', body: 'When things go wrong, we report facts, fix the issue, and tell you what we changed to prevent recurrence.' },
  { title: 'Every interaction is a long-term investment.', body: 'We prioritise what works over what looks good. Feedback is welcomed and acted on.' },
]

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        label="Partners"
        title="Partnerships built around performance."
        lead="We collaborate with global manufacturers and emerging innovators to bring the right treatments to Greece — smoothly, efficiently, and with full support."
      />

      {/* Audience */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">The right people in the right positions.</h2>
          </div>
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

      {/* Commitment */}
      <section className="bg-deep-blue section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Our commitment</SectionLabel>
            <h2 className="text-h2 text-white mt-5">What you can expect from us.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map(c => <OpsBlock key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Looking for a reliable Greek market partner?"
        sub="If there is a fit, we will move fast and make it work."
        label="Start a conversation"
      />
    </>
  )
}
