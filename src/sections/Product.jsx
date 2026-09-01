"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    number: "01",
    title: "Indian kitchen sink",
    description:
      "Strong and durable stainless steel Indian sinks designed for everyday kitchen use with a practical design, smooth finish and easy maintenance.",
    image: "/products/indian_sink.png",
    href: "/products?category=indian_sink",
  },
  {
    number: "02",
    title: "Handmade kitchen sink",
    description:
      "Premium handmade stainless steel sinks crafted with precision, elegant designs and superior finishing for modern and stylish kitchens.",
    image: "/products/handmade_sink.png",
    href: "/products?category=handmade",
  },
  {
    number: "03",
    title: "Ptmt taps",
    description:
      "Durable and lightweight PTMT taps designed for smooth water flow, reliable performance and long-lasting use in modern kitchens.",
    image: "/products/pmtp.png",
    href: "/products?category=ptmt_taps",
  },
  {
    number: "04",
    title: "Waterfall sinks",
    description:
      "Modern waterfall sinks featuring an integrated waterfall-style water outlet, premium finishing and a unique design that adds elegance to contemporary kitchens.",
    image: "/products/waterfall_sink.png",
    href: "/products?category=waterfall",
  },
  {
    number: "06",
    title: "Metallic & Granite Series",
    description:
      "Premium metallic and granite sinks available in 45×20, 24×18 and 37×18 inch sizes, featuring elegant finishes such as Ivory Sand, Gray, Cera Dotted, Red Moon, Peach Ivory and Black etc...",
    image: "/products/metallicAndgranite.png",
    href: "/products?category=metallic_granite",
  },
  {
    number: "05",
    title: "304 grade handmade sinks",
    description:
      "High-grade handmade sinks manufactured with premium stainless steel, precise craftsmanship and superior finishing for exceptional durability and style.",
    image: "/products/Grade_Handmade_Sinks.png",
    href: "/products?category=grade304",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative scroll-mt-24 overflow-hidden bg-gray-50 py-10 sm:py-12 lg:py-16"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Our <span className="text-[#258F94]">Products</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            Discover our range of premium kitchen products designed with
            quality, durability and modern aesthetics in mind.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {products.map((product) => (
            <div
              key={product.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#258F94]/20 hover:shadow-2xl hover:shadow-[#258F94]/10 sm:rounded-3xl"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#258F94]/5">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-110 sm:p-8"
                />

                {/* Product Number */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#258F94] shadow-sm backdrop-blur-sm sm:left-5 sm:top-5 sm:h-10 sm:w-10">
                  {product.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#258F94] sm:text-2xl">
                  {product.title}
                </h3>

                <p className="mt-3 h-[96px] overflow-hidden text-sm leading-6 text-gray-600 line-clamp-4">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#258F94] px-4 py-2.5 text-sm font-semibold text-[#258F94] transition-all duration-300 hover:bg-[#258F94] hover:text-white sm:mt-6 sm:px-5"
                >
                  View All Category
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
