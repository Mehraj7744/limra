

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Keep your existing Next.js configuration here
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);