// DiffCard — "What makes Cuvon different" card.
// White card with teal numbered eyebrow. Server component.

interface DiffCardProps {
  num: string       // e.g. "01"
  title: string
  body: string
  dark?: boolean    // render on dark backgrounds
}

export default function DiffCard({ num, title, body, dark = false }: DiffCardProps) {
  return (
    <div className={`rounded-brand p-9 border ${
      dark
        ? 'bg-white/5 border-white/10'
        : 'bg-white border-deep-blue/8 shadow-card'
    }`}>
      <p className="text-label text-soft-teal mb-5 uppercase tracking-[0.12em]">{num}</p>
      <h3 className={`text-h3 mb-3 ${dark ? 'text-white' : 'text-deep-blue'}`}>{title}</h3>
      <p className={`text-body leading-[1.65] ${dark ? 'text-white/68' : 'text-slate-blue'}`}>{body}</p>
    </div>
  )
}
