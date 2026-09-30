import Image from "next/image";
import {
  Award,
  Factory,
  ShieldCheck,
  LayoutGrid,
  Users,
  MessageCircle,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const features = [
  {
    icon: Award,
    title: "25+ Years of Experience",
    description:
      "We have been making kitchen sinks since 2000. Over the years, we have learned what Indian kitchens really need: strength, easy cleaning and a finish that lasts.",
  },
  {
    icon: Factory,
    title: "Our Own Large Production Unit",
    description:
      "Our production line at Bawana Industrial Area, Delhi, makes sinks in bulk. So whether you need one sink for your home or a bulk supply for a project, we can handle it.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Stainless Steel and Strict Quality Checks",
    description:
      "Every sink is made from premium stainless steel and checked for finish, drainage performance and corrosion resistance before it leaves our unit.",
  },
  {
    icon: LayoutGrid,
    title: "A Wide Range Under One Roof",
    description:
      "Indian, handmade, premium handmade, waterfall and quartz sinks, in single and double bowl designs, multiple sizes and designer finishes. We also make bathroom accessories, so you can find everything in one place.",
  },
  {
    icon: Users,
    title: "Trusted by 6,000+ Dealers Across India",
    description:
      "More than 6,000 dealers stock Monfort products, and our secure packing and logistics network delivers across the country, not just in Delhi.",
  },
  {
    icon: MessageCircle,
    title: "Guidance That Actually Helps",
    description:
      "Not sure which sink suits your kitchen? Share your counter size and how you use your kitchen, and our team will suggest the right option. Consultation is free, with no obligation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-10  lg:py-15 scroll-mt-24">
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#258F94]/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT ================= */}
          <Reveal direction="left">
            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#258F94]" />

              <span className="text-sm font-bold tracking-[0.18em] text-[#258F94]">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mb-5 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
              Why Choose Monfort as Your{" "}
              <span className="text-[#258F94]">Sink Manufacturer in Delhi?</span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              A sink is something you buy once and use for years, so it helps
              to choose with confidence. Here is why customers choose Monfort.
            </p>
          </Reveal>

          {/* ================= RIGHT ================= */}
          <Reveal direction="right" className="relative flex justify-center lg:justify-end">
            {/* Decorative Circle */}
            <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full border-[10px] border-[#258F94]/10 sm:h-28 sm:w-28" />

            {/* Decorative Circle */}
            <div className="absolute -bottom-6 -left-4 h-28 w-28 rounded-full border-[10px] border-[#258F94]/10 sm:h-36 sm:w-36" />

            {/* Image Container */}
            <div className="relative w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-[#258F94]/10 bg-[#258F94]/5 p-3 shadow-xl shadow-[#258F94]/10 sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <Image
                  src="/why-choose.webp"
                  alt="Why Choose Monfort Kitchens"
                  width={620}
                  height={620}
                  className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem
                key={index}
                className="group rounded-2xl border border-transparent bg-[#f7f9f9] p-5 transition-all duration-300 hover:border-[#258F94]/15 hover:bg-[#258F94]/5 hover:shadow-lg hover:shadow-[#258F94]/5 sm:p-6"
              >
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#258F94]/10 transition-all duration-300 group-hover:bg-[#258F94] group-hover:shadow-lg group-hover:shadow-[#258F94]/20">
                  <Icon className="h-6 w-6 text-[#34acb1] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#258F94]">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
