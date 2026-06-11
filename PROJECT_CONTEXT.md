# nowa Project Context

## Workspace Structure

This repository is the shared workspace for the nowa project.

Current top-level structure:

* `Landingpage/` - marketing and partner landing page
* `App/` - product web app

Root documentation is the canonical source of truth for the full project.

Additional internal documentation:

* `IMAGE_SOURCES.md` - internal-only image source and license traceability for landing-page assets

## Brand

Project name:

* `nowa`

Slogan:

* `now available`

Brand intent:

* modern
* calm
* premium
* regional in tone
* trustworthy

Active brand color direction:

* strong orange as the primary commercial accent
* supported by white, anthracite, black and warm greys
* the previous green landing-page direction is archived in Git branch `archive/green-landingpage-2026-06-04`

## Image Source Handling

Landing-page image attribution is currently handled internally, not visibly on the website.

Current rule:

* keep image source tracking in `IMAGE_SOURCES.md`
* do not show attribution text on the landing page unless a specific license requires it
* keep raw source material in `Landingpage/Bilder neu/` as a local working folder, excluded from Git
* keep corrected original filenames where they help traceability

## Product Vision

nowa is a platform for kurzfristig verfuegbare Angebote.

The current market entry is focused on hospitality businesses that want to make spontaneous availability visible in a clean, controlled and premium way.

The public launch language currently starts with South Tyrol, but the product is not meant to stay limited to a purely regional concept forever.

Longer term, nowa can expand into adjacent short-notice verticals such as wellness, gastronomy, experiences and services. That expansion should be kept in mind structurally, but it is not the foreground message right now.

## Current Product Focus

The current focus is intentionally narrow and partner-first:

* Hotels
* Pensionen
* Apartments
* Garni-Betriebe
* kleine und mittlere touristische Betriebe
* familiengefuehrte hospitality businesses

Current offer logic should cover more than only rooms, for example:

* kurzfristig freie Zimmer
* Stornierungen
* Restkapazitaeten
* Midweek-Luecken
* Last-Minute-Aufenthalte
* Spa & Stay combinations
* Packages and other kurzfristig verfuegbare Hotelangebote

Not in current landing-page focus:

* broad multi-service marketplace positioning
* standalone beauty, salon or fitness messaging
* consumer-first messaging
* "everything for everyone" marketplace language

## Product Positioning

nowa is not a Booking.com clone.

Core idea:

* classic booking platforms show everything
* nowa shows what is kurzfristig verfuegbar

nowa should be presented as:

* a focused channel for short-term availability
* an addition to website, Booking and channel manager
* a simple way to communicate spontaneous capacity
* a premium and regional partner product

Avoid claims such as:

* guaranteed more bookings
* guaranteed more revenue
* always full occupancy

Prefer realistic language such as:

* can create additional visibility
* enables short-term booking opportunities
* helps make free capacity easier to find
* supports partners in communicating spontaneous availability

Core partner message:

* `Verwandeln Sie kurzfristig freie Hotelangebote in neue Buchungschancen.`

## Primary Audience

The landing page currently speaks primarily to partner businesses, not end customers.

They should understand within a few seconds:

1. what problem nowa solves
2. why it matters for their business
3. how simple the workflow is
4. why they should register interest, request a demo or start as a partner

Typical partner pain points:

* kurzfristige Stornierungen
* freie Zimmer trotz grundsaetzlich guter Auslastung
* schwaechere Tage unter der Woche
* Luecken in der Nebensaison
* Restkapazitaeten, die auf der eigenen Website kaum sichtbar werden
* hoher Aufwand fuer spontane Aktionen auf klassischen Plattformen
* verlorene Umsatzchancen durch freie Kapazitaeten

## Landing Page Direction

The landing page is currently being refined as a premium B2B / tourism entry point for hospitality partners.

Content priorities:

* strong hero with immediate partner relevance
* compact problem statement
* simple solution framing
* easy 3-step process
* clear benefits without too much text
* example offer mockup
* calm comparison against classic booking platforms
* trust and FAQ
* strong closing CTA

UX principles:

* little text, high clarity
* self-explanatory sections
* generous spacing and clean page margins
* mobile-first responsiveness
* high contrast and professional typography
* consistent CTA treatment
* no "boxes inside boxes" overload

