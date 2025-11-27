/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Add allowed external image domains here
        domains: ['i.postimg.cc'],
        // remotePatterns provide more flexible matching (optional)
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
