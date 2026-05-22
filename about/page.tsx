import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import DiffCard from '@/components/DiffCard'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Cuvon is a focused healthcare product partner for the Greek market. Pharmaceuticals, OTC, food supplements, and cosmetics — reliably delivered.',
  alternates: { canonical: '/about' },
}

const pillars = [
  { num: '01', title: 'Thoughtful development', body: 'Every product has earned its place. We carry only what we can fully support, and grow only when it is right to do so.' },
  { num: '02', title: 'Reliable availability', body: 'Consistent availability is a baseline obligation. We build our operations around it and measure ourselves against it.' },
  { num: '03', title: 'Quality without compromise', body: 'We work only with manufacturers who meet our standard, and we hold that standard consistently — regardless of convenience or cost.' },
  { num: '04', title: 'Care in action', body: 'Care is an operational principle. We measure against real outcomes: supply uptime, partner retention, patient access.' },
]

const promises = [
  { title: 'To partners', body: 'You will always know where things stand. Supply is consistent, decisions are fast, and problems are resolved directly.' },
  { title: 'To the market', body: 'Every product we bring has a reason to be here. Quality and availability are operational facts, not targets.' },
  { title: 'To ourselves', body: 'We operate with the same standards we expect from others. Focused, efficient, and true to what matters.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Cuvon"
        title="A fast, reliable healthcare partner focusing on commercializing quality treatments to the Greek market."
        lead="We import and commercialize pharmaceuticals, OTC products, food supplements, & cosmetics, with the reliability, speed, and accountability that professional partners depend on."
      />

      {/* Narrative */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-h2 text-deep-blue mb-6">Why Cuvon exists.</h2>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Cuvon is a healthcare partner operating across pharmaceuticals, OTC, food supplements, and cosmetics. We work directly with manufacturers, pharmacy networks, and healthcare professionals — managing the full supply chain from import to delivery.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-deep-blue rounded-brand p-8 h-full flex flex-col justify-center">
                <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-soft-teal mb-4">Our expertise</p>
                <p className="text-white text-[1.125rem] font-semibold leading-[1.5] mb-5">
                  Deep knowledge of the Greek healthcare market — built over years of direct operational experience.
                </p>
                <p className="text-white/85 text-[0.9375rem] leading-[1.65]">
                  Our team understands the regulatory landscape, the logistics requirements, and the relationship dynamics that determine whether a product reaches market reliably or not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>How we operate</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">
              Four operating principles.<br className="hidden lg:block" />
              In practice, every day.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map(p => <DiffCard key={p.num} {...p} />)}
          </div>
        </div>
      </section>

      {/* Brand promise */}
      <section className="bg-deep-blue section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Brand promise</SectionLabel>
            <h2 className="text-h2 text-white mt-5">What we stand for.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map(p => (
              <div key={p.title} className="border-l-[3px] border-soft-teal pl-6 py-5 pr-5 bg-white/[0.04] rounded-r-brand">
                <p className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-soft-teal mb-3">{p.title}</p>
                <p className="text-[1rem] text-white/85 leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="If there is a fit, we move fast."
        sub="Tell us what you need. We will tell you if we can deliver it."
      />
    </>
  )
}
