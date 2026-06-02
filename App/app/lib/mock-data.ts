export type OfferCategory = "day_spa" | "overnight_stay" | "wellness_package";

export type Offer = {
  id: string;
  title: string;
  partner: string;
  location: string;
  category: OfferCategory;
  price: number;
  originalPrice?: number;
  duration: string;
  availability: string;
  description: string;
  includes: string[];
  tone: "sand" | "sage" | "clay" | "mist";
  status: "Aktiv" | "Entwurf" | "Pausiert";
};

export const categoryLabels: Record<OfferCategory, string> = {
  day_spa: "Day Spa",
  overnight_stay: "Übernachtung",
  wellness_package: "Wellnesspaket",
};

export const offers: Offer[] = [
  {
    id: "forest-reset",
    title: "Forest Reset Day Spa",
    partner: "Naturhotel Waldruhe",
    location: "Oberbozen, Südtirol",
    category: "day_spa",
    price: 89,
    originalPrice: 118,
    duration: "1 Tag",
    availability: "Heute & morgen",
    description:
      "Ein ruhiger Wellnesstag über den Dächern von Bozen. Mit Infinity-Pool, Waldsauna und einem leichten Mittagsgericht aus der Naturküche.",
    includes: [
      "Day-Spa-Zugang von 10 bis 19 Uhr",
      "Infinity-Pool und Saunalandschaft",
      "Leichtes Mittagsgericht",
      "Wellness-Tasche mit Bademantel",
    ],
    tone: "sage",
    status: "Aktiv",
  },
  {
    id: "alpine-slowdown",
    title: "Alpine Slowdown",
    partner: "Hotel Miramonti",
    location: "Meran, Südtirol",
    category: "overnight_stay",
    price: 219,
    originalPrice: 289,
    duration: "1 Nacht",
    availability: "Dieses Wochenende",
    description:
      "Eine Nacht in den Bergen mit spätem Frühstück, Spa-Zugang und weitem Blick ins Tal. Für eine Auszeit, die ein bisschen länger nachwirkt.",
    includes: [
      "Eine Übernachtung für zwei Personen",
      "Frühstück bis 11 Uhr",
      "Spa-Zugang am An- und Abreisetag",
      "Late Check-out nach Verfügbarkeit",
    ],
    tone: "sand",
    status: "Aktiv",
  },
  {
    id: "quiet-morning",
    title: "Quiet Morning Ritual",
    partner: "Lana Garden Spa",
    location: "Lana, Südtirol",
    category: "wellness_package",
    price: 129,
    duration: "4 Stunden",
    availability: "Noch 3 Termine",
    description:
      "Ein stiller Vormittag mit Massage, Kräuterdampfbad und Gartenfrühstück. Eine kleine Unterbrechung, die den Tag neu sortiert.",
    includes: [
      "50-minütige Ganzkörpermassage",
      "Kräuterdampfbad und Ruhegarten",
      "Regionales Gartenfrühstück",
      "Tee- und Wasserstation",
    ],
    tone: "clay",
    status: "Aktiv",
  },
  {
    id: "lake-and-sauna",
    title: "Lake & Sauna Escape",
    partner: "Seehaus Kaltern",
    location: "Kaltern, Südtirol",
    category: "day_spa",
    price: 72,
    originalPrice: 96,
    duration: "1 Tag",
    availability: "Freitag bis Sonntag",
    description:
      "Ein klarer Tag am See mit privatem Steg, Saunahaus und großzügigen Ruhezonen direkt am Wasser.",
    includes: [
      "Zugang zum Seehaus von 9 bis 18 Uhr",
      "Saunahaus und privater Steg",
      "Snackplatte am Nachmittag",
      "Badetasche für den Aufenthalt",
    ],
    tone: "mist",
    status: "Aktiv",
  },
  {
    id: "vineyard-hideaway",
    title: "Vineyard Hideaway",
    partner: "Ansitz Rielinger",
    location: "Ritten, Südtirol",
    category: "overnight_stay",
    price: 184,
    duration: "1 Nacht",
    availability: "Nächste Woche",
    description:
      "Ein stilles Zimmer zwischen Reben, ein kleines Spa und ein Frühstück mit Produkten vom Hof.",
    includes: [
      "Eine Übernachtung für zwei Personen",
      "Hof-Frühstück",
      "Zugang zum kleinen Spa",
      "Ein Glas Hauswein zur Ankunft",
    ],
    tone: "clay",
    status: "Entwurf",
  },
  {
    id: "mountain-recovery",
    title: "Mountain Recovery",
    partner: "Naturhotel Waldruhe",
    location: "Oberbozen, Südtirol",
    category: "wellness_package",
    price: 148,
    originalPrice: 172,
    duration: "5 Stunden",
    availability: "Mittwoch & Donnerstag",
    description:
      "Regeneration nach aktiven Tagen: Sportmassage, Saunagang und ein spätes Mittagessen mit Blick in die Berge.",
    includes: [
      "60-minütige Sportmassage",
      "Zugang zu Pool und Saunen",
      "Regenerations-Lunch",
      "Ruheraum mit Bergblick",
    ],
    tone: "sage",
    status: "Pausiert",
  },
];

export const partnerOffers = offers.filter(
  (offer) => offer.partner === "Naturhotel Waldruhe",
);

export const bookings = [
  {
    id: "FP-24051",
    guest: "Anna Hofer",
    offer: "Forest Reset Day Spa",
    date: "04. Juni 2026",
    value: "178 EUR",
    status: "Bestätigt",
  },
  {
    id: "FP-24050",
    guest: "Lukas Frei",
    offer: "Mountain Recovery",
    date: "05. Juni 2026",
    value: "148 EUR",
    status: "Bestätigt",
  },
  {
    id: "FP-24047",
    guest: "Mia Bauer",
    offer: "Forest Reset Day Spa",
    date: "02. Juni 2026",
    value: "89 EUR",
    status: "Ausstehend",
  },
  {
    id: "FP-24042",
    guest: "Daniel Gruber",
    offer: "Forest Reset Day Spa",
    date: "30. Mai 2026",
    value: "178 EUR",
    status: "Abgeschlossen",
  },
];

export const partners = [
  {
    name: "Naturhotel Waldruhe",
    location: "Oberbozen",
    offers: 4,
    bookings: 31,
    status: "Aktiv",
  },
  {
    name: "Hotel Miramonti",
    location: "Meran",
    offers: 3,
    bookings: 24,
    status: "Aktiv",
  },
  {
    name: "Lana Garden Spa",
    location: "Lana",
    offers: 2,
    bookings: 18,
    status: "Aktiv",
  },
  {
    name: "Seehaus Kaltern",
    location: "Kaltern",
    offers: 1,
    bookings: 12,
    status: "Prüfung",
  },
  {
    name: "Ansitz Rielinger",
    location: "Ritten",
    offers: 1,
    bookings: 8,
    status: "Aktiv",
  },
];
