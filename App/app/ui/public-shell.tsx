import Link from "next/link";
import { Logo } from "@/app/ui/logo";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        className="sticky top-0 z-30"
        style={{
          background: "rgba(222, 217, 212, 0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 10px 28px rgba(27, 24, 22, 0.035)",
        }}
      >
        <div className="page-container flex h-[76px] items-center justify-between gap-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.12em] md:flex" style={{ color: "#5a5550" }}>
            <Link className="hover:text-[#1b1816] transition-colors" href="/offers">
              Angebote
            </Link>
            <a className="hover:text-[#1b1816] transition-colors" href="#how-it-works">
              So funktioniert&apos;s
            </a>
            <Link className="hover:text-[#1b1816] transition-colors" href="/login">
              Partner-Login
            </Link>
          </nav>
          <Link className="button-primary hidden sm:inline-flex" href="/offers">
            Auszeit finden
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer style={{ background: "#1b1816", color: "rgba(255,255,255,0.74)" }}>
        <div className="page-container grid gap-12 py-14 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Besondere Wellness-Erlebnisse für kleine Fluchten aus dem Alltag.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-widest text-white">
              Entdecken
            </p>
            <Link className="mt-4 block hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.62)" }} href="/offers">
              Alle Angebote
            </Link>
            <Link className="mt-3 block hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.62)" }} href="/login">
              Für Partner
            </Link>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-widest text-white">
              nowa
            </p>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>Impressum</p>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.5)" }}>Datenschutz</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="page-container py-5 text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
            © 2026 nowa. Für spontane Auszeiten gemacht.
          </div>
        </div>
      </footer>
    </>
  );
}
