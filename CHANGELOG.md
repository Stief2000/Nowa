# nowa Changelog

This changelog tracks the shared progress of the nowa workspace.

## 2026-08-05

### Landing Page — Vollständiges Redesign (helles Inspiration-Design)

**Navigation**
* Floating Pill-Nav: `site-nav` transparent, `nav-inner` als weißer Pill mit `border-radius: 100px` und leichtem Schatten
* Nav-Quicklinks 10 % größer (15.4 px) und farblich kräftiger (`#3a3531`)

**Hero**
* Hintergrundbild (`hero-media`), Gradient-Overlay (`hero-overlay`) und Trust-Aside (`hero-aside`) entfernt
* Hero jetzt hell, zentriert, orange `h1`-Headline; kein 2-Spalten-Layout mehr

**Bild-Grid**
* Neuer `hero-gallery`-Block direkt unterhalb des Hero mit 4 Fotos (`stack-tall.jpeg`, `stack-top.jpeg`, `stack-bottom.jpeg`, `mockup-new.jpeg`) als 4-spaltiges Grid (mobil 2×2)

**Mock Card — eigener Abschnitt**
* Mock Card aus dem Hero-Side entfernt und als eigenständige `mockup-showcase`-Section zwischen Gallery und Problem platziert (Text links, Card rechts; mobil gestapelt)

**Hintergrund**
* Einheitlicher Body-Gradient (`radial-gradient` + `linear-gradient 160deg`) zieht durch die gesamte Seite
* Alle `style="background: var(--bg-soft);"` auf Sections entfernt — kein Farbwechsel zwischen Sections mehr

**Karten & Boxen**
* `problem-statement` und `closing-panel`: dunkel-Gradient → weißer Card-Stil (`surface-strong`, `border: var(--line)`)
* Zeilenabstand (`line-height: 1.08`) in Box-Überschriften gesetzt (war zu viel durch `body line-height: 1.55`)

**Layouts**
* `#apply` (Closing + Formular): `1fr 1fr` mit `align-items: stretch` — beide Boxen gleich groß
* FAQ: Heading jetzt zentriert über der Box (Flexbox statt 2-Spalten-Grid)
* `problem-layout` und `comparison-layout`: `align-items: center` für vertikale Zentrierung

**Logo & Brand**
* Logo Nav: 193 px → 105 px; Footer: 211 px → 115 px (mehrere Iterationen: −22 %, dann nochmal −30 %)
* Alle `brand-inline`-Spans durch `<img src="nova.svg" class="brand-img">` ersetzt (skaliert auf `height: 0.62em`)
* JS-Konstanten `brand` und `brandInverse` ebenfalls auf SVG-Img umgestellt

**Typografie & Farbe**
* Body-Fontgröße: 16 px → 17.6 px (+10 %)
* `--muted` von `#5a5550` auf `#3a3531` (kräftiger, besser lesbar)

**Übersetzungen**
* `hero-media` alt-Einträge (DE/IT/EN) entfernt
* `hero-aside`-Einträge (DE/IT/EN) entfernt
* Neue `mockup-showcase`-Section-Head-Einträge (Eyebrow, h2, p) für DE/IT/EN hinzugefügt

## 2026-08-04

### Landing Page — Slogan & Beispielangebot

* Hero-Headline geändert: „Aus freien Kapazitäten neue Buchungschancen machen" → **„Mehr Buchungen aus freien Kapazitäten"** (kürzer, klarer, auf allen drei Sprachen angepasst)
* Beispielangebot im Hero erweitert: Gültigkeitszeitraum jetzt als Von/Bis-Angabe („heute, 10:00 – 18:00 Uhr") statt nur „gültig bis"
* Verfügbare Anzahl im Beispielangebot hinzugefügt: „2 Personen" (war: „begrenzt verfügbar")
* Alle Änderungen in allen drei Sprachversionen (DE / IT / EN) umgesetzt

### Landing Page — Übersetzungen IT/EN (vollständig)

