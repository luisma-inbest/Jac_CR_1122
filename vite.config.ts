import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	base: "",
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "auto",
			devOptions: {
				enabled: true,
			},
			includeAssets: [
				"favicon.ico",
				"apple-touch-icon.png",
				"masked-icon.svg",
			],
			manifest: {
				name: "JAC CRM",
				short_name: "CRM",
				description: "PWA CRM JAC",
				theme_color: "#ffffff",
				icons: [
					{
						src: "src/assets/pwa/jacIcon_192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "src/assets/pwa/jacIcon_512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
	resolve: {
		alias: [
			{ find: "@", replacement: "/src" },
			{
				find: "@/components",
				replacement: "/src/components/",
			},
			{
				find: "@/components/UI",
				replacement: "/src/components/UI",
			},
		],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString();
					}
				},
			},
		},
	},
	server: {
		host: true,
		watch: {
			usePolling: true,
		},
	},
});
