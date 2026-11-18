
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Providers from "./components/providers/Providers";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://ursoinstall.com"),

  title: {
    default: "URSO INSTAL | Termowizja i Automatyka Przemysłowa",
    template: "%s | URSO INSTAL",
  },

  description:
    "Profesjonalna diagnostyka termowizyjna, automatyka przemysłowa, prefabrykacja szaf sterowniczych i pomiary elektryczne.",

  keywords: [
    "URSO INSTAL",
    "termowizja przemysłowa",
    "diagnostyka termowizyjna",
    "automatyka przemysłowa",
    "prefabrykacja szaf sterowniczych",
    "pomiary SEP",
  ],

  openGraph: {
    title: "URSO INSTAL | Termowizja i Automatyka Przemysłowa",
    description:
      "Diagnostyka termowizyjna i rozwiązania dla przemysłu.",
    url: "https://ursoinstall.com",
    siteName: "URSO INSTAL",
    locale: "pl_PL",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