Visual direction:

* premium
* calm
* direct
* hospitality-first
* strong orange brand accent with neutral white, grey, anthracite and black support colors

The brand name `nowa` should be visually emphasized in body copy where relevant so it does not disappear inside longer text.

## Current Landing Page Status

Already done:

* rebrand from FreiPlatz to `nowa - now available`
* reposition away from a broad multi-service marketplace
* rewrite around hospitality partners
* broadened messaging from only `Zimmer` to wider hotel offers such as rooms, spa and packages
* reduced repeated card patterns and moved parts of the page to calmer list and row structures
* added clearer differentiation from classic booking platforms
* tested a stronger green brand accent during the early live-site refinement phase
* returned the active landing page to a stronger orange brand direction after market-analysis feedback
* clarified that the public launch starts in South Tyrol but is not meant as a permanently purely regional concept
* removed redundant example CTA buttons in the hero mockup flow
* cleaned up the landing-page text encoding and removed the remaining visible mojibake in the most important sections
* set up a local network test flow so the landing page can be reviewed on a real phone in the same WLAN
* started a dedicated mobile pass for hero spacing, card sizing and CTA behavior on small screens
* aligned the `nowa` wordmark more consistently across sections, including dark surfaces and FAQ sentences
* fixed comparison-section brand rendering so `nowa` no longer appears as forced uppercase
* adjusted inline branding so `nowa` reads as one orange wordmark across light and dark surfaces
* deployed the landing page publicly through Vercel
* connected the public domain `joinnowa.com`
* connected and tested the partner inquiry form through Formspree
* added launch metadata, canonical URL, social preview metadata and a favicon
* added a static language toggle for German, Italian and English landing-page copy
* added multilingual Impressum / legal notice and Datenschutz / privacy pages
* added footer legal links and a privacy notice directly below the partner form
* fixed the example-offer card so all visible rows switch correctly in German, Italian and English
* changed the example-offer price from a "starting at" price to a fixed displayed price
* archived the green landing-page version in Git branch `archive/green-landingpage-2026-06-04`
* updated landing-page, legal-page and favicon colors back to orange, anthracite, black, white and warm grey

Still open on landing page:

* final mobile hero polish based on real-device testing
* final copy consistency pass after visual finish
* final full-page sanity check on the live public domain
* update legal pages once Partita IVA, PEC, Registro Imprese or a final legal form exist

Current handoff status:

* public landing page is live at `https://joinnowa.com`
* GitHub repository `Stief2000/Nowa` is connected to Vercel
* Vercel deploys the static landing page from `Landingpage/` on `master`
* partner form is active through Formspree
* multilingual landing page, Impressum and Datenschutz are live in German, Italian and English
* active landing-page brand direction is orange; the green version is preserved in branch `archive/green-landingpage-2026-06-04`

## Current App Status

The app MVP has completed its first full implementation round (Phases 1–4) including a full design system alignment and a design refinement pass. Runs locally without errors.

Already done:

* full rebrand from FreiPlatz to `nowa` in all app files
* brand color aligned to `#ff6b1a` (matches landing page)
* new four-category system: `overnight`, `wellness`, `gastro` (coming-soon), `other` (coming-soon)
* mock data extended with `region`, `lat`, `lng` for all six offers
* six Südtirol regions defined: Bozen, Meran, Brixen, Vinschgau, Unterland, Ritten
* functional filter bar on `/offers`: Kategorie chips, Zeitraum quick-picks, Region dropdown, text search
* List / Map view toggle on `/offers` with Leaflet + OpenStreetMap (no API key, SSR-safe)
* orange map pins per offer, popup with title, partner, price and detail link
* functional `ReservationForm` on `/offers/[id]`: Name, E-Mail, Datum, Nachricht, validation, confirmation screen
* functional partner create-offer form at `/partner/offers/new` with validation and success screen
* all 19 routes build cleanly with no TypeScript errors
* design system fully aligned with landing page (logo, colors, typography, buttons, cards, nav)
* orange usage reduced to interactive elements and prices only — eyebrows and meta icons are neutral grey
* hero redesigned: dark left column (`#1b1816`), light right column — dunkle obere Zone fließt nahtlos in dunkle Nav
* nav fully dark (`#1b1816`), enlarged logo (`size="lg"` 240px), no CTA button, Partner-Login moved to footer only
* all offer card gradient tones unified to a single warm dark charcoal gradient

