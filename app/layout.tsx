import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EGH Kovač | Rashladni sustavi i logistika",
  description:
    "Obiteljska tvrtka za servis, prodaju i montažu rashladnih sustava, uz vlastiti vozni park za prijevoz i skladištenje robe diljem Hrvatske.",
  metadataBase: new URL("https://egh-kovac.hr"),
  openGraph: {
    title: "EGH Kovač | Rashladni sustavi i logistika",
    description:
      "Pouzdan partner za rashladne sustave od 2005. godine. Servis, prodaja, montaža i prijevoz.",
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
