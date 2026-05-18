import type { Config } from 'tailwindcss'

// Brand tokens — locked to Cuvon Brand Guide v1.0
// Usage ratio: 70% white/light-grey · 20% deep-blue · 10% teal or sand
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        'deep-blue':  '#1D3557',  // Primary — trust, structure, authority
        'slate-blue': '#46627F',  // Secondary — hierarchy, depth
        'soft-teal':  '#6FA8A3',  // Accent — use sparingly
        'warm-sand':  '#D9D2C4',  // Warmth, humanity, care
        'light-grey': '#F2F4F6',  // Background — clinical base
        // Body text
        'body':       '#2E3A4A',
        'caption':    '#6B7A8D',
      },

      fontFamily: {
        // Inter — sole brand typeface; Helvetica/Arial as fallbacks
        sans: ['var(--font-inter)', 'Helvetica', 'Arial', 'sans-serif'],
      },

      fontSize: {
        // Brief type scale — all rem-based for accessibility
        'display': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1':      ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2':      ['2rem',    { lineHeight: '1.15', letterSpacing: '-0.015em',fontWeight: '700' }],
        'h3':      ['1.375rem',{ lineHeight: '1.3',  fontWeight: '700' }],
        'lead':    ['1.125rem',{ lineHeight: '1.7' }],
        'body':    ['1rem',    { lineHeight: '1.65' }],
        'caption': ['0.8125rem',{ lineHeight: '1.5' }],
        'label':   ['0.6875rem',{ lineHeight: '1', letterSpacing: '0.12em', fontWeight: '700' }],
      },

      maxWidth: {
        'site': '1200px',  // Container max-width
        'prose-lg': '680px',
      },

      spacing: {
        'section': '6rem',  // 96px — standard vertical section gap
        'section-sm': '4rem',
      },

      borderRadius: {
        'brand': '3px',  // Subtle rounding — matches logo spec
      },

      boxShadow: {
        'card': '0 1px 3px rgba(29,53,87,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
