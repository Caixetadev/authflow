import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_PUBLIC_JWT,
  });

  if (req.nextUrl.pathname === "/") {
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname === "/register") {
    if (token) return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname !== "/") {
    if (!token) return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/register"],
};
