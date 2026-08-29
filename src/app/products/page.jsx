"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { sinksCatalog } from "@/data.js";
import CategoryPage from "@/sections/Category";
import Products from "@/sections/Product";

const categories = {
  handmade: {
    title: "HANDMADE SINK",
    description:
      "Premium handmade stainless steel sinks crafted with precision, elegant designs and superior finishing for modern kitchens.",
    image: "/products/handmade_sink.png",
    data: sinksCatalog.handmadeSinks,
  },
  indian_sink: {
    title: "INDIAN SINK",
    description:
      "Strong and durable stainless steel Indian sinks designed for everyday kitchen use with a practical design, smooth finish and easy maintenance.",
    image: "/products/indian_sink.png",
    data: sinksCatalog.indianSinks,
  },
  ptmt_taps: {
    title: "PTMT TAPS",
    description:
      "Durable and lightweight PTMT taps designed for smooth water flow, reliable performance and long-lasting use in modern kitchens.",
    image: "/products/pmtp.png",
    data: sinksCatalog.ptmtTaps,
  },

  waterfall: {
    title: "WATERFALL SINKS",
    description:
      "Modern waterfall sinks featuring an integrated waterfall-style water outlet, premium finishing and a unique design.",
    image: "/products/waterfall_sink.png",
    data: sinksCatalog.waterfallSinks,
  },

  grade304: {
    title: "GRADE HANDMADE SINKS",
    description:
      "High-grade handmade sinks manufactured with premium stainless steel, precise craftsmanship and superior finishing.",
    image: "/products/Grade_Handmade_Sinks.png",
    data: sinksCatalog.grade304Sinks,
  },
};

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const selected = categories[category];

  // No category = show your normal Products listing
  if (!selected) {
    return (
      <>
        <Products />
      </>
    );
  }

  return (
    <CategoryPage
      title={selected.title}
      description={selected.description}
      image={selected.image}
      data={selected.data}
    />
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}
