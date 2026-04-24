"use client";

import {
  Truck,
  TruckIcon,
  Forklift,
  Layers,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { BlueprintImage } from "./BlueprintImage";

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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(125,200,255,0.12),transparent_60%)]" />

      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Infrastruktura
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Spremni za svaki izazov.
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-ice-100/80 md:text-lg">
            S timom od <strong className="text-white">10 stalno zaposlenih</strong>{" "}
            i mrežom vanjskih suradnika pokrivamo{" "}
            <strong className="text-white">Zagreb i okolicu</strong> — u radijusu
            do 100 km od sjedišta. Vlastiti vozni park i oprema omogućuju nam
            brzu intervenciju, sigurnu dostavu i kvalitetnu montažu u svako
            doba.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-ice-100/90">
              <Users className="h-4 w-4 text-sky-300" />
              10 zaposlenih + suradnici
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-ice-100/90">
              <MapPin className="h-4 w-4 text-sky-300" />
              Zagreb i okolica (do 100 km)
            </span>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4 backdrop-blur sm:p-5">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400"
              strokeWidth={2.2}
            />
            <p className="text-sm leading-relaxed text-ice-100/90 sm:text-[0.95rem]">
              <strong className="text-white">Ovlašteni serviseri</strong> i
              nositelji stručnih certifikata za rad s rashladnim sustavima.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* SLOT B — MAN Truck (replace `src` with client's real photo) */}
          <Reveal className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 shadow-ring">
              <BlueprintImage
                slot="B"
                src="/images/slot-b-man-truck.jpg"
                alt="MAN kamion — vozni park EGH Kovač"
                className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full"
                overlayClassName="bg-blue-900/20"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Vozni park
                </div>
                <div className="mt-2 text-balance text-lg font-semibold leading-snug text-white sm:text-xl md:text-2xl">
                  Brza, sigurna i temperaturno kontrolirana dostava u Zagrebu i
                  okolici.
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-5 lg:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.06}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
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
      </div>
    </section>
  );
}
