"use client";

import { Reveal } from "@/components/motion/Reveal";

export default function SeoIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#258F94]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#258F94]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#258F94] sm:text-xs">
              Sink Manufacturer In Delhi
            </span>
          </div>

          <h1 className="text-2xl font-semibold leading-[1.3] tracking-tight text-[#142A3D] sm:text-3xl lg:text-4xl">
            Sink Manufacturer in Delhi: Monfort Kitchen Sinks
          </h1>

          <div className="mt-6 space-y-5 text-[15px] leading-7 text-gray-600 sm:text-base">
            <p>
              Your kitchen sink gets used more than almost anything else in
              the house. Heavy steel utensils, oily tawas, hard Delhi water
              and dozens of washes a day: it takes a lot of punishment. So
              when you&apos;re choosing a sink manufacturer, looks are only
              half the story. You want a sink that drains well, doesn&apos;t
              dent easily and still looks good after years of daily use.
            </p>
            <p>
              That&apos;s what we work on at Monfort. We are a sink
              manufacturer in Delhi, and since 2000 we have been making
              kitchen sinks and bathroom accessories at our own unit in
              Bawana Industrial Area.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
