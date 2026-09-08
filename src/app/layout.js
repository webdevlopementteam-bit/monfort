import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Monfort",
  description: "",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
