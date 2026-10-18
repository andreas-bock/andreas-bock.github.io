# CLAUDE.md: Webseite Andreas Bock

Statische persönliche Infoseite von Andreas Bock: wer er ist und woran er arbeitet. Reines HTML/CSS/Vanilla-JS, kein Build,
kein Framework. Veröffentlicht als **öffentliches** GitHub-Repository über GitHub Pages.

Dieses Repository ist öffentlich. Inhaltliche Leitplanken zur Person und offene Punkte
stehen deshalb nicht hier, sondern in den lokalen, nicht veröffentlichten Notizen außerhalb
des Repositorys (übergeordneter Ordner).

## Regeln

- **Alles in diesem Ordner wird öffentlich.** Nie hierher legen: persönliche Dokumente,
  Geburtsdatum, Familienangaben, interne Notizen.
  Die Wohnadresse steht ausschließlich in `impressum.html` und `datenschutz.html`,
  Telefonnummer und USt-IdNr. ausschließlich in `impressum.html` (Pflichtangaben, wie auf n3rdroom.de).
- **Nichts extern laden:** keine Webfonts, CDNs, Analytics, YouTube-Einbettungen, Cookies.
  Nur normale Links zu fremden Seiten.
- Inhalte (Werdegang, Kenntnisse, Projekte, Profil-Links) gehören in `content/profil.js`,
  nicht ins HTML. Leere `url`-Felder blenden Links automatisch aus.
- `profil.js` statt JSON, damit `index.html` auch per Doppelklick (file://) funktioniert.
- DOM nur mit `textContent` befüllen, kein `innerHTML`.
- E-Mail-Adresse nie als Klartext ins HTML; sie wird in `main.js` zusammengesetzt
  (`.js-email`, mit `data-show-address` wird die Adresse auch angezeigt).
- Farben nur über die Tokens in `:root` (hell) und im dunklen Block. Der dunkle Block steht
  zweimal (Systemeinstellung und `:root[data-theme="dark"]` für den Umschalter im Menü),
  Änderungen immer in beiden nachziehen. Die Wahl im Umschalter wird nicht gespeichert.
- Barrierefreiheit erhalten: semantische Elemente, `<details>` für Aufklappbares,
  `aria-pressed` bei Filtern, sichtbarer Fokus, Kontraste ≥ WCAG AA.
- Commits mit der anonymen GitHub-Adresse (in der lokalen Git-Konfiguration hinterlegt),
  nicht mit einer privaten E-Mail-Adresse.

## Sprache und Ton

Deutsch, in Andreas' eigenem Sprachstil. Für jeden sichtbaren Text:

- Ich-Form, aktiv, kurze laut lesbare Sätze, Verben statt Nominalketten
- **keine Gedankenstriche** (– oder —) als Satzzeichen, auch nicht in Titeln oder
  Zeiträumen (dort „bis“); stattdessen Komma, Doppelpunkt oder neuer Satz
- **keine direkte Ansprache** der Lesenden, kein „Sie“ (auch nicht in Impressum/Datenschutz)
- kein Marketing-Ton, keine Superlative, keine Adjektivlisten, keine Emojis
- konkret: Anlass, was gebaut wurde, Stolperstein oder offener Punkt, Ergebnis
- pro Projekt höchstens ein bis zwei Stellen mit Augenzwinkern
- nur Anekdoten, die Andreas selbst erzählt hat, nichts erfinden
- knapp bleiben: ein Überblick, kein langer Lesetext
- Keine Prozent-Balken oder Sterne bei Kenntnissen

## Design

- Leitidee: Beim Scrollen modernisiert sich im Hintergrund die Verwaltung, in vier
  Epochen: Papierakte → PDF zum Download → Online-Formular → KI-Assistent.
  Szenen als Inline-SVG in `index.html` (`.eras`), Überblendung in `main.js`
  (`setupEpochen`), Ankerpunkte sind Abschnitte mit `data-epoche="n"`.
- Die Anzeige „Stand der Technik“ im Kopf zeigt die aktuelle Epoche.
- Randzeichnungen bleiben dekorativ (`aria-hidden`) und dezent, damit Text lesbar bleibt.
- Vorbild für den Vordergrund ist die Amtsstube: Recyclingpapier-Grau statt Creme,
  Akzent **Grünstift** (`--accent`), **Stempelviolett** (`--stempel`) nur für Status-Stempel.
- Schrift (nur Systemschriften): **DIN** (`--din`: Bahnschrift, DIN Alternate …) für
  Überschriften, Beschriftungen, Navigation und Buttons. Serif (`--text-serif`) für
  Fließtext. Monospace nur als Schreibmaschine in der Papierakten-Epoche.
- Layout wie ein Formular: Randspalte (`.section__head`, auf Desktop mitlaufend) mit
  „§ n“ und Überschrift, rechts `.section__body`. Auf dem Handy untereinander.
- Formular-Motive statt Karten: Aktenschild im Hero, Kurzfassung als ausgefülltes
  Formularfeld, Kenntnis-Filter als Aktenreiter am Registerblatt, jedes Projekt als
  eigenes Blatt mit Rahmen (alle gleich, Status wie
  „In Entwicklung“ oder „Hobbyprojekt“ als Stempel neben dem Titel).
- Eckige Formen, keine Schatten, keine Verläufe als Deko, keine Großbuchstaben-Labels,
  keine Mittelpunkt-Ketten („A · B · C“) als Gestaltungsmittel in Kopfzeilen und Labels.
- Kein Retro-/C64-Look: Das Thema der Seite ist die Verwaltungsmodernisierung.
