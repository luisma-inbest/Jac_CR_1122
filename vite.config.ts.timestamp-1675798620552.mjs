// vite.config.ts
import { defineConfig } from "file:///Users/jorgesalgado/Documents/INBEST/GiantMotors/Jac_CR_1122/node_modules/vite/dist/node/index.js";
import react from "file:///Users/jorgesalgado/Documents/INBEST/GiantMotors/Jac_CR_1122/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///Users/jorgesalgado/Documents/INBEST/GiantMotors/Jac_CR_1122/node_modules/vite-plugin-pwa/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "My Awesome App",
        short_name: "MyApp",
        description: "My Awesome App description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      {
        find: "@/components",
        replacement: "/src/components/"
      },
      {
        find: "@/components/UI",
        replacement: "/src/components/UI"
      }
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    }
  },
  server: {
    host: true,
    watch: {
      usePolling: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvam9yZ2VzYWxnYWRvL0RvY3VtZW50cy9JTkJFU1QvR2lhbnRNb3RvcnMvSmFjX0NSXzExMjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qb3JnZXNhbGdhZG8vRG9jdW1lbnRzL0lOQkVTVC9HaWFudE1vdG9ycy9KYWNfQ1JfMTEyMi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvam9yZ2VzYWxnYWRvL0RvY3VtZW50cy9JTkJFU1QvR2lhbnRNb3RvcnMvSmFjX0NSXzExMjIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7Vml0ZVBXQX0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRiYXNlOiBcIlwiLFxuXHRwbHVnaW5zOiBbXG5cdFx0cmVhY3QoKSxcblx0XHRWaXRlUFdBKHtcblx0XHRcdHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXG5cdFx0XHRpbmplY3RSZWdpc3RlcjogXCJhdXRvXCIsXG5cdFx0XHRkZXZPcHRpb25zOiB7XG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0aW5jbHVkZUFzc2V0czogW1wiZmF2aWNvbi5pY29cIiwgXCJhcHBsZS10b3VjaC1pY29uLnBuZ1wiLCBcIm1hc2tlZC1pY29uLnN2Z1wiXSxcblx0XHRcdG1hbmlmZXN0OiB7XG5cdFx0XHRcdG5hbWU6IFwiTXkgQXdlc29tZSBBcHBcIixcblx0XHRcdFx0c2hvcnRfbmFtZTogXCJNeUFwcFwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJNeSBBd2Vzb21lIEFwcCBkZXNjcmlwdGlvblwiLFxuXHRcdFx0XHR0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXG5cdFx0XHRcdGljb25zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0c3JjOiBcInB3YS0xOTJ4MTkyLnBuZ1wiLFxuXHRcdFx0XHRcdFx0c2l6ZXM6IFwiMTkyeDE5MlwiLFxuXHRcdFx0XHRcdFx0dHlwZTogXCJpbWFnZS9wbmdcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNyYzogXCJwd2EtNTEyeDUxMi5wbmdcIixcblx0XHRcdFx0XHRcdHNpemVzOiBcIjUxMng1MTJcIixcblx0XHRcdFx0XHRcdHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0fSksXG5cdF0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczogW1xuXHRcdFx0e2ZpbmQ6IFwiQFwiLCByZXBsYWNlbWVudDogXCIvc3JjXCJ9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaW5kOiBcIkAvY29tcG9uZW50c1wiLFxuXHRcdFx0XHRyZXBsYWNlbWVudDogXCIvc3JjL2NvbXBvbmVudHMvXCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaW5kOiBcIkAvY29tcG9uZW50cy9VSVwiLFxuXHRcdFx0XHRyZXBsYWNlbWVudDogXCIvc3JjL2NvbXBvbmVudHMvVUlcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0YnVpbGQ6IHtcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0bWFudWFsQ2h1bmtzKGlkKSB7XG5cdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaWRcblx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdFx0LnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXVxuXHRcdFx0XHRcdFx0XHQuc3BsaXQoXCIvXCIpWzBdXG5cdFx0XHRcdFx0XHRcdC50b1N0cmluZygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0c2VydmVyOiB7XG5cdFx0aG9zdDogdHJ1ZSxcblx0XHR3YXRjaDoge1xuXHRcdFx0dXNlUG9sbGluZzogdHJ1ZSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLFNBQVEsb0JBQW1CO0FBQ2pZLE9BQU8sV0FBVztBQUNsQixTQUFRLGVBQWM7QUFLdEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLFFBQ1gsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNBLGVBQWUsQ0FBQyxlQUFlLHdCQUF3QixpQkFBaUI7QUFBQSxNQUN4RSxVQUFVO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTjtBQUFBLFlBQ0MsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDQyxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sRUFBQyxNQUFNLEtBQUssYUFBYSxPQUFNO0FBQUEsTUFDL0I7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2QsUUFBUTtBQUFBLFFBQ1AsYUFBYSxJQUFJO0FBQ2hCLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUNoQyxtQkFBTyxHQUNMLFNBQVMsRUFDVCxNQUFNLGVBQWUsRUFBRSxHQUN2QixNQUFNLEdBQUcsRUFBRSxHQUNYLFNBQVM7QUFBQSxVQUNaO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ04sWUFBWTtBQUFBLElBQ2I7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
