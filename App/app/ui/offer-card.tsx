import Link from "next/link";
import { ArrowRight, Clock, Location } from "@/app/ui/icons";
import { categoryLabels, type Offer } from "@/app/lib/mock-data";

const tones = {
  sand: "from-[#d9c5a6] via-[#eee2cd] to-[#b4916f]",
  sage: "from-[#afb7a3] via-[#d9d5bd] to-[#7d876f]",
  clay: "from-[#cc9b7b] via-[#e8cbb2] to-[#9a6a54]",
  mist: "from-[#aebfc0] via-[#d7ded8] to-[#789294]",
};

export function OfferVisual({
  offer,
  compact = false,
}: {
  offer: Offer;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tones[offer.tone]} ${
        compact ? "h-20 w-28 shrink-0 rounded-2xl" : "aspect-[1.3/1] rounded-t-3xl"
      }`}
    >
      <div className="absolute -right-[15%] top-[12%] h-[90%] w-[78%] rounded-tl-[80%] bg-white/25" />
      <div className="absolute bottom-0 left-[12%] h-[54%] w-[76%] rounded-t-[48%] bg-stone-100/25" />
      <div className="absolute bottom-0 h-[28%] w-full bg-stone-900/10" />
    </div>
  );
}

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      className="group overflow-hidden bg-white rounded-3xl"
      style={{ boxShadow: "0 18px 48px rgba(27, 24, 22, 0.08)" }}
    >
      <OfferVisual offer={offer} />
      <div className="p-6">
        <p className="eyebrow">{categoryLabels[offer.category]}</p>
        <h3 className="mt-3 font-serif text-[1.65rem] tracking-[-0.035em]" style={{ color: "#1b1816" }}>
          {offer.title}
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider" style={{ color: "#5a5550" }}>
          {offer.partner}
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-xs" style={{ color: "#5a5550" }}>
          <span className="flex items-center gap-1.5">
            <Location className="size-3.5" /> {offer.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" /> {offer.duration}
          </span>
        </div>
        <div className="mt-6 flex items-end justify-between border-t pt-5" style={{ borderColor: "rgba(27,24,22,0.08)" }}>
          <div>
            <p className="text-xs" style={{ color: "#5a5550" }}>ab</p>
            <p className="mt-1 text-lg font-bold" style={{ color: "#1b1816" }}>
              {offer.price} EUR
              {offer.originalPrice ? (
                <span className="ml-2 text-sm font-normal line-through" style={{ color: "#a8a29e" }}>
                  {offer.originalPrice} EUR
                </span>
              ) : null}
            </p>
          </div>
          <Link
            aria-label={`${offer.title} ansehen`}
            className="flex size-10 items-center justify-center rounded-full text-[#ff6b1a] border border-[rgba(255,107,26,0.2)] group-hover:bg-[#ff6b1a] group-hover:text-white group-hover:border-[#ff6b1a]"
            href={`/offers/${offer.id}`}
          >
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
