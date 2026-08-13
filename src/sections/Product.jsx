"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    number: "01",
    title: "INDIAN SINK",
    description:
      "Strong and durable stainless steel Indian sinks designed for everyday kitchen use with a practical design, smooth finish and easy maintenance.",
    image: "/products/indian_sink.png",
    href: "/products?category=indian_sink",
  },
  {
    number: "02",
    title: "HANDMADE SINK",
    description:
      "Premium handmade stainless steel sinks crafted with precision, elegant designs and superior finishing for modern and stylish kitchens.",
    image: "/products/handmade_sink.png",
    href: "/products?category=handmade",
  },
  {
    number: "03",
    title: "PTMT TAPS",
    description:
      "Durable and lightweight PTMT taps designed for smooth water flow, reliable performance and long-lasting use in modern kitchens.",
    image: "/products/pmtp.png",
    href: "/products?category=ptmt_taps",
  },
  {
    number: "04",
    title: "WATERFALL SINKS",
    description:
      "Modern waterfall sinks featuring an integrated waterfall-style water outlet, premium finishing and a unique design that adds elegance to contemporary kitchens.",
    image: "/products/waterfall_sink.png",
    href: "/products?category=waterfall",
  },
  {
    number: "05",
    title: "GRADE HANDMADE SINKS",
    description:
      "High-grade handmade sinks manufactured with premium stainless steel, precise craftsmanship and superior finishing for exceptional durability and style.",
    image: "/products/Grade_Handmade_Sinks.png",
    href: "/products?category=grade304",
  },
  {
    number: "06",
    title: "SINGLE BOWL",
    description:
      "Practical single bowl sinks offering spacious washing areas, easy cleaning and durable construction for compact and everyday kitchen requirements.",
    image: "/products/SINGLE BOWL.png",
    href: "/products/?category=single-bowl",
  },
  {
    number: "07",
    title: "DOUBLE BOWL",
    description:
      "Spacious double bowl sinks designed for convenient multitasking, allowing washing and rinsing to be handled efficiently in busy kitchens.",
    image: "/products/double bowl.png",
    href: "/products/?category=double-bowl",
  },
];

export default function Products() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section
      className="relative overflow-hidden bg-gray-50 py-10 lg:py-15 scroll-mt-24"
      id="products"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Our <span className="text-[#258F94]">Products</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Discover our range of premium kitchen products designed with
            quality, durability and modern aesthetics in mind.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <div
              key={product.number}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#258F94]/20 hover:shadow-2xl hover:shadow-[#258F94]/10"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#258F94]/5">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#258F94]">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#258F94] px-5 py-2.5 text-sm font-semibold text-[#258F94] transition-all duration-300 hover:bg-[#258F94] hover:text-white"
                >
                  View All Category
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showAll ? (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 rounded-full bg-[#258F94] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#258F94]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#207c80] hover:shadow-xl hover:shadow-[#258F94]/30"
            >
              View Less
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#258F94] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#258F94]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#207c80] hover:shadow-xl hover:shadow-[#258F94]/30"
            >
              View more
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
