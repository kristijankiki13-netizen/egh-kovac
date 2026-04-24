"use client";

import { Award, HeartHandshake, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { BlueprintImage } from "./BlueprintImage";

const values = [
  {
    Icon: HeartHandshake,
    title: "Obiteljski pristup",
    text: "Svaki klijent dobiva pažnju, povjerenje i osobni odnos.",
  },
  {
    Icon: Award,
    title: "Stručnost i kvaliteta",
    text: "Iskusni tim i provjerena oprema renomiranih proizvođača.",
  },
  {
    Icon: MapPin,
    title: "Lokalna prisutnost",
    text: "Sjedište u Zagrebu, intervencije u radijusu do 100 km.",
  },
];

export function About() {
  return (
    <section id="o-nama" className="relative bg-ice-50/40 py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-200/60 via-ice-100 to-transparent blur-2xl" />

              {/* SLOT C — Scissor lifts / Platforms (replace `src` with client's real photo) */}
              <BlueprintImage
                slot="C"
                src="/images/slot-c-platforms.jpg"
                alt="Platforma i oprema EGH Kovač"
                className="aspect-[4/5] w-full rounded-3xl border border-navy-100 shadow-ring"
                overlayClassName="bg-blue-950/40"
              />

              <div className="absolute -bottom-6 -right-4 hidden w-64 rounded-2xl border border-navy-100 bg-white p-5 shadow-ring md:block">
                <div className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                  Od 12.01.2006.
                </div>
                <div className="mt-1 text-sm font-medium text-navy-900">
                  Obiteljsko naslijeđe još od 1997. godine kao Obrt EGH.
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                O nama
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
                Obitelj koja stoji iza svake instalacije.
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-800/85 md:text-lg">
                <p>
                  Naša obiteljska priča započela je <strong>1997. godine</strong>{" "}
                  kao <strong>Obrt EGH</strong>, koji je poslovao sve do
                  2006. godine. <strong>12.01.2006.</strong> službeno je osnovana
                  tvrtka <strong>EGH Kovač</strong> sa sjedištem u Zagrebu, na
                  adresi <strong>Fallerovo šetalište 86</strong>.
                </p>
                <p>
                  Iz generacije u generaciju razvili smo se u pouzdanog partnera
                  trgovinama, ugostiteljstvu, industriji i logistici u{" "}
                  <strong>Zagrebu i okolici (do 100 km udaljenosti)</strong>. Naš
                  je pristup jednostavan: slušamo, savjetujemo i isporučujemo
                  rješenja koja traju.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {values.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={0.1 + i * 0.06}
                  className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-ring"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-ice-100">
                    <v.Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-navy-900">
                    {v.title}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-navy-700/75">
                    {v.text}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
