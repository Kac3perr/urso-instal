
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useLocale } from "../components/providers/Providers";

const translations = {
  pl: {
    eyebrow: "Kontakt • URSO INSTAL",
    title: "Porozmawiajmy o potrzebach Twojego zakładu.",
    description:
      "Potrzebujesz inspekcji termowizyjnej, pomiarów elektrycznych lub wsparcia w zakresie automatyki przemysłowej? Opisz nam swoje potrzeby. Ustalimy odpowiedni zakres prac.",
    formTitle: "Wyślij zapytanie",
    formDescription:
      "Wypełnij formularz, a Twoje zapytanie trafi bezpośrednio do URSO INSTAL.",
    company: "Nazwa firmy / zakładu",
    companyPlaceholder: "Nazwa przedsiębiorstwa",
    name: "Imię i nazwisko",
    namePlaceholder: "Osoba kontaktowa",
    email: "Adres e-mail",
    emailPlaceholder: "adres@firma.pl",
    phone: "Numer telefonu",
    phonePlaceholder: "+48 000 000 000",
    subject: "Cel zgłoszenia",
    subjectPlaceholder: "Wybierz temat zapytania",
    subjects: [
      "Wymóg ubezpieczyciela / audyt polisy",
      "Okresowa inspekcja Utrzymania Ruchu",
      "Prefabrykacja szafy / modernizacja automatyki",
      "Pomiary elektryczne SEP",
      "Inne zapytanie",
    ],
    message: "Opis zapytania",
    messagePlaceholder:
      "Opisz krótko obiekt, zakres prac lub problem, który chcesz skonsultować...",
    submit: "Wyślij zapytanie",
    sending: "Wysyłanie...",
    success: "Dziękujemy. Wiadomość została wysłana.",
    sendError: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.",
    privacy:
      "Dane z formularza zostaną przesłane bezpośrednio do URSO INSTAL w celu obsługi zapytania.",
    contactLabel: "Dane kontaktowe",
    contactTitle: "URSO INSTAL – Wojciech Jochemczyk",
    contactDescription:
      "Usługi dla zakładów produkcyjnych, obiektów przemysłowych i instalacji elektrycznych.",
    phoneLabel: "Telefon",
    emailLabel: "E-mail",
    locationLabel: "Obszar działania",
    location: "Śląsk / cała Polska",
    taxLabel: "NIP",
    qualifications: "Kompetencje i kwalifikacje",
    iso: "Certyfikowany termografista ISO 18436-7 Level 1",
    sep: "Uprawnienia elektroenergetyczne SEP G1 E + D",
    servicesLabel: "Zakres działalności",
    servicesTitle: "W czym możemy pomóc?",
    services: [
      {
        title: "Termowizja przemysłowa",
        description:
          "Diagnostyka rozdzielnic, stacji transformatorowych, szaf sterowniczych i maszyn.",
        href: "/termowizja",
      },
      {
        title: "Automatyka i prefabrykacja",
        description:
          "Prefabrykacja szaf, modernizacja maszyn, układy sterowania i instalacje elektryczne.",
        href: "/elektryka-automatyka",
      },
      {
        title: "Pomiary SEP",
        description:
          "Pomiary odbiorcze i okresowe instalacji elektrycznych, w tym RCD i rezystancji izolacji.",
        href: "/pomiary-sep",
      },
    ],
    areaTitle: "Działamy na terenie Śląska i całej Polski",
    areaDescription:
      "Realizujemy usługi dla zakładów produkcyjnych i obiektów przemysłowych. Zakres i termin prac ustalamy indywidualnie.",
    back: "Wróć do strony głównej",
    footer: "URSO INSTAL • Wojciech Jochemczyk",
  },

  en: {
    eyebrow: "Contact • URSO INSTAL",
    title: "Let's discuss the needs of your facility.",
    description:
      "Need a thermal inspection, electrical measurements or industrial automation support? Tell us what you need and we will establish the appropriate scope of work.",
    formTitle: "Send an enquiry",
    formDescription:
      "Complete the form and your enquiry will be sent directly to URSO INSTAL.",
    company: "Company / facility name",
    companyPlaceholder: "Company name",
    name: "Full name",
    namePlaceholder: "Contact person",
    email: "Email address",
    emailPlaceholder: "name@company.com",
    phone: "Phone number",
    phonePlaceholder: "+48 000 000 000",
    subject: "Enquiry purpose",
    subjectPlaceholder: "Select an enquiry topic",
    subjects: [
      "Insurance requirement / policy audit",
      "Periodic maintenance inspection",
      "Control panel prefabrication / automation modernisation",
      "SEP electrical measurements",
      "Other enquiry",
    ],
    message: "Enquiry details",
    messagePlaceholder:
      "Briefly describe the facility, scope of work or issue you would like to discuss...",
    submit: "Send enquiry",
    sending: "Sending...",
    success: "Thank you. Your message has been sent.",
    sendError: "Your message could not be sent. Please try again shortly.",
    privacy:
      "Your form details will be sent directly to URSO INSTAL to handle your enquiry.",
    contactLabel: "Contact details",
    contactTitle: "URSO INSTAL – Wojciech Jochemczyk",
    contactDescription:
      "Services for manufacturing facilities, industrial sites and electrical installations.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Service area",
    location: "Silesia / all of Poland",
    taxLabel: "Tax ID",
    qualifications: "Qualifications and competencies",
    iso: "ISO 18436-7 Level 1 Certified Thermographer",
    sep: "SEP G1 E + D electrical qualifications",
    servicesLabel: "Our services",
    servicesTitle: "How can we help?",
    services: [
      {
        title: "Industrial thermography",
        description:
          "Diagnostics of switchboards, transformer stations, control cabinets and machinery.",
        href: "/termowizja",
      },
      {
        title: "Automation and prefabrication",
        description:
          "Control panel prefabrication, machine modernisation, control systems and electrical installations.",
        href: "/elektryka-automatyka",
      },
      {
        title: "SEP measurements",
        description:
          "Acceptance and periodic electrical measurements, including RCD and insulation resistance testing.",
        href: "/pomiary-sep",
      },
    ],
    areaTitle: "Operating across Silesia and Poland",
    areaDescription:
      "We provide services for manufacturing facilities and industrial sites. The scope and timing are agreed individually.",
    back: "Back to homepage",
    footer: "URSO INSTAL • Wojciech Jochemczyk",
  },

  de: {
    eyebrow: "Kontakt • URSO INSTAL",
    title: "Sprechen wir über die Anforderungen Ihres Betriebs.",
    description:
      "Benötigen Sie eine thermografische Inspektion, elektrische Messungen oder Unterstützung im Bereich Industrieautomation? Beschreiben Sie Ihren Bedarf. Wir stimmen den Leistungsumfang gemeinsam ab.",
    formTitle: "Anfrage senden",
    formDescription:
      "Füllen Sie das Formular aus. Ihre Anfrage wird direkt an URSO INSTAL gesendet.",
    company: "Firmen- / Betriebsname",
    companyPlaceholder: "Name des Unternehmens",
    name: "Vor- und Nachname",
    namePlaceholder: "Ansprechpartner",
    email: "E-Mail-Adresse",
    emailPlaceholder: "name@firma.de",
    phone: "Telefonnummer",
    phonePlaceholder: "+48 000 000 000",
    subject: "Anfragegrund",
    subjectPlaceholder: "Thema auswählen",
    subjects: [
      "Versicherungsanforderung / Policenprüfung",
      "Regelmäßige Inspektion der Instandhaltung",
      "Schaltschrankbau / Modernisierung der Automatisierung",
      "SEP-Elektromessungen",
      "Sonstige Anfrage",
    ],
    message: "Beschreibung der Anfrage",
    messagePlaceholder:
      "Beschreiben Sie kurz das Objekt, den Leistungsumfang oder das Problem...",
    submit: "Anfrage senden",
    sending: "Wird gesendet...",
    success: "Vielen Dank. Ihre Nachricht wurde gesendet.",
    sendError:
      "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    privacy:
      "Ihre Formulardaten werden direkt an URSO INSTAL zur Bearbeitung Ihrer Anfrage gesendet.",
    contactLabel: "Kontaktdaten",
    contactTitle: "URSO INSTAL – Wojciech Jochemczyk",
    contactDescription:
      "Dienstleistungen für Produktionsbetriebe, Industrieanlagen und elektrische Installationen.",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    locationLabel: "Einsatzgebiet",
    location: "Schlesien / ganz Polen",
    taxLabel: "Steuernummer",
    qualifications: "Kompetenzen und Qualifikationen",
    iso: "Zertifizierter Thermograf ISO 18436-7 Level 1",
    sep: "Elektrotechnische Qualifikationen SEP G1 E + D",
    servicesLabel: "Leistungsumfang",
    servicesTitle: "Wie können wir helfen?",
    services: [
      {
        title: "Industriethermografie",
        description:
          "Diagnostik von Schaltanlagen, Trafostationen, Schaltschränken und Maschinen.",
        href: "/termowizja",
      },
      {
        title: "Automatisierung und Schaltschrankbau",
        description:
          "Schaltschrankbau, Maschinenmodernisierung, Steuerungssysteme und Elektroinstallationen.",
        href: "/elektryka-automatyka",
      },
      {
        title: "SEP-Messungen",
        description:
          "Abnahme- und wiederkehrende elektrische Messungen, einschließlich RCD- und Isolationsprüfungen.",
        href: "/pomiary-sep",
      },
    ],
    areaTitle: "Wir sind in Schlesien und ganz Polen tätig",
    areaDescription:
      "Wir bieten Dienstleistungen für Produktionsbetriebe und Industrieanlagen an. Umfang und Termin werden individuell vereinbart.",
    back: "Zurück zur Startseite",
    footer: "URSO INSTAL • Wojciech Jochemczyk",
  },
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "";
const web3FormsAccessKey = "3baa4f66-837f-4107-a52c-a7b24e778125";

export default function KontaktPage() {
  const { locale } = useLocale();
  const t = translations[locale];

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    setNotice("");
    setIsSuccess(false);
    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `Zapytanie URSO INSTAL – ${subject}`,
          from_name: `URSO INSTAL – ${name}`,
          company,
          name,
          email,
          replyto: email,
          phone,
          enquiry_type: subject,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed");
      }

      setNotice(t.success);
      setIsSuccess(true);

      setCompany("");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Web3Forms error:", error);
      setNotice(t.sendError);
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white text-[#171b20] transition-colors duration-300 dark:bg-[#101316] dark:text-[#edf0f2]">
      {/* HERO */}
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#55758b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
              {t.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#697078] dark:text-[#a6afb7] sm:text-lg">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* FORMULARZ + DANE */}
      <section>
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-16 lg:py-24">
          {/* FORMULARZ */}
          <div>
            <div className="mb-9">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
                {t.formTitle}
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                {t.formTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                {t.formDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">
                    {t.company}
                  </span>
                  <input
                    required
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder={t.companyPlaceholder}
                    className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-[#a0a6ab] focus:border-[#55758b] dark:border-white/15 dark:focus:border-[#91adbf]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium">
                    {t.name}
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={t.namePlaceholder}
                    className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-[#a0a6ab] focus:border-[#55758b] dark:border-white/15 dark:focus:border-[#91adbf]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium">
                    {t.email}
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-[#a0a6ab] focus:border-[#55758b] dark:border-white/15 dark:focus:border-[#91adbf]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium">
                    {t.phone}
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder={t.phonePlaceholder}
                    className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-[#a0a6ab] focus:border-[#55758b] dark:border-white/15 dark:focus:border-[#91adbf]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">
                  {t.subject}
                </span>
                <select
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="h-13 w-full appearance-none border border-black/15 bg-white px-4 text-sm outline-none transition-colors focus:border-[#55758b] dark:border-white/15 dark:bg-[#101316] dark:focus:border-[#91adbf]"
                >
                  <option value="" disabled>
                    {t.subjectPlaceholder}
                  </option>
                  {t.subjects.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">
                  {t.message}
                </span>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full resize-y border border-black/15 bg-transparent px-4 py-3 text-sm leading-7 outline-none transition-colors placeholder:text-[#a0a6ab] focus:border-[#55758b] dark:border-white/15 dark:focus:border-[#91adbf]"
                />
              </label>

              {notice && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`border p-4 text-sm leading-6 ${
                    isSuccess
                      ? "border-emerald-600/30 bg-emerald-600/10 text-emerald-700 dark:text-emerald-300"
                      : "border-[#c58b50]/40 bg-[#c58b50]/10 text-[#9b682f] dark:text-[#e2b27e]"
                  }`}
                >
                  {notice}
                </p>
              )}

              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-5 text-[#899198]">
                  {t.privacy}
                </p>

                <button
                  type="submit"
                  disabled={isSending}
                  className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-4 bg-[#243746] px-7 text-sm font-medium text-white transition-colors hover:bg-[#354f62] disabled:cursor-wait disabled:opacity-60 dark:bg-[#dce5eb] dark:text-[#151a1e] dark:hover:bg-white"
                >
                  {isSending ? t.sending : t.submit}
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>

          {/* DANE FIRMY */}
          <aside className="lg:pt-1">
            <div className="bg-[#1b2730] p-7 text-white sm:p-9">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#a9c0cf]">
                {t.contactLabel}
              </p>

              <h2 className="text-2xl font-semibold tracking-tight">
                {t.contactTitle}
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {t.contactDescription}
              </p>

              <div className="mt-9 space-y-7 border-t border-white/15 pt-8">
                <div className="flex items-start gap-4">
                  <Phone
                    size={19}
                    className="mt-0.5 shrink-0 text-[#a9c0cf]"
                  />
                  <div>
                    <p className="text-xs text-white/50">{t.phoneLabel}</p>
                    {contactPhone ? (
                      <a
                        href={`tel:${contactPhone.replace(/\s/g, "")}`}
                        className="mt-1 block text-sm transition-colors hover:text-[#a9c0cf]"
                      >
                        {contactPhone}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-white/60">
                        Do uzupełnienia
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    size={19}
                    className="mt-0.5 shrink-0 text-[#a9c0cf]"
                  />
                  <div>
                    <p className="text-xs text-white/50">{t.emailLabel}</p>
                    {contactEmail ? (
                      <a
                        href={`mailto:${contactEmail}`}
                        className="mt-1 block break-all text-sm transition-colors hover:text-[#a9c0cf]"
                      >
                        {contactEmail}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-white/60">
                        Do uzupełnienia
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#a9c0cf]"
                  />
                  <div>
                    <p className="text-xs text-white/50">
                      {t.locationLabel}
                    </p>
                    <p className="mt-1 text-sm">{t.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Building2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#a9c0cf]"
                  />
                  <div>
                    <p className="text-xs text-white/50">{t.taxLabel}</p>
                    <p className="mt-1 text-sm">6462771321</p>
                  </div>
                </div>
              </div>

              <div className="mt-9 border-t border-white/15 pt-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  {t.qualifications}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#a9c0cf]"
                    />
                    <p className="text-sm leading-6 text-white/80">{t.iso}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap
                      size={18}
                      className="mt-0.5 shrink-0 text-[#a9c0cf]"
                    />
                    <p className="text-sm leading-6 text-white/80">{t.sep}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 border border-black/10 p-6 dark:border-white/10">
              <div className="flex items-center gap-3">
                <MapPin size={19} className="text-[#55758b]" />
                <p className="text-sm font-semibold">{t.areaTitle}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                {t.areaDescription}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* USŁUGI */}
      <section className="bg-[#f4f6f7] dark:bg-[#171c20]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#55758b]">
              {t.servicesLabel}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              {t.servicesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex min-h-64 flex-col justify-between border border-black/10 bg-white p-7 transition-colors hover:border-[#55758b]/50 dark:border-white/10 dark:bg-[#101316] sm:p-8"
              >
                <div>
                  <span className="text-xs font-medium tracking-widest text-[#55758b]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#697078] dark:text-[#a6afb7]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#55758b]">
                    URSO INSTAL
                  </span>
                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
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
    </main>
  );
}
