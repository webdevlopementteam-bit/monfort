import ContactHero from "@/sections/ContactHero";
import Contact from "@/sections/ContactUs";

export const metadata = {
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />
    </>
  );
}
