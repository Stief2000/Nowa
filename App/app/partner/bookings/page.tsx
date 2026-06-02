import { bookings } from "@/app/lib/mock-data";
import {
  PageHeading,
  StatusBadge,
  TableHead,
  TableShell,
} from "@/app/ui/workspace-components";

export default function PartnerBookingsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Buchungsübersicht"
        text="Alle Reservierungen für deine veröffentlichten FreiPlätze."
        title="Buchungen"
      />
      <div className="mt-8 flex gap-2">
        {["Alle", "Bestätigt", "Ausstehend", "Abgeschlossen"].map((filter, index) => (
          <button
            className={`border px-3 py-2 text-xs font-bold uppercase tracking-wider ${
              index === 0
                ? "border-stone-800 bg-stone-800 text-white"
                : "border-stone-200 bg-white text-stone-600 hover:border-stone-400"
            }`}
            key={filter}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <section className="mt-4">
        <TableShell>
          <TableHead
            labels={["Buchung", "Gast", "Angebot", "Termin", "Wert", "Status"]}
          />
          <tbody className="divide-y divide-stone-100">
            {bookings.map((booking) => (
              <tr className="text-stone-600" key={booking.id}>
                <td className="px-5 py-4 font-mono text-xs text-stone-500">{booking.id}</td>
                <td className="px-5 py-4 font-bold text-stone-800">{booking.guest}</td>
                <td className="px-5 py-4">{booking.offer}</td>
                <td className="px-5 py-4">{booking.date}</td>
                <td className="px-5 py-4 font-bold text-stone-800">{booking.value}</td>
                <td className="px-5 py-4"><StatusBadge status={booking.status} /></td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </section>
    </>
  );
}
