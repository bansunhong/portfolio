import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/", // 중요! Vercel에서 JS 번들을 찾게 함
});
