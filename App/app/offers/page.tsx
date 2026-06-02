import type { Metadata } from "next";
import { OfferCard } from "@/app/ui/offer-card";
import { PublicShell } from "@/app/ui/public-shell";
import { ChevronDown, Search } from "@/app/ui/icons";
import { offers } from "@/app/lib/mock-data";

export const metadata: Metadata = {
  title: "Angebote",
  description: "Entdecke kurzfristig verfügbare Wellness-Angebote.",
};

const filters = ["Alle Kategorien", "Ort", "Zeitraum", "Preis"];

export default function OffersPage() {
  return (
    <PublicShell>
      <section className="border-b border-stone-200 bg-[#f2ede5]">
        <div className="page-container py-16 lg:py-20">
          <p className="eyebrow">Zeit für dich</p>
          <h1 className="mt-4 max-w-3xl font-serif text-6xl tracking-[-0.065em] text-stone-900 sm:text-7xl">
            Finde deinen <span className="italic text-[#a46245]">FreiPlatz.</span>
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-stone-600">
            Kleine Auszeiten, freie Termine und ausgewählte Wellness-Orte in
            Südtirol.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="page-container flex flex-col gap-3 py-5 lg:flex-row">
          <label className="flex min-h-12 min-w-64 flex-1 items-center gap-3 border border-stone-200 px-4">
            <Search className="size-4 text-stone-400" />
            <span className="sr-only">Angebot suchen</span>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
              placeholder="Wonach suchst du?"
              type="search"
            />
          </label>
          <div className="grid grid-cols-2 gap-3 lg:flex">
            {filters.map((filter) => (
              <button
                className="flex min-h-12 min-w-36 items-center justify-between gap-3 border border-stone-200 px-4 text-left text-xs font-bold uppercase tracking-wider text-stone-600 hover:border-stone-400"
                key={filter}
                type="button"
              >
                {filter}
                <ChevronDown className="size-3.5" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-12 lg:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Aktuell verfügbar</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-stone-900">
              Besondere Auszeiten
            </h2>
          </div>
          <p className="hidden text-sm text-stone-500 sm:block">
            {offers.length} Angebote gefunden
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
