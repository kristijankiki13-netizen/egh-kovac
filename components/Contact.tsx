"use client";

import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function Contact() {
  return (
    <section id="kontakt" className="relative bg-white pt-24 md:pt-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Kontakt
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
            Razgovarajmo o vašem projektu.
          </h2>
          <p className="mt-5 text-balance text-base text-navy-700/80 md:text-lg">
            Javite nam se s povjerenjem — odgovaramo brzo i sa stvarnim
            preporukama, bez nepotrebnih obećanja.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-3.5">
              <ContactItem
                Icon={MapPin}
                title="Adresa"
                lines={["Fallerovo šetalište 86", "10000 Zagreb, Hrvatska"]}
              />
              <ContactItem
                Icon={Phone}
                title="Telefon"
                lines={[
                  <a
                    key="t1"
                    href="tel:+385912345678"
                    className="hover:text-navy-900"
                  >
                    +385 91 234 5678
                  </a>,
                  <a
                    key="t2"
                    href="tel:+38516123456"
                    className="hover:text-navy-900"
                  >
                    +385 1 612 3456
                  </a>,
                ]}
              />
              <ContactItem
                Icon={Mail}
                title="E-mail"
                lines={[
                  <a
                    key="e1"
                    href="mailto:egh@egh.hr"
                    className="hover:text-navy-900"
                  >
                    egh@egh.hr
                  </a>,
                ]}
              />
              <ContactItem
                Icon={Clock}
                title="Radno vrijeme"
                lines={["Pon – Pet: 08:00 – 16:00", "Hitne intervencije 24/7"]}
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-ring">
            <div className="aspect-[16/8] w-full bg-navy-50">
              <iframe
                title="Lokacija EGH Kovač"
                src="https://www.google.com/maps?q=Fallerovo%20%C5%A1etali%C5%A1te%2086%2C%20Zagreb&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Footer />
    </section>
  );
}

function ContactItem({
  Icon,
  title,
  lines,
}: {
  Icon: LucideIcon;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-ring">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ice-100 text-navy-800 ring-1 ring-inset ring-navy-100">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-sky-600">
          {title}
        </div>
        <div className="mt-1 space-y-0.5 text-sm font-medium text-navy-800">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-ring sm:p-8 md:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-navy-100/60 blur-3xl" />

      <div className="relative">
        <h3 className="text-xl font-semibold text-navy-900 md:text-2xl">
          Pošaljite upit
        </h3>
        <p className="mt-2 text-sm text-navy-700/75">
          Ispunite formu i javit ćemo vam se u najkraćem mogućem roku.
        </p>

        <form
          action="https://formsubmit.co/egh@egh.hr"
          method="POST"
          className="mt-7 space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Novi upit s web stranice EGH Kovač"
          />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field id="name" label="Ime i prezime" required>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Ivan Horvat"
                className="form-input"
              />
            </Field>
            <Field id="email" label="E-mail" required>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="ivan@tvrtka.hr"
                className="form-input"
              />
            </Field>
          </div>

          <Field id="message" label="Poruka" required>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Ukratko opišite vašu potrebu ili projekt..."
              className="form-input resize-none"
            />
          </Field>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-navy-800 hover:shadow-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 sm:w-auto"
          >
            Pošalji poruku
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-navy-700/80">
        {label}
        {required && <span className="ml-0.5 text-sky-600">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-navy-100 bg-navy-950 text-ice-100/70">
      <div className="container-x flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo variant="light" />
          <span className="hidden h-8 w-px bg-white/10 sm:block" />
          <span className="hidden text-xs text-ice-100/60 sm:block">
            Rashladni sustavi i logistika
          </span>
        </div>

        <div className="text-xs text-ice-100/60">
          &copy; {year} EGH Kovač. Sva prava pridržana.
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-4 text-center text-xs text-gray-400">
          Design by Horwell Digital
        </div>
      </div>
    </footer>
  );
}
