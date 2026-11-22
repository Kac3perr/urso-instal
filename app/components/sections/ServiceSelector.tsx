
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
    heading: "Termowizja i automatyka przemysłowa dla firm.",
    description:
      "Wybierz obszar, którego potrzebujesz. Zapewniamy specjalistyczne wsparcie w diagnostyce termicznej, elektryce i automatyce przemysłowej.",
    services: [
      {
        number: "01",
        title: "Termowizja przemysłowa",
        description:
          "Certyfikowana diagnostyka termowizyjna, audyty ubezpieczeniowe i profesjonalne raporty dla przemysłu.",
        label: "Poznaj usługi termowizyjne",
        image: kameraTermowizyjna,
        href: "/termowizja",
      },
      {
        number: "02",
        title: "Elektryka i automatyka",
        description:
          "Prefabrykacja szaf sterowniczych, modernizacje instalacji, automatyka przemysłowa i pomiary elektryczne.",
        label: "Poznaj ofertę elektryki i automatyki",
        image: heroRozdzielnica,
        href: "/elektryka-automatyka",
      },
    ],
    footer: "URSO INSTAL — Rozwiązania dla przemysłu",
    location: "Śląsk / Cała Polska",
  },

  en: {
    eyebrow: "URSO INSTAL / OUR SERVICES",
    heading: "Comprehensive solutions\nfor industry.",
    description:
      "Choose the area you need. We provide specialist support in thermal diagnostics, electrical services and industrial automation.",
    services: [
      {
        number: "01",
        title: "Industrial thermography",
        description:
          "Certified thermal diagnostics, insurance inspections and professional reports for industrial facilities.",
        label: "Explore thermography services",
        image: kameraTermowizyjna,
        href: "/termowizja",
      },
      {
        number: "02",
        title: "Electrical engineering & automation",
        description:
          "Control cabinet prefabrication, installation upgrades, industrial automation and electrical measurements.",
        label: "Explore electrical and automation services",
        image: heroRozdzielnica,
        href: "/elektryka-automatyka",
      },
    ],
    footer: "URSO INSTAL — Solutions for industry",
    location: "Silesia / Throughout Poland",
  },

  de: {
    eyebrow: "URSO INSTAL / LEISTUNGSBEREICHE",
    heading: "Umfassende Lösungen\nfür die Industrie.",
    description:
      "Wählen Sie den gewünschten Bereich. Wir bieten fachkundige Unterstützung in der thermischen Diagnostik, Elektrotechnik und Industrieautomation.",
    services: [
      {
        number: "01",
        title: "Industrielle Thermografie",
        description:
          "Zertifizierte thermografische Diagnostik, Versicherungsprüfungen und professionelle Berichte für Industriebetriebe.",
        label: "Thermografie-Leistungen entdecken",
        image: kameraTermowizyjna,
        href: "/termowizja",
      },
      {
        number: "02",
        title: "Elektrotechnik & Automatisierung",
        description:
          "Schaltschrankbau, Anlagenmodernisierung, Industrieautomation und elektrische Messungen.",
        label: "Elektro- und Automatisierungsleistungen entdecken",
        image: heroRozdzielnica,
        href: "/elektryka-automatyka",
      },
    ],
    footer: "URSO INSTAL — Lösungen für die Industrie",
    location: "Schlesien / Ganz Polen",
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
                alt=""
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