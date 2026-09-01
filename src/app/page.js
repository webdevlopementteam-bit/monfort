import AboutSection from "@/sections/About";
import Contact from "@/sections/ContactUs";
import FAQ from "@/sections/FAQ";
import Hero from "@/sections/Hero";
import HowWeWork from "@/sections/Howwework";
import Products from "@/sections/Product";
import StatsSection from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import WhyChooseUs from "@/sections/Whychooseus";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Products />
      <WhyChooseUs />
      <StatsSection />
      <HowWeWork />
      <FAQ />
      <Testimonials />
      <Contact />
    </>
  );
}
