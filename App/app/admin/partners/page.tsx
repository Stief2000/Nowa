import { partners } from "@/app/lib/mock-data";
import { Plus, Search } from "@/app/ui/icons";
import {
  PageHeading,
  StatusBadge,
  TableHead,
  TableShell,
} from "@/app/ui/workspace-components";

export default function AdminPartnersPage() {
  return (
    <>
      <PageHeading
        action={<button className="button-primary"><Plus className="size-4" /> Partner anlegen</button>}
        eyebrow="Partnernetzwerk"
        text="Hotels und Spa-Betriebe auf der FreiPlatz Plattform."
        title="Partner"
      />
      <label className="mt-8 flex min-h-12 max-w-md items-center gap-3 border border-stone-200 bg-white px-4">
        <Search className="size-4 text-stone-400" />
        <span className="sr-only">Partner suchen</span>
        <input
          className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
          placeholder="Partner suchen"
          type="search"
        />
      </label>
      <section className="mt-4">
        <TableShell>
          <TableHead labels={["Partner", "Ort", "Angebote", "Buchungen", "Status", ""]} />
          <tbody className="divide-y divide-stone-100">
            {partners.map((partner) => (
              <tr className="text-stone-600" key={partner.name}>
                <td className="px-5 py-4 font-bold text-stone-800">{partner.name}</td>
                <td className="px-5 py-4">{partner.location}</td>
                <td className="px-5 py-4">{partner.offers}</td>
                <td className="px-5 py-4">{partner.bookings}</td>
                <td className="px-5 py-4"><StatusBadge status={partner.status} /></td>
                <td className="px-5 py-4 text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#a46245]">
                    Details
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </section>
    </>
  );
}
