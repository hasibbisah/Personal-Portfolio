import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Impact from "@/components/Impact";
import Leadership from "@/components/Leadership";
import Philosophy from "@/components/Philosophy";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Expertise />
      <Impact />
      <Leadership />
      <Philosophy />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
