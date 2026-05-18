// middleware.ts — runs on every request before rendering.
// Forwards x-lang as a REQUEST header so the root layout can read it via headers().
// (Response headers are not visible to server components — must use request headers.)
//
// English:  /          /about   /products  etc.  → lang = "en"
// Greek:    /gr        /gr/about  /gr/products   → lang = "el"

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone request headers and inject x-lang before passing to the origin
  const requestHeaders = new Headers(request.headers)
  const isGreek = request.nextUrl.pathname.startsWith('/gr')
  requestHeaders.set('x-lang', isGreek ? 'el' : 'en')

  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

// Skip static assets — only run on navigable routes
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|logo|.*\\.svg).*)'],
}
