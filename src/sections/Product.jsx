"use client";

import Link from "next/link";
import { ArrowLeft, LayoutGrid, Sparkles, Lightbulb, ShowerHead } from "lucide-react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import ProductTileGrid from "@/sections/ProductTileGrid";

const sinkTypes = [
  {
    title: "Indian sinks",
    text: "everyday sinks with a glossy finish, made for regular family use.",
  },
  {
    title: "Handmade sinks",
    text: "available in Matt, Nano Black, Gold, Mirror and Rose Gold.",
  },
  {
    title: "Premium handmade sinks",
    text: "for kitchens where the sink is meant to stand out.",
  },
  {
    title: "Waterfall sinks",
    text: "a designer option for modern, contemporary kitchens.",
  },
  {
    title: "Quartz sinks",
    text: "a good pick if you'd like something different from steel.",
  },
];

const mainCategories = [
  {
    number: "01",
    title: "Kitchen Sinks",
    description:
      "Indian, handmade, waterfall, premium handmade and quartz sinks — crafted for every kind of kitchen.",
    image: "/products/kitchen.webp",
    href: "/products/kitchen-sinks-manufacturer",
  },
  {
    number: "02",
    title: "Bathroom Accessories",
    description:
      "Drainers, faucets, sprays, dispensers, showers, taps and more for a complete bathroom fit-out.",
    image: "/products/bathroom.webp",
    href: "/products/bathroom-accessories",
  },
  {
    number: "03",
    title: "Premium Montfort Accessories",
    description:
      "Brayston and Technova series stainless steel accessories — towel rods, racks, soap dishes and more.",
    image: "/products/premium.webp",
    href: "/products/premium-montfort-accessories",
  },
];

export default function Products({ standalone = false }) {
  return (
    <section id="products" className="relative overflow-hidden bg-[#f7f9f9]">
      {/* =====================================================
          STANDALONE PAGE HERO (only on /products, not the homepage section)
      ====================================================== */}

      {standalone && (
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0f2431] via-[#142A3D] to-[#173751] pb-16 pt-8 sm:pb-10 lg:pb-12 lg:pt-12">
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#30ADB2]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#258F94]/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-white/30">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Back to Home
            </Link>

            <div className="mx-auto mt-10 max-w-2xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#67cdd0]/60" />
                  <span className="relative h-2 w-2 rounded-full bg-[#67cdd0]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#67cdd0]">
                  Our Products
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Crafted for modern{" "}
                <span className="text-[#67cdd0]">kitchens &amp; living</span>
              </h1>

              <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#258F94] to-[#67cdd0]" />

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                From kitchen sinks to bathroom accessories — explore our
                complete product range.
              </p>
            </div>

            {/* Stats — divided row, not boxes */}
            <div className="mx-auto mt-10 flex w-fit items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm sm:gap-10 sm:px-10">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[#67cdd0]">
                  <LayoutGrid className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {mainCategories.length}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
                    Categories
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[#67cdd0]">
                  <Sparkles className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Premium
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
                    Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#258F94]/[0.035] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#258F94]/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-6 sm:px-6 sm:pt-20 sm:pb-8 lg:px-8 lg:pt-24 lg:pb-10">
        {/* =====================================================
            HEADER (homepage section only)
        ====================================================== */}

        {!standalone && (
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
                  <span className="text-[#258F94]">kitchens &amp; living</span>
                </h2>
              </div>

              {/* Right */}
              <div className="max-w-md lg:pb-1">
                <p className="text-sm leading-7 text-slate-500 sm:text-base">
                  From kitchen sinks to bathroom accessories — explore our
                  complete product range.
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* =====================================================
            MAIN CATEGORY GRID
        ====================================================== */}
        <ProductTileGrid tiles={mainCategories} cover />

        {/* =====================================================
            KITCHEN SINKS FOR EVERY KIND OF KITCHEN
        ====================================================== */}
        <Reveal className="mt-16 sm:mt-20 lg:mt-24">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,17,18,0.05)] sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#258F94]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#258F94]">
                  Our Range
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-[#142A3D] sm:text-3xl">
                Kitchen Sinks for Every Kind of Kitchen
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Every kitchen is different, so we don&apos;t make just one
                kind of sink.
              </p>
            </div>

            <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {sinkTypes.map((item, index) => (
                <StaggerItem
                  key={index}
                  className="rounded-2xl bg-[#f7f9f9] p-5 transition-colors duration-300 hover:bg-[#258F94]/5"
                >
                  <p className="text-sm font-semibold text-[#142A3D]">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <p className="mt-8 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
              Our sinks come in single bowl and double bowl designs. Common
              sizes (in inches) include 18x16, 20x17, 24x18, 30x18, 37x18 and
              45x20, with larger sizes in some ranges. If you like a granite
              or metallic look, our Metallic &amp; Granite series comes in
              Black, Brown, Gray, Ivory Sand, Red Moon, Peach Ivory and more.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            CHOOSING THE RIGHT SINK + BATHROOM ACCESSORIES
        ====================================================== */}
        <StaggerGroup className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Choosing the Right Sink */}
          <StaggerItem className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,17,18,0.05)] sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#258F94]/10 text-[#258F94]">
              <Lightbulb size={22} strokeWidth={1.8} />
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-[#142A3D] sm:text-2xl">
              Choosing the Right Sink: A Few Practical Pointers
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
              <p>
                Stainless steel is the usual choice for Indian kitchens
                because it handles heat, heavy utensils and daily scrubbing
                well. If you use big vessels often, a large single bowl or a
                bigger double bowl will be easier to work with, while a
                single bowl saves counter space in a small kitchen.
              </p>
              <p>
                Finish matters too. A mirror finish looks sharp but shows
                scratches and water marks sooner, while a matt finish hides
                everyday wear better. And measure your counter cut-out before
                you decide, because a sink that is off by even a couple of
                inches becomes a headache later.
              </p>
            </div>
          </StaggerItem>

          {/* Bathroom Accessories Too */}
          <StaggerItem className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,17,18,0.05)] sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#258F94]/10 text-[#258F94]">
              <ShowerHead size={22} strokeWidth={1.8} />
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-[#142A3D] sm:text-2xl">
              Bathroom Accessories Too
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Many customers ask us for matching bathroom fittings, so we
              make those as well: drainers (jaali), health faucets, jet
              sprays, soap dispensers, overhead showers, towel rings and
              racks, PTMT and brass taps, and acrylic accessories. Our
              premium stainless steel Brayston and Technova series is for
              anyone who wants the whole bathroom to look coordinated.
            </p>

            <Link
              href="/products/bathroom-accessories"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#258F94] transition-colors hover:text-[#1f7377]"
            >
              Explore Bathroom Accessories
              <ArrowLeft size={15} className="rotate-180" />
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
