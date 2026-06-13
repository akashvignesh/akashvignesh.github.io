import type { NextConfig } from "next";

// Set by the GitHub Pages deploy workflow (e.g. "/my-portfolio").
// Empty locally so `next dev` serves from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` so it can be hosted on GitHub Pages.
  output: "export",
  basePath: basePath || undefined,
  // GitHub Pages has no image optimization server.
  images: { unoptimized: true },
  // Emit `about/index.html` instead of `about.html` so paths resolve on Pages.
  trailingSlash: true,
};

export default nextConfig;
