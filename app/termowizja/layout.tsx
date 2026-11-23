
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "URSO INSTAL | Termowizja przemysłowa i badania rozdzielni",
  description:
    "Profesjonalne badania termowizyjne rozdzielnic, szaf sterowniczych i maszyn przemysłowych. Diagnostyka usterek i raporty na Śląsku oraz w całej Polsce.",
  alternates: {
    canonical: "/termowizja",
  },
  openGraph: {
    title: "Termowizja przemysłowa | URSO INSTAL",
    description:
      "Diagnostyka termowizyjna instalacji elektrycznych, rozdzielnic i urządzeń przemysłowych.",
    url: "/termowizja",
    type: "website",
  },
};

export default function ThermowizjaLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
