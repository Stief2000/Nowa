import Link from "next/link";
import { categoryLabels, partnerOffers } from "@/app/lib/mock-data";
import { OfferVisual } from "@/app/ui/offer-card";
import { Plus } from "@/app/ui/icons";
import {
  PageHeading,
  StatusBadge,
  TableHead,
  TableShell,
} from "@/app/ui/workspace-components";

export default function PartnerOffersPage() {
  return (
    <>
      <PageHeading
        action={
          <Link className="button-primary" href="/partner/offers/new">
            <Plus className="size-4" /> Neues Angebot
          </Link>
        }
        eyebrow="Angebotsverwaltung"
        text="Verwalte deine verfügbaren Wellness-Erlebnisse."
        title="Angebote"
      />
      <section className="mt-9">
        <TableShell>
          <TableHead
            labels={["Angebot", "Kategorie", "Preis", "Verfügbarkeit", "Status", ""]}
          />
          <tbody className="divide-y divide-stone-100">
            {partnerOffers.map((offer) => (
              <tr className="text-stone-600" key={offer.id}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-4">
                    <OfferVisual compact offer={offer} />
                    <div>
                      <p className="font-bold text-stone-800">{offer.title}</p>
                      <p className="mt-1 text-xs text-stone-500">{offer.duration}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">{categoryLabels[offer.category]}</td>
                <td className="px-5 py-4 font-bold text-stone-800">{offer.price} EUR</td>
                <td className="px-5 py-4">{offer.availability}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={offer.status} />
                </td>
                <td className="px-5 py-4 text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1a]">
                    Bearbeiten
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
