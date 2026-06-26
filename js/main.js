/* ============================================================================
   Auto-Lackiererei Göhring — main.js
   Vanilla JavaScript · keine Abhängigkeiten
   ----------------------------------------------------------------------------
   · Header-Scroll-Zustand  (transparent → dunkel/Blur) via passivem,
     rAF-gedrosseltem Scroll-Listener — robust, performant, überall lauffähig.
   · Off-Canvas-Navigation  (a11y: aria-expanded, Esc, Scrim, Fokus-Trap, Fokus-Rückgabe)
   · Scroll-Reveal          (Progressive Enhancement: sichtbare Elemente sofort,
     restliche via IntersectionObserver — Inhalt wird nie dauerhaft versteckt)
   Smooth-Scrolling läuft über CSS (scroll-behavior + scroll-padding-top) und
   wird bei prefers-reduced-motion automatisch deaktiviert.
   ============================================================================ */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    initHeaderScroll();
    initNav();
    initReveal();
  });

  /* --------------------------------------------------------------------------
     Header-Scroll-Zustand
     Passiver Scroll-Listener, per requestAnimationFrame gedrosselt.
     -------------------------------------------------------------------------- */
  function initHeaderScroll() {
    var header = document.querySelector("[data-header]");
    if (!header) return;

    var ticking = false;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });

    update(); // korrekter Zustand auch bei Reload mitten in der Seite
  }

  /* --------------------------------------------------------------------------
     Off-Canvas-Navigation (Mobile)
     -------------------------------------------------------------------------- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    var scrim = document.querySelector("[data-nav-scrim]");
    if (!toggle || !menu) return;

    var isOpen = false;
    var navRegion = toggle.closest(".nav") || document;

    // Alle fokussierbaren Elemente der Kopf-Navigation in DOM-Reihenfolge:
    // [Panel-Links …, CTA, Toggle]. Erstes/letztes bilden die Trap-Grenzen.
    function trapItems() {
      return Array.prototype.slice.call(
        navRegion.querySelectorAll('a[href], button:not([disabled])')
      );
    }

    function setOpen(open) {
      isOpen = open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      menu.dataset.open = String(open);
      if (scrim) scrim.dataset.open = String(open);
      document.body.classList.toggle("nav-open", open);

      if (open) {
        var firstLink = menu.querySelector("a[href]");
        if (firstLink) firstLink.focus();      // Fokus in das Panel
      } else {
        toggle.focus();                         // Fokus zurück auf den Auslöser
      }
    }

    toggle.addEventListener("click", function () { setOpen(!isOpen); });
    if (scrim) scrim.addEventListener("click", function () { setOpen(false); });

    // Schließen, sobald ein Link getippt wird
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (!isOpen) return;

      if (e.key === "Escape") { setOpen(false); return; }

      // Fokus-Trap: Tab/Shift+Tab bleiben in der Kopf-Navigation (Links, CTA, Toggle)
      if (e.key === "Tab") {
        var items = trapItems();
        if (!items.length) return;
        var first = items[0];
        var last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    });

    // Bei Wechsel auf Desktop-Breite offenes Menü schließen
    var desktop = window.matchMedia("(min-width: 861px)");
    var onChange = function (e) { if (e.matches && isOpen) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener("change", onChange);
    else if (desktop.addListener) desktop.addListener(onChange); // ältere Browser
  }

  /* --------------------------------------------------------------------------
     Scroll-Reveal — sichtbare Elemente sofort, restliche beim Einscrollen
     -------------------------------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    function inView(el) {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var r = el.getBoundingClientRect();
      return r.top < vh * 0.92 && r.bottom > 0;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

    els.forEach(function (el) {
      if (inView(el)) el.classList.add("is-visible"); // unabhängig vom Observer sichtbar
      else io.observe(el);
    });
  }
})();
