"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaAward,
  FaCogs,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function AboutSection() {
  const products = [
    {
      img: "/about/singlBowl.jpg",
      title: "Single Bowl",
    },
    {
      img: "/about/doubleBowl.jpg",
      title: "Double Bowl",
    },
    {
      img: "/about/designer.jpg",
      title: "Designer",
    },
  ];

  const features = [
    {
      icon: <FaAward />,
      title: "Since 2000",
      text: "Built on years of experience and dedication.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Focused",
      text: "Designed for durability and everyday usability.",
    },
    {
      icon: <FaCogs />,
      title: "Modern Designs",
      text: "Styles created to complement modern interiors.",
    },
    {
      icon: <FaCheck />,
      title: "Practical Functionality",
      text: "Thoughtfully designed for daily kitchen activities.",
    },
    {
      icon: <FaAward />,
      title: "Trusted Craftsmanship",
      text: "Committed to consistent quality and satisfaction.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FAFA] py-16 scroll-mt-24 sm:py-20 lg:py-28"
    >
      {/* =====================================================
BACKGROUND DECORATIONS
====================================================== */}
      ```
      <div className="pointer-events-none absolute left-[-180px] top-[8%] h-[420px] w-[420px] rounded-full bg-[#34ACB1]/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[42%] h-[500px] w-[500px] rounded-full bg-[#34ACB1]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-[350px] w-[350px] rounded-full bg-[#0B1112]/5 blur-[100px]" />
      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
    TOP INTRO
    ====================================================== */}

        <div className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#34ACB1]" />

              <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#34ACB1] sm:text-xs">
                About Monfort
              </span>
            </div>

            <h2 className="max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-[#0B1112] sm:text-5xl md:text-6xl lg:text-7xl">
              Crafted for kitchens.
              <br />
              <span className="italic font-medium text-[#34ACB1]">
                Designed for life.
              </span>
            </h2>
          </div>

          {/* Decorative Year */}

          <div className="hidden items-center gap-3 lg:flex">
            <div className="h-px w-16 bg-gray-300" />

            <span className="font-serif text-sm italic text-gray-400">
              Est. 2000
            </span>
          </div>
        </div>

        {/* =====================================================
    FIRST ROW
    IMAGE LEFT + ABOUT RIGHT
    ====================================================== */}

        <div className="grid items-stretch gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-28">
          {/* =====================================================
      LEFT SIDE — IMAGE
      ====================================================== */}

          <div className="relative">
            <div className="relative overflow-visible">
              {/* Main Image Container */}

              <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#0B1112] shadow-[0_30px_80px_rgba(11,17,18,0.18)] sm:min-h-[600px] lg:min-h-[670px]">
                {/* Decorative Glow */}

                <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#34ACB1]/20 blur-[90px]" />

                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#34ACB1]/10 blur-[100px]" />

                {/* Decorative Grid */}

                <div
                  className="absolute inset-0 z-10 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Image */}

                <Image
                  src="/about/designer.jpg"
                  alt="Monfort Kitchen Sink"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-70 transition duration-1000 hover:scale-105"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050909] via-[#050909]/45 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1112]/70 via-transparent to-transparent" />

                {/* =====================================================
            SINCE 2000 BADGE
            ====================================================== */}

                <div className="absolute left-5 top-5 z-20 sm:left-7 sm:top-7">
                  <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-xl">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34ACB1] opacity-60" />

                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34ACB1]" />
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-[3px] text-white">
                      Since 2000
                    </span>
                  </div>
                </div>

                {/* =====================================================
            CENTER CONTENT
            ====================================================== */}

                <div className="absolute inset-x-0 bottom-28 z-20 px-6 sm:bottom-32 sm:px-10 lg:bottom-36">
                  <div className="max-w-xl">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[4px] text-[#34ACB1] sm:text-xs">
                      Monfort Kitchen Sink
                    </p>

                    <h3 className="font-serif text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                      Quality.
                      <br />
                      <span className="italic text-[#34ACB1]">
                        Functionality.
                      </span>
                      <br />
                      Timeless Design.
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                      Designed to bring convenience, hygiene, and elegance to
                      modern kitchens.
                    </p>
                  </div>
                </div>

                {/* =====================================================
            ESTABLISHED YEAR
            ====================================================== */}

                <div className="absolute bottom-5 right-5 z-20 sm:bottom-7 sm:right-7">
                  <div className="text-right">
                    <p className="font-serif text-4xl font-bold text-white sm:text-5xl">
                      2000
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[3px] text-gray-400">
                      Established
                    </p>
                  </div>
                </div>
              </div>

              {/* =====================================================
          FLOATING PRODUCT CARDS
          ====================================================== */}

              <div className="relative z-30 mt-[-70px] px-4 sm:absolute sm:-bottom-12 sm:left-1/2 sm:mt-0 sm:w-[94%] sm:-translate-x-1/2 sm:px-0">
                <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-center sm:gap-4">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl border border-white/70 bg-white p-2 shadow-[0_20px_45px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-3 hover:border-[#34ACB1] hover:shadow-[0_25px_55px_rgba(52,172,177,0.22)] sm:w-36 sm:rounded-3xl sm:p-3"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#E8F7F7] sm:rounded-2xl">
                        <Image
                          src={product.img}
                          alt={product.title}
                          width={160}
                          height={160}
                          className="h-full w-full object-contain p-2 transition duration-700 group-hover:scale-110 sm:p-3"
                        />

                        <div className="absolute inset-0 bg-[#34ACB1]/0 transition duration-500 group-hover:bg-[#34ACB1]/5" />
                      </div>

                      <p className="mt-2 text-center text-[9px] font-bold uppercase tracking-wide text-gray-800 sm:mt-3 sm:text-[10px]">
                        {product.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* =====================================================
          FLOATING AWARD CARD
          ====================================================== */}

              <div className="absolute -right-5 top-24 z-40 hidden lg:block">
                <div className="rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1112] text-[#34ACB1]">
                      <FaAward size={20} />
                    </div>

                    <div>
                      <p className="text-xl font-bold text-gray-900">25+</p>

                      <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-500">
                        Years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
      RIGHT SIDE — ABOUT CONTENT
      ====================================================== */}

          <div className="flex h-full items-center pt-2 lg:pt-0">
            <div className="w-full">
              {/* Section Label */}

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#34ACB1]" />

                <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#34ACB1] sm:text-xs">
                  Our Story
                </span>
              </div>

              {/* Main Heading */}

              <h3 className="font-serif text-3xl font-bold leading-[1.08] tracking-tight text-[#0B1112] sm:text-4xl md:text-5xl lg:text-[52px]">
                Monfort Kitchen Sink
                <br />
                <span className="italic font-medium text-[#34ACB1]">
                  Since 2000
                </span>
              </h3>

              {/* =====================================================
          UNIQUE BRAND TAGLINE
          ====================================================== */}

              <div className="relative mt-7 overflow-hidden rounded-2xl border-l-4 border-[#34ACB1] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(11,17,18,0.06)] sm:px-6 sm:py-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#34ACB1]/10 blur-2xl" />

                <div className="relative">
                  <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-400">
                    Monfort Kitchen Sink
                  </p>

                  <p className="mt-1 font-serif text-xl font-semibold leading-tight text-[#0B1112] sm:text-2xl">
                    Since 2000
                    <span className="mx-2 text-[#34ACB1]">—</span>
                    <span className="italic text-[#34ACB1]">
                      Built on Trust, Made for Life.
                    </span>
                  </p>
                </div>
              </div>

              {/* Intro Text */}

              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-gray-700 sm:text-xl">
                <strong className="text-[#34ACB1]">Monfort Kitchen Sink</strong>{" "}
                has been dedicated to bringing quality, functionality, and
                timeless design to modern kitchens since 2000.
              </p>

              {/* Description */}

              <div className="mt-6 max-w-2xl space-y-5 text-[15px] leading-8 text-gray-600 sm:text-base">
                <p>
                  With years of experience in the kitchen sink industry, Monfort
                  focuses on creating sinks that combine practical everyday
                  performance with elegant design. Our aim is to make every
                  kitchen more convenient, hygienic, and visually appealing.
                </p>

                <p>
                  From contemporary kitchens to traditional spaces, Monfort
                  Kitchen Sinks are designed to complement a wide range of
                  kitchen styles while meeting the demands of everyday use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
    SECOND ROW — WHY MONFORT FULL WIDTH
    ====================================================== */}

        <div className="mt-24 lg:mt-32">
          {/* Section Heading */}

          <div className="mb-9 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#34ACB1]/20 bg-[#E8F7F7]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#34ACB1] shadow-[0_0_0_6px_rgba(52,172,177,0.08)]" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#34ACB1]">
                The Monfort Difference
              </p>

              <h3 className="mt-1 font-serif text-2xl font-bold text-[#0B1112] sm:text-3xl">
                Why Monfort?
              </h3>
            </div>
          </div>

          {/* Features */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] border border-gray-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(11,17,18,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#34ACB1]/40 hover:shadow-[0_22px_50px_rgba(52,172,177,0.12)]"
              >
                {/* Hover Accent */}

                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#34ACB1] transition-transform duration-500 group-hover:scale-y-100" />

                {/* Number */}

                <span className="absolute right-5 top-5 font-serif text-3xl font-bold text-gray-100 transition-colors duration-500 group-hover:text-[#E8F7F7]">
                  0{index + 1}
                </span>

                {/* Icon */}

                <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1112] text-[#34ACB1] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#34ACB1] group-hover:text-white">
                  {feature.icon}
                </div>

                {/* Content */}

                <h4 className="relative font-bold text-gray-900">
                  {feature.title}
                </h4>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  {feature.text}
                </p>

                {/* Bottom Line */}

                <div className="mt-5 h-px w-8 bg-[#34ACB1]/30 transition-all duration-500 group-hover:w-14 group-hover:bg-[#34ACB1]" />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
    THIRD ROW — VISION LEFT + CTA RIGHT
    ====================================================== */}

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          {/* =====================================================
      OUR VISION — LEFT
      ====================================================== */}

          <div className="group relative overflow-hidden rounded-[30px] border border-[#34ACB1]/20 bg-gradient-to-br from-[#E8F7F7] via-white to-[#F4FAFA] p-6 shadow-[0_20px_60px_rgba(11,17,18,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(52,172,177,0.12)] sm:p-8">
            {/* Decorative Circle */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-[#34ACB1]/10 transition-transform duration-700 group-hover:rotate-45" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#34ACB1]/5 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1112] text-[#34ACB1] shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:bg-[#34ACB1] group-hover:text-white">
                  <FaCogs size={19} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500">
                    Looking Ahead
                  </p>

                  <h3 className="mt-1 font-serif text-2xl font-bold text-[#0B1112] sm:text-3xl">
                    Our <span className="italic text-[#34ACB1]">Vision</span>
                  </h3>
                </div>
              </div>

              <p className="max-w-4xl text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
                At Monfort, we believe a kitchen sink is more than just a
                utility product—it is an essential part of the kitchen
                experience. We continue to focus on quality, design, and
                innovation to provide kitchen sinks that homeowners and
                professionals can rely on.
              </p>

              {/* Vision Highlights */}

              <div className="mt-7 flex flex-wrap gap-3">
                {["Quality", "Innovation", "Design"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-[#34ACB1]/15 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-sm transition-all duration-300 hover:border-[#34ACB1]/40 hover:bg-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#34ACB1]" />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
      GET IN TOUCH — RIGHT
      ====================================================== */}

          <div className="group relative overflow-hidden rounded-[30px] bg-[#0B1112] p-6 shadow-[0_20px_60px_rgba(11,17,18,0.16)] transition-all duration-500 hover:-translate-y-1 sm:p-8">
            {/* Background Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#34ACB1]/20 blur-[80px] transition-all duration-700 group-hover:bg-[#34ACB1]/30" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-60 w-60 rounded-full bg-[#34ACB1]/10 blur-[70px]" />

            {/* Decorative Circles */}

            <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute right-10 top-10 h-12 w-12 rounded-full border border-[#34ACB1]/20" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                {/* Label */}

                <div className="mb-5 flex items-center gap-2">
                  <span className="h-[2px] w-7 bg-[#34ACB1]" />

                  <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#34ACB1]">
                    Let's Connect
                  </span>
                </div>

                {/* Heading */}

                <h3 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Have a
                  <br />
                  <span className="italic font-medium text-[#34ACB1]">
                    question?
                  </span>
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
                  Need help choosing the right kitchen sink? Our team is here to
                  help.
                </p>
              </div>

              {/* CTA */}

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="group/btn inline-flex w-full items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#0B1112] shadow-xl transition-all duration-500 hover:bg-[#34ACB1] hover:text-white"
                >
                  <span>Get In Touch</span>

                  <span className="ml-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1112] text-white transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-[#0B1112]">
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
    BOTTOM DIVIDER
    ====================================================== */}

        <div className="mx-auto mt-24 flex max-w-7xl items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-center text-[9px] font-semibold uppercase tracking-[3px] text-[#34ACB1] sm:text-[10px] sm:tracking-[4px]">
            Monfort Kitchen Sink — Since 2000
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
