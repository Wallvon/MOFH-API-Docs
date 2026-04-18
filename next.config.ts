import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // https://nextra.site/docs/file-conventions/mdx-components-file#module-not-found-cant-resolve-next-mdx-import-source-file
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
};

const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig);
