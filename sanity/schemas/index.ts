// Schema registry — import all schemas here and export as array.
// Add new document types to this file as the CMS grows.

import { postSchema }         from './post'
import { productSchema }      from './product'
import { siteSettingsSchema } from './siteSettings'

export const schemaTypes = [
  postSchema,
  productSchema,
  siteSettingsSchema,
]
