import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EGH Kovač | Servis i montaža rashladnih sustava Zagreb",
  description:
    "Obiteljska tradicija od 2006. Stručni servis, montaža i održavanje rashladnih komora i sustava. Hitne intervencije 24/7 za Zagreb i okolicu (do 100km).",
  metadataBase: new URL("https://egh-kovac.hr"),
  openGraph: {
    title: "EGH Kovač | Servis i montaža rashladnih sustava Zagreb",
    description:
      "Obiteljska tradicija od 2006. Stručni servis, montaža i održavanje rashladnih komora i sustava. Hitne intervencije 24/7 za Zagreb i okolicu (do 100km).",
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
