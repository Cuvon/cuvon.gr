// Greek Products page — /gr/products

import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
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
    label: 'Κατηγορία 01',
    title: 'Φαρμακευτικά',
    body: 'Εκεί που η διείσδυση στην αγορά συναντά την επιχειρησιακή ετοιμότητα. Στη Cuvon, συνδυάζουμε στοχευμένες στρατηγικές προώθησης με υψηλής αυστηρότητας συνθήκες αποθήκευσης και διανομής.',
    detail: '',
    highlights: [
      'Πλήρης ακεραιότητα ψυχρής αλυσίδας',
      'Ιχνηλασιμότητα από αρχή έως τέλος',
      'Συμμόρφωση με ρυθμιστική τεκμηρίωση',
    ],
    subtitle: 'Μετατρέπουμε τη Φαρμακευτική Συμμόρφωση σε Εμπορικό Πλεονέκτημα',
  },
  {
    label: 'Κατηγορία 02',
    title: 'OTC',
    body: 'Επιταχύνουμε την ανάπτυξη των OTC brands στα Ελληνικά φαρμακεία. Η Cuvon συνδυάζει εξειδικευμένη προωθητική τεχνογνωσία με άψογη διαχείριση αποθεμάτων και ταχύ ανεφοδιασμό — διασφαλίζοντας ότι τα προϊόντα προωθούνται ενεργά στην αγορά και είναι διαθέσιμα στο ράφι.',
    detail: '',
    highlights: [
      'Κάλυψη εθνικού δικτύου φαρμακείων',
      'Ισχυρή διαχείριση αποθεμάτων και προγραμματισμός',
      'Γρήγοροι κύκλοι ανεφοδιασμού',
    ],
    subtitle: 'Ενισχύουμε την ορατότητα & διαθεσιμότητα OTC σε όλα τα ελληνικά φαρμακεία',
  },
  {
    label: 'Κατηγορία 03',
    title: 'Συμπληρώματα Διατροφής',
    body: 'Ανακαλύπτουμε κενά στην αγορά και επιταχύνουμε την ανάπτυξη. Επιλέγουμε premium συμπληρώματα διατροφής από αξιόπιστους κατασκευαστές και τα υποστηρίζουμε με ισχυρές εμπορικές στρατηγικές.',
    detail: '',
    highlights: [
      'Αξιολόγηση βάσει πραγματικής ανάγκης αγοράς',
      'Μόνο αξιόπιστοι, ελεγμένοι κατασκευαστές',
      'Πλήρης αξιοπιστία εφοδιασμού',
    ],
    subtitle: 'Μετατρέπουμε την αυστηρή επιστημονική αξιολόγηση σε εμπορική επιτυχία υψηλού αντίκτυπου στην Ελλάδα',
  },
  {
    label: 'Κατηγορία 04',
    title: 'Καλλυντικά',
    body: 'Εκεί που η brand promotion συναντά την επιχειρησιακή πειθαρχία. Αξιοποιούμε εστιασμένη εμπορική τεχνογνωσία και βαθιά γνώση προϊόντος για να αναδείξουμε το κύρος του brand, να ενισχύσουμε τη ζήτηση και να μεγιστοποιήσουμε την εμπορική δυναμική.',
    detail: '',
    highlights: [
      'Εστιασμένη διαχείριση κατηγορίας',
      'Πλήρης γνώση προϊόντος',
      'Σταθερή διαθεσιμότητα και ανεφοδιασμός',
    ],
    subtitle: 'Κύρος στην Προώθηση, Ακρίβεια στην Εκτέλεση: Επιταχύνουμε την Ανάπτυξη Καλλυντικών στην Ελλάδα',
  },
]

export default function GrProductsPage() {
  return (
    <>
      <PageHeader
        label="Προιοντα"
        title={<><span style={{whiteSpace:"nowrap"}} className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]">Ένα εστιασμένο χαρτοφυλάκιο.</span><br /><span style={{whiteSpace:"nowrap"}} className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem]">Κάθε προϊόν υποστηρίζεται πλήρως.</span></>}
        lead="Διαχειριζόμαστε μόνο ό,τι μπορούμε να υποστηρίξουμε. Κάθε προϊόν στο χαρτοφυλάκιο της Cuvon έχει κερδίσει τη θέση του — αξιολογημένο βάσει πραγματικής εμπορικής ανάγκης."
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
                <div className="flex items-baseline gap-3 mb-1.5">
                  <p className="text-[2rem] font-bold text-deep-blue">4</p>
                  <p className="text-[1.125rem] font-semibold text-deep-blue">Κατηγορίες Προϊόντων</p>
                </div>
                <p className="text-[0.875rem] text-slate-blue">Φαρμακευτικά, OTC, Συμπληρώματα διατροφής, Καλλυντικά</p>
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
            <h2 className="text-h2 text-deep-blue mt-5">Εμπορικές Κατηγορίες.</h2>
          </div>
          <div className="flex flex-col gap-6">
            {areas.map(a => (
              <div key={a.title} className="bg-white rounded-brand border border-deep-blue/8 shadow-card p-10">
                <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 items-center">
                  <div className="flex-[2]">
                    <p className="text-label text-soft-teal uppercase tracking-[0.12em] mb-3">{a.label}</p>
                    <h2 className="text-h2 text-deep-blue mb-4">{a.title}</h2>
                    <p className="text-lead text-slate-blue leading-[1.7] mb-4">{a.body}</p>
                    {'subtitle' in a && a.subtitle && (
                      <p className="text-[0.875rem] font-semibold text-deep-blue mb-4 leading-[1.5]">{a.subtitle}</p>
                    )}
                    {a.detail && <p className="text-body text-slate-blue leading-[1.7]">{a.detail}</p>}
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
