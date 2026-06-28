# Design-Lessons

## 2026-06-25 · Göhring — Navigation + Hero (Phase 2)

**Wow-Effekt:**
- Transparente Nav, die beim Scrollen in dunkles Glas (Blur + Gold-Haarlinie) übergeht — wirkt
  teurer als eine Standard-Bar, weil der Hero ungestört „durchatmet".
- Fraunces-Headline mit genau EINEM goldenen Wort über dunklem Foto-Overlay: ein Akzent, konsequent.
- Off-Canvas-Menü von rechts mit Scrim statt Standard-Dropdown — fühlt sich wie eine App an.

**Generisch / vermieden:**
- Zentrierter Hero (h1 + Button) = Instant-Fail laut Briefing → stattdessen linksbündig,
  klare Top-Down-Dramaturgie (Eyebrow → Versprechen → Sorglos-Satz → CTA → Telefon → Social Proof).
- Kein Neon, kein Effekt-Feuerwerk: Wertigkeit kommt aus Weißraum + ruhiger Bewegung.

## 2026-06-28 · Trust-Leiste + Instagram-Badge (Phase 3)

**Wow-Effekt:**
- Trust-Bar als EINE ruhige Zeile mit feinen vertikalen Haarlinien-Trennern (statt Kästchen/Icons) —
  liest sich wie ein Gütesiegel, nicht wie eine Icon-Reihe (Anti-AI-Slop-Regel).
- Instagram-Badge im exakt gleichen Dunkel-Gold-System wie die Website → ein durchgängiger
  Gestaltungsgedanke über Web UND Social. Gold-Sterne auf Schwarz = Blickfang im hellen Feed.

**Lesson:**
- Konsistenz zwischen Web-Komponente und Social-Asset zahlt direkt auf „Premium" ein —
  dieselben Tokens (Farbe, Fraunces, Spacing) zweimal verwenden statt neu erfinden.
- Trennlinien per `:not(:first)`-`::before` auf Desktop, auf Mobil ausblenden und durch
  `border-top` ersetzen → ein Markup, zwei saubere Layouts ohne Doppelung.

**Technische Lesson (wichtig):**
- Inhalte NIE per JS/IntersectionObserver „unsichtbar bis sichtbar" schalten ohne Fallback.
  Lösung: `.js`-Klasse gated das Verstecken → ohne JS bleibt alles sichtbar; im-Viewport-Elemente
  werden sofort eingeblendet, nur der Rest hängt am Observer. Robust gegen JS-Fehler/Sandboxes.
- Header-Scroll-Zustand lieber per passivem, rAF-gedrosseltem Scroll-Listener als per Sentinel-IO —
  einfacher, überall lauffähig, keine versteckte Abhängigkeit.
- Fokus-Trap-Set muss der DOM-Reihenfolge folgen (Links → CTA → Toggle) und an den ECHTEN Enden
  wrappen — sonst entkommt der Tab-Fokus hinter den Scrim.
