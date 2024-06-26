/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flyfrogs.nance.app',
                port: '',
                pathname: '/images/**',
            }
        ]
    }
};

export default nextConfig;
