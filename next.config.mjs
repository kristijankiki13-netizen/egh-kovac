/** @type {import('next').NextConfig} */
const nextConfig = {
  // The project lives inside iCloud Drive (`~/Library/Mobile Documents/...`),
  // which flood-fills macOS file watchers and triggers
  // "Watchpack Error: EMFILE: too many open files".
  // Polling avoids the native kqueue limit entirely in dev.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules", "**/.next", "**/.git"],
      };
    }
    return config;
  },
};

export default nextConfig;
