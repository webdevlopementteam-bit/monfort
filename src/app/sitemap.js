import {
  productCategories,
  bathroomAccessories,
  premiumAccessories,
} from "@/data.js";
import { SITE_URL } from "@/lib/seo";

const QUARTZ_SINK_SLUG = "quartz-sink";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "daily" },
    { path: "/about", priority: 0.8, changeFrequency: "daily" },
    { path: "/contact", priority: 0.8, changeFrequency: "daily" },
    { path: "/products", priority: 0.9, changeFrequency: "daily" },
    {
      path: "/products/kitchen-sinks",
      priority: 0.9,
      changeFrequency: "daily",
    },
    {
      path: "/products/bathroom-accessories",
      priority: 0.9,
      changeFrequency: "daily",
    },
    {
      path: "/products/premium-montfort-accessories",
      priority: 0.9,
      changeFrequency: "daily",
    },
  ];

  const categoryRoutes = [
    ...Object.keys(productCategories),
    QUARTZ_SINK_SLUG,
  ].map((category) => ({
    path: `/products/${category}`,
    priority: 0.7,
    changeFrequency: "daily",
  }));

  const bathroomRoutes = Object.keys(bathroomAccessories).map(
    (subcategory) => ({
      path: `/products/bathroom-accessories/${subcategory}`,
      priority: 0.6,
      changeFrequency: "daily",
    })
  );

  const premiumRoutes = Object.keys(premiumAccessories).map((series) => ({
    path: `/products/premium-montfort-accessories/${series}`,
    priority: 0.6,
    changeFrequency: "daily",
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...bathroomRoutes,
    ...premiumRoutes,
  ].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
