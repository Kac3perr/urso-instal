
"use client";

import Image from "next/image";
import Link from "next/link";
import lightLogo from "../../../public/images/logo.png";
import darkLogo from "../../../public/images/logo2.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Menu,
  Moon,
  Sun,
  X,
  Award,
} from "lucide-react";
import { Locale, useLocale } from "../providers/Providers";

const languages: { code: Locale; name: string }[] = [
  { code: "pl", name: "Polski" },
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

const translations = {
  pl: {
    about: "O firmie",
    thermography: "Termowizja dla Ubezpieczeń i UR",
    automation: "Automatyka & Prefabrykacja",
    measurements: "Pomiary SEP",
    certificate: "Certyfikat ISO",
    report: "Wzór raportu",
    contact: "Kontakt",
    language: "Wybierz język",
    light: "Jasny motyw",
    dark: "Ciemny motyw",
  },
  en: {
    about: "About us",
    thermography: "Thermography for Insurance & Maintenance",
    automation: "Automation & Control Panels",
    measurements: "Electrical Measurements",
    certificate: "ISO Certificate",
    report: "Sample report",
    contact: "Contact",
    language: "Choose language",
    light: "Light theme",
    dark: "Dark theme",
  },
  de: {
    about: "Über uns",
    thermography: "Thermografie für Versicherungen & Instandhaltung",
    automation: "Automatisierung & Schaltschrankbau",
    measurements: "Elektrische Messungen",
    certificate: "ISO-Zertifikat",
    report: "Musterbericht",
    contact: "Kontakt",
    language: "Sprache auswählen",
    light: "Helles Design",
    dark: "Dunkles Design",
  },
};

const navigation = [
  { key: "about", href: "/o-firmie" },
  { key: "thermography", href: "/termowizja" },
  { key: "automation", href: "/elektryka-automatyka" },
  { key: "measurements", href: "/pomiary-sep" },
] as const;

export default function Navbar() {
  const { locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = translations[locale];
  const isDark = mounted && theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const selectLanguage = (language: Locale) => {
    setLocale(language);
    setLanguageOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e4e5e3] bg-[#fafaf8]/95 text-[#293238] backdrop-blur-xl transition-colors duration-300 dark:border-[#343d42] dark:bg-[#1b2226]/95 dark:text-[#edf0f1]">
      <nav className="mx-auto flex min-h-[82px] w-full max-w-[1920px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10 2xl:px-14">

        {/* LOGO */}
        <Link
          href="/"
          aria-label="URSO INSTAL"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center"
        >
          <Image
            src={isDark ? darkLogo : lightLogo}
            alt="URSO INSTAL"
            width={677}
            height={369}
            priority
            className="h-auto w-[120px] object-contain sm:w-[145px] lg:w-[155px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-9">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group relative shrink-0 whitespace-nowrap py-3 text-[12px] font-medium tracking-[0.015em] text-[#566168] transition-colors duration-200 hover:text-[#52758a] 2xl:text-[13px] dark:text-[#b5c0c5] dark:hover:text-[#a9c5d5]"
            >
              {t[item.key]}
              <span className="absolute bottom-1 left-0 h-px w-0 bg-[#66879a] transition-all duration-300 group-hover:w-full dark:bg-[#a9c5d5]" />
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">

          {/* CERTIFICATE */}
          <Link
            href="/certyfikat-iso"
            className="group flex items-center gap-2.5 px-2 py-2 text-[#58656c] transition-colors hover:text-[#52758a] dark:text-[#b5c0c5] dark:hover:text-[#a9c5d5]"
          >
            <Award
              size={19}
              strokeWidth={1.5}
              className="text-[#718c9b] dark:text-[#a9c5d5]"
            />
            <span className="flex flex-col whitespace-nowrap">
              <span className="text-[11px] font-semibold leading-tight">
                {t.certificate}
              </span>
              <span className="mt-1 text-[9px] text-[#929b9f] dark:text-[#89969d]">
                {t.report}
              </span>
            </span>
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <span className="h-8 w-px bg-[#e0e3e2] dark:bg-[#3b464c]" />

          {/* LANGUAGE */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              aria-expanded={languageOpen}
              className="flex h-10 items-center gap-2 px-2.5 text-[11px] font-semibold text-[#58656c] transition-colors hover:text-[#52758a] dark:text-[#c1cbd0] dark:hover:text-white"
            >
              <Globe2 size={16} strokeWidth={1.6} />
              {locale.toUpperCase()}
              <ChevronDown
                size={12}
                className={`transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-3 w-48 border border-[#e2e5e4] bg-[#fafaf8] p-1.5 shadow-xl dark:border-[#3b464c] dark:bg-[#222b30]">
                <p className="px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#929b9f]">
                  {t.language}
                </p>

                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => selectLanguage(language.code)}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-left text-xs text-[#46535a] transition-colors hover:bg-[#eef1f0] dark:text-[#dce2e5] dark:hover:bg-[#303b41]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#66879a]">
                        {language.code.toUpperCase()}
                      </span>
                      {language.name}
                    </span>

                    {locale === language.code && (
                      <Check size={14} className="text-[#66879a]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* THEME */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? t.light : t.dark}
            className="flex h-9 w-9 items-center justify-center text-[#647078] transition-colors hover:text-[#52758a] dark:text-[#c1cbd0] dark:hover:text-white"
          >
            {!mounted ? (
              <span className="h-[18px] w-[18px]" />
            ) : isDark ? (
              <Sun size={18} strokeWidth={1.6} />
            ) : (
              <Moon size={18} strokeWidth={1.6} />
            )}
          </button>

          {/* CONTACT */}
          <Link
            href="/kontakt"
            className="group ml-1 flex h-10 items-center gap-2 bg-[#496a7d] px-5 text-[11px] font-semibold uppercase tracking-[0.09em] text-white transition-colors duration-200 hover:bg-[#38586b] dark:bg-[#587d91] dark:hover:bg-[#668da2]"
          >
            {t.contact}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e0e3e2] text-[#46535a] transition-colors hover:border-[#66879a] hover:text-[#52758a] xl:hidden dark:border-[#3b464c] dark:text-[#dce2e5]"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#e4e5e3] bg-[#fafaf8] shadow-xl xl:hidden dark:border-[#343d42] dark:bg-[#1b2226]">
          <div className="mx-auto flex max-w-[1500px] flex-col px-5 py-4 sm:px-8">

            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between gap-3 border-b border-[#e8eae8] py-4 text-sm font-medium text-[#46535a] transition-colors hover:text-[#52758a] dark:border-[#343d42] dark:text-[#dce2e5] dark:hover:text-[#a9c5d5]"
              >
                <span>{t[item.key]}</span>
                <ArrowUpRight
                  size={15}
                  className="text-[#82939c]"
                />
              </Link>
            ))}

            <Link
              href="/certyfikat-iso"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-between border border-[#e0e3e2] px-4 py-4 text-sm font-semibold text-[#46535a] dark:border-[#3b464c] dark:text-[#dce2e5]"
            >
              <span>
                {t.certificate}
                <span className="mt-1 block text-[11px] font-normal text-[#929b9f]">
                  {t.report}
                </span>
              </span>
              <Award size={19} className="text-[#66879a]" />
            </Link>

            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-[#496a7d] px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white"
            >
              {t.contact}
              <ArrowUpRight size={15} />
            </Link>

            {/* MOBILE LANGUAGE */}
            <div className="mt-5 border-t border-[#e4e5e3] pt-5 dark:border-[#343d42]">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#929b9f]">
                {t.language}
              </p>

              <div className="grid grid-cols-3 gap-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => selectLanguage(language.code)}
                    className={`flex items-center justify-center gap-2 border py-3 text-xs font-semibold transition-colors ${
                      locale === language.code
                        ? "border-[#66879a] bg-[#eaf0f2] text-[#496a7d] dark:bg-[#293b45] dark:text-[#c0d8e5]"
                        : "border-[#e0e3e2] text-[#647078] hover:bg-[#eef1f0] dark:border-[#3b464c] dark:text-[#c1cbd0]"
                    }`}
                  >
                    {language.code.toUpperCase()}
                    {locale === language.code && <Check size={13} />}
                  </button>
                ))}
              </div>

              {/* MOBILE THEME */}
              <button
                type="button"
                onClick={toggleTheme}
                className="mt-3 flex w-full items-center justify-center gap-2 border border-[#e0e3e2] py-3 text-sm font-medium text-[#58656c] transition-colors hover:bg-[#eef1f0] dark:border-[#3b464c] dark:text-[#dce2e5]"
              >
                {!mounted ? (
                  <Moon size={17} />
                ) : isDark ? (
                  <Sun size={17} />
                ) : (
                  <Moon size={17} />
                )}
                {isDark ? t.light : t.dark}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
