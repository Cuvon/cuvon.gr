'use client'

// Nav — sticky, mobile-responsive, bilingual (EN / GR).
// Language is derived from the current pathname:
//   starts with /gr → Greek (el)
//   otherwise       → English (en)
// The EN/GR toggle links to the equivalent page in the other language.

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

// Nav link labels per language
const navLinks = {
  en: [
    { href: '/about',      label: 'About' },
    { href: '/products',   label: 'Products' },
    { href: '/partners',   label: 'Partners' },
    { href: '/operations', label: 'Operations & Quality' },
  ],
  gr: [
    { href: '/gr/about',      label: 'Σχετικά' },
    { href: '/gr/products',   label: 'Προϊόντα' },
    { href: '/gr/partners',   label: 'Συνεργάτες' },
    { href: '/gr/operations', label: 'Λειτουργίες & Ποιότητα' },
  ],
}

const ctaLabel = { en: 'Get in touch', gr: 'Επικοινωνία' }
const ctaHref  = { en: '/contact',     gr: '/gr/contact' }
const homeHref = { en: '/',            gr: '/gr' }

// Given the current pathname, return the equivalent URL in the other language
function altLangHref(pathname: string, isGreek: boolean): string {
  if (isGreek) {
    // Strip /gr prefix → English equivalent
    const stripped = pathname.replace(/^\/gr/, '')
    return stripped === '' ? '/' : stripped
  } else {
    // Add /gr prefix → Greek equivalent
    return pathname === '/' ? '/gr' : `/gr${pathname}`
  }
}

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isGreek = pathname.startsWith('/gr')
  const lang    = isGreek ? 'gr' : 'en'
  const links   = navLinks[lang]

  // Active state: Greek links match /gr/xxx, English match /xxx
  const isActive = (href: string) =>
    href === '/' || href === '/gr'
      ? pathname === href
      : pathname.startsWith(href)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-deep-blue/8 h-[68px] flex items-center">
      <div className="w-full max-w-site mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* Wordmark */}
        <Link href={homeHref[lang]} onClick={() => setOpen(false)} className="flex items-center">
          <Image src="/logo.svg" alt="Cuvon" width={105} height={22} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive(href) ? 'text-deep-blue' : 'text-slate-blue hover:text-deep-blue'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right: language toggle + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* EN / GR toggle */}
          <div className="flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-[0.06em] uppercase">
            <Link
              href={isGreek ? altLangHref(pathname, true) : pathname}
              className={`transition-colors ${!isGreek ? 'text-deep-blue' : 'text-slate-blue/50 hover:text-slate-blue'}`}
            >
              EN
            </Link>
            <span className="text-deep-blue/20">·</span>
            <Link
              href={isGreek ? pathname : altLangHref(pathname, false)}
              className={`transition-colors ${isGreek ? 'text-deep-blue' : 'text-slate-blue/50 hover:text-slate-blue'}`}
            >
              GR
            </Link>
          </div>

          {/* CTA button */}
          <Link
            href={ctaHref[lang]}
            className="inline-flex items-center text-sm font-semibold text-deep-blue border-[1.5px] border-deep-blue px-5 py-2 rounded-brand transition-colors hover:bg-deep-blue hover:text-white"
          >
            {ctaLabel[lang]}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-1.5 -mr-1 text-deep-blue"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          <span className="flex flex-col gap-[5px] w-5">
            <span className={`block h-0.5 bg-current transition-transform origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-transform origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-deep-blue/8 z-40">
          <ul className="flex flex-col px-6 py-5 gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-medium ${isActive(href) ? 'text-deep-blue' : 'text-slate-blue'}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-deep-blue/8 flex items-center justify-between">
              <Link
                href={ctaHref[lang]}
                className="inline-flex text-sm font-semibold text-deep-blue"
                onClick={() => setOpen(false)}
              >
                {ctaLabel[lang]} →
              </Link>
              {/* Language toggle (mobile) */}
              <div className="flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-[0.06em] uppercase">
                <Link
                  href={isGreek ? altLangHref(pathname, true) : pathname}
                  className={!isGreek ? 'text-deep-blue' : 'text-slate-blue/50'}
                  onClick={() => setOpen(false)}
                >
                  EN
                </Link>
                <span className="text-deep-blue/20">·</span>
                <Link
                  href={isGreek ? pathname : altLangHref(pathname, false)}
                  className={isGreek ? 'text-deep-blue' : 'text-slate-blue/50'}
                  onClick={() => setOpen(false)}
                >
                  GR
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