* IT Hero h1 neu: „Più prenotazioni dalle capacità libere." (war: „I posti liberi meritano ospiti.")
* EN Hero h1 neu: „More bookings from free capacity." (war: „Free places deserve guests.")
* IT/EN Hero-Body-Text auf neue Ausrichtung angepasst: breiter als nur Hotels (Aufenthalte, Spa, Packages, Erlebnisse, Aktivitäten)
* „hotellerie" / „hospitality"-Formulierungen im hero-aside durch „strutture turistiche" / „tourism businesses" ersetzt
* Problem-Section IT/EN: neuer Frame „Treffpunkt fehlt" statt „Zimmer = Umsatzverlust"; alle Texte neu
* Solution-Section IT/EN: Eyebrow jetzt „COME FUNZIONA NOWA" / „HOW NOWA WORKS"; h2 ohne eingebetteten Brand-Span; vollständiger Beschreibungstext
* Process-Section IT/EN: Schritt-1-Text um „Beschreibung" und „Anzahl" ergänzt; Schritt 2 heißt jetzt „Definire la visibilità" / „Set visibility"
* Benefits-Section IT/EN: h2/p neu, Feature-1 (Angebote statt nur Zimmer) und Feature-4 (spontane Gäste) vollständig überarbeitet
* Trust-Section IT/EN: Einleitungstext und alle drei Feature-Items auf DE-Stand gebracht
* FAQ Item 1 IT/EN: Beschreibung nicht mehr hotel-only, jetzt alle Angebotstypen genannt
* CTA-Section IT/EN: Mini-Point 1 listet jetzt Angebotstypen statt regionalen Fokus; Mini-Point 3 aktualisiert
* Footer IT/EN: „Regione di lancio" / „Launch region" → „Fase di avvio" / „Launch phase"; Tagline aktualisiert
* Meta-Title und -Description IT/EN: nicht mehr hotel-spezifisch, breiter Tourismus-Fokus
* Orphaned Translation-Einträge entfernt: `.hero-point`, `.hero-note`, `.trust-pill`, `#faq .section-head p` (Elemente existieren nicht mehr im HTML)

### Strategie & Analyse (PDF-Auswertung)

* Produktstrategie-Dokument ausgewertet: Zielkunden breiter als nur Hotellerie (Tourismus, Freizeit, Erlebnisse)
* Webapp-Prioritäten für nächste Implementierungsrunde definiert:
  * Bild-Upload mit Rechtebestätigung (launch-kritisch, fehlt komplett)
  * Angebot bearbeiten (fehlt komplett)
  * Angebot pausieren + Status „Abgelaufen" (Status-System vervollständigen)
  * Gast-Bestätigungs-E-Mail
  * „Morgen"-Filter in der Angebotsübersicht
  * Weitere Kategorien aktivieren (Gastro, Erlebnisse, Aktivitäten)
* Vollständige IT/EN Landingpage-Übersetzung als eigener Schritt geplant

## 2026-06-15

### App — Supabase Integration (Steps 1–5)

Erste vollständige Backend-Integration der nowa Web-App. Mock-Daten für Auth, Angebote und Buchungen wurden durch echte Supabase-Persistenz ersetzt.

#### Infrastruktur

* Supabase-Projekt `nowa` erstellt (Region: EU North / Stockholm)
* DB-Schema definiert und ausgeführt: `profiles`, `partners`, `offers`, `bookings` mit Row Level Security
* RLS-Policies für alle vier Tabellen — Partner sehen nur eigene Daten, Admins sehen alles
* Öffentliche Grants für `anon`-Role auf `offers` und `partners` (Lesezugriff für Gäste)
* Öffentlicher Insert-Grant auf `bookings` (Gäste können ohne Login anfragen)
* Trigger `handle_new_user` erstellt — legt bei jeder Registrierung automatisch einen `profiles`-Eintrag an
* Hilfsfunktion `is_admin()` als `security definer` zur Vermeidung von RLS-Rekursion in Admin-Policies
* Supabase-Client-Utilities angelegt: `app/lib/supabase/client.ts`, `server.ts`, `middleware.ts`
* Next.js `middleware.ts` schützt `/partner/*` und `/admin/*` — Redirect zu `/login` ohne Session
* Auth-Callback-Route `app/auth/callback/route.ts` für E-Mail-Bestätigungslinks

#### Auth

* Login-Seite auf echte Supabase-Auth umgestellt (`signInWithPassword`)
* Nach Login: Rollen-Lookup in `profiles` → Redirect zu `/partner/dashboard` oder `/admin`
* Fehleranzeige bei falschen Zugangsdaten direkt im Formular

#### Persistenz

