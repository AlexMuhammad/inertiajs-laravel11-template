import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            // ui: resolve('resources/js/components/ui/index.ts'),
            layouts: resolve("resources/js/layouts/index.ts"),
            components: resolve("resources/js/components"),
            "ziggy-js": resolve("vendor/tightenco/ziggy"),
        },
    },
});