Still open on app (next phase):

* real mobile testing of the app UI
* Supabase integration: database, auth, storage
* real persistence for reservation requests
* partner approval and verification flow
* app subdomain setup (`app.joinnowa.com` or similar)
* native app migration assessment (deferred until justified by usage)

## Lean Go-Live Plan

The preferred first public launch setup is intentionally lean:

* domain
* Cloudflare DNS
* Vercel Hobby for the static landing page
* temporary separate mailbox setup before a branded paid mailbox is introduced

This setup should be treated as a valid starting point, not the final long-term infrastructure.

Planned upgrade path:

* temporary free mailbox -> branded domain mailbox later
* Vercel landing-page project -> broader hosting structure later if app and landing page split operationally
* simple root + app subdomain setup -> broader multi-subdomain structure later if needed

## Domain And Mail Status

Current public-domain direction:

* public domain: `joinnowa.com`
* `www.joinnowa.com` also resolves successfully
* registrar / DNS provider: Cloudflare
* hosting: Vercel
* current status: domain connected and landing page live
* partner inquiry form: connected to Formspree and tested successfully

Mail direction at this stage:

* no private personal mailbox should be used for project operations
* short-term preference is a separate free mailbox
* branded paid mailbox can be added later once the domain is active

## Repository Direction

Repository structure is being consolidated.

Desired GitHub setup:

* one shared repository for the full `LastMinute_App` workspace
* repository name on GitHub: `Nowa`
* contents should include both `Landingpage/` and `App/`

Important:

* the older standalone landing-page repository still exists as history
* the new shared repository is intended to become the main home for ongoing project work

## Multi-PC Git Setup

The preferred Git setup is now:

* one shared repository only: `Stief2000/Nowa`
* one active remote only: `origin`
* local `master` should track `origin/master`

This has already been cleaned up on the current machine.

Important follow-up:

* the second computer should be updated to the same Git remote setup before further work continues there
* once the latest repository state has been pulled on the second computer, repeat the same remote cleanup there immediately so that only the shared `Nowa` repository remains as `origin`

Reference commands for the second computer:

* `git remote -v`
* `git remote remove origin`
* `git remote rename nowa origin`
* `git branch --set-upstream-to=origin/master master`
* `git pull`

## Inquiry and Booking Intake

Going live is not only about publishing the site. Incoming interest must land somewhere usable.

For the MVP, inquiries and booking-related requests should arrive through:

* routed domain email addresses such as `hello@`, `partner@`, `booking@`
* a central mailbox destination
* and ideally a simple structured log such as Google Sheets or Airtable

The goal is:

* no inquiry gets lost
* requests can be analyzed later
* contacts can be followed up manually
* the team can track statuses such as `new`, `contacted`, `closed`

## Mobile Testing

The landing page should be treated as mobile-first for public launch checks.

Current testing approach:

* Chrome device emulation on desktop
* real-phone testing over local WLAN using a small local HTTP server
* from now on, landing-page changes should be treated as live-repo work and pushed promptly so local review and public review do not drift apart

Current mobile focus areas:

* hero readability and line breaks
* spacing between headline, CTA and example card
* menu usability
* FAQ interaction
* form usability
* any remaining visible encoding glitches on real devices

## Development Strategy

Current order:

1. ✅ Finish landing page clarity, layout and brand positioning
2. ✅ Prepare a lean public go-live path
3. ✅ Resume desktop-first web app MVP work (mock data, all core flows)
4. Mobile testing and responsive polish for the app
5. Supabase integration (auth, database, storage)
6. Real reservation request persistence and partner notification
7. Partner approval workflow
8. App subdomain and hosting setup
9. Explore native app only if still justified by usage

## Tech Stack

Current app stack:

* Next.js App Router
* TypeScript
* Tailwind CSS
* mock data first
* Supabase later
* Supabase Auth later
* Supabase Storage later
* Stripe later

Landing page:

* static HTML/CSS/JS

Go-live support stack for the current lean launch:

