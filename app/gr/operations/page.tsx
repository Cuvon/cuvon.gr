// Greek Operations page — /gr/operations

import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import DiffCard from '@/components/DiffCard'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Λειτουργίες & Ποιότητα',
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
  { num: '03', title: 'Επίλυση ζητημάτων', body: 'Τα ζητήματα ποιότητας αντιμετωπίζονται άμεσα και διαφανώς. Οι εταίροι ενημερώνονται για το τι συνέβη, τι κάναμε και τι αλλάξαμε.' },
]

const traceabilityBlocks = [
  { title: 'Πλήρης αλυσίδα επιμέλειας', body: 'Από την αποδέσμευση του κατασκευαστή έως την παράδοση στο φαρμακείο, κάθε βήμα τεκμηριώνεται και είναι ελέγξιμο. Πλήρης κάλυψη, κάθε φορά.' },
  { title: 'Ρυθμιστική συμμόρφωση',     body: 'Όλες οι λειτουργίες διανομής συμμορφώνονται με τους ελληνικούς και ευρωπαϊκούς φαρμακευτικούς κανονισμούς. Η τεκμηρίωση είναι ακριβής, ενημερωμένη και προσβάσιμη.' },
  { title: 'Ετοιμότητα για έλεγχο',     body: 'Λειτουργούμε ως εάν ένας έλεγχος είναι πάντα δυνατός. Τα αρχεία είναι τακτοποιημένα, ενημερωμένα και πλήρη — πάντα έτοιμα.' },
]

export default function GrOperationsPage() {
  return (
    <>
      <PageHeader
        label="Λειτουργίες & Ποιότητα"
        title="Η αξιοπιστία εφοδιασμού είναι το προϊόν."
        lead="Η ποιότητα και η διαθεσιμότητα είναι επιχειρησιακά δεδομένα — ενσωματωμένα στον τρόπο που λειτουργεί η Cuvon, αντικατοπτρίζονται σε κάθε απόφαση που παίρνουμε."
      />

      {/* Supply chain */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <SectionLabel>Εφοδιαστική Αλυσίδα</SectionLabel>
              <h2 className="text-h2 text-deep-blue mt-5 mb-6">Η σταθερή διαθεσιμότητα είναι η βάση.</h2>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Η αξιοπιστία εφοδιασμού είναι το πιο σημαντικό που κάνουμε. Είναι βασική υποχρέωση, ενσωματωμένη σε κάθε πτυχή της λειτουργίας μας.
              </p>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Η ισχυρή διαχείριση αποθεμάτων και ο προγραμματισμός είναι ενσωματωμένα στις προεπιλεγμένες λειτουργίες μας. Όταν συμβαίνουν διακοπές, επικοινωνούμε προληπτικά και δρούμε νωρίς.
              </p>
              <p className="text-lead text-slate-blue leading-[1.7]">
                Όταν ο εφοδιασμός κινδυνεύει, το επιλύουμε και κρατάμε τους εταίρους ενήμερους καθ' όλη τη διάρκεια.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-light-grey rounded-brand p-8 flex flex-col gap-6">
                {[
                  { label: 'Διαχείριση αποθεμάτων',    body: 'Ισχυρός προγραμματισμός και έλεγχοι ελάχιστων επιπέδων αποθεμάτων ενσωματωμένοι στις τυπικές λειτουργίες.' },
                  { label: 'Προληπτική επικοινωνία',    body: 'Οι εταίροι ειδοποιούνται πριν μια διακοπή γίνει έλλειψη, με σαφή χρονοδιαγράμματα και επόμενα βήματα.' },
                  { label: 'Εστίαση στη λύση',          body: 'Όταν ανακύπτουν προβλήματα: δηλώνουμε τι συνέβη, το διορθώνουμε και εξηγούμε τι άλλαξε. Ξεκάθαρα και άμεσα.' },
                ].map((item, i, arr) => (
                  <div key={item.label} className={i < arr.length - 1 ? 'pb-6 border-b border-deep-blue/8' : ''}>
                    <p className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-soft-teal mb-2">{item.label}</p>
                    <p className="text-[0.9375rem] text-slate-blue leading-[1.6]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-light-grey section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Ποιότητα</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Η εμπιστοσύνη δεν διαπραγματεύεται.</h2>
            <p className="text-lead text-slate-blue mt-4 max-w-lg">
              Συνεργαζόμαστε μόνο με κατασκευαστές και εταίρους που πληρούν το πρότυπό μας, και διατηρούμε αυτό το πρότυπο σταθερά — ανεξάρτητα από ευκολία ή κόστος.
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
            <SectionLabel>Ιχνηλασιμότητα</SectionLabel>
            <h2 className="text-h2 text-white mt-5">Κάθε προϊόν. Κάθε βήμα.</h2>
            <p className="text-lead text-white/65 mt-4 max-w-lg">
              Η ιχνηλασιμότητα είναι ο τρόπος που λειτουργούμε — βασικό μέρος κάθε διαδικασίας διανομής, όχι ξεχωριστό επίπεδο συμμόρφωσης.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traceabilityBlocks.map(b => <OpsBlock key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      {/* Seneka */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Υποδομή logistics</SectionLabel>
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

      <CtaSection
        headline="Θέλετε να μάθετε περισσότερα για τον τρόπο που λειτουργούμε;"
        sub="Ρωτήστε μας απευθείας. Θα σας δώσουμε μια συγκεκριμένη απάντηση."
        label="Επικοινωνήστε μαζί μας"
        href="/gr/contact"
      />
    </>
  )
}
