import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "nowa | Kurzfristig verfügbare Auszeiten",
    template: "%s | nowa",
  },
  description:
    "Entdecke ausgewählte Wellness-Erlebnisse und besondere Rückzugsorte, die spontan für dich frei sind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
