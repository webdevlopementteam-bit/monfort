"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Droplets,
  Hammer,
  Waves,
  Gem,
  Palette,
  Ruler,
  CircleDot,
  Wrench,
  ShieldCheck,
  ClipboardCheck,
  Phone,
  MapPin,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const sinkCategories = [
  {
    icon: Droplets,
    number: "01",
    title: "Indian Kitchen Sink",
    intro: [
      "Indian Kitchen Sinks are a practical choice for everyday kitchen activities. These sinks are designed to provide sufficient washing space for utensils, vegetables, and other kitchen items.",
      "Monfort offers stainless steel Indian Kitchen Sinks in different sizes and configurations. Their smooth finish and functional designs make them suitable for traditional and modern kitchens.",
    ],
    features: [
      "Stainless steel construction",
      "Smooth and glossy finish options",
      "Different sizes and bowl configurations",
      "Suitable for everyday kitchen cleaning",
      "Practical designs for Indian households",
    ],
    closing:
      "These sinks are suitable for customers looking for a simple and functional kitchen sink.",
  },
  {
    icon: Hammer,
    number: "02",
    title: "Handmade Kitchen Sink",
    intro: [
      "Handmade Kitchen Sinks are designed for customers who prefer a modern appearance with clean edges and a premium finish.",
      "Monfort offers handmade stainless steel kitchen sinks featuring contemporary designs that can complement modular kitchens. These sinks are an option for homeowners who want both functionality and an attractive kitchen setup.",
    ],
    features: [
      "Premium stainless steel construction",
      "Modern square and rectangular designs",
      "Precision-crafted appearance",
      "Smooth finishing",
      "Suitable for contemporary and modular kitchens",
    ],
    closing:
      "Handmade Kitchen Sinks can be a good choice for modern kitchen interiors where design and functionality are equally important.",
  },
  {
    icon: Waves,
    number: "03",
    title: "Waterfall Sinks",
    intro: [
      "Waterfall Sinks are a modern kitchen sink option featuring an integrated waterfall-style water outlet. Their design combines regular washing space with additional features for convenient kitchen use.",
      "Monfort offers Waterfall Sinks for customers who prefer an advanced and stylish kitchen setup. Depending on the selected model, these sinks may include additional washing accessories and integrated components.",
    ],
    features: [
      "Modern waterfall-style water outlet",
      "Stylish stainless steel design",
      "Integrated washing features",
      "Suitable for modern kitchen interiors",
      "Convenient space for washing vegetables and utensils",
    ],
    closing:
      "Customers interested in upgrading their kitchen with a contemporary sink design can explore Monfort's Waterfall Sink collection.",
  },
  {
    icon: Gem,
    number: "04",
    title: "Premium Handmade Kitchen Sink",
    intro: [
      "Premium Handmade Kitchen Sinks are designed for customers looking for a refined appearance, precise craftsmanship, and practical functionality.",
      "Monfort offers premium handmade stainless steel sinks with clean designs and smooth finishing. These sinks can complement modern residential kitchens and premium interior projects.",
    ],
    features: [
      "High-grade stainless steel options",
      "Premium handmade design",
      "Precise craftsmanship",
      "Smooth surface finishing",
      "Suitable for modern kitchen installations",
    ],
    closing:
      "Before selecting a model, buyers should confirm the stainless steel grade, thickness, bowl depth, and installation specifications.",
  },
  {
    icon: Palette,
    number: "05",
    title: "Quartz Sink",
    intro: [
      "Quartz Sinks are popular among homeowners who prefer a modern kitchen appearance with different colour options.",
      "Monfort offers Quartz Sinks in multiple designs, sizes, and finishes. These sinks can complement different countertop materials and kitchen colour themes.",
    ],
    features: [
      "Modern quartz sink designs",
      "Multiple colour and finish options",
      "Single bowl and selected double bowl designs",
      "Suitable for contemporary kitchens",
      "Attractive appearance for modular kitchen interiors",
    ],
    closing:
      "Quartz Sinks are worth considering for customers who want an alternative to traditional stainless steel kitchen sinks.",
  },
];

