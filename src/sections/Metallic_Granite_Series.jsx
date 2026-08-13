"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// ================= DATA =================

const metallicGraniteProducts = [
  {
    size: "45x20 inch",
    items: [
      {
        number: 1,
        title: "45x20 Double Bowl Sink",
        description:
          "Premium Metallic & Granite Series sink with modern aesthetics.",
        image: "/metallicGraniteProducts/45_20/double_bowl.png",
        href: "/products/metallic-granite",
      },
      {
        number: 2,
        title: "Gray Finish",
        description: "Elegant gray finish for contemporary kitchens.",
        image: "/metallicGraniteProducts/45_20/gray_finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 3,
        title: "Black Finish",
        description: "Bold black granite look with durability.",
        image: "/metallicGraniteProducts/45_20/black_finsh.png",
        href: "/products/metallic-granite",
      },
      {
        number: 4,
        title: "Red Moon Finish",
        description: "Unique red moon shade for standout kitchens.",
        image: "/metallicGraniteProducts/45_20/red_finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 5,
        title: "Peach Ivory Finish",
        description: "Soft peach ivory tone for warm interiors.",
        image: "/metallicGraniteProducts/45_20/Peach_Ivory_Finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 6,
        title: "Cera Dotted Finish",
        description: "Modern dotted texture for stylish appeal.",
        image: "/metallicGraniteProducts/45_20/Cera Dotted Finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 7,
        title: "Ivory Sand Finish",
        description: "Soft ivory sand tone for warm interiors.",
        image: "/metallicGraniteProducts/45_20/Ivory Sand Finish.png",
        href: "/products/metallic-granite",
      },
    ],
  },

  {
    size: "37x18 inch",
    items: [
      {
        number: 1,
        title: "37x18 Double Bowl Sink",
        description: "Same design but in 37x18 size.",
        image: "/metallicGraniteProducts/37_18/double bowl.png",
        href: "/products/metallic-granite",
      },
      {
        number: 2,
        title: "Gray Finish",
        description: "Elegant gray finish for contemporary kitchens.",
        image: "/metallicGraniteProducts/37_18/gray Finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 3,
        title: "Black Finish",
        description: "Bold black granite look with durability.",
        image: "/metallicGraniteProducts/37_18/black.png",
        href: "/products/metallic-granite",
      },
      {
        number: 4,
        title: "Cera Dotted Finish",
        description: "Modern dotted texture for stylish appeal.",
        image: "/metallicGraniteProducts/37_18/Cera Dotted Finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 5,
        title: "Ivory Sand Finish",
        description: "Soft ivory sand tone for warm interiors.",
        image: "/metallicGraniteProducts/37_18/Ivory Sand.png",
        href: "/products/metallic-granite",
      },
      {
        number: 6,
        title: "Red Moon Finish",
        description: "Unique red moon shade for standout kitchens.",
        image: "/metallicGraniteProducts/37_18/Red Moon.png",
        href: "/products/metallic-granite",
      },
      {
        number: 7,
        title: "Peach Ivory Finish",
        description: "Soft peach ivory tone for warm interiors.",
        image: "/metallicGraniteProducts/37_18/Peach Ivory Finish.png",
        href: "/products/metallic-granite",
      },
    ],
  },

  {
    size: "24x18 inch",
    items: [
      {
        number: 1,
        title: "24x18 Single Bowl Sink",
        description: "Compact single bowl design for smaller kitchens.",
        image: "/metallicGraniteProducts/24_18/single.png",
        href: "/products/metallic-granite",
      },
      {
        number: 2,
        title: "Brown Finish",
        description: "Rich brown shade for earthy interiors.",
        image: "/metallicGraniteProducts/24_18/Brown_Finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 3,
        title: "Gray Finish",
        description: "Elegant gray finish for contemporary kitchens.",
        image: "/metallicGraniteProducts/24_18/gray.png",
        href: "/products/metallic-granite",
      },
      {
        number: 4,
        title: "Black Finish",
        description: "Bold black granite look with durability.",
        image: "/metallicGraniteProducts/24_18/black.png",
        href: "/products/metallic-granite",
      },
      {
        number: 5,
        title: "Grey Stone Finish",
        description: "Natural grey stone texture for rustic appeal.",
        image: "/metallicGraniteProducts/24_18/gray_stone.png",
        href: "/products/metallic-granite",
      },
      {
        number: 6,
        title: "Ivory Sand Finish",
        description: "Soft ivory sand tone for warm interiors.",
        image: "/metallicGraniteProducts/24_18/Ivory Sand.png",
        href: "/products/metallic-granite",
      },
      {
        number: 7,
        title: "Cera Dotted Finish",
        description: "Modern dotted texture for stylish appeal.",
        image: "/metallicGraniteProducts/24_18/Cera Dotted Finish.png",
        href: "/products/metallic-granite",
      },
      {
        number: 8,
        title: "Red Moon Finish",
        description: "Unique red moon shade for standout kitchens.",
        image: "/metallicGraniteProducts/24_18/Red Moon Finish.png",
        href: "/products/metallic-granite",
      },
    ],
  },
];

