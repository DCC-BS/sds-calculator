const QUESTIONS = {
  "title": "Digitale Souveränität - Checkliste & Berechnung",
  "score": {
    "min": 1,
    "max": 6,
    "unansweredValue": 0,
    "rounding": 1,
    "labels": [
      { "min": 1, "max": 2, "text": "Niedrig souverän" },
      { "min": 2.1, "max": 5, "text": "Teilweise souverän" },
      { "min": 5.1, "max": 6, "text": "Hoch souverän" }
    ]
  },
  "answers": [
    { "id": "yes", "label": "Ja", "value": 1 },
    { "id": "partial", "label": "Teilweise", "value": 0.5 },
    { "id": "no", "label": "Nein", "value": 0 },
    { "id": "unknown", "label": "Nicht bekannt", "value": 0 }
  ],
  "questions": [
    {
      "id": "legal_provider",
      "param": "legal_provider",
      "dimension": "Rechtsraum",
      "weight": 10,
      "text": "Unterliegt der Anbieter dem Rechtsraum der Schweiz oder der EU?",
      "help": "Berücksichtigt werden Anbieter, Mutterkonzern und relevante Subunternehmer - unabhängig davon, wo die Daten tatsächlich liegen."
    },
    {
      "id": "legal_data",
      "param": "legal_data",
      "dimension": "Rechtsraum",
      "weight": 10,
      "text": "Erfolgt die Datenhaltung (Speicherung und Verarbeitung) im Rechtsraum der Schweiz oder der EU?",
      "help": "Berücksichtigt werden Ort und rechtliche Kontrolle der Datenverarbeitung, auch bei Subunternehmern - unabhängig vom Sitz des Anbieters."
    },
    {
      "id": "exit",
      "param": "exit",
      "dimension": "Exit / Markt",
      "weight": 20,
      "text": "Existieren realistische Alternativen, zu denen mit vertretbarem Aufwand gewechselt werden könnte?",
      "help": "Gemeint sind Wechselbarkeit, realistische Alternativen, Migrationsaufwand und vermeidbarer Lock-in."
    },
    {
      "id": "data",
      "param": "data",
      "dimension": "Datenhoheit",
      "weight": 10,
      "text": "Können sämtliche Daten vollständig und in offenen Formaten exportiert werden?",
      "help": "Umfasst Nutzdaten, Metadaten, Konfigurationen und nachvollziehbare Exportprozesse."
    },
    {
      "id": "keys",
      "param": "keys",
      "dimension": "Datenhoheit",
      "weight": 10,
      "text": "Liegt die Hoheit über die Verschlüsselungsschlüssel bei der eigenen Organisation?",
      "help": "Wer hält die Schlüssel? Berücksichtigt werden eigene Schlüsselverwaltung (z. B. Bring-your-own-Key), Zugriffsmöglichkeiten des Anbieters auf Klartextdaten sowie Nachvollziehbarkeit der Schlüsselverwaltung."
    },
    {
      "id": "interop",
      "param": "interop",
      "dimension": "Interoperabilität",
      "weight": 15,
      "text": "Werden offene Standards und dokumentierte Schnittstellen verwendet?",
      "help": "Bewertet werden offene Protokolle, standardisierte Schnittstellen, dokumentierte APIs und Anschlussfähigkeit an Drittsysteme - trägt zugleich zur Vermeidung von Lock-in-Effekten bei"
    },
    {
      "id": "ops",
      "param": "ops",
      "dimension": "Betriebsautonomie",
      "weight": 10,
      "text": "Ist der Betrieb des Dienstes vom Hersteller entkoppelt möglich (Eigenbetrieb oder Betrieb durch Dritte)?",
      "help": "Relevant sind Eigenbetrieb, Betrieb durch Dritte, Portabilität der Betriebsumgebung und Unabhängigkeit von proprietären Plattformdiensten."
    },
    {
      "id": "docs",
      "param": "docs",
      "dimension": "Betriebsautonomie",
      "weight": 5,
      "text": "Ist eine vollständige, aktuelle Dokumentation frei verfügbar (technisch und organisatorisch)?",
      "help": "Verfügbarkeit von Dokumentation erleichtert Eigenbetrieb, Betreiberwechsel und Migration unabhängig vom Hersteller - etwa Architektur-, API- und Betriebsdokumentation."
    },
    {
      "id": "gov_influence",
      "param": "gov_influence",
      "dimension": "Gestaltungsfähigkeit",
      "weight": 5,
      "text": "Besteht Einfluss auf die Weiterentwicklung, z. B. durch Roadmap-Mitsprache oder eigene Beiträge?",
      "help": "Open Source, Community-Governance und Roadmap-Einfluss können dafür Indikatoren sein."
    },
    {
      "id": "gov_takeover",
      "param": "gov_takeover",
      "dimension": "Gestaltungsfähigkeit",
      "weight": 5,
      "text": "Besteht im Bedarfsfall die Möglichkeit, die Weiterentwicklung selbst zu übernehmen?",
      "help": "Relevant sind Lizenz, Quelloffenheit, Erweiterbarkeit und Verfügbarkeit von Know-how, um den Dienst notfalls in Eigenregie fortzuführen."
    }
  ],
  "notes": [
    "Der Score (1 - 6) wird gewichtet berechnet. Nicht beantwortete Fragen zählen mit 0 Punkten. Da sich Schwächen so ausgleichen lassen, werden nicht erfüllte Dimension separat ausgewiesen.",
    "Open Source ist hier kein eigenes Kriterium, sondern ein möglicher Indikator für Governance, Transparenz und Weiterführbarkeit.",
    "Das Ergebnis ist eine Selbsteinschätzung ohne Prüfung von Belegen und dient der schnellen Orientierung, etwa im Beschaffungsvorfeld. Für eine belastbare, nachweisgestützte Bewertung ist der Kriterienkatalog des ZenDiS heranzuziehen."
  ]
}
