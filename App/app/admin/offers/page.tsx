import { categoryLabels, offers } from "@/app/lib/mock-data";
import { Search } from "@/app/ui/icons";
import {
  PageHeading,
  StatusBadge,
  TableHead,
  TableShell,
} from "@/app/ui/workspace-components";

export default function AdminOffersPage() {
  return (
    <>
      <PageHeading
        eyebrow="Kuration"
        text="Prüfe und verwalte alle Angebote der Partnerbetriebe."
        title="Angebote"
      />
      <label className="mt-8 flex min-h-12 max-w-md items-center gap-3 border border-stone-200 bg-white px-4">
        <Search className="size-4 text-stone-400" />
        <span className="sr-only">Angebot suchen</span>
        <input
          className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
          placeholder="Angebot oder Partner suchen"
          type="search"
        />
      </label>
      <section className="mt-4">
        <TableShell>
          <TableHead labels={["Angebot", "Partner", "Kategorie", "Preis", "Status", ""]} />
          <tbody className="divide-y divide-stone-100">
            {offers.map((offer) => (
              <tr className="text-stone-600" key={offer.id}>
                <td className="px-5 py-4 font-bold text-stone-800">{offer.title}</td>
                <td className="px-5 py-4">{offer.partner}</td>
                <td className="px-5 py-4">{categoryLabels[offer.category]}</td>
                <td className="px-5 py-4 font-bold text-stone-800">{offer.price} EUR</td>
                <td className="px-5 py-4"><StatusBadge status={offer.status} /></td>
                <td className="px-5 py-4 text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#a46245]">
                    Prüfen
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
