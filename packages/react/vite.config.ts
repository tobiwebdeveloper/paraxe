import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    lib: {
      entry: {
        index: resolve(
          process.cwd(),
          "src/index.ts",
        ),
      },
      formats: ["es"],
      fileName: "[name]",
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@paraxe/core",
      ],
    },
  },
});