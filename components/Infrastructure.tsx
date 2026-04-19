"use client";

import { Truck, TruckIcon, Forklift, Layers, MapPin, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { value: "7", label: "Kombija", Icon: Truck },
  { value: "1", label: "Kamion", Icon: TruckIcon },
  { value: "1", label: "Viličar", Icon: Forklift },
  { value: "2", label: "Platforme", Icon: Layers },
];

export function Infrastructure() {
  return (
    <section
      id="infrastruktura"
      className="relative overflow-hidden bg-navy-950 py-24 md:py-32 text-white"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.18]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80"
          alt="Vozni park i skladište"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(125,200,255,0.12),transparent_60%)]" />

      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Infrastruktura
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Spremni za svaki izazov.
            </h2>
            <p className="mt-6 text-balance text-base leading-relaxed text-ice-100/80 md:text-lg">
              S timom od <strong className="text-white">10 stalno zaposlenih</strong>{" "}
              i mrežom vanjskih suradnika pokrivamo <strong className="text-white">cijelu Hrvatsku</strong>.
              Vlastiti vozni park i oprema omogućuju nam brzu intervenciju,
              sigurnu dostavu i kvalitetnu montažu — u svako doba i na svakoj
              lokaciji.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-ice-100/90">
                <Users className="h-4 w-4 text-sky-300" />
                10 zaposlenih + suradnici
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-ice-100/90">
                <MapPin className="h-4 w-4 text-sky-300" />
                Cijela Hrvatska
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-400/20" />
                <s.Icon className="h-6 w-6 text-sky-300" strokeWidth={2} />
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight md:text-5xl">
                    {s.value}
                  </span>
                </div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wider text-ice-100/70">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-ring">
            <div className="relative aspect-[21/9] w-full sm:aspect-[21/8]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
                alt="Komercijalni rashladni kamion u pokretu"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-md p-6 sm:p-10">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                    Vozni park
                  </div>
                  <div className="mt-3 text-balance text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
                    Brza, sigurna i temperaturno kontrolirana dostava — diljem
                    Hrvatske.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