const collectionHighlights = [
  {
    title: "Multiple size options",
    text: "Explore listed sizes such as 14x16, 18x16, 20x17, 22x18 and 24x18, along with larger configurations.",
  },
  {
    title: "Single bowl designs",
    text: "A single bowl sink can be a practical choice for regular washing, rinsing vegetables and cleaning kitchen utensils.",
  },
  {
    title: "Selected double bowl models",
    text: "Double bowl configurations can help separate washing tasks, depending on the bowl sizes and available workspace.",
  },
  {
    title: "Glossy finish",
    text: "Selected models feature a glossy finish that can complement different kitchen interiors.",
  },
  {
    title: "Additional design features",
    text: "Certain models offer options such as back coating and a side-cut drainboard.",
  },
  {
    title: "Product and bulk enquiries",
    text: "Customers can contact Monfort to discuss model availability, pricing and order quantities.",
  },
];

const selectionSteps = [
  {
    icon: Ruler,
    title: "Measure your kitchen space",
    text: "Start by measuring the countertop cut-out and cabinet area. The sink should fit correctly while leaving sufficient space for plumbing connections and installation. Check the manufacturer's dimensions instead of relying only on the appearance of the product images.",
  },
  {
    icon: CircleDot,
    title: "Choose a suitable bowl configuration",
    text: "A single bowl sink may suit compact kitchens and everyday washing needs. A double bowl design can provide separate areas for washing and rinsing. Consider your usual kitchen activities and available counter space before selecting a configuration.",
  },
  {
    icon: ShieldCheck,
    title: "Check material specifications",
    text: "If you are considering a stainless steel sink, ask about the steel grade, thickness and other available specifications. These details help you compare products more accurately and understand whether a particular model meets your expectations.",
  },
  {
    icon: Wrench,
    title: "Consider cleaning and maintenance",
    text: "A glossy sink can provide a neat appearance, but regular maintenance is important. Clean the surface using a soft cloth and mild detergent. Avoid harsh abrasive cleaners and follow the care instructions provided for the selected product.",
  },
  {
    icon: ClipboardCheck,
    title: "Confirm installation requirements",
    text: "Before ordering, check the drainage arrangement, tap-hole requirements, cabinet compatibility and accessories included with the sink. Confirming these details in advance can help prevent installation issues.",
  },
];

const faqs = [
  {
    question: "Which kitchen sink manufacturer offers Indian kitchen sinks?",
    answer:
      "Monfort Kitchen Sinks offers an Indian Sink collection with different sizes, single bowl models and selected double bowl configurations. Contact the company to confirm available options.",
  },
  {
    question: "Where can I find kitchen sink manufacturers in Delhi NCR?",
    answer:
      "You can contact Monfort Kitchen Sinks in Bawana Industrial Area, Delhi, to enquire about Indian Sink models, product specifications and pricing.",
  },
  {
    question: "How can I choose the best kitchen sink manufacturer?",
    answer:
      "Compare product dimensions, material specifications, available designs, installation requirements, pricing and customer support. Choose a supplier whose products meet your requirements.",
  },
  {
    question: "What sizes are available in Monfort Indian Kitchen Sinks?",
    answer:
      "Listed sizes include 14x16, 18x16, 20x17, 22x18, 24x18 and larger configurations. Confirm the availability and specifications of your preferred model before ordering.",
  },
  {
    question: "Does Monfort offer single bowl and double bowl kitchen sinks?",
    answer:
      "The Indian Sink collection includes single bowl models and selected double bowl configurations. Check the product page for details about individual models.",
  },
  {
    question: "How do I choose the right kitchen sink size?",
    answer:
      "Measure your countertop cut-out and cabinet space. Compare the sink dimensions, bowl configuration and drainage requirements to ensure proper installation.",
  },
  {
    question: "What should I check before buying a stainless steel kitchen sink?",
    answer:
      "Check the steel grade, thickness, dimensions, finish, bowl depth and installation requirements. Ask the supplier to confirm the specifications of the selected model.",
  },
  {
    question: "Are glossy kitchen sinks easy to maintain?",
    answer:
      "Glossy kitchen sinks can be maintained through regular cleaning with a soft cloth and mild detergent. Avoid abrasive cleaners and follow the manufacturer's care recommendations.",
  },
  {
    question: "Can I enquire about bulk kitchen sink orders from Monfort?",
    answer:
      "Yes, you can contact Monfort Kitchen Sinks to enquire about bulk orders, available models, pricing and delivery arrangements.",
  },
  {
    question: "Where is Monfort Kitchen Sinks located?",
    answer:
      "Monfort Kitchen Sinks is located at G-108, Sector 3, Bawana Industrial Area, Delhi – 110039, India. Contact +91-9871667213 or +91-8383972282 for product enquiries.",
  },
];

