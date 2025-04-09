import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/",
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:8000", // FastAPI backend
                changeOrigin: true,
                secure: false,
                // rewrite: path => path.replace(/^\/api/, '') // Uncomment if your API doesn't have /api prefix
            },
        },
    },
});
