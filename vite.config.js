import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react(),
      // ViteMinifyPlugin({}),
      // compression({
      //   algorithm: "brotliCompress",
      // }),
    ],
    base: "/shoppingShotsClient/",
    build: {
      outDir: "buildFolder",
      assetsDir: "assetsFolder",
      assetsInlineLimit: 4096,
      sourcemap: mode === "dev",
      rollupOptions: {
        // external: (id) => {
        //   if (id.endsWith("html")) return true;
        // }, // Exclude image file types

        output: {
          dir: "./publicDeploy/deploy",
          entryFileNames: "bundle.js",
          assetFileNames: "assets/bundle[extname]",
        },
      },
    },
  });
};
