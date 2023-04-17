module.exports = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    reactStrictMode: true,
    env: {},
    images: {
        domains: ['res.cloudinary.com']
    },
    staticPageGenerationTimeout: 1000
};
