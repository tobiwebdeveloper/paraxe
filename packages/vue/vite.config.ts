import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
      cleanVueFileName: true,
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    lib: {
    entry: {
      index: resolve(process.cwd(), "src/index.ts"),
      resolver: resolve(process.cwd(), "src/resolver/index.ts"),
    },
    formats: ["es"],
    fileName: "[name]",
},

    rollupOptions: {
      external: ["vue", "@paraxe/core"],
    },
  },
});