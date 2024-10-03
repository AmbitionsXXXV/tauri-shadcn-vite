import react from "@vitejs/plugin-react"
import path from "node:path"
import url from "node:url"
import { defineConfig } from "vite"

const host = process.env.TAURI_DEV_HOST

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(
				url.fileURLToPath(new URL(".", import.meta.url)),
				"/src",
			),
			"@/lib": path.resolve(
				url.fileURLToPath(new URL(".", import.meta.url)),
				"/src/lib",
			),
			"@/hooks": path.resolve(
				url.fileURLToPath(new URL(".", import.meta.url)),
				"/src/hooks",
			),
			"@/registry": path.resolve(
				url.fileURLToPath(new URL(".", import.meta.url)),
				"/src/registry",
			),
			"@/components": path.resolve(
				url.fileURLToPath(new URL(".", import.meta.url)),
				"/src/components",
			),
		},
	},

	// Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
	//
	// 1. prevent vite from obscuring rust errors
	clearScreen: false,
	// 2. tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1420,
		strictPort: true,
		host: host || false,
		hmr: host
			? {
					protocol: "ws",
					host,
					port: 1421,
				}
			: undefined,
		watch: {
			// 3. tell vite to ignore watching `src-tauri`
			ignored: ["**/src-tauri/**"],
		},
	},
}))
