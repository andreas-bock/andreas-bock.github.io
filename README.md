# Andreas Bock

Persönliche One-Page-Webseite: Werdegang, Kenntnisse und Projekte von Andreas Bock,
IT-Application Analyst aus Attendorn mit Schwerpunkt Verwaltungs-IT und KI.

Entwickelt mit [Claude Code](https://claude.com/claude-code) im Agentic-Coding-Stil.

## Prinzipien

- **Reines HTML, CSS und JavaScript:** kein Framework, kein Build-Schritt.
- **Datenschutz zuerst:** keine Cookies, kein Tracking, keine extern geladenen Schriften
  oder Skripte, keine eingebetteten Videos.
- **Barrierearm:** semantisches HTML, Tastaturbedienung, sichtbarer Fokus, ausreichende
  Kontraste, Rücksicht auf „Bewegung reduzieren“.
- **Responsiv** mit Hell-/Dunkelmodus nach Systemeinstellung.

## Aufbau

```
index.html          Startseite (Hero, Über mich, Abschnittsgerüst, Kontakt)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
content/profil.js   Inhalte: Werdegang, Kenntnisse, Projekte, Profil-Links
assets/css/         Gestaltung
assets/js/main.js   Rendert die Inhalte aus profil.js, Navigation, E-Mail-Schutz
```

Inhalte werden in `content/profil.js` gepflegt, dafür muss das HTML nicht angefasst werden.

## Lokal ansehen

`index.html` per Doppelklick im Browser öffnen. Ein Server ist nicht nötig.

## Veröffentlichung

Die Seite wird über GitHub Pages aus dem `main`-Branch (Ordner `/`) ausgeliefert.
