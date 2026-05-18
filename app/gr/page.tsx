// Greek home page — /gr
// Mirror of app/page.tsx with full Greek content.

import type { Metadata } from 'next'
import Link from 'next/link'
import DiffCard from '@/components/DiffCard'
import SectionLabel from '@/components/SectionLabel'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Cuvon — Διανομή Προϊόντων Υγείας, Ελλάδα',
  description:
    'Γρήγορη, αξιόπιστη διανομή προϊόντων υγείας για την ελληνική αγορά. Με φροντίδα. Αξιόπιστα.',
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

const audience = [
  {
    title: 'Κατασκευαστές',
    body: 'Παγκόσμιοι κατασκευαστές που χρειάζονται αξιόπιστο, ευέλικτο εταίρο για πρόσβαση στην ελληνική αγορά — με την εστίαση και ταχύτητα που σπάνια προσφέρουν οι μεγαλύτεροι διανομείς.',
  },
  {
    title: 'Φαρμακεία',
    body: 'Δίκτυα φαρμακείων που εξαρτώνται από σταθερά επίπεδα αποθεμάτων και έναν διανομέα που επικοινωνεί ξεκάθαρα όταν κάτι αλλάζει.',
  },
  {
    title: 'Επαγγελματίες Υγείας',
    body: 'Ιατροί και συνταγογράφοι που πρέπει να γνωρίζουν ότι τα προϊόντα που εμπιστεύονται είναι διαθέσιμα, τεκμηριωμένα και ποιοτικά ελεγμένα.',
  },
  {
    title: 'Εταίροι Διανομής',
    body: 'Εταίροι logistics που μοιράζονται τα πρότυπά μας για ιχνηλασιμότητα, ψυχρή αλυσίδα και επιχειρησιακή αξιοπιστία.',
  },
]

const opsBlocks = [
  {
    title: 'Ακεραιότητα εφοδιαστικής αλυσίδας',
    body: 'Ισχυρή διαχείριση αποθεμάτων και προγραμματισμός από προεπιλογή. Προληπτική επικοινωνία όταν προκύπτουν διακοπές, με σαφή επίλυση κάθε φορά.',
  },
  {
    title: 'Ποιότητα χωρίς συμβιβασμούς',
    body: 'Πλήρης due diligence σε κάθε κατασκευαστικό εταίρο. Πλήρης αυστηρότητα στην ψυχρή αλυσίδα, τεκμηρίωση και ιχνηλασιμότητα.',
  },
  {
    title: 'Εστιασμένο χαρτοφυλάκιο',
    body: 'Κάθε προϊόν έχει κερδίσει τη θέση του. Αξιολογούμε βάσει πραγματικής ανάγκης αγοράς και αναπτυσσόμαστε μόνο όταν είναι σωστό.',
  },
  {
    title: 'Διαφανής επικοινωνία',
    body: 'Οι εταίροι γνωρίζουν πάντα πού βρίσκονται τα πράγματα. Κατάσταση εφοδιασμού, χρονοδιαγράμματα παράδοσης, χρόνοι παραγγελίας — επικοινωνούνται άμεσα και ξεκάθαρα.',
  },
]

const products = [
  { label: 'Κατηγορία 01', title: 'Φαρμακευτικά', body: 'Συνταγογραφούμενα φάρμακα που διαχειριζόμαστε με τα υψηλότερα πρότυπα τεκμηρίωσης και ψυχρής αλυσίδας, με πλήρη ιχνηλασιμότητα σε κάθε βήμα.' },
  { label: 'Κατηγορία 02', title: 'OTC', body: 'Προϊόντα χωρίς συνταγή που διανέμονται στα ελληνικά φαρμακεία. Σταθερή διαθεσιμότητα, γρήγορος ανεφοδιασμός.' },
  { label: 'Κατηγορία 03', title: 'Συμπληρώματα Διατροφής', body: 'Προϊόντα συμπληρωμάτων διατροφής επιλεγμένα για πραγματική ανάγκη αγοράς και υποστηριγμένα από αξιόπιστους κατασκευαστές.' },
  { label: 'Κατηγορία 04', title: 'Καλλυντικά', body: 'Καλλυντικά προϊόντα που απαιτούν εστιασμένη διανομή και έναν εταίρο που κατανοεί την κατηγορία.' },
]

