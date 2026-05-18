// Greek section layout — /gr/* routes.
// Sets hreflang alternates for the entire Greek section.
// The html[lang="el"] attribute is handled by the root layout via middleware.ts.

import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    languages: {
      'en': 'https://cuvon.gr',
      'el': 'https://cuvon.gr/gr',
    },
  },
}

export default function GrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
