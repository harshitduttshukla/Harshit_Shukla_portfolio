import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { WorkWithMe } from "@/components/sections/WorkWithMe";
import { Process } from "@/components/sections/Process";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <WorkWithMe />
      <Process />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
