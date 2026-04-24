"use client";

import {
  Wrench,
  PackageSearch,
  Boxes,
  Truck,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
  highlight?: boolean;
};

const services: Service[] = [
  {
    title: "Servis i održavanje",
    description:
      "Servis, redovno održavanje i nadogradnja rashladnih sustava uz brz odaziv i provjerene rezervne dijelove.",
    Icon: Wrench,
  },
  {
    title: "Prodaja opreme",
    description:
      "Prodaja rashladnih uređaja, agregata i centrala renomiranih proizvođača — savjetovanje pri odabiru.",
    Icon: PackageSearch,
  },
  {
    title: "Montaža rashladnih komora",
    description:
      "Stručna montaža i puštanje u rad rashladnih komora po mjeri vašeg prostora i potreba.",
    Icon: Boxes,
  },
  {
    title: "Prijevoz Zagreb i okolica",
    description:
      "Vlastiti vozni park — kamion i kombiji za siguran prijevoz rashladne opreme u radijusu do 100 km od Zagreba.",
    Icon: Truck,
  },
  {
    title: "Skladištenje robe",
    description:
      "Sigurno i organizirano skladištenje robe u našim prostorima, prilagođeno potrebama klijenta.",
    Icon: Warehouse,
  },
  {
    title: "Hitne intervencije 24/7",
    description:
      "Brza reakcija u slučaju kvara — dežurni tim dostupan je u svako doba kako bi vaš sustav opet bio u pogonu.",
    Icon: Zap,
    highlight: true,
  },
];

export function Services() {
  return (
    <section id="usluge" className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Što radimo
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
            Kompletna rješenja za vaše rashladne potrebe
          </h2>
          <p className="mt-5 text-balance text-base text-navy-700/80 md:text-lg">
            Od savjetovanja i montaže, preko servisa, do prijevoza i
            skladištenja — sve na jednom mjestu, s jamstvom kvalitete.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.05}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-ring ${
                s.highlight
                  ? "border-red-500/30 ring-1 ring-red-500/10 hover:border-red-500/50"
                  : "border-navy-100 hover:border-navy-200"
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  s.highlight
                    ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600"
                    : "bg-gradient-to-r from-sky-300 via-sky-500 to-navy-700"
                }`}
              />

              {s.highlight && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-600 ring-1 ring-inset ring-red-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                  </span>
                  24/7
                </span>
              )}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset transition-colors ${
                  s.highlight
                    ? "bg-red-50 text-red-600 ring-red-500/20 group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600"
                    : "bg-ice-100 text-navy-800 ring-navy-100 group-hover:bg-navy-900 group-hover:text-ice-100 group-hover:ring-navy-900"
                }`}
              >
                <s.Icon className="h-6 w-6" strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/75">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
