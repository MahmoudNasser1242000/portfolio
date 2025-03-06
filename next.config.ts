import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/gfvdpcoq/production/**'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);
