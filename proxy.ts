import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';

  // Completely remove the base domain or port suffix cleanly
  const currentSubdomain = hostname
    .replace('.circuitquestlab.cz', '')
    .replace('.localhost:3000', '')
    .replace('localhost:3000', ''); // Fallback for root domain locally

  // Check for the clean subdomain string "links"
  if (currentSubdomain === 'links') {
    // If the path is just "/", rewrite directly to the page without a trailing slash
    const targetPath = url.pathname === '/' ? '' : url.pathname;
    return NextResponse.rewrite(new URL(`/subdomains/links${targetPath}`, req.url));
  }

  // Prevent users from manually typing /subdomains/links on your main site
  if (url.pathname.startsWith('/subdomains')) {
    return NextResponse.rewrite(new URL('/404', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};