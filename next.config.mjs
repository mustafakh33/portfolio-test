// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
           {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      // يمكنك إضافة نطاقات أخرى هنا في المستقبل
      // مثال:
      // {
      //   protocol: 'https',
      //   hostname: 'images.pexels.com',
      // },
    ],
  },
};

export default nextConfig;