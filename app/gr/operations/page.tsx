// Greek Operations page — /gr/operations

import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import DiffCard from '@/components/DiffCard'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Υποδομή & Ποιότητα',
  description:
    'Τα επιχειρησιακά πρότυπα της Cuvon — ακεραιότητα εφοδιαστικής αλυσίδας, ψυχρή αλυσίδα, διασφάλιση ποιότητας, ιχνηλασιμότητα και αξιοπιστία.',
  alternates: {
    canonical: '/gr/operations',
    languages: { 'en': 'https://cuvon.gr/operations', 'el': 'https://cuvon.gr/gr/operations' },
  },
}

const qualityCards = [
  { num: '01', title: 'Due diligence κατασκευαστών', body: 'Πλήρης due diligence σε κάθε κατασκευαστικό εταίρο πριν ένα προϊόν εισέλθει στο χαρτοφυλάκιο. Ελέγχουμε, επαληθεύουμε, αποφασίζουμε — και τεκμηριώνουμε τα πάντα.' },
  { num: '02', title: 'Ακεραιότητα ψυχρής αλυσίδας', body: 'Πλήρης αυστηρότητα στην ψυχρή αλυσίδα, τεκμηρίωση και ιχνηλασιμότητα. Τα ευαίσθητα σε θερμοκρασία προϊόντα διαχειρίζονται από την πηγή έως το φαρμακείο.' },
  { num: '03', title: 'Επίλυση ζητημάτων', body: 'Τα ζητήματα ποιότητας αντιμετωπίζονται άμεσα και διαφανώς. Οι συνεργάτες ενημερώνονται για το τι συνέβη, τι κάναμε και τι αλλάξαμε.' },
]

const traceabilityBlocks = [
  { title: 'Πλήρης αλυσίδα επιμέλειας', body: 'Από την αποδέσμευση του κατασκευαστή έως την παράδοση στο φαρμακείο, κάθε βήμα τεκμηριώνεται και είναι ελέγξιμο. Πλήρης κάλυψη, κάθε φορά.' },
  { title: 'Ρυθμιστική συμμόρφωση', body: 'Όλες οι λειτουργίες διανομής συμμορφώνονται με τους ελληνικούς και ευρωπαϊκούς φαρμακευτικούς κανονισμούς. Η τεκμηρίωση είναι ακριβής, ενημερωμένη και προσβάσιμη.' },
  { title: 'Ετοιμότητα για έλεγχο', body: 'Λειτουργούμε ως εάν ένας έλεγχος είναι πάντα δυνατός. Τα αρχεία είναι τακτοποιημένα, ενημερωμένα και πλήρη — πάντα έτοιμα.' },
]

export default function GrOperationsPage() {
  return (
    <>
      <PageHeader
        label="Υποδομη & Ποιοτητα"
        title="Η αξιοπιστία εφοδιασμού είναι το βασικό μας αγαθό"
        lead="Η αξιοπιστία εφοδιαστικής αλυσίδας είναι η κύρια αξία που παρέχουμε. Η υποδομή μας εξαλείφει τον κίνδυνο, διασφαλίζει τη συμμόρφωση και εγγυάται τη διαθεσιμότητα προϊόντων."
      />

      {/* Seneka — Logistics partner */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Υποδομη logistics</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Χτισμένο σε παγκόσμιας κλάσης εγκαταστάσεις.</h2>
            <p className="text-lead text-slate-blue mt-4 max-w-2xl leading-[1.7]">
              Οι λειτουργίες logistics μας εδρεύουν στη Seneka — ένα από τα πιο προηγμένα κέντρα αποθήκευσης και διανομής της Ελλάδας, στην Κηφισιά, Αθήνα. Η εγκατάσταση παρέχει την κλίμακα, την ακρίβεια και τους περιβαλλοντικούς ελέγχους που απαιτεί το εύρος των προϊόντων μας.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
            <div className="lg:col-span-3 relative overflow-hidden rounded-brand bg-deep-blue/5" style={{aspectRatio: '3/4', maxHeight: '560px'}}>
              <Image
                src="/images/seneka-warehouse.jpg"
                alt="Κέντρο logistics Seneka — αυτοματοποιημένη αποθήκευση υψηλής πυκνότητας"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-brand bg-deep-blue/5 flex-1" style={{minHeight: '260px'}}>
                <Image
                  src="/images/seneka-facility.jpg"
                  alt="Κέντρο logistics Seneka — εξωτερικές εγκαταστάσεις, Κηφισιά Αθήνα"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="bg-light-grey rounded-brand p-7">
                <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-soft-teal mb-3">Seneka Logistics</p>
                <p className="text-[0.9375rem] text-slate-blue leading-[1.65] mb-4">
                  Εγκαταστάσεις αποθήκευσης τελευταίας τεχνολογίας στην Κηφισιά, Αθήνα. Αποθήκευση υψηλής χωρητικότητας, περιβάλλοντα ελεγχόμενης θερμοκρασίας και πλήρης υποδομή ιχνηλασιμότητας — ειδικά σχεδιασμένα για τη διανομή προϊόντων υγείας.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Ποιοτητα</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Η εμπιστοσύνη δεν διαπραγματεύεται.</h2>
            <p className="text-lead text-slate-blue mt-4 max-w-lg">
              Συνεργαζόμαστε μόνο με κατασκευαστές και συνεργάτες που πληρούν το πρότυπό μας, και διατηρούμε αυτό το πρότυπο σταθερά — ανεξάρτητα από ευκολία ή κόστος.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityCards.map(c => <DiffCard key={c.num} {...c} />)}
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="bg-deep-blue section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Ιχνηλασιμοτητα</SectionLabel>
            <h2 className="text-h2 text-white mt-5">Κάθε προϊόν. Κάθε βήμα.</h2>
            <p className="text-lead text-white/85 mt-4 max-w-lg">
              Η ιχνηλασιμότητα είναι ο τρόπος που λειτουργούμε — βασικό μέρος κάθε διαδικασίας διανομής, όχι ξεχωριστό επίπεδο συμμόρφωσης.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traceabilityBlocks.map(b => <OpsBlock key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Θέλετε να μάθετε περισσότερα για τον τρόπο που λειτουργούμε;"
        sub="Ρωτήστε μας απευθείας. Θα σας δώσουμε μια συγκεκριμένη απάντηση."
        label="Επικοινωνήστε μαζί μας"
        href="/gr/contact"
      />
    </>
  )
}
