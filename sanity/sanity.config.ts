// Sanity Studio configuration.
// The studio is accessible at /studio (embedded in Next.js via next-sanity).
// Run standalone with: npm run sanity

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes }   from './schemas'

export default defineConfig({
  name: 'cuvon',
  title: 'Cuvon CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            // News posts
            S.listItem()
              .title('News')
              .child(
                S.documentTypeList('post').title('News Posts')
              ),
            // Products
            S.listItem()
              .title('Products')
              .child(
                S.documentTypeList('product').title('Products')
              ),
            S.divider(),
            // Settings singleton
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    // Vision — GROQ query explorer (development only)
    visionTool(),
  ],

  schema: { types: schemaTypes },
})
