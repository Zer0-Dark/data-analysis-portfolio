
import Image from "next/image";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Loader from "./_components/Loader";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Certifcates from "./_components/Certifcates";


export default function Home() {

  return (
    <div className="min-h-screen text-white">
      <Loader />
      {/* <Hero></Hero> */}
      <Skills></Skills>
      <Certifcates />
      <Projects></Projects>
      <Contact />
      <Footer />
    </div>
  );
}
