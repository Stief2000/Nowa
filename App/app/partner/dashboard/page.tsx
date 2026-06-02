import Link from "next/link";
import { bookings } from "@/app/lib/mock-data";
import { ArrowRight, Plus } from "@/app/ui/icons";
import {
  PageHeading,
  StatCard,
  StatusBadge,
  TableHead,
  TableShell,
} from "@/app/ui/workspace-components";

export default function PartnerDashboardPage() {
  return (
    <>
      <PageHeading
        action={
          <Link className="button-primary" href="/partner/offers/new">
            <Plus className="size-4" /> Neues Angebot
          </Link>
        }
        eyebrow="Übersicht"
        text="Montag, 01. Juni 2026"
        title="Guten Tag, Elena."
      />
      <section className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard detail="+12 % zum Vormonat" label="Umsatz Juni" value="4.860 EUR" />
        <StatCard detail="11 davon diese Woche" label="Buchungen" value="31" />
        <StatCard detail="2 aktiv, 1 pausiert" label="Angebote" value="3" />
        <StatCard detail="Gute Auslastung" label="Belegungsrate" value="74 %" />
      </section>
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="eyebrow">Aktuell</p>
            <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em] text-stone-900">
              Neueste Buchungen
            </h2>
          </div>
          <Link className="text-link" href="/partner/bookings">
            Alle Buchungen <ArrowRight className="size-4" />
          </Link>
        </div>
        <TableShell>
          <TableHead
            labels={["Buchung", "Gast", "Angebot", "Termin", "Wert", "Status"]}
          />
          <tbody className="divide-y divide-stone-100">
            {bookings.map((booking) => (
              <tr className="text-stone-600" key={booking.id}>
                <td className="px-5 py-4 font-mono text-xs text-stone-500">
                  {booking.id}
                </td>
                <td className="px-5 py-4 font-bold text-stone-800">{booking.guest}</td>
                <td className="px-5 py-4">{booking.offer}</td>
                <td className="px-5 py-4">{booking.date}</td>
                <td className="px-5 py-4 font-bold text-stone-800">{booking.value}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={booking.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </section>
    </>
  );
}
