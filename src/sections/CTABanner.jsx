
"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#F1F5F3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[110rem] px-6 sm:px-10 lg:px-20">
        <Reveal className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-medium tracking-tight text-[#0F6E56]">
                Free consultation, no obligation
              </p>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.15] tracking-tight text-[#0B1112] sm:text-4xl lg:text-[2.75rem]">
                Ready to upgrade your kitchen with{" "}
                <span className="text-[#0F6E56]">Monfort</span>?
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#4B564F]">
                From homeowners to architects and bulk dealers, our team
                helps you find the right sink for your project.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1112] px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#0F6E56]"
                >
                  Get a free consultation

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="https://wa.me/917838951950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0B1112]/15 bg-transparent px-7 py-4 text-sm font-medium text-[#0B1112] transition-colors duration-300 hover:border-[#0F6E56]/40 hover:bg-white"
                >
                  <MessageCircle
                    size={16}
                    className="text-[#0F6E56]"
                  />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative hidden h-72 items-center justify-center lg:flex">
              <svg
                viewBox="0 0 320 260"
                fill="none"
                className="h-full w-full max-w-sm text-[#0B1112]/10"
              >
                <path
                  d="M40 180c0 44 56 60 120 60s120-16 120-60"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <ellipse
                  cx="160"
                  cy="180"
                  rx="120"
                  ry="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M160 150V70c0-22 18-30 34-30s28 10 28 26"
                  stroke="#34acb1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <circle
                  cx="160"
                  cy="150"
                  r="4"
                  fill="#34acb1"
                />

                <path
                  d="M160 158c-6 8-10 14-10 20a10 10 0 0020 0c0-6-4-12-10-20z"
                  fill="#34acb1"
                  fillOpacity="0.25"
                />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

