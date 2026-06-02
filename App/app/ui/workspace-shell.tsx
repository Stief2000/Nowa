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
    <div className="min-h-screen bg-[#f6f4f0] lg:grid lg:grid-cols-[248px_1fr]">
      <aside className="bg-[#292524] text-stone-300 lg:min-h-screen">
        <div className="flex h-full flex-col py-6">
          <div className="px-5">
            <Logo inverse />
            <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#d28d70]">
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
                {isAdmin ? "FreiPlatz Admin" : "Partner-Konto"}
              </p>
              <Link
                className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-white"
                href="/login"
              >
                <LogOut className="size-4" /> Abmelden
              </Link>
              {showDevelopmentAdminLink ? (
                <Link
                  className="mt-4 block text-xs font-bold uppercase tracking-wider text-[#d28d70] hover:text-white"
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
        <header className="flex min-h-16 items-center justify-between border-b border-stone-200 bg-white px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-500">
            {isAdmin ? "FreiPlatz Plattform" : "Naturhotel Waldruhe"}
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
            <span className="flex size-9 items-center justify-center rounded-full bg-[#eee5dc] text-xs font-bold text-[#a46245]">
              {isAdmin ? "MF" : "EB"}
            </span>
          </div>
        </header>
        <main className="px-6 py-8 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
