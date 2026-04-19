"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=2400&q=80"
        alt="Industrijski rashladni sustav"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(125,200,255,0.18),transparent_55%)]" />

      <div className="container-x relative pt-32 pb-20 md:pt-36 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-ice-100/90 backdrop-blur"
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          Obiteljska tradicija od 2005.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Vaš pouzdan partner za{" "}
          <span className="bg-gradient-to-r from-ice-100 to-sky-300 bg-clip-text text-transparent">
            rashladne sustave.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-ice-100/85 md:text-lg"
        >
          Obiteljska tradicija i stručnost od 2005. godine. Od montaže do
          održavanja, brinemo o vašem poslovanju s pažnjom i kvalitetom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#usluge"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-ring transition-all hover:bg-ice-100"
          >
            Naše usluge
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="tel:+385912345678"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Nazovite nas
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          {[
            { k: "20+", v: "godina iskustva" },
            { k: "10", v: "stalno zaposlenih" },
            { k: "RH", v: "pokrivenost terena" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl font-bold text-white md:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ice-100/70 md:text-sm md:normal-case md:tracking-normal">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
