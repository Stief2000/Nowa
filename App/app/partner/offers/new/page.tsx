import Link from "next/link";
import { ArrowLeft } from "@/app/ui/icons";
import { PageHeading } from "@/app/ui/workspace-components";

export default function NewOfferPage() {
  return (
    <>
      <Link
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-[#a46245]"
        href="/partner/offers"
      >
        <ArrowLeft className="size-4" /> Zurück zu Angeboten
      </Link>
      <div className="mt-6">
        <PageHeading
          eyebrow="Angebotsverwaltung"
          text="Erstelle einen neuen FreiPlatz für deine Gäste."
          title="Neues Angebot"
        />
      </div>
      <form className="mt-9 grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <section className="border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl tracking-[-0.03em] text-stone-900">
              Grundinformationen
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="field-label">Titel des Angebots</span>
                <input className="field" placeholder="z. B. Forest Reset Day Spa" />
              </label>
              <label>
                <span className="field-label">Kategorie</span>
                <select className="field" defaultValue="">
                  <option disabled value="">Bitte wählen</option>
                  <option value="day_spa">Day Spa</option>
                  <option value="overnight_stay">Übernachtung</option>
                  <option value="wellness_package">Wellnesspaket</option>
                </select>
              </label>
              <label>
                <span className="field-label">Dauer</span>
                <input className="field" placeholder="z. B. 1 Tag" />
              </label>
              <label className="sm:col-span-2">
                <span className="field-label">Beschreibung</span>
                <textarea
                  className="field min-h-32 resize-y"
                  placeholder="Beschreibe das Erlebnis kurz und einladend."
                />
              </label>
            </div>
          </section>
          <section className="border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl tracking-[-0.03em] text-stone-900">
              Preis & Verfügbarkeit
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label>
                <span className="field-label">Preis pro Person</span>
                <input className="field" placeholder="0,00 EUR" />
              </label>
              <label>
                <span className="field-label">Vergleichspreis optional</span>
                <input className="field" placeholder="0,00 EUR" />
              </label>
              <label>
                <span className="field-label">Verfügbar ab</span>
                <input className="field" type="date" />
              </label>
              <label>
                <span className="field-label">Verfügbar bis</span>
                <input className="field" type="date" />
              </label>
            </div>
          </section>
        </div>
        <aside className="self-start border border-stone-200 bg-white p-6 xl:sticky xl:top-6">
          <p className="eyebrow">Veröffentlichen</p>
          <p className="mt-4 text-sm leading-6 text-stone-600">
            Du kannst dein Angebot als Entwurf speichern und später ergänzen.
          </p>
          <button className="button-primary mt-6 w-full" type="button">
            Angebot veröffentlichen
          </button>
          <button className="button-secondary mt-3 w-full" type="button">
            Als Entwurf speichern
          </button>
        </aside>
      </form>
    </>
  );
}
