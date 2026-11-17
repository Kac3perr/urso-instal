
"use client";

import Image from "next/image";
import Link from "next/link";
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
  { key: "thermography", href: "/" },
  { key: "automation", href: "/automatyka-prefabrykacja" },
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
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[86px] w-full max-w-[1920px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10 2xl:px-14">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="URSO INSTAL"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/logo.png"
            alt="URSO INSTAL"
            width={677}
            height={369}
            priority
            className="h-auto w-[115px] object-contain sm:w-[145px] lg:w-[155px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
      <div className="hidden min-w-0 flex-1 items-center justify-center gap-8 2xl:flex 3xl:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group relative shrink-0 whitespace-nowrap py-3 text-[13px] font-medium text-[var(--foreground)]/75 transition-colors hover:text-brand 3xl:text-sm"
            >
              {t[item.key]}
              <span className="absolute bottom-1 left-0 h-[2px] w-0 rounded-full bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-3 2xl:flex">
          {/* CERTIFICATE */}
          <Link
            href="/certyfikat-iso"
            className="group flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-[#20272d] px-4 py-2.5 text-white transition-colors hover:bg-brand"
          >
            <span className="flex flex-col whitespace-nowrap">
              <span className="text-xs font-semibold leading-tight">
                {t.certificate}
              </span>
              <span className="mt-1 text-[10px] text-white/60">
                {t.report}
              </span>
            </span>
            <ArrowUpRight size={15} className="shrink-0" />
          </Link>

          {/* LANGUAGE */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              aria-expanded={languageOpen}
              className="flex h-11 items-center gap-2 whitespace-nowrap rounded-md border border-[var(--border)] px-3 text-xs font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
            >
              <Globe2 size={16} />
              {locale.toUpperCase()}
              <ChevronDown
                size={13}
                className={`transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-3 w-48 rounded-lg border border-[var(--border)] bg-[var(--background)] p-1.5 shadow-xl">
                <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                  {t.language}
                </p>

                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => selectLanguage(language.code)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-bold text-brand">
                        {language.code.toUpperCase()}
                      </span>
                      {language.name}
                    </span>
                    {locale === language.code && (
                      <Check size={15} className="text-brand" />
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
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-brand hover:bg-[var(--surface)]"
          >
            {!mounted ? (
              <span className="h-[18px] w-[18px]" />
            ) : isDark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* CONTACT */}
          <Link
            href="/kontakt"
            className="group flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-md bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {t.contact}
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface)] 2xl:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[var(--border)] bg-[var(--background)] shadow-xl 2xl:hidden">
          <div className="mx-auto flex max-w-[1500px] flex-col px-5 py-4 sm:px-8">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-w-0 items-center justify-between gap-3 border-b border-[var(--border)] py-4 text-sm font-medium leading-relaxed text-[var(--foreground)] transition-colors hover:text-brand"
              >
                <span className="min-w-0 break-words">{t[item.key]}</span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[var(--muted)]"
                />
              </Link>
            ))}

            <Link
              href="/certyfikat-iso"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-between gap-3 rounded-md bg-[#20272d] px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              <span className="min-w-0">
                {t.certificate}
                <span className="mt-1 block text-xs font-normal text-white/60">
                  {t.report}
                </span>
              </span>
              <ArrowUpRight size={17} className="shrink-0" />
            </Link>

            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-md bg-brand px-4 py-3.5 text-center text-sm font-semibold text-white"
            >
              {t.contact}
            </Link>

            <div className="mt-5 border-t border-[var(--border)] pt-5">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                {t.language}
              </p>

              <div className="grid grid-cols-3 gap-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => selectLanguage(language.code)}
                    className={`flex items-center justify-center gap-2 rounded-md border py-3 text-xs font-semibold transition-colors ${
                      locale === language.code
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface)]"
                    }`}
                  >
                    {language.code.toUpperCase()}
                    {locale === language.code && <Check size={13} />}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-[var(--border)] py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface)]"
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
