
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
  ClipboardCheck,
  Factory,
  FileCheck2,
  Gauge,
  Layers3,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";
import { useLocale } from "../components/providers/Providers";

import kameraTermowizyjna from "../../public/images/optimized/kamera-termowizyjna.webp";

import termo1 from "../../public/images/optimized/termo1.webp";
import termo2 from "../../public/images/optimized/termo2.webp";
import termo3 from "../../public/images/optimized/termo3.webp";

const content = {
  pl: {
    eyebrow: "URSO INSTAL / TERMOWIZJA PRZEMYSŁOWA",
    badge: "ISO 18436-7 Level 1 Certified Thermographer",
    heroTitle: "Diagnostyka termowizyjna, której możesz zaufać.",
    heroDescription:
      "Profesjonalne inspekcje termowizyjne instalacji elektrycznych i urządzeń przemysłowych. Szczegółowa dokumentacja, identyfikacja zagrożeń i raporty przygotowane z myślą o wymaganiach ubezpieczycieli oraz działów Utrzymania Ruchu.",
    primaryCta: "Zamów inspekcję termowizyjną",
    secondaryCta: "Poznaj zakres badań",
    certificationTitle: "Certyfikacja i bezpieczeństwo dokumentacji",
    certificationIntro:
      "Prawidłowo wykonane badanie termowizyjne wymaga odpowiedniej metodologii, doświadczenia i znajomości warunków pracy diagnozowanych urządzeń.",
    certificationHeading:
      "W URSO INSTAL masz gwarancję profesjonalnego podejścia do dokumentacji:",
    credentials: [
      {
        title: "Certyfikacja ISO 18436-7 Level 1",
        description:
          "Badania wykonuje certyfikowany termografista z kwalifikacjami w zakresie diagnostyki maszyn i urządzeń przemysłowych.",
        icon: Award,
      },
      {
        title: "Standard raportowania Risk Engineering",
        description:
          "Przygotowujemy dokumentację według wymagań stosowanych w środowisku ubezpieczeniowym i przemysłowym.",
        icon: Layers3,
      },
      {
        title: "Uprawnienia SEP G1 E+D",
        description:
          "Połączenie wiedzy radiometrycznej z uprawnieniami elektroenergetycznymi pozwala właściwie interpretować i opisywać usterki elektryczne.",
        icon: Zap,
      },
    ],
    scopeEyebrow: "DIAGNOSTYKA RADIOmetryczna",
    scopeTitle: "Kompleksowe inspekcje termowizyjne",
    scopeDescription:
      "Badania pomagają identyfikować nieprawidłowości termiczne, ograniczać ryzyko awarii oraz wspierać działania prewencyjne w zakładach przemysłowych.",
    scopeItems: [
      {
        title: "Rozdzielnice nn/SN i stacje transformatorowe",
        description:
          "Wykrywanie przeciążeń, asymetrii obciążeń i nieprawidłowości rezystancji stykowej podczas pracy instalacji.",
        icon: Gauge,
      },
      {
        title: "Szafy sterownicze i automatyka",
        description:
          "Weryfikacja stanu zasilaczy, falowników, styczników oraz modułów sterujących.",
        icon: ClipboardCheck,
      },
      {
        title: "Park maszynowy i napędy",
        description:
          "Diagnostyka termiczna silników, przekładni i układów mechanicznych pod kątem zatarć oraz nierównomiernej pracy.",
        icon: Factory,
      },
      {
        title: "Infrastruktura krytyczna",
        description:
          "Kontrola baterii kondensatorów, mostów szynowych oraz przyłączy.",
        icon: ShieldCheck,
      },
    ],
    reportEyebrow: "DOKUMENTACJA POMIAROWA",
    reportTitle: "Raport, który dostarcza konkretnych informacji.",
    reportDescription:
      "Dokumentacja z inspekcji zawiera dane niezbędne do oceny stanu technicznego instalacji, lokalizacji nieprawidłowości i zaplanowania działań naprawczych.",
    reportItems: [
      "Metryczka metodologiczna: współczynnik emisyjności, temperatura otoczenia i odległość pomiaru.",
      "Informacja o obciążeniu badanego obwodu w procentach podczas pomiaru.",
      "Karty anomalii zawierające termogram, obraz widzialny i dokładną lokalizację punktu przegrzania.",
      "Klasyfikacja priorytetu naprawy: krytyczny, wysoki lub umiarkowany.",
      "Podpis certyfikowanego termografisty ISO 18436-7 Level 1.",
    ],
    reportNote:
      "Raport przygotowywany z myślą o potrzebach ubezpieczyciela oraz działu Utrzymania Ruchu.",
    automationEyebrow: "OD DIAGNOZY DO USUNIĘCIA USTERKI",
    automationTitle: "Nie kończymy na wskazaniu problemu.",
    automationDescription:
      "URSO INSTAL oferuje również wsparcie elektroinstalacyjne i automatyki. Dzięki temu po identyfikacji nieprawidłowości możliwe jest przejście do działań naprawczych i modernizacyjnych.",
    automationItems: [
      {
        title: "Prefabrykacja szaf sterowniczych",
        description:
          "Projektowanie i montaż nowych rozdzielnic oraz pulpitów sterujących.",
        icon: Layers3,
      },
      {
        title: "Retrofit i modernizacja maszyn",
        description:
          "Wymiana układów zasilania, integracja falowników, przebudowa sterowania PLC i układy bezpieczeństwa Safety.",
        icon: Factory,
      },
      {
        title: "Pomiary SEP G1 E+D",
        description:
          "Pomiary pętli zwarcia, rezystancji izolacji, badania RCD i ciągłości połączeń.",
        icon: Zap,
      },
      {
        title: "Usuwanie usterek porewizyjnych",
        description:
          "Naprawa przegrzewających się połączeń, wymiana zużytych aparatów i modernizacja okablowania.",
        icon: Thermometer,
      },
    ],
    contactEyebrow: "KONTAKT / URSO INSTAL",
    contactTitle: "Zamów inspekcję termowizyjną lub skonsultuj wymogi swojej polisy.",
    contactDescription:
      "Skontaktuj się z nami, aby omówić zakres badania, wymagania dokumentacyjne lub potrzeby techniczne Twojego zakładu.",
    company: "URSO INSTAL – Marcin Zdybek",
    qualification:
      "Certyfikowany Termografista ISO 18436-7 Level 1 | Uprawnienia SEP G1 E+D",
    phone: "Telefon: +48 534 485 858",
    email: "E-mail: ursoinstal@gmail.com",
    area: "Obszar działania: Śląsk / Cała Polska",
    nip: "NIP: 6462771321",
    contactButton: "Przejdź do kontaktu",
    back: "Wróć do wyboru usług",
  },

  en: {
    eyebrow: "URSO INSTAL / INDUSTRIAL THERMOGRAPHY",
    badge: "ISO 18436-7 Level 1 Certified Thermographer",
    heroTitle: "Thermal diagnostics you can rely on.",
    heroDescription:
      "Professional thermographic inspections of electrical installations and industrial equipment. Detailed documentation, identification of risks and reports prepared with the needs of insurers and maintenance departments in mind.",
    primaryCta: "Order a thermographic inspection",
    secondaryCta: "Explore inspection scope",
    certificationTitle: "Certification and documentation reliability",
    certificationIntro:
      "A proper thermographic inspection requires the right methodology, experience and knowledge of the operating conditions of the equipment being diagnosed.",
    certificationHeading:
      "At URSO INSTAL, professional documentation is a priority:",
    credentials: [
      {
        title: "ISO 18436-7 Level 1 certification",
        description:
          "Inspections are performed by a certified thermographer qualified in industrial machinery and equipment diagnostics.",
        icon: Award,
      },
      {
        title: "Risk Engineering reporting standard",
        description:
          "We prepare documentation according to standards used in insurance and industrial environments.",
        icon: Layers3,
      },
      {
        title: "SEP G1 E+D qualifications",
        description:
          "Combining radiometric knowledge with electrical qualifications enables proper interpretation and reporting of electrical faults.",
        icon: Zap,
      },
    ],
    scopeEyebrow: "RADIOMETRIC DIAGNOSTICS",
    scopeTitle: "Comprehensive thermographic inspections",
    scopeDescription:
      "Inspections help identify thermal irregularities, reduce the risk of failures and support preventive maintenance in industrial facilities.",
    scopeItems: [
      {
        title: "LV/MV switchboards and transformer stations",
        description:
          "Detection of overloads, load asymmetry and contact resistance irregularities while installations are operating.",
        icon: Gauge,
      },
      {
        title: "Control cabinets and automation",
        description:
          "Verification of power supplies, inverters, contactors and control modules.",
        icon: ClipboardCheck,
      },
      {
        title: "Machinery and drives",
        description:
          "Thermal diagnostics of motors, gearboxes and mechanical systems for signs of seizure and uneven operation.",
        icon: Factory,
      },
      {
        title: "Critical infrastructure",
        description:
          "Inspection of capacitor banks, busbar bridges and connections.",
        icon: ShieldCheck,
      },
    ],
    reportEyebrow: "INSPECTION DOCUMENTATION",
    reportTitle: "A report that provides meaningful information.",
    reportDescription:
      "Inspection documentation contains the data needed to assess the technical condition of an installation, locate irregularities and plan corrective actions.",
    reportItems: [
      "Methodology details: emissivity, ambient temperature and measurement distance.",
      "Information on the circuit load percentage during measurement.",
      "Anomaly sheets containing a thermogram, visible image and precise location of the overheating point.",
      "Repair priority classification: critical, high or moderate.",
      "Signature of an ISO 18436-7 Level 1 certified thermographer.",
    ],
    reportNote:
      "Reports are prepared with the needs of insurers and maintenance departments in mind.",
    automationEyebrow: "FROM DIAGNOSIS TO CORRECTIVE ACTION",
    automationTitle: "We do more than identify the problem.",
    automationDescription:
      "URSO INSTAL also provides electrical installation and automation support. Once an irregularity is identified, corrective and modernisation work can follow.",
    automationItems: [
      {
        title: "Control cabinet prefabrication",
        description:
          "Design and assembly of new switchboards and control panels.",
        icon: Layers3,
      },
      {
        title: "Machine retrofit and modernisation",
        description:
          "Power system replacement, inverter integration, PLC control upgrades and Safety systems.",
        icon: Factory,
      },
      {
        title: "SEP G1 E+D measurements",
        description:
          "Fault loop impedance, insulation resistance, RCD and continuity testing.",
        icon: Zap,
      },
      {
        title: "Post-inspection repairs",
        description:
          "Repair of overheated connections, replacement of worn components and wiring upgrades.",
        icon: Thermometer,
      },
    ],
    contactEyebrow: "CONTACT / URSO INSTAL",
    contactTitle:
      "Order a thermographic inspection or discuss your insurance requirements.",
    contactDescription:
      "Contact us to discuss the scope of an inspection, documentation requirements or the technical needs of your facility.",
    company: "URSO INSTAL – Marcin Zdybek",
    qualification:
      "ISO 18436-7 Level 1 Certified Thermographer | SEP G1 E+D qualifications",
    phone: "Phone: +48 534 485 858",
    email: "E-mail: ursoinstal@gmail.com",
    area: "Service area: Silesia / Throughout Poland",
    nip: "Tax ID: 6462771321",
    contactButton: "Go to contact",
    back: "Back to service selection",
  },

  de: {
    eyebrow: "URSO INSTAL / INDUSTRIETHERMOGRAFIE",
    badge: "ISO 18436-7 Level 1 Certified Thermographer",
    heroTitle: "Thermische Diagnostik, auf die Sie sich verlassen können.",
    heroDescription:
      "Professionelle thermografische Inspektionen elektrischer Anlagen und Industrieanlagen. Detaillierte Dokumentation, Erkennung von Risiken und Berichte für Versicherer und Instandhaltungsabteilungen.",
    primaryCta: "Thermografische Inspektion bestellen",
    secondaryCta: "Prüfungsumfang kennenlernen",
    certificationTitle: "Zertifizierung und zuverlässige Dokumentation",
    certificationIntro:
      "Eine fachgerechte thermografische Prüfung erfordert die richtige Methodik, Erfahrung und Kenntnisse der Betriebsbedingungen der untersuchten Anlagen.",
    certificationHeading:
      "Bei URSO INSTAL steht eine professionelle Dokumentation im Mittelpunkt:",
    credentials: [
      {
        title: "Zertifizierung ISO 18436-7 Level 1",
        description:
          "Die Prüfungen werden von einem zertifizierten Thermografen mit Qualifikation in der Diagnostik von Industriemaschinen und -anlagen durchgeführt.",
        icon: Award,
      },
      {
        title: "Risk-Engineering-Berichtsstandard",
        description:
          "Wir erstellen Dokumentationen nach Standards aus dem Versicherungs- und Industriebereich.",
        icon: Layers3,
      },
      {
        title: "SEP-Berechtigungen G1 E+D",
        description:
          "Die Verbindung von radiometrischem Wissen und elektrotechnischen Berechtigungen ermöglicht eine fachgerechte Bewertung elektrischer Fehler.",
        icon: Zap,
      },
    ],
    scopeEyebrow: "RADIOMETRISCHE DIAGNOSTIK",
    scopeTitle: "Umfassende thermografische Inspektionen",
    scopeDescription:
      "Die Prüfungen helfen, thermische Unregelmäßigkeiten zu erkennen, das Ausfallrisiko zu reduzieren und vorbeugende Maßnahmen in Industriebetrieben zu unterstützen.",
    scopeItems: [
      {
        title: "NS/MS-Schaltanlagen und Trafostationen",
        description:
          "Erkennung von Überlastungen, Lastasymmetrien und Kontaktwiderstandsproblemen während des Anlagenbetriebs.",
        icon: Gauge,
      },
      {
        title: "Schaltschränke und Automatisierung",
        description:
          "Überprüfung von Netzteilen, Frequenzumrichtern, Schützen und Steuermodulen.",
        icon: ClipboardCheck,
      },
      {
        title: "Maschinenpark und Antriebe",
        description:
          "Thermische Diagnostik von Motoren, Getrieben und mechanischen Systemen auf Anzeichen von Verschleiß und ungleichmäßigem Betrieb.",
        icon: Factory,
      },
      {
        title: "Kritische Infrastruktur",
        description:
          "Kontrolle von Kondensatorbatterien, Sammelschienen und Anschlüssen.",
        icon: ShieldCheck,
      },
    ],
    reportEyebrow: "PRÜFDOKUMENTATION",
    reportTitle: "Ein Bericht mit konkreten Informationen.",
    reportDescription:
      "Die Dokumentation enthält Daten zur Beurteilung des technischen Zustands der Anlage, zur Lokalisierung von Unregelmäßigkeiten und zur Planung von Korrekturmaßnahmen.",
    reportItems: [
      "Methodische Angaben: Emissionsgrad, Umgebungstemperatur und Messabstand.",
      "Angaben zur prozentualen Belastung des Stromkreises während der Messung.",
      "Anomaliekarten mit Thermogramm, Sichtbild und genauer Lage der Überhitzungsstelle.",
      "Klassifizierung der Reparaturpriorität: kritisch, hoch oder moderat.",
      "Unterschrift eines zertifizierten Thermografen ISO 18436-7 Level 1.",
    ],
    reportNote:
      "Die Berichte werden mit Blick auf die Anforderungen von Versicherern und Instandhaltungsabteilungen erstellt.",
    automationEyebrow: "VON DER DIAGNOSE ZUR FEHLERBEHEBUNG",
    automationTitle: "Wir zeigen nicht nur das Problem auf.",
    automationDescription:
      "URSO INSTAL bietet auch Unterstützung in der Elektrotechnik und Automatisierung. Nach der Identifizierung einer Unregelmäßigkeit können Reparatur- und Modernisierungsmaßnahmen folgen.",
    automationItems: [
      {
        title: "Schaltschrankbau",
        description:
          "Planung und Montage neuer Schaltanlagen und Bedienpulte.",
        icon: Layers3,
      },
      {
        title: "Retrofit und Maschinenmodernisierung",
        description:
          "Erneuerung von Stromversorgungssystemen, Integration von Frequenzumrichtern, PLC-Steuerungen und Safety-Systemen.",
        icon: Factory,
      },
      {
        title: "SEP-Messungen G1 E+D",
        description:
          "Schleifenimpedanz-, Isolationswiderstands-, RCD- und Durchgangsprüfungen.",
        icon: Zap,
      },
      {
        title: "Behebung festgestellter Mängel",
        description:
          "Reparatur überhitzter Verbindungen, Austausch verschlissener Komponenten und Modernisierung der Verkabelung.",
        icon: Thermometer,
      },
    ],
    contactEyebrow: "KONTAKT / URSO INSTAL",
    contactTitle:
      "Bestellen Sie eine thermografische Inspektion oder besprechen Sie Ihre Versicherungsanforderungen.",
    contactDescription:
      "Kontaktieren Sie uns, um den Prüfungsumfang, Dokumentationsanforderungen oder technische Bedürfnisse Ihres Betriebs zu besprechen.",
    company: "URSO INSTAL – Marcin Zdybek",
    qualification:
      "Zertifizierter Thermograf ISO 18436-7 Level 1 | SEP G1 E+D",
    phone: "Telefon: +48 534 485 858",
    email: "E-Mail: ursoinstal@gmail.com",
    area: "Einsatzgebiet: Schlesien / Ganz Polen",
    nip: "Steuernummer: 6462771321",
    contactButton: "Zum Kontakt",
    back: "Zurück zur Leistungsauswahl",
  },
};

