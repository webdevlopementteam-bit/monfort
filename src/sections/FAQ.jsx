"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircleQuestion,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";




const faqs = [
  {
    question: "Who is a trusted sink manufacturer in Delhi?",
    answer:
      "Monfort is an established sink manufacturer in Delhi, working from Bawana Industrial Area since 2000. We make Indian, handmade, premium handmade, waterfall and quartz kitchen sinks and supply through 6,000+ dealers across India.",
  },
  {
    question: "Which material is best for a kitchen sink?",
    answer:
      "Stainless steel is the most popular choice for Indian kitchens. It is strong, hygienic, heat-resistant and easy to clean. Higher grades such as 304 resist rust and staining better.",
  },
  {
    question:
      "What is the difference between a handmade sink and an Indian sink?",
    answer:
      "Handmade sinks are generally made with more detailing and come in premium finishes like Matt, Nano Black, Gold, Mirror and Rose Gold. Indian sinks are the everyday option with a glossy finish. Handmade suits modern kitchens, and Indian suits regular family use.",
  },
  {
    question: "What is a 304 grade stainless steel sink?",
    answer:
      "304 grade is a type of stainless steel that resists rust and staining better than lower grades, which is why it is a common choice for kitchen sinks. Regular cleaning still matters, since hard water can leave white scale marks on any steel sink.",
  },
  {
    question: "What are the standard kitchen sink sizes in India?",
    answer:
      "Common sizes in inches include 14x16, 18x16, 20x17, 21x18, 22x18, 24x18, 30x18, 37x18 and 45x20. Larger sizes are available in some ranges. Measure your counter cut-out before ordering.",
  },
  {
    question: "Should I choose a single bowl or a double bowl sink?",
    answer:
      "A single bowl gives more room for large vessels and suits smaller kitchens. A double bowl lets you wash and rinse separately, which works well for busy households. Monfort offers both.",
  },
  {
    question: "What finishes are available for kitchen sinks?",
    answer:
      "Handmade sinks come in Matt, Nano Black, Gold, Mirror and Rose Gold, and Indian sinks in Glossy. The Metallic & Granite series comes in Black, Brown, Gray, Cera Dotted, Ivory Sand, Red Moon and Peach Ivory.",
  },
  {
    question: "What decides the price of a kitchen sink?",
    answer:
      "Price depends mainly on the steel grade, thickness, size, finish and type of sink. For an exact quote, share your size, model and quantity with the Monfort team.",
  },
  {
    question: "Does Monfort accept bulk, dealer or project orders?",
    answer:
      "Yes. Monfort accepts bulk, dealer and commercial project enquiries and delivers across India. Share your product category, size and quantity by phone, WhatsApp or the website enquiry form.",
  },
  {
    question: "How do I clean a stainless steel sink?",
    answer:
      "Rinse and wipe it dry after use to avoid water marks. Clean with mild soap and a soft cloth, and avoid steel wool or harsh chemicals. For white scale from hard water, wipe with diluted white vinegar and rinse well.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="relative overflow-hidden bg-white  py-10 lg:py-15 scroll-mt-24"
      id="faq"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34acb1]/5 blur-3xl" />

      {/* Decorative dots */}

      <div className="pointer-events-none absolute left-[8%] top-[20%] hidden h-2 w-2 rounded-full bg-[#34acb1]/30 sm:block" />

      <div className="pointer-events-none absolute right-[10%] top-[30%] hidden h-3 w-3 rounded-full bg-[#34acb1]/20 md:block" />

      <div className="pointer-events-none absolute bottom-[20%] left-[12%] hidden h-2 w-2 rounded-full bg-[#34acb1]/20 lg:block" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <Reveal direction="left" className="relative">
            {/* Section Label */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#34acb1]" />

              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#258F94] sm:text-sm sm:tracking-[4px]">
                FAQ
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-2xl font-semibold leading-[1.25] text-gray-900 sm:text-3xl lg:text-4xl">
              Everything You
              <br />
              <span className="font-medium text-[#34acb1]">
                Need To Know.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Have questions about our kitchen sinks, materials, designs or
              orders? We have answered some of the most common questions to help
              you choose the right sink for your kitchen.
            </p>

            {/* =================================================
                QUESTION CARD
            ================================================== */}

            <div className="relative mt-9 overflow-hidden rounded-[28px] bg-[#0B1112] p-6 shadow-2xl sm:p-8">
              {/* Glow */}

              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#34acb1]/20 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#34acb1]/10 blur-3xl" />

              <div className="relative z-10">
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#34acb1]/10 text-[#34acb1] ring-1 ring-[#34acb1]/30">
                  <MessageCircleQuestion size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
                  Still Have Questions?
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                  Our team is happy to help you with product selection,
                  specifications, availability and other enquiries.
                </p>

                <Link
                  href="#contact"
                  className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#34acb1] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#258F94] hover:shadow-[#34acb1]/30"
                >
                  Ask Us Anything
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-lg">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#258F94]">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Premium Quality
                  </p>

                  <p className="text-[11px] text-gray-500">
                    Reliable materials
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-lg">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#258F94]">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Expert Support
                  </p>

                  <p className="text-[11px] text-gray-500">
                    Here to assist you
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              RIGHT SIDE — FAQ ACCORDION
          ====================================================== */}

          <Reveal direction="right" className="relative">
            {/* Small top badge */}

            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-400">
                Frequently Asked Questions
              </p>

              <span className="hidden h-px flex-1 bg-gray-200 sm:ml-5 sm:block" />
            </div>

            {/* FAQ LIST */}

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isOpen
                        ? "border-[#34acb1]/40 bg-white shadow-[0_12px_35px_rgba(52,172,177,0.10)]"
                        : "border-gray-100 bg-gray-50 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-lg"
                    }`}
                  >
                    {/* Question Button */}

                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                    >
                      {/* Number */}

                      <span
                        className={`hidden shrink-0 text-sm font-bold transition-colors duration-300 sm:block ${
                          isOpen
                            ? "text-[#34acb1]"
                            : "text-gray-300 group-hover:text-[#34acb1]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <span
                        className={`flex-1 pr-2 text-sm font-bold leading-6 transition-colors duration-300 sm:text-base ${
                          isOpen
                            ? "text-[#258F94]"
                            : "text-gray-900 group-hover:text-[#258F94]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Plus / Minus */}

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-[#34acb1] text-white"
                            : "bg-white text-gray-500 shadow-sm group-hover:bg-[#E8F7F7] group-hover:text-[#258F94]"
                        }`}
                      >
                        {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                      </span>
                    </button>

                    {/* Answer */}

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-gray-100 px-5 pb-6 pt-4 sm:px-6">
                          <div className="flex gap-3">
                            {/* Teal line */}

                            <div className="mt-1 h-auto min-h-[40px] w-[2px] shrink-0 rounded-full bg-[#34acb1]" />

                            <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom info */}

            <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-[#34acb1]/10 bg-[#E8F7F7]/50 px-5 py-4 text-center sm:justify-start sm:text-left">
              <CheckCircle2 size={17} className="shrink-0 text-[#258F94]" />

              <p className="text-xs font-medium text-gray-600 sm:text-sm">
                Need help choosing the right sink?{" "}
                <Link
                  href="#contact"
                  className="font-bold text-[#258F94] transition-colors hover:text-[#34acb1]"
                >
                  Contact our team.
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* =====================================================
          BOTTOM DIVIDER
      ====================================================== */}

      <div className="mx-auto mt-10 flex max-w-7xl items-center gap-2 px-4 sm:mt-10 sm:gap-2 sm:px-6 lg:mt-15 lg:px-8">
        <div className="h-px flex-1 bg-gray-200" />

        <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[2.5px] text-[#34acb1] sm:text-[10px] sm:tracking-[4px]">
          Monfort Kitchen
        </span>

        <div className="h-px flex-1 bg-gray-200" />
      </div>
    </section>
  );
}
