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
      text: "Discover our premium range of Handmade, Indian and 304 Grade stainless steel sinks, crafted in multiple sizes and single or double bowl designs for modern kitchens.",
      button: "Explore Sinks",
      link: "/products",
    },
    {
      img: "/hero/hero2.jpg",
      eyebrow: "TRUSTED MANUFACTURING",
      title: "Quality You Can Depend On",
      text: "Explore a reliable range of Handmade, Indian and 304 Grade sinks, available in practical sizes, finishes and configurations to meet different kitchen requirements.",
      button: "Contact Us",
      link: "#contact",
    },
    {
      img: "/hero/hero3.jpg",
      eyebrow: "SINCE 2000",
      title: "Built on Quality & Precision",
      text: "Our sink collection offers carefully designed options across multiple sizes, from compact single bowl models to spacious double bowl designs with practical features and finishes.",
      button: "About Monfort",
      link: "#about",
    },
    {
      img: "/hero/hero4.jpg",
      eyebrow: "DESIGNED FOR EVERY KITCHEN",
      title: "From Classic to Designer Sinks",
      text: "Choose from classic Indian and Handmade sinks, modern Waterfall models with integrated accessories, and stylish Metallic & Granite designs in a variety of finishes.",
      button: "View Products",
      link: "/products",
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
          delay: 5000,
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
              loading={index === 1 ? "eager" : undefined}
              sizes="100vw"
              className="object-cover"
            />

            {/* Dark + Brand Color Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#34acb1]/80 via-[#34acb1]/35 to-black/20" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                  {/* Eyebrow */}
                  <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:mb-5 sm:gap-3 sm:px-4 sm:py-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white sm:h-2 sm:w-2" />

                    <span className="text-[9px] font-semibold leading-tight tracking-[0.12em] text-white sm:text-sm sm:tracking-[0.2em]">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-lg sm:leading-7 md:text-xl md:leading-8">
                    {slide.text}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                    <Link
                      href={slide.link}
                      className="rounded-full bg-white px-5 py-3 text-xs font-bold text-[#34acb1] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 sm:px-7 sm:py-3.5 sm:text-sm"
                    >
                      {slide.button}
                    </Link>

                    <Link
                      href="/contact"
                      className="rounded-full border border-white/70 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#34acb1] sm:px-7 sm:py-3.5 sm:text-sm"
                    >
                      Get In Touch
                    </Link>
                  </div>

                  {/* Brand Highlights */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/30 pt-4 sm:mt-10 sm:gap-6 sm:pt-6">
                    <div>
                      <p className="text-xl font-bold sm:text-2xl">2000</p>
                      <p className="text-[9px] uppercase tracking-wider text-white/75 sm:text-xs">
                        Established
                      </p>
                    </div>

                    <div className="h-8 w-px bg-white/30 sm:h-10" />

                    <div>
                      <p className="text-xl font-bold sm:text-2xl">Premium</p>
                      <p className="text-[9px] uppercase tracking-wider text-white/75 sm:text-xs">
                        Stainless Steel
                      </p>
                    </div>

                    <div className="h-8 w-px bg-white/30 sm:h-10" />

                    <div>
                      <p className="text-xl font-bold sm:text-2xl">100%</p>
                      <p className="text-[9px] uppercase tracking-wider text-white/75 sm:text-xs">
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
