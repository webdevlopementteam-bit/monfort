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

// ================= FAQ DATA =================

// const faqs = [
//   {
//     question: "What types of kitchen sinks do you manufacture?",
//     answer:
//       "We manufacture a wide range of premium kitchen sinks including single bowl, double bowl, handmade, designer and modern stainless steel sinks. Our products are available in different sizes, finishes and designs to suit residential and commercial kitchens.",
//   },
//   {
//     question: "What material is used to manufacture your sinks?",
//     answer:
//       "Our kitchen sinks are manufactured using high-quality stainless steel selected for durability, strength, corrosion resistance and long-lasting performance.",
//   },
//   {
//     question: "Do you offer different sink sizes and designs?",
//     answer:
//       "Yes. We offer multiple sizes and designs to suit different kitchen layouts. Our range includes compact single and double bowl sinks, handmade sinks and designer models.",
//   },
//   {
//     question: "Are Monfort Kitchen sinks suitable for commercial kitchens?",
//     answer:
//       "Yes. Our sinks are suitable for homes as well as hotels, restaurants, commercial kitchens and other professional environments where durability and reliable performance are important.",
//   },
//   {
//     question: "What finishes are available?",
//     answer:
//       "We offer a variety of finishes and surface styles depending on the product model, including modern, premium and designer finishes that complement contemporary kitchen interiors.",
//   },
//   {
//     question: "Can I enquire about bulk or commercial orders?",
//     answer:
//       "Absolutely. We welcome bulk, commercial and project-based enquiries. Contact our team with your requirements and we can help you choose suitable products and quantities.",
//   },
//   {
//     question: "How can I contact Monfort Kitchen?",
//     answer:
//       "You can contact our team through the Get In Touch option on our website. Share your product requirements and our team will assist you with product information and enquiries.",
//   },
// ];
const faqs = [
  {
    question: "What types of kitchen sinks do you manufacture?",
    answer:
      "We offer a wide range of kitchen products including Handmade Sinks, Indian Kitchen Sinks, 304 Grade Sinks, Waterfall Sinks and Metallic & Granite Series. Our collection includes both single bowl and double bowl designs in multiple sizes and styles.",
  },
  {
    question: "What material is used to manufacture your sinks?",
    answer:
      "Our sink collection includes stainless steel products such as Handmade Sinks, Indian Kitchen Sinks and 304 Grade Sinks. We also offer a Metallic & Granite Series with a variety of decorative finishes and designs.",
  },
  {
    question: "Do you offer different sink sizes and designs?",
    answer:
      "Yes. Our sinks are available in multiple sizes, including popular options such as 14x16, 18x16, 20x17, 21x18, 22x18, 24x18, 30x18, 37x18, 45x20 and larger designs, depending on the product category.",
  },
  {
    question: "Are Monfort Kitchen sinks suitable for commercial kitchens?",
    answer:
      "Our product range includes durable sink designs available in different sizes and configurations, including single bowl and double bowl options. Customers can select a suitable model based on their kitchen requirements and usage needs.",
  },
  {
    question: "What finishes are available?",
    answer:
      "Available finishes depend on the product model. Our Handmade Sinks include finishes such as Matt, Nano Black, Gold, Mirror and Rose Gold. Indian Sinks are available in Glossy finish, while our Metallic & Granite Series includes finishes such as Black, Brown, Gray, Cera Dotted, Ivory Sand, Red Moon and Peach Ivory.",
  },
  {
    question: "Can I enquire about bulk or commercial orders?",
    answer:
      "Yes. You can contact our team with your product requirements, preferred sink category, size and quantity. We can assist you with suitable options from our Handmade, Indian, 304 Grade, Waterfall and Metallic & Granite collections.",
  },
  {
    question: "How can I contact Monfort Kitchen?",
    answer:
      "You can contact our team through the Get In Touch option on our website. Share the product category, preferred size or model you are interested in, and our team will assist you with further product information and enquiries.",
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

          <div className="relative">
            {/* Section Label */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#34acb1]" />

              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#258F94] sm:text-sm sm:tracking-[4px]">
                FAQ
              </span>
            </div>

            {/* Heading */}

            <h2 className="font-serif text-3xl font-bold leading-[1.15] text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Everything You
              <br />
              <span className="italic font-medium text-[#34acb1]">
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

                <h3 className="mt-6 font-serif text-2xl font-semibold text-white sm:text-3xl">
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
          </div>

          {/* =====================================================
              RIGHT SIDE — FAQ ACCORDION
          ====================================================== */}

          <div className="relative">
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
                        className={`hidden shrink-0 font-serif text-sm font-bold transition-colors duration-300 sm:block ${
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
          </div>
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
