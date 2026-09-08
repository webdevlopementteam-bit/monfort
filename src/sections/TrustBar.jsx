"use client";

import {
  ShieldCheck,
  Factory,
  Truck,
  Award,
  Users,
  Sparkles,
} from "lucide-react";

const items = [
  { icon: Award, label: "25+ Years Of Excellence" },
  { icon: Factory, label: "Large Scale Production Unit" },
  { icon: ShieldCheck, label: "Premium Stainless Steel" },
  { icon: Users, label: "6000+ Dealers Nationwide" },
  { icon: Truck, label: "Pan India Delivery" },
  { icon: Sparkles, label: "Modern & Designer Finishes" },
];

export default function TrustBar() {
  const loopItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0B1112] py-5 sm:py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0B1112] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0B1112] to-transparent sm:w-32" />

      <div className="marquee-track flex w-max items-center gap-10 sm:gap-16">
        {loopItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#34acb1]/10 text-[#34acb1] ring-1 ring-[#34acb1]/25">
                <Icon size={16} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[2px] text-gray-300 sm:text-sm">
                {item.label}
              </span>
              <span className="ml-6 h-1.5 w-1.5 rounded-full bg-[#34acb1]/40 sm:ml-10" />
            </div>
          );
        })}
      </div>

      <style>{`
        .marquee-track {
          animation: monfort-marquee 28s linear infinite;
        }
        @keyframes monfort-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
