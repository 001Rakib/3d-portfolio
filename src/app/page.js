import LogoSection from "@/components/LogoSection";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </>
  );
}
