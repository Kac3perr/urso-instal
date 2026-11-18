
"use client";

import Image from "next/image";
import Link from "next/link";
import lightLogo from "../../../public/images/logo.png";
import darkLogo from "../../../public/images/logo2.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Locale, useLocale } from "../providers/Providers";

const translations = {
  pl: {
    description:
      "Diagnostyka termowizyjna, pomiary elektryczne oraz rozwiązania z zakresu automatyki i prefabrykacji dla przemysłu.",
    navigation: "Nawigacja",
    services: "Usługi",
    contact: "Kontakt",
    about: "O firmie",
    thermography: "Termowizja przemysłowa",
    automation: "Automatyka i prefabrykacja",
    measurements: "Pomiary SEP",
    certificate: "Certyfikat ISO",
    contactPage: "Formularz kontaktowy",
    qualifications: "Kwalifikacje",
    iso: "ISO 18436-7 Level 1",
    sep: "SEP G1 E + D",
    location: "Obszar działania",
    locationValue: "Śląsk / cała Polska",
    tax: "NIP",
    contactButton: "Skontaktuj się",
    copyright: "Wszelkie prawa zastrzeżone.",
    company: "URSO INSTAL – Marcin Zdybek",
  },
  en: {
    description:
      "Thermal imaging diagnostics, electrical measurements and industrial automation and control panel solutions.",
    navigation: "Navigation",
    services: "Services",
    contact: "Contact",
    about: "About us",
    thermography: "Industrial thermography",
    automation: "Automation and control panels",
    measurements: "Electrical measurements",
    certificate: "ISO Certificate",
    contactPage: "Contact form",
    qualifications: "Qualifications",
    iso: "ISO 18436-7 Level 1",
    sep: "SEP G1 E + D",
    location: "Service area",
    locationValue: "Silesia / all of Poland",
    tax: "Tax ID",
    contactButton: "Get in touch",
    copyright: "All rights reserved.",
    company: "URSO INSTAL – Marcin Zdybek",
  },
  de: {
    description:
      "Thermografische Diagnostik, elektrische Messungen sowie Lösungen im Bereich Automatisierung und Schaltschrankbau.",
    navigation: "Navigation",
    services: "Leistungen",
    contact: "Kontakt",
    about: "Über uns",
    thermography: "Industriethermografie",
    automation: "Automatisierung und Schaltschrankbau",
    measurements: "Elektrische Messungen",
    certificate: "ISO-Zertifikat",
    contactPage: "Kontaktformular",
    qualifications: "Qualifikationen",
    iso: "ISO 18436-7 Level 1",
    sep: "SEP G1 E + D",
    location: "Einsatzgebiet",
    locationValue: "Schlesien / ganz Polen",
    tax: "Steuernummer",
    contactButton: "Kontakt aufnehmen",
    copyright: "Alle Rechte vorbehalten.",
    company: "URSO INSTAL – Marcin Zdybek",
  },
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "";

export default function Footer() {
  const { locale } = useLocale();
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = translations[locale];
  const isDark = mounted && theme === "dark";
  const logo = isDark ? darkLogo : lightLogo;

  const navigation = [
    { label: t.about, href: "/o-firmie" },
    { label: t.thermography, href: "/termowizja" },
    { label: t.automation, href: "/elektryka-automatyka" },
    { label: t.measurements, href: "/pomiary-sep" },
    { label: t.certificate, href: "/certyfikat-iso" },
    { label: t.contactPage, href: "/kontakt" },
  ];

  const services = [
    { label: t.thermography, href: "/termowizja" },
    { label: t.automation, href: "/elektryka-automatyka" },
    { label: t.measurements, href: "/pomiary-sep" },
    { label: t.certificate, href: "/certyfikat-iso" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#151b20] text-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* GÓRNA CZĘŚĆ */}
        <div className="grid grid-cols-1 gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr] lg:gap-12 lg:py-20">
          {/* FIRMA */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="URSO INSTAL – strona główna"
              className="inline-flex"
            >
              <Image
                src={logo}
                alt="URSO INSTAL"
                width={180}
                height={60}
                className="h-auto w-[135px] object-contain sm:w-[150px]"
              />
            </Link>

            <p className="mt-7 text-sm leading-7 text-white/55">
              {t.description}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-[#9bb4c5]"
                />
                <span className="text-xs text-white/70">{t.iso}</span>
              </div>

              <div className="flex items-center gap-3">
                <Zap size={18} className="shrink-0 text-[#9bb4c5]" />
                <span className="text-xs text-white/70">{t.sep}</span>
              </div>
            </div>
          </div>

          {/* NAWIGACJA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              {t.navigation}
            </h3>

            <ul className="mt-7 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* USŁUGI */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              {t.services}
            </h3>

            <ul className="mt-7 space-y-4">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KONTAKT */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              {t.contact}
            </h3>

            <div className="mt-7 space-y-5">
              {contactPhone && (
                <a
                  href={`tel:${contactPhone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone size={17} className="mt-0.5 shrink-0 text-[#9bb4c5]" />
                  <span>{contactPhone}</span>
                </a>
              )}

              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-start gap-3 break-all text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail size={17} className="mt-0.5 shrink-0 text-[#9bb4c5]" />
                  <span>{contactEmail}</span>
                </a>
              )}

              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#9bb4c5]" />
                <div>
                  <p>{t.location}</p>
                  <p className="mt-1 text-white/85">{t.locationValue}</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-xs text-white/40">{t.tax}</p>
                <p className="mt-1 text-sm text-white/75">6462771321</p>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="group mt-7 inline-flex min-h-11 items-center gap-3 border border-white/20 px-5 text-xs font-medium text-white transition-colors hover:border-white/50 hover:bg-white/[0.05]"
            >
              {t.contactButton}
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* DOLNY PASEK */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.company}. {t.copyright}
          </p>

          <span className="tracking-wide">URSO INSTAL</span>
        </div>
      </div>
    </footer>
  );
}