* `app/actions/submit-booking.ts` — Server Action für Buchungsanfragen (öffentlich, kein Login nötig)
* `app/actions/create-offer.ts` — Server Action für Angebotserstellung (Auth erforderlich, auto-Partner-Anlage)
* `ReservationForm` ersetzt Mock-Timeout durch echten DB-Insert
* Partner Create-Offer-Formular ersetzt Mock-Timeout durch echten DB-Insert
* Partner-Angebotsliste (`/partner/offers`) liest jetzt echte Daten aus Supabase statt Mock-Daten
* Öffentliche Angebotsseite (`/offers`) mergt Mock-Daten mit echten DB-Angeboten
* Angebot-Detailseite unterstützt UUID-basierte Offers aus Supabase (`dynamicParams = true`)

#### Benachrichtigungen

* `resend` installiert
* E-Mail-Versand nach erfolgreicher Buchung in `submit-booking.ts` integriert (best-effort, blockiert nicht bei Fehler)
* Aktivierung durch Setzen von `RESEND_API_KEY` in `.env.local`

#### Fehlerbehebung

* RLS-Rekursion auf `profiles`-Tabelle behoben (Self-referentielle Policy durch `security definer`-Funktion ersetzt)
* Fehlende `GRANT`-Berechtigungen für `anon`- und `authenticated`-Roles nachgetragen
* Fehlende `SELECT`-Berechtigung für `anon` auf `partners` hinzugefügt (für öffentliche Angebots-Joins)

## 2026-06-04

### Landing Page

* Replaced the active landing-page photography with the new image set
* Finalized the new SVG logo integration with tighter framing and better sizing

### Documentation

* Added `IMAGE_SOURCES.md` as an internal-only record for landing-page image origins and license traceability
* Documented that visible image attribution is currently not shown on the public landing page
* Excluded the local raw image source folder `Landingpage/Bilder neu/` from Git tracking

## 2026-06-01

### Workspace

* Split the project into a shared root workspace with `Landingpage/` and `App/`
* Promoted project documentation to the repository root as the canonical source of truth

### Brand

* Renamed the product from `FreiPlatz` to `nowa`
* Defined the new slogan: `now available`
* Repositioned the product away from a broad multi-service marketplace toward hospitality and wellness availability
* Sharpened the brand tone toward a calmer, more premium and more regional hospitality identity

### Landing Page

* Rebuilt the landing page around the `nowa` brand
* Rewrote the messaging to focus on hotels, wellness hotels, day-spa and short-stay offers
* Removed the old multi-service positioning around gastronomy, beauty, fitness and general services
* Reworked the sections for hero, positioning, offer formats, FAQ and partner onboarding
* Shifted the landing page to a clear partner-first perspective for hospitality businesses
* Clarified that `nowa` is not a Booking.com replacement but an additional channel for kurzfristige Verfuegbarkeiten
* Refined the hero messaging from only free rooms toward broader hotel offers including rooms, spa and packages
* Added stronger differentiation around cancellations, rest capacity, low-demand days and short-notice visibility
* Reduced repeated card patterns and moved several sections toward calmer list and comparison layouts
* Introduced more consistent brand treatment for `nowa` inside body copy
* Adjusted the accent color to a brighter, stronger orange
* Iterated on the hero layout to reduce overlap between headline and example offer mockup
* Clarified the regional framing from "South Tyrol only" to "starts in South Tyrol, not limited to a purely regional concept"
* Removed redundant example CTA buttons where the example was already visible directly beside the copy
* Repaired the broken landing-page text encoding and resaved the file cleanly as UTF-8
* Kept final hero spacing and last copy polish as open landing-page refinement items

### Go-Live Planning

* Defined the preferred lean launch stack as Domain + Cloudflare DNS + Vercel Hobby + Cloudflare Email Routing
* Confirmed that this setup is intended as a low-cost starting point and can be upgraded later
* Defined the likely upgrade path toward Google Workspace or Microsoft 365 for full business mail
* Documented that incoming requests should not only arrive by mail but also be trackable for later analysis
* Defined a pragmatic MVP intake flow via routed domain addresses plus a structured log such as Google Sheets or Airtable

### App

* Initialized the Next.js app workspace
* Confirmed the initial MVP route structure exists
* Kept the app runnable with mock data
* Parked the next app implementation steps until the new brand and landing page direction are stable

### Deferred App Work

* Mock create-offer flow
* Mock reservation-request flow
* Shared type and interaction cleanup
* Encoding fixes in app UI copy

## 2026-06-02

### Landing Page

