import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Launchpads from "@/components/Launchpads";
import Success from "@/components/Success";
import LearnMore from "@/components/LearnMore";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <div className="pt-20 md:pt-18">
        <HeroSection />
        <Partners />
        <div id="about">
          <About />
        </div>
        <Advantages />
        <div id="agenda">
          <Launchpads />
        </div>
        <div id="testimonials">
          <Success />
        </div>
        <div id="mentors">
          <LearnMore />
        </div>
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
