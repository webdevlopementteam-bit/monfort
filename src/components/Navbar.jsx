"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Circle } from "lucide-react";
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
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#222] text-white">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-5">
          {/* Phone Numbers */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#34acb1]/10">
              <Phone size={15} className="text-[#34acb1]" />
            </div>

            <div className="flex items-center">
              {/* Call Us */}
              <a
                href="tel:+919871667213"
                className="group flex flex-col leading-tight"
              >
                <span className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-500 sm:text-[9px]">
                  Call Us
                </span>

                <span className="mt-0.5 text-[11px] font-medium text-gray-200 transition-colors group-hover:text-[#34acb1] sm:text-sm">
                  +91-9871667213
                </span>
              </a>

              {/* Divider */}
              <span className="mx-3 h-7 w-px bg-white/20 sm:mx-5" />

              {/* Office Number */}
              <a
                href="tel:+918383972282"
                className="group flex flex-col leading-tight"
              >
                <span className="text-[8px] font-semibold uppercase tracking-[1px] text-gray-500 sm:text-[9px]">
                  Office
                </span>

                <span className="mt-0.5 text-[11px] font-medium text-gray-200 transition-colors group-hover:text-[#34acb1] sm:text-sm">
                  +91-8383972282
                </span>
              </a>
            </div>
          </div>

          {/* GST Number */}
          <div className="hidden text-xs font-medium tracking-wide text-gray-400 sm:block">
            GST No. <span className="text-gray-300">07BJSPR2098P1Z1</span>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="relative block h-[48px] w-[105px] sm:h-[60px] sm:w-[130px]"
          >
            <Image
              src="/logo.jpeg"
              alt="Logo"
              fill
              priority
              sizes="(max-width: 640px) 105px, 130px"
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 lg:flex xl:gap-12">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/" ? pathName === "/" : pathName === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 font-medium transition-colors ${
                    isActive
                      ? "text-[#34acb1]"
                      : "text-gray-700 hover:text-[#34acb1]"
                  }`}
                >
                  <Circle
                    size={9}
                    fill="currentColor"
                    className={`transition-colors ${
                      isActive
                        ? "text-[#34acb1]"
                        : "text-gray-400 group-hover:text-[#34acb1]"
                    }`}
                    strokeWidth={1.5}
                  />

                  {item.name}
                </Link>
              );
            })}
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 hover:text-[#34acb1] lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-5 py-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathName === "/"
                      : pathName === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-3 font-medium transition ${
                        isActive
                          ? "bg-[#34acb1]/10 text-[#34acb1]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#34acb1]"
                      }`}
                    >
                      <Circle
                        size={9}
                        fill="currentColor"
                        className={
                          isActive ? "text-[#34acb1]" : "text-gray-400"
                        }
                        strokeWidth={1.5}
                      />

                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
                  Contact
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919871667213"
                    className="rounded-lg bg-gray-50 p-3 transition hover:bg-[#34acb1]/10"
                  >
                    <span className="block text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      Call Us
                    </span>

                    <span className="mt-1 block text-xs font-semibold text-gray-700">
                      +91-9871667213
                    </span>
                  </a>

                  <a
                    href="tel:+918383972282"
                    className="rounded-lg bg-gray-50 p-3 transition hover:bg-[#34acb1]/10"
                  >
                    <span className="block text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                      Office
                    </span>

                    <span className="mt-1 block text-xs font-semibold text-gray-700">
                      +91-8383972282
                    </span>
                  </a>
                </div>

                <div className="mt-3 text-xs text-gray-400">
                  GST No.{" "}
                  <span className="font-medium text-gray-600">
                    07BJSPR2098P1Z1
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
