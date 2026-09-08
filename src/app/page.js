import AboutSection from "@/sections/About";
import CTABanner from "@/sections/CTABanner";
import Contact from "@/sections/ContactUs";
import FAQ from "@/sections/FAQ";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import HowWeWork from "@/sections/Howwework";
import Products from "@/sections/Product";
import StatsSection from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import TrustBar from "@/sections/TrustBar";
import WhyChooseUs from "@/sections/Whychooseus";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
         <Products />
        <AboutSection />
       
      <StatsSection />
   
     
     
      <Gallery />
      <WhyChooseUs />
     
      <HowWeWork />
      <FAQ />
      <Testimonials />
      <CTABanner />
      <Contact />
    </>
  );
}
