# nowa Changelog

This changelog tracks the shared progress of the nowa workspace.

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
