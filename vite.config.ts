import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin personalizado para copiar .htaccess para o dist
const copyHtaccess = () => ({
  name: "copy-htaccess",
  closeBundle() {
    const src = path.resolve(__dirname, "public/.htaccess");
    const dest = path.resolve(__dirname, "dist/.htaccess");
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/formnovomembro/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    copyHtaccess(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
