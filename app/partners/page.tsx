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
  { title: 'Pharmacists', body: 'Strong commercial support, consistent stock, and rapid replenishment. We empower pharmacists to confidently recommend products and drive consumer trust.' },
  { title: 'Physicians', body: 'Expert communication connecting products with leading healthcare professionals. Deep category knowledge and compliant strategies securing strong medical backing.' },
  { title: 'Manufacturers', body: 'We protect product integrity through high-rigour logistics while actively driving commercial expansion — transforming production excellence into Greek market leadership.' },
  { title: 'Logistics Partners', body: 'Premium operational alliances enforcing the highest standards of safety, speed, and regulatory precision. Products always delivered on time, in flawless condition.' },
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
        title="Partnerships built around performance & trust."
        lead="We collaborate with global healthcare manufacturers and emerging innovators to bring the right treatments to Greece smoothly, efficiently and with full support."
      />

      {/* Audience */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Aligned for Growth — Our Trusted Network.</h2>
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
