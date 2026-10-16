/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/kitchen-sinks",
        destination: "/products/kitchen-sinks-manufacturer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
