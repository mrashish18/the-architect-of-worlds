import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'three',
    'three-stdlib',
    '@react-three/fiber',
    '@react-three/drei',
    '@react-three/postprocessing',
  ],
}

export default nextConfig
