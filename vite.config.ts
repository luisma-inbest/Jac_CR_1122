import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	base: "src",
	plugins: [react()],
	resolve: {
		alias: [
			{find: "@", replacement: "/src"},
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
	server: {
		host: true,
		watch: {
			usePolling: true,
		},
	},
});
