import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Cuvon distributes OTC, prescription, wellness, and specialist pharmaceutical products across the Greek market. Every product is well backed.',
  alternates: { canonical: '/products' },
}

const areas = [
  {
    label: 'Segment 01',
    title: 'Pharmaceuticals',
    body: 'Where market penetration meets logistical excellence. At Cuvon, we combine targeted promotional strategies with high-rigour pharmaceutical storage and reporting.',
    detail: '',
    highlights: [
      'Full cold-chain integrity',
      'End-to-end traceability',
      'Regulatory documentation compliance',
    ],
    subtitle: 'Transforming Pharmaceutical Compliance into Commercial Advantage',
  },
  {
    label: 'Segment 02',
    title: 'OTC',
    body: 'Accelerating OTC brand growth across Greece\'s premier pharmacy networks. Cuvon pairs high-impact promotional expertise with flawless stock management and rapid replenishment—ensuring products are actively driven into the market and available on the shelf.',
    detail: '',
    highlights: [
      'National pharmacy network coverage',
      'Robust stock management and forward planning',
      'Fast replenishment cycles',
    ],
    subtitle: 'Driving OTC visibility & availability across Greek pharmacies',
  },
  {
    label: 'Segment 03',
    title: 'Food Supplements',
    body: 'Identifying unmet market needs and accelerating growth. At Cuvon, we select premium food supplements from credible manufacturers and back them with powerful commercial strategies.',
    detail: '',
    highlights: [
      'Evaluated against genuine market need',
      'Credible, vetted manufacturers only',
      'Full supply reliability',
    ],
    subtitle: 'Transforming rigorous scientific vetting into high-impact market success across Greece',
  },
  {
    label: 'Segment 04',
    title: 'Cosmetics',
    body: 'Where aesthetic brand promotion meets precise operational discipline. We deploy targeted commercial expertise and deep product knowledge to elevate the brand\'s prestige, drive consumer demand, and maximize retail velocity.',
    detail: '',
    highlights: [
      'Focused category handling',
      'Full product knowledge',
      'Consistent availability and replenishment',
    ],
    subtitle: 'Prestige Promotion, Precise Execution: Accelerating Cosmetics Growth in Greece',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        label="Products"
        title={<>A deliberate portfolio.<br />Every product is well backed.</>}
        lead="We carry only what we can fully support. Every product in the Cuvon portfolio has earned its place — evaluated against genuine market need and backed completely."
      />

      {/* Portfolio principle */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-h2 text-deep-blue mb-6">How we build our portfolio.</h2>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Portfolio decisions at Cuvon are reviewed against two criteria: genuine market need and operational fit. We add products because they belong here, and discontinue any that no longer meet our standard.
              </p>
              <p className="text-lead text-slate-blue leading-[1.7]">
                Partners know exactly what we carry and why. Every product is there for a reason — evaluated, deliberate, and fully supported.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-light-grey rounded-brand border border-deep-blue/8 p-7">
                <div className="flex items-baseline gap-3 mb-1.5">
                  <p className="text-[2rem] font-bold text-deep-blue">4</p>
                  <p className="text-[1.125rem] font-semibold text-deep-blue">Commercial Segments</p>
                </div>
                <p className="text-[0.875rem] text-slate-blue">Pharmaceuticals, OTC, Food supplements, Cosmetics</p>
              </div>
              <div className="bg-light-grey rounded-brand border border-deep-blue/8 p-7">
                <p className="text-[2rem] font-bold text-deep-blue mb-1.5">100%</p>
                <p className="text-[0.875rem] text-slate-blue">Full due diligence on every manufacturing partner before portfolio inclusion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product areas */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">

            <h2 className="text-h2 text-deep-blue mt-5">Commercial Segments.</h2>
          </div>
          <div className="flex flex-col gap-6">
            {areas.map(a => (
              <div key={a.title} className="bg-white rounded-brand border border-deep-blue/8 shadow-card p-10">
                <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 items-center">
                  {/* Main content */}
                  <div className="flex-[2]">
                    <p className="text-label text-soft-teal uppercase tracking-[0.12em] mb-3">{a.label}</p>
                    <h2 className="text-h2 text-deep-blue mb-4">{a.title}</h2>
                    <p className="text-lead text-slate-blue leading-[1.7] mb-4">{a.body}</p>
                    {'subtitle' in a && a.subtitle && (
                      <p className="text-[0.875rem] font-semibold text-deep-blue mb-4 leading-[1.5]">{a.subtitle}</p>
                    )}
                    {a.detail && <p className="text-body text-slate-blue leading-[1.7]">{a.detail}</p>}
                  </div>
                  {/* Highlights */}
                  <div className="flex-1">
                    <p className="text-[0.75rem] font-bold tracking-[0.08em] uppercase text-caption mb-4">Highlights</p>
                    <ul className="flex flex-col gap-3">
                      {a.highlights.map(h => (
                        <li key={h} className="text-[0.875rem] text-slate-blue pl-3.5 border-l-2 border-soft-teal leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Let's talk about product's potential in Greece."
        sub="Tell us about your product and we will tell you whether there is a fit."
        label="Contact us"
      />
    </>
  )
}
