"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, Circle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#222] text-white">
        <div className="max-w-7xl mx-auto px-5 h-12 flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+919871667213" className="hover:text-white transition">
              <span>+91-9871667213</span>
            </a>
          </div>

          <div className="hidden md:block">GST No. 07BJSPR2098P1Z1</div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={130}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 font-medium ${
                  item.href === pathName ? "text-[#34acb1]" : "text-gray-700"
                }`}
              >
                <Circle
                  size={10}
                  fill="currentColor"
                  className={
                    item.href === pathName ? "text-[#34acb1]" : "text-gray-400"
                  }
                  strokeWidth={1.5}
                />

                {item.name}

                {item.dropdown && <ChevronDown size={18} strokeWidth={2.2} />}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="flex flex-col p-5 gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 font-medium ${
                    item.href === pathName ? "text-[#34acb1]" : "text-gray-700"
                  }`}
                >
                  <Circle
                    size={10}
                    fill="currentColor"
                    className={
                      item.href === pathName
                        ? "text-[#34acb1]"
                        : "text-gray-400"
                    }
                    strokeWidth={1.5}
                  />

                  {item.name}

                  {item.dropdown && <ChevronDown size={16} />}
                </Link>
              ))}

              <div className="pt-4 border-t text-sm">GST No. 07BKFPK5051</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
