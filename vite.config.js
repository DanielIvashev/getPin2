import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import compress from "vite-plugin-compress";
import { babel } from "@rollup/plugin-babel";

const path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), compress(), babel({ babelHelpers: "bundled" })],
});
