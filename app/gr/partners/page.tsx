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
  { title: 'Κατασκευαστές',       body: 'Παγκόσμιοι κατασκευαστές που χρειάζονται αξιόπιστο, ευέλικτο εταίρο για πρόσβαση στην ελληνική αγορά — με την εστίαση και ταχύτητα που σπάνια προσφέρουν οι μεγαλύτεροι διανομείς.' },
  { title: 'Φαρμακεία',           body: 'Δίκτυα φαρμακείων που εξαρτώνται από σταθερά επίπεδα αποθεμάτων και έναν διανομέα που επικοινωνεί ξεκάθαρα και έγκαιρα όταν κάτι αλλάζει.' },
  { title: 'Επαγγελματίες Υγείας', body: 'Ιατροί και συνταγογράφοι που πρέπει να γνωρίζουν ότι τα προϊόντα που εμπιστεύονται είναι διαθέσιμα, σωστά τεκμηριωμένα και ποιοτικά ελεγμένα.' },
  { title: 'Εταίροι Διανομής',    body: 'Εταίροι logistics που μοιράζονται τα πρότυπά μας για ιχνηλασιμότητα, ακεραιότητα ψυχρής αλυσίδας και επιχειρησιακή αξιοπιστία.' },
]

const commitments = [
  { title: 'Θα γνωρίζετε πάντα πού βρίσκονται τα πράγματα.',   body: 'Κατάσταση εφοδιασμού, χρονοδιαγράμματα παράδοσης, επιβεβαίωση παραγγελίας — επικοινωνούνται ξεκάθαρα και προληπτικά.' },
  { title: 'Οι αποφάσεις είναι γρήγορες.',                       body: 'Αξιολογούμε, αποφασίζουμε και κινούμαστε. Εάν υπάρχει εφαρμογή, θα το μάθετε γρήγορα.' },
  { title: 'Τα προβλήματα λύνονται άμεσα.',                      body: 'Όταν πηγαίνει κάτι στραβά, αναφέρουμε τα γεγονότα, διορθώνουμε το ζήτημα και σας ενημερώνουμε για τις αλλαγές που κάναμε για να αποτρέψουμε επανάληψη.' },
  { title: 'Κάθε αλληλεπίδραση είναι μακροπρόθεσμη επένδυση.', body: 'Δίνουμε προτεραιότητα σε ό,τι λειτουργεί πάνω από ό,τι φαίνεται καλό. Η ανατροφοδότηση είναι ευπρόσδεκτη και αξιοποιείται.' },
]

export default function GrPartnersPage() {
  return (
    <>
      <PageHeader
        label="Συνεργάτες"
        title="Συνεργασίες χτισμένες γύρω από την απόδοση."
        lead="Συνεργαζόμαστε με παγκόσμιους κατασκευαστές και αναδυόμενες καινοτόμες εταιρείες για να φέρουμε τις κατάλληλες θεραπείες στην Ελλάδα — ομαλά, αποτελεσματικά και με πλήρη υποστήριξη."
      />

      {/* Audience */}
      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="section-header">
            <SectionLabel>Με ποιους συνεργαζόμαστε</SectionLabel>
            <h2 className="text-h2 text-deep-blue mt-5">Οι κατάλληλοι άνθρωποι στις κατάλληλες θέσεις.</h2>
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
            <SectionLabel>Η δέσμευσή μας</SectionLabel>
            <h2 className="text-h2 text-white mt-5">Τι μπορείτε να περιμένετε από εμάς.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map(c => <OpsBlock key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Ψάχνετε για αξιόπιστο εταίρο στην ελληνική αγορά;"
        sub="Εάν υπάρχει εφαρμογή, θα κινηθούμε γρήγορα και θα το κάνουμε να λειτουργήσει."
        label="Ξεκινήστε μια συνομιλία"
        href="/gr/contact"
      />
    </>
  )
}
