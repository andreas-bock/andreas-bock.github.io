/*
 * Inhalte der Webseite: Werdegang, Kenntnisse, Projekte, Profil-Links.
 *
 * Hier werden Texte gepflegt, ohne das HTML anzufassen. Bewusst eine .js- statt einer
 * .json-Datei: So funktioniert die Seite auch, wenn man index.html einfach per
 * Doppelklick öffnet (fetch() auf lokale JSON-Dateien blockieren Browser).
 *
 * Leere Strings ("") bei Links blenden den jeweiligen Link bzw. Button automatisch aus.
 *
 * Stil: Ich-Form, aktiv, kurze Sätze, keine Gedankenstriche, kein Marketing-Ton,
 * keine direkte Ansprache der Lesenden (siehe CLAUDE.md).
 */
window.PROFIL = {
  kontakt: {
    // E-Mail wird erst im Browser zusammengesetzt (einfacher Schutz vor Adress-Sammlern).
    emailUser: "andreas.bock02",
    emailDomain: "gmail.com",
  },

  // Profil-Links: leer lassen, solange nicht vorhanden.
  profile: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/andreas-bock-digitalisierung/" },
    { name: "XING", url: "" },
    { name: "GitHub", url: "" },
    { name: "YouTube", url: "https://www.youtube.com/c/N3rdroom" },
  ],

  // Link zum öffentlichen GitHub-Repository dieser Seite (Projektkarte „Diese Webseite“).
  repoUrl: "https://github.com/andreas-bock/andreas-bock.github.io",

  werdegang: [
    {
      zeitraum: "seit 06/2022",
      titel: "IT-Application Analyst",
      ort: "Hansestadt Attendorn · Amt für zentrale Dienste, Sachgebiet Informationstechnik",
      aktuell: true,
      // Optional: kurze persönliche Geschichte, erscheint aufgeklappt über den Stichpunkten.
      geschichteTitel: "Wie es dazu kam",
      // Text oder Liste von Absätzen.
      geschichte: [
        "Eingestellt wurde ich 2022 für das Onlinezugangsgesetz. Meine Aufgabe: Online-Anträge " +
          "ins Serviceportal bringen und mich um alles kümmern, was dazugehört. Ende 2022 lief " +
          "die OZG-Frist dann aus, und mit dem OZG 2.0 kommt inzwischen vieles zentral von Bund " +
          "und Land. Für uns als Kommune gab es da erstmal weniger zu tun, also habe ich vor " +
          "allem im 1st-Level-Support gearbeitet.",
        "Dann kam der Cyberangriff auf die Südwestfalen-IT. Beim Aufbau der Notumgebung habe " +
          "ich kräftig mitgeholfen, Notfall-E-Mail-Adressen angelegt und die Notfallrechner mit " +
          "eingerichtet. Später, auf dem Weg zurück in den Regelbetrieb, habe ich hier und da " +
          "Fachverfahren wieder installiert.",
        "In dieselbe Zeit fiel der „ChatGPT-Moment“. KI hat mich von Anfang an gepackt, und so " +
          "bin ich nach und nach in die Verwaltungsdigitalisierung gerutscht. Da bin ich heute, " +
          "und als Nächstes kommt die Automatisierung dazu.",
      ],
      details: [
        "Teilprojekte in IT und Digitalisierung leiten",
        "Das Onlinezugangsgesetz (OZG) umsetzen und Verwaltungsabläufe digitalisieren",
        "Serviceportal, Attendorn-App und Chatbot konzipieren, einführen und betreuen",
        "KI und Robotic Process Automation (RPA) in die Verwaltung bringen, zum Beispiel mit einem Erklärvideo zur Weboberfläche von KoKI",
        "Kleine Spezialanwendungen bauen, unter anderem für lokale KI-Modelle",
        "Kommunale Fachanwendungen betreuen",
        "Externe Dienstleister steuern, 1st-Level-Support",
      ],
    },
    {
      zeitraum: "09/2013 bis 05/2022",
      titel: "IT-Mitarbeiter E-Commerce & Webentwicklung",
      ort: "Römer Systems GmbH (vormals Roleff Römer GmbH), Olpe",
      details: [
        "Internetseiten entwickelt und gepflegt",
        "Marktplätze wie eBay betreut",
        "Intranet-Lösungen gebaut",
        "Die Client-IT im Haus betreut",
      ],
    },
    {
      zeitraum: "2003 bis 2013",
      titel: "Webprogrammierung & Onlinemarketing",
      ort: "In eigener Regie, als freier Mitarbeiter und im Praktikum",
      details: [
        "Für die Agentur friesenhagen.net als freier Mitarbeiter Internetseiten programmiert und Onlinemarketing gemacht",
        "Im Praktikum bei der Agentur PSV Marketing in Attendorn Internetauftritte programmiert",
        "Bei den Agenturen war die Arbeitsteilung klar: Das Design kam immer von der Agentur, ich habe die Programmierung übernommen, in HTML, CSS, JavaScript und teilweise PHP",
        "Davor in eigener Regie: Computerservice, Webprogrammierung und Onlinemarketing",
      ],
    },
    {
      zeitraum: "2000 bis 2002",
      titel: "Fachinformatiker Anwendungsentwicklung (IHK)",
      ort: "Umschulung bei der 3S GmbH in Attendorn, Berufsschule in Siegen. Der Wechsel in die IT.",
      details: [
        "Die 3S entwickelt Software für Produktionsplanung und -steuerung (PPS) in " +
          "Industriebetrieben, heute unter dem Namen 3S ERP",
        "Im Betrieb mit Visual Basic 6 programmiert, mit Datenbanken gearbeitet und SQL " +
          "kennengelernt. Schöne, klassische Programmierung eben",
        "Am Rande auch dabei gewesen, wenn bei Kundenfirmen Netzwerke eingerichtet und " +
          "betreut wurden",
        "In der Berufsschule kam gerade das Internet auf: erste Schritte mit HTML, PHP und " +
          "Datenbankzugriff. Darauf habe ich später meine Webprogrammierung aufgebaut",
      ],
    },
    {
      zeitraum: "1995 bis 2000",
      titel: "Werkzeugmechaniker",
      ort: "Ausbildung und erste Berufsjahre bei Muhr und Bender in Attendorn",
      details: [],
    },
  ],

  kenntnisse: [
    {
      gruppe: "KI & Automatisierung",
      eintraege: [
        "Claude Code", "Cursor", "Agentic Coding", "Lokale LLMs (Ollama)", "RAG",
        "Claude", "ChatGPT / OpenAI API", "Microsoft Copilot", "Prompt Engineering", "RPA",
      ],
    },
    {
      gruppe: "Verwaltungs-IT",
      eintraege: [
        "OZG", "Digitalisierung von Verwaltungsprozessen", "Kommunale Fachverfahren",
        "Digitale Bürgerdienste", "Teilprojektleitung", "Dienstleistersteuerung", "Datenschutz",
      ],
    },
    {
      gruppe: "Programmierung",
      eintraege: [
        "HTML", "CSS", "JavaScript", "PHP", "SQL (MySQL)", "XML", "JSON", "C#", "VB.NET",
        "BASIC V2 und XC=BASIC 3 (C64)",
        "Grundkenntnisse in C, C++, Java und MS-SQL Server",
      ],
    },
    {
      gruppe: "Systeme",
      eintraege: ["Windows", "Linux (Grundkenntnisse)", "Netzwerktechnik", "Webserver & Hosting"],
    },
    {
      gruppe: "Weiteres",
      eintraege: ["SEO", "Photoshop", "DaVinci Resolve", "MS Office"],
    },
  ],

  projekte: [
    {
      titel: "Diese Webseite",
      grafik: "webseite", // Experiment: kleine CSS-Zeichnung neben dem Titel
      status: "",
      // Text oder Liste von kurzen Absätzen.
      text: [
        "Viele stellen sich das so vor: Man tippt „Bau mir eine Webseite“, und fertig. " +
          "So lief das hier nicht. Claude Code hat zwar den ersten Prototyp komplett gebaut. " +
          "Danach haben wir aber im Gespräch Stück für Stück nachgearbeitet, vor allem an " +
          "den Texten.",
        "Die Rollen waren klar verteilt. Die Design-Idee kam von mir: Im Hintergrund " +
          "modernisiert sich beim Scrollen die Verwaltung, von der Papierakte bis zum " +
          "KI-Assistenten. Claude Code hat sie umgesetzt und die eigentliche Programmierung " +
          "übernommen. Ich habe entschieden, nachgeprüft und nicht jeden Vorschlag einfach " +
          "übernommen. Manches musste auch nachgebessert werden: Das erste Ablaufdiagramm " +
          "in der KI-Szene ergab zum Beispiel überhaupt keinen Sinn.",
        "Zum Schluss habe ich die Texte noch einmal selbst gegengelesen. Herausgekommen ist " +
          "eine aufgeräumte Seite in reinem HTML, CSS und JavaScript, ohne Tracking, ohne " +
          "Cookies und ohne Schriften von fremden Servern.",
      ],
      geschichteTitel: "Damit es nach mir klingt",
      geschichte:
        "Damit die Texte nach mir klingen und nicht nach KI, habe ich vorher eine " +
        "Sprachdatei erstellt: eine Markdown-Datei, die beschreibt, wie ich schreibe und " +
        "spreche. Grundlage waren meine eigenen Texte vom YouTube-Kanal, also " +
        "Videobeschreibungen und die Transkripte der Videos. Die Datei kam gleich mit in " +
        "den Chat. Deshalb gibt es auf dieser Seite zum Beispiel keinen einzigen " +
        "Gedankenstrich.",
      tags: ["Agentic Coding", "Claude Code", "Sprachdatei", "Barrierefreiheit"],
      links: [{ text: "Quelltext auf GitHub", url: "", repo: true }],
    },
    {
      titel: "LOKIWO (lokaler KI-Workflow)",
      grafik: "lokiwo", // Experiment: kleine CSS-Zeichnung neben dem Titel
      status: "In Entwicklung",
      text:
        "Die Idee: Jemand beschreibt in ganz normaler Sprache, wie ein Prozess in der " +
        "Verwaltung abläuft. LOKIWO macht daraus eine strukturierte Markdown-Datei, aus der " +
        "eine KI später zum Beispiel Ablaufpläne bauen kann. Ursprünglich sollte alles " +
        "komplett lokal laufen. Inzwischen gibt es zusätzlich eine Schnittstelle zu KoKI, " +
        "der kommunalen KI-Plattform, damit man datenschutzkonform mit KI arbeiten kann. " +
        "Fertig ist das Ganze noch nicht: LOKIWO läuft bisher nur experimentell und ist " +
        "noch nicht im produktiven Einsatz.",
      // Optional: kurze persönliche Entstehungsgeschichte, erscheint als Zitat-Box.
      geschichte:
        "Eigentlich wollte ich nur mal ausprobieren, ob das gerade frisch erschienene " +
        "Gemma 4 von Google auf unseren Laptops überhaupt läuft. Und wenn ja, wie schnell. " +
        "Aus dem kleinen Experiment ist dann ein richtiges Projekt geworden.",
      tags: ["Lokale KI", "Gemma", "KoKI", "Prozessmanagement", "Markdown"],
      links: [],
    },
    {
      titel: "Historisches Tagebuch Attendorn",
      grafik: "kalender", // Experiment: kleine CSS-Zeichnung neben dem Titel
      status: "",
      text:
        "Auf der Webseite der Stadt gab es schon lange ein historisches Tagebuch: Was ist " +
        "an diesem Tag früher in Attendorn passiert? Nur: Irgendwann funktionierte die " +
        "Anwendung nicht mehr. Also habe ich sie als eigene Web-Applikation neu gebaut. Sie " +
        "zeigt die Ereignisse zum heutigen Datum oder zu einem Tag, den man selbst auswählt.",
      tags: ["Webentwicklung", "Stadtarchiv"],
      links: [{ text: "Ansehen", url: "https://archivkalender.attendorn.online/" }],
    },
    {
      titel: "Rahmenplan Klimawandel",
      grafik: "tabelle", // Experiment: kleine CSS-Zeichnung neben dem Titel
      status: "",
      text:
        "Den Rahmenplan Klimawandel gab es bisher nur als PDF. Vollständig, aber nicht " +
        "gerade einladend zum Stöbern. Ich habe daraus eine Webseite mit ein bisschen " +
        "Interaktivität gemacht. Das Wichtigste steckt aber im Ablauf dahinter: Die " +
        "Sachbearbeitung pflegt die Inhalte weiter in ihrer Excel-Tabelle, und bei jeder " +
        "Aktualisierung landen die Daten in der Webseite. So musste niemand seine gewohnte " +
        "Arbeitsweise umstellen.",
      tags: ["Webentwicklung", "Klimaschutz", "Excel-Workflow"],
      links: [{ text: "Ansehen", url: "https://info.attendorn.online/klima/rahmenplan-klimawandel.html" }],
    },
    {
      titel: "KI-Leitlinien der Hansestadt Attendorn",
      grafik: "leitlinien", // Experiment: kleine CSS-Zeichnung neben dem Titel
      status: "",
      text:
        "Für die Stadt haben wir KI-Leitlinien erarbeitet. Eigentlich sollten die als PDF " +
        "auf die Webseite. Ich fand eine HTML-Seite einfach zeitgemäßer, also habe ich eine " +
        "gebaut. Wer das PDF trotzdem lieber mag, kann es dort weiterhin herunterladen.",
      tags: ["KI-Governance", "Webentwicklung"],
      links: [{ text: "Ansehen", url: "https://info.attendorn.online/ki-leitlinien/index.html" }],
    },
    {
      titel: "ARNI64: Adventure-Engine für den C64",
      grafik: "prompt", // Experiment: kleine CSS-Zeichnung neben dem Titel
      status: "Hobbyprojekt",
      text:
        "Textadventures haben mich auf dem C64 schon immer begeistert, also wollte ich " +
        "selbst welche schreiben. Meine erste Version in BASIC V2 hatte die ganze Geschichte " +
        "fest im Programm. Für jedes neue Abenteuer hätte ich wieder von vorn anfangen " +
        "müssen. Bei ARNI64 habe ich deshalb Engine und Inhalt getrennt: Die Engine in " +
        "XC=BASIC 3 versteht ganze deutsche Sätze, das Abenteuer selbst schreibe ich am PC " +
        "oder in einem Editor im Browser. Zuletzt habe ich die Engine von knapp 36 auf gut " +
        "28 KB geschrumpft, damit mehr Platz für die Geschichten bleibt. Nebenbei baue ich " +
        "gerade einen eigenen Skill für Claude Code, der beim Programmieren für den C64 hilft.",
      geschichteTitel: "Zum Namen", // Überschrift der Box, Standard: "Wie es entstand"
      geschichte:
        "Der Name steht für „Adventure RuNtime Interpreter“. Ja, ich weiß, die Abkürzung " +
        "hinkt etwas.",
      tags: ["Commodore 64", "XC=BASIC 3", "Parser", "Claude Code"],
      links: [{ text: "Projektseite mit spielbarer Demo", url: "https://n3rdroom.de/arni64-adventure-engine-c64" }],
    },
    {
      titel: "YouTube-Kanal N3rdroom",
      grafik: "video", // Experiment: kleine CSS-Zeichnung neben dem Titel
      status: "",
      text:
        "Auf meinem Kanal geht es um Retrocomputer und Programmierung. Ich zeige dort " +
        "Schritt für Schritt, wie Dinge funktionieren, und die Umwege gehören mit dazu. " +
        "Für mich ist das Hobby und gleichzeitig eine gute Übung darin, Technik verständlich " +
        "rüberzubringen.",
      tags: ["Wissensvermittlung", "Video"],
      links: [
        { text: "Zum Kanal", url: "https://www.youtube.com/c/N3rdroom" },
        { text: "n3rdroom.de", url: "https://n3rdroom.de" },
      ],
    },
  ],
};
