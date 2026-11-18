
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Zap,
  Activity,
  Cable,
  Search,
  Wrench,
} from "lucide-react";
import { useLocale } from "../components/providers/Providers";

const translations = {
  pl: {
    eyebrow: "Pomiary elektryczne • G1 E + D",
    title: "Pomiary elektryczne, które dają jasny obraz stanu instalacji.",
    description:
      "Wykonujemy pomiary odbiorcze i okresowe instalacji elektrycznych. Sprawdzamy parametry ochronne, identyfikujemy nieprawidłowości i przygotowujemy dokumentację z wynikami pomiarów.",
    primary: "Zapytaj o pomiary",
    secondary: "Poznaj zakres usług",
    qualification: "Uprawnienia G1 E + D",
    qualificationText:
      "Zakres kwalifikacji obejmuje eksploatację i dozór urządzeń, instalacji oraz sieci elektroenergetycznych.",
    scopeLabel: "Zakres pomiarów",
    scopeTitle: "Kontrola najważniejszych parametrów instalacji",
    scopeDescription:
      "Zakres prac dobieramy do rodzaju instalacji, celu pomiarów oraz wymagań obiektu.",
    measurements: [
      {
        title: "Impedancja pętli zwarcia",
        description:
          "Weryfikacja parametrów obwodu w kontekście skuteczności ochrony przeciwporażeniowej.",
        icon: "gauge",
      },
      {
        title: "Rezystancja izolacji",
        description:
          "Ocena stanu izolacji przewodów i obwodów instalacji elektrycznej.",
        icon: "cable",
      },
      {
        title: "Wyłączniki RCD",
        description:
          "Sprawdzenie działania wyłączników różnicowoprądowych i parametrów ich zadziałania.",
        icon: "zap",
      },
      {
        title: "Ciągłość połączeń",
        description:
          "Kontrola ciągłości przewodów ochronnych i połączeń wyrównawczych.",
        icon: "activity",
      },
    ],
    processLabel: "Sposób realizacji",
    processTitle: "Od ustalenia zakresu do dokumentacji",
    processDescription:
      "Każde zlecenie rozpoczynamy od ustalenia zakresu instalacji i celu wykonywanych pomiarów.",
    steps: [
      {
        number: "01",
        title: "Ustalenie zakresu",
        description:
          "Poznajemy rodzaj obiektu, instalacji oraz cel wykonania pomiarów.",
      },
      {
        number: "02",
        title: "Wykonanie pomiarów",
        description:
          "Przeprowadzamy uzgodnione pomiary kontrolno-pomiarowe instalacji.",
      },
      {
        number: "03",
        title: "Analiza wyników",
        description:
          "Weryfikujemy uzyskane wartości i wskazujemy stwierdzone nieprawidłowości.",
      },
      {
        number: "04",
        title: "Dokumentacja",
        description:
          "Przygotowujemy dokumentację zawierającą wyniki wykonanych pomiarów.",
      },
    ],
    documentationLabel: "Dokumentacja pomiarowa",
    documentationTitle: "Wyniki, które można przeanalizować i wykorzystać",
    documentationDescription:
      "Po wykonaniu prac przygotowujemy dokumentację z wynikami pomiarów. Jej zakres jest dostosowany do rodzaju instalacji i uzgodnionego zlecenia.",
    documentationItems: [
      "Zestawienie wykonanych pomiarów",
      "Wyniki i wartości uzyskane podczas badań",
      "Informacje o stwierdzonych nieprawidłowościach",
      "Wskazanie obwodów lub elementów wymagających uwagi",
    ],
    noteTitle: "Zakres pomiarów ma znaczenie",
    noteDescription:
      "Rodzaj badań i sposób ich dokumentowania ustalamy przed rozpoczęciem prac. Pomiary wykonujemy w zakresie posiadanych kwalifikacji i uzgodnionego zlecenia.",
    relatedLabel: "Uzupełnienie pomiarów",
    relatedTitle: "Nie tylko kontrola instalacji",
    relatedDescription:
      "W przypadku wykrycia nieprawidłowości możliwe jest również omówienie dalszych działań związanych z usunięciem usterek lub modernizacją instalacji.",
    relatedItems: [
      {
        title: "Automatyka i prefabrykacja",
        description:
          "Modernizacja układów sterowania, szafy sterownicze i prace elektryczne.",
        href: "/elektryka-automatyka",
      },
      {
        title: "Diagnostyka termowizyjna",
        description:
          "Kontrola rozdzielnic, połączeń i urządzeń pod kątem nieprawidłowości termicznych.",
        href: "/termowizja",
      },
    ],
    ctaLabel: "Kontakt",
    ctaTitle: "Potrzebujesz pomiarów instalacji elektrycznej?",
    ctaDescription:
      "Skontaktuj się z URSO INSTAL. Ustalimy zakres prac, rodzaj pomiarów i sposób realizacji.",
    ctaButton: "Przejdź do kontaktu",
    back: "Wróć do strony głównej",
    footer: "URSO INSTAL • Pomiary elektryczne",
  },
  en: {
    eyebrow: "Electrical measurements • G1 E + D",
    title: "Electrical measurements providing a clear picture of your installation.",
    description:
      "We carry out acceptance and periodic electrical installation measurements. We verify protective parameters, identify irregularities and prepare measurement documentation.",
    primary: "Enquire about measurements",
    secondary: "Explore the service scope",
    qualification: "G1 E + D qualifications",
    qualificationText:
      "The qualifications cover operation and supervision of electrical equipment, installations and networks.",
    scopeLabel: "Measurement scope",
    scopeTitle: "Checking the key parameters of an installation",
    scopeDescription:
      "The scope of work is selected according to the installation, measurement objectives and facility requirements.",
    measurements: [
      {
        title: "Fault loop impedance",
        description:
          "Verification of circuit parameters in relation to the effectiveness of electric shock protection.",
        icon: "gauge",
      },
      {
        title: "Insulation resistance",
        description:
          "Assessment of the insulation condition of electrical cables and circuits.",
        icon: "cable",
      },
      {
        title: "RCD testing",
        description:
          "Testing residual current devices and their operating parameters.",
        icon: "zap",
      },
      {
        title: "Continuity of connections",
        description:
          "Verification of protective conductor continuity and equipotential bonding.",
        icon: "activity",
      },
    ],
    processLabel: "How we work",
    processTitle: "From defining the scope to documentation",
    processDescription:
      "Every project starts with establishing the installation scope and the purpose of the measurements.",
    steps: [
      {
        number: "01",
        title: "Defining the scope",
        description:
          "We identify the facility, installation type and purpose of the measurements.",
      },
      {
        number: "02",
        title: "Measurements",
        description:
          "We carry out the agreed electrical inspection and measurement work.",
      },
      {
        number: "03",
        title: "Results analysis",
        description:
          "We review the obtained values and identify any irregularities.",
      },
      {
        number: "04",
        title: "Documentation",
        description:
          "We prepare documentation containing the measurement results.",
      },
    ],
    documentationLabel: "Measurement documentation",
    documentationTitle: "Results ready for review and further use",
    documentationDescription:
      "After completing the work, we prepare documentation containing the measurement results. Its scope depends on the installation and agreed service.",
    documentationItems: [
      "Summary of completed measurements",
      "Results and values obtained during testing",
      "Information about identified irregularities",
      "Identification of circuits or components requiring attention",
    ],
    noteTitle: "The measurement scope matters",
    noteDescription:
      "The type of tests and documentation method are agreed before work begins. Measurements are carried out within the scope of our qualifications and the agreed service.",
    relatedLabel: "Complementary services",
    relatedTitle: "More than installation testing",
    relatedDescription:
      "If irregularities are identified, further work related to fault removal or installation modernisation can also be discussed.",
    relatedItems: [
      {
        title: "Automation and control panels",
        description:
          "Control system modernisation, control cabinets and electrical work.",
        href: "/elektryka-automatyka",
      },
      {
        title: "Thermal imaging diagnostics",
        description:
          "Inspection of switchboards, connections and equipment for thermal irregularities.",
        href: "/termowizja",
      },
    ],
    ctaLabel: "Contact",
    ctaTitle: "Need electrical installation measurements?",
    ctaDescription:
      "Contact URSO INSTAL. We will establish the scope of work, measurement type and delivery method.",
    ctaButton: "Go to contact",
    back: "Back to homepage",
    footer: "URSO INSTAL • Electrical measurements",
  },
  de: {
    eyebrow: "Elektrische Messungen • G1 E + D",
    title: "Elektrische Messungen für einen klaren Überblick über Ihre Anlage.",
    description:
      "Wir führen Abnahme- und wiederkehrende Messungen elektrischer Anlagen durch. Wir prüfen Schutzparameter, erkennen Unregelmäßigkeiten und erstellen eine Messdokumentation.",
    primary: "Messungen anfragen",
    secondary: "Leistungsumfang ansehen",
    qualification: "Qualifikationen G1 E + D",
    qualificationText:
      "Die Qualifikationen umfassen den Betrieb und die Überwachung elektrischer Geräte, Anlagen und Netze.",
    scopeLabel: "Messumfang",
    scopeTitle: "Prüfung der wichtigsten Anlagenparameter",
    scopeDescription:
      "Der Leistungsumfang wird an die Art der Anlage, den Messzweck und die Anforderungen des Objekts angepasst.",
    measurements: [
      {
        title: "Fehlerschleifenimpedanz",
        description:
          "Überprüfung der Stromkreisparameter im Hinblick auf die Wirksamkeit des Schutzes gegen elektrischen Schlag.",
        icon: "gauge",
      },
      {
        title: "Isolationswiderstand",
        description:
          "Bewertung des Isolationszustands von Leitungen und Stromkreisen.",
        icon: "cable",
      },
      {
        title: "RCD-Prüfung",
        description:
          "Prüfung von Fehlerstrom-Schutzeinrichtungen und deren Auslöseparametern.",
        icon: "zap",
      },
      {
        title: "Durchgängigkeit der Verbindungen",
        description:
          "Prüfung der Schutzleiter und des Potenzialausgleichs.",
        icon: "activity",
      },
    ],
    processLabel: "Arbeitsablauf",
    processTitle: "Von der Umfangsbestimmung bis zur Dokumentation",
    processDescription:
      "Jeder Auftrag beginnt mit der Festlegung des Anlagenumfangs und des Messzwecks.",
    steps: [
      {
        number: "01",
        title: "Umfang festlegen",
        description:
          "Wir klären die Art des Objekts, der Anlage und den Zweck der Messungen.",
      },
      {
        number: "02",
        title: "Messungen durchführen",
        description:
          "Wir führen die vereinbarten Prüf- und Messarbeiten durch.",
      },
      {
        number: "03",
        title: "Ergebnisse analysieren",
        description:
          "Wir überprüfen die Messwerte und weisen auf festgestellte Unregelmäßigkeiten hin.",
      },
      {
        number: "04",
        title: "Dokumentation",
        description:
          "Wir erstellen eine Dokumentation mit den Ergebnissen der Messungen.",
      },
    ],
    documentationLabel: "Messdokumentation",
    documentationTitle: "Ergebnisse zur Analyse und weiteren Verwendung",
    documentationDescription:
      "Nach Abschluss der Arbeiten erstellen wir eine Dokumentation mit den Messergebnissen. Der Umfang richtet sich nach der Anlage und dem vereinbarten Auftrag.",
    documentationItems: [
      "Zusammenstellung der durchgeführten Messungen",
      "Ergebnisse und während der Prüfung ermittelte Werte",
      "Informationen über festgestellte Unregelmäßigkeiten",
      "Hinweise auf Stromkreise oder Bauteile mit weiterem Prüfbedarf",
    ],
    noteTitle: "Der Messumfang ist entscheidend",
    noteDescription:
      "Art der Prüfungen und Dokumentation werden vor Arbeitsbeginn vereinbart. Die Messungen erfolgen im Rahmen der vorhandenen Qualifikationen und des vereinbarten Auftrags.",
    relatedLabel: "Ergänzende Leistungen",
    relatedTitle: "Mehr als die Anlagenprüfung",
    relatedDescription:
      "Bei festgestellten Unregelmäßigkeiten können weitere Maßnahmen zur Fehlerbehebung oder Modernisierung der Anlage besprochen werden.",
    relatedItems: [
      {
        title: "Automatisierung und Schaltschrankbau",
        description:
          "Modernisierung von Steuerungen, Schaltschränke und Elektroarbeiten.",
        href: "/elektryka-automatyka",
      },
      {
        title: "Thermografische Diagnostik",
        description:
          "Prüfung von Schaltanlagen, Verbindungen und Geräten auf thermische Unregelmäßigkeiten.",
        href: "/termowizja",
      },
    ],
    ctaLabel: "Kontakt",
    ctaTitle: "Benötigen Sie Messungen Ihrer elektrischen Anlage?",
    ctaDescription:
      "Kontaktieren Sie URSO INSTAL. Wir stimmen den Leistungsumfang, die Messart und die Durchführung ab.",
    ctaButton: "Zum Kontakt",
    back: "Zurück zur Startseite",
    footer: "URSO INSTAL • Elektrische Messungen",
  },
};

