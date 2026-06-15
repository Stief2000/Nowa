import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  Location,
} from "@/app/ui/icons";
import { OfferVisual } from "@/app/ui/offer-card";
import { PublicShell } from "@/app/ui/public-shell";
import { ReservationForm } from "@/app/ui/reservation-form";
import { categoryLabels, offers, type Offer } from "@/app/lib/mock-data";
import { createClient } from "@/app/lib/supabase/server";

type OfferPageProps = {
  params: Promise<{ id: string }>;
};

// true = mock offer IDs are pre-rendered, real DB UUIDs are rendered on demand
export const dynamicParams = true;

async function findOffer(id: string): Promise<Offer | null> {
  // Try mock data first (slug-based IDs)
  const mock = offers.find((o) => o.id === id);
  if (mock) return mock;

  // Fall back to Supabase (UUID-based IDs from real partners)
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("offers")
      .select("*, partners(name)")
      .eq("id", id)
      .single();

    if (!data) return null;

    return {
      id: data.id as string,
      title: data.title as string,
      partner: (data.partners as { name: string } | null)?.name ?? "Partner",
      location: (data.location as string) ?? "",
      region: ((data.region as string) ?? "bozen") as Offer["region"],
      lat: (data.lat as number) ?? 46.4983,
      lng: (data.lng as number) ?? 11.3548,
      category: data.category as Offer["category"],
      price: data.price as number,
      originalPrice: (data.original_price as number | null) ?? undefined,
      duration: (data.duration as string) ?? "",
      availability: (data.availability as string) ?? "",
      description: (data.description as string) ?? "",
      includes: [],
      tone: "sand" as const,
      status: (data.status as Offer["status"]) ?? "Aktiv",
    };
  } catch (err) {
    console.error("[findOffer]", err);
    return null;
  }
}

export function generateStaticParams() {
  return offers.map((offer) => ({ id: offer.id }));
}

export async function generateMetadata({
  params,
}: OfferPageProps): Promise<Metadata> {
  const { id } = await params;
  const offer = await findOffer(id);

  return {
    title: offer?.title ?? "Angebot",
    description: offer?.description,
  };
}

export default async function OfferDetailPage({ params }: OfferPageProps) {
  const { id } = await params;
  const offer = await findOffer(id);

  if (!offer) {
    notFound();
  }

  return (
    <PublicShell>
      <section style={{ borderBottom: "1px solid rgba(27,24,22,0.1)", background: "#efe2d7" }}>
        <div className="page-container py-5">
          <Link
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-[#ff6b1a]"
            href="/offers"
          >
            <ArrowLeft className="size-4" /> Zurück zu allen Angeboten
          </Link>
        </div>
      </section>
      <section className="page-container grid gap-10 py-10 lg:grid-cols-[1.18fr_0.82fr] lg:py-14">
        <div>
          <OfferVisual offer={offer} />
          <div className="mt-10">
            <p className="eyebrow">{categoryLabels[offer.category]}</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-[-0.06em] text-stone-900 sm:text-6xl">
              {offer.title}
            </h1>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-stone-500">
              {offer.partner}
            </p>
            <div className="mt-7 flex flex-wrap gap-5 border-y border-stone-200 py-4 text-sm text-stone-600">
              <span className="flex items-center gap-2">
                <Location className="size-4 text-stone-400" />
                {offer.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-stone-400" />
                {offer.duration}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="size-4 text-stone-400" />
                {offer.availability}
              </span>
            </div>
            <div className="grid gap-10 py-9 md:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h2 className="font-serif text-3xl tracking-[-0.035em] text-stone-900">
                  Eine Pause, die bleibt.
                </h2>
                <p className="mt-4 leading-7 text-stone-600">
                  {offer.description}
                </p>
              </div>
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-stone-500">
                  Inklusive
                </h2>
                <ul className="mt-4 space-y-3">
                  {offer.includes.map((item) => (
                    <li
                      className="flex gap-3 text-sm leading-6 text-stone-600"
                      key={item}
                    >
                      <Check className="mt-1 size-4 shrink-0 text-[#ff6b1a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <ReservationForm offer={offer} />
        </aside>
      </section>
    </PublicShell>
  );
}
