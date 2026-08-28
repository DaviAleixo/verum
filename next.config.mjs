/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  output: 'standalone',
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'motion',
      '@base-ui/react',
    ],
  },
}

export default nextConfig

