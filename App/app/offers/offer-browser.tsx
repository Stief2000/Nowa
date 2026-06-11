"use client";

import dynamic from "next/dynamic";
import { useState, useMemo } from "react";
import { OfferCard } from "@/app/ui/offer-card";
import { ChevronDown, ListBullet, MapIcon, Search } from "@/app/ui/icons";
import {
  categoryLabels,
  categoryStatus,
  regionLabels,
  type Offer,
  type OfferCategory,
  type OfferRegion,
} from "@/app/lib/mock-data";

const MapView = dynamic(() => import("@/app/ui/map").then((m) => m.MapView), {
  ssr: false,
  loading: () => (
    <div className="flex h-[560px] w-full items-center justify-center border border-stone-200 bg-[#f5f1ec] text-sm text-stone-400">
      Karte wird geladen…
    </div>
  ),
});

type TimePeriod = "today" | "weekend" | "next-week";

const TIME_PERIODS: { value: TimePeriod; label: string }[] = [
  { value: "today", label: "Heute" },
  { value: "weekend", label: "Wochenende" },
  { value: "next-week", label: "Nächste Woche" },
];

function matchesTimePeriod(availability: string, period: TimePeriod): boolean {
  const a = availability.toLowerCase();
  if (period === "today") return a.includes("heute");
  if (period === "weekend")
    return (
      a.includes("wochenende") || a.includes("freitag") || a.includes("samstag")
    );
  if (period === "next-week") return a.includes("nächste woche");
  return false;
}

const ALL_CATEGORIES = Object.keys(categoryLabels) as OfferCategory[];
const ALL_REGIONS = Object.keys(regionLabels) as OfferRegion[];

export function OfferBrowser({ offers }: { offers: Offer[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<OfferCategory | null>(null);
  const [timePeriod, setTimePeriod] = useState<TimePeriod | null>(null);
  const [region, setRegion] = useState<OfferRegion | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filtered = useMemo(() => {
    return offers.filter((offer) => {
      if (
        search &&
        !offer.title.toLowerCase().includes(search.toLowerCase()) &&
        !offer.partner.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      if (category && offer.category !== category) return false;
      if (timePeriod && !matchesTimePeriod(offer.availability, timePeriod))
        return false;
      if (region && offer.region !== region) return false;
      return true;
    });
  }, [offers, search, category, timePeriod, region]);

  const hasActiveFilters = category || timePeriod || region || search;

  function clearFilters() {
    setSearch("");
    setCategory(null);
    setTimePeriod(null);
    setRegion(null);
  }

  return (
    <>
      {/* Filter bar */}
      <section className="sticky top-0 z-10 bg-white" style={{ borderBottom: "1px solid rgba(27,24,22,0.1)" }}>
        <div className="page-container space-y-3 py-4">
          {/* Row 1: search + view toggle */}
          <div className="flex gap-3">
            <label className="flex min-h-11 flex-1 items-center gap-3 rounded-full px-4 border" style={{ borderColor: "rgba(27,24,22,0.1)" }}>
              <Search className="size-4 shrink-0 text-stone-400" />
              <span className="sr-only">Angebot suchen</span>
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Angebot oder Partner suchen…"
                type="search"
                value={search}
              />
            </label>
            <div className="flex rounded-full overflow-hidden border" style={{ borderColor: "rgba(27,24,22,0.1)" }}>
              <button
                aria-label="Listenansicht"
                className={`flex items-center justify-center px-3.5 transition-colors ${
                  viewMode === "list"
                    ? "bg-stone-900 text-white"
                    : "text-stone-500 hover:bg-stone-50"
                }`}
                onClick={() => setViewMode("list")}
                type="button"
              >
                <ListBullet className="size-4" />
              </button>
              <button
                aria-label="Kartenansicht"
                className={`flex items-center justify-center border-l border-stone-200 px-3.5 transition-colors ${
                  viewMode === "map"
                    ? "bg-stone-900 text-white"
                    : "text-stone-500 hover:bg-stone-50"
                }`}
                onClick={() => setViewMode("map")}
                type="button"
              >
                <MapIcon className="size-4" />
              </button>
            </div>
          </div>

          {/* Row 2: category + zeitraum + region */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Category chips */}
            <div className="flex flex-wrap gap-1.5">
              <button
                className={`rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  category === null
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 text-stone-600 hover:border-stone-400"
                }`}
                onClick={() => setCategory(null)}
                type="button"
              >
                Alle
              </button>
              {ALL_CATEGORIES.map((cat) => {
                const isComingSoon = categoryStatus[cat] === "coming-soon";
                const isActive = category === cat;
                return (
                  <button
                    aria-disabled={isComingSoon}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      isComingSoon
                        ? "cursor-default border-stone-100 text-stone-300"
                        : isActive
                          ? "border-[#ff6b1a] bg-[#ff6b1a] text-white"
                          : "border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                    key={cat}
                    onClick={() => {
                      if (!isComingSoon)
                        setCategory(isActive ? null : cat);
                    }}
                    title={isComingSoon ? "Kommt bald" : undefined}
                    type="button"
                  >
                    {categoryLabels[cat]}
                    {isComingSoon && (
                      <span className="ml-1.5 font-normal normal-case tracking-normal opacity-60">
                        bald
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mx-2 hidden h-4 w-px bg-stone-200 sm:block" />

            {/* Zeitraum quick-picks */}
            <div className="flex gap-1.5">
              {TIME_PERIODS.map(({ value, label }) => (
                <button
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    timePeriod === value
                      ? "border-[#ff6b1a] bg-[#ff6b1a] text-white"
                      : "border-stone-200 text-stone-600 hover:border-stone-400"
                  }`}
                  key={value}
                  onClick={() =>
                    setTimePeriod(timePeriod === value ? null : value)
                  }
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mx-2 hidden h-4 w-px bg-stone-200 sm:block" />

            {/* Region dropdown */}
            <div className="relative">
              <select
                className="appearance-none border border-stone-200 bg-white py-1.5 pl-3.5 pr-8 text-xs font-bold uppercase tracking-wider text-stone-600 outline-none hover:border-stone-400"
                onChange={(e) =>
                  setRegion(
                    e.target.value ? (e.target.value as OfferRegion) : null,
                  )
                }
                value={region ?? ""}
              >
                <option value="">Alle Regionen</option>
                {ALL_REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {regionLabels[r]}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3 -translate-y-1/2 text-stone-400" />
            </div>

            {/* Clear filters */}
            {hasActiveFilters ? (
              <button
                className="ml-auto text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-stone-700"
                onClick={clearFilters}
                type="button"
              >
                Filter löschen
              </button>
            ) : null}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="page-container py-10 lg:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            <span className="font-bold text-stone-800">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "Angebot" : "Angebote"} gefunden
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-24 text-center">
            <p className="font-serif text-3xl text-stone-400">
              Keine Treffer.
            </p>
            <p className="mt-3 text-sm text-stone-400">
              Probiere andere Filter oder lösche die aktuelle Auswahl.
            </p>
            <button
              className="button-secondary mt-6"
              onClick={clearFilters}
              type="button"
            >
              Filter zurücksetzen
            </button>
          </div>
        ) : viewMode === "map" ? (
          <MapView offers={filtered} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
