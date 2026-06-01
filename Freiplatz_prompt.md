# FreiPlatz – Claude Code Prompt

Erstelle eine hochwertige deutsche MVP-Landingpage für „FreiPlatz" als einzelne HTML-Datei.

---

## Kontext

FreiPlatz ist eine Partner-first Auslastungsplattform. Ziel der MVP-Seite ist nicht direkte Kundenbuchung, sondern:
1. Partnerbetriebe gewinnen
2. Kundeninteresse über Survey / Early Access parallel testen

---

## Zielgruppe Partnerbetriebe

Wellnesshotels, Day-Spas, Restaurants, Bars, Beauty- und Massagestudios, Freizeitbetriebe, Kurse und Workshops.

---

## Positionierung

FreiPlatz ist keine klassische Rabattplattform, keine Vorteilskarte und kein Gutscheinportal.
FreiPlatz macht freie Kapazitäten sichtbar: schwache Zeiten, Restplätze, kurzfristig freie Termine und Nebensaison-Angebote.
Partner behalten volle Kontrolle über Zeitraum, Anzahl, Preisvorteil und Bedingungen.

---

## Ton

Modern, premium, ruhig, vertrauenswürdig, klar, hochwertig.
Keine Schnäppchen-Optik. Keine billigen Rabattwörter wie „Mega Deal", „Schnäppchen" oder „Billig".
Sprache professionell, aber menschlich. Deutsch.

---

## Farbschema

- Background: `#FAFAF8`
- Sektionen alternierend: `#F5F0EA`
- Dunkel / Footer: `#1A1208`
- Akzentfarbe: `#C47B3A`
- Text primär: `#1A1A1A`
- Text sekundär: `#666666`
- Text tertiär / Hints: `#AAAAAA`
- Weiß: `#FFFFFF`
- Erfolg / Grün: `#34C759`

---

## Typografie