export default function KitchenSinkManufacturerContent() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#258F94]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* ================= INTRO ================= */}
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#258F94]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#258F94]">
              Our Range
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#142A3D] sm:text-3xl">
            Best Kitchen Sink Manufacturer in Delhi NCR
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
            <p>
              Choosing the right kitchen sink is essential for creating a
              clean, comfortable and functional kitchen. From washing
              utensils to cleaning vegetables, a sink is used several times
              every day. Therefore, buyers should consider the size, design,
              material specifications and installation requirements before
              making a purchase. Monfort Kitchen Sinks offers a range of
              Indian kitchen sinks in different sizes and configurations to
              meet various kitchen requirements. As a{" "}
              <Link
                href="/products/kitchen-sinks"
                className="font-semibold text-[#258F94] underline underline-offset-2 hover:text-[#1f7377]"
              >
                kitchen sink manufacturer
              </Link>
              , the company provides options for homeowners, kitchen
              installers, retailers and bulk buyers looking for practical
              sink designs.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-[#142A3D] sm:text-xl">
            Explore Indian Kitchen Sinks at Monfort
          </h3>
          <div className="mt-3 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
            <p>
              Every kitchen has different requirements. Some homeowners
              prefer a simple stainless steel sink, while others look for
              modern designs with additional features.
            </p>
            <p>
              Monfort Kitchen Sinks offers five major kitchen sink categories
              that customers can explore according to their kitchen space,
              design preferences, and daily usage.
            </p>
          </div>
        </Reveal>

        {/* ================= 5 SINK CATEGORIES ================= */}
        <StaggerGroup className="mt-10 space-y-5">
          {sinkCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <StaggerItem
                key={index}
                className="rounded-3xl border border-gray-100 bg-[#f7f9f9] p-6 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0f2431] text-[#67cdd0]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#258F94]">
                      {category.number}
                    </p>
                    <h3 className="text-lg font-semibold text-[#142A3D] sm:text-xl">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {category.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#142A3D]">
                  Key Features:
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#258F94]"
                      />
                      <span className="text-sm leading-6 text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                  {category.closing}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* ================= WHY CHOOSE MONFORT ================= */}
        <Reveal className="mt-14">
          <h2 className="text-xl font-semibold text-[#142A3D] sm:text-2xl">
            Why Choose Monfort Kitchen Sinks?
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
            <p>
              Selecting a suitable kitchen sink involves more than choosing
              an attractive appearance. Buyers should also consider product
              variety, finishing, dimensions and the supplier&apos;s ability
              to explain the available options.
            </p>
            <p>
              Monfort Kitchen Sinks provides different Indian Sink models,
              allowing customers to explore options according to their
              kitchen space and intended use.
            </p>
          </div>

          <p className="mt-5 text-sm font-semibold text-[#142A3D] sm:text-base">
            Key features of the available collection include:
          </p>

          <StaggerGroup className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {collectionHighlights.map((item, index) => (
              <StaggerItem
                key={index}
                className="rounded-2xl bg-[#f7f9f9] p-5"
              >
                <p className="text-sm font-semibold text-[#142A3D]">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Features and dimensions vary by model, so always review the
            individual product details before confirming your selection.
          </p>
        </Reveal>

        {/* ================= HOW TO SELECT ================= */}
        <Reveal className="mt-14">
          <h2 className="text-xl font-semibold text-[#142A3D] sm:text-2xl">
            How to Select the Right Kitchen Sink
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Finding the right sink becomes easier when you understand your
            kitchen&apos;s requirements. Consider these important factors
            before purchasing.
          </p>

          <StaggerGroup className="mt-6 space-y-4">
            {selectionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StaggerItem
                  key={index}
                  className="flex gap-4 rounded-2xl bg-[#f7f9f9] p-5 sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#258F94]/10 text-[#258F94]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#142A3D] sm:text-base">
                      {index + 1}. {step.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Reveal>

        {/* ================= KITCHEN SINK MANUFACTURERS IN DELHI NCR ================= */}
        <Reveal className="mt-14">
          <h2 className="text-xl font-semibold text-[#142A3D] sm:text-2xl">
            Kitchen Sink Manufacturers in Delhi NCR
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
            <p>
              If you are comparing kitchen sink manufacturers in Delhi NCR,
              consider product specifications, available designs, supplier
              communication and purchasing requirements before making a
              decision.
            </p>
            <p>
              Monfort Kitchen Sinks is located in Bawana Industrial Area,
              Delhi, making it an option for buyers enquiring about its
              Indian Sink range. Homeowners, interior designers, kitchen
              installers, retailers and dealers can explore the available
              models and contact the company for product-related
              information.
            </p>
            <p>
              Customers comparing the{" "}
              <Link
                href="/"
                className="font-semibold text-[#258F94] underline underline-offset-2 hover:text-[#1f7377]"
              >
                best kitchen sink manufacturers in Delhi NCR
              </Link>{" "}
              should evaluate the actual product specifications, dimensions,
              finish and pricing rather than choosing a supplier based on
              price alone. For bulk orders, it is also useful to confirm
              quantity requirements, delivery arrangements, payment terms and
              model availability before placing an order.
            </p>
            <p>
              Sharing your preferred size, bowl configuration and estimated
              order quantity can help the Monfort team understand your
              requirements and respond with relevant information.
            </p>
          </div>
        </Reveal>

        {/* ================= FIND A SUITABLE SINK + CONTACT ================= */}
        <Reveal className="mt-14">
          <h2 className="text-xl font-semibold text-[#142A3D] sm:text-2xl">
            Find a Suitable Indian Kitchen Sink from Monfort
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
            <p>
              The right kitchen sink should fit your available space and
              support your everyday cleaning routine. By comparing
              dimensions, bowl configurations, finish and installation
              requirements, you can narrow down the options that suit your
              kitchen.
            </p>
            <p>
              <Link
                href="/contact"
                className="font-semibold text-[#258F94] underline underline-offset-2 hover:text-[#1f7377]"
              >
                Monfort Kitchen Sinks
              </Link>{" "}
              offers an Indian Sink collection with different sizes and
              selected design variations for customers to explore. Visit the
              product page to review the available options and contact the
              team for current pricing, product availability and bulk-order
              enquiries.
            </p>
            <p>
              If you need help comparing sink models, share your kitchen
              requirements with Monfort Kitchen Sinks before making a final
              decision.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#0f2431] p-6 sm:p-7">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#67cdd0]" />
              <p className="text-sm leading-6 text-gray-300 sm:text-base">
                G-108, Sector 3, Bawana Industrial Area, Delhi – 110039,
                India.
              </p>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-[#67cdd0]" />
              <p className="text-sm leading-6 text-gray-300 sm:text-base">
                <a
                  href="tel:+919871667213"
                  className="font-semibold text-white hover:text-[#67cdd0]"
                >
                  +91-9871667213
                </a>{" "}
                /{" "}
                <a
                  href="tel:+918383972282"
                  className="font-semibold text-white hover:text-[#67cdd0]"
                >
                  +91-8383972282
                </a>
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/products/indian-sink"
                className="inline-flex items-center gap-2 rounded-full bg-[#258F94] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1f7377]"
              >
                View Indian Sink Collection
              </Link>
              <a
                href="https://wa.me/917838951950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>

        {/* ================= FAQS ================= */}
        <Reveal className="mt-16">
          <h2 className="text-xl font-semibold text-[#142A3D] sm:text-2xl">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="mt-6 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#258F94]/40 bg-white shadow-[0_12px_35px_rgba(37,143,148,0.1)]"
                      : "border-gray-100 bg-[#f7f9f9]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span
                      className={`hidden shrink-0 text-sm font-bold sm:block ${
                        isOpen ? "text-[#258F94]" : "text-gray-300"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`flex-1 text-sm font-semibold leading-6 sm:text-base ${
                        isOpen ? "text-[#142A3D]" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#258F94] text-white"
                          : "bg-white text-gray-500 shadow-sm"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6">
                        <p className="text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
