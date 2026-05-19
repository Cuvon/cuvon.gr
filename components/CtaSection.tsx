// CtaSection — deep-blue partnership CTA strip.
// Used at the bottom of every page. Server component.

import Link from 'next/link'

interface CtaSectionProps {
  headline: string
  sub: string
  label?: string
  href?: string
}

export default function CtaSection({
  headline,
  sub,
  label = 'Get in touch',
  href = '/contact',
}: CtaSectionProps) {
  return (
    <section className="bg-deep-blue py-20">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="text-h2 text-white mb-3">{headline}</h2>
            <p className="text-lead text-white/85 max-w-md">{sub}</p>
          </div>
          <Link
            href={href}
            className="flex-shrink-0 inline-flex items-center text-[0.9375rem] font-semibold text-white bg-soft-teal px-9 py-4 rounded-brand hover:bg-[#5a9490] transition-colors"
          >
            {label}
          </Link>
        </div>
      </div>
    </section>
  )
}
