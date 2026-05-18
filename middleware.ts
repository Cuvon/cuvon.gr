// middleware.ts — no-op pass-through.
// Active lang detection moved to LangOverride client component in /gr layout.
// This file must exist and export a valid middleware function for Next.js,
// but the matcher limits it to a path that is never actually served.

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

// Only trigger on an internal path that is never a real route
export const config = {
  matcher: ['/_lang'],
}