* Started a dedicated real-device mobile review of the landing page
* Set up local WLAN testing for the landing page through a small local HTTP server
* Tightened the mobile hero layout with smaller typography, reduced spacing and a more compact mock card
* Reworked the hero line grouping so the mobile headline breaks more intentionally instead of looking randomly wrapped
* Removed the broken client-side text-normalization approach after it introduced visible mojibake in the browser
* Continued a full landing-page cleanup pass across hero, comparison, FAQ, closing CTA, form and footer
* Removed remaining visible mojibake from the most important live sections
* Shifted the landing-page accent direction from orange into a stronger green brand direction
* Improved dark-surface brand treatment so `now` stays green while the trailing `a` remains readable
* Fixed comparison-section brand styling so `nowa` no longer renders like forced uppercase `NOWA`
* Kept `nowa` more natural inside FAQ and body-copy sentences instead of letting it float as a separate block

### Go-Live Preparation

* Evaluated a lean public domain path around Cloudflare plus GitHub Pages
* Ruled out `nowa.com` as a straightforward available registration target
* Chose `nowa-app.com` as the current preferred domain candidate
* Decided against using a private personal mailbox for project operations
* Prepared the workspace for a future shared GitHub repository named `Nowa`
* Removed the temporary `/App/` ignore so the full workspace can move into one common repository
* Added the local `ProtonLogin.png` setup screenshot to `.gitignore` so it does not pollute repo history
* Consolidated the Git remotes on the current machine so only the shared `Nowa` repository remains as `origin`
* Documented a follow-up reminder to apply the same Git remote cleanup on the second computer before continuing work there

### Open Follow-Up

* Final full-page landing-page sanity check before the public domain goes live
* Create and connect the new shared GitHub repository `Nowa`
* Complete Cloudflare domain registration and point the landing page live once the domain is ready
* Repeat the same Git remote cleanup on the second computer:
  `git remote remove origin`
  `git remote rename nowa origin`
  `git branch --set-upstream-to=origin/master master`
  `git pull`

## 2026-06-03

### Go-Live

* Connected the shared GitHub repository `Stief2000/Nowa` to Vercel
* Deployed the static landing page from `Landingpage/` as a Vercel production project
* Connected the purchased public domain `joinnowa.com`
* Used Cloudflare DNS auto-configuration through Vercel for the custom domain
* Confirmed the landing page is publicly online
* Confirmed both `joinnowa.com` and `www.joinnowa.com` return `200 OK` from Vercel
* Confirmed the partner inquiry form is connected to Formspree and accepts submissions successfully
* Added canonical URL, social preview metadata and a favicon for the public landing page
* Added a German / Italian / English language toggle to the static landing page
* Added multilingual legal notice and privacy pages with footer links
* Added a privacy notice below the partner inquiry form
* Fixed the example-offer card translations so the lower detail rows now switch correctly in German, Italian and English
* Changed the example-offer price from `ab / da / from` wording to a fixed displayed price
* Aligned the working mode so landing-page changes should be committed and pushed promptly to keep local and live review in sync

### Follow-Up

* Run a final live-domain sanity pass on desktop and mobile
* Update legal pages once Partita IVA, PEC, Registro Imprese or a final legal form exist
* After pulling on the second computer, immediately repeat the Git remote cleanup there so only the shared `Nowa` repository remains as `origin`

### Session Handoff

* Current public landing page is live at `https://joinnowa.com`
* Repository `Stief2000/Nowa` is connected to Vercel and deploys from `master`
* Static landing page source is `Landingpage/`
* Legal pages currently reflect the project-in-preparation status and must be updated when the final legal setup exists
* Next practical work: live desktop/mobile sanity pass, then resume app MVP work only after the landing page is considered stable

## 2026-06-11

### App MVP — Phase 1 bis 4

Erste vollständige Implementierungsrunde der nowa Web-App. Alle vier Phasen abgeschlossen, Build sauber.

#### Phase 1 — Branding und Datenbasis

* Renamed all remaining `FreiPlatz` references in the app to `nowa` (logo, footer, workspace shell, metadata, page copy)
* Updated app brand color from `#a46245` to `#ff6b1a` to match the live landing page across all files
* Replaced the old three-category system (`day_spa`, `overnight_stay`, `wellness_package`) with a new four-category structure: `overnight`, `wellness`, `gastro`, `other`
* Set `gastro` and `other` as `coming-soon` in code — visible in the UI as disabled chips, no extra launch step needed when the time comes
* Added `region` field and `lat`/`lng` coordinates to all six mock offers (South Tyrol locations)
* Added `regionLabels` map for the six Südtirol regions: Bozen, Meran, Brixen, Vinschgau, Unterland, Ritten
* Added `categoryStatus` map to control active vs coming-soon display per category

