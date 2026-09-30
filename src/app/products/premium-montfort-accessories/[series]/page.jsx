import { notFound } from "next/navigation";
import { premiumAccessories } from "@/data.js";
import AccessoryCategoryPage from "@/sections/AccessoryCategory";

export function generateStaticParams() {
  return Object.keys(premiumAccessories).map((series) => ({ series }));
}

export async function generateMetadata({ params }) {
  const { series } = await params;
  return {
    alternates: {
      canonical: `/products/premium-montfort-accessories/${series}`,
    },
  };
}

export default async function PremiumSeriesPage({ params }) {
  const { series } = await params;
  const selected = premiumAccessories[series];

  if (!selected) {
    notFound();
  }

  return (
    <AccessoryCategoryPage
      title={selected.title}
      description={selected.description}
      image={selected.image}
      items={selected.items}
      badge="Premium Montfort Accessories"
      backHref="/products/premium-montfort-accessories"
      backLabel="Back to Premium Accessories"
    />
  );
}
