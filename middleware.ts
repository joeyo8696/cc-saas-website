import { NextRequest, NextResponse } from 'next/server'

const REDIRECT_HOSTS = ['cc-saas-website.vercel.app']

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''

  if (REDIRECT_HOSTS.includes(host)) {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    url.host = 'www.casecompass.io'
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
