/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    //basePath: process.env.NODE_ENV === 'production' ? '' : '',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    experimental: {
        appDir: true,
        fontLoaders: [
            { loader: "@next/font/google", options: { subsets: ["latin"] } },
        ],
    },
};

export default nextConfig;
