import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/redline-diesel-performance",
  server: {
    port: 3000,
  },
});
