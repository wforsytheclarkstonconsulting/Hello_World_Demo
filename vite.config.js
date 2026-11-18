import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
    include: ["react", "react-dom/client"],
  },
});
