import Link from "next/link";
import { OfferCard } from "@/app/ui/offer-card";
import { PublicShell } from "@/app/ui/public-shell";
import { ArrowRight, Calendar, Check, Leaf, Sparkles } from "@/app/ui/icons";
import { offers } from "@/app/lib/mock-data";

const benefits = [
  "Handverlesene Rückzugsorte",
  "Kurzfristig verfügbare Termine",
  "Direkt und transparent buchen",
];

const steps = [
  {
    number: "01",
    title: "Auszeit entdecken",
    text: "Finde besondere Day-Spas, Wellnesspakete und Übernachtungen in deiner Nähe.",
  },
  {
    number: "02",
    title: "Termin wählen",
    text: "Sieh auf einen Blick, welche Rückzugsorte kurzfristig verfügbar sind.",
  },
  {
    number: "03",
    title: "Vorfreude genießen",
    text: "Buche deinen Lieblingsplatz einfach und direkt online.",
  },
];

export default function Home() {
  return (
    <PublicShell>
      <section className="overflow-hidden" style={{ borderBottom: "1px solid rgba(27,24,22,0.1)", background: "#f5f1ec" }}>
        <div className="mx-auto grid min-h-[670px] max-w-[1440px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
            <p className="eyebrow">Wellness, wenn du es brauchst</p>
            <h1 className="mt-6 max-w-3xl font-serif text-6xl leading-[0.98] tracking-[-0.06em] text-stone-900 sm:text-7xl xl:text-[92px]">
              Zeit für eine <span className="italic text-[#ff6b1a]">Pause.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
              Entdecke ausgewählte Wellness-Erlebnisse und besondere
              Rückzugsorte, die spontan für dich frei sind.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/offers">
                Angebote entdecken <ArrowRight className="size-4" />
              </Link>
              <Link className="button-secondary" href="/login">
                Für Partner
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-600">
              {benefits.map((benefit) => (
                <li className="flex items-center gap-2" key={benefit}>
                  <Check className="size-4 text-[#ff6b1a]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[520px] overflow-hidden bg-[#d2c3af]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.65),transparent_26%),linear-gradient(145deg,#c7b297_0%,#e5d9c9_49%,#9e7f64_100%)]" />
            <div className="absolute -right-20 top-16 h-72 w-72 rounded-full border border-white/40" />
            <div className="absolute -right-32 top-4 h-[430px] w-[430px] rounded-full border border-white/20" />
            <div className="absolute bottom-0 left-[12%] h-[84%] w-[74%] rounded-t-[46%] bg-[linear-gradient(160deg,rgba(253,249,242,0.9),rgba(168,137,110,0.58))] shadow-[-30px_-10px_80px_rgba(84,55,36,0.12)]" />
            <div className="absolute bottom-0 left-0 h-[38%] w-full bg-[linear-gradient(180deg,rgba(104,82,63,0.03),rgba(78,60,47,0.28))]" />
            <div className="absolute bottom-10 left-10 max-w-xs border border-white/50 bg-white/80 p-5 shadow-xl shadow-stone-800/10 backdrop-blur md:left-12">
              <p className="eyebrow">Heute noch frei</p>
              <p className="mt-3 font-serif text-2xl text-stone-900">
                Kleine Fluchten, große Wirkung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-24">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Für deine nächste Auszeit</p>
            <h2 className="section-title mt-4">Ausgewählte Angebote</h2>
          </div>
          <Link className="text-link" href="/offers">
            Alle Angebote ansehen <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offers.slice(0, 3).map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      <section className="bg-white" id="how-it-works" style={{ borderTop: "1px solid rgba(27,24,22,0.1)", borderBottom: "1px solid rgba(27,24,22,0.1)" }}>
        <div className="page-container grid gap-12 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Einfach abschalten</p>
            <h2 className="section-title mt-4">Deine Pause beginnt hier.</h2>
            <p className="mt-5 max-w-md leading-7 text-stone-600">
              nowa bringt kurzfristig freie Kapazitäten besonderer Hotels und Spas mit
              deiner spontanen Lust auf Erholung zusammen.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div className="border-t border-stone-300 pt-5" key={step.number}>
                <p className="font-mono text-xs tracking-widest text-[#ff6b1a]">
                  {step.number}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-24">
        <div className="grid overflow-hidden rounded-3xl md:grid-cols-3" style={{ gap: 1, background: "rgba(27,24,22,0.08)", boxShadow: "0 18px 48px rgba(27,24,22,0.08)" }}>
          {[
            [Leaf, "Sorgfältig kuratiert", "Nur ausgewählte Wellness-Partner"],
            [Calendar, "Kurzfristig buchbar", "Freie Termine direkt entdecken"],
            [Sparkles, "Besondere Momente", "Zeit, die wirklich dir gehört"],
          ].map(([Icon, title, text]) => (
            <div className="bg-white p-8" key={String(title)}>
              <Icon className="size-5 text-[#ff6b1a]" />
              <h3 className="mt-8 font-serif text-2xl text-stone-900">
                {String(title)}
              </h3>
              <p className="mt-2 text-sm text-stone-600">{String(text)}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
