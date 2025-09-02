import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const locales = ["id", "en"];

async function getLocale(): Promise<string> {
    const cookieStore = await cookies();
    const locale = cookieStore.get("locale");

    if (locale) {
        return locale.value;
    } else {
        return "id";
    }

}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Cek apakah sudah ada locale di path
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // Redirect kalau tidak ada locale
    const locale = await getLocale();
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        // Skip semua internal path (_next, api, static files, dll.)
        "/((?!_next|api|images|favicon.ico).*)",
    ],
};