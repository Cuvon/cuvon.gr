// Greek Partners page — /gr/partners

import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SectionLabel from '@/components/SectionLabel'
import OpsBlock from '@/components/OpsBlock'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Συνεργάτες',
  description:
    'Συνεργαστείτε με τη Cuvon για διανομή προϊόντων υγείας στην Ελλάδα. Γρήγορες αποφάσεις, σταθερός εφοδιασμός, συνεργατικές σχέσεις.',
  alternates: {
    canonical: '/gr/partners',
    languages: { 'en': 'https://cuvon.gr/partners', 'el': 'https://cuvon.gr/gr/partners' },
  },
}

const audience = [
  { title: 'Φαρμακοποιοί', body: 'Ισχυρή εμπορική πολιτική, σταθερά αποθέματα και ταχύς ανεφοδιασμός. Ενδυναμώνουμε τους φαρμακοποιούς να προτείνουν προϊόντα με σιγουριά και να χτίζουν εμπιστοσύνη με τους καταναλωτές.' },
  { title: 'Ιατροί', body: 'Εξειδικευμένη επικοινωνία που συνδέει προϊόντα με κορυφαίους επαγγελματίες υγείας. Στρατηγικές συμμόρφωσης για ισχυρή ιατρική υποστήριξη.' },
  { title: 'Κατασκευαστές', body: 'Προστατεύουμε την ακεραιότητα του προϊόντος μέσω αυστηρών logistics, ενώ οδηγούμε ενεργά την εμπορική ανάπτυξη — μετατρέποντας την παραγωγική αριστεία σε ηγετική θέση στην Ελληνική αγορά.' },
  { title: 'Εταίροι Logistics', body: 'Κορυφαίες επιχειρησιακές συνεργασίες που εφαρμόζουν τα υψηλότερα πρότυπα ασφάλειας, ταχύτητας και ρυθμιστικής ακρίβειας. Παράδοση εγκαίρως και σε άψογη κατάσταση.' },
]

const commitments = [
  { title: 'Θα γνωρίζετε πάντα τι συμβαίνει επιχειρησιακά.', body: 'Κατάσταση εφοδιασμού, χρονοδιαγράμματα παράδοσης, επιβεβαίωση παραγγελίας — επικοινωνούνται ξεκάθαρα και προληπτικά.' },
  { title: 'Οι αποφάσεις είναι γρήγορες.', body: 'Αξιολογούμε, αποφασίζουμε και ενεργούμε. Αν υπάρχει συμβατότητα, θα το γνωρίζετε άμεσα.' },
  { title: 'Τα προβλήματα λύνονται άμεσα.', body: 'Αν συμβεί κάποιο λάθος, αναφέρουμε τα γεγονότα, διορθώνουμε το ζήτημα και σας ενημερώνουμε για τις αλλαγές που κάναμε για να αποτρέψουμε την επανάληψη.' },
  { title: 'Κάθε συνεργασία είναι μακροπρόθεσμη επένδυση.', body: 'Δίνουμε προτεραιότητα σε ό,τι λειτουργεί πάνω από ό,τι φαίνεται καλό. Η ανατροφοδότηση είναι ευπρόσδεκτη και αξιοποιείται.' },
]

export default function GrPartnersPage() {
  return (
    <>
      <PageHeader
        label="Συνεργατες"
        title={<span className="text-[1.5rem] sm:text-[2rem] lg:text-h1">Συνεργασίες εμπιστοσύνης που στοχεύουν στην απόδοση.</span>}
        lead="Συνεργαζόμαστε με παγκόσμιους κατασκευαστές και αναδυόμενες καινοτόμες εταιρείες για να φέρουμε τις κατάλληλες θεραπείες στην Ελλάδα — ομαλά, αποτελεσματικά και με πλήρη υποστήριξη."
      />

      {/* Audience */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Με ποιους συνεργαζομαστε</SectionLabel>
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-h2 font-bold text-deep-blue mt-5">Συνεργασία με Στόχο την Ανάπτυξη — Το Αξιόπιστο Δίκτυό μας.</h2>
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

      {/* Commitment */}
      <section className="bg-deep-blue section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Η δεσμευση μας</SectionLabel>
            <h2 className="text-h2 text-white mt-5">Τι μπορείτε να περιμένετε από εμάς.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map(c => <OpsBlock key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Ψάχνετε για έναν αξιόπιστο συνεργάτη στην Ελληνική αγορά;"
        sub="Αν βρούμε κοινό έδαφος, θα κινηθούμε γρήγορα και θα το κάνουμε να λειτουργήσει."
        label="Ξεκινήστε μια συνομιλία"
        href="/gr/contact"
      />
    </>
  )
}
