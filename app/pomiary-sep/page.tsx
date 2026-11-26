import PomiarySepClient from "./PomiarySepClient";

export const metadata = {
  title: "Pomiary SEP | URSO INSTAL",
  alternates: {
    canonical: "https://ursoinstal.pl/pomiary-sep",
  },
};

export default function PomiarySepPage() {
  return <PomiarySepClient />;
}