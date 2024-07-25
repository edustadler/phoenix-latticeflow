if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging11.latticeflow.ai',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https', // Use 'https' directly as a string
        hostname: 'secure.gravatar.com',
        port: '', // Leaving port empty if not specifically required
        pathname: '/avatar/**', // Match the correct path pattern for Gravatar
      },
    ],
  },
};
