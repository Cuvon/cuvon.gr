// Sanity schema — Site Settings (singleton)
// Global settings: contact email, address, social links, default SEO.
// Only one document of this type should exist.

import { defineType, defineField } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — hide "create new" button in studio
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      initialValue: 'info@cuvon.gr',
      validation: r => r.required().email(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      initialValue: 'https://cuvon.gr',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO title',
      type: 'string',
      initialValue: 'Cuvon — Pharmaceutical Distribution, Greece',
      validation: r => r.max(60),
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO description',
      type: 'text',
      rows: 2,
      initialValue: 'Cuvon is a fast, reliable pharmaceutical partner bringing high-quality treatments to the Greek market. Built with care. Reliably delivered.',
      validation: r => r.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Default OG image',
      type: 'image',
      description: '1200×630px. Used as fallback for social sharing.',
      options: { hotspot: true },
    }),
  ],
})
