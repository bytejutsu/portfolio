import getAssetPath from "@/utils/getAssetPath.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: getAssetPath(''),
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
