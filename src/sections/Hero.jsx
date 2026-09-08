"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const banners = [
  {
    desktop: "/hero/desktopbanner1.webp",
    mobile: "/hero/mobilebanner1.webp",
    href: "/products",
  },
  {
    desktop: "/hero/desktopbanner2.webp",
    mobile: "/hero/mobilebanner2.webp",
    href: "/products",
  },
];

export default function HeroSwiper() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link
              href={banner.href}
              className="block w-full"
              aria-label={`View products - banner ${index + 1}`}
            >
              {/* ================= DESKTOP ================= */}
              <div className="hidden w-full md:block">
                <div className="relative aspect-[1920/750] w-full">
                  <Image
                    src={banner.desktop}
                    alt={`Monfort Sanitaryware - Banner ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* ================= MOBILE ================= */}
              <div className="block w-full md:hidden">
                <div className="relative aspect-[1080/1350] w-full">
                  <Image
                    src={banner.mobile}
                    alt={`Monfort Sanitaryware - Mobile Banner ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}