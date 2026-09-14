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
      "id": "legal",
      "param": "legal",
      "dimension": "Rechtsraum",
      "weight": 20,
      "text": "Unterliegen Anbieter und Datenhaltung dem Rechtsraum der Schweiz oder der EU?",
      "help": "Berücksichtigt werden Anbieter, Mutterkonzern, relevante Subunternehmer sowie Ort und rechtliche Kontrolle der Datenverarbeitung."
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
      "weight": 20,
      "text": "Können sämtliche Daten vollständig und in offenen Formaten exportiert werden?",
      "help": "Umfasst Nutzdaten, Metadaten, Konfigurationen und nachvollziehbare Exportprozesse."
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
      "weight": 15,
      "text": "Ist der Betrieb des Dienstes vom Hersteller entkoppelt möglich (Eigenbetrieb oder Betrieb durch Dritte)?",
      "help": "Relevant sind Eigenbetrieb, Betrieb durch Dritte, Portabilität der Betriebsumgebung und Unabhängigkeit von proprietären Plattformdiensten."
    },
    {
      "id": "gov",
      "param": "gov",
      "dimension": "Gestaltungsfähigkeit",
      "weight": 10,
      "text": "Besteht Einfluss auf die Weiterentwicklung - bis hin zur Möglichkeit, sie selbst zu übernehmen?",
      "help": "Open Source, Community-Governance, Roadmap-Einfluss, Erweiterbarkeit und Verfügbarkeit von Know-how können dafür Indikatoren sein."
    }
  ],
  "notes": [
    "Der Score (1 - 6) wird gewichtet berechnet. Nicht beantwortete Fragen zählen mit 0 Punkten.",
    "Open Source ist hier kein eigenes Kriterium, sondern ein möglicher Indikator für Governance, Transparenz und Weiterführbarkeit.",
    "Das Ergebnis ist eine Selbsteinschätzung ohne Prüfung von Belegen und dient der schnellen Orientierung, etwa im Beschaffungsvorfeld. Für eine belastbare, nachweisgestützte Bewertung ist der Kriterienkatalog des ZenDiS heranzuziehen."
  ]
}
