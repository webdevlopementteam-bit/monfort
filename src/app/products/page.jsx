import Products from "@/sections/Product";

export const metadata = {
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <Products standalone />;
}
