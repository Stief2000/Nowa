"use server";

import { createClient } from "@/app/lib/supabase/server";
import { redirect } from "next/navigation";

export type CreateOfferInput = {
  title: string;
  category: string;
  description?: string;
  duration?: string;
  price: number;
  originalPrice?: number;
  availableFrom?: string;
  availableTo?: string;
  status: "Aktiv" | "Entwurf";
};

export type CreateOfferResult =
  | { success: true; offerId: string }
  | { success: false; error: string };

export async function createOffer(
  input: CreateOfferInput
): Promise<CreateOfferResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Look up partner record; auto-create one if missing (first-time setup)
  let { data: partner } = await supabase
    .from("partners")
    .select("id")
    .eq("profile_id", user.id)
    .single();

  if (!partner) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("display_name")
      .eq("id", user.id)
      .single();

    const { data: newPartner, error: partnerError } = await supabase
      .from("partners")
      .insert({
        profile_id: user.id,
        name: profile?.display_name ?? user.email ?? "Unbekannter Partner",
        approved: false,
      })
      .select("id")
      .single();

    if (partnerError || !newPartner) {
      console.error("[createOffer] partner insert:", partnerError?.message);
      return { success: false, error: "Partnerprofil konnte nicht erstellt werden." };
    }

    partner = newPartner;
  }

  const { data: offer, error } = await supabase
    .from("offers")
    .insert({
      partner_id: partner.id,
      title: input.title,
      category: input.category,
      description: input.description || null,
      duration: input.duration || null,
      price: input.price,
      original_price: input.originalPrice || null,
      availability: input.availableFrom
        ? `${input.availableFrom}${input.availableTo ? ` – ${input.availableTo}` : ""}`
        : null,
      active: input.status === "Aktiv",
      status: input.status,
    })
    .select("id")
    .single();

  if (error || !offer) {
    console.error("[createOffer]", error?.message);
    return { success: false, error: "Angebot konnte nicht gespeichert werden. Bitte versuche es erneut." };
  }

  return { success: true, offerId: offer.id };
}