* Cloudflare DNS
* Vercel Hobby for the landing page
* separate free mailbox now
* later branded mailbox and broader hosting structure if needed

## MVP User Roles

The app MVP has three roles:

* Customer
* Partner
* Admin

## App MVP Routes

The app frontend structure currently includes:

* `/`
* `/offers`
* `/offers/[id]`
* `/login`
* `/partner/dashboard`
* `/partner/offers`
* `/partner/offers/new`
* `/partner/bookings`
* `/admin`
* `/admin/partners`
* `/admin/offers`

## Partner MVP Features

Partners should be able to:

* log in
* view a dashboard
* create offers
* manage offers
* view incoming bookings or reservation requests

## Customer MVP Features

Customers should be able to:

* browse published offers
* open offer detail pages
* submit a reservation request

Customer accounts are not mandatory in the first MVP.

## Admin MVP Features

Admins should be able to:

* view partners
* view offers
* prepare approval and control structures

## Current Rules

Do not overbuild.

Do not add yet:

* native app code
* Stripe payments
* reviews
* chat
* push notifications
* loyalty features
* complex calendar integrations
* broad multi-industry category logic
* advanced search
* AI offer generation

## Design Direction

The product should feel:

* clean
* premium
* calm
* trustworthy
* hospitality-first
* desktop-first in partner/admin areas
* strong enough on mobile for public-facing pages

Avoid:

* cheap discount-platform aesthetics
* overpromising marketing language
* cluttered layouts
* repeated nested cards
* broad multi-service marketplace messaging

## Current Priority

App design system is polished and visually aligned. The next major milestone is making the partner area fully functional — this requires Supabase Auth and a real database. The partner area is currently visual-only (no persistence, no real login).

Multilingual support (DE / IT / EN) is deliberately deferred until Supabase is live and real partner content flows in — translating mock data is wasted effort.

Landing page remaining items (lower priority, still open):

* final mobile hero polish based on real-device testing
* final copy consistency pass
* update legal pages once Partita IVA, PEC, Registro Imprese or a final legal form exist

## Auth and User Management Strategy

nowa has three user roles. End users (Gäste) do not need a login for the MVP — the reservation request form is sufficient. Partners and admins need real authenticated accounts.

User roles:

* `partner` — creates and manages offers, sees incoming reservation requests
* `admin` — approves partners, oversees platform
* end users — no login required in MVP (reservation via form only)

Implementation approach using Supabase Auth:

* All authenticated users (partners, admins) live in Supabase `auth.users`
* A `profiles` table extends `auth.users` with `role: "partner" | "admin"` and partner-specific data
* Row Level Security (RLS) at the database level: every partner can only read and write their own rows
* After login, the app reads the user's role from `profiles` and redirects accordingly:
  * `partner` → `/partner/dashboard`
  * `admin` → `/admin`
* One login page (`/login`) handles both roles
* Partner onboarding: invite-based or open registration with admin approval step

Database schema (planned):

* `profiles` — id (fk auth.users), role, display_name, created_at
* `partners` — id, profile_id (fk), name, description, location, approved, created_at
* `offers` — id, partner_id (fk), title, category, description, price, availability, active, created_at
* `bookings` — id, offer_id (fk), guest_name, guest_email, requested_date, message, status, created_at

## Deferred Next Steps

1. Supabase project setup — create project, define schema above, enable RLS policies
2. Supabase Auth in the app — wire up `/login` so it actually authenticates against Supabase
3. Session handling — middleware to protect `/partner/*` and `/admin/*` routes by role
4. Partner dashboard with real data — offers and incoming booking requests from DB
5. Offer creation saves to DB — replace mock form submit with real Supabase insert
6. Reservation form saves to DB — replace mock submit with real Supabase insert
7. Partner notification on new request — email via Supabase Edge Function or Resend
8. Admin approval workflow — partners must be approved before their offers go live
9. Mobile testing pass for the app (real device, key flows: browse, filter, map, request form)
10. App subdomain and Vercel deployment for the Next.js app (`app.joinnowa.com` or similar)
11. Multilingual support (DE / IT / EN) — implement after Supabase is live and real content exists
12. Native app migration assessment (Capacitor or React Native) — deferred until justified by usage
