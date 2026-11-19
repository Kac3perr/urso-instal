
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileText,
  ScanSearch,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";
import { useLocale } from "../components/providers/Providers";
import { assetPath } from "../lib/asset";

const translations = {
  pl: {
    eyebrow: "Certyfikacja • ISO 18436-7 Level 1",
    title: "Wiarygodna diagnostyka zaczyna się od właściwych kompetencji.",
    description:
      "Badania termowizyjne wymagają nie tylko odpowiedniego sprzętu, ale również wiedzy z zakresu pomiarów radiometrycznych i interpretacji uzyskanych wyników. URSO INSTAL łączy certyfikowaną diagnostykę termowizyjną z praktyczną znajomością instalacji elektrycznych i przemysłu.",
    primary: "Zapytaj o inspekcję",
    secondary: "Poznaj strukturę raportu",
    certificateLabel: "Certyfikacja termograficzna",
    certificateLevel: "LEVEL 1",
    certificateStandard: "ISO 18436-7",
    certificateDescription:
      "Certyfikacja w zakresie monitorowania i diagnostyki termograficznej.",
    certificateNote: "Wojciech Jochemczyk • URSO INSTAL",
    introLabel: "Kompetencje i metodologia",
    introTitle: "Termogram to dopiero początek analizy.",
    introDescription:
      "Prawidłowa interpretacja obrazu termicznego wymaga uwzględnienia warunków pomiaru, właściwości badanego materiału oraz obciążenia urządzenia. Dlatego dokumentacja powinna przedstawiać nie tylko obraz, ale również kontekst wykonanej inspekcji.",
    advantages: [
      {
        title: "Wiedza termograficzna",
        description:
          "Interpretacja obrazów termicznych z uwzględnieniem parametrów pomiarowych i warunków badania.",
      },
      {
        title: "Znajomość instalacji",
        description:
          "Praktyczna wiedza dotycząca rozdzielnic, połączeń elektrycznych, szaf sterowniczych i urządzeń przemysłowych.",
      },
      {
        title: "Dokumentacja techniczna",
        description:
          "Uporządkowane wyniki inspekcji, lokalizacja anomalii i wskazanie priorytetu dalszych działań.",
      },
    ],
    reportLabel: "Przykładowa dokumentacja",
    reportTitle: "Co zawiera raport termowizyjny?",
    reportDescription:
      "Raport powinien pozwalać na odtworzenie warunków badania, ocenę wykrytych anomalii i zaplanowanie dalszych działań technicznych.",
    reportItems: [
      {
        number: "01",
        title: "Metryczka pomiarowa",
        description:
          "Współczynnik emisyjności, temperatura otoczenia, odległość pomiarowa oraz obciążenie obwodu wyrażone w procentach.",
        icon: "clipboard",
      },
      {
        number: "02",
        title: "Termogram i obraz widzialny",
        description:
          "Obraz termiczny wraz z odpowiadającym mu zdjęciem widzialnym badanego elementu.",
        icon: "scan",
      },
      {
        number: "03",
        title: "Lokalizacja anomalii",
        description:
          "Dokładne wskazanie miejsca występowania podwyższonej temperatury lub innej zaobserwowanej nieprawidłowości.",
        icon: "search",
      },
      {
        number: "04",
        title: "Priorytet naprawy",
        description:
          "Klasyfikacja stwierdzonej anomalii jako krytycznej, wysokiej lub umiarkowanej.",
        icon: "shield",
      },
    ],
    prioritiesLabel: "Klasyfikacja nieprawidłowości",
    prioritiesTitle: "Czytelna hierarchia dalszych działań",
    prioritiesDescription:
      "Klasyfikacja pomaga uporządkować wykryte anomalie i ułatwia planowanie działań przez służby Utrzymania Ruchu.",
    priorities: [
      {
        name: "Krytyczny",
        description:
          "Anomalia wymagająca pilnej oceny i podjęcia odpowiednich działań.",
        level: "01",
      },
      {
        name: "Wysoki",
        description:
          "Nieprawidłowość wymagająca zaplanowania szybkiej interwencji.",
        level: "02",
      },
      {
        name: "Umiarkowany",
        description:
          "Zaobserwowane odchylenie wymagające monitorowania lub zaplanowania działań.",
        level: "03",
      },
    ],
    scopeLabel: "Gdzie wykorzystujemy termowizję?",
    scopeTitle: "Diagnostyka urządzeń i infrastruktury przemysłowej",
    scopeDescription: "Inspekcje mogą obejmować między innymi:",
    scopeItems: [
      "Rozdzielnice główne niskiego i średniego napięcia",
      "Stacje transformatorowe",
      "Szafy sterownicze i układy automatyki",
      "Silniki, napędy i urządzenia maszynowe",
      "Baterie kondensatorów i mosty szynowe",
      "Przyłącza i elementy infrastruktury krytycznej",
    ],
    importantTitle: "Certyfikat i dokumentacja to nie to samo.",
    importantDescription:
      "Certyfikacja potwierdza kompetencje termografisty w określonym zakresie. Każde badanie wymaga jednak osobnej oceny warunków pomiarowych, analizy wyników i przygotowania dokumentacji odnoszącej się do konkretnego obiektu.",
    ctaLabel: "Współpraca",
    ctaTitle: "Potrzebujesz dokumentacji z inspekcji termowizyjnej?",
    ctaDescription:
      "Skontaktuj się z URSO INSTAL. Ustalimy zakres badania, wymagania dokumentacyjne i warunki realizacji.",
    ctaButton: "Skontaktuj się z nami",
    back: "Wróć do strony głównej",
    footer: "URSO INSTAL • Certyfikacja i raportowanie",
    downloadTitle: "Pobierz przykładową kartę usterki",
    downloadDescription:
      "Pobierz przykładowy dokument PDF, aby zobaczyć sposób prezentacji wyników inspekcji.",
  },

  en: {
    eyebrow: "Certification • ISO 18436-7 Level 1",
    title: "Reliable diagnostics begin with the right expertise.",
    description:
      "Thermal imaging requires more than suitable equipment. It also requires knowledge of radiometric measurements and interpretation of results. URSO INSTAL combines certified thermographic diagnostics with practical knowledge of electrical installations and industrial equipment.",
    primary: "Enquire about an inspection",
    secondary: "Explore the report structure",
    certificateLabel: "Thermographic certification",
    certificateLevel: "LEVEL 1",
    certificateStandard: "ISO 18436-7",
    certificateDescription:
      "Certification in the field of thermographic monitoring and diagnostics.",
    certificateNote: "Wojciech Jochemczyk • URSO INSTAL",
    introLabel: "Expertise and methodology",
    introTitle: "A thermogram is only the beginning of the analysis.",
    introDescription:
      "Correct interpretation of a thermal image requires consideration of measurement conditions, material properties and equipment load. Documentation should therefore present not only the image but also the context of the inspection.",
    advantages: [
      {
        title: "Thermographic expertise",
        description:
          "Interpretation of thermal images considering measurement parameters and inspection conditions.",
      },
      {
        title: "Knowledge of installations",
        description:
          "Practical knowledge of switchboards, electrical connections, control cabinets and industrial equipment.",
      },
      {
        title: "Technical documentation",
        description:
          "Structured inspection results, anomaly locations and priorities for further action.",
      },
    ],
    reportLabel: "Sample documentation",
    reportTitle: "What does a thermographic report contain?",
    reportDescription:
      "A report should make it possible to reconstruct measurement conditions, assess detected anomalies and plan further technical actions.",
    reportItems: [
      {
        number: "01",
        title: "Measurement data",
        description:
          "Emissivity, ambient temperature, measurement distance and circuit load expressed as a percentage.",
        icon: "clipboard",
      },
      {
        number: "02",
        title: "Thermogram and visible image",
        description:
          "Thermal image accompanied by a corresponding visible-light photograph of the inspected component.",
        icon: "scan",
      },
      {
        number: "03",
        title: "Anomaly location",
        description:
          "Precise identification of elevated temperature or another observed irregularity.",
        icon: "search",
      },
      {
        number: "04",
        title: "Repair priority",
        description:
          "Classification of the identified anomaly as critical, high or moderate.",
        icon: "shield",
      },
    ],
    prioritiesLabel: "Classification of irregularities",
    prioritiesTitle: "A clear hierarchy of further actions",
    prioritiesDescription:
      "Classification helps organise detected anomalies and supports planning by maintenance teams.",
    priorities: [
      {
        name: "Critical",
        description:
          "An anomaly requiring urgent assessment and appropriate action.",
        level: "01",
      },
      {
        name: "High",
        description:
          "An irregularity requiring a prompt intervention plan.",
        level: "02",
      },
      {
        name: "Moderate",
        description:
          "An observed deviation requiring monitoring or planned action.",
        level: "03",
      },
    ],
    scopeLabel: "Where is thermography used?",
    scopeTitle: "Diagnostics of industrial equipment and infrastructure",
    scopeDescription: "Inspections may include:",
    scopeItems: [
      "Main low- and medium-voltage switchboards",
      "Transformer stations",
      "Control cabinets and automation systems",
      "Motors, drives and machinery",
      "Capacitor banks and busbars",
      "Connections and critical infrastructure components",
    ],
    importantTitle: "Certification and documentation are not the same.",
    importantDescription:
      "Certification confirms the thermographer's competence within a defined scope. Each inspection still requires an individual assessment of measurement conditions, analysis of results and documentation relating to the specific facility.",
    ctaLabel: "Cooperation",
    ctaTitle: "Need documentation from a thermal inspection?",
    ctaDescription:
      "Contact URSO INSTAL. We will establish the inspection scope, documentation requirements and delivery conditions.",
    ctaButton: "Contact us",
    back: "Back to homepage",
    footer: "URSO INSTAL • Certification and reporting",
    downloadTitle: "Download a sample fault report",
    downloadDescription:
      "Download the sample PDF to see how inspection results are presented.",
  },

  de: {
    eyebrow: "Zertifizierung • ISO 18436-7 Level 1",
    title: "Zuverlässige Diagnostik beginnt mit der richtigen Kompetenz.",
    description:
      "Thermografie erfordert mehr als geeignete Geräte. Sie setzt auch Kenntnisse der radiometrischen Messung und der Ergebnisinterpretation voraus. URSO INSTAL verbindet zertifizierte thermografische Diagnostik mit praktischer Erfahrung in elektrischen Anlagen und Industrieanlagen.",
    primary: "Inspektion anfragen",
    secondary: "Berichtsstruktur ansehen",
    certificateLabel: "Thermografische Zertifizierung",
    certificateLevel: "LEVEL 1",
    certificateStandard: "ISO 18436-7",
    certificateDescription:
      "Zertifizierung im Bereich thermografischer Überwachung und Diagnostik.",
    certificateNote: "Wojciech Jochemczyk • URSO INSTAL",
    introLabel: "Kompetenz und Methodik",
    introTitle: "Ein Thermogramm ist erst der Anfang der Analyse.",
    introDescription:
      "Die korrekte Interpretation eines Wärmebildes erfordert die Berücksichtigung der Messbedingungen, Materialeigenschaften und Anlagenbelastung. Die Dokumentation sollte daher nicht nur das Bild, sondern auch den Kontext der Inspektion enthalten.",
    advantages: [
      {
        title: "Thermografische Fachkenntnisse",
        description:
          "Interpretation von Wärmebildern unter Berücksichtigung der Messparameter und Prüfbedingungen.",
      },
      {
        title: "Kenntnis elektrischer Anlagen",
        description:
          "Praktische Kenntnisse von Schaltanlagen, elektrischen Verbindungen, Schaltschränken und Industrieanlagen.",
      },
      {
        title: "Technische Dokumentation",
        description:
          "Strukturierte Prüfergebnisse, Lokalisierung von Anomalien und Prioritäten für weitere Maßnahmen.",
      },
    ],
    reportLabel: "Beispieldokumentation",
    reportTitle: "Was enthält ein Thermografiebericht?",
    reportDescription:
      "Ein Bericht sollte die Rekonstruktion der Messbedingungen, die Bewertung erkannter Anomalien und die Planung weiterer technischer Maßnahmen ermöglichen.",
    reportItems: [
      {
        number: "01",
        title: "Messdaten",
        description:
          "Emissionsgrad, Umgebungstemperatur, Messabstand und Stromkreisbelastung in Prozent.",
        icon: "clipboard",
      },
      {
        number: "02",
        title: "Thermogramm und Sichtbild",
        description:
          "Wärmebild zusammen mit einer entsprechenden sichtbaren Aufnahme des untersuchten Bauteils.",
        icon: "scan",
      },
      {
        number: "03",
        title: "Lokalisierung der Anomalie",
        description:
          "Genaue Angabe der Stelle mit erhöhter Temperatur oder einer anderen festgestellten Unregelmäßigkeit.",
        icon: "search",
      },
      {
        number: "04",
        title: "Reparaturpriorität",
        description:
          "Einstufung der festgestellten Anomalie als kritisch, hoch oder moderat.",
        icon: "shield",
      },
    ],
    prioritiesLabel: "Klassifizierung von Unregelmäßigkeiten",
    prioritiesTitle: "Eine klare Priorisierung weiterer Maßnahmen",
    prioritiesDescription:
      "Die Klassifizierung hilft, erkannte Anomalien zu ordnen und Maßnahmen der Instandhaltung zu planen.",
    priorities: [
      {
        name: "Kritisch",
        description:
          "Eine Anomalie, die eine dringende Bewertung und geeignete Maßnahmen erfordert.",
        level: "01",
      },
      {
        name: "Hoch",
        description:
          "Eine Unregelmäßigkeit, für die zeitnah eine Intervention geplant werden sollte.",
        level: "02",
      },
      {
        name: "Moderat",
        description:
          "Eine festgestellte Abweichung, die überwacht oder in die Maßnahmenplanung aufgenommen werden sollte.",
        level: "03",
      },
    ],
    scopeLabel: "Wo wird Thermografie eingesetzt?",
    scopeTitle: "Diagnostik industrieller Anlagen und Infrastruktur",
    scopeDescription: "Inspektionen können unter anderem umfassen:",
    scopeItems: [
      "Hauptschaltanlagen für Niederspannung und Mittelspannung",
      "Transformatorstationen",
      "Schaltschränke und Automatisierungssysteme",
      "Motoren, Antriebe und Maschinen",
      "Kondensatorbatterien und Sammelschienen",
      "Anschlüsse und Komponenten kritischer Infrastruktur",
    ],
    importantTitle: "Zertifizierung und Dokumentation sind nicht dasselbe.",
    importantDescription:
      "Die Zertifizierung bestätigt die Kompetenz des Thermografen in einem bestimmten Bereich. Jede Inspektion erfordert dennoch eine individuelle Bewertung der Messbedingungen, eine Analyse der Ergebnisse und eine Dokumentation für das jeweilige Objekt.",
    ctaLabel: "Zusammenarbeit",
    ctaTitle: "Benötigen Sie eine Dokumentation Ihrer Thermografieprüfung?",
    ctaDescription:
      "Kontaktieren Sie URSO INSTAL. Wir stimmen Prüfumfang, Dokumentationsanforderungen und Durchführung ab.",
    ctaButton: "Kontakt aufnehmen",
    back: "Zurück zur Startseite",
    footer: "URSO INSTAL • Zertifizierung und Berichterstattung",
    downloadTitle: "Beispielhafte Fehlerkarte herunterladen",
    downloadDescription:
      "Laden Sie das PDF-Beispieldokument herunter, um die Darstellung der Prüfergebnisse zu sehen.",
  },
};

