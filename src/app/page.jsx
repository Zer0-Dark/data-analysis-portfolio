import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Certificates from "./_components/Certificates";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip font-sans text-white">
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
