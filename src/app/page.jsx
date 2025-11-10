import Image from "next/image";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Hero></Hero>
      <Skills></Skills>
    </div>
  );
}
