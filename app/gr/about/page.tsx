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

const values = [
  { num: '01', title: 'Αξιοπιστία εφοδιασμού',       body: 'Η σταθερή διαθεσιμότητα δεν είναι στόχος — είναι επιχειρησιακή υποχρέωση, ενσωματωμένη στον τρόπο που χτίσαμε τη Cuvon.' },
  { num: '02', title: 'Σαφής επικοινωνία',            body: 'Οι εταίροι ενημερώνονται πριν τα προβλήματα γίνουν κρίσεις. Ξεκάθαρες πληροφορίες, χρονοδιαγράμματα και επόμενα βήματα — πάντα.' },
  { num: '03', title: 'Ποιότητα χωρίς συμβιβασμούς', body: 'Εργαζόμαστε μόνο με κατασκευαστές και εταίρους που πληρούν το πρότυπό μας. Η ευκολία ή το κόστος δεν αλλάζουν αυτό.' },
  { num: '04', title: 'Μακροπρόθεσμη σκέψη',          body: 'Κάθε απόφαση αξιολογείται με βάση τη μακροπρόθεσμη σχέση, όχι τη βραχυπρόθεσμη ευκολία. Η ανατροφοδότηση είναι ευπρόσδεκτη και αξιοποιείται.' },
]

export default function GrAboutPage() {
  return (
    <>
      <PageHeader
        label="Σχετικα με εμας"
        title="Ο αξιόπιστος εμπορικός συνεργάτης υγείας για την ανάπτυξη ποιοτικών λύσεων στην Ελλάδα."
        lead="Φαρμακευτικά προϊόντα, OTC, συμπληρώματα διατροφής και καλλυντικά — διανεμημένα με πλήρη εστίαση και επιχειρησιακή ακρίβεια."
      />

      {/* Story */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <SectionLabel>Η ιστορια μας</SectionLabel>
              <h2 className="text-h2 text-deep-blue mt-5 mb-6">Εστιασμένοι. Αξιόπιστοι. Με ρίζες στην ελληνική αγορά.</h2>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Η Cuvon είναι εξειδικευμένος διανομέας προϊόντων υγείας, με έδρα και εστίαση στην ελληνική αγορά. Εισάγουμε και διανέμουμε φαρμακευτικά προϊόντα, OTC, συμπληρώματα διατροφής και καλλυντικά — επιλεγμένα με βάση την ανάγκη της αγοράς και υποστηριγμένα από πλήρη επιχειρησιακή υποδομή.
              </p>
              <p className="text-lead text-slate-blue leading-[1.7] mb-5">
                Η ελληνική αγορά φαρμάκων και προϊόντων υγείας είναι πολύπλοκη: αυστηρό ρυθμιστικό πλαίσιο, απαιτητικά δίκτυα φαρμακείων και εφοδιαστικές αλυσίδες που αφήνουν ελάχιστα περιθώρια για λάθη. Η Cuvon σχεδιάστηκε για αυτό το περιβάλλον.
              </p>
              <p className="text-lead text-slate-blue leading-[1.7]">
                Η ομάδα μας φέρνει βαθιά γνώση της ελληνικής αγοράς υγείας — χτισμένη μέσα από χρόνια άμεσης επιχειρησιακής εμπειρίας. Κατανοούμε το ρυθμιστικό πλαίσιο, τις απαιτήσεις logistics και τις δυναμικές σχέσεων που καθορίζουν την επιτυχία στην ελληνική αγορά.
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
                  Η ομάδα μας κατανοεί το ρυθμιστικό πλαίσιο, τις απαιτήσεις logistics και τις σχέσεις εταίρων που καθορίζουν επιτυχία στην ελληνική αγορά υγείας.
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
            <SectionLabel>Αξιες</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Πώς λειτουργούμε.</h2>
            <p className="text-lead text-slate-blue mt-4 max-w-lg">
              Αυτές δεν είναι φιλοδοξίες — είναι συμπεριφορές. Στην πράξη, κάθε μέρα.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map(v => <DiffCard key={v.num} {...v} />)}
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
