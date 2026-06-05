// Greek Products page — /gr/products

import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Προϊόντα',
  description:
    'Η Cuvon διανέμει φαρμακευτικά, OTC, συμπληρώματα διατροφής και καλλυντικά στην ελληνική αγορά. Κάθε προϊόν υποστηρίζεται πλήρως.',
  alternates: {
    canonical: '/gr/products',
    languages: { 'en': 'https://cuvon.gr/products', 'el': 'https://cuvon.gr/gr/products' },
  },
}

const areas = [
  {
    label: 'Κατηγορια 01',
    title: 'Φαρμακευτικά',
    body: 'Συνταγογραφούμενα φάρμακα που διαχειριζόμαστε με τα υψηλότερα πρότυπα τεκμηρίωσης και ψυχρής αλυσίδας, με πλήρη αυστηρότητα στην ιχνηλασιμότητα, αποθήκευση και αναφορά.',
    detail: 'Η φαρμακευτική διανομή είναι ο τομέας όπου η επιχειρησιακή ακρίβεια έχει τη μεγαλύτερη σημασία. Αντιμετωπίζουμε την τεκμηρίωση ως κεντρικό στοιχείο του τρόπου λειτουργίας μας.',
    highlights: ['Πλήρης ακεραιότητα ψυχρής αλυσίδας', 'Πλήρης ιχνηλασιμότητα από αρχή ως τέλος', 'Συμμόρφωση με ρυθμιστική τεκμηρίωση'],
  },
  {
    label: 'Κατηγορια 02',
    title: 'OTC',
    body: 'Προϊόντα χωρίς συνταγή που διανέμονται στα ελληνικά φαρμακεία. Σταθερή διαθεσιμότητα, γρήγορος ανεφοδιασμός και πλήρης διαχείριση αποθεμάτων.',
    detail: 'Η διανομή OTC απαιτεί πειθαρχία όγκου και ακρίβεια logistics. Οργανώνουμε τις λειτουργίες μας γύρω από προβλέψιμους χρόνους παράδοσης και προληπτική επικοινωνία όταν κάτι αλλάζει.',
    highlights: ['Κάλυψη εθνικού δικτύου φαρμακείων', 'Ισχυρή διαχείριση αποθεμάτων και προγραμματισμός', 'Γρήγοροι κύκλοι ανεφοδιασμού'],
  },
  {
    label: 'Κατηγορια 03',
    title: 'Συμπληρώματα Διατροφής',
    body: 'Προϊόντα συμπληρωμάτων διατροφής επιλεγμένα για πραγματική ανάγκη αγοράς και υποστηριγμένα από αξιόπιστους κατασκευαστές.',
    detail: 'Εφαρμόζουμε την ίδια αυστηρότητα αξιολόγησης στα συμπληρώματα διατροφής όσο και σε κάθε άλλη κατηγορία. Τα διαθέτουμε γιατί καλύπτουν μια πραγματική ανάγκη στην ελληνική αγορά.',
    highlights: ['Αξιολόγηση βάσει πραγματικής ανάγκης αγοράς', 'Μόνο αξιόπιστοι, ελεγμένοι κατασκευαστές', 'Πλήρης αξιοπιστία εφοδιασμού'],
  },
  {
    label: 'Κατηγορια 04',
    title: 'Καλλυντικά',
    body: 'Καλλυντικά προϊόντα που απαιτούν εστιασμένη διανομή και έναν εταίρο που κατανοεί την κατηγορία και τις απαιτήσεις της.',
    detail: 'Φέρνουμε την ίδια επιχειρησιακή πειθαρχία στα καλλυντικά όσο και σε κάθε άλλη κατηγορία — ακριβείς logistics, πλήρης ιχνηλασιμότητα και βαθιά γνώση προϊόντος.',
    highlights: ['Εστιασμένη διαχείριση κατηγορίας', 'Πλήρης γνώση προϊόντος', 'Σταθερή διαθεσιμότητα και ανεφοδιασμός'],
  },
]

export default function GrProductsPage() {
  return (
    <>
      <PageHeader
        label="Προιοντα"
        title="Ένα εστιασμένο χαρτοφυλάκιο. Κάθε προϊόν υποστηρίζεται πλήρως."
        lead="Διαχειριζόμαστε μόνο ό,τι μπορούμε να υποστηρίξουμε πλήρως. Κάθε προϊόν στο χαρτοφυλάκιο της Cuvon έχει κερδίσει τη θέση του — αξιολογημένο βάσει πραγματικής εμπορικής ανάγκης."
      />

      {/* Portfolio principle */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-h2 text-deep-blue mb-6">Πώς χτίζουμε το χαρτοφυλάκιό μας.</h2>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Στην Cuvon αξιολογούμε και αποφασίζουμε βασιζόμενοι σε δύο κριτήρια: πραγματική ανάγκη αγοράς και επιχειρησιακή καταλληλότητα. Προσθέτουμε προϊόντα γιατί ανήκουν εδώ, και διακόπτουμε όσα δεν πληρούν πλέον το πρότυπό μας.
              </p>
              <p className="text-lead text-slate-blue leading-[1.7]">
                Οι εταίροι γνωρίζουν ακριβώς τι διαθέτουμε και γιατί. Κάθε προϊόν υπάρχει για κάποιον λόγο — αξιολογημένο, σκόπιμο και πλήρως υποστηριγμένο.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-light-grey rounded-brand border border-deep-blue/8 p-7">
                <p className="text-[2rem] font-bold text-deep-blue mb-1.5">4</p>
                <p className="text-[0.875rem] text-slate-blue">Κατηγορίες προϊόντων — OTC, Συνταγογραφούμενα, Συμπληρώματα, Καλλυντικά</p>
              </div>
              <div className="bg-light-grey rounded-brand border border-deep-blue/8 p-7">
                <p className="text-[2rem] font-bold text-deep-blue mb-1.5">100%</p>
                <p className="text-[0.875rem] text-slate-blue">Πλήρης due diligence σε κάθε κατασκευαστικό εταίρο πριν την ένταξη στο χαρτοφυλάκιο</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product areas */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Κατηγοριες προιοντων</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Τι διανέμουμε.</h2>
          </div>
          <div className="flex flex-col gap-6">
            {areas.map(a => (
              <div key={a.title} className="bg-white rounded-brand border border-deep-blue/8 shadow-card p-10">
                <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 items-start">
                  <div className="flex-[2]">
                    <p className="text-label text-soft-teal uppercase tracking-[0.12em] mb-3">{a.label}</p>
                    <h2 className="text-h2 text-deep-blue mb-4">{a.title}</h2>
                    <p className="text-lead text-slate-blue leading-[1.7] mb-4">{a.body}</p>
                    <p className="text-body text-slate-blue leading-[1.7]">{a.detail}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[0.75rem] font-bold tracking-[0.08em] uppercase text-caption mb-4">Βασικα σημεια</p>
                    <ul className="flex flex-col gap-3">
                      {a.highlights.map(h => (
                        <li key={h} className="text-[0.875rem] text-slate-blue pl-3.5 border-l-2 border-soft-teal leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Ενδιαφέρεστε να διανείμετε με τη Cuvon;"
        sub="Πείτε μας για το προϊόν σας και θα σας πούμε αν υπάρχει εφαρμογή."
        label="Επικοινωνήστε μαζί μας"
        href="/gr/contact"
      />
    </>
  )
}
