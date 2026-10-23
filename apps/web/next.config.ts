import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Los módulos del workspace se compilan junto con la app.
  transpilePackages: ["@aluvi/shared"],
};

export default nextConfig;