#### Phase 2 — Customer Offer Discovery

* Converted the offers page from a static server component into a server shell with an extracted `OfferBrowser` client component
* Implemented three functional filters with client-side state: Kategorie (chips), Zeitraum (quick-picks: Heute / Wochenende / Nächste Woche), Region (dropdown)
* Coming-soon categories rendered as disabled, greyed-out chips with "bald" label
* Added text search over offer title and partner name
* Added clear-filters button when any filter is active
* Added List / Map view toggle
* Created `MapView` client component using Leaflet and OpenStreetMap (no API key required)
* Map shows orange `divIcon` pins for all currently filtered offers
* Clicking a pin opens a popup with offer title, partner, price and a direct link to the detail page
* `MapView` loaded via `next/dynamic` with `ssr: false` to avoid server-side rendering issues with Leaflet
* Added `ListBullet` and `MapIcon` SVG icons to `icons.tsx`

#### Phase 3 — Reservierungsanfrage

* Created `ReservationForm` client component with controlled fields: Name, E-Mail, Wunschdatum, optionale Nachricht
* Added client-side validation for required fields (name, email format)
* Submit handler uses a mock 800ms timeout and transitions to a confirmation screen showing the submitted data
* Confirmation screen includes a "Neue Anfrage stellen" reset option
* Replaced the static offer-detail sidebar with the live `ReservationForm` component

#### Phase 4 — Partner Create-Offer

* Converted `partner/offers/new/page.tsx` to a client component with fully controlled form fields
* Added validation for required fields (title, category, price)
* Submit transitions to a success screen with the offer title and links back to offer list or to create another offer
* "Als Entwurf speichern" skips validation and submits directly as draft

#### Tech

* Installed `leaflet` and `@types/leaflet`
* All 19 app routes build without TypeScript errors

### App — Design System Alignment mit Landingpage

* Aligned full app design system to match landing-page brand tokens: colors, typography, buttons, cards, nav
* Replaced Geist font imports with system font stack (Segoe UI / Helvetica Neue) matching landing page
* Rebuilt `globals.css` with CSS custom properties: `--background`, `--foreground`, `--accent`, `--surface`, `--shadow`, `--radius`
* Replaced flat-border cards with `24px border-radius` + `box-shadow` style throughout
* Updated buttons to pill shape (`border-radius: 999px`) with orange drop shadow on primary
* Replaced `Logo` component to use `nova.svg` from `public/` folder via `next/image`
* Updated nav to frosted glass style and footer to dark forest background matching landing page
* Copied `nova.svg` wordmark from `Landingpage/` to `App/public/`

### App — Design Refinement

* Orange-Einsatz auf interaktive Elemente und Preise reduziert — Eyebrow-Labels von orange auf dunkelgrau (`#6b6560`)
* Metadaten-Icons (Location, Clock, Calendar) auf Detailseite von orange auf grau
* Globaler Hintergrund von `#f5f1ec` auf `#f7f4f0` aufgehellt
* Hero-Linkspalte vollständig dunkel (`#1b1816`) mit weißer Typografie — oranger Akzent auf Headline-Italic bleibt
* Hero-Rechtsspalte auf helles Creme (`#f0ebe2`) mit luftigeren Gradienten aufgehellt
* Nav-Balken vollständig dunkel (`#1b1816`), kein Frosted-Glass mehr
* Logo in Nav auf `size="lg"` (240px) vergrößert
* „Auszeit finden" CTA-Button aus der Nav entfernt
* „Partner-Login" aus der Nav entfernt — bleibt im Footer für Partner zugänglich
* Alle vier Offer-Card-Gradients auf einheitlichen warmen Dunkelton vereinheitlicht (`#2c2825 → #3e3832 → #211e1b`)


## 2026-06-04

### Brand

* Archived the current green landing-page direction in Git branch `archive/green-landingpage-2026-06-04`
* Returned the active landing page to a stronger orange brand direction based on market-analysis feedback
* Updated the CSS wordmark so `nowa` appears as one orange logo with the slogan `now available`
* Reworked visible brand accents around orange, anthracite, black, white and warm greys
* Updated the landing page, legal pages and favicon to match the orange direction without rebuilding the layout

### Follow-Up

* Run a final desktop and mobile sanity pass before pushing the orange brand pass live
