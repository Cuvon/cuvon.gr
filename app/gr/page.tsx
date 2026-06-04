// Greek home page — /gr
// Mirror of app/page.tsx with full Greek content.

import type { Metadata } from 'next'
import Link from 'next/link'
import DiffCard from '@/components/DiffCard'
import SectionLabel from '@/components/SectionLabel'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Cuvon — Διανομή Προϊόντων Υγείας, Ελλάδα',
  description:
    'Επιτάχυνση της πρόσβασης σε ποιοτικές λύσεις υγείας στην ελληνική αγορά.',
  alternates: {
    canonical: '/gr',
    languages: { 'en': 'https://cuvon.gr', 'el': 'https://cuvon.gr/gr' },
  },
}

const differentiators = [
  {
    num: '01',
    title: 'Ταχύτερες αποφάσεις',
    body: 'Αξιολογούμε και αποφασίζουμε γρήγορα. Οι εταίροι γνωρίζουν πού βρίσκονται τα πράγματα σε κάθε βήμα.',
  },
  {
    num: '02',
    title: 'Σταθερή διαθεσιμότητα',
    body: 'Ο συνεπής εφοδιασμός είναι βασική υποχρέωση. Οργανώνουμε τις λειτουργίες μας για να το διατηρούμε.',
  },
  {
    num: '03',
    title: 'Εστιασμένες συνεργασίες',
    body: 'Διαχειριζόμαστε μόνο προϊόντα που πιστεύουμε και μπορούμε να υποστηρίξουμε πλήρως. Κάθε εταίρος στο χαρτοφυλάκιό μας είναι εκεί γιατί ανήκει.',
  },
]

export default function GrHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-blue overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="site-container relative z-10">
          <div className="max-w-[740px]">
            <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-white mb-7 leading-[1.05] font-bold tracking-[-0.02em]">
              Επιταχύνουμε την πρόσβαση σε ποιοτικές λύσεις υγείας στην Ελλάδα.
            </h1>
            <p className="text-lead text-white/90 max-w-[520px] leading-[1.65] mb-11">
              Αποτελεσματική στρατηγική εμπορικής ανάπτυξης που αναβαθμίζει την περίθαλψη ασθενών και ενδυναμώνει τους επαγγελματίες υγείας στην Ελληνική αγορά.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/gr/partners"
                className="inline-flex text-[0.9375rem] font-semibold text-deep-blue bg-white px-8 py-3.5 rounded-brand hover:bg-warm-sand transition-colors"
              >
                Συνεργαστείτε μαζί μας
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Τι κάνει τη Cuvon διαφορετική</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5 mb-4">
              Εστιασμένη στην απόδοση.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(d => (
              <DiffCard key={d.num} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        headline="Ψάχνετε για αξιόπιστο εταίρο στην ελληνική αγορά;"
        sub="Εάν υπάρχει εφαρμογή, κινούμαστε γρήγορα και λειτουργούμε. Πείτε μας τι χρειάζεστε."
        label="Επικοινωνήστε μαζί μας"
        href="/gr/contact"
      />
    </>
  )
}
