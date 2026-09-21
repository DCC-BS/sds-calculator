# Allgemein

Auf der Basis des ZenDiS Diskussionspapier «[Kriterien zur Bewertung von Digitaler Souveränität](https://www.zendis.de/media/pages/newsroom/presse/pressemeldung-konsultationsprozess/6805760d92-1774438919/zendis_diskussionspapier-kriterien-bewertung-digitaler-souveraenitaet.pdf)» und aufbauend auf dem SDS-Tool der Landeshauptstadt München.

## Überführung der ZenDiS Kriterien

| # | Dimension (Gewicht) | Frage | Erläuterung (Hilfetext) | ZenDiS-Kriterien | ZenDiS-Kategorie | EU-CSF-Kriterien (primär) | EU-CSF Objective |
|---|---|---|---|---|---|---|---|
| 1 | **Rechtsraum** (20 %) | Unterliegen Anbieter und Datenhaltung dem Rechtsraum der Schweiz oder der EU? | Berücksichtigt werden Anbieter, Mutterkonzern, relevante Subunternehmer sowie Ort und rechtliche Kontrolle der Datenverarbeitung. | C1 Datenlokation, C3 Datenschutz, D1 Abhängigkeit auf Betriebs-/Provider-Ebene, D5 Sicherheit und Compliance im Betrieb, B2 Nachvollziehbarkeit und Sicherheit der Lieferkette | C Daten, D Betrieb und Infrastruktur, B Digitale Anwendungen und Dienste | SOV-2 Q1 Primary Legal Jurisdiction, Q2 Extraterritorial Laws, Q3 Data Access Pathways; SOV-3 Q4 Data Location; SOV-1 Q1 EU/EEA Entity Control | Legal, Data & AI, Strategic |
| 2 | **Exit / Markt** (20 %) | Existieren realistische Alternativen, zu denen mit vertretbarem Aufwand gewechselt werden könnte? | Gemeint sind Wechselbarkeit, realistische Alternativen, Migrationsaufwand und vermeidbarer Lock-in. | D3 Exit-Fähigkeit, B5 Abhängigkeit auf Software-Ebene, A4 Beschaffung und Vergabe | D Betrieb und Infrastruktur, B Digitale Anwendungen und Dienste, A Organisation und Fähigkeiten | SOV-1 Q8 Resilience to Cut-off; SOV-5 Q6 Single Point of Dependency; SOV-4 Q1 Portability | Strategic, Supply Chain, Operational |
| 3 | **Datenhoheit** (20 %) | Können sämtliche Daten vollständig und in offenen Formaten exportiert werden? | Umfasst Nutzdaten, Metadaten, Konfigurationen und nachvollziehbare Exportprozesse. | C4 Datenstrukturen, C1 Datenlokation, C2 Datensicherheit | C Daten | SOV-4 Q1 Portability & Interoperability; SOV-6 Q1 (Formatoffenheit) | Operational, Technology |
| 4 | **Interoperabilität** (15 %) | Werden offene Standards und dokumentierte Schnittstellen verwendet? | Bewertet werden offene Protokolle, standardisierte Schnittstellen, dokumentierte APIs und Anschlussfähigkeit an Drittsysteme - trägt zugleich zur Vermeidung von Lock-in-Effekten bei | B4 Standards, B1 Transparenz/Dokumentation, B3 Anwendungsarchitektur/Modularität, C4 Datenstrukturen | B Digitale Anwendungen und Dienste, C Daten | SOV-6 Q1 Interoperability & Open Interfaces; SOV-6 Q2 Open Standards Compliance | Technology |
| 5 | **Betriebsautonomie** (15 %) | Ist der Betrieb des Dienstes vom Hersteller entkoppelt möglich (Eigenbetrieb oder Betrieb durch Dritte)? | Relevant sind Eigenbetrieb, Betrieb durch Dritte, Portabilität der Betriebsumgebung und Unabhängigkeit von proprietären Plattformdiensten. | D1 Abhängigkeit auf Betriebs-/Provider-Ebene, D3 Exit-Fähigkeit, D4 Resilienz & Business Continuity, B3 Anwendungsarchitektur/Modularität | D Betrieb und Infrastruktur, B Digitale Anwendungen und Dienste | SOV-4 Q2 Operate Without Foreign Dependencies, Q4 Support Channels, Q6 Subcontractor Jurisdiction; SOV-7 Q6 Maintenance Autonomy | Operational, Security |
| 6 | **Gestaltungsfähigkeit** (10 %) | Besteht Einfluss auf die Weiterentwicklung - bis hin zur Möglichkeit, sie selbst zu übernehmen? | Open Source, Community-Governance, Roadmap-Einfluss, Erweiterbarkeit und Verfügbarkeit von Know-how können dafür Indikatoren sein. | D2 Kundenverhältnis, A5 Auftraggeberfähigkeit, A6 Kompetenzen, B1 Transparenz/Dokumentation | D Betrieb und Infrastruktur, A Organisation und Fähigkeiten, B Digitale Anwendungen und Dienste | SOV-6 Q3 Open Source Availability, Q4 Service Architecture Transparency; SOV-1 Q3 Control over Roadmap | Technology, Strategic |

## Abgrenzung

- *Bewertungsobjekt:* Der Kalkulator bewertet einen einzelnen Dienst bzw. eine Software, der ZenDiS-Katalog zusätzlich die Organisation als Ganzes. A1 Strategie, A2 IT-Governance & Management, A3 Risikomanagement und teilweise A6 Kompetenzen sind daher nicht als eigene Fragen abgebildet – sie wären eine zweite, organisatorische Bewertungsebene.
- *Bewusste Verdichtung:* Die 20 ZenDiS-Kriterien wurden auf 6 gewichtete Fragen reduziert, damit ein Self-Assessment in wenigen Minuten machbar ist. Open Source ist kein eigenes Kriterium, sondern Indikator innerhalb der Dimensionen 5 und 6. Dies analog zur ZenDiS-Logik, Souveränität nicht mit dem Lizenzmodell gleichzusetzen.

## Gewichtung

Die Gewichte sind nicht empirisch validiert. Die unserer Meinung nach gut vertretbare Begründung ist folgendermassen:

**Erste Gruppe (je 20 %)** – die «harten» Souveränitätshebel
Rechtsraum, Exit/Markt und Datenhoheit sind diejenigen Dimensionen, bei denen ein Nein einen faktischen Kontrollverlust bedeutet, der sich nachträglich kaum kompensieren lässt. Sie entsprechen im ZenDiS-Papier den Punkten mit direktem Bezug zu Rechtsrisiko und Abhängigkeitsgrad. Ohne EU-/CH-Rechtsraum nützt Modularität wenig; ohne Datenexport ist jeder Exit theoretisch.

**Zweite Gruppe (je 15 %)** – die Voraussetzungen für Wechselfähigkeit
Interoperabilität und Betriebsautonomie sind Enabler: Sie machen einen Wechsel praktisch machbar, sind aber im Zweifel mit Aufwand nachrüstbar (Konnektoren, Migrationsprojekte). Sie wirken indirekt auf Dimension 2.

**Dritte Gruppe (10 %)** – die längerfristige Perspektive
Gestaltungsfähigkeit ist strategisch bedeutsam, wirkt aber über einen längeren Zeithorizont und hängt stärker von der eigenen Organisation ab (Kompetenzen, Ressourcen) als vom Produkt selbst. Deshalb bewusst das niedrigste Gewicht.

## Lücken

- *C2 Datensicherheit:* Verschlüsselung (Ende-zu-Ende, at rest/in transit), Schlüsselhoheit. Gerade die Frage «Wer hält die Schlüssel?» ist ein zentraler Souveränitätshebel und in keiner unserer sechs Fragen enthalten.
- *D4 Resilienz & Business Continuity:* Robustheit gegen Ausfälle/Angriffe, Wiederanlauffähigkeit. Unsere Dimension 5 fragt nur, ob entkoppelter Betrieb möglich ist und nicht, wie belastbar er ist.
- *B2 Lieferkette:* Wir erfassen den Rechtsraum von Anbieter/Subunternehmern, aber nicht Herkunft von Hardware-/Software-Komponenten bzw. SBOM-Transparenz.
- *C3 Datenschutz:* 	Rechtsraum ja, technisch-organisatorische Massnahmen nein.
