import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  const failure = new URL("/login?error=callback", origin);
  if (!code) return NextResponse.redirect(failure);

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error && data.session) return NextResponse.redirect(new URL("/trips", origin));
  } catch {
    // A missing configuration or an unavailable auth service cannot establish a session.
  }
  return NextResponse.redirect(failure);
}
