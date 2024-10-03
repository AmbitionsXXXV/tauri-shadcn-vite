import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { invoke } from "@tauri-apps/api/core"
import {} from "@tauri-apps/api/webview"
import { getCurrentWindow } from "@tauri-apps/api/window"
import { isEnabled } from "@tauri-apps/plugin-autostart"
import { platform } from "@tauri-apps/plugin-os"
import { useEffect, useState } from "react"

const platformName = platform()

function App() {
	const [greetMsg, setGreetMsg] = useState("")
	const [name, setName] = useState("")

	const appWindow = getCurrentWindow()

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name }))
	}

	useEffect(() => {
		const a = async () => {
			console.log(`registered for autostart? ${await isEnabled()}`)
		}

		a()
	}, [])

	return (
		<>
			<div data-tauri-drag-region className="h-8 bg-cyan-100">
				{platformName === "windows" && (
					<>
						<div className="titlebar-button" id="titlebar-minimize">
							<img
								src="https://api.iconify.design/mdi:window-minimize.svg"
								alt="minimize"
							/>
						</div>
						<div
							className="titlebar-button"
							id="titlebar-maximize"
							onClick={async () => await appWindow.maximize()}
						>
							<img
								src="https://api.iconify.design/mdi:window-maximize.svg"
								alt="maximize"
							/>
						</div>
						<div
							className="titlebar-button"
							id="titlebar-close"
							onClick={() => {
								appWindow.close()
							}}
						>
							<img src="https://api.iconify.design/mdi:close.svg" alt="close" />
						</div>
					</>
				)}
			</div>

			<div className="container">
				<h1 className="text-red-300 dark:text-red-900">Welcome to 1Tauri!</h1>

				<p>Click on the Tauri, Vite, and React logos to learn more.</p>

				<Button>Button</Button>

				<form
					className="row"
					onSubmit={(e) => {
						e.preventDefault()
						greet()
					}}
				>
					<Input
						id="greet-input"
						onChange={(e) => setName(e.currentTarget.value)}
						placeholder="Enter a name..."
					/>
					<Button type="submit">1Greet</Button>
				</form>

				<p>{greetMsg}</p>
			</div>
		</>
	)
}

export default App
