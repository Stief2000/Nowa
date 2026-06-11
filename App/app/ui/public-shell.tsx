import Link from "next/link";
import { Logo } from "@/app/ui/logo";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-stone-200 bg-[#faf8f4]/95">
        <div className="page-container flex h-20 items-center justify-between gap-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.12em] text-stone-600 md:flex">
            <Link className="hover:text-[#ff6b1a]" href="/offers">
              Angebote
            </Link>
            <a className="hover:text-[#ff6b1a]" href="#how-it-works">
              So funktioniert&apos;s
            </a>
            <Link className="hover:text-[#ff6b1a]" href="/login">
              Partner-Login
            </Link>
          </nav>
          <Link className="button-primary hidden sm:inline-flex" href="/offers">
            Auszeit finden
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-stone-200 bg-[#292524] text-stone-300">
        <div className="page-container grid gap-12 py-14 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm text-sm leading-6 text-stone-400">
              Besondere Wellness-Erlebnisse für kleine Fluchten aus dem Alltag.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-widest text-white">
              Entdecken
            </p>
            <Link className="mt-4 block hover:text-white" href="/offers">
              Alle Angebote
            </Link>
            <Link className="mt-3 block hover:text-white" href="/login">
              Für Partner
            </Link>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-widest text-white">
              nowa
            </p>
            <p className="mt-4 text-stone-400">Impressum</p>
            <p className="mt-3 text-stone-400">Datenschutz</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="page-container py-5 text-xs text-stone-500">
            © 2026 nowa. Für spontane Auszeiten gemacht.
          </div>
        </div>
      </footer>
    </>
  );
}
