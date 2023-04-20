import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

import * as path from "path";

const PWAPlugin = require("./pwa.config.js");

// https://vitejs.dev/config/
export default defineConfig({
	base: "",
	plugins: [react(), VitePWA(PWAPlugin)],
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
