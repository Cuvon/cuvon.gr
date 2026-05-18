// Sanity schema — Product
// Represents an individual product in the Cuvon portfolio.
// Products are grouped by area (OTC / Prescription / Wellness / Specialist).

import { defineType, defineField } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product name',
      type: 'string',
      description: 'Generic name (e.g. "Atorvastatin 40mg Film-coated Tablets")',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 80 },
      validation: r => r.required(),
    }),
    defineField({
      name: 'area',
      title: 'Product area',
      type: 'string',
      options: {
        list: [
          { title: 'OTC',          value: 'otc' },
          { title: 'Prescription', value: 'prescription' },
          { title: 'Wellness',     value: 'wellness' },
          { title: 'Specialist',   value: 'specialist' },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'string',
    }),
    defineField({
      name: 'strength',
      title: 'Strength / Form',
      type: 'string',
      description: 'e.g. "40mg Film-coated Tablets"',
    }),
    defineField({
      name: 'atcCode',
      title: 'ATC Code',
      type: 'string',
      description: 'WHO Anatomical Therapeutic Chemical classification code',
    }),
    defineField({
      name: 'available',
      title: 'Currently available',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Factual product description. No marketing language.',
    }),
    defineField({
      name: 'packSizes',
      title: 'Pack sizes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. ["30 tablets", "100 tablets"]',
    }),
    defineField({
      name: 'storageConditions',
      title: 'Storage conditions',
      type: 'string',
      description: 'e.g. "Store below 25°C"',
    }),
    defineField({
      name: 'requiresColdChain',
      title: 'Requires cold chain',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', area: 'area', available: 'available' },
    prepare({ title, area, available }) {
      return {
        title,
        subtitle: `${area?.toUpperCase() ?? ''} · ${available ? 'Available' : 'Unavailable'}`,
      }
    },
  },
})
