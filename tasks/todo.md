# Göhring Website — TODO

## Phase 1 — Designsystem & Grundgerüst  ✅ ERLEDIGT
- [x] `css/styles.css` — alle Tokens (Farbe/Typo/Spacing/Radius/Motion) als CSS Custom Properties
- [x] Reset + `.container` + Basis-Typografie + Komponenten (`.btn` primär/sekundär, `.card`, Formularfeld)
- [x] `index.html` — semantisches Gerüst, 9 Sektionen als Platzhalter in Strategie-Reihenfolge
- [x] Sticky-Nav mit Mobile-Toggle + persistenter CTA "Kostenvoranschlag anfragen"
- [x] `js/main.js` — DOM-ready, Mobile-Nav-Toggle, Scroll-Reveal (reduced-motion-fest)
- [x] `impressum.html` + `datenschutz.html` (Vorlagen, Platzhalter markiert)
- [x] `assets/img/` — favicon.svg + README (Bild-Checkliste)
- [x] SEO-Meta + OpenGraph + LocalBusiness/AutoBodyShop-Strukturdaten

## Phase 2 — Navigation + Hero  ✅ ERLEDIGT
- [x] Sticky-Nav: transparent über Hero → bei Scroll dunkel + Blur + Haarlinie (rAF-Scroll-Listener)
- [x] Off-Canvas-Mobile-Menü (slide-in v. rechts) + Scrim, schließt bei Link-Klick/Esc/Außenklick
- [x] Fokus-Management: aria-expanded, Fokus ins Panel, Fokus-Trap (Links+CTA+Toggle), Rückgabe an Toggle
- [x] Permanenter Gold-CTA „Kostenvoranschlag" in der Bar (immer sichtbar)
- [x] Hero: Vollbild-Foto-Slot + dunkler Verlauf-Overlay, Eyebrow→Headline(Gold-Wort)→Lead→CTA→tel:→Meta
- [x] Progressive Enhancement: `js`-Klasse, Reveals nie dauerhaft versteckt
- [x] Verifiziert bei 375/1280, kein Horizontal-Overflow, A11y-Zustände geprüft (lokaler Static-Server)

## Nächste Phasen (Inhalte erst, wenn echte Fotos/Fakten vorliegen)
- [ ] Echtes Hero-Foto einsetzen: `.hero { --hero-img: url('assets/img/hero.jpg'); }`
- [ ] Phase 3 — Trust-Leiste (Jahre, Garantie, Gütesiegel)
- [ ] Phase 4 — Leistungen als Nutzen-Blöcke
- [ ] Phase 5 — Vorher/Nachher-Slider (draggable) + Galerie + Lightbox
- [ ] Phase 6 — Sorglos-Ablauf (Schritte + Versicherungs-/Ersatzwagen-Versprechen)
- [ ] Phase 7 — Über uns / Team
- [ ] Phase 8 — Kundenstimmen
- [ ] Phase 9 — Kontaktformular + Validierung + Karte
- [ ] Phase 11 — Politur (Bildoptimierung, Lighthouse, A11y-Check)

## Offene Punkte / vom Betrieb zu bestätigen
- [ ] Öffnungszeiten (Verzeichnisse widersprüchlich: Mo–Do 6:30 vs. 7:00) — aktuell 7:00 in Strukturdaten
- [ ] Logo + echte Markenfarbe (kann Gold ggf. ergänzen)
- [ ] Google Fonts lokal hosten (Datenschutz) — Empfehlung
- [ ] Formularversand-Weg (Mailto / Dienst / Backend)
- [ ] Impressum-/Datenschutz-Platzhalter ausfüllen + rechtlich prüfen lassen
