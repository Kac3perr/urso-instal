
"use client";

import Image from "next/image";
import Link from "next/link";
import {
   ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,

  BadgeCheck,
  Check,
  CircuitBoard,
  Factory,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";
import { useLocale } from "../components/providers/Providers";

import heroRozdzielnica from "../../public/images/optimized/hero-rozdzielnica.webp";
import kameraTermowizyjna from "../../public/images/optimized/kamera-termowizyjna.webp";
import about from "../../public/images/optimized/about.webp";
const content = {
  pl: {
    eyebrow: "URSO INSTAL / O FIRMIE",
    badge: "ELEKTRYKA / AUTOMATYKA / DIAGNOSTYKA",
    heroTitle: "Technika przemysłowa. Diagnostyka. Bezpieczeństwo.",
    heroDescription:
      "URSO INSTAL to działalność Wojciecha Jochemczyka, łącząca diagnostykę termowizyjną z usługami elektroinstalacyjnymi i automatyką przemysłową.",
    primary: "Poznaj nasze usługi",
    secondary: "Skontaktuj się z nami",
    introEyebrow: "KIM JESTEŚMY",
    introTitle: "Jedno miejsce. Dwa uzupełniające się obszary działalności.",
    introDescription:
      "Działalność URSO INSTAL koncentruje się na technicznych potrzebach zakładów przemysłowych. Łączymy diagnostykę termowizyjną urządzeń i instalacji z praktycznym wsparciem w zakresie elektryki, prefabrykacji oraz automatyki.",
    introSecond:
      "Takie połączenie pozwala nie tylko identyfikować nieprawidłowości, ale również wspierać dalsze działania techniczne związane z modernizacją i usuwaniem usterek.",
    pillarsEyebrow: "OBSZARY DZIAŁALNOŚCI",
    pillarsTitle: "Dwa filary URSO INSTAL.",
    thermographyTitle: "Termowizja przemysłowa",
    thermographyDescription:
      "Diagnostyka termiczna rozdzielnic, stacji transformatorowych, szaf sterowniczych, maszyn i napędów. Inspekcje oraz dokumentacja pomiarowa przygotowana z uwzględnieniem wymagań technicznych.",
    thermographyPoints: [
      "Inspekcje instalacji nn/SN i stacji transformatorowych.",
      "Diagnostyka szaf sterowniczych i urządzeń przemysłowych.",
      "Raporty z termogramami, lokalizacją anomalii i priorytetem naprawy.",
    ],
    automationTitle: "Elektryka i automatyka",
    automationDescription:
      "Prefabrykacja szaf sterowniczych, modernizacja maszyn, układy PLC i Safety, pomiary elektryczne oraz usuwanie usterek porewizyjnych.",
    automationPoints: [
      "Prefabrykacja rozdzielnic i szaf sterowniczych.",
      "Modernizacja układów zasilania i sterowania.",
      "Pomiary SEP G1 E+D oraz usuwanie usterek.",
    ],
    qualificationsEyebrow: "KWALIFIKACJE I KOMPETENCJE",
    qualificationsTitle: "Wiedza techniczna poparta kwalifikacjami.",
    qualificationsDescription:
      "W pracy z instalacjami przemysłowymi liczy się nie tylko sam pomiar, ale również prawidłowa interpretacja wyników i znajomość urządzeń, których dotyczy diagnostyka.",
    qualifications: [
      {
        title: "ISO 18436-7 Level 1",
        description:
          "Certyfikacja w zakresie diagnostyki termograficznej maszyn i urządzeń przemysłowych.",
        icon: Award,
      },
      {
        title: "SEP G1 E+D",
        description:
          "Uprawnienia w zakresie eksploatacji i dozoru urządzeń, instalacji i sieci elektroenergetycznych.",
        icon: Zap,
      },
      {
        title: "Diagnostyka i dokumentacja",
        description:
          "Połączenie badań termowizyjnych z oceną techniczną instalacji i przygotowaniem dokumentacji.",
        icon: ShieldCheck,
      },
    ],
    approachEyebrow: "NASZE PODEJŚCIE",
    approachTitle: "Od rozpoznania problemu do konkretnego działania.",
    approachDescription:
      "Prace techniczne wymagają dokładności na każdym etapie. Dlatego istotne są właściwe warunki pomiaru, rzetelna dokumentacja oraz czytelne wskazanie wykrytych nieprawidłowości.",
    steps: [
      {
        number: "01",
        title: "Rozpoznanie potrzeb",
        description:
          "Ustalenie zakresu prac, rodzaju instalacji i wymagań technicznych.",
      },
      {
        number: "02",
        title: "Diagnostyka i realizacja",
        description:
          "Wykonanie inspekcji, pomiarów lub prac elektroinstalacyjnych.",
      },
      {
        number: "03",
        title: "Dokumentacja i zalecenia",
        description:
          "Przekazanie wyników oraz wskazanie wykrytych nieprawidłowości i dalszych działań.",
      },
    ],
    ownerEyebrow: "URSO INSTAL",
    ownerTitle: "Marcin Zdybek",
    ownerDescription:
      "Działalność obejmuje diagnostykę termowizyjną, elektrykę i automatykę przemysłową. Zakres realizacji dobierany jest do rodzaju instalacji oraz potrzeb zakładu.",
    ownerQualification:
      "Certyfikowany Termografista ISO 18436-7 Level 1 | Uprawnienia SEP G1 E+D",
    contactEyebrow: "POROZMAWIAJMY O WSPÓŁPRACY",
    contactTitle: "Potrzebujesz wsparcia technicznego dla swojego zakładu?",
    contactDescription:
      "Skontaktuj się z URSO INSTAL. Omówimy zakres diagnostyki, prefabrykacji, modernizacji lub pomiarów elektrycznych.",
    contactButton: "Przejdź do kontaktu",
    footerArea: "Śląsk / Cała Polska",
    back: "Wróć do wyboru usług",
  },

  en: {
    eyebrow: "URSO INSTAL / ABOUT US",
    badge: "ELECTRICAL ENGINEERING / AUTOMATION / DIAGNOSTICS",
    heroTitle: "Industrial technology. Diagnostics. Safety.",
    heroDescription:
      "URSO INSTAL is the business of Wojciech Jochemczyk, combining thermographic diagnostics with electrical installation services and industrial automation.",
    primary: "Explore our services",
    secondary: "Contact us",
    introEyebrow: "WHO WE ARE",
    introTitle: "One place. Two complementary areas of expertise.",
    introDescription:
      "URSO INSTAL focuses on the technical needs of industrial facilities. We combine thermal diagnostics of equipment and installations with practical support in electrical engineering, prefabrication and automation.",
    introSecond:
      "This combination makes it possible not only to identify irregularities but also to support further technical work related to modernisation and fault removal.",
    pillarsEyebrow: "OUR AREAS OF ACTIVITY",
    pillarsTitle: "The two pillars of URSO INSTAL.",
    thermographyTitle: "Industrial thermography",
    thermographyDescription:
      "Thermal diagnostics of switchboards, transformer stations, control cabinets, machinery and drives. Inspections and measurement documentation prepared with technical requirements in mind.",
    thermographyPoints: [
      "Inspections of LV/MV installations and transformer stations.",
      "Diagnostics of control cabinets and industrial equipment.",
      "Reports with thermograms, anomaly locations and repair priorities.",
    ],
    automationTitle: "Electrical engineering and automation",
    automationDescription:
      "Control cabinet prefabrication, machine modernisation, PLC and Safety systems, electrical measurements and post-inspection repairs.",
    automationPoints: [
      "Prefabrication of switchboards and control cabinets.",
      "Modernisation of power and control systems.",
      "SEP G1 E+D measurements and fault removal.",
    ],
    qualificationsEyebrow: "QUALIFICATIONS AND COMPETENCIES",
    qualificationsTitle: "Technical knowledge backed by qualifications.",
    qualificationsDescription:
      "Working with industrial installations requires more than taking measurements. It also requires correct interpretation of results and knowledge of the equipment being diagnosed.",
    qualifications: [
      {
        title: "ISO 18436-7 Level 1",
        description:
          "Certification in thermographic diagnostics of industrial machinery and equipment.",
        icon: Award,
      },
      {
        title: "SEP G1 E+D",
        description:
          "Qualifications covering operation and supervision of electrical equipment, installations and networks.",
        icon: Zap,
      },
      {
        title: "Diagnostics and documentation",
        description:
          "Combining thermal inspections with technical assessment of installations and preparation of documentation.",
        icon: ShieldCheck,
      },
    ],
    approachEyebrow: "OUR APPROACH",
    approachTitle: "From identifying a problem to taking action.",
    approachDescription:
      "Technical work requires accuracy at every stage. Proper measurement conditions, reliable documentation and clear identification of irregularities are essential.",
    steps: [
      {
        number: "01",
        title: "Understanding your needs",
        description:
          "Defining the scope of work, installation type and technical requirements.",
      },
      {
        number: "02",
        title: "Diagnostics and execution",
        description:
          "Carrying out inspections, measurements or electrical installation work.",
      },
      {
        number: "03",
        title: "Documentation and recommendations",
        description:
          "Providing results and identifying irregularities and recommended next steps.",
      },
    ],
    ownerEyebrow: "URSO INSTAL",
    ownerTitle: "Marcin Zdybek",
    ownerDescription:
      "The business covers thermographic diagnostics, electrical engineering and industrial automation. The scope of each project is tailored to the installation and facility requirements.",
    ownerQualification:
      "ISO 18436-7 Level 1 Certified Thermographer | SEP G1 E+D qualifications",
    contactEyebrow: "LET'S WORK TOGETHER",
    contactTitle: "Do you need technical support for your facility?",
    contactDescription:
      "Contact URSO INSTAL to discuss diagnostics, prefabrication, modernisation or electrical measurements.",
    contactButton: "Go to contact",
    footerArea: "Silesia / Throughout Poland",
    back: "Back to service selection",
  },

  de: {
    eyebrow: "URSO INSTAL / ÜBER UNS",
    badge: "ELEKTROTECHNIK / AUTOMATISIERUNG / DIAGNOSTIK",
    heroTitle: "Industrietechnik. Diagnostik. Sicherheit.",
    heroDescription:
      "URSO INSTAL ist das Unternehmen von Wojciech Jochemczyk und verbindet thermografische Diagnostik mit Elektroinstallationen und Industrieautomation.",
    primary: "Leistungen kennenlernen",
    secondary: "Kontakt aufnehmen",
    introEyebrow: "WER WIR SIND",
    introTitle: "Ein Unternehmen. Zwei ergänzende Tätigkeitsbereiche.",
    introDescription:
      "URSO INSTAL konzentriert sich auf die technischen Anforderungen von Industriebetrieben. Wir verbinden thermische Diagnostik von Anlagen und Geräten mit praktischer Unterstützung in Elektrotechnik, Schaltschrankbau und Automatisierung.",
    introSecond:
      "Diese Verbindung ermöglicht nicht nur die Erkennung von Unregelmäßigkeiten, sondern unterstützt auch weitere technische Maßnahmen zur Modernisierung und Fehlerbehebung.",
    pillarsEyebrow: "TÄTIGKEITSBEREICHE",
    pillarsTitle: "Die zwei Säulen von URSO INSTAL.",
    thermographyTitle: "Industriethermografie",
    thermographyDescription:
      "Thermische Diagnostik von Schaltanlagen, Trafostationen, Schaltschränken, Maschinen und Antrieben. Inspektionen und Messdokumentation unter Berücksichtigung technischer Anforderungen.",
    thermographyPoints: [
      "Inspektionen von NS/MS-Anlagen und Trafostationen.",
      "Diagnostik von Schaltschränken und Industrieanlagen.",
      "Berichte mit Thermogrammen, Anomalieorten und Reparaturprioritäten.",
    ],
    automationTitle: "Elektrotechnik und Automatisierung",
    automationDescription:
      "Schaltschrankbau, Maschinenmodernisierung, SPS- und Safety-Systeme, elektrische Messungen und die Behebung festgestellter Mängel.",
    automationPoints: [
      "Fertigung von Schaltanlagen und Schaltschränken.",
      "Modernisierung von Stromversorgungs- und Steuerungssystemen.",
      "SEP-Messungen G1 E+D und Fehlerbehebung.",
    ],
    qualificationsEyebrow: "QUALIFIKATIONEN UND KOMPETENZEN",
    qualificationsTitle: "Technisches Wissen mit entsprechenden Qualifikationen.",
    qualificationsDescription:
      "Bei der Arbeit mit Industrieanlagen kommt es nicht nur auf die Messung an, sondern auch auf die richtige Interpretation der Ergebnisse und Kenntnisse der untersuchten Geräte.",
    qualifications: [
      {
        title: "ISO 18436-7 Level 1",
        description:
          "Zertifizierung im Bereich der thermografischen Diagnostik von Industriemaschinen und -anlagen.",
        icon: Award,
      },
      {
        title: "SEP G1 E+D",
        description:
          "Berechtigungen für Betrieb und Aufsicht elektrischer Geräte, Anlagen und Netze.",
        icon: Zap,
      },
      {
        title: "Diagnostik und Dokumentation",
        description:
          "Verbindung thermografischer Inspektionen mit technischer Anlagenbewertung und Dokumentation.",
        icon: ShieldCheck,
      },
    ],
    approachEyebrow: "UNSER ANSATZ",
    approachTitle: "Von der Problemerkennung bis zur konkreten Maßnahme.",
    approachDescription:
      "Technische Arbeiten erfordern in jeder Phase Genauigkeit. Entscheidend sind geeignete Messbedingungen, zuverlässige Dokumentation und eine klare Darstellung festgestellter Unregelmäßigkeiten.",
    steps: [
      {
        number: "01",
        title: "Bedarfsermittlung",
        description:
          "Festlegung des Leistungsumfangs, der Anlagenart und der technischen Anforderungen.",
      },
      {
        number: "02",
        title: "Diagnostik und Ausführung",
        description:
          "Durchführung von Inspektionen, Messungen oder Elektroinstallationsarbeiten.",
      },
      {
        number: "03",
        title: "Dokumentation und Empfehlungen",
        description:
          "Übergabe der Ergebnisse sowie Darstellung festgestellter Mängel und weiterer Maßnahmen.",
      },
    ],
    ownerEyebrow: "URSO INSTAL",
    ownerTitle: "Marcin Zdybek",
    ownerDescription:
      "Das Unternehmen bietet thermografische Diagnostik, Elektrotechnik und Industrieautomation. Der Leistungsumfang wird an die jeweilige Anlage und die Anforderungen des Betriebs angepasst.",
    ownerQualification:
      "Zertifizierter Thermograf ISO 18436-7 Level 1 | SEP G1 E+D",
    contactEyebrow: "SPRECHEN WIR ÜBER EINE ZUSAMMENARBEIT",
    contactTitle: "Benötigen Sie technische Unterstützung für Ihren Betrieb?",
    contactDescription:
      "Kontaktieren Sie URSO INSTAL, um Diagnostik, Schaltschrankbau, Modernisierung oder elektrische Messungen zu besprechen.",
    contactButton: "Zum Kontakt",
    footerArea: "Schlesien / Ganz Polen",
    back: "Zurück zur Leistungsauswahl",
  },
};

export default function AboutPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main className="bg-[#f4f4f2] text-[#202326] dark:bg-[#171b1f] dark:text-[#f2f4f5]">
      {/* HERO */}
      <section className="relative isolate min-h-[610px] overflow-hidden bg-[#20272d] text-white lg:min-h-[660px]">
        <Image
          src={about}
          alt="Instalacja elektryczna w środowisku przemysłowym"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#11191f]/95 via-[#11191f]/80 to-[#11191f]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#11191f]/55 via-transparent to-[#11191f]/10" />

        <div className="mx-auto flex min-h-[610px] max-w-[1800px] items-center px-5 py-20 sm:px-8 lg:min-h-[660px] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <BadgeCheck size={16} />
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
                href="#obszary"
                className="inline-flex min-h-14 items-center justify-between gap-6 bg-[#f4f4f2] px-6 py-4 text-sm font-semibold text-[#202326] transition-colors hover:bg-white"
              >
                {t.primary}
                <ArrowDown size={18} />
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex min-h-14 items-center justify-between gap-6 border border-white/50 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {t.secondary}
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-[#d9dcda] dark:border-[#343c43]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.introEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.introTitle}
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.introDescription}
            </p>
            <p className="text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.introSecond}
            </p>
          </div>
        </div>
      </section>

      {/* TWO AREAS */}
      <section id="obszary" className="scroll-mt-24">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.pillarsEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.pillarsTitle}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* THERMOGRAPHY */}
            <article className="group flex flex-col border border-[#d9dcda] bg-white dark:border-[#343c43] dark:bg-[#1d252a]">
              <div className="relative min-h-[270px] overflow-hidden bg-[#252b2f] sm:min-h-[350px]">
                <Image
                  src={kameraTermowizyjna}
                  alt="Kamera wykorzystywana do diagnostyki termowizyjnej"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute left-6 top-6 border border-white/30 bg-[#172027]/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  01 / DIAGNOSTYKA
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-center gap-3 text-[#496a7d] dark:text-[#9ab7c7]">
                  <Thermometer size={22} strokeWidth={1.6} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                    URSO INSTAL
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {t.thermographyTitle}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2]">
                  {t.thermographyDescription}
                </p>

                <div className="mt-7 space-y-3">
                  {t.thermographyPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                      />
                      <p className="text-sm leading-6 text-[#41494e] dark:text-[#d2d8dc]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/termowizja"
                  className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#496a7d] pb-2 text-sm font-semibold text-[#365b70] transition-colors hover:text-[#202326] dark:text-[#b4cbd8] dark:hover:text-white"
                >
                  {locale === "pl"
                    ? "Poznaj usługi termowizyjne"
                    : locale === "en"
                      ? "Explore thermography services"
                      : "Thermografie-Leistungen entdecken"}
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            {/* ELECTRICAL AND AUTOMATION */}
            <article className="group flex flex-col border border-[#d9dcda] bg-white dark:border-[#343c43] dark:bg-[#1d252a]">
              <div className="relative min-h-[270px] overflow-hidden bg-[#252b2f] sm:min-h-[350px]">
                <Image
                  src={heroRozdzielnica}
                  alt="Szafa sterownicza instalacji przemysłowej"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute left-6 top-6 border border-white/30 bg-[#172027]/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  02 / AUTOMATYKA
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-center gap-3 text-[#496a7d] dark:text-[#9ab7c7]">
                  <CircuitBoard size={22} strokeWidth={1.6} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                    URSO INSTAL
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {t.automationTitle}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2]">
                  {t.automationDescription}
                </p>

                <div className="mt-7 space-y-3">
                  {t.automationPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                      />
                      <p className="text-sm leading-6 text-[#41494e] dark:text-[#d2d8dc]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/elektryka-automatyka"
                  className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#496a7d] pb-2 text-sm font-semibold text-[#365b70] transition-colors hover:text-[#202326] dark:text-[#b4cbd8] dark:hover:text-white"
                >
                  {locale === "pl"
                    ? "Poznaj ofertę elektryki i automatyki"
                    : locale === "en"
                      ? "Explore electrical and automation services"
                      : "Elektro- und Automatisierungsleistungen entdecken"}
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="border-y border-[#d9dcda] bg-[#eceeec] dark:border-[#343c43] dark:bg-[#1d252a]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
                {t.qualificationsEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {t.qualificationsTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
                {t.qualificationsDescription}
              </p>
            </div>

            <div className="space-y-0">
              {t.qualifications.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 border-b border-[#d0d5d2] py-6 first:pt-0 dark:border-[#39444b]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#496a7d] dark:bg-[#27343c] dark:text-[#b4cbd8]">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#646d72] dark:text-[#b0bac2]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WORK APPROACH */}
      <section>
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.approachEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.approachTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.approachDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-0 border-l border-t border-[#d9dcda] dark:border-[#343c43] md:grid-cols-3">
            {t.steps.map((step) => (
              <div
                key={step.number}
                className="border-b border-r border-[#d9dcda] p-7 sm:p-9 dark:border-[#343c43]"
              >
                <span className="text-sm font-semibold tracking-[0.16em] text-[#66879a] dark:text-[#9ab7c7]">
                  {step.number}
                </span>
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNER / COMPANY */}
      <section className="border-y border-[#d9dcda] bg-[#eceeec] dark:border-[#343c43] dark:bg-[#1d252a]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-12 lg:py-20">
          <div className="flex min-h-[260px] flex-col justify-between bg-[#20272d] p-7 text-white sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center border border-white/20 text-white">
              <Factory size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                {t.ownerEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold">{t.ownerTitle}</h2>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              URSO INSTAL
            </p>
            <p className="mt-4 text-base leading-8 text-[#41494e] dark:text-[#d2d8dc]">
              {t.ownerDescription}
            </p>
            <div className="mt-7 flex items-start gap-4 border-t border-[#d0d5d2] pt-6 dark:border-[#39444b]">
              <BadgeCheck
                size={23}
                className="shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
              />
              <p className="text-sm font-medium leading-6">
                {t.ownerQualification}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-b border-[#d9dcda] dark:border-[#343c43]">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.contactEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.contactDescription}
            </p>
            <p className="mt-5 text-xs text-[#929b9f]">{t.footerArea}</p>
          </div>

          <Link
            href="/kontakt"
            className="inline-flex min-h-14 items-center justify-between gap-8 bg-[#20272d] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#365b70] dark:bg-[#e9edef] dark:text-[#202326] dark:hover:bg-white"
          >
            {t.contactButton}
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      {/* BACK TO SELECTOR */}
      <div className="mx-auto max-w-[1600px] px-5 py-7 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#646d72] transition-colors hover:text-[#202326] dark:text-[#b0bac2] dark:hover:text-white"
        >
          <ArrowRight size={16} className="rotate-180" />
          {t.back}
        </Link>
      </div>
    </main>
  );
}
