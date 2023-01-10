// Middleware to add default locale (en, fr, etc...) to the url 😎

import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const shouldHandleLocale =
    !req.nextUrl.pathname.startsWith("/_next") &&
    !req.nextUrl.pathname.includes("/api/") &&
    req.nextUrl.pathname !== "" && // to remove it from homepage but it doens't work 🧐
    !PUBLIC_FILE.test(req.nextUrl.pathname) &&
    req.nextUrl.locale === "default";

  return shouldHandleLocale
    ? NextResponse.redirect(new URL(`/en${req.nextUrl.pathname}`, req.url))
    : undefined;
}
