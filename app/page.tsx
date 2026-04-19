import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Infrastructure } from "@/components/Infrastructure";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Infrastructure />
      <About />
      <Contact />
    </main>
  );
}
