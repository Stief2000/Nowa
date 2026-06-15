import type { Metadata } from "next";
import { PublicShell } from "@/app/ui/public-shell";
import { OfferBrowser } from "@/app/offers/offer-browser";
import { offers as mockOffers, type Offer } from "@/app/lib/mock-data";
import { createClient } from "@/app/lib/supabase/server";

export const metadata: Metadata = {
  title: "Angebote",
  description: "Entdecke kurzfristig verfügbare Wellness-Angebote in Südtirol.",
};

async function fetchDbOffers(): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("offers")
      .select("*, partners(name)")
      .eq("active", true)
      .eq("status", "Aktiv")
      .order("created_at", { ascending: false });

    if (!data) return [];

    return data.map((o) => ({
      id: o.id as string,
      title: o.title as string,
      partner: (o.partners as { name: string } | null)?.name ?? "Partner",
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
  } catch (err) {
    console.error("[fetchDbOffers]", err);
    return [];
  }
}

export default async function OffersPage() {
  const dbOffers = await fetchDbOffers();
  const allOffers = [...mockOffers, ...dbOffers];

  return (
    <PublicShell>
      <section style={{ borderBottom: "1px solid rgba(27,24,22,0.1)", background: "#efe2d7" }}>
        <div className="page-container py-16 lg:py-20">
          <p className="eyebrow">Kurzfristig verfügbar</p>
          <h1 className="mt-4 max-w-3xl font-serif text-6xl tracking-[-0.065em] text-stone-900 sm:text-7xl">
            Finde deinen{" "}
            <span className="italic text-[#ff6b1a]">Moment.</span>
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-stone-600">
            Ausgewählte Wellness-Orte und besondere Übernachtungen in Südtirol —
            kurzfristig frei, direkt buchbar.
          </p>
        </div>
      </section>
      <OfferBrowser offers={allOffers} />
    </PublicShell>
  );
}
