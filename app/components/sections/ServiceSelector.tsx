
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLocale } from "../providers/Providers";

import kameraTermowizyjna from "../../../public/images/optimized/kamera-termowizyjna.webp";
import heroRozdzielnica from "../../../public/images/optimized/hero-rozdzielnica.webp";

const translations = {
  pl: {
    eyebrow: "URSO INSTAL / OBSZARY DZIAŁALNOŚCI",
    heading: "Termowizja przemysłowa i automatyka dla firm na Śląsku.",
    description:
      "Wspieramy zakłady przemysłowe w diagnostyce termowizyjnej, badaniach rozdzielnic, prefabrykacji szaf sterowniczych oraz automatyce przemysłowej. Realizujemy usługi na Śląsku i w całej Polsce.",
    services: [
      {
        number: "01",
        title: "Termowizja przemysłowa",
        description:
          "Badania termowizyjne rozdzielnic, instalacji elektrycznych i maszyn przemysłowych. Diagnostyka potencjalnych usterek, audyty oraz profesjonalne raporty dla firm i ubezpieczycieli.",
        label: "Poznaj usługi termowizyjne",
        image: kameraTermowizyjna,
        imageAlt: "Kamera termowizyjna wykorzystywana do diagnostyki urządzeń przemysłowych",
        href: "/termowizja",
      },
      {
        number: "02",
        title: "Elektryka i automatyka",
        description:
          "Prefabrykacja i projektowanie szaf sterowniczych, modernizacja układów automatyki przemysłowej, instalacje elektryczne oraz pomiary elektryczne.",
        label: "Poznaj ofertę elektryki i automatyki",
        image: heroRozdzielnica,
        imageAlt: "Rozdzielnica elektryczna wykorzystywana w instalacjach przemysłowych",
        href: "/elektryka-automatyka",
      },
    ],
    footer: "URSO INSTAL — Rozwiązania dla przemysłu",
    location: "Śląsk / Cała Polska",
  },

  en: {
    eyebrow: "URSO INSTAL / OUR SERVICES",
    heading: "Industrial thermography and automation for businesses.",
    description:
      "We support industrial facilities with thermal diagnostics, switchgear inspections, control cabinet prefabrication and industrial automation. Our services are available throughout Poland.",
    services: [
      {
        number: "01",
        title: "Industrial thermography",
        description:
          "Thermal inspections of electrical switchgear, installations and industrial machinery. Fault diagnostics, audits and professional reports for businesses and insurers.",
        label: "Explore thermography services",
        image: kameraTermowizyjna,
        imageAlt: "Thermal imaging camera used for industrial equipment diagnostics",
        href: "/termowizja",
      },
      {
        number: "02",
        title: "Electrical engineering & automation",
        description:
          "Design and prefabrication of control cabinets, industrial automation upgrades, electrical installations and measurements.",
        label: "Explore electrical and automation services",
        image: heroRozdzielnica,
        imageAlt: "Electrical switchgear used in industrial installations",
        href: "/elektryka-automatyka",
      },
    ],
    footer: "URSO INSTAL — Solutions for industry",
    location: "Poland",
  },

  de: {
    eyebrow: "URSO INSTAL / LEISTUNGSBEREICHE",
    heading: "Industrielle Thermografie und Automatisierung für Unternehmen.",
    description:
      "Wir unterstützen Industriebetriebe mit thermografischer Diagnostik, Schaltanlagenprüfungen, Schaltschrankbau und Industrieautomation. Unsere Dienstleistungen bieten wir in ganz Polen an.",
    services: [
      {
        number: "01",
        title: "Industrielle Thermografie",
        description:
          "Thermografische Prüfungen von Schaltanlagen, elektrischen Installationen und Industriemaschinen. Fehlerdiagnostik, Audits und professionelle Berichte für Unternehmen und Versicherer.",
        label: "Thermografie-Leistungen entdecken",
        image: kameraTermowizyjna,
        imageAlt: "Wärmebildkamera zur Diagnose von Industrieanlagen",
        href: "/termowizja",
      },
      {
        number: "02",
        title: "Elektrotechnik & Automatisierung",
        description:
          "Planung und Bau von Schaltschränken, Modernisierung industrieller Automatisierungssysteme, Elektroinstallationen und Messungen.",
        label: "Elektro- und Automatisierungsleistungen entdecken",
        image: heroRozdzielnica,
        imageAlt: "Elektrische Schaltanlage für industrielle Installationen",
        href: "/elektryka-automatyka",
      },
    ],
    footer: "URSO INSTAL — Lösungen für die Industrie",
    location: "Polen",
  },
};

export default function ServiceSelector() {
  const { locale } = useLocale();
  const content = translations[locale];

  return (
    <section className="min-h-[calc(100svh-76px)] bg-[#f4f4f2] px-5 py-8 text-[#202326] transition-colors duration-300 dark:bg-[#171b1f] dark:text-white sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto flex min-h-[calc(100svh-152px)] max-w-[1800px] flex-col">
        <div className="mb-8 flex flex-col gap-3 lg:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#777d80] dark:text-[#a0aab3]">
            {content.eyebrow}
          </p>

          <h1 className="max-w-3xl whitespace-pre-line text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {content.heading}
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-[#686e72] dark:text-[#b0bac2] sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
          {content.services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              aria-label={service.label}
              className="group relative isolate flex min-h-[420px] overflow-hidden rounded-sm bg-[#252b2f] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#315f91] focus-visible:ring-offset-4 lg:min-h-[520px]"
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 -z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-colors duration-500 group-hover:from-black/95" />

              <div className="flex w-full flex-col justify-between p-6 sm:p-9 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/70">
                    {service.number} / URSO INSTAL
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#202326]">
                    <ArrowUpRight
                      size={21}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                <div className="max-w-xl">
                  <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h2>

                  <p className="max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-sm font-medium transition-all duration-300 group-hover:gap-5 group-hover:border-white">
                    {service.label}
                    <ArrowRight
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-7 flex flex-col justify-between gap-2 border-t border-[#d9dcda] pt-5 text-xs text-[#777d80] dark:border-[#343c43] dark:text-[#a0aab3] sm:flex-row">
          <span>{content.footer}</span>
          <span>{content.location}</span>
        </div>
      </div>
    </section>
  );
}
