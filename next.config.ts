import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apple requires the association file to be served as application/json.
        // It has no file extension, so Next would otherwise send it as
        // application/octet-stream and iOS would refuse to verify the domain.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
