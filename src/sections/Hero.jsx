"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

export default function HeroSwiper() {
  const slides = [
    {
      img: "/hero/hero1.jpg",
      eyebrow: "PREMIUM STAINLESS STEEL SINKS",
      title: "Crafting Quality for Modern Kitchens",
      text: "Premium stainless steel kitchen sinks designed with superior finishing, durability and modern aesthetics.",
      button: "Explore Sinks",
    },
    {
      img: "/hero/hero2.jpg",
      eyebrow: "TRUSTED MANUFACTURING",
      title: "Quality You Can Depend On",
      text: "Serving homes, hotels, restaurants and commercial kitchens with reliable products and customer-focused service.",
      button: "Contact Us",
    },
    {
      img: "/hero/hero3.jpg",
      eyebrow: "SINCE 2000",
      title: "Built on Quality & Precision",
      text: "Advanced machinery, skilled craftsmanship and strict quality control ensure excellence in every sink we manufacture.",
      button: "About Monfort",
    },
    {
      img: "/hero/hero4.jpg",
      eyebrow: "DESIGNED FOR EVERY KITCHEN",
      title: "From Classic to Designer Sinks",
      text: "Discover single bowl, double bowl, handmade and designer kitchen sinks crafted to match modern lifestyles.",
      button: "View Products",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#34acb1] text-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="h-[520px] sm:h-[580px] md:h-[650px] lg:h-[680px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />

            {/* Dark + Brand Color Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#34acb1]/80 via-[#34acb1]/35 to-black/20" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                  {/* Eyebrow */}
                  <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    <span className="text-xs font-semibold tracking-[0.2em] text-white sm:text-sm">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl md:leading-8">
                    {slide.text}
                  </p>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/products"
                      className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#34acb1] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
                    >
                      {slide.button}
                    </Link>

                    <Link
                      href="/contact"
                      className="rounded-full border border-white/70 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#34acb1]"
                    >
                      Get In Touch
                    </Link>
                  </div>

                  {/* Brand Highlights */}
                  <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/30 pt-6">
                    <div>
                      <p className="text-2xl font-bold">2000</p>
                      <p className="text-xs uppercase tracking-wider text-white/75">
                        Established
                      </p>
                    </div>

                    <div className="h-10 w-px bg-white/30" />

                    <div>
                      <p className="text-2xl font-bold">Premium</p>
                      <p className="text-xs uppercase tracking-wider text-white/75">
                        Stainless Steel
                      </p>
                    </div>

                    <div className="h-10 w-px bg-white/30" />

                    <div>
                      <p className="text-2xl font-bold">100%</p>
                      <p className="text-xs uppercase tracking-wider text-white/75">
                        Quality Focused
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Brand Line */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#34acb1]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
