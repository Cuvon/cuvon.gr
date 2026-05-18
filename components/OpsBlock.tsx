// OpsBlock — left-teal-border block used in Operations and dark sections.
// Server component.

interface OpsBlockProps {
  title: string
  body: string
}

export default function OpsBlock({ title, body }: OpsBlockProps) {
  return (
    <div className="border-l-2 border-soft-teal pl-6">
      <h3 className="text-[1rem] font-bold text-white mb-2">{title}</h3>
      <p className="text-[0.9375rem] text-white/85 leading-[1.65]">{body}</p>
    </div>
  )
}
