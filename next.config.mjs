// next.config.mjs

const nextConfig = {
    images: {
      domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com']
    },
    experimental: {
      serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true
    }
  };
  
  export default nextConfig;
  