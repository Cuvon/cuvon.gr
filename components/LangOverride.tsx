// LangOverride — client component that sets html[lang] after hydration.
// Used by nested layouts (e.g. /gr/*) that can't override the root <html> tag directly.
// Runs only on the client, so there is no SSR/edge runtime dependency.

'use client'

import { useEffect } from 'react'

export default function LangOverride({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}
