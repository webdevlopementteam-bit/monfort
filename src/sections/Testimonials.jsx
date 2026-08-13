"use client";

import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

// ================= TESTIMONIAL DATA =================

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner",
    location: "Delhi",
    review:
      "Excellent quality and beautiful finishing. The sink looks premium in our kitchen and the build quality is really impressive.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Amit Verma",
    role: "Interior Designer",
    location: "Gurugram",
    review:
      "We have been using Monfort Kitchen sinks for multiple projects. The designs are modern, durable and the finishing is excellent.",
    rating: 5,
    initials: "AV",
  },
  {
    name: "Neha Kapoor",
    role: "Homeowner",
    location: "Noida",
    review:
      "The quality exceeded my expectations. The sink looks elegant, feels strong and was delivered with proper packaging.",
    rating: 5,
    initials: "NK",
  },
  {
    name: "Vikas Mehta",
    role: "Architect",
    location: "Delhi",
    review:
      "Monfort Kitchen offers excellent designs with reliable quality. Their sinks fit beautifully into modern kitchen interiors.",
    rating: 5,
    initials: "VM",
  },
  {
    name: "Priya Gupta",
    role: "Homeowner",
    location: "Ghaziabad",
    review:
      "Beautiful design, premium finish and very sturdy construction. The overall experience with Monfort Kitchen was excellent.",
    rating: 5,
    initials: "PG",
  },
  {
    name: "Sandeep Kumar",
    role: "Contractor",
    location: "Faridabad",
    review:
      "The product quality is consistent and the finishing is impressive. A great option for premium residential kitchen projects.",
    rating: 5,
    initials: "SK",
  },
];

