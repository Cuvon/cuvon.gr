// PageHeader — used at the top of every inner page.
// Dark Deep Blue background, white text, consistent rhythm.
// Server component.

interface PageHeaderProps {
  label: string
  title: string
  lead?: string
}

export default function PageHeader({ label, title, lead }: PageHeaderProps) {
  return (
    <section className="bg-deep-blue pt-16 pb-14 lg:pt-20 lg:pb-16">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Section label */}
        <p className="text-label text-soft-teal mb-4 uppercase tracking-[0.12em]">
          {label}
        </p>
        {/* Rule — 32px teal underline, brand spec */}
        <div className="w-8 h-0.5 bg-soft-teal mb-5" />
        {/* Headline */}
        <h1 className="text-h1 text-white max-w-prose-lg mb-5">
          {title}
        </h1>
        {/* Lead text */}
        {lead && (
          <p className="text-lead text-white/68 max-w-[580px] leading-[1.65]">
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
