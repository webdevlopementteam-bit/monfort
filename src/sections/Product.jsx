"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/Reveal";

const products = [
  {
    number: "01",
    title: "Indian Kitchen Sink",
    shortTitle: "Indian Kitchen Sink",
    description:
      "Strong and durable stainless steel Indian sinks designed for everyday kitchen use with a practical design, smooth finish and easy maintenance.",
    image: "/products/indian_sink.png",
    href: "/products?category=indian_sink",
  },
  
  {
    number: "02",
    title: "PTMT Taps",
    shortTitle: "PTMT Taps",
    description:
      "Durable and lightweight PTMT taps designed for smooth water flow, reliable performance and long-lasting use in modern kitchens.",
    image: "/products/pmtp.png",
    href: "/products?category=ptmt_taps",
  },
  {
    number: "03",
    title: "Waterfall Sinks",
    shortTitle: "Waterfall Sinks",
    description:
      "Modern waterfall sinks featuring an integrated waterfall-style water outlet, premium finishing and a unique design for contemporary kitchens.",
    image: "/products/waterfall_sink.png",
    href: "/products?category=waterfall",
  },
  {
    number: "04",
    title: "Handmade Kitchen Sink",
    shortTitle: "Handmade Kitchen Sink",
    description:
      "Premium handmade stainless steel sinks crafted with precision, elegant designs and superior finishing for modern and stylish kitchens.",
    image: "/products/handmade_sink.png",
    href: "/products?category=handmade",
  },
  {
    number: "05",
    title: "304 Grade Handmade Sinks",
    shortTitle: "304 Grade Handmade",
    description:
      "High-grade handmade sinks manufactured with premium stainless steel, precise craftsmanship and superior finishing.",
    image: "/products/Grade_Handmade_Sinks.png",
    href: "/products?category=grade304",
  },
  {
    number: "06",
    title: "Metallic & Granite Series",
    shortTitle: "Metallic & Granite",
    description:
      "Premium metallic and granite sinks available in multiple sizes and elegant finishes for modern kitchens.",
    image: "/products/metallicAndgranite.png",
    href: "/products?category=metallic_granite",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f7f9f9] py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#258F94]/[0.035] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#258F94]/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <Reveal className="mb-12 sm:mb-14 lg:mb-16">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* Left */}
            <div className="max-w-2xl">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#258F94]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#258F94]">
                  Our Products
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#142A3D] sm:text-4xl lg:text-[50px] lg:leading-[1.08]">
                Crafted for modern 
                <br />

                <span className="text-[#258F94]">
                 kitchens & living
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-md lg:pb-1">

              <p className="text-sm leading-7 text-slate-500 sm:text-base">
                Discover our collection of premium kitchen products,
                engineered for durability, functionality and timeless
                aesthetics.
              </p>

              <Link
                href="/products"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#142A3D]"
              >
                Explore complete collection

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#142A3D]/20 transition-all duration-300 group-hover:border-[#258F94] group-hover:bg-[#258F94] group-hover:text-white">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </div>

          </div>
        </Reveal>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {products.map((product) => (
            <StaggerItem key={product.number}>

              <Link
                href={product.href}
                className="group relative block h-full"
              >

                {/* =================================================
                    CARD
                ================================================== */}

                <div className="relative h-full overflow-hidden rounded-[28px] bg-white shadow-[0_8px_35px_rgba(19,54,58,0.07)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_55px_rgba(19,54,58,0.14)]">

                  {/* =================================================
                      IMAGE SECTION
                  ================================================== */}

                  <div className="relative h-[285px] overflow-hidden bg-[#eef5f5] sm:h-[300px]">

                    {/* subtle background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5faf9] to-[#e4f0f0]" />

                    {/* Large number */}
                    <span
                      className="
                        absolute
                        -right-2
                        -top-7
                        z-0
                        select-none
                        text-[150px]
                        font-black
                        leading-none
                        tracking-[-0.08em]
                        text-[#258F94]/[0.055]
                        transition-all
                        duration-700
                        group-hover:text-[#258F94]/[0.10]
                        group-hover:scale-105
                      "
                    >
                      {product.number}
                    </span>

                   

                    {/* Product image */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-7">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="
                          object-contain
                          p-7
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.08]
                        "
                      />
                    </div>

                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-white/50 to-transparent" />

                    {/* Product number */}
                    <div className="absolute bottom-5 left-5 z-30 flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#258F94]">
                        {product.number}
                      </span>

                      <span className="h-px w-8 bg-[#258F94]/40" />
                    </div>
                  </div>

                  {/* =================================================
                      DARK CONTENT PANEL
                  ================================================== */}

                  <div className="relative overflow-hidden bg-[#98d1d3]  px-6 pb-6 pt-6 sm:px-7 sm:pb-7">

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#258F94]/20 blur-3xl transition-all duration-700 group-hover:scale-150" />

                    {/* Decorative giant number */}
                    <span className="pointer-events-none absolute -bottom-8 -right-2 text-[110px] font-black leading-none text-white/[0.025]">
                      {product.number}
                    </span>

                    <div className="relative z-10">

                      {/* Title + Arrow */}
                      <div className="flex items-start justify-between gap-4">

                        <h3 className="max-w-[240px] text-xl font-bold leading-tight text-white transition-colors duration-300  sm:text-[22px]">
                          {product.title}
                        </h3>

                        {/* Arrow button */}
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/15
                            bg-white/[0.06]
                            text-white
                            transition-all
                            duration-500
                            group-hover:rotate-45
                            group-hover:border-[#67cdd0]
                            group-hover:bg-[#258F94]
                          "
                        >
                          <ArrowUpRight size={18} strokeWidth={1.8} />
                        </div>

                      </div>

                      {/* Divider */}
           {/*            <div className="my-5 h-px w-full bg-white/10" /> */}

                      {/* Description */}
                      <p className="line-clamp-3 min-h-[72px] text-sm leading-6 ">
                        {product.description}
                      </p>

                      {/* Bottom */}
                      <div className="mt-5 flex items-center justify-between">

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                          Explore Product
                        </span>

                        <span className="text-xs font-medium text-[#34ACB1]">
                          View Details
                        </span>

                      </div>

                    </div>

                    {/* Bottom teal line */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#258F94] transition-all duration-500 group-hover:w-full" />

                  </div>

                </div>

              </Link>
            </StaggerItem>
          ))}

        </StaggerGroup>

      </div>
    </section>
  );
}