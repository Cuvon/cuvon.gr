// SectionLabel — teal eyebrow text + teal rule.
// Used at the top of every major section. Server component.

interface SectionLabelProps {
  children: string
  light?: boolean  // true when on dark (deep-blue) background
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div className="mb-5">
      <p className={`text-label uppercase tracking-[0.12em] mb-4 ${light ? 'text-soft-teal' : 'text-soft-teal'}`}>
        {children}
      </p>
      <div className="w-8 h-0.5 bg-soft-teal" />
    </div>
  )
}
