import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "albaiks_admin_session";
const PUBLIC_ADMIN_PATHS = new Set(["/admin/login", "/admin/setup"]);

async function isAuthed(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const secret = process.env.AUTH_SECRET;
  if (!secret) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const authed = await isAuthed(token);

  // Logged in and visiting login/setup → push to dashboard.
  if (PUBLIC_ADMIN_PATHS.has(pathname) && authed) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Everything else under /admin requires a valid session.
  if (pathname.startsWith("/admin") && !PUBLIC_ADMIN_PATHS.has(pathname)) {
    if (!authed) {
      const url = new URL("/admin/login", req.url);
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
