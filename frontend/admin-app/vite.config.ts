import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/admin/",
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
    server: {
        port: 3001,
        proxy: {
            "/admin/api": {
                target: "http://localhost:8000", // FastAPI backend
                changeOrigin: true,
                secure: false,
                // rewrite: path => path.replace(/^\/admin/, '') // Uncomment if your API doesn't have /admin prefix
            },
        },
    },
});
