"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Grid, Sparkles, Users } from "@/app/ui/icons";

export type WorkspaceNavItem = {
  href: string;
  label: string;
  icon: "bookings" | "dashboard" | "offers" | "partners";
};

export function WorkspaceNav({ items }: { items: WorkspaceNavItem[] }) {
  const pathname = usePathname();
  const icons = {
    bookings: FileText,
    dashboard: Grid,
    offers: Sparkles,
    partners: Users,
  };

  return (
    <nav className="mt-10 space-y-1">
      {items.map((item) => {
        const ItemIcon = icons[item.icon];
        const active =
          pathname === item.href ||
          (item.href !== "/admin" && pathname.startsWith(`${item.href}/`));

        return (
          <Link
            className={`flex items-center gap-3 border-l-2 px-5 py-3 text-sm font-medium ${
              active
                ? "border-[#d28d70] bg-white/10 text-white"
                : "border-transparent text-stone-400 hover:bg-white/5 hover:text-white"
            }`}
            href={item.href}
            key={item.href}
          >
            <ItemIcon className="size-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
