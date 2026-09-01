import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Ruler,
  Sparkles,
  Package,
} from "lucide-react";

export default function CategoryPage({
  title,
  description,
  image,
  data,
  backHref = "/products",
}) {
  // Check whether this category uses range instead of size
  const isRangeCategory = data.some((item) => item.range);

  // Check whether any item has sizes
  const hasSizes = data.some(
    (item) =>
      item.size &&
      (Array.isArray(item.size) ? item.size.length > 0 : item.size),
  );

  // Get all unique sizes
  const uniqueSizes = [
    ...new Set(
      data.flatMap((item) => {
        if (!item.size) return [];

        return Array.isArray(item.size) ? item.size : [item.size];
      }),
    ),
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 py-10 lg:py-16">
      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#258F94]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#258F94] transition-colors hover:text-[#207c80]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        {/* ================= HERO ================= */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#258F94] shadow-md backdrop-blur-sm">
              Product
            </div>

            <div className="relative aspect-[4/3] bg-[#258F94]/5">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-105 sm:p-12"
              />
            </div>
          </div>

          {/* Product Information */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#258F94]" />

              <span className="text-sm font-bold tracking-[0.18em] text-[#258F94]">
                OUR PRODUCTS
              </span>

              <span className="h-[2px] w-10 bg-[#258F94]" />
            </div>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <div className="mt-5 h-[3px] w-16 bg-[#258F94]" />

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              {description}
            </p>

            {/* Quick Stats */}
            <div
              className={`mt-8 grid gap-4 ${
                hasSizes ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
              }`}
            >
              {/* Variants */}
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <Package className="mb-2 h-5 w-5 text-[#258F94]" />

                <p className="text-2xl font-bold text-gray-900">
                  {data.length}
                </p>

                <p className="mt-1 text-xs font-medium text-gray-500">
                  Variants
                </p>
              </div>

              {/* Sizes */}
              {hasSizes && (
                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <Ruler className="mb-2 h-5 w-5 text-[#258F94]" />

                  <p className="text-2xl font-bold text-gray-900">
                    {uniqueSizes.length}
                  </p>

                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Sizes
                  </p>
                </div>
              )}

              {/* Quality */}
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <Sparkles className="mb-2 h-5 w-5 text-[#258F94]" />

                <p className="text-2xl font-bold text-gray-900">Premium</p>

                <p className="mt-1 text-xs font-medium text-gray-500">
                  Quality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PRODUCT DETAILS ================= */}
        <div className="mt-16 lg:mt-20">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#258F94]" />

              <span className="text-sm font-bold tracking-[0.18em] text-[#258F94]">
                PRODUCT DETAILS
              </span>

              <span className="h-[2px] w-10 bg-[#258F94]" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Available <span className="text-[#258F94]">Models</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Explore the available sizes, finishes and specifications of our{" "}
              {title.toLowerCase()} range.
            </p>
          </div>

          {/* ================= DESKTOP TABLE ================= */}
          <div className="mt-10 hidden overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#258F94] text-white">
                    {/* Code */}
                    {data.some((item) => item.code) && (
                      <th className="px-6 py-5 text-sm font-bold">Code</th>
                    )}

                    {/* Range / Size */}
                    {isRangeCategory ? (
                      <th className="px-6 py-5 text-sm font-bold">Range</th>
                    ) : (
                      <th className="px-6 py-5 text-sm font-bold">Size</th>
                    )}

                    {/* Bowl */}
                    {data.some((item) => item.bowl) && (
                      <th className="px-6 py-5 text-sm font-bold">Bowl</th>
                    )}

                    {/* Weight */}
                    {data.some((item) => item.weightKg !== undefined) && (
                      <th className="px-6 py-5 text-sm font-bold">Weight</th>
                    )}

                    {/* Polish */}
                    {data.some((item) => item.polish) && (
                      <th className="px-6 py-5 text-sm font-bold">Polish</th>
                    )}

                    {/* Finish */}
                    {data.some((item) => item.finish) && (
                      <th className="px-6 py-5 text-sm font-bold">Finish</th>
                    )}

                    {/* Options */}
                    {data.some((item) => item.options?.length > 0) && (
                      <th className="px-6 py-5 text-sm font-bold">Options</th>
                    )}

                    {/* Notes */}
                    {data.some((item) => item.notes) && (
                      <th className="px-6 py-5 text-sm font-bold">Notes</th>
                    )}

                    {/* Sizes for Range based products */}
                    {isRangeCategory && hasSizes && (
                      <th className="px-6 py-5 text-sm font-bold">Sizes</th>
                    )}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className="transition-colors duration-200 hover:bg-[#258F94]/5"
                    >
                      {/* Code */}
                      {data.some((item) => item.code) && (
                        <td className="px-6 py-5">
                          <span className="font-bold text-[#258F94]">
                            {item.code || "-"}
                          </span>
                        </td>
                      )}

                      {/* Range / Size */}
                      <td className="px-6 py-5">
                        <span className=" font-semibold text-gray-900">
                          {isRangeCategory
                            ? item.range || "-"
                            : item.size || "-"}
                        </span>
                      </td>

                      {/* Bowl */}
                      {data.some((item) => item.bowl) && (
                        <td className="px-6 py-5 text-gray-600">
                          {item.bowl || "-"}
                        </td>
                      )}

                      {/* Weight */}
                      {data.some((item) => item.weightKg !== undefined) && (
                        <td className="px-6 py-5 text-gray-600">
                          {item.weightKg !== undefined
                            ? `${item.weightKg} Kg`
                            : "-"}
                        </td>
                      )}

                      {/* Polish */}
                      {data.some((item) => item.polish) && (
                        <td className="px-6 py-5 text-gray-600">
                          {item.polish || "-"}
                        </td>
                      )}

                      {/* Finish */}
                      {data.some((item) => item.finish) && (
                        <td className="px-6 py-5">
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(item.finish) ? (
                              item.finish.map((finish) => (
                                <span
                                  key={finish}
                                  className="rounded-full bg-[#258F94]/10 px-3 py-1 text-xs font-semibold text-[#258F94]"
                                >
                                  {finish}
                                </span>
                              ))
                            ) : item.finish ? (
                              <span className="rounded-full bg-[#258F94]/10 px-3 py-1 text-xs font-semibold text-[#258F94]">
                                {item.finish}
                              </span>
                            ) : (
                              "-"
                            )}
                          </div>
                        </td>
                      )}

                      {/* Options */}
                      {data.some((item) => item.options?.length > 0) && (
                        <td className="px-6 py-5">
                          {item.options?.length > 0 ? (
                            <div className="space-y-1">
                              {item.options.map((feature) => (
                                <div
                                  key={feature}
                                  className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                  <Check className="h-4 w-4 text-[#258F94]" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          ) : (
                            "-"
                          )}
                        </td>
                      )}

                      {/* Notes */}
                      {data.some((item) => item.notes) && (
                        <td className="px-6 py-5 text-sm text-gray-600">
                          {item.notes || "-"}
                        </td>
                      )}

                      {/* Sizes for Range based products */}
                      {isRangeCategory && hasSizes && (
                        <td className="px-6 py-5">
                          {item.size ? (
                            <div className="flex flex-wrap gap-2">
                              {(Array.isArray(item.size)
                                ? item.size
                                : [item.size]
                              ).map((size) => (
                                <span
                                  key={size}
                                  className="rounded-full bg-[#258F94]/10 px-3 py-1 text-xs font-semibold text-[#258F94]"
                                >
                                  {size}
                                </span>
                              ))}
                            </div>
                          ) : (
                            "-"
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ================= MOBILE CARDS ================= */}
          <div className="mt-10 grid gap-5 md:hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#258F94]">
                      {isRangeCategory ? "Range" : "Model"}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      {isRangeCategory
                        ? item.range ||
                          `Model ${String(index + 1).padStart(2, "0")}`
                        : item.code ||
                          `Model ${String(index + 1).padStart(2, "0")}`}
                    </h3>
                  </div>

                  {/* Size badge for normal products */}
                  {!isRangeCategory && item.size && (
                    <div className="rounded-full bg-[#258F94]/10 px-3 py-1.5">
                      <span className="text-sm font-bold text-[#258F94]">
                        {item.size}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="mt-5 space-y-4">
                  {/* Size for PTMT / Range products */}
                  {isRangeCategory && item.size && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Size
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {(Array.isArray(item.size)
                          ? item.size
                          : [item.size]
                        ).map((size) => (
                          <span
                            key={size}
                            className="rounded-full bg-[#258F94]/10 px-3 py-1.5 text-xs font-semibold text-[#258F94]"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bowl */}
                  {item.bowl && <DetailRow label="Bowl" value={item.bowl} />}

                  {/* Weight */}
                  {item.weightKg !== undefined && (
                    <DetailRow label="Weight" value={`${item.weightKg} Kg`} />
                  )}

                  {/* Polish */}
                  {item.polish && (
                    <DetailRow label="Polish" value={item.polish} />
                  )}

                  {/* Finish */}
                  {item.finish && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Finish
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {Array.isArray(item.finish) ? (
                          item.finish.map((finish) => (
                            <span
                              key={finish}
                              className="rounded-full bg-[#258F94]/10 px-3 py-1.5 text-xs font-semibold text-[#258F94]"
                            >
                              {finish}
                            </span>
                          ))
                        ) : (
                          <span className="rounded-full bg-[#258F94]/10 px-3 py-1.5 text-xs font-semibold text-[#258F94]">
                            {item.finish}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Options */}
                  {item.options?.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Options
                      </p>

                      <div className="mt-2 space-y-2">
                        {item.options.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#258F94]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  {item.notes && <DetailRow label="Notes" value={item.notes} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#258F94] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#258F94]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#207c80] hover:shadow-xl"
          >
            Enquire About This Product
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================= DETAIL ROW ================= */

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <p className="text-right text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}
