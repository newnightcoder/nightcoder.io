/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  i18n: {
    locales: ["default", "en", "fr"],
    defaultLocale: "default",
    localeDetection: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;
