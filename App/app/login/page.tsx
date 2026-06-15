"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Leaf } from "@/app/ui/icons";
import { Logo } from "@/app/ui/logo";
import { createClient } from "@/app/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      { email, password }
    );

    if (signInError || !data.user) {
      setError("E-Mail oder Passwort ist nicht korrekt.");
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    router.push(profile?.role === "admin" ? "/admin" : "/partner/dashboard");
    router.refresh();
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-[0.9fr_1.1fr]" style={{ background: "#f5f1ec" }}>
      <section className="flex flex-col justify-between px-6 py-8 sm:px-12 lg:px-16">
        <div>
          <Logo />
          <Link
            className="mt-14 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-[#ff6b1a]"
            href="/"
          >
            <ArrowLeft className="size-4" /> Zurück zur Startseite
          </Link>
        </div>
        <div className="mx-auto w-full max-w-md py-16">
          <p className="eyebrow">Partnerbereich</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.055em] text-stone-900">
            Schön, dich wiederzusehen.
          </h1>
          <p className="mt-4 leading-7 text-stone-600">
            Melde dich an, um deine Angebote und Buchungen zu verwalten.
          </p>
          <form className="mt-9 space-y-5" onSubmit={handleSubmit}>
            <label>
              <span className="field-label">E-Mail-Adresse</span>
              <input
                className="field"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@hotel.com"
                required
                type="email"
                value={email}
              />
            </label>
            <label>
              <span className="field-label">Passwort</span>
              <input
                className="field"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                type="password"
                value={password}
              />
            </label>
            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-stone-600">
                <input className="accent-[#ff6b1a]" type="checkbox" />
                Angemeldet bleiben
              </label>
              <span className="font-bold text-[#ff6b1a]">Passwort vergessen?</span>
            </div>
            <button
              className="button-primary w-full"
              disabled={loading}
              type="submit"
            >
              {loading ? "Wird angemeldet…" : "Anmelden"}
            </button>
          </form>
        </div>
        <p className="text-xs text-stone-500">
          Noch kein Partner?{" "}
          <span className="font-bold text-[#ff6b1a]">Kontakt aufnehmen</span>
        </p>
      </section>
      <section className="relative hidden overflow-hidden bg-[#526052] lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(255,255,255,0.22),transparent_23%),linear-gradient(145deg,#64715f_0%,#39483c_100%)]" />
        <div className="absolute bottom-0 right-[4%] h-[76%] w-[72%] rounded-tl-[80%] bg-[#adbaa5]/30" />
        <div className="absolute right-20 top-24 max-w-md border border-white/20 bg-white/10 p-8 text-white backdrop-blur-sm">
          <Leaf className="size-6 text-[#e0b19a]" />
          <p className="mt-7 font-serif text-4xl leading-tight tracking-[-0.04em]">
            Freie Plätze sichtbar machen. Auszeiten möglich machen.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/75">
            {[
              "Angebote flexibel veröffentlichen",
              "Buchungen zentral verwalten",
              "Auslastung gezielt verbessern",
            ].map((item) => (
              <li className="flex gap-3" key={item}>
                <Check className="size-4 text-[#e0b19a]" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
