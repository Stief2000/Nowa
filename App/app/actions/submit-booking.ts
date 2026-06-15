"use server";

import { createClient } from "@/app/lib/supabase/server";

export type BookingInput = {
  offerTitle: string;
  guestName: string;
  guestEmail: string;
  requestedDate?: string;
  message?: string;
};

export type BookingResult =
  | { success: true }
  | { success: false; error: string };

export async function submitBooking(input: BookingInput): Promise<BookingResult> {
  const supabase = await createClient();

  const { error } = await supabase.from("bookings").insert({
    offer_id: null,
    offer_title: input.offerTitle,
    guest_name: input.guestName,
    guest_email: input.guestEmail,
    requested_date: input.requestedDate || null,
    message: input.message || null,
    status: "Ausstehend",
  });

  if (error) {
    console.error("[submitBooking]", error.message);
    return { success: false, error: "Anfrage konnte nicht gespeichert werden. Bitte versuche es erneut." };
  }

  // Send partner notification email if RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "nowa <noreply@joinnowa.com>",
        to: "partner@joinnowa.com",
        subject: `Neue Anfrage: ${input.offerTitle}`,
        html: `
          <h2>Neue Buchungsanfrage auf nowa</h2>
          <p><strong>Angebot:</strong> ${input.offerTitle}</p>
          <p><strong>Gast:</strong> ${input.guestName}</p>
          <p><strong>E-Mail:</strong> ${input.guestEmail}</p>
          ${input.requestedDate ? `<p><strong>Wunschdatum:</strong> ${input.requestedDate}</p>` : ""}
          ${input.message ? `<p><strong>Nachricht:</strong> ${input.message}</p>` : ""}
          <hr />
          <p>Bitte melde dich im <a href="https://app.joinnowa.com/partner/bookings">Partnerbereich</a> an, um die Anfrage zu bearbeiten.</p>
        `,
      });
    } catch (emailError) {
      // Email failure must not block the booking from being saved
      console.error("[submitBooking] email error:", emailError);
    }
  }

  return { success: true };
}
