import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session — must not use getSession() here, always getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isPartnerRoute = path.startsWith("/partner");
  const isAdminRoute = path.startsWith("/admin");

  if ((isPartnerRoute || isAdminRoute) && !user) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (user && (isPartnerRoute || isAdminRoute)) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    // Admin trying to access partner area → redirect to admin
    if (isPartnerRoute && profile?.role === "admin") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    // Partner trying to access admin area → redirect to partner dashboard
    if (isAdminRoute && profile?.role !== "admin") {
      return NextResponse.redirect(new URL("/partner/dashboard", request.url));
    }
  }

  return supabaseResponse;
}