export default function ThermowizjaPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main className="bg-[#f4f4f2] text-[#202326] dark:bg-[#171b1f] dark:text-[#f2f4f5]">
      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[#20272d] text-white lg:min-h-[690px]">
        <Image
          src={kameraTermowizyjna}
          alt="Kamera termowizyjna wykorzystywana podczas diagnostyki przemysłowej"
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

      {/* CERTIFICATION */}
      <section className="border-b border-[#d9dcda] dark:border-[#343c43]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div className="lg:border-r lg:border-[#d9dcda] lg:pr-12 dark:lg:border-[#343c43]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              URSO INSTAL / ISO 18436-7
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.certificationTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.certificationIntro}
            </p>
          </div>

          <div>
            <h3 className="mb-7 text-lg font-semibold leading-snug sm:text-xl">
              {t.certificationHeading}
            </h3>

            <div className="space-y-7">
              {t.credentials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#e8ebea] text-[#365b70] dark:bg-[#27343c] dark:text-[#b4cbd8]">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-[#646d72] dark:text-[#b0bac2]">
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

      {/* INSPECTION SCOPE */}
      <section id="zakres" className="scroll-mt-24">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="relative min-h-[280px] overflow-hidden rounded-sm bg-[#252b2f] sm:min-h-[370px]">
                <Image
                  src={termo1}
                  alt="Rozdzielnica elektryczna poddawana inspekcji"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
                  {t.scopeEyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {t.scopeTitle}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
                  {t.scopeDescription}
                </p>
              </div>
            </div>

            <div className="grid content-center gap-0 sm:grid-cols-2 sm:gap-x-8">
              {t.scopeItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4 border-b border-[#d9dcda] py-7 first:pt-0 dark:border-[#343c43] sm:py-8"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#e8ebea] text-[#365b70] dark:bg-[#27343c] dark:text-[#b4cbd8]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-snug">
                        {item.title}
                      </h3>
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

      {/* REPORT */}
      <section className="border-y border-[#d9dcda] bg-[#eceeec] dark:border-[#343c43] dark:bg-[#1d252a]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.reportEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.reportTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.reportDescription}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-[#d0d5d2] pt-6 text-sm font-medium dark:border-[#39444b]">
              <FileCheck2 size={22} className="shrink-0 text-[#496a7d]" />
              {t.reportNote}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-5">
              {t.reportItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Check
                    size={19}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                  />
                  <p className="text-sm leading-6 text-[#41494e] dark:text-[#d2d8dc] sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-sm border border-[#cbd1ce] bg-white/50 p-5 dark:border-[#39444b] dark:bg-[#202a30]">
              <div className="flex items-start gap-4">
                <ClipboardCheck
                  size={25}
                  className="shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                />
                <div>
                  <h3 className="font-semibold">
                    {locale === "pl"
                      ? "Dokumentacja dla ubezpieczyciela i działu UR"
                      : locale === "en"
                        ? "Documentation for insurers and maintenance teams"
                        : "Dokumentation für Versicherer und Instandhaltung"}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#646d72] dark:text-[#b0bac2]">
                    {t.reportNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELECTRICAL AND AUTOMATION */}
      <section>
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-24">
          <div className="relative min-h-[320px] overflow-hidden rounded-sm bg-[#252b2f] sm:min-h-[470px]">
            <Image
              src={termo2}
              alt="Prefabrykowana szafa sterownicza"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#71808a] dark:text-[#91a4b0]">
              {t.automationEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.automationTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#646d72] dark:text-[#b0bac2] sm:text-base">
              {t.automationDescription}
            </p>

            <div className="mt-8 grid gap-x-7 gap-y-7 sm:grid-cols-2">
              {t.automationItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-[#496a7d] dark:text-[#9ab7c7]"
                    />
                    <div>
                      <h3 className="font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#646d72] dark:text-[#b0bac2]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
              <p className="mt-2 text-sm leading-6 text-white/65">
                {t.qualification}
              </p>

              <div className="mt-7 space-y-3 text-sm text-white/80">
                <p>{t.phone}</p>
                <p>{t.email}</p>
                <p>{t.area}</p>
                <p>{t.nip}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-[#e8ebea] text-[#365b70] dark:bg-[#27343c] dark:text-[#b4cbd8]">
              <Thermometer size={24} />
            </div>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              {locale === "pl"
                ? "Porozmawiajmy o inspekcji."
                : locale === "en"
                  ? "Let's discuss your inspection."
                  : "Sprechen wir über Ihre Inspektion."}
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
