/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-s3-images-dir.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;

