
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Providers from "./components/providers/Providers";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://ursoinstal.pl"),

  title: {
    default: "URSO INSTAL | Termowizja i automatyka przemysłowa Śląsk",
    template: "%s | URSO INSTAL",
  },

  description:
    "URSO INSTAL oferuje termowizję przemysłową, badania rozdzielnic, diagnostykę instalacji elektrycznych, prefabrykację szaf sterowniczych i automatykę przemysłową na Śląsku oraz w całej Polsce.",

  applicationName: "URSO INSTAL",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  keywords: [
    "URSO INSTAL",
    "termowizja przemysłowa",
    "badania termowizyjne rozdzielnic",
    "diagnostyka termowizyjna",
    "automatyka przemysłowa",
    "prefabrykacja szaf sterowniczych",
    "pomiary elektryczne SEP",
    "termowizja Śląsk",
  ],

  openGraph: {
    title: "URSO INSTAL | Termowizja i automatyka przemysłowa",
    description:
      "Badania termowizyjne rozdzielnic, diagnostyka instalacji elektrycznych, prefabrykacja szaf sterowniczych i automatyka przemysłowa. Obsługujemy Śląsk i całą Polskę.",
    url: "https://ursoinstal.pl",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "URSO INSTAL | Termowizja i automatyka przemysłowa",
    description:
      "Termowizja przemysłowa, diagnostyka instalacji elektrycznych i automatyka przemysłowa.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171b1f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>

        <Script
          id="cloudflare-web-analytics"
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"5e13c97e600f4109a384ab1932fec8f3"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
