import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:"0.0.0.0",
    port:5173,
    allowedHosts: [
      'shark-mint-blindly.ngrok-free.app',  // your ngrok domain here
    ],
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
