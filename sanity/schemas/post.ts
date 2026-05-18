// Sanity schema — News post
// Covers product announcements, partnership news, market updates, operations notices.
// Tone of voice note: titles must be direct and factual (see Brand Guide §05).

import { defineType, defineField } from 'sanity'

export const postSchema = defineType({
  name: 'post',
  title: 'News Post',
  type: 'document',
  // Order by publishedAt descending in studio
  orderings: [
    {
      title: 'Published date, newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Direct and factual. No hype. Example: "Atorvastatin 40mg now available in Greece."',
      validation: r => r.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 80 },
      validation: r => r.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: r => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Product Update', value: 'Product Update' },
          { title: 'Partnership',    value: 'Partnership' },
          { title: 'Operations',     value: 'Operations' },
          { title: 'Company',        value: 'Company' },
          { title: 'Market',         value: 'Market' },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'One or two sentences. Used in listing cards and meta description.',
      validation: r => r.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h2' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Em', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (optional override)',
      type: 'string',
      description: 'Defaults to post title. Override only if needed for search.',
      validation: r => r.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description (optional override)',
      type: 'text',
      rows: 2,
      description: 'Defaults to excerpt. Override only if needed for search.',
      validation: r => r.max(160),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', category: 'category' },
    prepare({ title, subtitle, category }) {
      const date = subtitle
        ? new Date(subtitle).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
        : 'No date'
      return { title, subtitle: `${category ?? ''} · ${date}` }
    },
  },
})
