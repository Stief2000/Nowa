import Link from "next/link";
import {
  LogOut,
} from "@/app/ui/icons";
import { Logo } from "@/app/ui/logo";
import { WorkspaceNav, type WorkspaceNavItem } from "@/app/ui/workspace-nav";

const partnerNav: WorkspaceNavItem[] = [
  { href: "/partner/dashboard", label: "Übersicht", icon: "dashboard" },
  { href: "/partner/offers", label: "Angebote", icon: "offers" },
  { href: "/partner/bookings", label: "Buchungen", icon: "bookings" },
];

const adminNav: WorkspaceNavItem[] = [
  { href: "/admin", label: "Übersicht", icon: "dashboard" },
  { href: "/admin/partners", label: "Partner", icon: "partners" },
  { href: "/admin/offers", label: "Angebote", icon: "offers" },
];

export function WorkspaceShell({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "partner" | "admin";
}) {
  const isAdmin = role === "admin";
  const showDevelopmentAdminLink =
    !isAdmin && process.env.NODE_ENV === "development";

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[248px_1fr]" style={{ background: "#f5f1ec" }}>
      <aside className="lg:min-h-screen" style={{ background: "#24211f", color: "rgba(255,255,255,0.7)" }}>
        <div className="flex h-full flex-col py-6">
          <div className="px-5">
            <Logo />
            <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff6b1a]">
              {isAdmin ? "Administration" : "Partner Portal"}
            </p>
          </div>
          <WorkspaceNav items={isAdmin ? adminNav : partnerNav} />
          <div className="mt-auto hidden px-5 pt-12 lg:block">
            <div className="border-t border-white/10 pt-5">
              <p className="text-sm font-bold text-white">
                {isAdmin ? "Mara Frei" : "Naturhotel Waldruhe"}
              </p>
              <p className="mt-1 text-xs text-stone-500">
                {isAdmin ? "nowa Admin" : "Partner-Konto"}
              </p>
              <Link
                className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-white"
                href="/login"
              >
                <LogOut className="size-4" /> Abmelden
              </Link>
              {showDevelopmentAdminLink ? (
                <Link
                  className="mt-4 block text-xs font-bold uppercase tracking-wider text-[#ff6b1a] hover:text-white"
                  href="/admin"
                >
                  Admin
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex min-h-16 items-center justify-between px-6 lg:px-10" style={{ background: "#fff", borderBottom: "1px solid rgba(27,24,22,0.1)" }}>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-500">
            {isAdmin ? "nowa Plattform" : "Naturhotel Waldruhe"}
          </p>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-stone-800">
                {isAdmin ? "Mara Frei" : "Elena Berger"}
              </p>
              <p className="text-xs text-stone-500">
                {isAdmin ? "Administratorin" : "Partner Management"}
              </p>
            </div>
            <span className="flex size-9 items-center justify-center rounded-full bg-[#fff0e6] text-xs font-bold text-[#ff6b1a]">
              {isAdmin ? "MF" : "EB"}
            </span>
          </div>
        </header>
        <main className="px-6 py-8 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
