import { defineConfig } from "vite"
import { resolve } from "node:path"
import dts from "vite-plugin-dts"
import { lobaBuildId } from "./scripts/build-id"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      output: {
        assetFileNames: "[name][extname]",
      },
    },
    cssCodeSplit: false,
    copyPublicDir: false,
  },
  plugins: [
    dts({
      include: ["./src"],
    }),
    lobaBuildId(),
  ],
})

