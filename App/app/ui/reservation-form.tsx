"use client";

import { useState } from "react";
import { Check } from "@/app/ui/icons";
import type { Offer } from "@/app/lib/mock-data";

type FormState = "idle" | "submitting" | "success";

export function ReservationForm({ offer }: { offer: Offer }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  function validate() {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Bitte deinen Namen angeben.";
    if (!email.trim() || !email.includes("@"))
      next.email = "Bitte eine gültige E-Mail-Adresse angeben.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    // Mock submit — replace with real API call once Supabase is wired up
    setTimeout(() => setFormState("success"), 800);
  }

  if (formState === "success") {
    return (
      <div className="rounded-3xl bg-white p-6 sm:p-8" style={{ boxShadow: "0 18px 48px rgba(27,24,22,0.08)" }}>
        <div className="flex size-12 items-center justify-center rounded-full bg-[#fff0e6]">
          <Check className="size-6 text-[#ff6b1a]" />
        </div>
        <h2 className="mt-5 font-serif text-2xl tracking-[-0.03em] text-stone-900">
          Anfrage gesendet.
        </h2>
        <p className="mt-3 leading-7 text-stone-600">
          Wir haben deine Anfrage für{" "}
          <span className="font-bold text-stone-800">{offer.title}</span>{" "}
          erhalten. Der Partner meldet sich in Kürze bei dir.
        </p>
        <div className="mt-6 space-y-2 border-t border-stone-100 pt-6 text-sm text-stone-500">
          <p>
            <span className="font-bold text-stone-700">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold text-stone-700">E-Mail:</span> {email}
          </p>
          {date && (
            <p>
              <span className="font-bold text-stone-700">Wunschdatum:</span>{" "}
              {new Date(date).toLocaleDateString("de-AT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>
        <button
          className="button-secondary mt-6 w-full text-sm"
          onClick={() => {
            setFormState("idle");
            setName("");
            setEmail("");
            setDate("");
            setMessage("");
          }}
          type="button"
        >
          Neue Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8" style={{ boxShadow: "0 18px 48px rgba(27,24,22,0.08)" }}>
      <p className="eyebrow">Jetzt anfragen</p>
      <div className="mt-4 flex items-end justify-between border-b border-stone-100 pb-5">
        <p className="text-sm text-stone-500">Preis pro Person</p>
        <div className="text-right">
          {offer.originalPrice ? (
            <p className="text-sm text-stone-400 line-through">
              {offer.originalPrice} EUR
            </p>
          ) : null}
          <p className="text-3xl font-bold tracking-tight text-stone-900">
            {offer.price} EUR
          </p>
        </div>
      </div>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <label>
          <span className="field-label">
            Name <span className="text-[#ff6b1a]">*</span>
          </span>
          <input
            className="field"
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Name"
            type="text"
            value={name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </label>
        <label>
          <span className="field-label">
            E-Mail <span className="text-[#ff6b1a]">*</span>
          </span>
          <input
            className="field"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.com"
            type="email"
            value={email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </label>
        <label>
          <span className="field-label">Wunschdatum</span>
          <input
            className="field"
            onChange={(e) => setDate(e.target.value)}
            type="date"
            value={date}
          />
        </label>
        <label>
          <span className="field-label">Nachricht (optional)</span>
          <textarea
            className="field min-h-20 resize-y"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Besondere Wünsche oder Fragen…"
            value={message}
          />
        </label>
        <button
          className="button-primary w-full"
          disabled={formState === "submitting"}
          type="submit"
        >
          {formState === "submitting" ? "Wird gesendet…" : "Anfrage absenden"}
        </button>
      </form>
      <p className="mt-4 text-center text-xs leading-5 text-stone-500">
        Noch keine Zahlung. Der Partner kontaktiert dich direkt.
      </p>
    </div>
  );
}