const iconMap = {
  gauge: Gauge,
  cable: Cable,
  zap: Zap,
  activity: Activity,
};

export default function PomiarySepPage() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="overflow-hidden bg-white text-[#171b20] transition-colors duration-300 dark:bg-[#101316] dark:text-[#edf0f2]">
      {/* HERO */}
      <section className="relative border-b border-black/10 dark:border-white/10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#55758b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
              {t.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#697078] dark:text-[#a6afb7] sm:text-lg">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="group inline-flex min-h-14 items-center justify-center gap-4 bg-[#243746] px-7 text-sm font-medium text-white transition-colors hover:bg-[#354f62] dark:bg-[#dce5eb] dark:text-[#151a1e] dark:hover:bg-white"
              >
                {t.primary}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#zakres"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-black/15 px-7 text-sm font-medium transition-colors hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/[0.05]"
              >
                {t.secondary}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[340px] overflow-hidden bg-[#1b2730] p-7 text-white sm:min-h-[410px] sm:p-10">
              <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full border border-white/10" />
              <div className="absolute right-8 top-8 h-40 w-40 rounded-full border border-white/10" />

              <div className="relative flex h-full min-h-[280px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                    URSO INSTAL
                  </span>
                  <Zap size={23} strokeWidth={1.4} className="text-[#9cb6c8]" />
                </div>

                <div className="py-12">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center border border-white/20 bg-white/[0.06]">
                    <ShieldCheck size={27} strokeWidth={1.4} />
                  </div>
                  <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    G1 E + D
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
                    {t.qualificationText}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="text-xs text-white/60">
                    {t.qualification}
                  </span>
                  <span className="text-xs font-medium tracking-widest text-[#b7cbd8]">
                    01 / 04
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 -z-0 h-full w-full border border-[#55758b]/30" />
          </div>
        </div>
      </section>

      {/* ZAKRES POMIARÓW */}
      <section id="zakres" className="scroll-mt-24">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-12 max-w-2xl">
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

          <div className="grid grid-cols-1 border-l border-t border-black/10 dark:border-white/10 sm:grid-cols-2">
            {t.measurements.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={item.title}
                  className="group border-b border-r border-black/10 p-7 transition-colors hover:bg-[#f7f8f9] dark:border-white/10 dark:hover:bg-white/[0.035] sm:p-9"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-black/10 text-[#55758b] dark:border-white/15">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs tabular-nums text-[#9aa1a7]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="bg-[#f4f6f7] dark:bg-[#171c20]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.processLabel}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.processTitle}
            </h2>
            <p className="mt-5 leading-7 text-[#697078] dark:text-[#a6afb7]">
              {t.processDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step) => (
              <div
                key={step.number}
                className="border-t border-[#9eabb4] pt-6 dark:border-white/20"
              >
                <span className="text-sm font-medium tracking-widest text-[#55758b]">
                  {step.number}
                </span>
                <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOKUMENTACJA */}
      <section>
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-28">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.documentationLabel}
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.documentationTitle}
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-[#697078] dark:text-[#a6afb7]">
              {t.documentationDescription}
            </p>
          </div>

          <div className="border border-black/10 p-7 dark:border-white/10 sm:p-9">
            <div className="mb-8 flex items-center gap-4 border-b border-black/10 pb-6 dark:border-white/10">
              <div className="flex h-12 w-12 items-center justify-center bg-[#eaf0f3] text-[#45677e] dark:bg-[#26343e] dark:text-[#c2d4df]">
                <FileCheck2 size={23} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold">URSO INSTAL</p>
                <p className="mt-1 text-xs text-[#899198]">
                  {t.documentationLabel}
                </p>
              </div>
            </div>

            <ul className="space-y-5">
              {t.documentationItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={17}
                    className="mt-0.5 shrink-0 text-[#55758b]"
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

      {/* INFORMACJA */}
      <section className="border-y border-black/10 bg-[#f4f6f7] dark:border-white/10 dark:bg-[#171c20]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="flex items-start gap-5">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-[#55758b]/30 text-[#55758b]">
              <ClipboardCheck size={21} />
            </div>
            <div className="max-w-3xl">
              <h3 className="font-semibold">{t.noteTitle}</h3>
              <p className="mt-2 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                {t.noteDescription}
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-[#55758b]">
            G1 E + D
          </span>
        </div>
      </section>

      {/* POWIAZANE USLUGI */}
      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.relatedLabel}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.relatedTitle}
            </h2>
            <p className="mt-5 leading-7 text-[#697078] dark:text-[#a6afb7]">
              {t.relatedDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {t.relatedItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-48 flex-col justify-between border border-black/10 p-7 transition-colors hover:border-[#55758b]/60 hover:bg-[#f7f8f9] dark:border-white/10 dark:hover:bg-white/[0.035] sm:p-9"
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#55758b]">
                    URSO INSTAL
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="scroll-mt-24 bg-[#1b2730] text-white"
      >
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
    </div>
  );
}
