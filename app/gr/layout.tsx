// Greek section layout — /gr/* routes.
// Sets html[lang="el"] via client component (nested layouts can't override the root <html> tag).
// Also sets hreflang alternates for the entire Greek section.

import type { Metadata } from 'next'
import LangOverride from '@/components/LangOverride'

export const metadata: Metadata = {
  alternates: {
    languages: {
      'en': 'https://cuvon.gr',
      'el': 'https://cuvon.gr/gr',
    },
  },
}

export default function GrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Flips html[lang] to "el" on the client after hydration */}
      <LangOverride lang="el" />
      {children}
    </>
  )
}
