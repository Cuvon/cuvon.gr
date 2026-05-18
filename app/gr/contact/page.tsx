// Greek Contact page — /gr/contact

import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Επικοινωνία',
  description:
    'Επικοινωνήστε με τη Cuvon για πληροφορίες σχετικά με διανομή προϊόντων υγείας στην Ελλάδα.',
  alternates: {
    canonical: '/gr/contact',
    languages: { 'en': 'https://cuvon.gr/contact', 'el': 'https://cuvon.gr/gr/contact' },
  },
}

// Contact email addresses by audience (Greek labels)
const emails = [
  { label: 'Κατασκευαστές & εταίροι διανομής', address: 'partners@cuvon.gr' },
  { label: 'Φαρμακεία & υπάρχοντες πελάτες',   address: 'customers@cuvon.gr' },
  { label: 'Γενικές πληροφορίες',               address: 'info@cuvon.gr' },
]

export default function GrContactPage() {
  return (
    <>
      <PageHeader
        label="Επικοινωνία"
        title="Πείτε μας τι χρειάζεστε."
        lead="Εάν υπάρχει εφαρμογή, κινούμαστε γρήγορα. Θα απαντήσουμε με μια άμεση, συγκεκριμένη απάντηση."
      />

      <section className="bg-white section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Contact details — 2/5 */}
            <div className="lg:col-span-2">
              <h2 className="text-[1.375rem] font-bold text-deep-blue mb-9">Άμεση επικοινωνία.</h2>

              {/* Emails by audience */}
              <div className="flex flex-col gap-7 mb-10">
                {emails.map(({ label, address }) => (
                  <div key={address}>
                    <p className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-soft-teal mb-1.5">
                      {label}
                    </p>
                    <a
                      href={`mailto:${address}`}
                      className="text-[1rem] font-medium text-deep-blue hover:text-slate-blue transition-colors"
                    >
                      {address}
                    </a>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div>
                <p className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-soft-teal mb-1.5">Διεύθυνση</p>
                <a
                  href="https://maps.google.com/?q=Vasilissis+Olgas+24,+Marousi+151+22,+Greece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1rem] font-medium text-deep-blue hover:text-slate-blue transition-colors leading-[1.6]"
                >
                  Βασιλίσσης Όλγας 24<br />
                  Μαρούσι 151 22
                </a>
              </div>
            </div>

            {/* Map — 3/5 */}
            <div className="lg:col-span-3">
              <div className="rounded-brand overflow-hidden" style={{ aspectRatio: '4/3', minHeight: '320px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Vasilissis+Olgas+24,+Marousi+151+22,+Greece&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Τοποθεσία γραφείων Cuvon — Βασιλίσσης Όλγας 24, Μαρούσι"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
