import AboutSection from "@/sections/About";
import CTABanner from "@/sections/CTABanner";
import Contact from "@/sections/ContactUs";
import FAQ from "@/sections/FAQ";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import HowWeWork from "@/sections/Howwework";
import Products from "@/sections/Product";
import SeoContent from "@/sections/SeoContent";
import SeoIntro from "@/sections/SeoIntro";
import StatsSection from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import TrustBar from "@/sections/TrustBar";
import WhyChooseUs from "@/sections/Whychooseus";
import seoSchema from "@/data/seoSchema";

export const metadata = {
  title: "Sink Manufacturer in Delhi | Monfort Kitchen Sinks",
  description:
    "Monfort is a trusted sink manufacturer in Delhi since 2000. Explore handmade, Indian, waterfall & quartz kitchen sinks. Bulk orders & pan India delivery.",
  keywords: ["Sink manufacturer", "Sink manufacturer in Delhi"],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      <Hero />
      <TrustBar />
      <SeoIntro />
         <Products />
        <AboutSection />

      <StatsSection />



      <Gallery />
      <WhyChooseUs />

      <HowWeWork />
      <FAQ />
      <Testimonials />
      <CTABanner />
      <SeoContent />
      <Contact />
    </>
  );
}