export default function Testimonials() {
  const [client, setClient] = useState(false);
  if (!client) {
    return null;
  }
  useEffect(() => {
    setClient(true);
  });

  return (
    <section
      className="relative overflow-hidden bg-white py-10 lg:py-15"
      id="testimonial"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#34acb1]/10 blur-3xl sm:-left-40 sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-[#34acb1]/10 blur-3xl sm:-right-40 sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34acb1]/5 blur-3xl sm:h-80 sm:w-80" />

      {/* Decorative dots */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden h-2 w-2 rounded-full bg-[#34acb1]/30 sm:block" />
      <div className="pointer-events-none absolute right-[10%] top-[30%] hidden h-3 w-3 rounded-full bg-[#34acb1]/20 sm:block" />
      <div className="pointer-events-none absolute bottom-[25%] left-[12%] hidden h-2 w-2 rounded-full bg-[#34acb1]/20 md:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Section Label */}

          <div className="mb-4 flex items-center justify-center gap-2.5 sm:mb-5 sm:gap-3">
            <span className="h-[2px] w-7 bg-[#34acb1] sm:w-10" />

            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#258F94] sm:text-sm sm:tracking-[4px]">
              Testimonials
            </span>

            <span className="h-[2px] w-7 bg-[#34acb1] sm:w-10" />
          </div>

          {/* Heading */}

          <h2 className="font-serif text-3xl font-bold leading-[1.15] text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            What Our Customers
            <br />
            <span className="italic font-medium text-[#34acb1]">
              Say About Us.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-gray-600 sm:mt-6 sm:px-0 sm:text-base sm:leading-7 md:text-lg">
            Trusted by homeowners, interior designers and businesses for premium
            kitchen sinks, modern designs and dependable quality.
          </p>
        </div>

        {/* =====================================================
            SWIPER
        ====================================================== */}

        <div className="relative mt-10 sm:mt-14 md:mt-16">
          {/* Left Navigation */}

          <button
            className="
              testimonial-prev
              absolute
              -left-3
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-[#0B1112]
              shadow-lg
              transition-all
              duration-300
              hover:border-[#34acb1]
              hover:bg-[#34acb1]
              hover:text-white
              hover:shadow-xl
              lg:flex
              xl:-left-6
            "
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={21} />
          </button>

          {/* Right Navigation */}

          <button
            className="
              testimonial-next
              absolute
              -right-3
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-[#0B1112]
              shadow-lg
              transition-all
              duration-300
              hover:border-[#34acb1]
              hover:bg-[#34acb1]
              hover:text-white
              hover:shadow-xl
              lg:flex
              xl:-right-6
            "
            aria-label="Next testimonial"
          >
            <ChevronRight size={21} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            speed={700}
            grabCursor={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 22,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 26,
              },
            }}
            className="!pb-12 sm:!pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                {/* =================================================
                    TESTIMONIAL CARD
                ================================================== */}

                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[360px]
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-gray-100
                    bg-white
                    p-5
                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#34acb1]/30
                    hover:shadow-[0_20px_45px_rgba(52,172,177,0.12)]
                    sm:min-h-[375px]
                    sm:rounded-[28px]
                    sm:p-7
                    md:min-h-[390px]
                    md:p-8
                  "
                >
                  {/* Top Teal Line */}

                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#258F94] via-[#34acb1] to-[#258F94]" />

                  {/* Decorative Quote */}

                  <div className="pointer-events-none absolute -right-4 -top-4 opacity-[0.05] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.09]">
                    <Quote
                      size={110}
                      className="text-[#34acb1] sm:h-[120px] sm:w-[120px]"
                      strokeWidth={1}
                    />
                  </div>

                  {/* =================================================
                      CUSTOMER INFO
                  ================================================== */}

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      {/* Avatar */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#0B1112]
                          text-xs
                          font-bold
                          text-[#34acb1]
                          ring-4
                          ring-[#E8F7F7]
                          transition-all
                          duration-300
                          group-hover:bg-[#34acb1]
                          group-hover:text-white
                          sm:h-14
                          sm:w-14
                          sm:text-sm
                        "
                      >
                        {testimonial.initials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base">
                            {testimonial.name}
                          </h3>

                          <BadgeCheck
                            size={15}
                            className="shrink-0 text-[#34acb1]"
                            fill="#34acb1"
                            stroke="white"
                          />
                        </div>

                        <p className="mt-0.5 truncate text-[11px] text-gray-500 sm:mt-1 sm:text-xs">
                          {testimonial.role}
                        </p>

                        <p className="text-[10px] text-[#258F94] sm:text-[11px]">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      RATING
                  ================================================== */}

                  <div className="relative z-10 mt-5 flex items-center gap-1 sm:mt-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-[#34acb1] text-[#34acb1] sm:h-4 sm:w-4"
                      />
                    ))}

                    <span className="ml-1.5 text-[11px] font-semibold text-gray-400 sm:ml-2 sm:text-xs">
                      5.0
                    </span>
                  </div>

                  {/* Divider */}

                  <div className="my-5 h-px bg-gray-100 sm:my-6" />

                  {/* =================================================
                      REVIEW
                  ================================================== */}

                  <div className="relative z-10 flex flex-1 flex-col">
                    <Quote
                      size={22}
                      className="mb-2.5 text-[#34acb1] sm:mb-3 sm:h-[25px] sm:w-[25px]"
                      fill="#34acb1"
                    />

                    <p className="text-[13px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
                      “{testimonial.review}”
                    </p>
                  </div>

                  {/* =================================================
                      VERIFIED CUSTOMER
                  ================================================== */}

                  <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-gray-100 pt-4 sm:mt-7 sm:pt-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F7F7]">
                      <BadgeCheck size={15} className="text-[#258F94]" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[1.3px] text-gray-800 sm:text-[10px] sm:tracking-[1.5px]">
                        Verified Customer
                      </p>

                      <p className="text-[9px] text-gray-400 sm:text-[10px]">
                        Monfort Kitchen
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow */}

                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#34acb1]/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* =====================================================
              PAGINATION
          ====================================================== */}

          <div className="testimonial-pagination !bottom-0 flex items-center justify-center gap-1.5" />
        </div>
      </div>
    </section>
  );
}