export default function GrHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-blue overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="site-container relative z-10">
          <div className="max-w-[740px]">
            <h1 className="text-display text-white mb-7 leading-[1.05]">
              Γρήγορη, αξιόπιστη διανομή προϊόντων υγείας για την ελληνική αγορά.
            </h1>
            <p className="text-lead text-white/90 max-w-[520px] leading-[1.65] mb-11">
              Η Cuvon φέρνει θεραπείες υψηλής ποιότητας στην Ελλάδα. Κινούμαστε γρήγορα, διατηρούμε σταθερό εφοδιασμό και χτίζουμε συνεργασίες που λειτουργούν.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/gr/partners"
                className="inline-flex text-[0.9375rem] font-semibold text-deep-blue bg-white px-8 py-3.5 rounded-brand hover:bg-warm-sand transition-colors"
              >
                Συνεργαστείτε μαζί μας
              </Link>
              <Link
                href="/gr/about"
                className="inline-flex text-[0.9375rem] font-medium text-white/90 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors"
              >
                Σχετικά με τη Cuvon
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
            <h2 className="text-h2 text-deep-blue mt-5 mb-4">Χτισμένη γύρω από την απόδοση.</h2>
            <p className="text-lead text-slate-blue max-w-[520px] leading-[1.65]">
              Μπήκαμε στην ελληνική αγορά για να καλύψουμε ένα σαφές κενό. Εστιάζουμε στην αξιόπιστη, συνεπή παράδοση.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(d => <DiffCard key={d.num} {...d} />)}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Με ποιους συνεργαζόμαστε</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">
              Οι κατάλληλοι εταίροι<br className="hidden lg:block" /> στις κατάλληλες θέσεις.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-deep-blue/10 rounded-brand overflow-hidden divide-x divide-y divide-deep-blue/10">
            {audience.map(a => (
              <div key={a.title} className="bg-white p-9">
                <h3 className="text-h3 text-deep-blue mb-2.5">{a.title}</h3>
                <p className="text-[0.875rem] text-slate-blue leading-[1.6]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations & Quality */}
      <section className="bg-deep-blue section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Λειτουργίες &amp; Ποιότητα</SectionLabel>
            <h2 className="text-h2 text-white mt-5 mb-4">Η αξιοπιστία εφοδιασμού είναι το προϊόν.</h2>
            <p className="text-lead text-white/85 max-w-[520px] leading-[1.65]">
              Η ποιότητα και η διαθεσιμότητα είναι επιχειρησιακά δεδομένα — ενσωματωμένα στον τρόπο που λειτουργεί η Cuvon.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {opsBlocks.map(b => <OpsBlock key={b.title} {...b} />)}
          </div>
          <Link
            href="/gr/operations"
            className="inline-flex text-[0.9375rem] font-medium text-white/90 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            Δείτε λεπτομέρειες λειτουργιών
          </Link>
        </div>
      </section>

      {/* Product areas */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Κατηγορίες προϊόντων</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5 mb-2">Τι διανέμουμε.</h2>
            <p className="text-lead text-slate-blue">Ένα εστιασμένο χαρτοφυλάκιο. Κάθε προϊόν υποστηρίζεται πλήρως.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {products.map(p => (
              <div key={p.title} className="bg-white rounded-brand border border-deep-blue/8 shadow-card p-8">
                <p className="text-label text-soft-teal uppercase tracking-[0.12em] mb-3">{p.label}</p>
                <h3 className="text-[1.375rem] font-bold text-deep-blue mb-2.5">{p.title}</h3>
                <p className="text-[0.875rem] text-slate-blue leading-[1.65]">{p.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/gr/products"
            className="inline-flex text-sm font-semibold text-deep-blue border-[1.5px] border-deep-blue px-6 py-2.5 rounded-brand hover:bg-deep-blue hover:text-white transition-colors"
          >
            Δείτε ολόκληρο το χαρτοφυλάκιο
          </Link>
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