// ================= CATEGORY SWIPER =================

function CategorySwiper({ category }) {
  const [client, setClient] = useState(false);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  if (!client) {
    return null;
  }
  // Initialize navigation after refs are available
  useEffect(() => {
    setClient(true);
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    if (
      swiper.params &&
      swiper.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative mt-16">
      {/* ================= SIZE HEADING ================= */}

      <div className="mb-7 flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-[#258F94]/30" />

        <h3 className="text-center text-xl font-bold text-[#258F94] sm:text-2xl">
          {category.size} Series
        </h3>

        <span className="h-px w-12 bg-[#258F94]/30" />
      </div>

      {/* ================= SWIPER AREA ================= */}

      <div className="relative px-0 sm:px-14">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          slidesPerView={1}
          speed={700}
          loop={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {category.items.map((product) => (
            <SwiperSlide key={product.number}>
              {/* ================= PRODUCT CARD ================= */}

              <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#258F94]/20 hover:shadow-2xl hover:shadow-[#258F94]/10">
                {/* Product Number */}

                <div className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-[#258F94] shadow-md backdrop-blur-sm">
                  {String(product.number).padStart(2, "0")}
                </div>

                {/* ================= IMAGE ================= */}

                {/* ================= IMAGE ================= */}
                <div
                  className="
    relative w-full overflow-hidden
    h-[240px]
    sm:h-[260px]
    md:h-[280px]
    lg:h-[300px]
    xl:h-[300px]
    bg-[#258F94]/5
  "
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="
      (max-width: 639px) 100vw,
      (max-width: 767px) 90vw,
      (max-width: 1023px) 50vw,
      (max-width: 1279px) 33vw,
      30vw
    "
                    className="
      object-contain
      p-4
      sm:p-6
      md:p-8
      lg:p-10
      xl:p-12
      transition-transform
      duration-700
      group-hover:scale-110
    "
                  />

                  <div
                    className="
      pointer-events-none absolute inset-0
      bg-gradient-to-t
      from-[#258F94]/20
      via-transparent
      to-transparent
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-6 sm:p-7">
                  <div className="mb-3 h-[2px] w-10 bg-[#258F94] transition-all duration-300 group-hover:w-16" />

                  <h4 className="text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[#258F94] sm:text-2xl">
                    {product.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <Link
                    href={product.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#258F94] px-5 py-2.5 text-sm font-semibold text-[#258F94] transition-all duration-300 hover:bg-[#258F94] hover:text-white"
                  >
                    View All Category
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= PREVIOUS BUTTON ================= */}

        <button
          ref={prevRef}
          type="button"
          aria-label="Previous products"
          onClick={() => swiperRef.current?.slidePrev()}
          className="group absolute left-0 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#258F94]/25 bg-white text-[#258F94] shadow-md transition-all duration-300 hover:-translate-x-1 hover:bg-[#258F94] hover:text-white hover:shadow-lg sm:flex"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>

        {/* ================= NEXT BUTTON ================= */}

        <button
          ref={nextRef}
          type="button"
          aria-label="Next products"
          onClick={() => swiperRef.current?.slideNext()}
          className="group absolute right-0 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#258F94]/25 bg-white text-[#258F94] shadow-md transition-all duration-300 hover:translate-x-1 hover:bg-[#258F94] hover:text-white hover:shadow-lg sm:flex"
        >
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

// ================= MAIN COMPONENT =================

export default function MetallicGraniteSeries() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-10 lg:py-15">
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= MAIN HEADING ================= */}

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#258F94]" />

            <span className="text-xs font-bold tracking-[0.18em] text-[#258F94] sm:text-sm">
              METALLIC & GRANITE SERIES
            </span>

            <span className="h-[2px] w-10 bg-[#258F94]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Our{" "}
            <span className="text-[#258F94]">Metallic & Granite</span> Sinks
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Stylish double bowl sinks available in multiple finishes for modern
            kitchens.
          </p>
        </div>

        {/* ================= CATEGORY SWIPERS ================= */}

        {metallicGraniteProducts.map((category) => (
          <CategorySwiper key={category.size} category={category} />
        ))}
      </div>
    </section>
  );
}
