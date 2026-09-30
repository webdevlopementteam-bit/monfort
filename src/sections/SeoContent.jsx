"use client";

import {
  Home,
  PenTool,
  Building2,
  HardHat,
  Store,
  Truck,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const audiences = [
  { icon: Home, title: "Homeowners" },
  { icon: PenTool, title: "Interior Designers" },
  { icon: Building2, title: "Architects" },
  { icon: HardHat, title: "Contractors" },
  { icon: Store, title: "Dealers" },
  { icon: Truck, title: "Distributors" },
];

export default function SeoContent() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#258F94]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* ================= WHO WE WORK WITH ================= */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#258F94]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#258F94]">
              Who We Work With
            </span>
            <span className="h-[2px] w-8 bg-[#258F94]" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#142A3D] sm:text-3xl">
            Who We Work With
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            One sink or a bulk order, both are welcome.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 lg:grid-cols-6">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={index}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-[#f7f9f9] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#258F94]/30 hover:bg-white hover:shadow-[0_15px_35px_rgba(37,143,148,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#258F94]/10 text-[#258F94] transition-colors duration-300 group-hover:bg-[#258F94] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <p className="text-sm font-semibold text-[#142A3D]">
                  {item.title}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