const reportIcons = {
  clipboard: ClipboardCheck,
  scan: Thermometer,
  search: ScanSearch,
  shield: ShieldCheck,
};

export default function CertyfikatIsoPage() {
  const { locale } = useLocale();
  const t = translations[locale];

  const reportPdf = assetPath("/raport-termowizyjny.pdf");

  return (
    <main className="overflow-hidden bg-white text-[#171b20] transition-colors duration-300 dark:bg-[#101316] dark:text-[#edf0f2]">
      {/* HERO */}
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#55758b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
              {t.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#697078] dark:text-[#a6afb7] sm:text-lg">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="group inline-flex min-h-14 items-center justify-center gap-4 bg-[#243746] px-7 text-sm font-medium text-white transition-colors hover:bg-[#354f62] dark:bg-[#dce5eb] dark:text-[#151a1e] dark:hover:bg-white"
              >
                {t.primary}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              
            </div>
          </div>

          {/* PANEL CERTYFIKACJI */}
          <div className="relative">
            <div className="relative overflow-hidden border border-[#55758b]/30 bg-[#1b2730] p-8 text-white sm:p-10">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/15 pb-6">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                    URSO INSTAL
                  </span>
                  <Award
                    size={25}
                    strokeWidth={1.4}
                    className="text-[#b6cad7]"
                  />
                </div>

                <div className="py-12 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#b6cad7]/40 bg-white/[0.04]">
                    <BadgeCheck
                      size={39}
                      strokeWidth={1.25}
                      className="text-[#b6cad7]"
                    />
                  </div>

                  <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                    {t.certificateLabel}
                  </p>

                  <p className="mt-5 text-4xl font-semibold tracking-[0.08em] sm:text-5xl">
                    {t.certificateLevel}
                  </p>

                  <p className="mt-3 text-xl font-medium tracking-wide text-[#b6cad7]">
                    {t.certificateStandard}
                  </p>

                  <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-white/55">
                    {t.certificateDescription}
                  </p>
                </div>

                <div className="border-t border-white/15 pt-6">
                  <p className="text-center text-sm text-white/70">
                    {t.certificateNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 -z-0 h-full w-full border border-[#55758b]/30" />
          </div>
        </div>
      </section>

      {/* KOMPETENCJE */}
      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.introLabel}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.introTitle}
            </h2>
            <p className="mt-5 leading-8 text-[#697078] dark:text-[#a6afb7]">
              {t.introDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.advantages.map((item, index) => {
              const icons = [Thermometer, Zap, FileCheck2];
              const Icon = icons[index];

              return (
                <div
                  key={item.title}
                  className="border border-black/10 p-7 dark:border-white/10 sm:p-9"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center border border-[#55758b]/30 text-[#55758b]">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STRUKTURA RAPORTU */}
      <section
        id="raport"
        className="scroll-mt-24 bg-[#f4f6f7] dark:bg-[#171c20]"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.reportLabel}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.reportTitle}
            </h2>
            <p className="mt-5 leading-8 text-[#697078] dark:text-[#a6afb7]">
              {t.reportDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">
            {t.reportItems.map((item) => {
              const Icon =
                reportIcons[item.icon as keyof typeof reportIcons];

              return (
                <div
                  key={item.number}
                  className="bg-white p-7 dark:bg-[#101316] sm:p-9"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#55758b]/30 text-[#55758b]">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs tabular-nums text-[#9aa1a7]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        
        </div>
      </section>

      {/* PRIORYTETY */}
      <section>
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16 lg:py-28">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.prioritiesLabel}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.prioritiesTitle}
            </h2>
            <p className="mt-5 leading-8 text-[#697078] dark:text-[#a6afb7]">
              {t.prioritiesDescription}
            </p>
          </div>

          <div className="border-t border-black/10 dark:border-white/10">
            {t.priorities.map((item) => (
              <div
                key={item.level}
                className="grid grid-cols-[48px_1fr] gap-5 border-b border-black/10 py-7 dark:border-white/10 sm:grid-cols-[64px_1fr]"
              >
                <span className="text-sm font-medium tracking-widest text-[#55758b]">
                  {item.level}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZAKRES INSPEKCJI */}
      <section className="bg-[#f4f6f7] dark:bg-[#171c20]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.scopeLabel}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.scopeTitle}
            </h2>
            <p className="mt-5 leading-7 text-[#697078] dark:text-[#a6afb7]">
              {t.scopeDescription}
            </p>
          </div>

          <div className="border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#101316] sm:p-9">
            <ul className="space-y-5">
              {t.scopeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-[#55758b]"
                  />
                  <span className="text-sm leading-6 text-[#59636b] dark:text-[#b5bdc3]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WAŻNA INFORMACJA */}
      <section className="border-y border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-12 sm:px-10 lg:flex-row lg:items-start lg:gap-8 lg:px-16">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#55758b]/30 text-[#55758b]">
            <ShieldCheck size={23} strokeWidth={1.5} />
          </div>
          <div className="max-w-4xl">
            <h3 className="text-lg font-semibold">{t.importantTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
              {t.importantDescription}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b2730] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-20 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#a9c0cf]">
              {t.ctaLabel}
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/60">
              {t.ctaDescription}
            </p>
          </div>

          <Link
            href="/kontakt"
            className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-5 bg-white px-7 text-sm font-semibold text-[#1b2730] transition-colors hover:bg-[#dce5eb]"
          >
            {t.ctaButton}
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* DOLNA NAWIGACJA */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-7 text-xs text-[#899198] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span>{t.footer}</span>
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-colors hover:text-[#55758b]"
        >
          <ArrowRight size={14} className="rotate-180" />
          {t.back}
        </Link>
      </div>
    </main>
  );
}
