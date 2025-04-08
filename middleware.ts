import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  if (
    !pathname.startsWith("/ru") &&
    !pathname.startsWith("/kz") &&
    cookieLocale
  ) {
    return NextResponse.redirect(
      new URL(`/${cookieLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}
