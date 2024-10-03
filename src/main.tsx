import { ThemeProvider } from "@/store/ThemeProvider"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeProvider defaultTheme="system" storageKey="ui-theme">
		<App />
	</ThemeProvider>,
)
