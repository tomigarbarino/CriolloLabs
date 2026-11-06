import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { locales, defaultLocale } from '@/config/i18n'

const localize = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always redirect to a locale (e.g. / -> /es)
  localePrefix: 'always',
})

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/en/quote-follow-up') return NextResponse.next()
  return localize(request)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*'],
}
