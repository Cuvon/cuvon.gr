// Root layout — wraps every page with Nav + Footer.
// Inter loaded via next/font for zero layout shift and self-hosting.
// lang attribute is set dynamically via the x-lang header written by middleware.ts:
//   English routes (/about, /products …) → lang="en"
//   Greek routes   (/gr/about …)         → lang="el"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

// Self-hosted via next/font — no external request at runtime
const inter = Inter({
  subsets: ['latin', 'greek'],  // include Greek subset for correct rendering
  variable: '--font-inter',
  display: 'swap',
})

// Default metadata — individual pages override with generateMetadata()
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cuvon.gr'),
  title: {
    default: 'Cuvon — Healthcare Product Distribution, Greece',
    template: '%s — Cuvon',
  },
  description:
    'Cuvon is a focused healthcare product distributor for the Greek market. Pharmaceuticals, OTC, food supplements, and cosmetics — reliably delivered.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Cuvon',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang="en" is the default; Greek routes override it via LangOverride client component
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
