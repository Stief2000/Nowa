import type { Metadata } from "next";
import { PublicShell } from "@/app/ui/public-shell";
import { OfferBrowser } from "@/app/offers/offer-browser";
import { offers } from "@/app/lib/mock-data";

export const metadata: Metadata = {
  title: "Angebote",
  description: "Entdecke kurzfristig verfügbare Wellness-Angebote in Südtirol.",
};

export default function OffersPage() {
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
      <OfferBrowser offers={offers} />
    </PublicShell>
  );
}
