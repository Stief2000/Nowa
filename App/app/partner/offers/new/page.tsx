"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Check } from "@/app/ui/icons";
import { PageHeading } from "@/app/ui/workspace-components";
import { categoryLabels, type OfferCategory } from "@/app/lib/mock-data";

type FormState = "idle" | "submitting" | "success";

const ACTIVE_CATEGORIES: OfferCategory[] = ["overnight", "wellness"];

export default function NewOfferPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<OfferCategory | "">("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [comparePrice, setComparePrice] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableTo, setAvailableTo] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const next: Record<string, string> = {};
    if (!title.trim()) next.title = "Titel ist erforderlich.";
    if (!category) next.category = "Bitte eine Kategorie wählen.";
    if (!price || isNaN(Number(price)))
      next.price = "Bitte einen gültigen Preis eingeben.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent, asDraft = false) {
    e.preventDefault();
    if (!asDraft && !validate()) return;
    setFormState("submitting");
    // Mock submit — will be replaced with Supabase insert
    setTimeout(() => setFormState("success"), 800);
  }

  if (formState === "success") {
    return (
      <>
        <Link
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-[#ff6b1a]"
          href="/partner/offers"
        >
          <ArrowLeft className="size-4" /> Zurück zu Angeboten
        </Link>
        <div className="mt-16 flex flex-col items-center py-12 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-[#fff0e6]">
            <Check className="size-7 text-[#ff6b1a]" />
          </div>
          <h2 className="mt-6 font-serif text-4xl tracking-[-0.04em] text-stone-900">
            Angebot gespeichert.
          </h2>
          <p className="mt-3 max-w-md leading-7 text-stone-600">
            <span className="font-bold text-stone-800">{title || "Das Angebot"}</span>{" "}
            wurde erfolgreich angelegt und kann jetzt überprüft und
            veröffentlicht werden.
          </p>
          <div className="mt-8 flex gap-3">
            <Link className="button-primary" href="/partner/offers">
              Alle Angebote ansehen
            </Link>
            <button
              className="button-secondary"
              onClick={() => {
                setFormState("idle");
                setTitle("");
                setCategory("");
                setDuration("");
                setDescription("");
                setPrice("");
                setComparePrice("");
                setAvailableFrom("");
                setAvailableTo("");
                setErrors({});
              }}
              type="button"
            >
              Neues Angebot
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Link
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-[#ff6b1a]"
        href="/partner/offers"
      >
        <ArrowLeft className="size-4" /> Zurück zu Angeboten
      </Link>
      <div className="mt-6">
        <PageHeading
          eyebrow="Angebotsverwaltung"
          text="Erstelle ein neues Angebot für deine Gäste auf nowa."
          title="Neues Angebot"
        />
      </div>
      <form
        className="mt-9 grid gap-6 xl:grid-cols-[1fr_320px]"
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          <section className="border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl tracking-[-0.03em] text-stone-900">
              Grundinformationen
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="field-label">
                  Titel <span className="text-[#ff6b1a]">*</span>
                </span>
                <input
                  className="field"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="z. B. Forest Reset Day Spa"
                  value={title}
                />
                {errors.title && (
                  <p className="mt-1 text-xs text-red-500">{errors.title}</p>
                )}
              </label>
              <label>
                <span className="field-label">
                  Kategorie <span className="text-[#ff6b1a]">*</span>
                </span>
                <select
                  className="field"
                  onChange={(e) =>
                    setCategory(e.target.value as OfferCategory | "")
                  }
                  value={category}
                >
                  <option value="">Bitte wählen</option>
                  {ACTIVE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {categoryLabels[cat]}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-xs text-red-500">{errors.category}</p>
                )}
              </label>
              <label>
                <span className="field-label">Dauer</span>
                <input
                  className="field"
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="z. B. 1 Tag"
                  value={duration}
                />
              </label>
              <label className="sm:col-span-2">
                <span className="field-label">Beschreibung</span>
                <textarea
                  className="field min-h-32 resize-y"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Beschreibe das Erlebnis kurz und einladend."
                  value={description}
                />
              </label>
            </div>
          </section>
          <section className="border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl tracking-[-0.03em] text-stone-900">
              Preis &amp; Verfügbarkeit
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label>
                <span className="field-label">
                  Preis pro Person <span className="text-[#ff6b1a]">*</span>
                </span>
                <input
                  className="field"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0,00 EUR"
                  type="number"
                  min="0"
                  step="0.01"
                  value={price}
                />
                {errors.price && (
                  <p className="mt-1 text-xs text-red-500">{errors.price}</p>
                )}
              </label>
              <label>
                <span className="field-label">Vergleichspreis (optional)</span>
                <input
                  className="field"
                  onChange={(e) => setComparePrice(e.target.value)}
                  placeholder="0,00 EUR"
                  type="number"
                  min="0"
                  step="0.01"
                  value={comparePrice}
                />
              </label>
              <label>
                <span className="field-label">Verfügbar ab</span>
                <input
                  className="field"
                  onChange={(e) => setAvailableFrom(e.target.value)}
                  type="date"
                  value={availableFrom}
                />
              </label>
              <label>
                <span className="field-label">Verfügbar bis</span>
                <input
                  className="field"
                  onChange={(e) => setAvailableTo(e.target.value)}
                  type="date"
                  value={availableTo}
                />
              </label>
            </div>
          </section>
        </div>
        <aside className="self-start border border-stone-200 bg-white p-6 xl:sticky xl:top-6">
          <p className="eyebrow">Veröffentlichen</p>
          <p className="mt-4 text-sm leading-6 text-stone-600">
            Du kannst dein Angebot als Entwurf speichern und später ergänzen.
          </p>
          <button
            className="button-primary mt-6 w-full"
            disabled={formState === "submitting"}
            type="submit"
          >
            {formState === "submitting" ? "Wird gespeichert…" : "Angebot veröffentlichen"}
          </button>
          <button
            className="button-secondary mt-3 w-full"
            disabled={formState === "submitting"}
            onClick={(e) => handleSubmit(e, true)}
            type="button"
          >
            Als Entwurf speichern
          </button>
        </aside>
      </form>
    </>
  );
}
