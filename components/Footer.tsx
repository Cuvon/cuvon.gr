'use client'

// Footer — client component (needs usePathname for language detection).
// Renders in the language that matches the current route:
//   /gr/* → Greek labels and link hrefs
//   /*    → English labels and link hrefs

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const content = {
  en: {
    tagline: 'Built with care. Reliably delivered.',
    sub: 'Premium Healthcare Product Importation, Promotion & Distribution. Greece.',
    company: { heading: 'Company', links: [
      { href: '/about',      label: 'About' },
      { href: '/operations', label: 'Operations & Quality' },
    ]},
    work: { heading: 'Work with us', links: [
      { href: '/products', label: 'Products' },
      { href: '/partners', label: 'Partners' },
      { href: '/contact',  label: 'Contact' },
    ]},
    bottomRight: 'Greece',
    copyright: '© 2025 Cuvon. All rights reserved.',
  },
  gr: {
    tagline: 'Με φροντίδα. Αξιόπιστα.',
    sub: 'Εισαγωγή και διανομή προϊόντων υγείας. Ελλάδα.',
    company: { heading: 'Εταιρεία', links: [
      { href: '/gr/about',      label: 'Σχετικά με εμάς' },
      { href: '/gr/operations', label: 'Λειτουργίες & Ποιότητα' },
    ]},
    work: { heading: 'Συνεργαστείτε μαζί μας', links: [
      { href: '/gr/products', label: 'Προϊόντα' },
      { href: '/gr/partners', label: 'Συνεργάτες' },
      { href: '/gr/contact',  label: 'Επικοινωνία' },
    ]},
    bottomRight: 'Ελλάδα',
    copyright: '© 2025 Cuvon. Με επιφύλαξη παντός δικαιώματος.',
  },
}

export default function Footer() {
  const pathname = usePathname()
  const isGreek  = pathname.startsWith('/gr')
  const t        = isGreek ? content.gr : content.en
  const logoHref = isGreek ? '/gr' : '/'

  return (
    <footer className="bg-deep-blue border-t border-white/8 pt-14 pb-10">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href={logoHref} className="inline-flex mb-4">
              <Image src="/logo-white.svg" alt="Cuvon" width={105} height={22} />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-[260px]">
              {t.tagline}
              <br /><br />
              {t.sub}
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white/90 mb-4">
              {t.company.heading}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {t.company.links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/75 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work with us links */}
          <div>
            <h3 className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white/90 mb-4">
              {t.work.heading}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {t.work.links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/75 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[0.8rem] text-white/60">{t.copyright}</p>
          <p className="text-[0.8rem] text-white/60">
            <a href="mailto:info@cuvon.gr" className="hover:text-white/70 transition-colors">info@cuvon.gr</a>
            <span className="mx-2 opacity-40">·</span>
            {t.bottomRight}
          </p>
        </div>

      </div>
    </footer>
  )
}
