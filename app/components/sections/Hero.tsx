
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Factory,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useLocale } from "../providers/Providers";

const translations = {
  pl: {
    headingStart: "Certyfikowana diagnostyka",
    headingHighlight: "termowizyjna",
    headingEnd: "& automatyka przemysłowa",
    description:
      "Wykonujemy badania termowizyjne dla ubezpieczycieli i utrzymania ruchu, a także prefabrykujemy szafy sterownicze i realizujemy kompleksowe rozwiązania z zakresu automatyki przemysłowej.",
    inspection: "Zamów inspekcję ubezpieczeniową",
    automation: "Wycena prefabrykacji / automatyki",
    iso: "ISO 18436-7",
    isoDescription: "Level 1",
    sep: "SEP G1 E+D",
    sepDescription: "Uprawnienia elektryczne",
    location: "Śląsk / Polska",
    locationDescription: "Obsługa przemysłu",
  },
  en: {
    headingStart: "Certified",
    headingHighlight: "thermographic diagnostics",
    headingEnd: "& industrial automation",
    description:
      "We provide thermographic inspections for insurers and maintenance teams, manufacture control cabinets and deliver comprehensive industrial automation solutions.",
    inspection: "Order an insurance inspection",
    automation: "Get an automation quote",
    iso: "ISO 18436-7",
    isoDescription: "Level 1",
    sep: "SEP G1 E+D",
    sepDescription: "Electrical qualifications",
    location: "Silesia / Poland",
    locationDescription: "Industrial services",
  },
  de: {
    headingStart: "Zertifizierte",
    headingHighlight: "Thermografie",
    headingEnd: "& industrielle Automatisierung",
    description:
      "Wir führen thermografische Inspektionen für Versicherungen und Instandhaltungsteams durch, fertigen Schaltschränke und bieten umfassende Lösungen im Bereich der industriellen Automatisierung.",
    inspection: "Versicherungsinspektion anfragen",
    automation: "Angebot für Automatisierung",
    iso: "ISO 18436-7",
    isoDescription: "Level 1",
    sep: "SEP G1 E+D",
    sepDescription: "Elektrotechnische Befugnisse",
    location: "Schlesien / Polen",
    locationDescription: "Industriedienstleistungen",
  },
};

export default function Hero() {
  const { locale } = useLocale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  const t = translations[locale];

  const credentials = [
    { icon: ShieldCheck, title: t.iso, description: t.isoDescription },
    { icon: Zap, title: t.sep, description: t.sepDescription },
    { icon: Factory, title: t.location, description: t.locationDescription },
  ];

  return (
    <section
      className={`relative isolate flex min-h-[760px] w-full items-center overflow-hidden transition-colors duration-500 lg:min-h-[calc(100svh-86px)] ${
        isDark
          ? "bg-[#08111b] text-white"
          : "bg-[#edf0f3] text-[#20272d]"
      }`}
    >
      {/* ZDJĘCIE NA CAŁĄ SZEROKOŚĆ */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/urso-instal/images/hero-rozdzielnica.jpg"
          alt="Rozdzielnica elektryczna – URSO INSTAL"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* PRZYCIEMNIENIE ZDJĘCIA */}
      <div
        className={`absolute inset-0 -z-20 transition-all duration-500 ${
          isDark ? "bg-[#07111d]/70" : "bg-[#f3f5f7]/55"
        }`}
      />

      {/* LEWY GRADIENT */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ${
          isDark
            ? "bg-gradient-to-r from-[#07111d]/95 via-[#07111d]/80 to-[#07111d]/25"
            : "bg-gradient-to-r from-[#f3f5f7]/95 via-[#f3f5f7]/85 to-[#f3f5f7]/25"
        }`}
      />

      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ${
          isDark
            ? "bg-gradient-to-t from-[#07111d]/85 via-transparent to-[#07111d]/20"
            : "bg-gradient-to-t from-[#edf0f3]/75 via-transparent to-[#edf0f3]/10"
        }`}
      />

      {/* TREŚĆ */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">
        <div className="max-w-[1000px]">
          {/* CERTYFIKAT */}
          <div
            className={`mb-8 inline-flex max-w-full items-center gap-3 rounded-full border px-5 py-3 text-sm backdrop-blur-md transition-all duration-500 ${
              isDark
                ? "border-white/20 bg-[#101b28]/80 text-white/90"
                : "border-[#20272d]/20 bg-white/80 text-[#20272d]"
            }`}
          >
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-500" />
            <span className="font-semibold">ISO 18436-7</span>
            <span className={`h-4 w-px ${isDark ? "bg-white/25" : "bg-black/20"}`} />
            <span>Level 1</span>
            <span className={`h-4 w-px ${isDark ? "bg-white/25" : "bg-black/20"}`} />
            <span className="truncate">Diagnostyka termowizyjna</span>
          </div>

          {/* NAGŁÓWEK */}
          <h1 className="max-w-[1000px] text-5xl font-semibold leading-[1.06] tracking-[-0.045em] transition-colors duration-500 sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[90px]">
            {t.headingStart}{" "}
            <span className={isDark ? "text-[#58a8f5]" : "text-[#245f9d]"}>
              {t.headingHighlight}
            </span>{" "}
            {t.headingEnd}
          </h1>

          {/* OPIS */}
          <p
            className={`mt-9 max-w-[760px] text-lg leading-8 transition-colors duration-500 sm:text-xl sm:leading-9 ${
              isDark ? "text-white/85" : "text-[#303a43]"
            }`}
          >
            {t.description}
          </p>

          {/* PRZYCISKI */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/kontakt"
              className={`group inline-flex min-h-[60px] items-center justify-between gap-6 rounded-md border px-6 py-4 text-base font-semibold transition-all duration-500 ${
                isDark
                  ? "border-blue-400 bg-blue-600 text-white hover:bg-blue-500"
                  : "border-blue-800 bg-blue-800 text-white hover:bg-blue-900"
              }`}
            >
              <span className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 shrink-0" />
                {t.inspection}
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/kontakt"
              className={`group inline-flex min-h-[60px] items-center justify-between gap-6 rounded-md border px-6 py-4 text-base font-semibold backdrop-blur-md transition-all duration-500 ${
                isDark
                  ? "border-white/30 bg-[#111c28]/70 text-white hover:bg-[#263647]/90"
                  : "border-[#20272d]/30 bg-white/85 text-[#20272d] hover:bg-white"
              }`}
            >
              <span>{t.automation}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* UPRAWNIENIA */}
        <div
          className={`mt-14 grid max-w-[900px] grid-cols-1 gap-6 border-t pt-7 transition-all duration-500 sm:grid-cols-3 sm:gap-8 ${
            isDark ? "border-white/25" : "border-[#20272d]/25"
          }`}
        >
          {credentials.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4">
                <Icon className="h-6 w-6 shrink-0 text-blue-500" />
                <div>
                  <p className="text-base font-semibold">{item.title}</p>
                  <p
                    className={`mt-1 text-sm transition-colors duration-500 ${
                      isDark ? "text-white/65" : "text-[#59636d]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
