import Link from "next/link";
import { categoryLabels, type Offer } from "@/app/lib/mock-data";
import { OfferVisual } from "@/app/ui/offer-card";
import { Plus } from "@/app/ui/icons";
import {
  PageHeading,
  StatusBadge,
  TableShell,
  TableHead,
} from "@/app/ui/workspace-components";
import { createClient } from "@/app/lib/supabase/server";

async function fetchPartnerOffers(): Promise<Offer[]> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: partnerRecord } = await supabase
    .from("partners")
    .select("id")
    .eq("profile_id", user.id)
    .single();
  if (!partnerRecord) return [];

  const { data } = await supabase
    .from("offers")
    .select("*")
    .eq("partner_id", partnerRecord.id)
    .order("created_at", { ascending: false });

  if (!data) return [];

  return data.map((o) => ({
    id: o.id as string,
    title: o.title as string,
    partner: "",
    location: (o.location as string) ?? "",
    region: ((o.region as string) ?? "bozen") as Offer["region"],
    lat: (o.lat as number) ?? 46.4983,
    lng: (o.lng as number) ?? 11.3548,
    category: o.category as Offer["category"],
    price: o.price as number,
    originalPrice: (o.original_price as number | null) ?? undefined,
    duration: (o.duration as string) ?? "",
    availability: (o.availability as string) ?? "",
    description: (o.description as string) ?? "",
    includes: [],
    tone: "sand" as const,
    status: (o.status as Offer["status"]) ?? "Aktiv",
  }));
}

export default async function PartnerOffersPage() {
  const offers = await fetchPartnerOffers();

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
        {offers.length === 0 ? (
          <div className="flex flex-col items-center py-24 text-center">
            <p className="font-serif text-3xl text-stone-400">Noch keine Angebote.</p>
            <p className="mt-3 text-sm text-stone-400">
              Erstelle dein erstes Angebot, damit Gäste es finden können.
            </p>
            <Link className="button-primary mt-6" href="/partner/offers/new">
              <Plus className="size-4" /> Erstes Angebot erstellen
            </Link>
          </div>
        ) : (
          <TableShell>
            <TableHead
              labels={["Angebot", "Kategorie", "Preis", "Verfügbarkeit", "Status", ""]}
            />
            <tbody className="divide-y divide-stone-100">
              {offers.map((offer) => (
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
        )}
      </section>
    </>
  );
}
