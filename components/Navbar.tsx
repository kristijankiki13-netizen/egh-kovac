"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#usluge", label: "Usluge" },
  { href: "#infrastruktura", label: "Infrastruktura" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(19,32,59,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          aria-label="EGH Kovač — početna"
          className="group flex items-center"
        >
          <Logo variant={scrolled ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-navy-800 hover:bg-navy-50 hover:text-navy-900"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+385912345678"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-navy-800 hover:shadow-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <Phone className="h-4 w-4" strokeWidth={2.4} />
            Nazovite nas
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              scrolled
                ? "bg-navy-50 text-navy-900 hover:bg-navy-100"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-100 bg-white/95 backdrop-blur-md">
          <nav className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+385912345678"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Nazovite nas
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