- Font: System Font Stack: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif`
- Font Smoothing: `-webkit-font-smoothing: antialiased`
- Headlines: font-weight 700, letter-spacing -1px bis -2px je nach Größe
- Body: font-size 15–16px, line-height 1.65
- Labels / Eyebrows: font-size 11px, font-weight 700, letter-spacing 0.08em, uppercase

---

## Design-Prinzipien

- Apple-inspiriert: viel Weißraum, cleane Linien, minimale Schatten
- Mobile-first, vollständig responsive
- Weiche border-radius (10–18px für Karten)
- Hover-Effekte auf Karten (leichtes translateY, border-color Wechsel)
- Sticky Navigation mit Blur-Effekt
- Sections klar getrennt durch Hintergrundwechsel
- Keine generischen Icons überladen – sparsam einsetzen
- Hochwertige Karten-Komponenten mit 0.5px Borders

---

## Bilder

Verwende folgende lokale Bilddateien (liegen im selben Ordner wie die HTML-Datei):

- `roman-mLPNw6L5t5o-unsplash.jpg` → Gastronomie / Hero
- `antonio-araujo-xX0MKVVhHR4-unsplash.jpg` → Wellness & Spa Pool
- `daniel-PnDr2j28gXA-unsplash.jpg` → Beauty & Salon
- `rendy-novantino-TSN7bhcwFXQ-unsplash.jpg` → Fitness & Yoga
- `alessio-zaccaria-PMg8bbSjaig-unsplash.jpg` → Bar & Drinks
- `iliya-jokic-lwl1sXHZ56E-unsplash.jpg` → Massage & Therapie
- `sixteen-miles-out-bdVmIkx_gIs-unsplash.jpg` → Wellness / Kerzen Atmosphäre
- `gokul-gurung-N3Ll8c2uLgE-unsplash.jpg` → Behandlungsraum
- `brooke-balentine-y297TPey8Do-unsplash.jpg` → Food & Brunch

Alle Bilder mit `object-fit: cover` und leichtem `brightness(0.72)` Filter einbinden.

---

## Seitenstruktur

### Navigation
- Logo: „FreiPlatz" (Frei in #1A1208, Platz in #C47B3A)
- Links: „So funktioniert's", „Für wen?", „Angebotsformate", „FAQ"
- CTA Button: „Als Partner bewerben" → Akzentfarbe #C47B3A, Pill-Form
- Sticky, backdrop-filter blur, border-bottom 0.5px

---

### 1. Hero Section

**Eyebrow:** „Beta · Partnerbetriebe gesucht"

**Headline:**
„Freie Plätze.
Gute Preise.
Spontane Erlebnisse."

**Subheadline:**
„FreiPlatz hilft Betrieben, schwache Zeiten, Restplätze und kurzfristig freie Termine sichtbar zu machen – ohne Fixkosten und ohne dauerhafte Rabatte."

**CTA 1 (Primary):** „Als Partnerbetrieb vormerken lassen"
**CTA 2 (Secondary):** „Kundeninteresse testen"

**Trust-Hinweis unter CTAs:**
„Kostenlos in der Beta · keine Fixkosten · volle Kontrolle"

**Hero Visual:**
Vollbreites Hintergrundbild (roman-...-unsplash.jpg) mit dunklem Overlay.
Text-Overlay unten links positioniert.
Kleines floating Badge unten rechts:
„Pilotphase Südtirol · Bewerbungen offen"

---

### 2. Problem Section

**Eyebrow:** „Das Problem"

**Headline:** „Freie Kapazitäten kosten täglich Umsatz."

**Body:**
„Ein leerer Tisch um 19 Uhr ist verlorener Umsatz – kein Nachholeffekt. Dasselbe gilt für einen nicht gebuchten Massagetermin, einen halbvollen Yogakurs oder ein freies Spa-Zeitfenster am Dienstagnachmittag. Nicht weil die Nachfrage fehlt – sondern weil der richtige Kanal fehlt."

**4 Problem-Cards:**
1. „3–4× schwache Wochentage" – Mo–Do: Kapazität da, Nachfrage nicht.
2. „20–35% Umsatzverlust" – Nebensaison: Fixkosten bleiben, Gäste fehlen.
3. „1–3× Stornierungen/Woche" – Kurzfristige Absagen hinterlassen ungenutzte Slots.
4. „FreiPlatz löst genau das" – Freie Zeitfenster werden zu buchbaren Angeboten. (Highlight Card in Akzentfarbe)

---

### 3. Lösung Section

**Eyebrow:** „Die Lösung"

**Headline:** „Freie Zeitfenster sichtbar machen – gezielt, kontrolliert, ohne Dauernachlass."

**Body:**
„FreiPlatz ist kein Rabattportal. Die Plattform zeigt ausgewählten Kunden gezielt freie Kapazitäten – nur dann, wenn der Betrieb es möchte. Kein dauerhafter Preisnachlass, kein Qualitätsverlust, keine Bindung."

**3 Lösungs-Punkte:**
1. „Nur bei echter freier Kapazität" – Angebote erscheinen ausschließlich wenn Plätze wirklich frei sind.
2. „Volle Kontrolle beim Betrieb" – Du bestimmst Zeitraum, Anzahl, Preisvorteil und Bedingungen.
3. „Keine Dauerbindung" – Kein Abo, keine Fixkosten. Du meldest Kapazitäten wenn du willst.

---

### 4. Vorteile für Partnerbetriebe Section

**Eyebrow:** „Vorteile"

**Headline:** „Was Partnerbetriebe von FreiPlatz haben."

**6 Vorteils-Cards mit Icon-ähnlichen Farbpunkten:**
1. „Keine Fixkosten" – In der Beta vollständig kostenlos. Provision nur bei erfolgreicher Buchung.
2. „Volle Kontrolle" – Du entscheidest wann, wie viele Plätze und zu welchen Bedingungen.
3. „Kein Dauerrabatt-Image" – Angebote sind begrenzt und exklusiv – kein Gutschein-Portal.
4. „Neue Sichtbarkeit" – Erreiche Kunden die spontan buchen und Qualität schätzen.
5. „Zusätzliche Auslastung" – Fülle schwache Zeiten ohne dein Stammgeschäft zu beeinflussen.
6. „Einfacher Einstieg" – Kein technisches Setup, kein Aufwand – wir begleiten dich durch die Beta.

---

### 5. Angebotsformate Section

**Eyebrow:** „Angebotsformate"

**Headline:** „Welche Angebote funktionieren auf FreiPlatz."

**5 Format-Cards:**

1. **Last-Minute-Slot**
   Beschreibung: Kurzfristig freigewordener Termin – heute oder morgen verfügbar.
   Beispiel: „Massage morgen 10:30 Uhr – 1 Platz frei"

2. **Off-Peak-Deal**
   Beschreibung: Gezielt schwache Zeiten besser auslasten – Mo bis Do, frühe Abende.
   Beispiel: „Day Spa Mittwoch 17–21 Uhr · 8 Plätze"

3. **Restplatz**
   Beschreibung: Kurs, Event oder Tasting mit noch offenen Plätzen.
   Beispiel: „Weinverkostung Freitag · 3 Restplätze"

4. **Nebensaison-Special**
   Beschreibung: Definierte Zeiträume mit schwacher Auslastung gezielt bespielen.
   Beispiel: „Wellness November · Zimmer verfügbar"

5. **Secret Deal**
   Beschreibung: Exklusives Angebot nur für FreiPlatz-Nutzer – nicht öffentlich sichtbar.
   Beispiel: „Nur für FreiPlatz · Tasting Menu · 4 Plätze"

Jede Karte mit Kategorie-Tag, Titel, Beschreibung und Beispiel-Chip.

---

### 6. So funktioniert die Beta Section

**Eyebrow:** „Beta-Prozess"

**Headline:** „So startest du als Partnerbetrieb."

**4 Schritte:**
1. „Bewerbung einreichen" – Kurzes Formular, kein Aufwand. Wir melden uns innerhalb von 48h.
2. „Gespräch & Testangebot" – Gemeinsam definieren wir dein erstes Pilotangebot.
3. „FreiPlatz bereitet auf" – Wir erstellen das Angebot, du gibst frei.
4. „Pilot auswerten" – Nach dem ersten Angebot werten wir gemeinsam aus und optimieren.

---

### 7. Kunden-Survey Hinweis Section

**Eyebrow:** „Nachfrageseite"

**Headline:** „Wir testen gleichzeitig die Kundennachfrage."

**Body:**
„Parallel zur Partnergewinnung testen wir über gezielte Social-Media-Werbung und einen Kunden-Survey, wie groß das Interesse auf der Nachfrageseite ist. Partner profitieren damit von Beginn an von echten Nachfragedaten aus der Region."

**Kleines Survey-CTA:**
„Bist du Kunde und möchtest informiert werden?"
Button: „Zum Kunden-Survey" (Ghost Button)

---

### 8. FAQ Section

**Eyebrow:** „FAQ"

**Headline:** „Häufige Fragen von Betrieben."

**FAQ Items (Accordion):**

1. „Kostet mich die Teilnahme etwas?"
   Nein. In der Beta ist FreiPlatz für Partnerbetriebe vollständig kostenlos. Keine Fixkosten, keine Vorabgebühren. Eine Provision greift ausschließlich bei erfolgreicher Buchung – und nur dann.

2. „Muss ich dauerhaft Rabatte anbieten?"
   Nein. Du entscheidest selbst ob, wann und in welcher Höhe du einen Preisvorteil gibst. FreiPlatz funktioniert auch mit exklusiven Angeboten ohne klassischen Rabatt.

3. „Was passiert wenn ein Angebot nicht gebucht wird?"
   Nichts. Das Angebot läuft aus. Kein Risiko, keine Kosten, keine Verpflichtung.

4. „Wie viel Aufwand bedeutet das für meinen Betrieb?"
   Minimal. In der Beta übernehmen wir die Aufbereitung des Angebots gemeinsam mit dir. Du brauchst kein technisches Setup.

5. „Wer sieht meine Angebote?"
   Eine lokal interessierte, kuratierte Zielgruppe – keine Schnäppchenjäger-Plattform. FreiPlatz richtet sich an Kunden die Qualität schätzen und spontan buchen wollen.

6. „Für welche Regionen startet FreiPlatz?"
   Der Pilot startet in Südtirol. Anschließend folgt die Expansion in weitere Regionen in Italien und dem DACH-Raum.

7. „Wie läuft die Buchungsabwicklung?"
   In der Beta wird die Buchungsabwicklung noch manuell begleitet. Die technische Plattform mit automatischer Zahlungsabwicklung wird parallel entwickelt.

---

### 9. Kontaktformular / Partnerbewerbung Section

**Eyebrow:** „Jetzt bewerben"

**Headline:** „Werde Pilotpartner in Südtirol."

**Subtext:**
„Wir suchen aktuell ausgewählte Pilotbetriebe in Südtirol. Bewerbungen werden geprüft und persönlich beantwortet. Kein Risiko, keine Verpflichtung."

**Formularfelder:**
- Betriebsname (Text Input)
- Ansprechpartner (Text Input)
- E-Mail (Email Input)
- Telefonnummer (Tel Input)
- Kategorie (Select): Gastronomie / Wellness & Spa / Beauty & Salon / Massage & Therapie / Fitness & Kurse / Freizeit & Erlebnis / Anderes
- Ort / Region (Text Input)
- Mögliche freie Zeiten (Textarea): „z. B. Mo–Do abends, November–Januar, nach Stornierungen..."
- Interesse an Pilotangebot (Select): Ja, sehr interessiert / Eher ja / Noch unsicher / Erstmal nur informieren
- Nachricht (Textarea, optional)

**Submit Button:** „Bewerbung absenden" (Volle Breite, Akzentfarbe)

**Hinweis unter Formular:**
„Das Formular wird in Kürze live angebunden. Beta-Phase · keine Verpflichtung · persönliche Antwort innerhalb 48h"

---

### 10. Footer

- Logo: FreiPlatz
- Claim: „Freie Plätze sichtbar machen."
- Links: Für Betriebe · So funktioniert's · FAQ · Kontakt · Instagram
- Copyright: „© 2025 FreiPlatz · Beta-Phase Südtirol"
- Impressum Platzhalter · Datenschutz Platzhalter

---

## Technische Anforderungen

- **Einzelne HTML-Datei** – kein Framework, kein Build-Tool
- **Tailwind CSS via CDN** – `https://cdn.tailwindcss.com`
- **Vanilla JavaScript** – für FAQ Accordion, Smooth Scroll, Navigation
- **Keine Backend-Anbindung** – Formular optisch vollständig, aber nicht live
- **Mobile-first** – vollständig responsive, Navigation auf Mobile vereinfacht (Hamburger oder vereinfacht)
- **Performance** – Bilder mit `loading="lazy"`, kein unnötiges JS
- **Accessibility** – semantisches HTML, alt-Tags auf allen Bildern
- **Smooth Scroll** – alle Anker-Links scrollen smooth
- **FAQ Accordion** – öffnet/schließt mit Animation
- **Hover-Effekte** – auf allen Karten und Buttons
- **Sticky Nav** – mit `backdrop-filter: blur(12px)`

---

## Wichtige Hinweise

- Keine generischen Tech-Icons überladen
- Keine Emojis als primäre Design-Elemente
- Keine Wörter wie „Schnäppchen", „Mega-Deal", „billig", „günstig"
- Stattdessen: „Vorteilspreis", „freie Kapazität", „ausgewählte Partner", „begrenzte Plätze"
- Formular-Code sauber strukturieren damit später Formspree oder eigenes Backend einfach ergänzt werden kann
- Code sauber kommentiert und wartbar
