"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/917838951950"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
      <FaWhatsapp size={30} className="relative" />
    </a>
  );
}
