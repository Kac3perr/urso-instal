
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircuitBoard,
  ClipboardCheck,
  Factory,
  Gauge,
  Layers3,
  Settings,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { useLocale } from "../components/providers/Providers";

import heroRozdzielnica from "../../public/images/hero-rozdzielnica.jpg";
import kameraTermowizyjna from "../../public/images/kamera-termowizyjna.png";

const content = {
  pl: {
    eyebrow: "URSO INSTAL / ELEKTRYKA I AUTOMATYKA",
    badge: "ELEKTROINSTALACJE / AUTOMATYKA PRZEMYSŁOWA",
    heroTitle: "Elektryka i automatyka dla wymagającego przemysłu.",
    heroDescription:
      "Projektowanie i prefabrykacja szaf sterowniczych, modernizacja maszyn, systemy sterowania PLC oraz pomiary elektryczne. Kompleksowe wsparcie techniczne – od wykonania instalacji po usuwanie usterek.",
    primaryCta: "Zapytaj o realizację",
    secondaryCta: "Poznaj zakres usług",
    introEyebrow: "ZAKRES DZIAŁALNOŚCI",
    introTitle: "Rozwiązania techniczne dopasowane do potrzeb zakładu.",
    introDescription:
      "Wspieramy zakłady przemysłowe w zakresie instalacji elektrycznych i automatyki. Realizujemy prace związane z budową nowych układów, modernizacją istniejących rozwiązań oraz diagnostyką i usuwaniem usterek.",
    services: [
      {
        number: "01",
        title: "Prefabrykacja szaf sterowniczych",
        description:
          "Projektowanie i montaż nowych rozdzielnic oraz pulpitów sterujących. Przygotowanie układów elektrycznych i sterowniczych zgodnie z potrzebami instalacji.",
        icon: Layers3,
      },
      {
        number: "02",
        title: "Retrofit i modernizacja maszyn",
        description:
          "Wymiana przestarzałych układów zasilania, integracja falowników oraz przebudowa układów sterowania maszyn.",
        icon: Settings,
      },
      {
        number: "03",
        title: "Sterowanie PLC i Safety",
        description:
          "Modernizacja sterowania PLC oraz wdrażanie układów bezpiecznego zatrzymania maszyn i rozwiązań z zakresu Safety.",
        icon: Workflow,
      },
      {
        number: "04",
        title: "Pomiary elektryczne SEP G1 E+D",
        description:
          "Pomiary odbiorcze i okresowe instalacji elektrycznych, obejmujące między innymi pętlę zwarcia, rezystancję izolacji, RCD i ciągłość połączeń.",
        icon: Gauge,
      },
    ],
    prefabricationEyebrow: "PREFABRYKACJA / ROZDZIELNICE",
    prefabricationTitle: "Szafy sterownicze i rozdzielnice.",
    prefabricationDescription:
      "Realizujemy prefabrykację szaf sterowniczych i pulpitów operatorskich. Zakres prac dobierany jest do funkcji urządzenia, wymagań instalacji oraz potrzeb zakładu.",
    prefabricationPoints: [
      "Projektowanie i przygotowanie układów sterowniczych.",
      "Prefabrykacja szaf i rozdzielnic elektrycznych.",
      "Montaż aparatury i elementów sterowania.",
      "Przygotowanie rozwiązań dopasowanych do konkretnej maszyny lub instalacji.",
    ],
    modernizationEyebrow: "MODERNIZACJA / AUTOMATYKA",
    modernizationTitle: "Modernizacja zamiast kosztownej wymiany całego układu.",
    modernizationDescription:
      "Przebudowa istniejących instalacji pozwala dostosować maszyny i urządzenia do aktualnych potrzeb technologicznych. Zakres modernizacji może obejmować układy zasilania, napędy, sterowanie PLC oraz rozwiązania bezpieczeństwa.",
    modernizationPoints: [
      "Wymiana przestarzałych układów zasilania.",
      "Integracja falowników i modernizacja napędów.",
      "Przebudowa sterowania PLC.",
      "Montaż układów bezpiecznego zatrzymania Safety.",
    ],
    measurementsEyebrow: "POMIARY / SEP G1 E+D",
    measurementsTitle: "Pomiary elektryczne i kontrola instalacji.",
    measurementsDescription:
      "Wykonujemy pomiary odbiorcze i okresowe instalacji elektrycznych. Wyniki pomiarów pozwalają ocenić stan instalacji i zidentyfikować nieprawidłowości wymagające dalszych działań.",
    measurementItems: [
      "Pomiary impedancji pętli zwarcia.",
      "Pomiary rezystancji izolacji.",
      "Badania wyłączników różnicowoprądowych RCD.",
      "Sprawdzenie ciągłości połączeń ochronnych.",
    ],
    repairsEyebrow: "SERWIS / USUWANIE USTEREK",
    repairsTitle: "Od wykrycia problemu do jego usunięcia.",
    repairsDescription:
      "Zakres usług obejmuje również usuwanie usterek stwierdzonych podczas przeglądów i pomiarów. Pozwala to przejść od diagnozy do konkretnych działań technicznych.",
    repairsPoints: [
      "Naprawa przegrzewających się połączeń.",
      "Wymiana zużytych aparatów elektrycznych.",
      "Modernizacja i uporządkowanie okablowania.",
      "Usuwanie usterek wykrytych podczas inspekcji.",
    ],
    thermographyEyebrow: "DIAGNOSTYKA / TERMOWIZJA",
    thermographyTitle: "Połącz automatykę z diagnostyką termiczną.",
    thermographyDescription:
      "W ramach działalności URSO INSTAL realizujemy również inspekcje termowizyjne instalacji i urządzeń przemysłowych. Diagnostyka termiczna może wspierać identyfikację nieprawidłowości w rozdzielnicach, szafach sterowniczych i napędach.",
    thermographyButton: "Poznaj usługi termowizyjne",
    contactEyebrow: "KONTAKT / URSO INSTAL",
    contactTitle: "Porozmawiajmy o Twojej instalacji.",
    contactDescription:
      "Opowiedz nam o planowanej prefabrykacji, modernizacji maszyny lub potrzebnych pomiarach. Omówimy zakres prac i możliwe rozwiązania.",
    company: "URSO INSTAL – Wojciech Jochemczyk",
    qualification: "Uprawnienia SEP G1 E+D",
    area: "Obszar działania: Śląsk / Cała Polska",
    nip: "NIP: 6462771321",
    contactButton: "Przejdź do kontaktu",
    back: "Wróć do wyboru usług",
  },

  en: {
    eyebrow: "URSO INSTAL / ELECTRICAL ENGINEERING & AUTOMATION",
    badge: "ELECTRICAL INSTALLATIONS / INDUSTRIAL AUTOMATION",
    heroTitle: "Electrical engineering and automation for demanding industry.",
    heroDescription:
      "Design and prefabrication of control cabinets, machine modernisation, PLC control systems and electrical measurements. Technical support from installation work to fault removal.",
    primaryCta: "Discuss your project",
    secondaryCta: "Explore our services",
    introEyebrow: "OUR SERVICES",
    introTitle: "Technical solutions tailored to your facility.",
    introDescription:
      "We support industrial facilities with electrical installations and automation. Our work includes new systems, modernisation of existing solutions, diagnostics and fault removal.",
    services: [
      {
        number: "01",
        title: "Control cabinet prefabrication",
        description:
          "Design and assembly of new switchboards and control panels. Preparation of electrical and control systems according to installation requirements.",
        icon: Layers3,
      },
      {
        number: "02",
        title: "Machine retrofit and modernisation",
        description:
          "Replacement of outdated power systems, inverter integration and upgrades to machine control systems.",
        icon: Settings,
      },
      {
        number: "03",
        title: "PLC control and Safety",
        description:
          "PLC control upgrades and implementation of machine safety and safe-stop systems.",
        icon: Workflow,
      },
      {
        number: "04",
        title: "SEP G1 E+D electrical measurements",
        description:
          "Initial and periodic electrical measurements, including fault loop impedance, insulation resistance, RCD and continuity testing.",
        icon: Gauge,
      },
    ],
    prefabricationEyebrow: "PREFABRICATION / SWITCHBOARDS",
    prefabricationTitle: "Control cabinets and switchboards.",
    prefabricationDescription:
      "We provide prefabrication of control cabinets and operator panels. The scope of work is tailored to the function of the equipment, installation requirements and facility needs.",
    prefabricationPoints: [
      "Design and preparation of control systems.",
      "Prefabrication of electrical cabinets and switchboards.",
      "Installation of electrical components and control equipment.",
      "Solutions tailored to specific machines and installations.",
    ],
    modernizationEyebrow: "MODERNISATION / AUTOMATION",
    modernizationTitle: "Modernisation instead of replacing the entire system.",
    modernizationDescription:
      "Upgrading existing installations helps adapt machinery and equipment to current technological requirements. Modernisation may include power systems, drives, PLC control and safety solutions.",
    modernizationPoints: [
      "Replacement of outdated power systems.",
      "Inverter integration and drive modernisation.",
      "PLC control upgrades.",
      "Installation of Safety systems.",
    ],
    measurementsEyebrow: "MEASUREMENTS / SEP G1 E+D",
    measurementsTitle: "Electrical measurements and installation testing.",
    measurementsDescription:
      "We perform initial and periodic electrical installation measurements. The results help assess the condition of an installation and identify irregularities requiring further action.",
    measurementItems: [
      "Fault loop impedance measurements.",
      "Insulation resistance measurements.",
      "RCD testing.",
      "Protective conductor continuity testing.",
    ],
    repairsEyebrow: "SERVICE / FAULT REMOVAL",
    repairsTitle: "From identifying a problem to resolving it.",
    repairsDescription:
      "Our services also include correcting faults identified during inspections and measurements. This makes it possible to move from diagnosis to practical technical work.",
    repairsPoints: [
      "Repair of overheated electrical connections.",
      "Replacement of worn electrical components.",
      "Wiring upgrades and improvements.",
      "Removal of faults identified during inspections.",
    ],
    thermographyEyebrow: "DIAGNOSTICS / THERMOGRAPHY",
    thermographyTitle: "Combine automation with thermal diagnostics.",
    thermographyDescription:
      "URSO INSTAL also performs thermographic inspections of industrial installations and equipment. Thermal diagnostics can support the identification of irregularities in switchboards, control cabinets and drives.",
    thermographyButton: "Explore thermography services",
    contactEyebrow: "CONTACT / URSO INSTAL",
    contactTitle: "Let's discuss your installation.",
    contactDescription:
      "Tell us about your planned prefabrication, machine modernisation or required measurements. We will discuss the scope of work and possible solutions.",
    company: "URSO INSTAL – Wojciech Jochemczyk",
    qualification: "SEP G1 E+D qualifications",
    area: "Service area: Silesia / Throughout Poland",
    nip: "Tax ID: 6462771321",
    contactButton: "Go to contact",
    back: "Back to service selection",
  },

  de: {
    eyebrow: "URSO INSTAL / ELEKTROTECHNIK & AUTOMATISIERUNG",
    badge: "ELEKTROINSTALLATIONEN / INDUSTRIEAUTOMATION",
    heroTitle: "Elektrotechnik und Automatisierung für anspruchsvolle Industrie.",
    heroDescription:
      "Planung und Bau von Schaltschränken, Maschinenmodernisierung, SPS-Steuerungen und elektrische Messungen. Technische Unterstützung von der Installation bis zur Fehlerbehebung.",
    primaryCta: "Projekt besprechen",
    secondaryCta: "Leistungen kennenlernen",
    introEyebrow: "LEISTUNGSBEREICHE",
    introTitle: "Technische Lösungen für Ihren Betrieb.",
    introDescription:
      "Wir unterstützen Industriebetriebe im Bereich Elektroinstallationen und Automatisierung. Dazu gehören neue Anlagen, die Modernisierung bestehender Lösungen, Diagnostik und Fehlerbehebung.",
    services: [
      {
        number: "01",
        title: "Schaltschrankbau",
        description:
          "Planung und Montage neuer Schaltanlagen und Bedienpulte. Vorbereitung elektrischer Steuerungssysteme entsprechend den Anforderungen der Anlage.",
        icon: Layers3,
      },
      {
        number: "02",
        title: "Retrofit und Maschinenmodernisierung",
        description:
          "Erneuerung veralteter Stromversorgungssysteme, Integration von Frequenzumrichtern und Modernisierung der Maschinensteuerung.",
        icon: Settings,
      },
      {
        number: "03",
        title: "SPS-Steuerung und Safety",
        description:
          "Modernisierung von SPS-Steuerungen und Umsetzung von Sicherheits- und sicheren Stoppsystemen für Maschinen.",
        icon: Workflow,
      },
      {
        number: "04",
        title: "Elektrische Messungen SEP G1 E+D",
        description:
          "Erst- und Wiederholungsmessungen elektrischer Anlagen, einschließlich Schleifenimpedanz, Isolationswiderstand, RCD und Durchgängigkeit.",
        icon: Gauge,
      },
    ],
    prefabricationEyebrow: "SCHALTANLAGEN / SCHALTSCHRANKBAU",
    prefabricationTitle: "Schaltschränke und Steueranlagen.",
    prefabricationDescription:
      "Wir fertigen Schaltschränke und Bedienpulte. Der Leistungsumfang wird an die Funktion des Geräts, die Anforderungen der Installation und die Bedürfnisse des Betriebs angepasst.",
    prefabricationPoints: [
      "Planung und Vorbereitung von Steuerungssystemen.",
      "Fertigung elektrischer Schaltschränke und Schaltanlagen.",
      "Montage elektrischer Komponenten und Steuergeräte.",
      "Lösungen für bestimmte Maschinen und Anlagen.",
    ],
    modernizationEyebrow: "MODERNISIERUNG / AUTOMATISIERUNG",
    modernizationTitle: "Modernisierung statt Austausch des gesamten Systems.",
    modernizationDescription:
      "Die Modernisierung bestehender Anlagen ermöglicht die Anpassung von Maschinen und Geräten an aktuelle technologische Anforderungen. Dazu können Stromversorgung, Antriebe, SPS-Steuerungen und Sicherheitslösungen gehören.",
    modernizationPoints: [
      "Austausch veralteter Stromversorgungssysteme.",
      "Integration von Frequenzumrichtern und Modernisierung von Antrieben.",
      "Modernisierung der SPS-Steuerung.",
      "Installation von Safety-Systemen.",
    ],
    measurementsEyebrow: "MESSUNGEN / SEP G1 E+D",
    measurementsTitle: "Elektrische Messungen und Anlagenprüfung.",
    measurementsDescription:
      "Wir führen Erst- und Wiederholungsmessungen elektrischer Anlagen durch. Die Ergebnisse helfen, den Zustand der Anlage zu beurteilen und Unregelmäßigkeiten zu erkennen.",
    measurementItems: [
      "Messung der Schleifenimpedanz.",
      "Messung des Isolationswiderstands.",
      "Prüfung von RCD-Schutzschaltern.",
      "Prüfung der Durchgängigkeit von Schutzleitern.",
    ],
    repairsEyebrow: "SERVICE / FEHLERBEHEBUNG",
    repairsTitle: "Vom Erkennen des Problems bis zur Behebung.",
    repairsDescription:
      "Unsere Leistungen umfassen auch die Beseitigung von Fehlern, die bei Inspektionen und Messungen festgestellt werden.",
    repairsPoints: [
      "Reparatur überhitzter elektrischer Verbindungen.",
      "Austausch verschlissener elektrischer Komponenten.",
      "Modernisierung und Verbesserung der Verkabelung.",
      "Behebung bei Inspektionen festgestellter Mängel.",
    ],
    thermographyEyebrow: "DIAGNOSTIK / THERMOGRAFIE",
    thermographyTitle: "Automatisierung mit thermischer Diagnostik verbinden.",
    thermographyDescription:
      "URSO INSTAL führt auch thermografische Inspektionen industrieller Anlagen und Geräte durch. Die thermische Diagnostik unterstützt die Erkennung von Unregelmäßigkeiten in Schaltanlagen, Schaltschränken und Antrieben.",
    thermographyButton: "Thermografie-Leistungen entdecken",
    contactEyebrow: "KONTAKT / URSO INSTAL",
    contactTitle: "Sprechen wir über Ihre Anlage.",
    contactDescription:
      "Erzählen Sie uns von Ihrer geplanten Schaltschrankfertigung, Maschinenmodernisierung oder den benötigten Messungen. Wir besprechen den Leistungsumfang und mögliche Lösungen.",
    company: "URSO INSTAL – Wojciech Jochemczyk",
    qualification: "SEP-Berechtigungen G1 E+D",
    area: "Einsatzgebiet: Schlesien / Ganz Polen",
    nip: "Steuernummer: 6462771321",
    contactButton: "Zum Kontakt",
    back: "Zurück zur Leistungsauswahl",
  },
};

export default function ElektrykaAutomatykaPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main className="bg-[#f4f4f2] text-[#202326] dark:bg-[#171b1f] dark:text-[#f2f4f5]">
      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[#20272d] text-white lg:min-h-[690px]">
        <Image
          src={heroRozdzielnica}
          alt="Szafa sterownicza i instalacja elektryczna"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#11191f]/95 via-[#11191f]/85 to-[#11191f]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#11191f]/60 via-transparent to-[#11191f]/10" />

        <div className="mx-auto flex min-h-[650px] max-w-[1800px] items-center px-5 py-20 sm:px-8 lg:min-h-[690px] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <CircuitBoard size={16} />
              {t.badge}
            </div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#b5c7d2]">
              {t.eyebrow}
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {t.heroDescription}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#kontakt"
                className="inline-flex min-h-14 items-center justify-between gap-6 rounded-sm bg-[#f4f4f2] px-6 py-4 text-sm font-semibold text-[#202326] transition-colors hover:bg-white"
              >
                {t.primaryCta}
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="#zakres"
                className="inline-flex min-h-14 items-center justify-between gap-6 rounded-sm border border-white/50 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {t.secondaryCta}
                <ArrowDown size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-[#d9dcda] dark:border-[#343c43]">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.introEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.introTitle}
            </h2>
          </div>

          <p className="max-w-3xl self-end text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
            {t.introDescription}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="zakres" className="scroll-mt-24">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-0 border-l border-t border-[#d9dcda] dark:border-[#343c43] sm:grid-cols-2">
            {t.services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="border-b border-r border-[#d9dcda] p-7 sm:p-9 dark:border-[#343c43]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[#8a9499]">
                      {service.number} / 04
                    </span>
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#496a7d] dark:text-[#9ab7c7]"
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-semibold leading-snug sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#646d72] dark:text-[#b0bac2]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREFABRICATION */}
      <section className="border-y border-[#d9dcda] bg-[#eceeec] dark:border-[#343c43] dark:bg-[#1d252a]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12 lg:py-20">
          <div className="relative min-h-[320px] overflow-hidden rounded-sm bg-[#252b2f] sm:min-h-[440px]">
            <Image
              src={heroRozdzielnica}
              alt="Prefabrykacja szafy sterowniczej"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.prefabricationEyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.prefabricationTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.prefabricationDescription}
            </p>

            <div className="mt-8 space-y-4">
              {t.prefabricationPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                  />
                  <p className="text-sm leading-6 text-[#41494e] dark:text-[#d2d8dc]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODERNISATION */}
      <section>
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.modernizationEyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.modernizationTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.modernizationDescription}
            </p>

            <div className="mt-8 space-y-4">
              {t.modernizationPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                  />
                  <p className="text-sm leading-6 text-[#41494e] dark:text-[#d2d8dc]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-sm bg-[#252b2f] sm:min-h-[470px]">
            <Image
              src={kameraTermowizyjna}
              alt="Diagnostyka techniczna urządzeń przemysłowych"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MEASUREMENTS */}
      <section className="border-y border-[#d9dcda] bg-[#eceeec] dark:border-[#343c43] dark:bg-[#1d252a]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.measurementsEyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.measurementsTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.measurementsDescription}
            </p>
          </div>

          <div className="grid content-center gap-0">
            {t.measurementItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-[#d0d5d2] py-5 first:pt-0 dark:border-[#39444b]"
              >
                <ClipboardCheck
                  size={21}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                />
                <p className="text-sm font-medium leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPAIRS */}
      <section>
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.repairsEyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.repairsTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.repairsDescription}
            </p>
          </div>

          <div className="grid content-center gap-5 sm:grid-cols-2">
            {t.repairsPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 border-l-2 border-[#66879a] py-2 pl-5"
              >
                <p className="text-sm leading-6 text-[#41494e] dark:text-[#d2d8dc]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THERMOGRAPHY CROSS-LINK */}
      <section className="border-y border-[#d9dcda] bg-[#eceeec] dark:border-[#343c43] dark:bg-[#1d252a]">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.thermographyEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              {t.thermographyTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#646d72] dark:text-[#b0bac2]">
              {t.thermographyDescription}
            </p>
          </div>

          <Link
            href="/termowizja"
            className="inline-flex min-h-12 items-center justify-between gap-6 border border-[#496a7d] px-5 py-3 text-sm font-semibold text-[#365b70] transition-colors hover:bg-[#496a7d] hover:text-white dark:border-[#7899ab] dark:text-[#c0d8e5] dark:hover:bg-[#496a7d] dark:hover:text-white"
          >
            {t.thermographyButton}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="kontakt"
        className="scroll-mt-24 border-t border-[#d9dcda] dark:border-[#343c43]"
      >
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-20">
          <div className="rounded-sm bg-[#20272d] p-7 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              {t.contactEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              {t.contactTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70">
              {t.contactDescription}
            </p>

            <div className="mt-10 border-t border-white/15 pt-7">
              <h3 className="font-semibold">{t.company}</h3>
              <p className="mt-2 text-sm text-white/65">
                {t.qualification}
              </p>

              <div className="mt-7 space-y-3 text-sm text-white/80">
                <p>{t.area}</p>
                <p>{t.nip}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#e8ebea] text-[#365b70] dark:bg-[#27343c] dark:text-[#b4cbd8]">
              <Zap size={24} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">
              {locale === "pl"
                ? "Opowiedz nam o swoim projekcie."
                : locale === "en"
                  ? "Tell us about your project."
                  : "Erzählen Sie uns von Ihrem Projekt."}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#646d72] dark:text-[#b0bac2]">
              {t.contactDescription}
            </p>

            <Link
              href="/kontakt"
              className="mt-8 inline-flex min-h-14 w-fit items-center justify-between gap-8 rounded-sm bg-[#20272d] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#365b70] dark:bg-[#e9edef] dark:text-[#202326] dark:hover:bg-white"
            >
              {t.contactButton}
              <ArrowUpRight size={19} />
            </Link>

            <Link
              href="/"
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm text-[#646d72] transition-colors hover:text-[#202326] dark:text-[#b0bac2] dark:hover:text-white"
            >
              <ArrowRight size={16} className="rotate-180" />
              {t.back}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
