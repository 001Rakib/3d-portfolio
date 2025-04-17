import LogoSection from "@/sections/LogoSection";
import Navbar from "@/components/Navbar";
import FeaturedCards from "@/sections/FeaturedCards";
import Hero from "@/sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaturedCards />
      <Experience />
    </>
  );
}
