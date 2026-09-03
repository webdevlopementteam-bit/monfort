import {
  Lightbulb,
  PencilRuler,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Requirement Analysis",
    description:
      "We understand your requirements, preferred dimensions, finish, and application to recommend the ideal kitchen sink solution.",
  },
  {
    icon: PencilRuler,
    title: "Design & Engineering",
    description:
      "Our experts create precise designs using advanced manufacturing techniques for superior functionality.",
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description:
      "Every sink is manufactured using premium stainless steel with modern machinery and skilled craftsmanship.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Each product undergoes strict quality checks for durability, finishing, drainage performance, and corrosion resistance.",
  },
  {
    icon: Truck,
    title: "Packaging & Delivery",
    description:
      "Products are securely packed and delivered across India through our reliable logistics network.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-10 lg:py-15 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 shadow-sm">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-10 right-16 w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 opacity-70 hidden sm:block" />
          <div className="pointer-events-none absolute bottom-24 -right-14 w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 opacity-60 hidden lg:block" />
          <div className="pointer-events-none absolute -bottom-16 left-1/3 w-28 h-28 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 opacity-60 hidden sm:block" />

          {/* Heading */}
          <div className="relative z-10 mb-16 lg:mb-24">
            <span className="text-red-600 uppercase tracking-[4px] font-semibold text-sm">
              Our Process
            </span>

            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-gray-900 leading-[1.05]">
              How We
              <br />
              Work?
            </h2>
          </div>

          {/* Zigzag Steps */}
          <div className="relative z-10">
            {/* Dashed connector arrows (desktop only) */}
            <svg
              viewBox={`0 0 ${steps.length * 100} 300`}
              preserveAspectRatio="none"
              className="hidden lg:block absolute inset-0 w-full h-full"
            >
              <defs>
                <marker
                  id="howwework-arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L8,4 L0,8 Z" fill="#D1D5DB" />
                </marker>
              </defs>

              {steps.slice(0, -1).map((_, i) => {
                const circleFirstA = i % 2 === 0;
                const circleFirstB = (i + 1) % 2 === 0;

                const x1 = i * 100 + 50;
                const x2 = (i + 1) * 100 + 50;
                const y1 = circleFirstA ? 56 : 244;
                const y2 = circleFirstB ? 56 : 244;

                return (
                  <path
                    key={i}
                    d={`M ${x1} ${y1} C ${x1 + 60} ${y1}, ${x2 - 60} ${y2}, ${x2} ${y2}`}
                    fill="none"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    markerEnd="url(#howwework-arrow)"
                  />
                );
              })}
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-14 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const circleFirst = index % 2 === 0;

                const circleBlock = (
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-red-100 p-2 shadow-md">
                      <div className="w-full h-full rounded-full bg-[#34acb1] flex items-center justify-center">
                        <Icon size={34} className="text-white" />
                      </div>
                    </div>
                  </div>
                );

                const captionBlock = (
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-extrabold text-gray-900">
                      0{index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-6">
                      {step.description}
                    </p>
                  </div>
                );

                return (
                  <div
                    key={index}
                    className="flex flex-col gap-6 lg:h-[300px] lg:justify-between"
                  >
                    {circleFirst ? (
                      <>
                        {circleBlock}
                        {captionBlock}
                      </>
                    ) : (
                      <>
                        <div className="max-sm:order-2">{captionBlock}</div>
                        <div className="max-sm:order-1">{circleBlock}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
