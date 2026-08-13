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
      icon: <FaShieldAlt />,
      title: "Premium Quality",
      text: "High-grade stainless steel",
    },
    {
      icon: <FaCogs />,
      title: "Modern Manufacturing",
      text: "Advanced machinery & process",
    },
    {
      icon: <FaAward />,
      title: "Expert Craftsmanship",
      text: "Precision in every sink",
    },
    {
      icon: <FaCheck />,
      title: "Customer Focused",
      text: "Quality & satisfaction",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-white py-10 lg:py-15 scroll-mt-24"
      id="about"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative min-h-[540px] overflow-hidden rounded-[35px] bg-[#0B1112] shadow-2xl sm:min-h-[600px]">
              {/* Teal Glow */}
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#34acb1]/20 blur-3xl" />

              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#34acb1]/10 blur-3xl" />

              {/* Bottom Gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Since 2017 */}
              <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8">
                <div className="flex items-center gap-3 rounded-full border border-[#34acb1]/40 bg-[#34acb1]/10 px-5 py-3 backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34acb1] shadow-[0_0_15px_#34acb1]" />

                  <span className="text-xs font-semibold uppercase tracking-[3px] text-white ">
                    Since 2017
                  </span>
                </div>
              </div>

              {/* Image Text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center sm:px-10">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#34acb1]">
                    Premium Kitchen Solutions
                  </p>

                  <h3 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                    Built for
                    <br />
                    <span className="italic text-[#34acb1]">
                      Modern Kitchens.
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* =====================================================
                PRODUCT CARDS
            ====================================================== */}
            <div className="absolute -bottom-12 left-1/2 z-30 flex w-[92%] -translate-x-1/2 justify-center gap-2 sm:w-auto sm:gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group w-[31%] rounded-2xl border border-gray-200 bg-white p-2 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#34acb1] hover:shadow-2xl sm:w-36 sm:rounded-3xl sm:p-3"
                >
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#E8F7F7] sm:rounded-2xl">
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-110 sm:p-3"
                    />
                  </div>

                  <p className="mt-2 text-center text-[9px] font-bold uppercase tracking-wide text-gray-800 sm:mt-3 sm:text-[10px]">
                    {product.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience Card */}
            <div className="absolute -right-5 top-24 z-30 hidden rounded-2xl border border-[#34acb1]/20 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1112] text-[#34acb1]">
                  <FaAward size={21} />
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">2017</p>

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Established
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="pt-8 lg:pt-0">
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#34acb1]" />

              <span className="text-sm font-bold uppercase tracking-[4px] text-[#258F94]">
                About Company
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              Crafting Quality
              <br />
              <span className="italic font-medium text-[#34acb1]">
                For Every Kitchen.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-7 text-lg font-medium leading-8 text-gray-700">
              <strong className="text-gray-950">Monfort Kitchen</strong> is one
              of the leading kitchen sink manufacturers in Delhi, providing
              premium stainless steel sinks for homes, hotels, restaurants and
              commercial kitchens.
            </p>

            {/* Description */}
            <div className="mt-6 space-y-5 text-[16px] leading-8 text-gray-600">
              <p>
                We manufacture{" "}
                <strong className="font-semibold text-gray-900">
                  single bowl, double bowl, handmade and designer kitchen sinks
                </strong>{" "}
                using high-quality stainless steel with excellent finishing,
                durability and modern aesthetics.
              </p>

              <p>
                Since our establishment in{" "}
                <strong className="font-semibold text-gray-900">2017</strong>,
                our focus has been delivering superior craftsmanship,
                competitive pricing and customer satisfaction through innovative
                sink designs.
              </p>

              <p>
                Our manufacturing facility is equipped with modern machinery and
                strict quality control processes to ensure every kitchen sink
                meets the highest standards.
              </p>
            </div>

            {/* =====================================================
                FEATURES
            ====================================================== */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/40 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B1112] text-[#34acb1] transition duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* =====================================================
                CTA
            ====================================================== */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0B1112] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#34acb1] hover:shadow-[#34acb1]/30"
              >
                Get In Touch
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#34acb1]">
                  <span className="text-sm font-bold text-[#258F94]">8+</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Years of Excellence
                  </p>

                  <p className="text-xs text-gray-500">
                    Building better kitchens
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mx-auto mt-24 flex max-w-7xl items-center gap-4 px-5 sm:px-8 lg:px-10">
        <div className="h-px flex-1 bg-gray-200" />

        <span className="text-[10px] font-semibold uppercase tracking-[4px] text-[#34acb1]">
          Monfort Kitchen
        </span>

        <div className="h-px flex-1 bg-gray-200" />
      </div>
    </section>
  );
}
