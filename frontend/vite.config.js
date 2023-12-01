import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  optimizeDeps: {
    include: [
      "@chakra-ui/icons",
      "@chakra-ui/react",
      "@emotion/react",
      "@emotion/styled",
      "axios",
      "framer-motion",
      "react",
      "react-chips",
      "react-dom",
      "react-icons",
      "react-lottie",
      "react-notification-badge",
      "react-router-dom",
      "react-scrollable-feed",
      "socket.io-client",
    ],
  },
  build: {
    prebundle: true,
    minify: "terser",
    outDir: "dist",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "[name]-[hash].js",
        format: "esm",
      },
    },
  },
});
