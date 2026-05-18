// middleware.ts — runs on every request before rendering.
// Sets x-lang header so the root layout can apply the correct html[lang] attribute
// without needing to read the URL in a server component directly.
//
// English:  /          /about   /products  etc.  → lang = "en"
// Greek:    /gr        /gr/about  /gr/products   → lang = "el"

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const isGreek = request.nextUrl.pathname.startsWith('/gr')
  response.headers.set('x-lang', isGreek ? 'el' : 'en')
  return response
}

// Skip static assets — only run on navigable routes
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|logo|.*\\.svg).*)'],
}
