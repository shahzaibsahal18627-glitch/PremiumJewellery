import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deployed on Vercel, serve assets from root; otherwise use GitHub Pages subpath in production.
const isVercel = Boolean(process.env.VERCEL);
const basePath = isVercel ? '/' : process.env.NODE_ENV === 'production' ? '/Premium-Jewellery/' : '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
});