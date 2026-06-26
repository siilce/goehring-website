# Auto-Lackiererei Göhring — Website

Statische, ultra-premium Single-Page-Website für die **Auto-Lackiererei Göhring GmbH**
(Lackier-Meisterbetrieb, Arnstadt / Thüringen).

Technik: semantisches **HTML5**, modernes **CSS** (Custom Properties, Grid/Flex, `clamp()`),
**Vanilla JavaScript** ohne Framework. Schriften: Fraunces + Inter (Google Fonts).

## Projektstruktur
```
index.html          Startseite (Single-Page, Sektionen in Strategie-Reihenfolge)
impressum.html      Rechtsseite (Vorlage – Platzhalter ausfüllen + prüfen lassen)
datenschutz.html    Rechtsseite (Vorlage – Platzhalter ausfüllen + prüfen lassen)
css/styles.css      Design-System (Tokens) + Komponenten
js/main.js          Navigation, Scroll-Zustand, Scroll-Reveal
assets/img/         Bilder (siehe assets/img/README.txt — echte Fotos nötig)
tasks/              Fortschritt: todo.md, design-lessons.md, skill-log.md
```

## Lokal ansehen
Die Seite ist statisch — ein einfacher Server genügt:
```bash
python -m http.server 5051
# dann im Browser: http://localhost:5051
```

## Stand
- **Phase 1** ✅ Design-System + Grundgerüst (alle Sektionen als Platzhalter)
- **Phase 2** ✅ Navigation (sticky/transparent → dunkel) + Hero
- **Nächste:** Phase 3 Trust-Leiste · echtes Hero-Foto via `.hero { --hero-img: url('assets/img/hero.jpg'); }`

Details & offene Punkte: [tasks/todo.md](tasks/todo.md).

## Auf einem anderen Gerät weiterarbeiten
```bash
gh repo clone siilce/goehring-website
# oder: git clone https://github.com/siilce/goehring-website.git
```
Danach den Ordner in Claude Code öffnen und weitermachen.
