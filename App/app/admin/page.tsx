import Link from "next/link";
import { offers, partners } from "@/app/lib/mock-data";
import { ArrowRight } from "@/app/ui/icons";
import {
  PageHeading,
  StatCard,
  StatusBadge,
  TableHead,
  TableShell,
} from "@/app/ui/workspace-components";

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeading
        eyebrow="Administration"
        text="Montag, 01. Juni 2026"
        title="Plattform-Übersicht"
      />
      <section className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard detail="+2 im Mai" label="Aktive Partner" value="18" />
        <StatCard detail="9 aktuell sichtbar" label="Aktive Angebote" value="42" />
        <StatCard detail="+18 % zum Vormonat" label="Buchungen Juni" value="146" />
        <StatCard detail="Abzüglich Stornierungen" label="Vermitteltes Volumen" value="18.420 EUR" />
      </section>
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="eyebrow">Partnernetzwerk</p>
            <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em] text-stone-900">
              Partner im Überblick
            </h2>
          </div>
          <Link className="text-link" href="/admin/partners">
            Alle Partner <ArrowRight className="size-4" />
          </Link>
        </div>
        <TableShell>
          <TableHead labels={["Partner", "Ort", "Angebote", "Buchungen", "Status"]} />
          <tbody className="divide-y divide-stone-100">
            {partners.slice(0, 4).map((partner) => (
              <tr className="text-stone-600" key={partner.name}>
                <td className="px-5 py-4 font-bold text-stone-800">{partner.name}</td>
                <td className="px-5 py-4">{partner.location}</td>
                <td className="px-5 py-4">{partner.offers}</td>
                <td className="px-5 py-4">{partner.bookings}</td>
                <td className="px-5 py-4"><StatusBadge status={partner.status} /></td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </section>
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="eyebrow">Kuration</p>
            <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em] text-stone-900">
              Neue Angebote
            </h2>
          </div>
          <Link className="text-link" href="/admin/offers">
            Alle Angebote <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {offers.slice(0, 3).map((offer) => (
            <article className="border border-stone-200 bg-white p-5" key={offer.id}>
              <StatusBadge status={offer.status} />
              <h3 className="mt-4 font-serif text-2xl tracking-[-0.035em] text-stone-900">
                {offer.title}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                {offer.partner}
              </p>
              <p className="mt-5 text-sm text-stone-600">{offer.price} EUR pro Person</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
