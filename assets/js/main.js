/*
 * Rendert Werdegang, Kenntnisse, Projekte und Kontakt-Links aus content/profil.js
 * und kümmert sich um Navigation und geschützte E-Mail-Adresse.
 * Läuft auf allen Unterseiten; fehlende Container werden einfach übersprungen.
 */
(function () {
  "use strict";

  const profil = window.PROFIL || {};

  // Kleiner Helfer: Element mit Klasse und Text anlegen (immer textContent, nie innerHTML).
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // Externe Links öffnen in einem neuen Tab. Der versteckte Hinweis sagt das auch
  // Screenreader-Nutzern, das kleine Pfeilsymbol kommt per CSS.
  function externalLink(text, url, className) {
    const a = el("a", (className ? className + " " : "") + "external", text);
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.append(el("span", "visually-hidden", " (öffnet in neuem Tab)"));
    return a;
  }

  function renderTimeline() {
    const list = document.getElementById("timeline");
    if (!list || !profil.werdegang) return;

    profil.werdegang.forEach(function (station) {
      const item = el("li", "timeline__item" + (station.aktuell ? " timeline__item--current" : ""));
      const head = el("div", "timeline__head");
      head.append(
        el("span", "timeline__date", station.zeitraum),
        el("h3", "timeline__title", station.titel),
        el("p", "timeline__place", station.ort)
      );

      if (station.details && station.details.length) {
        // <details> ist nativ per Tastatur bedienbar und für Screenreader verständlich.
        const details = el("details", "timeline__details");
        if (station.aktuell) details.open = true;
        const summary = el("summary", "timeline__summary");
        summary.append(head);
        details.append(summary);
        if (station.geschichte) {
          const story = el("div", "timeline__story");
          story.append(el("p", "card__story-label", station.geschichteTitel || "Wie es dazu kam"));
          // Einzelner Text oder Liste von Absätzen.
          [].concat(station.geschichte).forEach(function (absatz) {
            story.append(el("p", "", absatz));
          });
          details.append(story);
        }
        const ul = el("ul", "timeline__list");
        station.details.forEach(function (d) { ul.append(el("li", "", d)); });
        details.append(ul);
        item.append(details);
      } else {
        item.append(head);
      }
      list.append(item);
    });
  }

  function renderSkills() {
    const filter = document.getElementById("skill-filter");
    const container = document.getElementById("skills");
    if (!filter || !container || !profil.kenntnisse) return;

    const groups = profil.kenntnisse.map(function (gruppe) {
      const block = el("div", "skills__group");
      block.append(el("h3", "skills__title", gruppe.gruppe));
      const ul = el("ul", "tags");
      gruppe.eintraege.forEach(function (e) { ul.append(el("li", "tag", e)); });
      block.append(ul);
      container.append(block);
      return { name: gruppe.gruppe, node: block };
    });

    const buttons = [];
    function select(name) {
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.dataset.group === name));
      });
      groups.forEach(function (g) {
        g.node.hidden = name !== "Alle" && g.name !== name;
      });
    }

    ["Alle"].concat(groups.map(function (g) { return g.name; })).forEach(function (name) {
      const b = el("button", "filter__button", name);
      b.type = "button";
      b.dataset.group = name;
      b.addEventListener("click", function () { select(name); });
      buttons.push(b);
      filter.append(b);
    });
    select("Alle");
  }

  function renderProjects() {
    const container = document.getElementById("projects");
    if (!container || !profil.projekte) return;

    profil.projekte.forEach(function (p) {
      const card = el("article", "card");
      const head = el("div", "card__head");
      // Experiment: kleine Zeichnung aus reinem CSS. Die leeren <i> sind Bauteile dafür.
      if (p.grafik) {
        const g = el("span", "grafik grafik--" + p.grafik);
        g.setAttribute("aria-hidden", "true");
        for (let i = 0; i < 4; i++) g.append(el("i"));
        head.append(g);
      }
      head.append(el("h3", "card__title", p.titel));
      if (p.status) head.append(el("span", "badge", p.status));
      card.append(head);
      // Einzelner Text oder Liste von kurzen Absätzen.
      [].concat(p.text).forEach(function (absatz) {
        card.append(el("p", "card__text", absatz));
      });

      if (p.geschichte) {
        const story = el("aside", "card__story");
        const label = p.geschichteTitel || "Wie es entstand";
        story.append(el("p", "card__story-label", label), el("p", "", p.geschichte));
        card.append(story);
      }

      if (p.tags && p.tags.length) {
        const ul = el("ul", "tags tags--small");
        p.tags.forEach(function (t) { ul.append(el("li", "tag", t)); });
        card.append(ul);
      }

      const links = (p.links || [])
        .map(function (l) { return { text: l.text, url: l.repo ? profil.repoUrl : l.url }; })
        .filter(function (l) { return l.url; });
      if (links.length) {
        const nav = el("p", "card__links");
        links.forEach(function (l) { nav.append(externalLink(l.text, l.url, "card__link")); });
        card.append(nav);
      }
      container.append(card);
    });
  }

  function renderProfileLinks() {
    const list = document.getElementById("profile-links");
    if (!list || !profil.profile) return;
    profil.profile
      .filter(function (p) { return p.url; })
      .forEach(function (p) {
        const li = el("li");
        li.append(externalLink(p.name, p.url, "contact__link"));
        list.append(li);
      });
  }

  // Die Adresse steht nirgends im HTML; sie wird erst beim Laden zusammengesetzt.
  function setupEmail() {
    const k = profil.kontakt;
    if (!k) return;
    const address = k.emailUser + "@" + k.emailDomain;
    document.querySelectorAll(".js-email").forEach(function (a) {
      a.href = "mailto:" + address;
      if (a.dataset.showAddress !== undefined) a.textContent = address;
    });
  }

  function setupNav() {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    }
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Gewähltes Design an interne Links und an die eigene Adresse hängen (?design=hell|dunkel),
  // damit es auf Impressum und Datenschutz und beim Zurückgehen erhalten bleibt.
  // Ohne manuelle Wahl bleiben alle Links unverändert.
  function designWeitergeben() {
    const theme = document.documentElement.dataset.theme;
    const wert = theme === "dark" ? "dunkel" : theme === "light" ? "hell" : "";

    function anpassen(url) {
      if (wert) url.searchParams.set("design", wert);
      else url.searchParams.delete("design");
      return url;
    }

    document.querySelectorAll("a[href]").forEach(function (a) {
      const href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#") return; // Sprungmarken auf derselben Seite
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return;   // fremde Seiten, mailto, tel
      a.setAttribute("href", anpassen(url).href);
    });
    if (wert) history.replaceState(history.state, "", anpassen(new URL(location.href)).href);
  }

  // Umschalter hell/dunkel. Voreingestellt ist die Systemeinstellung. Die Wahl wird
  // bewusst nicht gespeichert (keine Cookies, kein localStorage), sondern nur über
  // den Parameter ?design= an die anderen Seiten weitergegeben.
  function setupTheme() {
    designWeitergeben();
    const button = document.querySelector(".theme-toggle");
    if (!button) return;
    const root = document.documentElement;
    const system = window.matchMedia("(prefers-color-scheme: dark)");

    function istDunkel() {
      return root.dataset.theme ? root.dataset.theme === "dark" : system.matches;
    }
    function anzeigen() {
      button.setAttribute("aria-pressed", String(istDunkel()));
    }
    button.addEventListener("click", function () {
      root.dataset.theme = istDunkel() ? "light" : "dark";
      anzeigen();
      designWeitergeben();
    });
    // Ändert sich die Systemeinstellung, solange niemand umgeschaltet hat, mitziehen.
    system.addEventListener("change", anzeigen);
    anzeigen();
  }

  // Hintergrund-Epochen: Papierakte → PDF → Webseite → KI.
  // Jeder Abschnitt mit data-epoche="n" ist ein Ankerpunkt. Rund um jeden Anker
  // wird über eine halbe Bildschirmhöhe von der vorigen Epoche übergeblendet.
  function setupEpochen() {
    const eras = Array.from(document.querySelectorAll(".era"));
    const anchors = Array.from(document.querySelectorAll("[data-epoche]"));
    const nameEl = document.querySelector("[data-epoche-name]");
    const balken = Array.from(document.querySelectorAll(".epoche__balken i"));
    if (!eras.length || !anchors.length) return;

    const namen = ["Papierakte", "PDF zum Download", "Online-Formular", "KI-Assistent"];
    let tops = [];
    let ticking = false;

    function measure() {
      tops = anchors.map(function (a) {
        return a.getBoundingClientRect().top + window.scrollY;
      });
      update();
    }

    function update() {
      ticking = false;
      const band = window.innerHeight * 0.25;
      const mitte = window.scrollY + window.innerHeight * 0.55;
      let e = 0;
      tops.forEach(function (top) {
        e += Math.min(1, Math.max(0, (mitte - (top - band)) / (2 * band)));
      });
      eras.forEach(function (era, i) {
        const o = Math.max(0, 1 - Math.abs(e - i));
        era.style.opacity = o.toFixed(3);
        era.classList.toggle("is-active", o > 0.5);
      });
      const aktuell = Math.round(e);
      if (nameEl && nameEl.textContent !== namen[aktuell]) nameEl.textContent = namen[aktuell];
      balken.forEach(function (b, i) { b.classList.toggle("is-on", i <= aktuell); });
      document.documentElement.dataset.epoche = String(aktuell);
    }

    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", measure);
    // Aufklappen im Werdegang und Filtern verschiebt die Abschnitte.
    document.addEventListener("toggle", measure, true);
    document.addEventListener("click", function (ev) {
      if (ev.target.closest(".filter__button")) window.requestAnimationFrame(measure);
    });
    window.addEventListener("load", measure);
    measure();
  }

  // Anleitungen: Knopf mit data-kopieren="id" kopiert den Text des Elements mit dieser id.
  // Die Zwischenablage-Schnittstelle gibt es nicht überall (z. B. alte Browser),
  // dann wird der Text markiert und mit dem alten Befehl kopiert.
  function setupKopieren() {
    document.querySelectorAll("[data-kopieren]").forEach(function (button) {
      const quelle = document.getElementById(button.dataset.kopieren);
      if (!quelle) return;
      const figur = button.closest("figure");
      const status = figur && figur.querySelector("[role=status]");
      const beschriftung = button.textContent;
      let timer;

      function melden(ok) {
        button.textContent = ok ? "Kopiert" : beschriftung;
        button.classList.toggle("is-kopiert", ok);
        if (status) status.textContent = ok
          ? "Der Auftrag ist in der Zwischenablage."
          : "Kopieren hat nicht geklappt. Der Text ist markiert und lässt sich mit Strg+C kopieren.";
        clearTimeout(timer);
        timer = setTimeout(function () {
          button.textContent = beschriftung;
          button.classList.remove("is-kopiert");
          if (status) status.textContent = "";
        }, ok ? 3000 : 8000);
      }

      function altesKopieren() {
        const range = document.createRange();
        range.selectNodeContents(quelle);
        const auswahl = window.getSelection();
        auswahl.removeAllRanges();
        auswahl.addRange(range);
        let ok = false;
        try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
        if (ok) auswahl.removeAllRanges();
        melden(ok);
      }

      button.addEventListener("click", function () {
        const text = quelle.textContent.trim();
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(function () { melden(true); }, altesKopieren);
        } else {
          altesKopieren();
        }
      });
    });
  }

  // Anleitungen: Schrittanzeige im Kopf. Abschnitte mit data-schritt="n" (0 = Vorbereitung,
  // 1 bis 5 = Schritte, 6 = danach); maßgeblich ist der letzte, der die Bildschirmmitte erreicht hat.
  function setupSchritte() {
    const abschnitte = Array.from(document.querySelectorAll("[data-schritt]"));
    const nameEl = document.querySelector("[data-schritt-name]");
    const balken = Array.from(document.querySelectorAll(".epoche__balken i"));
    if (!abschnitte.length || !nameEl) return;
    let ticking = false;

    function update() {
      ticking = false;
      const mitte = window.innerHeight * 0.5;
      let schritt = -1;
      abschnitte.forEach(function (a) {
        if (a.getBoundingClientRect().top < mitte) schritt = Number(a.dataset.schritt);
      });
      const name = schritt < 0 ? "Überblick"
        : schritt === 0 ? "Vorbereitung"
        : schritt > 5 ? "Fertig"
        : "Schritt " + schritt + " von 5";
      if (nameEl.textContent !== name) nameEl.textContent = name;
      balken.forEach(function (b, i) { b.classList.toggle("is-on", i < schritt); });
    }

    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  renderTimeline();
  renderSkills();
  renderProjects();
  renderProfileLinks();
  setupEmail();
  setupNav();
  setupTheme();
  setupEpochen();
  setupKopieren();
  setupSchritte();
  document.querySelectorAll(".js-year").forEach(function (y) {
    y.textContent = String(new Date().getFullYear());
  });
})();
