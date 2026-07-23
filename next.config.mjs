import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  /* config options here */
=======
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/compiler-runtime": "react-compiler-runtime",
    };
    return config;
  },
>>>>>>> 787f409bb4eb7f44a75dfb3c23bbef6ec02b550c
};

export default withNextIntl(nextConfig);
