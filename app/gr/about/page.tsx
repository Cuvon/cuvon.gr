// Greek About page — /gr/about

import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import DiffCard from '@/components/DiffCard'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Σχετικά με εμάς',
  description:
    'Η Cuvon είναι εξειδικευμένος διανομέας προϊόντων υγείας για την ελληνική αγορά. Φαρμακευτικά, OTC, συμπληρώματα διατροφής και καλλυντικά.',
  alternates: {
    canonical: '/gr/about',
    languages: { 'en': 'https://cuvon.gr/about', 'el': 'https://cuvon.gr/gr/about' },
  },
}

const pillars = [
  { num: '01', title: 'Εμπορική ανάπτυξη με γνώμονα την αγορά', body: 'Κάθε προϊόν έχει κερδίσει τη θέση του. Διαθέτουμε μόνο ό,τι μπορούμε να υποστηρίξουμε πλήρως και αναπτυσσόμαστε μόνο όταν είναι σωστό να το κάνουμε.' },
  { num: '02', title: 'Σταθερή διαθεσιμότητα',                   body: 'Ο συνεπής εφοδιασμός είναι βασική υποχρέωση. Οργανώνουμε τις λειτουργίες μας γύρω από αυτό και αξιολογούμαστε βάσει αυτής.' },
  { num: '03', title: 'Ποιότητα χωρίς συμβιβασμούς',             body: 'Συνεργαζόμαστε μόνο με κατασκευαστές που πληρούν τα πρότυπά μας, και διατηρούμε αυτό το πρότυπο σταθερά — ανεξάρτητα από ευκολία ή κόστος.' },
  { num: '04', title: 'Φροντίδα στην πράξη',                     body: 'Η φροντίδα είναι επιχειρησιακή αρχή. Μετρόμαστε βάσει πραγματικών αποτελεσμάτων: εφοδιαστική αξιοπιστία, διατήρηση συνεργατών, πρόσβαση ασθενών & καταναλωτών.' },
]

export default function GrAboutPage() {
  return (
    <>
      <PageHeader
        label="Σχετικα με εμας"
        title="Ο αξιόπιστος εμπορικός συνεργάτης υγείας για την ανάπτυξη ποιοτικών λύσεων στην Ελλάδα."
        lead="Εισάγουμε και αναπτύσσουμε εμπορικά, φαρμακευτικά προϊόντα, OTC, συμπληρώματα διατροφής και καλλυντικά — με αξιοπιστία, ταχύτητα και υπευθυνότητα που οι επαγγελματίες υγείας απαιτούν."
      />

      {/* Story */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-h2 text-deep-blue mb-6">Η αποστολή μας.</h2>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Η Cuvon δραστηριοποιείται και αναπτύσει εμπορικά φαρμακευτικά, OTC, συμπληρώματα διατροφής και καλλυντικά. Συνεργαζόμαστε άμεσα με κατασκευαστές, δίκτυα φαρμακείων και επαγγελματίες υγείας — διαχειριζόμενοι ολιστικά την εφοδιαστική αλυσίδα.
              </p>
            </div>
            <div className="lg:col-span-2">
              {/* Expertise panel */}
              <div className="bg-deep-blue rounded-brand p-8 h-full flex flex-col justify-center">
                <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-soft-teal mb-4">Η εμπειρια μας</p>
                <p className="text-white text-[1.125rem] font-semibold leading-[1.5] mb-5">
                  Βαθιά γνώση της ελληνικής αγοράς υγείας — χτισμένη μέσα από χρόνια άμεσης επιχειρησιακής εμπειρίας.
                </p>
                <p className="text-white/85 text-[0.9375rem] leading-[1.65]">
                  Η ομάδα μας κατανοεί το ρυθμιστικό πλαίσιο, τις απαιτήσεις logistics και τις εμπορικές σχέσεις εταίρων που καθορίζουν την επιτυχία στην ελληνική αγορά υγείας.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Πως λειτουργουμε</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Τέσσερις βασικοί πυλώνες.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map(p => <DiffCard key={p.num} {...p} />)}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Θέλετε να μάθετε περισσότερα για τη Cuvon;"
        sub="Επικοινωνήστε απευθείας. Θα σας απαντήσουμε συγκεκριμένα."
        label="Επικοινωνήστε μαζί μας"
        href="/gr/contact"
      />
    </>
  )
}
