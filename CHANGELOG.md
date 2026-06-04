# nowa Changelog

This changelog tracks the shared progress of the nowa workspace.

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

## 2026-06-04

### Brand

* Archived the current green landing-page direction in Git branch `archive/green-landingpage-2026-06-04`
* Returned the active landing page to a stronger orange brand direction based on market-analysis feedback
* Updated the CSS wordmark so `nowa` appears as one orange logo with the slogan `now available`
* Reworked visible brand accents around orange, anthracite, black, white and warm greys
* Updated the landing page, legal pages and favicon to match the orange direction without rebuilding the layout

### Follow-Up

* Run a final desktop and mobile sanity pass before pushing the orange brand pass live
